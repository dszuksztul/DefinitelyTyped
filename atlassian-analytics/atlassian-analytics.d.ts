// Type definitions for browser-metrics
// Project: https://bitbucket.org/atlassian/analytics-client
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

declare namespace AJS {
    export namespace EventQueue {
        export interface Event {
            name: string;
            properties?: {[name: string]: string};
        }

        export function push(event: Event): void;
    }
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
    AJS: typeof AJS;

    // Only available when an experiment is running (sometimes at that).
    GROW?: typeof GROW;
}
