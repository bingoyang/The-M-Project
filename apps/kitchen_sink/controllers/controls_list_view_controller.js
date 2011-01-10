// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.5
//
// Project: KitchenSink
// Controller: ControlsListViewController
// ==========================================================================

KitchenSink.ControlsListViewController = M.Controller.extend({

    controlsList: null,

    page1: null,

    page2: null,

    callback: null,

    init: function(isFirstLoad) {

        if(isFirstLoad) {

            var controlsList = [

                {

                    name: "Default list",
                    page: "controlsListView1"

                },

                {

                    name: "Segmented list",
                    page: "controlsListView2"

                }

            ];

            this.set('controlsList', controlsList);

        }

    },

    initPage1: function(isFirstLoad) {

        if(isFirstLoad) {

            var page1 = [

                {

                    name: "Item 1"

                },

                {

                    name: "Item 2"

                },

                {

                    name: "Item 3"

                },

                {

                    name: "Item 4"

                },

                {

                    name: "Item 5"

                }

            ];

            this.set('page1', page1);

        }

    },

    initPage2: function(isFirstLoad) {

        if(isFirstLoad) {

            var page2 = {

                'List 1': [

                    {

                        name: "Item 1"

                    },

                    {

                        name: "Item 2"

                    }

                ],

                'List 2': [

                    {

                        name: "Item 1"

                    },

                    {

                        name: "Item 2"

                    },

                    {

                        name: "Item 3"

                    }

                ],

                'List 3': [

                    {

                        name: "Item 1"

                    }

                ]

            };

            this.set('page2', page2);

        }

    },

    controlSelected: function(id) {

        var controlName = M.ViewManager.getView(id, 'name').value;
        var control = _.detect(this.controlsList, function(control) {
            return control.name === controlName;
        });

        this.switchToPage(control.page);

    },

    back: function() {

        this.switchToPage('controls', M.TRANSITION.SLIDE, YES);

    },

    here: function() {

        this.switchToPage('controlsListView', M.TRANSITION.SLIDE, YES);

    }

});