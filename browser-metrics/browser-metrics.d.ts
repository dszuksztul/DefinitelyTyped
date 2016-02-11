// Type definitions for browser-metrics
// Project: https://bitbucket.org/atlassian/browser-metrics
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

///<reference path="../es6-promise/es6-promise.d.ts"/>
///<reference path="../jquery/jquery.d.ts"/>
declare module 'internal/browser-metrics' {
    type CSSSelector = string;
    type Millis = number;
    type MillisSinceNavigationStart = number;
    type Key = string;

    export interface ReadyRule {
        selector: CSSSelector;
        requireUpdate?: boolean;
    }

    export interface StartOptions {
        isInitial?: boolean;
        key: Key;
        ready?: (CSSSelector | CSSSelector[] | ReadyRule[]);
        threshold?: Millis;
    }

    export interface EndOptions {
        key: Key;
    }

    export interface Transition {
        isInitial: boolean;
        key: Key;
        end: MillisSinceNavigationStart;
        start: MillisSinceNavigationStart;
        threshold: Millis;
    }

    export interface Report {
        [key: string]: any;
    }

    export interface Reporter {
        (transition: Transition): Report | Promise<Report> | JQueryPromise<Report>;
    }

    export interface Beacon {
        report: Report;
    }

    export interface Subscriber {
        (beacon: Beacon): void;
    }

    export function start(options: StartOptions): void;
    export function end(options: EndOptions): void;
    export function addReporter(reporter: Reporter): void;
    export function subscribe(subscriber: Subscriber): void;
}
