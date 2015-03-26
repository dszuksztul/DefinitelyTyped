// Type definitions for browser-metrics
// Project: https://bitbucket.org/atlassian/browser-metrics
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

///<reference path="../es6-promise/es6-promise.d.ts"/>
///<reference path="../jquery/jquery.d.ts"/>
declare module 'internal/browser-metrics' {
    type CSSSelector = string;

    export interface ReadyRule {
        selector: CSSSelector;
        requireUpdate?: boolean;
    }

    export interface StartOptions {
        isInitial?: boolean;
        key: string;
        ready?: (CSSSelector | CSSSelector[] | ReadyRule[]);
    }

    export interface StopOptions {
        key: string;
    }

    export interface NavigationEvent {
        isInitial: boolean;
        key: string;
        end: number;
        start: number;
    }

    export interface Report {
        [key: string]: number | string | boolean;
    }

    export interface Reporter {
        (navigationEvent: NavigationEvent): Report | Promise<Report> | JQueryPromise<Report>;
    }

    export function start(options: StartOptions): void;
    export function stop(options: StopOptions): void;
    export function addReporter(reporter: Reporter): void;
}
