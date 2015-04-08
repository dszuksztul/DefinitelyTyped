/// <reference path="dialog.d.ts" />
import Dialog = require("jira/dialog/dialog");
import Events = require("jira/util/events");

// jira/dialog/dialog
Events.bind("dialogContentReady", (event: JQueryEventObject, dialog: Dialog) => {});
Events.bind("beforeShow", (event: JQueryEventObject, dialogId: string) => {});
Events.bind("Dialog.hide", (event: JQueryEventObject, dialog: Dialog, reason: string, dialogId: string) => {});
