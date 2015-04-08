/// <reference path="../../jquery/jquery.d.ts" />
/// <reference path="../util/events.d.ts" />

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

declare module "jira/util/events" {
    import Dialog = require("jira/dialog/dialog");

    export function bind(eventName: "dialogContentReady", callback: (event: JQueryEventObject, dialog: Dialog) => any): void;
    export function bind(eventName: "beforeShow", callback: (event: JQueryEventObject, dialogId: string) => any): void;
    export function bind(eventName: "Dialog.hide", callback: (event: JQueryEventObject, dialog: Dialog, reason: string, dialogId: string) => any): void;
}
