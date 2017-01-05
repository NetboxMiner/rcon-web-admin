"use strict";
/**
 * Translations
 */

var lang = {};

/**
 * The current language
 * @type {string}
 */
lang.language = "en";

/**
 * Just get a translation value for given key
 * @param {string} key
 * @param {object=} params
 * @return {string}
 */
lang.get = function (key, params) {
    var v = key;
    if (typeof lang.values[lang.language] != "undefined" && typeof lang.values[lang.language][key] != "undefined") {
        v = lang.values[lang.language][key];
    } else if (typeof lang.values["en"] != "undefined" && typeof lang.values["en"][key] != "undefined") {
        v = lang.values["en"][key];
    }
    if (typeof params != "undefined") {
        for (var i in params) {
            if (params.hasOwnProperty(i)) {
                v = v.replace(new RegExp("{" + i + "}", "ig"), params[i]);
            }
        }
    }
    return v;
};

/**
 * Replace all placeholders in html with proper translation values
 */
lang.replaceInHtml = function () {
    var el = $("body").find("[data-translate]");
    el.each(function () {
        $(this).html(lang.get($(this).attr("data-translate")));
    });
    el.removeAttr("data-translate-property");
    el = $("body").find("[data-translate-property]");
    el.each(function () {
        var s = $(this).attr("data-translate-property").split(",");
        $(this).attr(s[0], lang.get(s[1]));
    });
    el.removeAttr("data-translate-property");
};

/**
 * The translation values
 * @type {object.<string, object<string, string>>}
 */
lang.values = {"en": {}, "de": {}};

// en values
lang.values.en = {
    "users.title": "User Control Center",
    "users.username.title": "Username",
    "users.username.info": "Only A-Z, Numbers, - and _ allowed",
    "users.password.title": "Password",
    "users.password.info": "Repeat it, will be saved as hash",
    "users.admin.title": "Administrator",
    "users.admin.info": "Admin can manage everything, User is only allowed to manage own assigned servers",
    "users.error.pwmatch": "Password did not match",
    "users.missing.admin": "At least one administrator must exist in user database",
    "settings.title": "Settings",
    "settings.language.title": "Language",
    "settings.language.desc": "Select the language for the web interface",
    "servers.title": "Server Management",
    "servers.name.title": "Name",
    "servers.name.info": "Set an individual name for this server, appear in lists",
    "servers.game.title": "Game",
    "servers.game.info": "Select a specific game for this server",
    "servers.game.other": "Other",
    "servers.host.title": "Server Host",
    "servers.host.info": "IP or domain",
    "servers.port.title": "Server Port",
    "servers.port.info": "The one that means 'server.port' in console",
    "servers.rcon_port.title": "RCON Port",
    "servers.rcon_port.info": "The one that means 'rcon.port' in console",
    "servers.rcon_password.title": "RCON Password",
    "servers.rcon_password.info": "Will be stored as cleartext in database. Required to run background " +
    "cronjobs for scheduled tasks. Don't panic, it's not readable without server access." +
    "The one that means 'rcon.password' in console",
    "servers.users.title": "Assigned users",
    "servers.users.info": "Usernames separated with comma, only the given user's will see this server",
    "delete.confirm": "Are you sure? This cannot be undone!",
    "login.remember": "Remember me",
    "login.title": "Welcome",
    "login.success": "Hello",
    "login.failed": "Login failed",
    "logout.title": "Bye bye",
    "logout": "Logout",
    "index.pickserver": "Pick a server",
    "index.addwidget": "Add a widget",
    "index.noserver": "Please choose a server",
    "index.nowidgets": "No widgets added, time to start with it.",
    "index.serveroffline": "The current selected server is not available anymore. Maybe gone offline?",
    "index.widget.delete": "Delete this widget",
    "index.widget.size.title": "Widget size",
    "index.widget.size.info": "The size in the layout.",
    "index.widget.size.value.small": "Small | 3 per row",
    "index.widget.size.value.medium": "Medium | 2 per row",
    "index.widget.size.value.large": "Large | 1 per row",
    "index.widget.position.title": "Widget position",
    "index.widget.position.info": "The layout position for this widget in ascending order.",
    "index.widget.layout.save": "You need to reload the page to see the changes",
    "index.tooltip.options": "Options",
    "index.tooltip.layout": "Layout",
    "index.tooltip.readme": "Readme",
    "index.widget.error.id": "Widget.id must begin with an a-z character and should only contain: a-z, 0-9, -, _",
    "index.widget.add.error": "Widget not added, it does already exist",
    "server.disconnect": "Rcon server disconnected",
    "widgets.title": "Widgets",
    "widgets.installed": "Installed widgets",
    "widgets.games": "Available for those games",
    "widgets.update": "Update widget",
    "widgets.delete": "Delete widget",
    "dashboard": "Dashboard",
    "cancel": "Cancel",
    "save": "Save",
    "save.edited": "Save edited data",
    "saved": "Saved",
    "delete": "Delete",
    "deleted": "Deleted",
    "edit": "Edit",
    "edited": "Edited",
    "submit": "Submit",
    "submitted": "Submitted",
    "yes": "Yes",
    "no": "No",
    "on": "On",
    "off": "Off",
    "sure": "Are you sure?",
    "modal.ok": "Ok",
    "modal.accept": "Accept",
    "modal.cancel": "Cancel",
    "modal.title.alert": "Information",
    "modal.title.confirm": "Confirmation",
    "modal.title.prompt": "Prompt",
    "access.denied": "Access denied",
    "socket.disconnect": "Connection to backend closed, automatically trying to reconnect in 5 seconds..."
};