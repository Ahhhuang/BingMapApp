(function (window) {
    // <field type='None'>This namespace is used as a placeholder for Anonymous objects that are passed into methods to assist with intellisense.
    /// <para>To implement these object simply wrap the properties with "{}", do not use the namespace and the 'new' keyword.</para>
    /// </field>
    window.AnonymousObject = {
    },

    window.Microsoft = {
        /// <field type='Namespace'>Bing Maps namespace</field>
        Maps: {

            /* Enumerators */

            /// <field type='Microsoft.Maps.AltitudeReference'>Defines the reference point from which the altitude is measured</field>
            AltitudeReference: {
                /// <field type='Microsoft.Maps.AltitudeReference'>The altitude is measured from the ground level.</field>
                ground: {},
                /// <field type='Microsoft.Maps.AltitudeReference'>The altitude is measured from the WGS 84 ellipsoid of the Earth.</field>
                ellipsoid: {},
                isValid: function (altitudeReference) {
                    /// <summary>
                    /// Determines if the specified reference is a supported AltitudeReference.
                    /// </summary>
                    /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>
                    /// <returns type='Boolean'></returns>
                },
                __enum : true
            },

            /// <field type='Microsoft.Maps.AnimationVisibility'>Defines a tile layer’s visibility during animation.</field>
            AnimationVisibility: {
                /// <field type='Microsoft.Maps.AnimationVisibility'>The map control determines whether or not to show a tile layer based on system capability. If a browser can render a tile layer with acceptable performance, it is displayed during animations.</field>
                auto: {},
                /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer is not displayed during animation.</field>
                hide: {},
                /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer is displayed during animations. This option may impact performance on older browsers.</field>
                show: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.EntityState'>Defines the highlighted or selected state of an entity, such as a pushpin. To get the latest Bing Maps entity state design, load the Microsoft.Maps.Themes.BingTheme module before creating your entity.</field>
            EntityState: {
                /// <field type='Microsoft.Maps.EntityState'>The entity is highlighted on the map.</field>
                highlighted: {},
                /// <field type='Microsoft.Maps.EntityState'>The entity is not highlighted or selected.</field>
                none: {},
                /// <field type='Microsoft.Maps.EntityState'>The entity is selected on the map.</field>
                selected: {},
                __enum: true
            },
            
            /// <field type='Microsoft.Maps.InfoboxType'>Contains info box styles. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module before creating your info box.</field>
            InfoboxType: {
                /// <field type='Microsoft.Maps.InfoboxType'>A smaller info box with space for a title.</field>
                mini: {},
                /// <field type='Microsoft.Maps.InfoboxType'>The default info box style. This standard info box makes space for a title, title link, description, and other links if they are specified.</field>
                standard: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.LabelOverlay'>Defines how map labels are displayed.</field>
            LabelOverlay: {
                /// <field type='Microsoft.Maps.LabelOverlay'>Map labels are not shown on top of imagery.</field>
                hidden: {},
                /// <field type='Microsoft.Maps.LabelOverlay'>Map labels are shown on top of imagery.</field>
                visible: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.MapTypeId'>Defines how map labels are displayed.</field>
            MapTypeId: {
                /// <field type='Microsoft.Maps.MapTypeId'>The aerial map type is being used.</field>
                arial: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The map is set to choose the best imagery for the current view.</field>
                auto: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The bird’s eye map type is being used.</field>
                birdseye: {},
                /// <field type='Microsoft.Maps.MapTypeId'>Collin’s Bart (mkt=en-gb) map type is being used.</field>
                collinsBart: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The Mercator map type is being used. This setting removes the base map tiles.</field>
                mercator: {},
                /// <field type='Microsoft.Maps.MapTypeId'>Ordnance Survey (mkt=en-gb) map type is being used.</field>
                ordnanceSurvey: {},
                /// <field type='Microsoft.Maps.MapTypeId'>The road map type is being used.</field>
                road: {},
                __enum: true
            },

            /// <field type='Microsoft.Maps.PixelReference'>Contains constants used to show how pixels are defined.</field>
            PixelReference:{
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined relative to the map control’s root element, where the top left corner of the map control is (0, 0). Using this option might cause a page reflow which may negatively impact performance.</field>
                control: {},
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined relative to the page, where the top left corner of the HTML page is (0, 0). This option is best used when working with mouse or touch events. Using this option might cause a page reflow which may negatively impact performance.</field>
                page: {},
                /// <field type='Microsoft.Maps.PixelReference'>The pixel is defined in viewport coordinates, relative to the center of the map, where the center of the map is (0, 0). This option is best used for positioning geo-aligned entities added to the user layer.</field>
                viewport: {},
                __enum: true
            },

            /* Static Classes & Module Namespaces */

            /// <field type='Microsoft.Maps.Events'>Provides event handling functionality for map and entity events.</field>
            Events: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Themes'>Bing Theme Module Namespace</field>
            Themes: {
                BingTheme: function () {
                    /// <summary>
                    /// When loaded, the Microsoft.Maps.Themes.BingTheme module updates certain visual aspects of the map control with the latest Bing Maps design. To see the design changes, simply access the corresponding API after loading the Microsoft.Maps.Themes.BingTheme module.
                    /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Themes.BingTheme", {</para> 
                    /// <para>callback: function(){ </para>
                    /// <para>map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {</para>
                    /// <para>credentials: "Bing Maps Key", </para>
                    /// <para>theme: new Microsoft.Maps.Themes.BingTheme() });</para>
                    /// <para>}});</para>
                    /// </summary>
                    /// <returns type='Microsoft.Maps.Themes.BingTheme'/>
                },
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Traffic'>Traffic Module, start with Microsoft.Maps.Traffic.TrafficManager.</field>
            Traffic: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Directions'>Directions Module, start with Microsoft.Maps.Directions.DirectionsManager.</field>
            Directions: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.Search'>Search Module, start with Microsoft.Maps.Search.SearchManager.</field>
            Search: {
                __namespace: true
            },

            /// <field type='Microsoft.Maps.VenueMaps'>Venue Maps Module, start with Microsoft.Maps.VenueMaps.VenueMapsFactory.</field>
            VenueMaps: {
                __namespace: true
            },

            Overlays: {
                /// <field type='Microsoft.Maps.Overlays.Style'>Overlays Style Module. Provides a different navigation bar option.
                /// <para>Usage:  Microsoft.Maps.loadModule('Microsoft.Maps.Overlays.Style', { callback: GetMap }); </para>
                /// <para>Set map option "customizeOverlays" to true.</para>
                /// </field>
                Style: {},
                __namespace: true
            },

            /// <field type='Namespace'>Contains global settings for map control.</field>
            Globals: {
                /// <field type='Number'>Specifies the size of the map tiles. Default is 256. When targetting mobile devices with high resoolution screens set this value to 128.</field>
                defaultTileSize: {},
                /// <field type='Number'>Minimium zoom level of the map. Default is 1. Use this to limit the zoom range of the map.</field>
                minMercatorZoom: {},
                /// <field type='Number'>Maximium zoom level of the map. Default is 20. Use this to limit the zoom range of the map.</field>
                maxMercatorZoom: {},
                __namespace: true
            },

            /// <field type='Namespace'>Contains static methods for dealing with QuadKey tile data.</field>
            QuadKey: {
                fromTileId: function (tileId) {
                    /// <summary>
                    /// Converts a tile x,y,zoom values into a QuadKey string.
                    /// </summary>
                    /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>
                    /// <returns type='Boolean'></returns>
                },
                toTileId: function (qudakey) {
                    /// <summary>
                    /// Converts a Quadkey string into it's tile x,y,zoom values.
                    /// </summary>
                    /// <param name="qudakey" type='String'></param>
                    /// <returns type="Object{x:(Number),y:(Number),levelOfDetail:(Number)}"></returns>
                },
                __namespace: true
            },

            loadModule: function (moduleKey, options) {
                /// <signature>
                /// <summary>
                /// Loads the specified registered module, making its functionality available. An optional function can be specified that is called when the module is loaded.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
                /// </signature>

                /// <signature>
                /// <summary>
                /// Loads the specified registered module, making its functionality available. An optional function can be specified that is called when the module is loaded.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
                /// <param name="options" type="Object">{
                /// <para>callback (function): Callback function that is called after the module is loaded.</para>
                /// <para>}</para>
                /// </param>
                /// </signature>
            },

            moduleLoaded: function (moduleKey) {
                /// <summary>
                /// Signals that the specified module has been loaded and if specified, calls the callback function in loadModule. Call this method at the end of your module script.
                /// </summary>
                /// <param name="moduleKey" type='String'></param>
            },

            registerModule: function (moduleKey, scriptUrl, options) {
                /// <signature>
                /// <summary>
                /// Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptUrl, and the options provides the location of a *.css file to load with the module.  
                /// <para>Tip: To minimize possible conflicts with other custom modules, choose a unique module name (defined in moduleKey). For example, you can use your company name in the name of the module.</para>
                /// Once you have registered a module, you can make its functionality available by loading it using loadModule.
                /// </summary>
                /// <param name="moduleKey" type='String'>Unique name for module to be used when loading.</param>
                /// <param name="scriptUrl" type='String'>Url to module JS script.</param>
                /// </signature>

                /// <signature>
                /// <summary>
                /// Registers a module with the map control. The name of the module is specified in moduleKey, the module script is defined in scriptUrl, and the options provides the location of a *.css file to load with the module.  
                /// <para>Tip: To minimize possible conflicts with other custom modules, choose a unique module name (defined in moduleKey). For example, you can use your company name in the name of the module.</para>
                /// Once you have registered a module, you can make its functionality available by loading it using loadModule.
                /// </summary>
                /// <param name="moduleKey" type='String'>Unique name for module to be used when loading.</param>
                /// <param name="scriptUrl" type='String'>Url to module JS script.</param>
                /// <param name="options" type="Object">{
                /// <para>styleURLs (string[]): An array of Url strings to supporting CSS files.</para>
                /// <para>}</para>
                /// </param>
                /// </signature>
            },
            __namespace: true
        },
        __namespace : true
    };

})(this);﻿(function(window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Color = function (a, r, g, b) {
        /// <summary>
        /// Initializes a new instance of the Color class. The a parameter represents opacity. The range of valid values for all parameters is 0 to 255.
        /// </summary>

        /// <param name="a" type='Number'>The opacity of the color. The range of valid values is 0 to 255.</param>
        /// <param name="r" type='Number'>The red value of the color. The range of valid values is 0 to 255.</param>
        /// <param name="g" type='Number'>The green value of the color. The range of valid values is 0 to 255.</param>
        /// <param name="b" type='Number'>The blue value of the color. The range of valid values is 0 to 255.</param>
                
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.prototype = {
        /// <field type='Number'>The opacity of the color. The range of valid values is 0 to 255.</field>
        a: {},
        /// <field type='Number'>The red of the color. The range of valid values is 0 to 255.</field>
        r: {},
        /// <field type='Number'>The green of the color. The range of valid values is 0 to 255.</field>
        g: {},
        /// <field type='Number'>The blue of the color. The range of valid values is 0 to 255.</field>
        b: {},
        clone: function () {
            /// <summary>
            /// Returns a copy of the Color object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getOpacity: function(){
            /// <summary>
            /// Returns the opacity of the Color as a value between 0 (a=0) and 1 (a=255).
            /// </summary>
            /// <returns type='Number'/> 
        },  
        toHex: function () {
            /// <summary>
            /// Converts the Color into a 6-digit hex string. Opacity is ignored. For example, a Color with values (255,0,0,0) is returned as hex string #000000.
            /// </summary>
            /// <returns type='String'/> 
        },
        toString: function () {
            /// <summary>
            /// Converts the Color object to a string.
            /// </summary>
            /// <returns type='String'/> 
        }
    };

    /* Static Methods */

    m.Color.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.fromHex = function (hex) {
        /// <summary>
        /// Returns the pushpin icon.
        /// </summary>
        /// <param name="hex" type='String'></param>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Color.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Coordinate = function () {
        /// <summary>
        /// Represents the coordinates of the position of the user from the GeoLocationProvider.
        /// </summary>
    };

    m.Coordinates.prototype = {
        /// <field type='Number'>The accuracy, in meters, of the latitude and longitude values.</field>
        accuracy: {},
        /// <field type='Number'>The altitude of the location.</field>
        altitude: {},
        /// <field type='Number'>The accuracy, in meters, of the altitude value.</field>
        altitudeAccuracy: {},
        /// <field type='Number'>The direction of travel of the hosting device.</field>
        heading: {},
        /// <field type='Number'>The latitude of the location.</field>
        latitude: {},
        /// <field type='Number'>The longitude of the location.</field>
        longitude: {},
        /// <field type='Number'>The ground speed of the hosting device, in meters per second.</field>
        speed: {}
    };

    m.Coordinate.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.EntityCollection = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// </signature>
        
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>bubble (Boolean): A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</para>
        /// <para>visible (Boolean): A boolean indicating whether the entity collection is visible on the map.</para>
        /// <para>zIndex (number): The z-index of the entity collection with respect to other items on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the EntityCollection class.
        /// Contains a collection of entities. An Entity can be any one of the following types: Polygon, Polyline, Pushpin, TileLayer, or EntityCollection.
        /// <para>Support Events: entityadded, entitychanged, entityremoved</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.EntityCollectionOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.EntityCollection"/>
    };

    m.EntityCollection.prototype = {
        clear: function () {
            /// <summary>
            /// Removes all entities from the collection.
            /// </summary>
        },
        get: function (index) {
            /// <summary>
            /// Removes all entities from the collection.
            /// </summary>
            /// <param name="index" type='Number'>Index of entity.</param>
            /// <returns type="Microsoft.Maps.Entity"></returns>
        },
        getLength: function () {
            /// <summary>
            /// Returns the number of entities in the collection.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the entity collection is visible on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Gets the z-index of the entity collection with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        indexOf: function (entity) {
            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the index of the specified entity in the collection. If the entity is not found in the collection, -1 is returned.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type='Number'></returns>
        },
        insert: function (entity, index) {
            /// <summary>
            /// Inserts the specified entity into the collection at the given index.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Entity"></param>
            /// <param name="index" type='Number'>Index used for insertion</param>
        },
        pop: function () {
            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the last entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type="Microsoft.Maps.Entity"></returns>
        },
        push: function (entity) {
            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds the specified entity to the last position in the collection.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>
        },
        remove: function (entity) {
            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Pushpin"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polyline"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Polygon"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.Infobox"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.TileLayer"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="entity" type="Microsoft.Maps.EntityCollection"></param>
            /// </signature>

            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        removeAt: function (index) {
            /// <summary>
            /// Removes the specified entity from the collection and returns it.
            /// </summary>
            /// <param name="index" type='Number'>Index of entity to remove.</param>
            /// <returns type="Microsoft.Maps.Entity">Removed entity.</returns>
        },
        setOptions: function (options) {           
            /// <signature>
            /// <summary>
            /// Sets the options for the entity collection.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>bubble (Boolean): A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</para>
            /// <para>visible (Boolean): A boolean indicating whether the entity collection is visible on the map.</para>
            /// <para>zIndex (number): The z-index of the entity collection with respect to other items on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the options for the entity collection.
            /// </summary>
            /// <param name="options" type="AnonymousObject.EntityCollectionOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the EntityCollection object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.EntityCollection.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.EntityCollectionOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.EntityCollectionOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to set the options of all entities when an option of an entity within the collection is set. The default value is true. For example, in an entity collection composed of multiple polygons, if this property is set to true setting one polygon’s fill color to red changes the fill color of all of the other polygons in the entity collection to red. Note: This property is only available when the Microsoft.Maps.AdvancedShapes module is loaded.</field>
        bubble: {},
        /// <field type='Boolean'>A boolean indicating whether the entity collection is visible on the map.</field>
        visible: {},
        /// <field type='Number'>The z-index of the entity collection with respect to other items on the map.</field>
        zIndex: {}
    }; 

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    /* Static Methods */

    m.Events.addHandler = function (target, eventName, handler) {
        /// <summary>
        /// Attaches the handler for the event that is thrown by the target. Use the return object to remove the handler using the removeHandler method.
        /// Microsoft.Maps.Events.addHandler(map,'viewchangeend’, function(e){ //Handle the event }); 
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="handler" type="function(AnonymousObject.EventCallback)">Callback function that is called when this event is triggered.</param>
        /// <returns type="Object"/>
    };

    m.Events.addThrottledHandler = function (target, eventName, handler, throttleInterval) {
        /// <summary>
        /// Attaches the handler for the event that is thrown by the target, where the minimum interval between events (in milliseconds) is specified in the throttleInterval parameter. The last occurrence of the event is called after the specified throttleInterval.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="handler" type="function(AnonymousObject.EventCallback)">Callback function that is called when this event is triggered.</param>
        /// <param name="throttleInterval" type='Number'>The minimium interval time between events in milliseconds.</param>
        /// <returns type="Object"/>
    };

    m.Events.hasHandler = function (target, eventName) {
        /// <summary>
        /// Checks if the target has any attached event handler.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <returns type='Boolean'/>
    };

    m.Events.invoke = function (target, eventName, args) {
        /// <summary>
        /// Invokes an event on the target. This causes all handlers for the specified eventName to be called.
        /// </summary>
        /// <param name="target" type="Object">The object ot attach the event to.</param>
        /// <param name="eventName" type='String'>Name of the event to monitor.</param>
        /// <param name="args" type="Object">A set of arguments to pass on to the event.</param>
    };

    m.Events.removeHandler = function (handlerId) {
        /// <summary>
        /// Detaches the specified handler from the event. The handlerId is returned by the addHandler and addThrottledHandler methods.
        /// </summary>
        /// <param name="handlerId" type="Object">An object that was returned by either addHandler or addThrottledHandler methods</param>
    };

    AnonymousObject.EventCallback = function (event) {
        /// <signature>
        /// <summary>
        /// Events: click, dblclick, mousedown, mouseout, mouseover, mouseup, mousewheel, rightclick
        /// </summary>
        /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: keydown, keypress, keyup
        /// </summary>
        /// <param name="event" type="AnonymousObject.KeyEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: copyrightchanged, imagerychanged, maptypechanged, optionschanged, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: entitiyadded, entitychanged, entityremoved
        /// <para>Target: Microsoft.Maps.EntityCollection</para>
        /// </summary>
        /// <param name="collection" type="Microsoft.Maps.EntityCollection"/>
        /// <param name="entity" type="Object">The entity that triggered the event: Pushpin, Polyline, Polygon, Infobox, TileLayer, EntityCollection</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: drag
        /// <para>Target: Microsoft.Maps.Pushpin</para>
        /// </summary>
        /// <param name="event" type="Object">{ entity: Object }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: dragend, dragstart
        /// <para>Target: Microsoft.Maps.Pushpin</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: changed, geocoded, reverseGeocoded
        /// <para>Target: Microsoft.Maps.Directions.Waypoint</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: changed, geocoded, reverseGeocoded
        /// <para>Target: Microsoft.Maps.Directions.Waypoint</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: waypointadded, waypointremoved
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: directionsError
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsErrorEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: directionsUpdated
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: itineraryStepClicked, mouseEnterStep, mouseLeaveStep
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsStepEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterStepRender, beforeStepRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DirectionsStepRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: beforeDisambiguationRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.DisambiguationRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: dragDropCompleted
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: mouseEnterRouteSelector, mouseLeaveRouteSelector, routeSelectorClicked
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterRouteSelectorRender, beforeRouteSelectorRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterRouteSelectorRender, beforeRouteSelectorRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSelectorRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterSummaryRender, beforeSummaryRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.RouteSummaryRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: afterWaypointRender, beforeWaypointRender
        /// <para>Target: Microsoft.Maps.Directions.DirectionsManager</para>
        /// </summary>
        /// <param name="event" type="AnonymousObject.WaypointRenderEventArgs"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: close
        /// <para>Target: Microsoft.Maps.VenueMaps.VenueMap</para>
        /// </summary>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Events: click, footprintclick, mouseout, mouseover
        /// <para>Target: Microsoft.Maps.VenueMaps.VenueMap</para>
        /// </summary>
        /// <param name="event" type="Microsoft.Maps.VenueMaps.Primitive"/>
        /// </signature>      
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.GeoLocationProvider = function (map) {
        /// <summary>
        /// Contains methods for obtaining and displaying the user’s current location.
        /// Note: This functionality is only available on browsers that support the W3C GeoLocation API. 
        /// </summary>

        /// <param name="map" type="Microsoft.Maps.Map">Map object to bing to the GeoLocationProvier.</param>

        /// <returns type="Microsoft.Maps.GeoLocationProvider"/>
    };

    m.GeoLocationProvider.prototype = {
        addAccuracyCircle: function (center, radiusInMeters, segments, options) {
            /// <signature>
            /// <summary>
            /// Renders a geo location accuracy circle on the map. The accuracy circle is created with the center at the specified location, using the given radiusInMeters, and with the specified number of segments for the accuracy circle polygon. Additional options are also available to adjust the style of the polygon.
            /// </summary>
            /// <param name="center" type="Microsoft.Maps.Location">The center location of the accuray circle.</param>
            /// <param name="radiusInMeters" type='Number'>The radius of th accuracy circle in meters.</param>
            /// <param name="segments" type='Number'>The number of line segmenets to us to approximate the circle.</param>
            /// <param name="options" type="Object">
            /// An object that contains options for the position circle: {
            /// <para>polygonOptions (AnonymousObject.PolygonOptions): A polygon options object for the geo location accuracy circle. See also Microsoft.Maps.Polygon.</para>
            /// <para>showOnMap (Boolean): A boolean indicating whether to display the geo location accuracy circle. The default value is true. If this property is set to false, a geo location accuracy circle is not drawn and any existing accuracy circles are removed.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Renders a geo location accuracy circle on the map. The accuracy circle is created with the center at the specified location, using the given radiusInMeters, and with the specified number of segments for the accuracy circle polygon. Additional options are also available to adjust the style of the polygon.
            /// </summary>
            /// <param name="center" type="Microsoft.Maps.Location">The center location of the accuray circle.</param>
            /// <param name="radiusInMeters" type='Number'>The radius of th accuracy circle in meters.</param>
            /// <param name="segments" type='Number'>The number of line segmenets to us to approximate the circle.</param>
            /// <param name="options" type="AnonymousObject.PositionCircleOptions"/>
            /// </signature>
        },
        cancelCurrentRequest: function () {
            /// <summary>
            /// Cancels the processing of the current getCurrentPosition request. This method prevents the response from being processed.
            /// </summary>
        },
        getCurrentPosition: function (options) {
            /// <signature>
            /// <summary>
            /// Obtains the user’s current location and displays it on the map. The accuracy of the user location obtained using this method varies widely depending on the desktop browser or mobile device of the requesting client. Desktop users may experience low user location accuracy (an accuracy circle with a large radius), while mobile user location accuracy may be much greater (a few meters).
            /// </summary>
            /// <param name="options" type="Object">
            /// An object that contains options for the getting the position: {
            /// <para>enableHighAccuracy (Boolean): A boolean indicating whether only a high accuracy result should be retrieved. The default value is false. Setting this property to true may result in a slower response time.</para>
            /// <para>errorCallback (function): The function to call when an error occurs. The callback function must accept one argument. The argument object contains two properties, internalError, a PositionError type, and errorCode, a number.</para>
            /// <para>maximumAge (Number): A number indicating the acceptable age, in milliseconds, of a cached geo location result to return. The default value is 0, which indicates a new (not cached) result will be retrieved.</para>
            /// <para>showAccuracyCircle (Boolean): A boolean indicating whether to display the polygon on the map that shows the accuracy of the returned geo location. The default value is true.</para>
            /// <para>successCallback (function): Callback function for when location is successfully retrieved. The callback function must accept one argument. The argument contains two properties, center, a Microsoft.Maps.Location type, and position, a Microsoft.Maps.Position type.</para>
            /// <para>timeout (Number): The length of time, in milliseconds, to allow for the geo location request to return. By default there is no timeout.</para>
            /// <para>updateMapView (Boolean): A boolean indicating whether to update the map view with the best view of the user’s location (if the request is successful). The default value is true.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Obtains the user’s current location and displays it on the map. The accuracy of the user location obtained using this method varies widely depending on the desktop browser or mobile device of the requesting client. Desktop users may experience low user location accuracy (an accuracy circle with a large radius), while mobile user location accuracy may be much greater (a few meters).
            /// </summary>
            /// <param name="options" type="AnonymousObject.PositionOptions"/>
            /// </signature>
        },
        removeAccuracyCircle: function () {
            /// <summary>
            /// Removes the current geo location accuracy circle.
            /// </summary>
        }
    };

    m.GeoLocationProvider.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Infobox = function (location, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// </signature>
        
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>actions (Object), showCloseButton (boolean), showPointer (boolean), visible (boolean), titleClickHandler (function), typeName (Microsoft.Maps.InfoboxType), location (Microsoft.Maps.Location), height (number), width (number), zIndex (number), titleAction (Object), offset (Point ), pushpin (Pushpin ), description (string), htmlContent (string), id (string), title (string)</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">
        /// { description (String): The string displayed inside the infobox.
        /// <para>height (Number): The height of the infobox. The default value is 126.</para>
        /// <para>htmlContent (String): The HTML that represents the info box. Note that infobox options are ignored if custom HTML is set.</para>
        /// <para>location (Microsoft.Maps.Location): The location on the map where the info box’s anchor is attached.</para>
        /// <para>offest (Microsoft.Maps.Point): The amount the info box pointer is shifted from the location of the infobox.</para>
        /// <para>title (String): The title of the infobox.</para>
        /// <para>typeName (String): A CSS class name to apply to the infobox.</para>
        /// <para>visible (Boolean): A boolean indicating whether to show or hide the info box.</para>
        /// <para>width (Number): The width of the infobox. The default value is 256.</para>
        /// <para>zIndex (Number): The z-index of the infobox with respect to other items on the map. }</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Infobox class. For the best performance, it is recommended that you have only one info box on the map at a time.
        /// <para>Supported Events: click, entitychanged, mouseenter, mouseleave</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="AnonymousObject.InfoboxOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Infobox"/>
    };

    m.Infobox.prototype = {
        getActions: function () {
            /// <summary>
            /// Returns a list of actions, where each item is a name-value pair indicating an action link name and the event name for the action that corresponds to that action link.
            /// </summary>
            /// <returns type="Object"></returns>
        },
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the infobox which is anchored to the map. An anchor of (0,0) is the top left corner of the infobox.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getDescription: function () {
            /// <summary>
            /// Returns the string that is printed inside the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHtmlContent: function () {
            /// <summary>
            /// Returns the infobox as HTML.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getId: function () {
            /// <summary>
            /// Returns the ID of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location on the map where the infobox’s anchor is attached.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getOffset: function () {
            /// <summary>
            /// Returns the amount the infobox pointer is shifted from the location of the infobox, or if showPointer is false, then it is the amount the infobox bottom left edge is shifted from the location of the infobox. The default value is (0,0), which means there is no offset.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the infobox options.
            /// </summary>
            /// <returns type="AnonymousObject.InfoboxOptions"></returns>
        },
        getShowCloseButton: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox close button is shown.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getShowPointer: function () {
            /// <summary>
            /// Returns a boolean indicating whether the infobox is drawn with a pointer.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getTitle: function () {
            /// <summary>
            /// Returns a string that is the title of the infobox.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTitleClickHandler: function () {
            /// <summary>
            /// Returns the name of the function to call when the title of the infobox is clicked.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the infobox is visible. A value of false indicates that the infobox is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the infobox.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the infobox with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setHtmlContent: function (content) {
            /// <summary>
            /// Sets the HTML content of the infobox. You can use this method to change the look of the infobox.
            /// </summary>
            /// <param name="content" type='String'>HTML content for infobox.</param>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location on the map where the anchor of the infobox is attached.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>actions (Object), showCloseButton (boolean), showPointer (boolean), visible (boolean), titleClickHandler (function), typeName (Microsoft.Maps.InfoboxType), location (Microsoft.Maps.Location), height (number), width (number), zIndex (number), titleAction (Object), offset (Point ), pushpin (Pushpin ), description (string), htmlContent (string), id (string), title (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="Object">            
            /// { description (String): The string displayed inside the infobox.
            /// <para>height (Number): The height of the infobox. The default value is 126.</para>
            /// <para>htmlContent (String): The HTML that represents the info box. Note that infobox options are ignored if custom HTML is set.</para>
            /// <para>location (Microsoft.Maps.Location): The location on the map where the info box’s anchor is attached.</para>
            /// <para>offest (Microsoft.Maps.Point): The amount the info box pointer is shifted from the location of the infobox.</para>
            /// <para>title (String): The title of the infobox.</para>
            /// <para>typeName (String): A CSS class name to apply to the infobox.</para>
            /// <para>visible (Boolean): A boolean indicating whether to show or hide the info box.</para>
            /// <para>width (Number): The width of the infobox. The default value is 256.</para>
            /// <para>zIndex (Number): The z-index of the infobox with respect to other items on the map. }</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the infobox.
            /// </summary>
            /// <param name="options" type="AnonymousObject.InfoboxOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Infobox object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Infobox.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.InfoboxOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.InfoboxOptions.prototype = {
        /// <field type='Object'>A list of the info box actions, where each item is a label (the link text) or icon (the URL of the image to use as the icon link) and eventHandler (name of the function handling a click of the action link).</field>
        actions: {},
        /// <field type='String'>The string displayed inside the info box.</field>
        description: {},
        /// <field type='Number'>The height of the info box. The default value is 126.</field>
        height: {},
        /// <field type='String'>The HTML that represents the info box. Note that info box options are ignored if custom HTML is set. Also, if custom HTML is used to represent the info box, the info box is anchored at the top-left corner.</field>
        htmlContent: {},
        /// <field type='String'>The ID associated with the info box.</field>
        id: {},
        /// <field type='Location '>The location on the map where the info box’s anchor is attached.</field>
        location: {},
        /// <field type='Point '>The amount the info box pointer is shifted from the location of the info box, or if showPointer is false, then it is the amount the info box bottom left edge is shifted from the location of the info box. If custom HTML is set, it is the amount the top-left corner of the info box is shifted from its location. The default offset value is (0,0), which means there is no offset.</field>
        offset: {},
        /// <field type='Boolean'>A boolean indicating whether to show the close dialog button on the info box. The default value is true. By default the close button is displayed as an X in the top right corner of the info box. This property is ignored if custom HTML is used to represent the info box.</field>
        showCloseButton: {},
        /// <field type='Boolean'>A boolean indicating whether to display the info box with a pointer. The default value is true. In this case the info box is anchored at the bottom point of the pointer. If this property is set to false, the info box is anchored at the bottom left corner. This property is ignored if custom HTML is used to represent the info box.</field>
        showPointer: {},
        /// <field type='Pushpin '>The pushpin associated with this info box. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.</field>
        pushpin: {},
        /// <field type='String'>The title of the info box.</field>
        title: {},
        /// <field type='Object'>An action to take when the link to the right of an info box title is clicked. The specified object contains a label (the link text) and an eventHandler (the name of the function handling a click of the link).</field>
        titleAction: {},
        /// <field type='function'>The name of the function to call when the title of the info box is clicked. If this property is set, the title of the info box is displayed as a link.</field>
        titleClickHandler: function (event) {
            /// <summary>
            /// The name of the function to call when the title of the info box is clicked. If this property is set, the title of the info box is displayed as a link.
            /// </summary>
            /// <param name="event" type="AnonymousObject.MouseEventArgs"/>
        },
        /// <field type='InfoboxType '>The style of the info box. The default value is standard.</field>
        typeName: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the info box. The default value is true. A value of false indicates that the info box is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The width of the info box. The default value is 256.</field>
        width: {},
        /// <field type='Number'>The z-index of the info box with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.KeyEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.KeyEventArgs.prototype = {
        /// <field type='Boolean'>A boolean indicating if the ALT key was pressed.</field>
        altKey: {},
        /// <field type='Boolean'>A boolean indicating if the CTRL key was pressed.</field>
        ctrlKey: {},
        /// <field type='String'>The event that occurred.</field>
        eventName: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.</field>
        handled: {},
        /// <field type='String'>The ASCII character code that identifies the keyboard key that was pressed.</field>
        keyCode: {},
        /// <field type='object'>The original browser event.</field>
        originalEvent: {},
        /// <field type='Boolean'>A boolean indicating if the SHIFT key was pressed.</field>
        shiftKey: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Location = function (latitude, longitude, altitude, altitudeMode) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Location class. The altitude and altitudeMode parameters default to undefined.
        /// </summary>
        /// <param name="latitude" type='Number'></param>
        /// <param name="longitude" type='Number'></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Location class. The altitude and altitudeMode parameters default to undefined.
        /// </summary>
        /// <param name="latitude" type='Number'></param>
        /// <param name="longitude" type='Number'></param>
        /// <param name="altitude" type='Number'></param>
        /// <param name="altitudeMode" type="Microsoft.Maps.AltitudeReference"></param>
        /// </signature>

        /// <returns type="Microsoft.Maps.Location"/>
    };

    m.Location.prototype = {
        /// <field name="altitude" type='Number'>The altitude of the location.</field>
        altitude:{},
        /// <field name="altitudeMode" type="Microsoft.Maps.AltitudeReference">The reference from which the altitude is measured.</field>
        altitudeMode: {},
        /// <field name="latitude" type='Number'>The latitude of the location.</field>
        latitude: 0,
        /// <field name="longitude" type='Number'>The longitude of the location.</field>
        longitude: 0,

        clone: function () {
            /// <summary>
            /// Returns a copy of the Location object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the Location object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Location.areEqual = function (location1, location2) {
        /// <summary>
        /// Determines if the specified Location objects are equal.
        /// </summary>
        /// <param name="location1" type="Microsoft.Maps.Location">First location to compare against.</param>
        /// <param name="location2" type="Microsoft.Maps.Location">Second location to compare against.</param>
        /// <returns type='Boolean'/>
    };

    m.Location.normalizeLongitude = function (longitude) {
        /// <summary>
        /// Normalizes the specified longitude so that it is between -180 and 180.
        /// </summary>
        /// <param name="longitude" type="Microsoft.Maps.Location">Location to normalize.</param>
        /// <returns type='Number'/>
    };

    m.Location.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.LocationRect = function (center, width, height) {
        /// <summary>
        /// Initializes a new instance of the LocationRect class.
        /// </summary>
        /// <param name="center" type="Microsoft.Maps.Location"></param>
        /// <param name="width" type='Number'></param>
        /// <param name="height" type='Number'></param>

        /// <returns type="Microsoft.Maps.Location"/>
    };

    m.LocationRect.prototype = {
        /// <field name="center" type="Microsoft.Maps.Location">Center of the LocationRect.</field>
        center: {},
        /// <field name="height" type='Number'>Height of the LocationRect in degrees.</field>
        height: {},
        /// <field name="width" type='Number'>Width of the LocationRect in degrees.</field>
        width: 0,

        clone: function () {
            /// <summary>
            /// Returns a copy of the LocationRect object.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        contains: function () {
            /// <summary>
            /// Returns whether the specified Location is within the LocationRect.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getEast: function () {
            /// <summary>
            /// Returns the longitude that defines the eastern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorth: function () {
            /// <summary>
            /// Returns the latitude that defines the northern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getNorthwest: function () {
            /// <summary>
            /// Returns the Location that defines the northwest corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getSouth: function () {
            /// <summary>
            /// Returns the latitude that defines the southern edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getSoutheast: function () {
            /// <summary>
            /// Returns the Location that defines the southeast corner of the LocationRect.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getWest: function () {
            /// <summary>
            /// Returns the latitude that defines the western edge of the LocationRect.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        intersects: function (rect) {
            /// <summary>
            /// Returns whether the specified LocationRect intersects with this LocationRect.
            /// </summary>
            /// <param name="rect" type="Microsoft.Maps.LocationRect"></param>
            /// <returns type='Boolean'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the LocationRect object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.LocationRect.fromCorners = function (northwest, southeast) {
        /// <summary>
        /// Returns a LocationRect using the specified locations for the northwest and southeast corners.
        /// </summary>
        /// <param name="northwest" type="Microsoft.Maps.Location"></param>
        /// <param name="southeast" type="Microsoft.Maps.Location"></param>
        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromEdges = function (north, west, south, east, altitude, altitudeReference) {
        /// <summary>
        /// Returns a LocationRect using the specified northern and southern latitudes and western and eastern longitudes for the rectangle boundaries.
        /// </summary>
        /// <param name="north" type='Number'></param>
        /// <param name="west" type='Number'></param>
        /// <param name="south" type='Number'></param>
        /// <param name="east" type='Number'></param>
        /// <param name="altitude" type='Number'></param>
        /// <param name="altitudeReference" type="Microsoft.Maps.AltitudeReference"></param>


        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromLocations = function (locations) {
        /// <summary>
        /// Returns a LocationRect using a list of locations or an array of locations.
        /// <para>To provide a list of locations:  Microsoft.Maps.LocationRect.fromLocations(location1, location2, location3);</para>
        /// <para>To provide an array of locations:</para>
        /// <para>var locations = [location1, location2, location3]; </para>
        /// <para>Microsoft.Maps.LocationRect.fromLocations(locations);</para>
        /// </summary>
        /// <param name="locations" type="Array">or Microsoft.Maps.Locations[]</param>

        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.fromString = function (string) {
        /// <summary>
        /// Creates a LocationRect from a string with the following format: "north,west,south,east". North, west, south and east specify the coordinate number values.
        /// </summary>
        /// <param name='String' type='String'></param>
        /// <returns type="Microsoft.Maps.LocationRect"></returns>
    };

    m.LocationRect.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Map = function (containerElement, options) {
        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="Object">{
        /// <para>backgroundColor (Microsoft.Maps.Color), credentials (string), customizeOverlays (boolean), disableBirdseye (boolean), disableKeyboardInput (boolean), disableMouseInput (boolean), disablePanning (boolean), disableTouchInput (boolean), disableUserInput (boolean), disableZooming (boolean), enableClickableLogo (boolean), enableSearchLogo (boolean), fixedMapPosition (boolean), height (number), inertiaIntensity (number), showBreadcrumb (boolean), showCopyright (boolean), showDashboard (boolean), showMapTypeSelector (boolean), showScalebar (boolean), theme (Microsoft.Maps.Themes.BingTheme), tileBuffer (number), useInertia (boolean), width (number)</para>
        /// <para>animate (boolean), bounds (Microsoft.Maps.LocationRect), center (Microsoft.Maps.Location), centerOffset (Microsoft.Maps.Point), heading (number), labelOverlay (Microsoft.Maps.LabelOverlay), mapTypeId (Microsoft.Maps.MapTypeId), padding (number), zoom (number)</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="Object">{
        /// <para>backgroundColor (Microsoft.Maps.Color): The color to use for the map control background. The default color is #F4F2EE. ,</para>
        /// <para>credentials (string): The Bing Maps Key used to authenticate the application.,</para>
        /// <para>customizeOverlays (boolean): A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property setting only takes effect if the Microsoft.Maps.Overlays.Style module is loaded.,</para>
        /// <para>disableBirdseye (boolean): A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial.,</para>
        /// <para>disableKeyboardInput (boolean): A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.,</para>
        /// <para>disableMouseInput (boolean): A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.,</para>
        /// <para>disablePanning (boolean): A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.,</para>
        /// <para>disableTouchInput (boolean): A boolean value indicating whether to disable the map’s response to touch input. The default value is false.,</para>
        /// <para>disableUserInput (boolean): A boolean value indicating whether to disable the map’s response to any user input. The default value is false.,</para>
        /// <para>disableZooming (boolean): A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.,</para>
        /// <para>enableClickableLogo (boolean): A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true.,</para>
        /// <para>enableSearchLogo (boolean): A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true.,</para>
        /// <para>fixedMapPosition (boolean): A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control.,</para>
        /// <para>height (number): The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.,</para>
        /// <para>inertiaIntensity (number): A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.,</para>
        /// <para>showBreadcrumb (boolean): Shows or hides the breadcrumb control which displays the current center location’s geography hierarchy. The breadcrumb control displays best when the width of the map is at least 300 pixels.The default value is false.,</para>
        /// <para>showCopyright (boolean): A boolean value indicating whether or not to show the map copyright. The default value is true. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.,</para>
        /// <para>showDashboard (boolean): A boolean value indicating whether to show the map navigation control. The default value is true.,</para>
        /// <para>showMapTypeSelector (boolean): A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true.,</para>
        /// <para>showScalebar (boolean): A boolean value indicating whether to show the scale bar. The default value is true.,</para>
        /// <para>theme (Microsoft.Maps.Themes.BingTheme): A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.,</para>
        /// <para>tileBuffer (number): A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.,</para>
        /// <para>useInertia (boolean): A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.,</para>
        /// <para>width (number): The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.,</para>
        /// <para>animate (boolean): A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.,</para>
        /// <para>bounds (Microsoft.Maps.LocationRect): The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.,</para>
        /// <para>centerOffset (Microsoft.Maps.Point): The amount the center is shifted. This property is ignored if center is not specified.,</para>
        /// <para>heading (number): The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.,</para>
        /// <para>labelOverlay (Microsoft.Maps.LabelOverlay): A constant indicating how map labels are displayed.,</para>
        /// <para>mapTypeId (Microsoft.Maps.MapTypeId): The map type of the view. Valid map types are found in the MapTypeId Enumeration topic.,</para>
        /// <para>padding (number): The amount of padding to be added to each side of the bounds of the map view.,</para>
        /// <para>zoom (number): The zoom level of the map view.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="AnonymousObject.MapOptions"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a map. Initializes a new instance of the Map class.
        /// <para>Supported Events: click, copyrightchanged, dblclick, imagerychanged, keydown, keypress, keyup, maptypechanged, mousedown, mousemove, mouseout, mouseover, mouseup, mousewheel, optionschanged, rightclick, targetviewchanged, tiledownloadcomplete, viewchange, viewchangeend, viewchangestart</para>
        /// </summary>
        /// <param name="containerElement" type="DOMElement" domElement="true">DOM Element of map DIV. It must have a CSS position, width and height specified.</param>
        /// <param name="options" type="AnonymousObject.ViewOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Map"/>
    };

    m.Map.prototype = {
        /// <field type='Microsoft.Maps.EntityCollection'>The map’s entities. Use this property to add or remove entities from the map.</field>
        entities: new Microsoft.Maps.EntityCollection(),

        blur: function () {
            /// <summary>
            /// Removes focus from the map control so that it does not respond to keyboard events.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Deletes the Map object and releases any associated resources.
            /// </summary>
        },
        focus: function () {
            /// <summary>
            /// Applies focus to the map control so that it responds to keyboard events.
            /// </summary>
        },
        getBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getCenter: function () {
            /// <summary>
            /// Returns the location of the center of the current map view.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getCopyrights: function (callback) {
            /// <summary>
            /// Gets the array of strings representing the attributions of the imagery currently displayed on the map.
            /// </summary>
            /// <param name="callback" type="Function">The callback recieves one paramter of type string[].</param>
        },
        getCredentials: function (callback) {
            /// <summary>
            /// Retrieves a session key from the map. 
            /// <para/>
            /// <para>map.getCredentials(function(credentials)</para> 
            /// <para>{ </para>
            /// <para>if(credentials !== null) { /* Valid session Id. Use it to call REST service */ }</para>
            /// <para>});</para>
            /// </summary>
            /// <param name="callback" type="Function"></param>
        },
        getHeading: function () {
            /// <summary>
            /// Returns the heading of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getImageryId: function () {
            /// <summary>
            /// Returns the string that represents the imagery currently displayed on the map.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getMapTypeId: function () {
            /// <summary>
            /// Returns a string that represents the current map type displayed on the map. Valid map types are listed in the MapTypeId Enumeration topic.
            /// </summary>
            /// <returns type="Microsoft.Maps.MapTypeId"></returns>
        },
        getMetersPerPixel: function () {
            /// <summary>
            /// Returns the current scale in meters per pixel of the center of the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getMode: function () {
            /// <summary>
            /// Returns the current map mode.
            /// </summary>
            /// <returns type="Microsoft.Maps.MapMode"></returns>
        },
        getModeLayer: function () {
            /// <summary>
            /// Returns the map’s mode node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getOptions: function () {
            /// <summary>
            /// Returns the map option settings.
            /// </summary>
            /// <returns type="AnonymousObject.MapOptions"></returns>
        },
        getPageX: function () {
            /// <summary>
            /// Returns the x coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getPageY: function () {
            /// <summary>
            /// Returns the y coordinate of the top left corner of the map control, relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getRootElement: function () {
            /// <summary>
            /// Returns the map’s root node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getTargetBounds: function () {
            /// <summary>
            /// Returns the location rectangle that defines the boundaries of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.LocationRect"></returns>
        },
        getTargetCenter: function () {
            /// <summary>
            /// Returns the center location of the view to which the map is navigating.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getTargetHeading: function () {
            /// <summary>
            /// Returns the heading of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetMetersPerPixel: function () {
            /// <summary>
            ///  Returns the scale in meters per pixel of the center of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTargetZoom: function () {
            /// <summary>
            /// Returns the zoom level of the view to which the map is navigating.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUserLayer: function () {
            /// <summary>
            /// Returns the map’s user node.
            /// </summary>
            /// <returns type="DOMElement" domElement="true"></returns>
        },
        getViewportX: function () {
            /// <summary>
            /// Returns the x coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getViewportY: function () {
            /// <summary>
            /// Returns the y coordinate of the viewport origin (the center of the map), relative to the page.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the map control.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoom: function () {
            /// <summary>
            /// Returns the zoom level of the current map view.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZoomRange: function () {
            /// <summary>
            /// Returns the range of valid zoom levels for the current map view.
            /// </summary>
            /// <returns type="Object">
            /// An object that contains min and max zoom values: {
            /// <para>min (Number): Minimium zoom level.</para>
            /// <para>max (Number): Maximium zoom level.</para>
            /// <para>}</para>
            /// </returns>
        },
        isMercator: function () {
            /// <summary>
            /// Returns whether the map is in a regular Mercator nadir mode.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        isRotationEnabled: function () {
            /// <summary>
            /// Returns true if the current map type allows the heading to change; false if the display heading is fixed.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setMapType: function (mapTypeId) {
            /// <summary>
            /// Sets the current map type.
            /// </summary>
            /// <param name="mapTypeId" type="Microsoft.Maps.MapTypeId"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param type="Object">            
            /// <para>{</para>
            /// <para>backgroundColor (Microsoft.Maps.Color), credentials (string), customizeOverlays (boolean), disableBirdseye (boolean), disableKeyboardInput (boolean), disableMouseInput (boolean), disablePanning (boolean), disableTouchInput (boolean), disableUserInput (boolean), disableZooming (boolean), enableClickableLogo (boolean), enableSearchLogo (boolean), fixedMapPosition (boolean), height (number), inertiaIntensity (number), showBreadcrumb (boolean), showCopyright (boolean), showDashboard (boolean), showMapTypeSelector (boolean), showScalebar (boolean), theme (Microsoft.Maps.Themes.BingTheme), tileBuffer (number), useInertia (boolean), width (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>backgroundColor (Microsoft.Maps.Color): The color to use for the map control background. The default color is #F4F2EE. ,</para>
            /// <para>credentials (string): The Bing Maps Key used to authenticate the application.,</para>
            /// <para>customizeOverlays (boolean): A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property setting only takes effect if the Microsoft.Maps.Overlays.Style module is loaded.,</para>
            /// <para>disableBirdseye (boolean): A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial.,</para>
            /// <para>disableKeyboardInput (boolean): A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.,</para>
            /// <para>disableMouseInput (boolean): A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.,</para>
            /// <para>disablePanning (boolean): A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.,</para>
            /// <para>disableTouchInput (boolean): A boolean value indicating whether to disable the map’s response to touch input. The default value is false.,</para>
            /// <para>disableUserInput (boolean): A boolean value indicating whether to disable the map’s response to any user input. The default value is false.,</para>
            /// <para>disableZooming (boolean): A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.,</para>
            /// <para>enableClickableLogo (boolean): A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true.,</para>
            /// <para>enableSearchLogo (boolean): A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true.,</para>
            /// <para>fixedMapPosition (boolean): A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control.,</para>
            /// <para>height (number): The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.,</para>
            /// <para>inertiaIntensity (number): A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.,</para>
            /// <para>showBreadcrumb (boolean): Shows or hides the breadcrumb control which displays the current center location’s geography hierarchy. The breadcrumb control displays best when the width of the map is at least 300 pixels.The default value is false.,</para>
            /// <para>showCopyright (boolean): A boolean value indicating whether or not to show the map copyright. The default value is true. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.,</para>
            /// <para>showDashboard (boolean): A boolean value indicating whether to show the map navigation control. The default value is true.,</para>
            /// <para>showMapTypeSelector (boolean): A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true.,</para>
            /// <para>showScalebar (boolean): A boolean value indicating whether to show the scale bar. The default value is true.,</para>
            /// <para>theme (Microsoft.Maps.Themes.BingTheme): A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.,</para>
            /// <para>tileBuffer (number): A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.,</para>
            /// <para>useInertia (boolean): A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.,</para>
            /// <para>width (number): The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets MapOptions such as the width and height of the map and whether panning of the map is allowed. Note that some map options can only be set in the Map constructor as stated in the map option description.
            /// </summary>
            /// <param name="options" type="AnonymousObject.MapOptions"/>
            /// </signature>
        },
        setView: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>animate (boolean), bounds (Microsoft.Maps.LocationRect), center (Microsoft.Maps.Location), centerOffset (Microsoft.Maps.Point), heading (number), labelOverlay (Microsoft.Maps.LabelOverlay), mapTypeId (Microsoft.Maps.MapTypeId), padding (number), zoom (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param type="Object">
            /// <para>{</para>
            /// <para>animate (boolean): A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.,</para>
            /// <para>bounds (Microsoft.Maps.LocationRect): The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.,</para>
            /// <para>centerOffset (Microsoft.Maps.Point): The amount the center is shifted. This property is ignored if center is not specified.,</para>
            /// <para>heading (number): The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.,</para>
            /// <para>labelOverlay (Microsoft.Maps.LabelOverlay): A constant indicating how map labels are displayed.,</para>
            /// <para>mapTypeId (Microsoft.Maps.MapTypeId): The map type of the view. Valid map types are found in the MapTypeId Enumeration topic.,</para>
            /// <para>padding (number): The amount of padding to be added to each side of the bounds of the map view.,</para>
            /// <para>zoom (number): The zoom level of the map view.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the map view based on the specified options.
            /// </summary>
            /// <param name="options" type="AnonymousObject.ViewOptions"/>
            /// </signature>
        },
        tryLocationToPixel: function (location, reference) {
            /// <signature>
            /// <summary>
            /// Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts a specified Location to a Point on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Location, null is returned.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Locations and returns an array of Points if all locations were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>
        },
        tryPixelToLocation: function (point, reference) {
            /// <signature>
            /// <summary>
            /// Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
            /// </summary>
            /// <param name="point" type="Microsoft.Maps.Point"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts a specified Point to a Location on the map relative to the specified PixelReference. If reference is not specified, PixelReference.viewport is used. If the map is not able to convert the Point, null is returned.
            /// </summary>
            /// <param name="point" type="Microsoft.Maps.Point"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="points" type="Microsoft.Maps.Point[]"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Converts an array of Points and returns an array of Locations if all points were converted. If any of the conversions fail, null is returned.
            /// </summary>
            /// <param name="points" type="Microsoft.Maps.Point[]"></param>
            /// <param name="reference" type="Microsoft.Maps.PixelReference"></param>
            /// </signature>
        }
    };

    /* Static Methods */

    m.Map.getVersion = function () {
        /// <summary>
        /// Returns the version of the map control.
        /// </summary>
        /// <returns type='String'/>
    };

    m.Map.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.MapMode = function () {
        /// <summary>
        /// Represents a map mode for the MapTypeId values aerial, auto, birdseye, collinsBart, mercator, ordnanceSurvey, and road.
        /// </summary>
        /// <returns type="Microsoft.Maps.MapMode"/>
    };

    m.MapMode.prototype = {        
        getDrawShapesInSingleLayer: function () {
            /// <summary>
            /// Gets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getShouldClipPolygons: function () {
            /// <summary>
            /// Gets whether to clip polygons if they are too large for the map in the mode.
            /// </summary>
            /// <returns type='Boolean'></returns>
        }, 
        setDrawShapesInSingleLayer: function () {
            /// <deprecated type="deprecate">
            /// Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by calling setDrawShapesInSingleLayer(true).
            /// <para>[Deprecated] Use setOptions.</para>
            /// </deprecated>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the current map mode.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>shouldClipPolygons (boolean): Sets whether the mode should clip polygons if they are too large for the map in this mode.,</para>
            /// <para>drawShapesInSingleLayer (boolean): Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by setting this parameter to true.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the current map mode.
            /// </summary>
            /// <param name="options" type="AnonymousObject.MapModeOptions"/>
            /// </signature>
        },
        setViewChangeEndDelay : function (delay) {
            /// <summary>
            /// Sets the specified number of milliseconds after the last viewchange event before viewchangeend event is fired. This allows you to control how often the viewchangeend event is fired when the map is panned.
            /// </summary>
            /// <param name="delay" type='Number'></param>
        }
    };

    m.MapMode.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MapModeOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MapModeOptions.prototype = {
        /// <field type='Boolean'>Sets whether the mode should clip polygons if they are too large for the map in this mode.</field>
        shouldClipPolygons: {},
        /// <field type='Boolean'>Sets whether the mode should draw shapes (polygons, polylines, or pushpins) in a single layer, independent of the EntityCollection order. A shape is drawn by default in its own layer, but if one shape covers another shape, then the top-layered shape event is what is thrown. You can prevent this issue by setting this parameter to true.</field>
        drawShapesInSingleLayer: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MapOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MapOptions.prototype = {
        /// <field type='Color Class '>The color to use for the map control background. The default color is #F4F2EE. This property can only be set when using the Map constructor.</field>
        backgroundColor: {},
        /// <field type='String'>The Bing Maps Key used to authenticate the application. This property can only be set when using the Map constructor.</field>
        credentials: {},
        /// <field type='Boolean'>A boolean indicating whether to load the new Bing Maps overlay styles. The default value is false. This property can only be set when using the Map constructor.</field>
        customizeOverlays: {},
        /// <field type='Boolean'>A boolean indicating whether to disable the bird’s eye map type. The default value is false. If this property is set to true, bird’s eye will be removed from the map navigation control and the birdseyeMapTypeId is disabled. Additionally, the auto map type will only display road or aerial. This property can only be set when using the Map constructor.</field>
        disableBirdseye: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to keyboard input. The default value is false.</field>
        disableKeyboardInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to mouse input. The default value is false.</field>
        disableMouseInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the user’s ability to pan the map. The default value is false.</field>
        disablePanning: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to touch input. The default value is false.</field>
        disableTouchInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the map’s response to any user input. The default value is false.</field>
        disableUserInput: {},
        /// <field type='Boolean'>A boolean value indicating whether to disable the user’s ability to zoom in or out. The default value is false.</field>
        disableZooming: {},
        /// <field type='Boolean'>A boolean value indicating whether the BingTM logo on the map is clickable. The default value is true. This property can only be set when using the Map constructor.</field>
        enableClickableLogo: {},
        /// <field type='Boolean'>A boolean value indicating whether to enable the BingTM hovering search logo on the map. The default value is true. This property can only be set when using the Map constructor.</field>
        enableSearchLogo: {},
        /// <field type='Boolean'>A boolean indicating whether the div containing the map control is fixed on the page and the browser will not be resized. The default value is false. In this case the map control redraws if necessary based on any div or window resize. If this property is set to true, the map control does not check the size of the div containing it every time the map view changes, thus increasing the performance of the control. This property can only be set when using the Map constructor.</field>
        fixedMapPosition: {},
        /// <field type='Number'>The height of the map. The default value is null. If no height is specified, the height of the div is used. If height is specified, then width must be specified as well.</field>
        height: {},
        /// <field type='Number'>A number between 0 and 1 specifying the intensity of the inertia animation effect. The inertia effect increases as the intensity value gets larger. The default value is .85. Setting this property to 0 indicates no inertia effect. The useInertia property must be set to true for the inertiaIntensity value to have an effect.</field>
        inertiaIntensity: {},
        /// <field type='Boolean'>A boolean value indicating whether to display the “breadcrumb control”. The breadcrumb control shows the current center location’s geography hierarchy. For example, if the location center is Seattle, the breadcrumb control displays “World . United States . WA”. The default value is false. The breadcrumb control displays best when the width of the map is at least 300 pixels. This property can only be set when using the Map constructor.</field>
        showBreadcrumb: {},
        /// <field type='Boolean'>A boolean value indicating whether or not to show the map copyright. The default value is true. This property can only be set when using the Map constructor. Important: Bing Maps Platform API Terms of Use requires copyright information to be displayed. Only set this option to false when copyright information is displayed through alternate means.</field>
        showCopyright: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the map navigation control. The default value is true. This property can only be set when using the Map constructor.</field>
        showDashboard: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the map type selector in the map navigation control. The default value is true. This property can only be set when using the Map constructor.</field>
        showMapTypeSelector: {},
        /// <field type='Boolean'>A boolean value indicating whether to show the scale bar. The default value is true. This property can only be set when using the Map constructor.</field>
        showScalebar: {},
        /// <field type='Object'>A theme object specifying the theme to use for the design of the map. To get the latest Bing Maps design, load the Microsoft.Maps.Themes.BingTheme module and assign a BingTheme object to this property.</field>
        theme: {},
        /// <field type='Number'>A number between 0 and 4 specifying how many tiles to use as a buffer around the map view. The default value is 0.</field>
        tileBuffer: {},
        /// <field type='Boolean'>A boolean value indicating whether to use the inertia animation effect during map navigation. The default value is true.</field>
        useInertia: {},
        /// <field type='Number'>The width of the map. The default value is null. If no width is specified, the width of the div is used. If width is specified, then height must be specified as well.</field>
        width: {},
        /// <field type='String'>The homeRegion parameter specifies the user region using the ISO 3166-1 Alpha-2 country code for the region. By default it uses the region set on the users computer. Some regions are unsupported. This value can be overridden to a different region to get it to work.
        /// <para>Specific to Windows Store Apps Only</para></field>
        homeRegion: {},
        /// <field type='String'>The language that the map should be localized to.
        /// <para>Specific to Windows Store Apps Only. For Bing Maps V7 set the culture using the mkt parameter of the script reference.</para></field>
        culture: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.MouseEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary>
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.MouseEventArgs.prototype = {
        /// <field type='String'>The event that occurred.</field>
        eventName: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. If this property is set to true, the default map control behavior for the event is cancelled.</field>
        handled: {},
        /// <field type='Boolean'>A boolean indicating if the primary button (such as the left mouse button or a tap on a touch screen) was used.</field>
        isPrimary: {},
        /// <field type='Boolean'>A boolean indicating if the secondary mouse button (such as the right mouse button) was used.</field>
        isSecondary: {},
        /// <field type='Boolean'>A boolean indicating whether the event that occurred was a touch event.</field>
        isTouchEvent: {},
        /// <field type='object'>The original browser event.</field>
        originalEvent: {},
        /// <field type='Number'>The x-value of the pixel coordinate on the page of the mouse cursor.</field>
        pageX: {},
        /// <field type='Number'>The y-value of the pixel coordinate on the page of the mouse cursor.</field>
        pageY: {},
        /// <field type='object'>The object that fired the event.</field>
        target: {},
        /// <field type='String'>The type of the object that fired the event. Valid values include the following: ‘map’, ‘polygon’, ‘polyline’, or ‘pushpin’</field>
        targetType: {},
        /// <field type='Number'>The number of units that the mouse wheel has changed.</field>
        wheelDelta: {},
        getX: function () {
            /// <summary>
            /// Returns the x-value of the pixel coordinate, relative to the map, of the mouse.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getY: function () {
            /// <summary>
            /// Returns the y-value of the pixel coordinate, relative to the map, of the mouse.
            /// </summary>
            /// <returns type='Number'></returns>
        }
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Point = function (x, y) {
        /// <summary>
        /// Initializes a new instance of the Point class.
        /// </summary>
        /// <param name="x" type='Number'>The x value of the coordinate.</param>
        /// <param name="y" type='Number'>The y-value of the coordinate.</param>       
        /// <returns type="Microsoft.Maps.Point"/>
    };

    m.Point.prototype = {
        /// <field name="x" type='Number'>The x value of the coordinate.</field>
        x: {},
        /// <field name="y" type='Number'>The y-value of the coordinate.</field>
        y: {},

        areEqual: function () {
            /// <summary>
            /// Determines if the specified points are equal.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        clone: function () {
            /// <summary>
            /// Returns a copy of the Point object.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
    };

    /* Static Methods */

    m.Point.clone = function () {
        /// <summary>
        /// Returns a copy of the Point object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Point"></returns>
    };

    m.Point.toString = function () {
        /// <summary>
        /// Converts the Point object into a string.
        /// </summary>
        /// <returns type='String'></returns>
    };

    m.Point.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Polygon = function (locations, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="Object">{
        /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Polygon class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="AnonymousObject.PolygonOptions"/>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// <param name="options" type="Object">{
        /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Requires Microsoft.Maps.AdvancedShapes module.
        /// <para>Initializes a new instance of the Polygon class.</para>
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.AdvancedShapes", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[][]"></param>
        /// <param name="options" type="AnonymousObject.PolygonOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Polygon"/>
    };

    m.Polygon.prototype = {
        getFillColor: function () {
            /// <summary>
            /// Returns the color of the inside of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[]"></returns>
        },
        getRings: function () {
            /// <summary>
            /// Requires Microsoft.Maps.AdvancedShapes module.
            /// <para>Returns an array of location arrays, where each location array defines a ring of the polygon.</para>
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[][]"></returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polygon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polygon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polygon is visible. A value of false indicates that the polygon is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polygon.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        },
        setRings: function(rings){
            /// <summary>
            /// Requires Microsoft.Maps.AdvancedShapes module.
            /// <para>Sets an array of location arrays, where each location array defines a ring of the polygon.</para>
            /// </summary>
            /// <param name="rings" type="Microsoft.Maps.Locations[][]"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the polygon.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>fillColor (Microsoft.Maps.Color): The color of the inside of the polygon.,</para>
            /// <para>strokeColor (Microsoft.Maps.Color): The color of the outside of the polygon.,</para>
            /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
            /// <para>strokeThickness (number): The thickness of the outline of the polygon.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the polygon.
            /// </summary>
            /// <param name="options" type="AnonymousObject.PolygonOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the polygon object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Polygon.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Polygon.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PolygonOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PolygonOptions.prototype = {
        /// <field type='Microsoft.Maps.Color'>The color of the inside of the polygon.</field>
        fillColor: {},
        /// <field type='Microsoft.Maps.Infobox'>The info box associated with this polygon. If an info box is assigned and the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the polygon occur.</field>
        infobox: {},
        /// <field type='Microsoft.Maps.Color'>The color of the outline of the polygon.</field>
        strokeColor: {},
        /// <field type='String'>A string representing the stroke/gap sequence to use to draw the outline of the polygon. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polygon outline with a dash, four spaces, two dashes, one space, and then repeated.</field>
        strokeDashArray: {},
        /// <field type='Number'>The thickness of the outline of the polygon.</field>
        strokeThickness: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the polygon. A value of false indicates that the polygon is hidden, although it is still an entity on the map.</field>
        visible: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Polyline = function (locations, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="Object">{
        /// <para>strokeColor (Microsoft.Maps.Color): The color of the polyline.,</para>
        /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
        /// <para>strokeThickness (number): The thickness of the polyline.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the polyline class.
        /// <para>Supported Events: click, dblclick, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        /// <param name="options" type="AnonymousObject.PolylineOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Polyline"/>
    };

    m.Polyline.prototype = {
        getLocations: function () {
            /// <summary>
            /// Returns the locations that define the corners of the polyline.
            /// </summary>
            /// <returns type="Microsoft.Maps.Locations[]"></returns>
        },
        getStrokeColor: function () {
            /// <summary>
            /// Returns the color of the outline of the polyline.
            /// </summary>
            /// <returns type="Microsoft.Maps.Color"></returns>
        },
        getStrokeThickness: function () {
            /// <summary>
            /// Returns the thickness of the outline of the polyline.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the polyline is visible. A value of false indicates that the polyline is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setLocations: function (locations) {
            /// <summary>
            /// Sets the locations that define the corners of the polyline.
            /// </summary>
            /// <param name="locations" type="Microsoft.Maps.Location[]"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the polyline.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>strokeColor (Microsoft.Maps.Color): The color of the polyline.,</para>
            /// <para>strokeDashArray (string): A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline outline with a dash, four spaces, two dashes, one space, and then repeated.,</para>
            /// <para>strokeThickness (number): The thickness of the polyline.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the polyline.
            /// </summary>
            /// <param name="options" type="AnonymousObject.PolylineOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Polyline object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.Polyline.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.Polyline.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PolylineOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PolylineOptions.prototype = {
        /// <field type='Microsoft.Maps.Color'>The color of the polyline.</field>
        strokeColor: {},
        /// <field type='String'>A string representing the stroke/gap sequence to use to draw the polyline. The string must be in the format S, G, S*, G*, where S represents the stroke length and G represents gap length. Stroke lengths and gap lengths can be separated by commas or spaces. For example, a stroke dash string of “1 4 2 1” would draw the polyline with a dash, four spaces, two dashes, one space, and then repeated.</field>
        strokeDashArray: {},
        /// <field type='Number'>The thickness of the polyline.</field>
        strokeThickness: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the polyline. A value of false indicates that the polyline is hidden, although it is still an entity on the map.</field>
        visible: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Position = function () {
        /// <summary>
        /// Represents the position of a user on a map.
        /// </summary>
        /// <returns type="Microsoft.Maps.Position"/>
    };

    m.Position.prototype = {
        /// <field type='Microsoft.Maps.Coordinates'>The position as a W3C Coordinates object.</field>
        coords: {},
        /// <field type='String'>The time when the position was determined, in the form of a DOMTimeStamp.</field>
        timestamp: {}
    };

    m.Position.__class = true;
})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PositionCircleOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PositionCircleOptions.prototype = {
        /// <field type='AnonymousObject.PolygonOptions'>The polygon options for the geo location accuracy circle.</field>
        polygonOptions: {},
        /// <field type='Boolean'>A boolean indicating whether to display the geo location accuracy circle. The default value is true. If this property is set to false, a geo location accuracy circle is not drawn and any existing accuracy circles are removed.</field>
        showOnMap: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PositionOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PositionOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether only a high accuracy result should be retrieved. The default value is false. Setting this property to true may result in a slower response time.</field>
        enableHighAccuracy: {},
        /// <field type='function'>The function to call when an error occurs during the user location request. The callback function must accept one argument. The argument object contains two properties, internalError, a PositionError type, and errorCode, a number. <para>Any one of the following errorCode values may be returned:</para><para>1) The application origin does not have permission to use the GeoLocation API.</para><para>2) The position of the user could not be determined because of a device failure.</para><para>3) The time specified in timeout has been exceeded.</para><para>4) A request is already in process.</para><para>5) The user’s browser does not support geo location.</para></field>
        errorCallback:{},
        /// <field type='Number'>A number indicating the acceptable age, in milliseconds, of a cached geo location result to return. The default value is 0, which indicates a new (not cached) result will be retrieved.</field>
        maximumAge: {},
        /// <field type='Boolean'>A boolean indicating whether to display the polygon on the map that shows the accuracy of the returned geo location. The default value is true.</field>
        showAccuracyCircle: {},
        /// <field type='function'>The function to call when the user’s location was successfully retrieved. The callback function must accept one argument. The argument object contains two properties, center, a Location type, and position, a Position type.</field>
        successCallback: {},
        /// <field type='Number'>The length of time, in milliseconds, to allow for the geo location request to return. By default there is no timeout.</field>
        timeout: {},
        /// <field type='Boolean'>A boolean indicating whether to update the map view with the best view of the user’s location (if the request is successful). The default value is true.</field>
        updateMapView: {}
    };

})(this);﻿(function(window) {
    // where multiple possible types are specified the most structured type is documented. all options are documented in the summary.
    // e.g.  DirectionsWaypoint.location can be LatLng|string, the type documented is LatLng
    // enum fields do not provide code completion e.g. DirectionsRequest.travelMode. does not provide code completion
    // Reference Table of Contents

    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.Pushpin = function (location, options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>anchor (Microsoft.Maps.Point), draggable (boolean), height (number), htmlContent (string), icon (string), infobox (Microsoft.Maps.Infobox), state (Microsoft.Maps.EntityState), text (string), textOffset (Microsoft.Maps.Point), typeName (string), visible (boolean), width (number), zIndex (number)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="Object">{
        /// <para>anchor (Microsoft.Maps.Point): The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.,</para>
        /// <para>height (Number): Height of the map.</para>
        /// <para>draggable (boolean): A boolean indicating whether the pushpin can be dragged to a new position with the mouse.,</para>
        /// <para>htmlContent (string): The HTML that represents the pushpin.,</para>
        /// <para>icon (string): The path of the image to use as the pushpin icon.,</para>
        /// <para>infobox (Microsoft.Maps.Infobox): The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.,</para>
        /// <para>state (Microsoft.Maps.EntityState): The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.,</para>
        /// <para>text (string): The text associated with the pushpin.,</para>
        /// <para>textOffset (Microsoft.Maps.Point): The amount the text is shifted from the pushpin icon. The default value is (0,5).,</para>
        /// <para>typeName (string): The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.,</para>
        /// <para>width (number): The width of the pushpin, which is the width of the pushpin icon. The default value is 25.,</para>
        /// <para>zIndex (number): The z-index of the pushpin with respect to other items on the map.</para>
        /// <para>}</para>
        /// </param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the Pushpin class.
        /// <para>Supported Events: click, dblclick, drag, dragstart, dragend, entitychanged, mousedown, mouseout, mouseover, mouseup, rightclick</para>
        /// </summary>
        /// <param name="location" type="Microsoft.Maps.Location"></param>
        /// <param name="options" type="AnonymousObject.PushpinOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Map"/>
    };

    m.Pushpin.prototype = {
        getAnchor: function () {
            /// <summary>
            /// Returns the point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getIcon: function () {
            /// <summary>
            /// Returns the pushpin icon.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getHeight: function () {
            /// <summary>
            /// Returns the height of the pushpin, which is the height of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location of the pushpin.
            /// </summary>
            /// <returns type="Microsoft.Maps.Location"></returns>
        },
        getText: function () {
            /// <summary>
            /// Returns the text associated with the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getTextOffset: function () {
            /// <summary>
            /// Returns the amount the text is shifted from the pushpin icon.
            /// </summary>
            /// <returns type="Microsoft.Maps.Point"></returns>
        },
        getTypeName: function () {
            /// <summary>
            ///  Returns the type of the pushpin.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getVisible: function () {
            /// <summary>
            /// Returns whether the pushpin is visible. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the width of the pushpin, which is the width of the pushpin icon.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the pushpin with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setLocation: function (location) {
            /// <summary>
            /// Sets the location of the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Map.Location"></param>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="Object">{
            /// <para>anchor (Microsoft.Maps.Point), draggable (boolean), height (number), htmlContent (string), icon (string), infobox (Microsoft.Maps.Infobox), state (Microsoft.Maps.EntityState), text (string), textOffset (Microsoft.Maps.Point), typeName (string), visible (boolean), width (number), zIndex (number)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="Object">{
            /// <para>anchor (Microsoft.Maps.Point): The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.,</para>
            /// <para>draggable (boolean): A boolean indicating whether the pushpin can be dragged to a new position with the mouse.,</para>
            /// <para>height (Number): Height of the map.</para>
            /// <para>htmlContent (string): The HTML that represents the pushpin.,</para>
            /// <para>icon (string): The path of the image to use as the pushpin icon.,</para>
            /// <para>infobox (Microsoft.Maps.Infobox): The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.,</para>
            /// <para>state (Microsoft.Maps.EntityState): The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.,</para>
            /// <para>text (string): The text associated with the pushpin.,</para>
            /// <para>textOffset (Microsoft.Maps.Point): The amount the text is shifted from the pushpin icon. The default value is (0,5).,</para>
            /// <para>typeName (string): The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.,</para>
            /// <para>width (number): The width of the pushpin, which is the width of the pushpin icon. The default value is 25.,</para>
            /// <para>zIndex (number): The z-index of the pushpin with respect to other items on the map.</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the pushpin.
            /// </summary>
            /// <param name="location" type="Microsoft.Maps.Location"></param>
            /// <param name="options" type="AnonymousObject.PushpinOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the Pushpin object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.Pushpin.__class = true;
})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.PushpinOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.PushpinOptions.prototype = {
        /// <field type='Microsoft.Maps.Point'>The point on the pushpin icon which is anchored to the pushpin location. An anchor of (0,0) is the top left corner of the icon. The default anchor is the bottom center of the icon.</field>
        anchor: {},
        /// <field type='Boolean'>A boolean indicating whether the pushpin can be dragged to a new position with the mouse.</field>
        draggable: {},
        /// <field type='Number'>The height of the pushpin, which is the height of the pushpin icon. The default value is 39.</field>
        height: {},
        /// <field type='String'>The HTML that represents the pushpin.</field>
        htmlContent: {},
        /// <field type='String'>The path of the image to use as the pushpin icon.</field>
        icon: {},
        /// <field type='Microsoft.Maps.Infobox'>The info box associated with this pushpin. If the Microsoft.Maps.Themes.BingTheme module is loaded, then the info box appears when the hover or click events of the pushpin occur.</field>
        infobox: {},
        /// <field type='Microsoft.Maps.EntityState'>The state of the pushpin, such as highlighted or selected. To get the latest pushpin state design, load the Microsoft.Maps.Themes.BingTheme module before creating the pushpin.</field>
        state: {},
        /// <field type='String'>The text associated with the pushpin.</field>
        text: {},
        /// <field type='Microsoft.Maps.Point'>The amount the text is shifted from the pushpin icon. The default value is (0,5).</field>
        textOffset: {},
        /// <field type='String'>The type of the pushpin, as a string. The pushpin DOM (document object model) node created for the pushpin will have the specified typeName. A standard pushpin type is used unless the Microsoft.Maps.Themes.BingTheme module is loaded, in which case typeName can be set to ‘micro’ to use the micro pushpin type.</field>
        typeName: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the pushpin. The default value is true. A value of false indicates that the pushpin is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The width of the pushpin, which is the width of the pushpin icon. The default value is 25.</field>
        width: {},
        /// <field type='Number'>The z-index of the pushpin with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.TileLayer = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility), downloadTimeout (number), mercator (Microsoft.Maps.TileSource), opacity (number), visible (boolean), zIndex (number)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility): The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.,</para>
        /// <para>downloadTimeout (number): The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.,</para>
        /// <para>mercator (Microsoft.Maps.TileSource): The tile source for the tile layer.</para>
        /// <para>opacity (number): The opacity of the tile layer, defined by a number between 0 (not visible) and 1.,</para>
        /// <para>visible (boolean): A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.,</para>
        /// <para>zIndex (number): The z-index of the tile layer, with respect to other items on the map.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileLayer class.
        /// <para>Supported Events: tiledownloadcomplete</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.TileLayerOptions"/>
        /// </signature>
        /// <returns type="Microsoft.Maps.TileLayer"/>

        /// <returns type="Microsoft.Maps.TileLayer"/>
    };

    m.TileLayer.prototype = {
        getOpacity: function () {
            /// <summary>
            /// Returns the opacity of the tile layer, defined as a double between 0 (not visible) and 1.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getTileSource: function () {
            /// <summary>
            /// Returns the tile source of the tile layer. 
            /// The projection parameter accepts the following values: mercator, enhancedBirdseyeNorthUp, enhancedBirdseyeSouthUp, enhancedBirdseyeEastUp, enhancedBirdseyeWestUp.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileSource"></returns>
        },
        getZIndex: function () {
            /// <summary>
            /// Returns the z-index of the tile layer with respect to other items on the map.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        setOptions: function () {
            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility), downloadTimeout (number), mercator (Microsoft.Maps.TileSource), opacity (number), visible (boolean), zIndex (number)</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>animationDisplay (Microsoft.Maps.AnimationVisibility): The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.,</para>
            /// <para>downloadTimeout (number): The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.,</para>
            /// <para>mercator (Microsoft.Maps.TileSource): The tile source for the tile layer.</para>
            /// <para>opacity (number): The opacity of the tile layer, defined by a number between 0 (not visible) and 1.,</para>
            /// <para>visible (boolean): A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.,</para>
            /// <para>zIndex (number): The z-index of the tile layer, with respect to other items on the map.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the tile layer.
            /// </summary>
            /// <param name="options" type="AnonymousObject.TileLayerOptions"/>
            /// </signature>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileLayer object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    /* Static Methods */

    m.TileLayer.clone = function () {
        /// <summary>
        /// Returns a copy of the Color object.
        /// </summary>
        /// <returns type="Microsoft.Maps.Color"/>
    };

    m.TileLayer.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.TileLayerOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.TileLayerOptions.prototype = {
        /// <field type='Microsoft.Maps.AnimationVisibility'>The tile layer’s visibility during animation. You can use this property to prevent overlays from displaying during animations, which can impact performance. The default value is auto.</field>
        animationDisplay: {},
        /// <field type='Number'>The number of milliseconds allowed for the tile layer image download. If the timeout occurs before the image is fully downloaded, the map control considers the download a failure. The default value is 10000.</field>
        downloadTimeout: {},
        /// <field type='Microsoft.Maps.TileSource'>The tile source for the tile layer.</field>
        mercator: {},
        /// <field type='Number'>The opacity of the tile layer, defined by a number between 0 (not visible) and 1.</field>
        opacity: {},
        /// <field type='Boolean'>A boolean indicating whether to show or hide the tile layer. The default value is true. A value of false indicates that the tile layer is hidden, although it is still an entity on the map.</field>
        visible: {},
        /// <field type='Number'>The z-index of the tile layer, with respect to other items on the map.</field>
        zIndex: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}

    var m = Microsoft.Maps;

    m.TileSource = function (options) {
        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileSource class.
        /// </summary>
        /// <param name="options" type="Object">{        
        /// <para>uriConstructor (string|function): Required: A formatted Url (or callback function that creates the Url) to retrieve tiles from the tile source. The uriConstructor will replace {subdomain} and {quadkey}. If a callback function is used it will recieve one parameter object of format: { levelOfDetail, x, y },</para>
        /// <para>height (number): The pixel height of each tile in the tile source. The default value is 256.,</para>
        /// <para>width (number): The pixel width of each tile in the tile source. The default value is 256.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Initializes a new instance of the TileSource class.
        /// </summary>
        /// <param name="options" type="AnonymousObject.TileSourceOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.TileSource"/>
    };

    m.TileSource.prototype = {
        getHeight: function () {
            /// <summary>
            /// Returns the pixel height of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        getUriConstructor: function () {
            /// <signature>
            /// <summary>
            /// Returns a string that constructs tile URLs used to retrieve tiles for the tile layer.
            /// </summary>
            /// <returns type='String'></returns>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Returns the callback function that constructs tile URLs used to retrieve tiles for the tile layer. The function takes in an object of format: { levelOfDetail:number, x:number, y:number }.
            /// </summary>
            /// <returns type="function"></returns>
            /// </signature>
        },
        getWidth: function () {
            /// <summary>
            /// Returns the pixel width of each tile in the tile source.
            /// </summary>
            /// <returns type='Number'></returns>
        },
        toString: function () {
            /// <summary>
            /// Converts the TileSource object to a string.
            /// </summary>
            /// <returns type='String'></returns>
        }
    };

    m.TileSource.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.TileSourceOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.TileSourceOptions.prototype = {
        /// <field type='Number'>The pixel height of each tile in the tile source. The default value is 256. The specified height needs to be a multiplier of 2 of the current projection’s tile height for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.</field>
        height: {},
        /// <field type='String'>The string that constructs the URLs used to retrieve tiles from the tile source. This property is required. The uriConstructor will replace {subdomain} and {quadkey}. You can also set this to a callback function that receives a tile URL with location (x,y) and zoom level properties. This is useful when you want to use tiles with x/y/zoom URL structure, or if you are connecting to a Web Map Service (WMS) and need to pass the tile bounding box in the URL. If a callback function is used it will recieve one parameter object of format: { levelOfDetail:number, x:number, y:number }</field>
        uriConstructor: {},
        /// <field type='Number'>The pixel width of each tile in the tile source. The default value is 256. The specified width needs to be a multiplier of 2 of the current projection’s tile width for the tiles to be shown. For example, since Mercator tile source tiles are 256x256, this projection supports tiles that are 64x64, 128x128, 256x256, 512x512, or any combination of these.</field>
        width: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Traffic = window.Microsoft.Maps.Traffic || {}

    var m = Microsoft.Maps.Traffic;

    m.TrafficLayer = function (map) {
        /// <deprecated type="deprecate">
        /// Requires Microsoft.Maps.Traffic module.
        /// <para>Initializes a new instance of the TrafficLayer class.</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </deprecated>

        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Traffic.TrafficLayer"/>
    };

    m.TrafficManager.prototype = {
        hide: function () {
            /// <summary>
            /// Hides traffic data.
            /// </summary>
        },
        getTileLayer: function () {
            /// <summary>
            /// Returns the traffic layer.
            /// </summary>
            /// <returns type="Microsoft.Maps.TileLayer"></returns>
        },
        show: function () {
            /// <summary>
            /// Displays traffic data.
            /// </summary>
        }
    };

    m.TrafficLayer.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Traffic = window.Microsoft.Maps.Traffic || {}

    var m = Microsoft.Maps.Traffic;

    m.TrafficManager = function (map) {
        /// <summary>
        /// Requires Microsoft.Maps.Traffic module.
        /// <para>Initializes a new instance of the TrafficManager class.</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>

        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Traffic.TrafficManager"/>
    };

    m.TrafficManager.prototype = {
        hide: function () {
            /// <summary>
            /// Hides all traffic data.
            /// </summary>
        },
        hideFlow: function () {
            /// <summary>
            /// Hides the traffic flow layer.
            /// </summary>
        },
        hideIncidents: function () {
            /// <summary>
            /// Hides all traffic incidents.
            /// </summary>
        },
        hideLegend: function () {
            /// <summary>
            /// Hides the traffic legend.
            /// </summary>
        },
        show: function () {
            /// <summary>
            /// Displays all traffic data.
            /// </summary>
        },
        showFlow: function () {
            /// <summary>
            /// Displays the traffic flow layer.
            /// </summary>
        },
        showIncidents: function () {
            /// <summary>
            /// Displays all traffic incidents.
            /// </summary>
        },
        showLegend: function () {
            /// <summary>
            /// Displays the traffic legend.
            /// </summary>
        }
    };

    m.TrafficManager.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.ViewOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.ViewOptions.prototype = {
        /// <field type='Boolean'>A boolean that specifies whether to animate map navigation. Note that this option is associated with each setView call and defaults to true if not specified.</field>
        animate: {},
        /// <field type='Microsoft.Maps.LocationRect'>The bounding rectangle of the map view. If both are specified, bounds takes precedence over center.</field>
        bounds: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the map view. If both are specified, bounds takes precedence over center.</field>
        center: {},
        /// <field type='Microsoft.Maps.Point'>The amount the center is shifted. This property is ignored if center is not specified.</field>
        centerOffset: {},
        /// <field type='Number'>The directional heading of the map. The heading is represented in geometric degrees with 0 or 360 = North, 90 = East, 180 = South, and 270 = West.</field>
        heading: {},
        /// <field type='Microsoft.Maps.LabelOverlay'>A constant indicating how map labels are displayed.</field>
        labelOverlay: {},
        /// <field type='Microsoft.Maps.MapTypeId'>The map type of the view.</field>
        mapTypeId: {},
        /// <field type='Number'>The amount of padding to be added to each side of the bounds of the map view.</field>
        padding: {},
        /// <field type='Number'>The zoom level of the map view.</field>
        zoom: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.BusinessDetail = function () {
        /// <summary>
        /// Represents the read-only business details for a waypoint.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.BusinessDetail"/>
    };

    m.BusinessDetail.prototype = {
        /// <field type='String'>The business name of the waypoint.</field>
        businessName: {},
        /// <field type='String'>The Bing Maps entity ID of the business.</field>
        entityId: {},
        /// <field type='String'>The phone number of the business.</field>
        phoneNumber: {},
        /// <field type='String'>The URL of the business’ website.</field>
        website: {}
    };

    m.BusinessDetail.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.BusinessDisambiguationSuggestion = function () {
        /// <summary>
        /// Represents the read-only possible business result returned from geocoding a specified waypoint address or location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.BusinessDisambiguationSuggestion"/>
    };

    m.BusinessDisambiguationSuggestion.prototype = {
        /// <field type='String'>The address of the business result.</field>
        address: {},
        /// <field type='Number'>The distance of the business result from the originally specified waypoint address or location.</field>
        distance: {},
        /// <field type='String'>The Yellow Pages ID for the business.</field>
        entityId: {},
        /// <field type='Number'>The index of this suggestion within the business suggestion array.</field>
        index: {},
        /// <field type='Boolean'>A boolean indicating whether the result location is approximate.</field>
        isApproximate: {},
        /// <field type='Location'>The location of the business suggestion.</field>
        location: {},
        /// <field type='String'>The name of the business.</field>
        name: {},
        /// <field type='String'>The phone number of the business suggestion.</field>
        phoneNumber: {},
        /// <field type='String'>The URL of a photo of the business suggestion.</field>
        photoUrl: {},
        /// <field type='Location'>The rooftop location of the business suggestion.</field>
        rooftopLocation: {},
        /// <field type='String'>The URL of the business result’s website.</field>
        website: {}
    };

    m.BusinessDisambiguationSuggestion.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    /* Enumerators */

    m.DistanceUnit = {
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>Kilometers are used to measure route distances.</field>
        kilometers: {},
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>Miles are used to measure route distances.</field>
        miles: {},
        __enum: true
    };

    m.IconType = {
        /// <field type='Microsoft.Maps.Directions.IconType'>There is no route icon.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is some other type of icon.</field>
        other: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a car icon.</field>
        auto: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a ferry icon.</field>
        ferry: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a walking icon.</field>
        walk: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a bus, or transit, icon</field>
        bus: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is a train icon.</field>
        train: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The icon is an airline icon.</field>
        airline: {},
        __enum: true
    };

    m.Maneuver = {
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The step is not a maneuver.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver is unknown.</field>
        unknown: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from the start waypoint.</field>
        departStart: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from an intermediate stop point going in a different direction and on a different road than which you arrived.</field>
        departIntermediateStop: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Depart from an intermediate stop point going back in the same direction and on the same road on which you arrived.</field>
        departIntermediateStopReturning: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Arrive at the end waypoint.</field>
        arriveFinish: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Arrive at an intermediate stop point.</field>
        arriveIntermediateStop: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left.</field>
        turnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right.</field>
        turnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn back sharply.</field>
        turnBack: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Make a u-turn to go in the opposite direction.</field>
        uTurn: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left to stay on the same road.</field>
        turnToStayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right to stay on the same road.</field>
        turnToStayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left.</field>
        bearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right.</field>
        bearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left to stay on the same road.</field>
        keepToStayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right to stay on the same road.</field>
        keepToStayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight to stay on the same road.</field>
        keepToStayStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left onto a different road.</field>
        keepLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right onto a different road.</field>
        keepRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight onto a different road.</field>
        keepStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the road. This instruction is used when you are entering or exiting a ferry.</field>
        take: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the ramp to the left.</field>
        takeRampLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take the ramp to the right.</field>
        takeRampRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Stay straight to take the ramp.</field>
        takeRampStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep left and continue onto ramp.</field>
        keepOnRampLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep right and continue onto ramp.</field>
        keepOnRampRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Keep straight and continue onto ramp.</field>
        keepOnRampStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Merge onto highway.</field>
        merge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Continue on the current road.</field>
        continueRoute: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The road name changed.</field>
        roadNameChange: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Enter a roundabout.</field>
        enterRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Exit a roundabout.</field>
        exitRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then turn right.</field>
        turnRightThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then turn left.</field>
        turnRightThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then bear right.</field>
        turnRightThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn right and then bear left.</field>
        turnRightThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then turn left.</field>
        turnLeftThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then turn right.</field>
        turnLeftThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then bear left.</field>
        turnLeftThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn left and then bear right.</field>
        turnLeftThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then turn right.</field>
        bearRightThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then turn left.</field>
        bearRightThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then bear right.</field>
        bearRightThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear right and then bear left.</field>
        bearRightThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then turn left.</field>
        bearLeftThenTurnLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then turn right.</field>
        bearLeftThenTurnRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then bear right.</field>
        bearLeftThenBearRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear left and then bear left.</field>
        bearLeftThenBearLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take left ramp onto highway. This is part of a combined instruction.</field>
        rampThenHighwayRight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take right ramp onto highway. This is part of a combined instruction.</field>
        rampThenHighwayLeft: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Stay straight to take the ramp onto the highway. This is part of a combined instruction.</field>
        rampToHighwayStraight: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Enter and exit a roundabout.</field>
        enterThenExitRoundabout: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear instruction and then a merge instruction.</field>
        bearThenMerge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Turn instruction and then a merge instruction.</field>
        turnThenMerge: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Bear instruction and then a keep instruction.</field>
        bearThenKeep: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Transfer between public transit lines at a transit stop.</field>
        transfer: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Wait at a transit stop.</field>
        wait: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Take transit.</field>
        takeTransit: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver is a walking instruction.</field>
        walk: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Get on a public transit line at a transit stop.</field>
        transitDepart: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>Get off a public transit line at a transit stop.</field>
        transitArrive: {},
        __enum: true
    };

    m.RouteAvoidance = {
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Calculate the best route using any travel option available.</field>
        none: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Reduce the use of limited access highways when calculating the route.</field>
        minimizeLimitedAccessHighway: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Reduce the use of roads with tolls when calculating the route.</field>
        minimizeToll: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using limited access highways when calculating the route.</field>
        avoidLimitedAccessHighway: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using roads with tolls when calculating the route.</field>
        avoidToll: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using express trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidExpressTrain: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using airlines when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidAirline: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance'>Avoid using bullet trains when calculating the route. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        avoidBulletTrain: {},
        __enum: true
    };

    m.RouteMode = {
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Driving directions are calculated.</field>
        driving: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Transit directions are calculated.</field>
        transit: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>Walking directions are calculated.</field>
        walking: {},
        __enum: true
    };

    m.RouteOptimization = {
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Calculate a route the shortest time.</field>
        shortestTime: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Calculate a route with the shortest distance.</field>
        shortestDistance: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize the cost when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeMoney: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize transit transfers when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeTransfers: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>Minimize the amount of walking when calculating directions. This option only affects routes with a transitRouteMode that have the culture set to ja-jp.</field>
        minimizeWalking: {},
        __enum: true
    };

    m.RouteResponseCode = {
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The route was successfully calculated.</field>
        success: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>An unknown error has occurred.</field>
        unknownError: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>A nearby road cannot be found for one or more of the route waypoints.</field>
        cannotFindNearbyRoad: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The distance between two route waypoints, or the total length of the route exceeds the limit of the route mode. Modify the waypoint locations so that they are closer together.</field>
        tooFar: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>A route cannot be calculated for the specified waypoints. For example, this code is returned when a route between “Seattle, WA” and “Honolulu, HI” is requested.</field>
        noSolution: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There is no route data for the specified waypoints.</field>
        dataSourceNotFound: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There are no transit options available for the specified time.</field>
        noAvailableTransitTrip: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The transit stops are so close that walking is always a better option.</field>
        transitStopsTooClose: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The transit stops are so close that walking is a better option.</field>
        walkingBestAlternative: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>There is no transit data available for the route or for one or more of the specified waypoints, or the waypoints are in different transit areas that do not overlap.</field>
        outOfTransitBounds: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The directions calculation request has timed out.</field>
        timeout: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>One or more waypoints need to be disambiguated. This error does not occur if the autoDisplayDisambiguation directions render option is set to true.</field>
        waypointDisambiguation: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>One or more waypoints do not have an address or location specified.</field>
        hasEmptyWaypoint: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The maximum number of waypoints, which is 25, has been exceeded.</field>
        exceedMaxWaypointLimit: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>At least two waypoints are required to calculate a route.</field>
        atleastTwoWaypointRequired: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The first or last waypoint is a via point, which is not allowed.</field>
        firstOrLastStoppointIsVia: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The search service failed to return results.</field>
        searchServiceFailed: {},
        /// <field type='Microsoft.Maps.Directions.RouteResponseCode'>The credentials passed to the Directions module are invalid.</field>
        invalidCredentials: {},
        __enum: true
    };

    m.StepWarningStyle = {
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is just information about the route direction.</field>
        info: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a minor warning, and may affect the route direction.</field>
        minor: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a moderate warning and is likely to affect the route direction.</field>
        moderate: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning is a major warning, and is highly likely to affect the route direction.</field>
        major: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning indicates a congestion zone is being entered.</field>
        ccZoneEnter: {},
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The warning indicates a congestion zone is being exited.</field>
        ccZoneExit: {},
        __enum: true
    };

    m.TimeType = {
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is an arrival time.</field>
        arrival:{},
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is a departure time.</field>
        departure:{},
        /// <field type='Microsoft.Maps.Directions.TimeType'>The time specified is the last available time. This time type is only returned for routes with a transitRouteMode that have the culture set to ja-jp.</field>
        lastAvailable: {},
        __enum: true
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsErrorEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsErrorEventArgs.prototype = {
        /// <field type='Microsoft.Maps.DirectionsRouteResponseCode'>The code which identifies the error that occurred.</field>
        responseCode: {},
        /// <field type='String'>The error message.</field>
        message: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsEventArgs.prototype = {
        /// <field type='Microsoft.Maps.Directions.RouteSummary[]'>The route summary (or summaries) of the route(s) defined in the route property.</field>
        routeSummary: {},
        /// <field type='Microsoft.Maps.Directions.Route[]'>The calculated route (or routes, if the route mode is transit).</field>
        route: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsManager = function (map) {
        /// <summary>
        /// Contains methods for calculating directions and displaying a route on a map.
        /// <para>Supported Events: afterRouteSelectorRender, afterStepRender, afterSummaryRender, afterWaypointRender, beforeDisambiguationRender, beforeRouteSelectorRender, beforeStepRender, beforeSummaryRender, beforeWaypointRender, directionsError, directionsUpdated, dragDropCompleted, itineraryStepClicked, mouseEnterRouteSelector, mouseEnterStep, mouseLeaveRouteSelector, mouseLeaveStep, routeSelectorClicked, waypointAdded, waypointRemoved</para>
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Directions", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>
        /// <returns type='Microsoft.Maps.Directions.DirectionsManager'/>
    };

    m.DirectionsManager.prototype = {
        addWaypoint: function (waypoint, index) {
            /// <signature>
            /// <summary>
            /// Adds a waypoint to the end of the route. To recalculate the route, use calculateDirections. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Adds a waypoint to the route at the given index. If an index is not specified the waypoint is added as the last waypoint in the route. To recalculate the route, use calculateDirections. The maximum number of walking or driving waypoints is 25. The maximum number of transit waypoints is 2. Up to 10 via points are allowed between two stop waypoints.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// <param name="index" type='Number'></param>
            /// </signature>
        },
        calculateDirections: function () {
            /// <summary>
            /// Calculates directions based on request and render options set (setRequestOptions, setRenderOptions) and the waypoints added (addWaypoint). The directionsUpdated event fires when the calculation is complete and the route is displayed on the map. You must call this method after making any changes to the route options or waypoints.
            /// </summary>
        },
        clearDisplay: function () {
            /// <summary>
            /// Clears the directions displayed and removes the route line from the map. This method does not remove waypoints from the route and retains all calculated direction information and option settings. To clear the calculated directions and options, use resetDirections.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Deletes the DirectionsManager object and releases any associated resources.
            /// </summary>
        },
        getAllWaypoints: function () {
            /// <summary>
            /// Returns the waypoints for the route.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Waypoint[]'></returns>
        },
        getMap: function () {
            /// <summary>
            /// Returns the map object associated with the directions manager.
            /// </summary>
            /// <returns type='Microsoft.Maps.Map'></returns>
        },
        getNearbyMajorRoads: function (location, callback, errorCallback, userData) {
            /// <signature>
            /// <summary>
            /// Searches around the specified location for nearby major roads and returns them as an object to the callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves an AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches around the specified location for nearby major roads and returns them as an object to the callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves an AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// <param name="userData" type="Object"></param>
            /// </signature>
        },
        getRenderOptions: function () {
            /// <signature>
            /// <summary>
            /// Returns the route render options.
            /// </summary>
            /// <returns name="options" type="AnonymousObject.DirectionsRenderOptions"/>
            /// </returns>
            /// </signature>
        },
        getRequestOptions: function () {
            /// <signature>
            /// <summary>
            /// Returns the directions request options.
            /// </summary>
            /// <returns name="options" type="AnonymousObject.DirectionsRequestOptions"/>
            /// </returns>
            /// </signature>
        },
        getRouteResult: function () {
            /// <summary>
            /// Returns the current calculated route(s). If the route was not successfully calculated, null is returned.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Route[]'></returns>
        },
        removeWaypoint: function (waypoint) {
            /// <summary>
            /// Removes the given waypoint from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <signature>
            /// <summary>
            /// Removes the given waypoint or the waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <param name="waypoint" type="Microsoft.Maps.Directions.Waypoint"></param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Removes the given waypoint identified by the given index from the route. Use calculateDirections to update the route once a waypoint has been removed.
            /// </summary>
            /// <param name="index" type='Number'></param>
            /// </signature>
        },
        resetDirections: function (options) {
            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>removeAllWaypoints (boolean), resetRenderOptions (boolean), resetRequestOptions (boolean)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>removeAllWaypoints (boolean): A boolean indicating whether to remove all of the waypoints of the route. The default value is false.,</para>
            /// <para>resetRenderOptions (boolean): A boolean indicating whether to reset all of the render options set for the route. The default value is false.,</para>
            /// <para>resetRequestOptions (boolean): A boolean indicating whether to reset all of the request options set for the route. The default value is false.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// If no options object is supplied, clears the directions request and render options and removes all waypoints.
            /// </summary>
            /// <param name="options" type="AnonymousObject.RestDirectionsOptions"/>
            /// </signature>
        },
        reverseGeocode: function (location, callback, errorCallback, userData) {
            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address to the specified callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful. Recieves two paramters: {formattedAddress:'', shortFormattedAddress:''}, and useData.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful.</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address to the specified callback function.
            /// </summary>
            /// <param name="Microsoft.Maps.Location" type='String'></param>
            /// <param name="callback" type="function">Callback method to fire when successful. Recieves two paramters: {formattedAddress:'', shortFormattedAddress:''}, and useData.</param>
            /// <param name="errorCallback" type="function">Callback method to call when unsuccessful. Recieves a AnonymousObject.DirectionsErrorEventArgs parameter.</param>
            /// <param name="userData" type="Object"></param>
            /// </signature>
        },
        setMapView: function () {
            /// <summary>
            /// Sets the map view based on the current route index.
            /// </summary>
        },
        setRenderOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>autoDisplayDisambiguation (boolean), autoUpdateMapView (boolean), disambiguationPushpinOptions (AnonymousObject.PushpinOptions), displayDisclaimer (boolean), displayManeuverIcons (boolean), displayPostItineraryItemHints (boolean), displayPreItineraryItemHints (boolean), displayRouteSelector (boolean), displayStepWarnings (boolean), displayTrafficAvoidanceOption (boolean), displayWalkingWarning (boolean), drivingPolylineOptions (AnonymousObject.PolylineOptions), itineraryContainer (DOMElement), lastWaypointIcon (string), middleWaypointIcon (string), stepPushpinOptions (AnonymousObject.PushpinOptions), transitPolylineOptions (AnonymousObject.PolylineOptions), viapointPushpinsOptions (AnonymousObject.PushpinOptions), walkingPolylineOptions (AnonymousObject.PolylineOptions), waypointPushpinOptions (AnonymousObject.PushpinOptions)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>autoDisplayDisambiguation (boolean): A boolean indicating whether to automatically display a disambiguation dialog for waypoints. The default value is true.,</para>
            /// <para>autoUpdateMapView (boolean): A boolean indicating whether to automatically set the map view to the best map view of the calculated route. The default value is true.,</para>
            /// <para>disambiguationPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for disambiguation.,</para>
            /// <para>displayDisclaimer (boolean): A boolean indicating whether to display the disclaimer about the accuracy of the directions. The default value is false.,</para>
            /// <para>displayManeuverIcons (boolean): A boolean indicating whether to display the icons for each direction maneuver. The default value is true.,</para>
            /// <para>displayPostItineraryItemHints (boolean): A boolean indicating whether to display direction hints that describe when an direction step was missed. The default value is true.,</para>
            /// <para>displayPreItineraryItemHints (boolean): A boolean indicating whether to display direction hints that describe what to look for before you come to the next direction step. The default value is true.,</para>
            /// <para>displayRouteSelector (boolean): A boolean indicating whether to display the route selector control. The default value is true.,</para>
            /// <para>displayStepWarnings (boolean): A boolean indicating whether to display direction warnings. The default value is true.,</para>
            /// <para>displayTrafficAvoidanceOption (boolean): A boolean indicating whether to display the control that allows the user to choose to avoid traffic. The default value is true.,</para>
            /// <para>displayWalkingWarning (boolean): A boolean indicating whether to display a warning about walking directions. The default value is true.,</para>
            /// <para>drivingPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is driving.,</para>
            /// <para>itineraryContainer (DOMElement): The DOM element inside which the directions itinerary will be rendered.,</para>
            /// <para>lastWaypointIcon (string): The URL of the icon to use for the end waypoint.,</para>
            /// <para>middleWaypointIcon (string): The URL of the icon to use for intermediate waypoints.,</para>
            /// <para>stepPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for each direction step.,</para>
            /// <para>transitPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is transit.,</para>
            /// <para>viapointPushpinsOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for each via point of the route, which are any waypoints other than the start and end waypoints.,</para>
            /// <para>walkingPolylineOptions (AnonymousObject.PolylineOptions): The options that define how to draw the route line on the map, if the RouteMode is walking.,</para>
            /// <para>waypointPushpinOptions (AnonymousObject.PushpinOptions): The options that define the pushpin to use for the route waypoint.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified render options for the route.
            /// </summary>
            /// <param name="options" type="AnonymousObject.DirectionsRenderOptions"/>
            /// </signature>
        },
        setRequestOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>avoidTraffic (boolean), distanceUnit (Microsoft.Maps.Directions.DistanceUnit), maxRoutes (number), routeAvoidance (Microsoft.Maps.Directions.RouteAvoidance[]), routeDraggable (boolean), routeIndex (number), routeMode (Microsoft.Maps.Directions.RouteMode), routeOptimization (Microsoft.Maps.Directions.RouteOptimization), transitOptions (Object{timeType:(Microsoft.Maps.Directions.TimeType),transitTime:(Date)})</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="Object">{      
            /// <para>avoidTraffic (boolean): A boolean indicating whether to return traffic info when calculating the route. The default value is false.</para>
            /// <para>distanceUnit (Microsoft.Maps.Directions.DistanceUnit): The unit to use when displaying direction distances. The default value is based on the specified culture.</para>
            /// <para>maxRoutes (number): The number of routes to calculate. If the routeMode is driving or walking, only 1 route is supported. If the routeMode is transit, up to 6 routes can be calculated and the default is 3.</para>
            /// <para>routeAvoidance (Microsoft.Maps.Directions.RouteAvoidance[]): The features to avoid when calculating the route. The default value is none.</para>
            /// <para>routeDraggable (boolean): A boolean indicating whether the route line on the map can be dragged with the mouse cursor. The default value is true. When a route is dragged, a via point is added to the route. To change the drag behavior of a waypoint, set the draggable property of the waypointPushpinOptions (of the DirectionsRenderOptions).</para>
            /// <para>routeIndex (number): If multiple routes are returned, the index of the route and directions to display. This property only applies to routes where the routeMode is transit, and in this case up to 6 routes are supported.</para>
            /// <para>routeMode (Microsoft.Maps.Directions.RouteMode): The type of directions to calculate. The default value is driving. When the culture is ja-jp, only the transit route mode is supported, which is the default for that market.</para>
            /// <para>routeOptimization (Microsoft.Maps.Directions.RouteOptimization): The optimization setting for the route calculation. The default value is shortestTime.</para>
            /// <para>transitOptions (AnonymousObject.TransitOptions): The extra options for calculating a route if the routeMode is transit. Format: {timeType:(Microsoft.Maps.Directions.TimeType),transitTime:(Date)}</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets the specified route calculation options.
            /// </summary>
            /// <param name="options" type="AnonymousObject.DirectionsRequestOptions"/>
            /// </signature>
        }
    };

    m.DirectionsManager.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsRenderOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsRenderOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to automatically display a disambiguation dialog for waypoints. The default value is true. If this value is set to true, a directionsError event caused by waypoint disambiguation is not thrown.</field>
        autoDisplayDisambiguation: {},
        /// <field type='Boolean'>A boolean indicating whether to automatically set the map view to the best map view of the calculated route. The default value is true.</field>
        autoUpdateMapView: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for disambiguation.</field>
        disambiguationPushpinOptions: {},
        /// <field type='Boolean'>A boolean indicating whether to display the disclaimer about the accuracy of the directions. The default value is false.</field>
        displayDisclaimer: {},
        /// <field type='Boolean'>A boolean indicating whether to display the icons for each direction maneuver. The default value is true.</field>
        displayManeuverIcons: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction hints that describe when an direction step was missed. The default value is true.</field>
        displayPostItineraryItemHints: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction hints that describe what to look for before you come to the next direction step. The default value is true.</field>
        displayPreItineraryItemHints: {},
        /// <field type='Boolean'>A boolean indicating whether to display the route selector control. The default value is true.</field>
        displayRouteSelector: {},
        /// <field type='Boolean'>A boolean indicating whether to display direction warnings. The default value is true.</field>
        displayStepWarnings: {},
        /// <field type='Boolean'>A boolean indicating whether to display the control that allows the user to choose to avoid traffic. The default value is true.</field>
        displayTrafficAvoidanceOption: {},
        /// <field type='Boolean'>A boolean indicating whether to display a warning about walking directions. The default value is true.</field>
        displayWalkingWarning: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is driving.</field>
        drivingPolylineOptions: {},
        /// <field type='DOMElement'>The DOM element inside which the directions itinerary will be rendered.</field>
        itineraryContainer: {},
        /// <field type='String'>The URL of the icon to use for the end waypoint.</field>
        lastWaypointIcon: {},
        /// <field type='String'>The URL of the icon to use for intermediate waypoints.</field>
        middleWaypointIcon: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for each direction step.</field>
        stepPushpinOptions: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is transit.</field>
        transitPolylineOptions: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for each via point of the route, which are any waypoints other than the start and end waypoints.</field>
        viapointPushpinsOptions: {},
        /// <field type='AnonymousObject.PolylineOptions'>The options that define how to draw the route line on the map, if the RouteMode is walking.</field>
        walkingPolylineOptions: {},
        /// <field type='AnonymousObject.PushpinOptions'>The options that define the pushpin to use for the route waypoint.</field>
        waypointPushpinOptions: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsRequestOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to return traffic info when calculating the route. The default value is false.</field>
        avoidTraffic: {},
        /// <field type='Microsoft.Maps.Directions.DistanceUnit'>The unit to use when displaying direction distances. The default value is based on the specified culture.</field>
        distanceUnit: {},
        /// <field type='Number'>The number of routes to calculate. If the routeMode is driving or walking, only 1 route is supported. If the routeMode is transit, up to 6 routes can be calculated and the default is 3.</field>
        maxRoutes: {},
        /// <field type='Microsoft.Maps.Directions.RouteAvoidance[]'>The features to avoid when calculating the route. The default value is none.</field>
        routeAvoidance: {},
        /// <field type='Boolean'>A boolean indicating whether the route line on the map can be dragged with the mouse cursor. The default value is true. When a route is dragged, a via point is added to the route. To change the drag behavior of a waypoint, set the draggable property of the waypointPushpinOptions (of the DirectionsRenderOptions).</field>
        routeDraggable: {},
        /// <field type='Number'>If multiple routes are returned, the index of the route and directions to display. This property only applies to routes where the routeMode is transit, and in this case up to 6 routes are supported.</field>
        routeIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteMode'>The type of directions to calculate. The default value is driving. When the culture is ja-jp, only the transit route mode is supported, which is the default for that market.</field>
        routeMode: {},
        /// <field type='Microsoft.Maps.Directions.RouteOptimization'>The optimization setting for the route calculation. The default value is shortestTime.</field>
        routeOptimization: {},
        /// <field type='AnonymousObject.TransitOptions'>The extra options for calculating a route if the routeMode is transit.</field>
        transitOptions: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsStep = function () {
        /// <summary>
        /// Represents one direction in a set of route directions.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.DirectionsStep"/>
    };

    m.DirectionsStep.prototype = {
        /// <field type='Microsoft.Maps.Directions.DirectionsStep[]'>The child direction items for this directions step.</field>
        childItineraryItems: {},
        /// <field type='Microsoft.Maps.Location'>The location of the start of the direction.</field>
        coordinate: {},
        /// <field type='String'>The total distance of the step in the unit specified in the distanceUnit property of the DirectionsRequestOptions.</field>
        distance: {},
        /// <field type='Number'>The total time, in seconds, of the direction step.</field>
        durationInSeconds: {},
        /// <field type='String'>The HTML formatted route instruction associated with the step.</field>
        formattedText: {},
        /// <field type='Microsoft.Maps.Directions.IconType'>The type of the icon associated with this step.</field>
        iconType: {},
        /// <field type='Boolean'>A boolean indicating whether the maneuver image is a road shield image.</field>
        isImageRoadShield: {},
        /// <field type='Microsoft.Maps.Directions.Maneuver'>The maneuver type associated with this step.</field>
        maneuver: {},
        /// <field type='String'>The name of the maneuver image.</field>
        maneuverImageName: {},
        /// <field type='Number'>The cost of the step.</field>
        monetaryCost: {},
        /// <field type='string[]'>An array of strings, where each string is a hint to help determine when to move to the next direction step. Not all direction steps have hints.</field>
        postIntersectionHints: {},
        /// <field type='string[]'>An array of strings, where each string is a hint to help determine when you have arrived at this direction step. Not all direction steps have hints.</field>
        preIntersectionHints: {},
        /// <field type='String'>The name of the transit stop where this step originates.</field>
        startStopName: {},
        /// <field type='Microsoft.Maps.Directions.TransitLine'>The transit line associated with this step.</field>
        transitLine: {},
        /// <field type='String'>The URL of the image to use for transit direction steps.</field>
        transitStepIcon: {},
        /// <field type='String'>The ID of the transit stop.</field>
        transitStopId: {},
        /// <field type='String'>The name of the transit line end.</field>
        transitTerminus: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStepWarning[]'>An array of strings, where each string is a route warning associated with this step.</field>
        warnings: {}
    };

    m.DirectionsStep.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsStepEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsStepEventArgs.prototype = {
        /// <field type='Boolean'>A boolean indicating whether the event is handled. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Location'>The location along the route where the direction step occurs.</field>
        location: {},
        /// <field type='Number'>A number indicating the route (if multiple routes were returned) to which the directions step belongs.</field>
        routeIndex: {},
        /// <field type='Number'>A number indicating the route leg to which the directions step belongs.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep'>The directions step.</field>
        step: {},
        /// <field type='Number'>A number indicating the index of the directions step within the route leg array.</field>
        stepIndex: {},
        /// <field type='Number'>A number indicating the directions step number within the route.</field>
        stepNumber: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DirectionsStepRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DirectionsStepRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the directions step. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeStepRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Boolean'>A boolean indicating whether the step is the last directions step.</field>
        lastStep: {},
        /// <field type='Number'>A number indicating the index of the route to which this step belongs.</field>
        routeIndex: {},
        /// <field type='Number'>A number indicating the index of the route leg to which this step belongs.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep'>The directions step.</field>
        step: {},
        /// <field type='Number'>The index of this directions step within the route leg step array.</field>
        stepIndex: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.DirectionsStepWarning = function () {
        /// <summary>
        /// Represents a route direction warning, such as a traffic congestion warning.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.DirectionsStepWarning"/>
    };

    m.DirectionsStepWarning.prototype = {
        /// <field type='Microsoft.Maps.Directions.StepWarningStyle'>The type of the route warning.</field>
        style: {},
        /// <field type='String'>The warning text.</field>
        text: {}
    };

    m.DirectionsStepWarning.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Disambiguation = function () {
        /// <summary>
        /// Contains disambiguation results for a waypoint geocoding request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.Disambiguation"/>
    };

    m.Disambiguation.prototype = {
        /// <field type='Microsoft.Maps.Directions.BusinessDiambiguationSuggestion[]'>The possible business result matches for the originally specified waypoint address or location.</field>
        businessSuggestions: {},
        /// <field type='Boolean'>A boolean indicating whether there are more result suggestions available.</field>
        hasMoreSuggestions: {},
        /// <field type='String'>The disambiguation header text.</field>
        headerText: {},
        /// <field type='Microsoft.Maps.Directions.LocationDiambiguationSuggestion[]'>The possible location result matches for the originally specified waypoint address or location.</field>
        locationSuggestions: {}
    };

    m.Disambiguation.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.DisambiguationRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.DisambiguationRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the disambiguation list. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. Set this property to true to override the default behavior. If this property is set to true, a directionsError event for waypoint disambiguation is thrown.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Directions.Waypoint'>The waypoint that needs to be disambiguated.</field>
        waypoint: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.LocationDisambiguationSuggestion = function () {
        /// <summary>
        /// Contains a possible result returned from geocoding a specified waypoint address or location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.LocationDisambiguationSuggestion"/>
    };

    m.LocationDisambiguationSuggestion.prototype = {
        /// <field type='String'>The HTML formatted address suggestion.</field>
        formattedSuggestion: {},
        /// <field type='Microsoft.Maps.Location'>The location of the suggestion.</field>
        location: {},
        /// <field type='Microsoft.Maps.Location'>The rooftop location of the suggestion.</field>
        rooftopLocation: {},
        /// <field type='String'>The address suggestion.</field>
        suggestion: {}
    };

    m.LocationDisambiguationSuggestion.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.ResetDirectionsOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.ResetDirectionsOptions.prototype = {
        /// <field type='Boolean'>A boolean indicating whether to remove all of the waypoints of the route. The default value is false.</field>
        removeAllWaypoints: {},
        /// <field type='Boolean'>A boolean indicating whether to reset all of the render options set for the route. The default value is false.</field>
        resetRenderOptions: {},
        /// <field type='Boolean'>A boolean indicating whether to reset all of the request options set for the route. The default value is false.</field>
        resetRequestOptions: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Route = function () {
        /// <summary>
        /// Represents a route.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.Route"/>
    };

    m.Route.prototype = {
        /// <field type='Microsoft.Maps.Directions.RouteLeg[]'>The legs of the route. Each route leg represents the route between two waypoints.</field>
        RouteLegs: {}
    };

    m.Route.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteLeg = function () {
        /// <summary>
        /// Represents a leg of a route. A route leg is the part of the route between two stop waypoints.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteLeg"/>
    };

    m.RouteLeg.prototype = {
        /// <field type='Date'>The end time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.</field>
        endTime: {},
        /// <field type='Microsoft.Maps.Directions.Location'>The location of the last waypoint of this leg.</field>
        endWaypointLocation: {},
        /// <field type='Microsoft.Maps.Directions.DirectionsStep[]'>The directions steps associated with this route leg.</field>
        itineraryItems: {},
        /// <field type='Number'>The index of the route to which this route leg belongs.</field>
        originalRouteIndex: {},
        /// <field type='Date'>The start time of the route leg. This property only applies when the routeMode of the DirectionsRequestOptions is set to transit.</field>
        startTime: {},
        /// <field type='Microsoft.Maps.Directions.Location'>The location of the first waypoint of this route leg.</field>
        startWaypointLocation: {},
        /// <field type='Microsoft.Maps.Directions.RouteSubLeg[]'>The sub legs of this route leg. A sub leg of a route is the part of the route between a stop point and a via point or between two via points.</field>
        subLegs: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary which describes this route leg.</field>
        summary: {}
    };

    m.RouteLeg.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RoutePath = function () {
        /// <summary>
        /// Represents the route line shape on the map.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RoutePath"/>
    };

    m.RoutePath.prototype = {
        /// <field type='Number[]'>An array of latitudes, where each latitude is the latitude for one of the locations that define the route line.</field>
        decodedLatitudes: {},
        /// <field type='Number[]'>An array of longitudes, where each is the longitude value for one of the locations that define the route line.</field>
        decodedLongitudes: {},
        /// <field type='Object[]'>An array of regions that define, depending on the zoom level, how the route line should be rendered.</field>
        decodedRegions: {}
    };

    m.RoutePath.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.RouteSelectorEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.RouteSelectorEventArgs.prototype = {
        /// <field type='Boolean'>A boolean indicating whether the event is handled. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Number'>A number indicating the index of the route that was selected.</field>
        routeIndex: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.RouteSelectorRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.RouteSelectorRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the route selector. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeRouteSelectorRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Number'>A number indicating the index of the selected route.</field>
        routeIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteLeg'>The route leg of the selected route.</field>
        routeLeg: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteSubLeg = function () {
        /// <summary>
        /// Represents a route sub leg. A route sub leg is the part of the route between a stop point and a via point or between two via points. One or more sub legs make up a route leg.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteSubLeg"/>
    };

    m.RouteSubLeg.prototype = {
        /// <field type='Microsoft.Maps.Location'>The location of the last waypoint of the sub leg.</field>
        actualEnd: {},
        /// <field type='Microsoft.Maps.Location'>The location of the first waypoint of the sub leg.</field>
        actualStart: {},
        /// <field type='String'>The description of the last waypoint of the sub leg.</field>
        endDescription: {},
        /// <field type='Microsoft.Maps.Directions.RoutePath'>The properties that define the route line of this sub leg on the map.</field>
        routePath: {},
        /// <field type='String'>The description of the first waypoint of the sub leg.</field>
        startDescription: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary of this route sub leg.</field>
        summary: {}
    };

    m.RouteSubLeg.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.RouteSummary = function () {
        /// <summary>
        /// Represents a route summary.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.RouteSummary"/>
    };

    m.RouteSummary.prototype = {
        /// <field type='Number'>The total travel distance of the route, specified in the units set in the distanceUnit property of the DirectionsRequestOptions.</field>
        distance: {},
        /// <field type='Number'>The cost of the route. This property is only returned if the routeMode of the DirectionsRequestOptions is set to transit and the map culture is set to ja-jp.</field>
        monetaryCost: {},
        /// <field type='Microsoft.Maps.Location'>The location of the northeast corner of bounding box that defines the best map view of the route.</field>
        northEast: {},
        /// <field type='Microsoft.Maps.Location'>The location of the southwest corner of bounding box that defines the best map view of the route.</field>
        southWest: {},
        /// <field type='Number'>The total travel time, in seconds, for the route.</field>
        time: {},
        /// <field type='Number'>The total travel time, in seconds, taking into account traffic delays, for the route. This property is 0 if the avoidTraffic property of the DirectionsRequestOptions is set to false.</field>
        timeWithTraffic: {}
    };

    m.RouteSummary.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.RouteSummaryRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.RouteSummaryRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the summary. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeSummaryRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Number'>A number indicating the index of the route leg which this summary describes.</field>
        routeLegIndex: {},
        /// <field type='Microsoft.Maps.Directions.RouteSummary'>The summary that was rendered.</field>
        summary: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.TransitLine = function () {
        /// <summary>
        /// Contains information about a transit line.
        /// </summary>

        /// <returns type="Microsoft.Maps.Directions.TransitLine"/>
    };

    m.TransitLine.prototype = {
        /// <field type='String'>The short name for the transit line.</field>
        abbreviatedName: {},
        /// <field type='Number'>The ID of the agency that owns the transit line.</field>
        agencyId: {},
        /// <field type='String'>The name of the agency that owns the transit line.</field>
        agencyName: {},
        /// <field type='String'>The URL of the website of the agency that owns the transit line.</field>
        agencyUrl: {},
        /// <field type='Microsoft.Maps.Color'>The color to use when rendering this transit line on the map.</field>
        lineColor: {},
        /// <field type='Microsoft.Maps.Color'>The color to use when rendering text associated with this transit line.</field>
        lineTextColor: {},
        /// <field type='String'>Information about the provider of this transit line data.</field>
        providerInfo: {},
        /// <field type='String'>The full name of this transit line.</field>
        verboseName: {}
    };

    m.TransitLine.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.TransitOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.TransitOptions.prototype = {
        /// <field type='Microsoft.Maps.Directions.TimeType'>The type of the time specified in transitTime. The default value is departure.</field>
        timeType: {},
        /// <field type='Date'>The transit time to use when calculating the route. If this property is set to null, the current time is used.</field>
        transitTime: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Directions = window.Microsoft.Maps.Directions || {}

    var m = Microsoft.Maps.Directions;

    m.Waypoint = function (options) {
        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="Object">{
        /// <para>address (string): The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.,</para>
        /// <para>businessDetails (Microsoft.Maps.Directions.BusinessDetails): The business details of the waypoint, if it is a business.,</para>
        /// <para>disambiguationContainer (DOMElement): The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.,</para>
        /// <para>exactLocation (boolean): A boolean indicating whether the waypoint location is the exact location. The default value is false.,</para>
        /// <para>isViapoint (boolean): A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.,</para>
        /// <para>location (Microsoft.Maps.Location): The location of the waypoint. Either the address or location property must be specified.,</para>
        /// <para>pushpin (Microsoft.Maps.Pushpin): The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.,</para>
        /// <para>shortAddress (string): The short address of the waypoint.</para>
        /// }</param>
        /// </signature>

        /// <signature>
        /// <summary>
        /// Represents a route waypoint.
        /// <para>Supported Events: changed, geocoded, reverseGeocoded</para>
        /// </summary>
        /// <param name="options" type="AnonymousObject.WaypointOptions"/>
        /// </signature>

        /// <returns type="Microsoft.Maps.Directions.Waypoint"/>
    };

    m.Waypoint.prototype = {
        clear: function () {
            /// <summary>
            /// Clears all options associated with this waypoint.
            /// </summary>
        },
        dispose: function () {
            /// <summary>
            /// Releases any resources associated with the waypoint.
            /// </summary>
        },
        getAddress: function () {
            /// <summary>
            /// Returns the address associated with the waypoint.
            /// </summary>
            /// <returns type='String'></returns>
        },
        getBusinessDetails: function () {
            /// <summary>
            /// Returns the business details associated with the waypoint.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.BusinessDetails'></returns>
        },
        getDisambiguationContainer: function () {
            /// <summary>
            /// Returns the container element for the waypoint disambiguation list.
            /// </summary>
            /// <returns type='DOMElement'></returns>
        },
        getDisambiguationResult: function () {
            /// <summary>
            /// Returns the result of the waypoint geocoding disambiguation.
            /// </summary>
            /// <returns type='Microsoft.Maps.Directions.Disambiguation'></returns>
        },
        getLocation: function () {
            /// <summary>
            /// Returns the location of the waypoint.
            /// </summary>
            /// <returns type='Microsoft.Maps.Location'></returns>
        },
        getPushpin: function () {
            /// <summary>
            /// Returns the custom pushpin associated with this waypoint, if one has been specified.
            /// </summary>
            /// <returns type='Microsoft.Maps.Pushpin'></returns>
        },
        getShortAddress: function () {
            /// <summary>
            /// Returns the short address for the waypoint.
            /// </summary>
            /// <returns type='String'></returns>
        },
        isExactLocation: function () {
            /// <summary>
            /// Returns a boolean indicating whether the waypoint location is the exact location.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        isViapoint: function () {
            /// <summary>
            /// Returns a boolean value indicating whether the waypoint is a via point. A via point is a location that your route is guaranteed to pass through. There can be multiple via points between two stop points.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        setOptions: function (options) {
            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>address (string): The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.,</para>
            /// <para>businessDetails (Microsoft.Maps.Directions.BusinessDetails): The business details of the waypoint, if it is a business.,</para>
            /// <para>disambiguationContainer (DOMElement): The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.,</para>
            /// <para>exactLocation (boolean): A boolean indicating whether the waypoint location is the exact location. The default value is false.,</para>
            /// <para>isViapoint (boolean): A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.,</para>
            /// <para>location (Microsoft.Maps.Location): The location of the waypoint. Either the address or location property must be specified.,</para>
            /// <para>pushpin (Microsoft.Maps.Pushpin): The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.,</para>
            /// <para>shortAddress (string): The short address of the waypoint.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Sets options for the waypoint. For these options to take effect, you must recalculate the route.
            /// </summary>
            /// <param name="options" type="AnonymousObject.WaypointOptions">{
            /// <para>address (string), businessDetails (Microsoft.Maps.Directions.BusinessDetails), disambiguationContainer (DOMElement), exactLocation (boolean), isViapoint (boolean), location (Microsoft.Maps.Location), pushpin (Microsoft.Maps.Pushpin), shortAddress (string)</para>
            /// }</param>
            /// </signature>
        }
    };

    m.Waypoint.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.WaypointEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.WaypointEventArgs.prototype = {
        /// <field type='Microsoft.Maps.Directions.Waypoint'>The waypoint for which the event occurred.</field>
        waypoint: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.WaypointOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.WaypointOptions.prototype = {
        /// <field type='String'>The address string, business name, or search string of the waypoint. For example, the following strings are valid for this parameter: “Seattle”, “Microsoft”, “pizza”, or “pizza Seattle”. Either the address or location property must be specified.</field>
        address: {},
        /// <field type='Microsoft.Maps.Directions.BusinessDetails'>The business details of the waypoint, if it is a business.</field>
        businessDetails: {},
        /// <field type='DOMElement'>The DOM element inside which the waypoint disambiguation list will be rendered. If this property is not set, the disambiguation list is rendered inside the itineraryContainer.</field>
        disambiguationContainer: {},
        /// <field type='Boolean'>A boolean indicating whether the waypoint location is the exact location. The default value is false.</field>
        exactLocation: {},
        /// <field type='Boolean'>A boolean indicating whether the waypoint is a via point. A via point is a point along the route that is not a stop point. Set this property to true if you just want the route to pass through this location. The default value is false.</field>
        isViapoint: {},
        /// <field type='Microsoft.Maps.Location'>The location of the waypoint. Either the address or location property must be specified.</field>
        location: {},
        /// <field type='Microsoft.Maps.Pushpin'>The custom pushpin to use to represent this waypoint. This property overrides any pushpin options that apply to this waypoint that have been set in the DirectionsRenderOptions Object.</field>
        pushpin: {},
        /// <field type='String'>The short address of the waypoint.</field>
        shortAddress: {}
    };

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.WaypointRenderEventArgs = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.WaypointRenderEventArgs.prototype = {
        /// <field type='DOMElement'>The DOM element which contains the waypoint. You can use this property to add custom content.</field>
        containerElement: {},
        /// <field type='Boolean'>A boolean indicating whether the event is handled. This property is only available for the beforeWaypointRender event. Set this property to true to override the default behavior.</field>
        handled: {},
        /// <field type='Microsoft.Maps.Directions.Waypoint'>The waypoint for which the event occurred.</field>
        waypoint: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.Address = function () {
        /// <summary>
        /// Represents an address.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.Address"/>
    };

    m.Address.prototype = {
        /// <field type='String'>The street line of an address. The addressLine property is the most precise, official line for an address relative to the postal agency servicing the area specified by the locality or postalCode properties.</field>
        addressLine: {},
        /// <field type='String'>The subdivision name within the country or region for an address. This element is also commonly treated as the first order administrative subdivision. An example is a US state, such as “Oregon”.</field>
        adminDistrict: {},
        /// <field type='String'>The country or region name of the address.</field>
        countryRegion: {},
        /// <field type='String'>The second, third, or fourth order subdivision within a country, dependency, or region.</field>
        district: {},
        /// <field type='String'>The complete, unparsed address.</field>
        formattedAddress: {},
        /// <field type='String'>The locality, such as the primary city, that corresponds to an address. An example is “Seattle”.</field>
        locality: {},
        /// <field type='String'>The post code, postal code, or ZIP code of an address. An example is a US ZIP code, such as “98152”.</field>
        postalCode: {},
        /// <field type='String'>The city or neighborhood that corresponds to the postalCode.</field>
        postalTown: {}
    };

    m.Address.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.GeocodeLocation = function () {
        /// <summary>
        /// Represents a geocode location.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.GeocodeLocation"/>
    };

    m.GeocodeLocation.prototype = {
        /// <field type='Microsoft.Maps.Location'>The map location of this geocode location match.</field>
        location: {},
        /// <field type='String'>The name of this geocode location match.</field>
        name: {},
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The precision of this geocode location match.</field>
        precision: {}
    };

    m.GeocodeLocation.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.GeocodeRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.GeocodeRequestOptions.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>A location rectangle that defines the boundaries of the area in which to search for location results. The default is the bounds of the map view associated with this instance of the SearchManager, which is usually the current map view.</field>
        bounds: {},
        /// <field type='function'>The name of the function to call when a successful result is returned from the geocode request. The callback function must accept two parameters: result, which is a GeocodeResult type, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the search request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.GeocodeResult"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='Number'>The maximum number of results to return. Required. The maximum number than can be returned is 20.</field>
        count: {},
        /// <field type='function'>The name of the function to call when the request is returned with an error. The error callback function must accept a GeocodeRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.GeocodeRequestOptions"/>
        },
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {},
        /// <field type='String'>A string containing the address or place to be matched to a location on the map. Required.</field>
        where: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.GeocodeResult = function () {
        /// <summary>
        /// Represents a geocoded result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.GeocodeResult"/>
    };

    m.GeocodeResult.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The parsed address of the input query.</field>
        parsedAddress: {},
        /// <field type='String'>The parsed keyword string of the input query.</field>
        parsedKeyword: {},
        /// <field type='String'>The parsed separator of the input query.</field>
        parsedSeparator: {},
        /// <field type='Microsoft.Maps.Search.PlaceResult[]'>The geocoded results.</field>
        results: {}
    };

    m.GeocodeResult.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.PlaceResult = function () {
        /// <summary>
        /// Represents a place result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.PlaceResult"/>
    };

    m.PlaceResult.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The location rectangle that defines the boundaries of the best map view of the place result.</field>
        bestView: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The geocoded location of the best result.</field>
        location: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation[]'>The geocoded locations.</field>
        locations: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match code of the best result.</field>
        matchCode: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The match confidence of the best result.</field>
        matchConfidence: {},
        /// <field type='String'>The name of the place result, if one exists.</field>
        name: {}
    };

    m.PlaceResult.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.ReverseGeocodeRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.ReverseGeocodeRequestOptions.prototype = {
        /// <field type='function'>The name of the function to call when a successful result is returned from the reverse geocode request. The callback function must accept two parameters: a result, which is a PlaceResult type, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the reverse geocode request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.PlaceResult"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='function'>The name of the function to call when the request is returned with an error. The callback function must accept a ReverseGeocodeRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.ReverseGeocodeRequestOptions"/>
        },
        /// <field type='Microsoft.Maps.Location'>The location to use to match to geographic entities and addresses.</field>
        location: {},
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the reverse geocode request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    /* Enumerators */

    m.MatchCode = {
        /// <field type='Microsoft.Maps.Search.MatchCode'>No match was found.</field>
        none: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was good.</field>
        good: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was ambiguous. Multiple results were returned.</field>
        ambiguous: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was found by a broader search.</field>
        upHierarchy: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match was found, but possibly using a modified query.</field>
        modified: {},
        __enum: true
    };

    m.LocationPrecision = {
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The geocoding service matched the location to a point on the road using interpolation of multiple geocoded sources.</field>
        interpolated: {},
        /// <field type='Microsoft.Maps.Search.LocationPrecision'>The geocoding service matched the location to the rooftop of a building.</field>
        rooftop: {},
        __enum: true
    };

    m.MatchConfidence = {
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is high.</field>
        high: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is medium.</field>
        medium: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is low.</field>
        low: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the match is unknown.</field>
        unknown: {},
        __enum: true
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchManager = function (map) {
        /// <summary>
        /// Contains methods for returning search and location results.
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.Search", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.Search.SearchManager"/>
    };

    m.SearchManager.prototype = {
        geocode: function (request) {
            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>bounds (Microsoft.Maps.LocationRect),callback (function), count (number), errorCallback (function), timeout (number), userData (Object), where (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>bounds (Microsoft.Maps.LocationRect): A location rectangle that defines the boundaries of the area in which to search for location results. The default is the bounds of the map view associated with this instance of the SearchManager, which is usually the current map view.,</para>
            /// <para>callback (function): The name of the function to call when a successful result is returned from the geocode request. The callback function must accept two parameters: result, which is a GeocodeResult type, and a userData object.,</para>
            /// <para>count (number): The maximum number of results to return. Required. The maximum number than can be returned is 20.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The error callback function must accept a GeocodeRequestOptions object.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the geocode request to return. The default value is 5 seconds.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.,</para>
            /// <para>where (string): A string containing the address or place to be matched to a location on the map. Required.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the address or place query in the specified request options to a location and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.GeocodeRequestOptions"/>
            /// </signature>
        }, 
        reverseGeocode: function (request) {
            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function), errorCallback (function), location (Microsoft.Maps.Location), timeout (number), userData (Object)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function): The name of the function to call when a successful result is returned from the reverse geocode request. The callback function must accept two parameters: a result, which is a PlaceResult type, and a userData object.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The callback function must accept a ReverseGeocodeRequestOptions object.,</para>
            /// <para>location (Microsoft.Maps.Location): The location to use to match to geographic entities and addresses.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the reverse geocode request to return. The default value is 5 seconds.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Matches the specified location to an address and returns the address results to the specified request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.ReverseGeocodeRequestOptions"/>
            /// </signature>
        }, 
        search: function (request) {
            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function), count (number), errorCallback (function), query (string), startIndex (number), timeout (number), entityType (string), userData (Object), what (string), where (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="Object">{
            /// <para>callback (function): The name of the function to call when a successful result is returned from the search request. The callback function must accept two parameters: a result, which is a SearchResponse, and a userData object.,</para>
            /// <para>count (number): The maximum number of results to return. Required. The maximum number than can be returned is 20.,</para>
            /// <para>errorCallback (function): The name of the function to call when the request is returned with an error. The callback function must accept a SearchRequestOptions object.,</para>
            /// <para>query (string): The search string, such as “pizza in Seattle, WA”. Either query or what/where needs to be specified. If both are specified, an error occurs.,</para>
            /// <para>startIndex (number): The index of the first result in the results. For example, if you had already returned a first set of 10 search results and now wanted to return the second set of 10 results, you would specify 10 as the startIndex and 10 as the count.,</para>
            /// <para>timeout (number): A number indicating how long to wait, in seconds, for the search request to return. The default value is 5 seconds.,</para>
            /// <para>entityType (string): The type of entities to find. Currently only “Business” is allowed.,</para>
            /// <para>userData (Object): An object containing any data that needs to be passed to the callback when the request is completed.,</para>
            /// <para>what (string): The business name, category, or other item for which the search is conducted. For example, “pizza” in the search string “pizza in Seattle”.,</para>
            /// <para>where (string): The address or place name of the area for which the search is conducted. For example, “Seattle” in the search string “pizza in Seattle”.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Performs a search based on the specified request options and returns the results to the request options callback function.
            /// </summary>
            /// <param name="request" type="AnonymousObject.SearchRequestOptions"/>
            /// </signature>
        }
    };

    m.SearchManager.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchParseResult = function () {
        /// <summary>
        /// Represents a search request parse result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchParseResult"/>
    };

    m.SearchParseResult.prototype = {
        /// <field type='String'>The keyword of the input query string.</field>
        keyword: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The geocoded location of the input query string.</field>
        location: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The confidence of the geocode match.</field>
        matchConfidence: {}
    };

    m.SearchParseResult.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchRegion = function () {
        /// <summary>
        /// Represents a search area.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchRegion"/>
    };

    m.SearchRegion.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The address of the center of the search region.</field>
        address: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation[]'>The geocoded locations.</field>
        geocodeLocations: {},
        /// <field type='Microsoft.Maps.Search.GeocodeLocation'>The best geocoded location.</field>
        explicitLocation: {},
        /// <field type='Microsoft.Maps.LocationRect'>A location rectangle that defines the boundaries of the search area.</field>
        mapBounds: {},
        /// <field type='Microsoft.Maps.Search.MatchCode'>The match code of the geocoded location.</field>
        matchCode: {},
        /// <field type='Microsoft.Maps.Search.MatchConfidence'>The match confidence of the geocoded location.</field>
        matchConfidence: {},
        /// <field type='String'>A string indicating the region used to infer the location. The current values are “Query” or “MapView”.</field>
        source: {}
    };

    m.SearchRegion.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.SearchRequestOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.SearchRequestOptions.prototype = {
        /// <field type='function'>The name of the function to call when a successful result is returned from the search request. The callback function must accept two parameters: a result, which is a SearchResponse, and a userData object.</field>
        callback: function (result, userData) {
            /// <summary>
            /// The name of the function to call when a successful result is returned from the search request. 
            /// </summary>
            /// <param name="result" type="Microsoft.Maps.Search.SearchSearchResponse"/>
            /// <param name="userData" type="Object"/>
        },
        /// <field type='Number'>The maximum number of results to return. Required. The maximum number than can be returned is 20.</field>
        count: {},
        /// <field type='function'>The name of the function to call when the request is returned with an error. The callback function must accept a SearchRequestOptions object.</field>
        errorCallback: function (request) {
            /// <summary>
            /// The name of the function to call when the request is returned with an error.
            /// </summary>
            /// <param name="request" type="Microsoft.Maps.Search.SearchRequestOptions"/>
        },
        /// <field type='String'>The search string, such as “pizza in Seattle, WA”. Either query or what/where needs to be specified. If both are specified, an error occurs.</field>
        query: {},
        /// <field type='Number'>The index of the first result in the results. For example, if you had already returned a first set of 10 search results and now wanted to return the second set of 10 results, you would specify 10 as the startIndex and 10 as the count.</field>
        startIndex: {},
        /// <field type='Number'>A number indicating how long to wait, in seconds, for the search request to return. The default value is 5 seconds.</field>
        timeout: {},
        /// <field type='String'>The type of entities to find. Currently only “Business” is allowed.</field>
        entityType: {},
        /// <field type='Object'>An object containing any data that needs to be passed to the callback when the request is completed.</field>
        userData: {},
        /// <field type='String'>The business name, category, or other item for which the search is conducted. For example, “pizza” in the search string “pizza in Seattle”.</field>
        what: {},
        /// <field type='String'>The address or place name of the area for which the search is conducted. For example, “Seattle” in the search string “pizza in Seattle”.</field>
        where: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResponse = function () {
        /// <summary>
        /// Represents the results of a search request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchResponse"/>
    };

    m.SearchResponse.prototype = {
        /// <field type='Microsoft.Maps.Search.SearchRegion[]'>An array of alternate search regions.</field>
        alternateSearchRegions: {},
        /// <field type='Boolean'>A boolean indicating whether there are more results to return.</field>
        hasMore: {},
        /// <field type='Microsoft.Maps.Search.SearchParseResult[]'>An array containing the parsed results of the search.</field>
        parseResults: {},
        /// <field type='Microsoft.Maps.Search.SearchResponseSummary'>The summary of the response to the search request.</field>
        responseSummary: {},
        /// <field type='Microsoft.Maps.Search.SearchRegion'>The region in which the search was performed.</field>
        searchRegion: {},
        /// <field type='Microsoft.Maps.Search.SearchResult[]'>A search result array containing the search results.</field>
        searchResults: {}
    };

    m.SearchResponse.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResponseSummary = function () {
        /// <summary>
        /// Contains properties that summarize the search service response to a request.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.Address"/>
    };

    m.SearchResponseSummary.prototype = {
        /// <field type='Number'>The authentication result code.</field>
        authResultCode: {},
        /// <field type='String'>The copyright string.</field>
        copyright: {},
        /// <field type='String'>The error message, if an error occurred.</field>
        errorMessage: {},
        /// <field type='Number'>The status code of the request.</field>
        statusCode: {},
        /// <field type='Number'>A string representing a trace ID to enable debugging of the request.</field>
        traceId: {}
    };

    m.SearchResponseSummary.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.Search = window.Microsoft.Maps.Search || {}

    var m = Microsoft.Maps.Search;

    m.SearchResult = function () {
        /// <summary>
        /// Represents a distinct search result.
        /// </summary>

        /// <returns type="Microsoft.Maps.Search.SearchResult"/>
    };

    m.SearchResult.prototype = {
        /// <field type='Microsoft.Maps.Search.Address'>The address of the search result.</field>
        address:{}, 
        /// <field type='String'>The city of the search result.</field>
        city:{}, 
        /// <field type='String'>The country of the search result.</field>
        country:{}, 
        /// <field type='String'>The entity type of the search result.</field>
        entityType:{}, 
        /// <field type='String'>The hours of operation of the entity defined by the search result.</field>
        hoursOfOperation:{}, 
        /// <field type='Number'>The entity ID of the search result.</field>
        id:{}, 
        /// <field type='Microsoft.Maps.Location'>The location of the search result.</field>
        location:{}, 
        /// <field type='String'>The name of the entity defined by the search result.</field>
        name:{}, 
        /// <field type='String'>The phone number of the search result.</field>
        phone:{}, 
        /// <field type='String'>The postal code of the search result.</field>
        postalCode:{}, 
        /// <field type='Number'>The number of user reviews recorded for this search result.</field>
        reviewCount:{}, 
        /// <field type='Number'>The average user rating for the entity defined by the search result.</field>
        userRating:{}, 
        /// <field type='String'>The URL of the entity defined by the search result.</field>
        website:{}
    };

    m.SearchResult.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Directory = function () {
        /// <summary>
        /// Represents a venue map directory, which is a list of businesses and features found within the venue.
        /// <para>Supported Events: click, mouseout, mouseover</para>
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Directory"/>
    };

    m.Directory.prototype = {
        addToDOM: function (div, sortOrder, to_group_or_not) {
            /// <summary>
            /// Adds the venue map directory to the DOM (document object model). The specified div becomes the parent element of the venue map directory. This method does nothing if the createUIElements is not called first.
            /// </summary>
            /// <param name="div" type="HTMLElement"></param>
            /// <param name="sortOrder" type="Microsoft.Maps.VenueMaps.DirectorySortOrder"></param>
            /// <param name="to_group_or_not" type="Microsoft.Maps.VenueMaps.DirectoryGrouping"></param>
        },
        createUIElements: function () {
            /// <summary>
            /// Creates the necessary UI elements and data structures to visualize the venue map directory. After this method is called, use the addToDOM method to add the elements to the DOM.
            /// </summary>
        },
        handleMouseClick: function (e) {
            /// <summary>
            /// The base method to call if you override the click event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        handleMouseOut: function (e) {
            /// <summary>
            /// The base method to call if you override the mouseout event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        handleMouseOver: function (e) {
            /// <summary>
            /// The base method to call if you override the mouseover event.
            /// </summary>
            /// <param name="e" type="Object{eventArgs: MouseEventArgs, Microsoft.Maps.VenueMaps.Primitive}"></param>
        },
        isInDOM: function () {
            /// <summary>
            /// Returns a boolean indicating whether the venue map directory is in the DOM.
            /// </summary>
            /// <returns type='Boolean'></returns>
        },
        removeFromDOM: function () {
            /// <summary>
            /// Removes the venue map directory from the DOM. It is recommended that you use this method to remove the venue map directory from the DOM instead of using the removeChild method of the DOM.
            /// </summary>

        },
        setHeight: function (height) {
            /// <summary>
            /// Sets the height of the venue map directory, as a percentage of the base map’s height or in absolute pixels. For example, to set the directory as 90% of the base map’s height, call setHeight(.9). To set the height as 800 pixels, call setHeight(800).
            /// </summary>
            /// <param name="height" type='Number'></param>
        }
    };

    m.Directory.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Floor = function () {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Floor"/>
    };

    m.Floor.prototype = {
        /// <field type='String'>The name of the floor.</field>
        name: {},
        /// <field type='Microsoft.Maps.VenueMaps.Primitive[]'>An array of Primitive objects that represent the points of interest (for example, stores) on this venue floor.</field>
        primitives: {},
        /// <field type='Number[]'>An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map floor.</field>
        zoomRange: {}
    };

    m.Floor.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Footprint = function () {
        /// <summary>
        /// Represents the footprint of the venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Footprint"/>
    };

    m.Footprint.prototype = {
        /// <field type='Microsoft.Maps.VenueMaps.Polygon[]'>The shapes that make up the footprint of this venue.</field>
        polygons:{}, 
        /// <field type='Number[]'>An array of doubles indicating the minimum and maximum zoom levels where imagery is available for this venue map.</field>
        zoomRange:{}
    };

    m.Footprint.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Metadata = function () {
        /// <summary>
        /// Contains information about a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Metadata"/>
    };

    m.Metadata.prototype = {
        /// <field type='Number'>The latitude of the center location of the venue map.</field>
        CenterLatitude: {},
        /// <field type='Number'>The longitude of the center location of the venue map.</field>
        CenterLongitude: {},
        /// <field type='String'>The ID of the default floor of the venue map.</field>
        DefaultFloor: {},
        /// <field type='String'>A string used in the floor bar of the venue map.</field>
        FloorHeader: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor[]'>An array containing the floors of the venue map.</field>
        Floors: {},
        /// <field type='Microsoft.Maps.VenueMaps.Footprint'>The footprint of the venue map.</field>
        Footprint: {},
        /// <field type='String'>The unique ID of the venue map.</field>
        MapId: {},
        /// <field type='String'>A string describing the venue map type (for example, “mall”).</field>
        MapType: {},
        /// <field type='String'>The name of the venue map.</field>
        Name: {},
        /// <field type='String'>The Yellow Pages ID of the venue.</field>
        YpId: {}
    };

    m.Metadata.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.NearbyVenue = function () {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.NearbyVenue"/>
    };

    m.NearbyVenue.prototype = {
        /// <field type='Number'>The distance, in meters, to the venue.</field>
        distance: {},
        /// <field type='Microsoft.Maps.VenueMaps.Metadata'>The venue map metadata.</field>
        metadata: {}
    };

    m.NearbyVenue.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.NearbyVenueOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.NearbyVenueOptions.prototype = {
        /// <field type='function'>The function to call when the search is completed. The function must accept an Microsoft.Maps.VenueMaps.NearbyVenue[].</field>
        callback: function (venues, options) {
            /// <summary>
            /// The function to call when the search is completed.
            /// </summary>
            /// <param name="venues" type="Microsoft.Maps.VenueMaps.NearbyVenue[]"/>
            /// <param name="options" type="AnonymousObject.NearbyVenueOptions">Options used to request nearby venue maps.</param>
        },
        /// <field type='Microsoft.Maps.Location'>The center of the circle in which to search for nearby venue maps.</field>
        location: {},
        /// <field type='Microsoft.Maps.Map'>The base map.</field>
        map: {},
        /// <field type='Number'>The radius, in meters, of the circle in which to search for nearby venue maps.</field>
        radius: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Polygon = function () {
        /// <summary>
        /// Defines the shape of venue map entities.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Polygon"/>
    };

    m.Polygon.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The rectangle that defines the bounding box for the polygon.</field>
        bounds: {},
        /// <field type='Microsoft.Maps.Location'>The center of the polygon.</field>
        center: {},
        /// <field type='Microsoft.Maps.Location[]'>The locations that define the vertices of the polygon.</field>
        locations: {}
    };

    m.Polygon.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.Primitive = function () {
        /// <summary>
        /// Represents a venue map primitive, which represents a venue map entity.
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.Primitive"/>
    };

    m.Primitive.prototype = {
        /// <field type='Microsoft.Maps.LocationRect'>The rectangle that defines the bounding box for the primitive.</field>
        bounds: {},
        /// <field type='String'>The Yellow Pages ID for the entity.</field>
        businessId: {},
        /// <field type='String'>The Yellow Pages business category ID for the entity.</field>
        categoryId: {},
        /// <field type='String'>The Yellow Pages business category name for the entity.</field>
        categoryName: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the primitive.</field>
        center: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor'>The floor to which this primitive belongs.</field>
        floor: {},
        /// <field type='String'>The unique ID of the entity.</field>
        id: {},
        /// <field type='Microsoft.Maps.Location[]'>An array of locations that represent the vertices of the primitive.</field>
        locations: {},
        /// <field type='String'>The name of the entity.</field>
        name: {},
        highlight: function () {
            /// <summary>
            /// Highlights the primitive.
            /// </summary>
        },
        unhighlight: function () {
            /// <summary>
            /// Removes the highlighting of the primitive.
            /// </summary>
        }
    };

    m.Primitive.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.VenueMap = function () {
        /// <summary>
        /// Represents a venue map. An example of a venue map is a mall.
        /// <para>Supported Events: click, close, footprintclick, mouseout, nouseover</para>
        /// </summary>

        /// <returns type="Microsoft.Maps.VenueMaps.VenueMap"/>
    };

    m.VenueMap.prototype = {
        /// <field type='String'>The full address of the venue.</field>
        address: {},
        /// <field type='AnonymousObject.ViewOptions'>The best map view of the venue map.</field>
        bestMapView: {},
        /// <field type='String'>The Yellow Pages ID for the venue map.</field>
        businessId: {},
        /// <field type='Microsoft.Maps.Location'>The location of the center of the venue map.</field>
        center: {},
        /// <field type='String'>The floor that is displayed if no floor is specified.</field>
        defaultFloor: {},
        /// <field type='Microsoft.Maps.VenueMaps.Directory'>The venue map directory, which is a list of businesses and features found within the venue</field>
        directory: {},
        /// <field type='String'>The header for floors for this venue map. For example, for a mall the floor header would be “Level”.</field>
        floorHeader: {},
        /// <field type='Microsoft.Maps.VenueMaps.Floor[]'>An array, where each element represents a floor of the venue.</field>
        floors: {},
        /// <field type='Microsoft.Maps.VenueMaps.Footprint'>The shapes that make up the venue map.</field>
        footprint: {},
        /// <field type='String'>The unique venue map ID.</field>
        id: {},
        /// <field type='String'>The name of the venue represented by the venue map.</field>
        name: {},
        /// <field type='String'>The phone number for the venue represented by the venue map.</field>
        phoneNumber: {},
        /// <field type='String'>The venue map type, such as “Mall”.</field>
        type: {},
        dispose: function () {
            /// <summary>
            /// Disposes the venue map object.
            /// </summary>
        },
        getActiveFloor: function () {
            /// <summary>
            /// Returns the venue floor map that is currently displayed.
            /// </summary>
            /// <returns type='String'></returns>
        },
        hide: function () {
            /// <summary>
            /// Hides the venue map.
            /// </summary>
        },
        setActiveFloor: function (floor) {
            /// <summary>
            /// Displays the floor map for the specified floor.
            /// </summary>
            /// <param name="floor" type='String'></param>
        },
        show: function () {
            /// <summary>
            /// Displays the venue map.
            /// </summary>
        }
    };

    m.VenueMap.__class = true;

})(this);﻿(function (window) {
    window.AnonymousObject = window.AnonymousObject || {}

    AnonymousObject.VenueMapCreationOptions = function () {
        /// <summary>A non-existing object to assist with intellisense.</summary
        /// <returns type="None">This class does not exist. It is a placeholder to assist with intellisense.</returns>
    };

    AnonymousObject.VenueMapCreationOptions.prototype = {
        /// <field type='function'> The function must accept two parameters: an integer which is an error code and an object that contains the arguments passed to the create method of the VenueMapFactory. </field>
        error: function(errorCode, options){
            /// <summary>
            /// The function to call if the venue map was not successfully created.
            /// </summary>
            /// <param name="errorCode" type="Number">
            /// The error codes are:
            /// <para>1) The metadata needed to create the venue map was not found because of a 404 or other web exception, or because the metadata was found but was empty.</para>
            /// <para>2) The venue map metadata is invalid.</para>
            /// <para>3) A timeout has occurred trying to retrieve the venue map metadata.</para>
            /// </param>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions">Options used to request venue map creation.</param>
        },
        /// <field type='function'>The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.</field>
        success: function (venue, options) {
            /// <summary>
            /// The function to call if the venue map was successfully created.
            /// </summary>
            /// <param name="venue" type="Microsoft.Maps.VenueMaps.VenueMap"/>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions">Options used to request venue map creation.</param>
        },
        /// <field type='String'>A string that identifies the venue map to display.</field>
        venueMapId: {}
    };

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps = window.Microsoft.Maps || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    m.VenueMapFactory = function (map) {
        /// <summary>
        /// Represents one floor map of a venue map.
        /// <para>Microsoft.Maps.loadModule("Microsoft.Maps.VenueMaps", {</para> 
        /// <para>callback: function(){ /* Do something */ }</para>
        /// <para>});</para>
        /// </summary>
        /// <param name="map" type="Microsoft.Maps.Map"></param>

        /// <returns type="Microsoft.Maps.VenueMaps.VenueMapFactory"/>
    };

    m.VenueMapFactory.prototype = {
        create: function (options) {
            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>error (function), success (function), venueMapId (string)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>error (function): The function to call if the venue map was not successfully created. The function must accept two parameters: an integer which is an error code and an object that contains the arguments passed to the create method of the VenueMapFactory.,</para>
            /// <para>success (function): The function to call if the venue map was successfully created. The function must accept two parameters: a VenueMap and an object that contains the arguments passed to the create method of the VenueMapFactory.,</para>
            /// <para>venueMapId (string): A string that identifies the venue map to display.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Creates a venue map. If the venue map is created successfully, a VenueMap is returned to the function specified in the success property of the VenueMapCreationOptions. You can display a venue map using the show method of the VenueMap Class.
            /// </summary>
            /// <param name="options" type="AnonymousObject.VenueMapCreationOptions"/>
            /// </signature>
        },
        getNearbyVenues: function (options) {
            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a Microsoft.Maps.VenueMaps.NearbyVenue[].
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>callback (function), location (Microsoft.Maps.Location), map (Microsoft.Maps.Map), radius (double)</para>
            /// <para>}</para>
            /// </param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a NearbyVenue array.
            /// </summary>
            /// <param name="options" type="Object">{
            /// <para>callback (function): The function to call when the search is completed. The function must accept an Microsoft.Maps.VenueMaps.NearbyVenue[],</para>
            /// <para>location (Microsoft.Maps.Location): The center of the circle in which to search for nearby venue maps.,</para>
            /// <para>map (Microsoft.Maps.Map): The base map.,</para>
            /// <para>radius (double): The radius, in meters, of the circle in which to search for nearby venue maps.</para>
            /// }</param>
            /// </signature>

            /// <signature>
            /// <summary>
            /// Searches for venue maps within a specified distance. The callback function must accept a NearbyVenue array.
            /// </summary>
            /// <param name="options" type="AnonymousObject.NearbyVenueMapOptions"/>
            /// </signature>
        }
    };

    m.VenueMapFactory.__class = true;

})(this);﻿(function (window) {
    window.Microsoft = window.Microsoft || {}
    window.Microsoft.Maps.VenueMaps = window.Microsoft.Maps.VenueMaps || {}

    var m = Microsoft.Maps.VenueMaps;

    /* Enumerators */

    m.DirectoryGrouping = {
        /// <field type=''>The listings in the directory are grouped by category.</field>
        byCategory: {},
        /// <field type=''>The listings in the directory are not grouped. They are displayed in a flat list.</field>
        none: {},
        __enum: true
    };

    m.DirectorySortOrder = {
        /// <field type=''>The listings in the directory are sorted alphabetically.</field>
        alphabetical: {},
        /// <field type=''>The listings in the directory are sorted by floor.</field>
        byFloor: {},
        __enum: true
    };

})(this);