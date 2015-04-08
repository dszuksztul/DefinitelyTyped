/// <reference path="jira.d.ts" />
import Dialog = require("jira/dialog/dialog");
import Events = require("jira/util/events");

Events.bind("aui-dropdown2-show-before", (event: JQueryEventObject, menuId: string) => {});
Events.bind("aui-dropdown2-show-after", (event: JQueryEventObject, menuId: string) => {});
