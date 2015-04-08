/// <reference path="../../jquery/jquery.d.ts" />
declare module "jira/util/events" {
    export function bind(eventName: string, callback: (event: JQueryEventObject) => any): void;
    export function unbind(eventName: string, callback: (event: JQueryEventObject) => any): void;
    export function trigger(eventName: string, arguments: any): void;
}
