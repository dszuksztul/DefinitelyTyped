// Type definitions for browser-metrics-aa-beacon
// Project: https://bitbucket.org/atlassian/browser-metrics-aa-beacon
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/bradleyayers/DefinitelyTyped

/// <reference path="../browser-metrics/browser-metrics.d.ts"/>

declare module "internal/browser-metrics-aa-beacon" {
    import * as metrics from "internal/browser-metrics";

    export type URL = string;
    export type EventProperties = {[name: string]: string};
    export type ReportMarshaller = (report: metrics.Report) => EventProperties;
    export type UrlCleaner = (url: URL) => string;

    export function addReportMarshaller(transformer: ReportMarshaller): void;
    export function cleanUrl(url: URL): string;
    export function addUrlCleaner(cleaner: UrlCleaner): void;
    export function beacon(report: metrics.Report): void;
}

