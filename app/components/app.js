"use strict";
define(["jquery", "collections/entries", "views/entrylist", "views/directory", "text!partials/directoryContent.html", "domReady"],

  function($, Entries, Entrylist, Directory, directoryHTML, domReady) {

    function init() {
      domReady(function() {
        var entries = new Entries({});

        $("main").html(directoryHTML);

        var container = $("main.entries");

        new Directory(
            { el: container,
              collection: entries
            }
        );

        new Entrylist(
            { el: container.find(".entry-list"),
              collection: entries
            }
        );
      });
    }

    return {
        init: init
    };
    
  }  
);