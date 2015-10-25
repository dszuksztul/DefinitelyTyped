///<reference path="browser-metrics.d.ts"/>
import metrics = require("internal/browser-metrics");

metrics.start({
    key: "foo"
});

metrics.start({
    key: "foo",
    threshold: 1000
});

metrics.start({
    key: "foo",
    ready: ".something"
});

metrics.start({
    key: "foo",
    ready: [".something"]
});

metrics.end({key: "foo"});

metrics.addReporter((transition) => {
    transition.end;
    transition.start;
    transition.isInitial;
    transition.key;
    transition.threshold;
    return {};
});

metrics.addReporter((transition) => {
    return {
        "number": 1,
        "boolean": true,
        "string": ""
    };
});

metrics.addReporter((transition) => {
    return new Promise<metrics.Report>((resolve) => {
        resolve({});
    });
});

metrics.addReporter((transition) => {
    var deferred = jQuery.Deferred();
    deferred.resolve({});
    return deferred.promise();
});

metrics.subscribe((beacon: metrics.Beacon) => {
    beacon.report;
});
