///<reference path="browser-metrics.d.ts"/>
import metrics = require("internal/browser-metrics");

metrics.start({
    key: "foo"
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

metrics.addReporter(function (navigationEvent) {
    navigationEvent.end;
    navigationEvent.start;
    navigationEvent.isInitial;
    navigationEvent.key;
    return {};
});

metrics.addReporter(function (navigationEvent) {
    return {
        "array": <any[]>[],
        "object": {},
        "number": 1,
        "boolean": true,
        "string": ""
    };
});

metrics.addReporter(function (navigationEvent) {
    return new Promise<metrics.Report>(function (resolve) {
        resolve({});
    });
});

metrics.addReporter(function (navigationEvent) {
    var deferred = jQuery.Deferred();
    deferred.resolve({});
    return deferred.promise();
});
