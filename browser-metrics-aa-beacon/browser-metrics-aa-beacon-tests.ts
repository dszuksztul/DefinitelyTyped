///<reference path="browser-metrics-aa-beacon.d.ts"/>
import aaBeacon = require("internal/browser-metrics-aa-beacon");

aaBeacon.addReportMarshaller(report => {
    return {};
});

aaBeacon.addUrlCleaner(url => {
    return "";
});

aaBeacon.beacon({});

aaBeacon.cleanUrl("");
