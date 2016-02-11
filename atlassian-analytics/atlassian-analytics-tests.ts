///<reference path="atlassian-analytics.d.ts"/>

AJS.EventQueue.push({name: "foo"});

AJS.EventQueue.push({
    name: "foo",
    properties: {}
});

AJS.EventQueue.push({
    name: "foo",
    properties: {
        anything: "here"
    }
});

window.AJS.EventQueue.push({name: "foo"});
