// Type definitions for JIRA 7.0
// Project: https://stash.atlassian.com/projects/JIRA/repos/jira/
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

/*
 * module: jira/util/events
 */
declare module "jira/util/events" {
    export function bind(eventName: string, callback: (event: JQueryEventObject, ...args: any[]) => any): void;
    export function unbind(eventName: string, callback: (event: JQueryEventObject, ...args: any[]) => any): void;
    export function trigger(eventName: string | JQueryEventObject): void;
    export function trigger(eventName: string | JQueryEventObject, arguments: any): void;
}


/*
 * module: jira/dialog/dialog
 */
declare module "jira/dialog/dialog" {
    type DialogTrigger = string | JQuery;

    interface AjaxOptionsData {
        inline: boolean;
        decorator: string;
    }
    interface AjaxOptions {
        data: AjaxOptionsData;
    }

    interface DialogOptionAjaxContent {
        url: string;
    }

    interface DialogOptions {
        ajaxOptions?: AjaxOptions;
        content?: Function | JQuery | DialogOptionAjaxContent;
        cached?: boolean;
        nodeName?: string;
        height?: string | number;
        width?: number;
        widthClass?: string;
        trigger?: DialogTrigger | string[];
        type?: string;
        id?: string;
        windowTitle?: string | ((dialog: Dialog) => string);
    }

    class Dialog {
        constructor(trigger: DialogTrigger);
        constructor(options: DialogOptions);

        options: DialogOptions;
        handleCancel(): boolean;
        getContentArea(): JQuery;
        getContentContainer(): JQuery;
        isCurrent(): boolean;
        destroy(): void;
        notifyOfNewContent(): void;
        show(forceReload: boolean): boolean;
    }

    module Dialog {
        export var current: Dialog;

        export module ClassNames {
            export var DIALOG: string;
            export var HEADING_AREA: string;
            export var CONTENT_AREA: string;
            export var DIALOG_OPEN: string;
            export var CONTENT_READY: string;
        }

        export module WIDTH_PRESETS {
            export var small: number;
            export var medium: number;
            export var large: number;
        }

        export module HIDE_REASON {
            export var cancel: string;
            export var escape: string;
            export var submit: string;
        }
    }

    export = Dialog;
}

// Dialog uses jira/util/events for some of its events.
declare module "jira/util/events" {
    import Dialog = require("jira/dialog/dialog");

    export function bind(eventName: "dialogContentReady", callback: (event: JQueryEventObject, dialog: Dialog) => any): void;
    export function bind(eventName: "beforeShow", callback: (event: JQueryEventObject, dialogId: string) => any): void;
    export function bind(eventName: "Dialog.hide", callback: (event: JQueryEventObject, dialog: Dialog, reason: string, dialogId: string) => any): void;
}


/*
 * AUI Dropdown 2
 */
declare module "aui" {
    export interface AUIDropdown2Options {
        selectFirst: boolean;
    }
}

//interface JQuery {
//    on(events: "aui-dropdown2-show", handler: (eventObject: JQueryEventObject, options: aui.AUIDropdown2Options) => any): JQuery;
//}

// jira/util/events#bind is basically a mirror of JQuery#on
declare module "jira/util/events" {
    import aui = require("aui");
    export function bind(eventName: "aui-dropdown2-show", callback: (event: JQueryEventObject, dialog: aui.AUIDropdown2Options) => any): void;
}

/*
 * WRM
 */
declare module WRM {
    export module data {
        export function claim(key: string): any;
    }

    export function require(dependencies: Array<string>, callback?: Function);
}

/*
 * JIRA browser metrics
 */
declare module WRM {
    export module data {
        export function claim(key: 'com.atlassian.jira.browsermetrics:browser-metrics-integration.scm-commit-id'): string;
    }
}

interface Window {
    WRM: typeof WRM;
}

/*
 * other general stuff that doesn't fall into the above modules
 */
declare module "jira/util/events" {
    // Attach a callback when an application header menu is clicked.
    export function bind(eventName: 'aui-dropdown2-show-before', callback: (event: JQueryEventObject) => any): void;
    // Attach a callback when an application header menu is actually presented.
    export function bind(eventName: 'aui-dropdown2-show-after', callback: (event: JQueryEventObject) => any): void;
}

/*
 * Growth experiments
 */

declare module GROW {
    /**
     * The names of experiments that are currently running.
     */
    export var experimentId: string[];
}

interface Window {
    // Only available when an experiment is running.
    GROW?: typeof GROW;
}

/*
 * AJS namespace
 */
declare module AJS {
    export function contextPath(): string;
}

interface Window {
    AJS: typeof AJS;
}
