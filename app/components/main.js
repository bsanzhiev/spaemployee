"use strict";
requirejs.config({
baseUrl: "app/components",
paths: {
// third party
jquery: "thirdParty/jquery.min",
domReady: "thirdParty/domReady",
text: "thirdParty/text",
backbone: "thirdParty/backbone-min",
underscore: "thirdParty/underscore-min",
// application
collections: "directory/collections",
models: "directory/models",
views: "directory/views",
templates: "directory/templates",
partials: "directory/partials"
}
});