/// <reference path="events.d.ts" />
import Events = require("jira/util/events");

// jira/util/events
Events.bind("someEvent", (event: JQueryEventObject) => {});
Events.unbind("someEvent", (event: JQueryEventObject) => {});
Events.trigger("someEvent", {});
Events.trigger("someEvent", [{}]);
