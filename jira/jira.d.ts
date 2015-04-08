// Type definitions for JIRA 7.0
// Project: https://stash.atlassian.com/projects/JIRA/repos/jira/
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="dialog/dialog.d.ts" />
/// <reference path="util/events.d.ts" />

declare module "jira/util/events" {
    // Attach a callback when an application header menu is clicked.
    export function bind(eventName: 'aui-dropdown2-show-before', callback: (event: JQueryEventObject, menuId: string) => any): void;
    // Attach a callback when an application header menu is actually presented.
    export function bind(eventName: 'aui-dropdown2-show-after', callback: (event: JQueryEventObject, menuId: string) => any): void;
}
