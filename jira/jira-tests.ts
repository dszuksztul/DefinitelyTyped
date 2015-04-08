/// <reference path="jira.d.ts" />
import Dialog = require("jira/dialog/dialog");
import Events = require("jira/util/events");
import aui = require("aui");

// jira/util/events
Events.bind("someEvent", (event: JQueryEventObject) => {});
Events.unbind("someEvent", (event: JQueryEventObject) => {});
Events.trigger("someEvent", {});
Events.trigger("someEvent", [{}]);

// jira/dialog/dialog
Events.bind("dialogContentReady", (event: JQueryEventObject, dialog: Dialog) => {});
Events.bind("beforeShow", (event: JQueryEventObject, dialogId: string) => {});
Events.bind("Dialog.hide", (event: JQueryEventObject, dialog: Dialog, reason: string, dialogId: string) => {});

// general
Events.bind("aui-dropdown2-show-before", (event: JQueryEventObject) => {});
Events.bind("aui-dropdown2-show-after", (event: JQueryEventObject) => {});

// aui dialog 2
Events.bind("aui-dropdown2-show", (event: JQueryEventObject, options: aui.AUIDropdown2Options) => {});
