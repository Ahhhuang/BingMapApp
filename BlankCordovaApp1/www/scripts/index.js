/// <reference path="../../scripts/bmjs/microsoft.maps-vsdoc.js" />
// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要對 cordova-simulate 中頁面載入上或 Android 裝置/模擬器上的程式碼偵錯: 啟動應用程式、設定中斷點、
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // 處理 Cordova 暫停與繼續事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        window.fn = {};

        window.fn.toggleMenu = function () {
            document.getElementById('appSplitter').right.toggle();
        };

        window.fn.loadView = function (index) {
            document.getElementById('appTabbar').setActiveTab(index);
            document.getElementById('sidemenu').close();
        };

        window.fn.loadLink = function (url) {
            window.open(url, '_blank');
        };

        window.fn.pushPage = function (page, anim) {
            if (anim) {
                document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
            } else {
                document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
            }
        };
       /* var map = new Microsoft.Maps.Map(document.getElementById("myMap"),
            {
                credentials: "AuoN-gZYlr2rGq4uzBV0E1tz8N5bDamJCFuYB3JH5UuGQIrazvzO2_eK77YGnBN3",
                center: new Microsoft.Maps.Location(47.643749, -122.131317),
                zoom: 17
            });
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            var searchManager = new Microsoft.Maps.Search.SearchManager(map);
            var requestOptions = {
                bounds: map.getBounds(),
                where: 'Seattle',
                callback: function (answer, userData) {
                    map.setView({ bounds: answer.results[0].bestView });
                    map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
                }
            };
            searchManager.geocode(requestOptions);
        });*/


    };

    function onPause() {
        // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。

    };

    function onResume() {
        // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
    };
} )();