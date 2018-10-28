/// <reference path="../../scripts/bmjs/microsoft.maps-vsdoc.js" />
const BINGMAP_KEY = 'AuoN-gZYlr2rGq4uzBV0E1tz8N5bDamJCFuYB3JH5UuGQIrazvzO2_eK77YGnBN3';
const MICROSOFT_COGNITIVE_API_KEY = 'aa002b799ba44dc0845db2fb152b3fdb';
const GOOGLE_GEO_API_KEY = 'AIzaSyDpxgdvKiGHZeHNou_tvAl0wtmdKkkE8T8';
const BING_HOST = 'https://api.cognitive.microsoft.com';
const BING_SEARCHPATH = '/bing/v7.0/images/search?q=';
const BINGMAP_REST_URL = 'https://dev.virtualearth.net/REST/v1/Locations?query=';
var num_routing = 0;
var cur_routing = 0;
var data_arr = [];
var nowIsWeatherMode = false;
var map;
var directionsManager;
var heatGradientData;
var maxValue;
var GetDataReady = true;
var infoBoxes = [];
var infoType = '';

document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);
    if (page.id === 'menuPage') {
     

        page.querySelector('#list_item_direction').onclick = function () {
            console.log('Navigate to direction');
            document.querySelector('#myNavigator').pushPage('direction.html').then(function () {
                map.dispose();
                var elem = document.getElementsByClassName("directionMap").item(0);
                console.log(elem);

                elem.innerHTML = "";

                var navigationBarMode = Microsoft.Maps.NavigationBarMode;
                var location = Microsoft.Maps.Location;

                map = new Microsoft.Maps.Map(elem, {
                    credentials: "AuoN-gZYlr2rGq4uzBV0E1tz8N5bDamJCFuYB3JH5UuGQIrazvzO2_eK77YGnBN3",
                    center: new location(47.0, -122.0),
                    navigationBarMode: navigationBarMode.compact,
                    zoom: 17
                });
                Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
                    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
                });
            });
        }

        page.querySelector('#list_item_routing').onclick = function () {
            //console.log('Navigate to direction');
            document.querySelector('#myNavigator').pushPage('routing.html');
            num_routing = 0;
            cur_routing = 0;
        }

    } else if (page.id === 'page_direct') {
        page.querySelector('#back_arw').onclick = function () {
            document.querySelector('#myNavigator').popPage().then(function () {
                document.querySelector('#myNavigator').popPage().then(function () {
                    map.dispose();
                    var elem = document.getElementById("myMap");
                    console.log(elem);

                    elem.innerHTML = "";

                    var navigationBarMode = Microsoft.Maps.NavigationBarMode;
                    var location = Microsoft.Maps.Location;

                    map = new Microsoft.Maps.Map(elem, {
                        credentials: "AuoN-gZYlr2rGq4uzBV0E1tz8N5bDamJCFuYB3JH5UuGQIrazvzO2_eK77YGnBN3",
                        center: new location(47.0, -122.0),
                        navigationBarMode: navigationBarMode.compact,
                        zoom: 17
                    });
                    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
                        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
                    });
                    var menu = document.getElementById('menu');
                    console.log(menu);
                    menu.close.bind(menu);
                });
            });
        }
    } else if (page.id === 'page_routing') {

        page.querySelector('#back_arw').onclick = function () {
            document.querySelector('#myNavigator').popPage();
        }

        page.querySelector('#routing_plus').onclick = function () {
            var search_input = document.querySelector('#routing_input');

            if (search_input.value.length === 0 || num_routing >= 5) {
                search_input.value = '';
                return;
            }
            //console.log(search_input.length);
            num_routing++;

            // check correct place name
            var url = BINGMAP_REST_URL + encodeURIComponent(search_input.value) + '&key=' + BINGMAP_KEY;
            restGet(url).then(function (respsonse) {
                data_arr[cur_routing++] = respsonse;
                search_input.value = '';

                var list_item = ons._util.createElement('<ons-list-item id="list' + cur_routing + '">' + respsonse +
                    '<div class="right"> <a href="#"><i id="' + cur_routing + '" class="routing_times fas fa-times-circle fa-2x" onClick="deleteItem(this.id)"}></i></a></div>' +
                    '</ons-list-item>');

                document.querySelector('#rounting_s_row').appendChild(list_item);
            })
        }

        page.querySelector('#routing_begin').onclick = function () {
            var route_vertex = [];

            for (var i = 0; i < cur_routing; i++) {
                if (data_arr[i] !== 0) {
                    route_vertex.push(data_arr[i]);
                }
            }

            console.log(route_vertex);

            if (route_vertex.length > 0) {
                document.querySelector('#myNavigator').popPage().then(function () {
                    MultiRoutePlanning(route_vertex, 'driving');
                });
            }
        }
    }
})
/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/

myApp.controllers = {

    home: function (page) {

        // Bing Maps
        var navigationBarMode = Microsoft.Maps.NavigationBarMode;
        var location = Microsoft.Maps.Location;

        map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
            credentials: "AuoN-gZYlr2rGq4uzBV0E1tz8N5bDamJCFuYB3JH5UuGQIrazvzO2_eK77YGnBN3",
            center: new location(47.0, -122.0),
            navigationBarMode: navigationBarMode.compact,
            zoom: 17
        });
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        });
        page.querySelector('[component="button/menu"]').onclick = function () {
            document.querySelector('#mySplitter').left.toggle();
        };
   },
 
  menuPage: function(page) {
      page.querySelector('#weathermode').onclick = function () {
          if (!nowIsWeatherMode) {
              changeToWeatherMode();
              console.log("change to weather mode");
              console.log(nowIsWeatherMode);
          } else {
              console.log("nothing change");
              changeToNormalMode();
              nowIsWeatherMode = false;
              console.log(nowIsWeatherMode);
          }

      }
      /*page.querySelector('#normalmode').onclick = function () {
          if (nowIsWeatherMode) {
              changeToNormalMode();
              console.log("change to normal mode");
              console.log(nowIsWeatherMode);
          } else {
              console.log("nothing change");
              nowIsWeatherMode = false;
              console.log(nowIsWeatherMode);
          }
      }*/

    page.querySelector('[component="add_plugin"]').onclick = function () {
        var newPlugin = true;

        if (newPlugin) {
            myApp.services.tasks.addPlugin(
            {
                    name: "test"
            }
            );
        } else {
            ons.notification.alert('You need choose a new plugin!');
        }

    
    };

    page.querySelector('#weather').onclick = () => {

        console.log('weather');
        map.entities.clear();

        GetWeatherInfo();
    };

    page.querySelector('#humid').onclick = () => {

        console.log('humid');
        map.entities.clear();

        infoType = 'humidity';
        maxValue = 100;
        GetDataReady = true;
        infoBoxes = [];
        GetRainFallInfo(CallbackForDataReady, infoType);
    };

    page.querySelector('#temperature').onclick = () => {

        console.log('temperature');
        map.entities.clear();

        infoType = 'temp';
        maxValue = 30;
        GetDataReady = true;
        infoBoxes = [];
        GetRainFallInfo(CallbackForDataReady, infoType);
    };

    page.querySelector('#home').onclick = () => {

        console.log('Home');

        //Center the map on the user's location.
        map.setView({
            center: new Microsoft.Maps.Location(25.0373706817627, 121.563552856445),
            zoom: 15
        });

        map.entities.clear();   

    };



    // Change splitter animation depending on platform.
    document.querySelector('#mySplitter').left.setAttribute('animation', ons.platform.isAndroid() ? 'overlay' : 'reveal');
  }
};

function GetBase64ForIcon(weather) {

    switch (weather) {
        case 'clear':
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAILSURBVGhD7Zi9TsMwFIWNYGFlARYY4AlAgoEX4M3gCWiFVCZAgg0mfjY6Ae9AGSgLD8CAxOWeNIbEOqnaxElq5CN9UqGufb829XVjYmJiYmKy+e6afZD+GWYSiY75TAhVxkpI1wgIUsaVCFKmSMIyEzIoQDrmcAyXOuaLCWRJxuhY57U5apXVd/OAFVYHWCtd1n+mEjlfFLleErlbGYHHZ/o/NpbQrkhvQaS/JvK6LfKxxxlsjcZgLJsjpT0RvOvvu7x4xlDH4jVsLqV5keM5kedNXuwkPG2M5nDmbV6kioTlUWWceZsVuV/lhZXhZrlBkSNz8bvYiX5ZcZ2zosrwpnP15v9EdK10Wb9Bg8o1u/46L6gK2M2siK7lvSkmEu6xYzBmiy0LtubMGljTmwyVQGNjhfjgNN80vchQCYAuzYrwwZXO7axXSaZQAqCRsSJ8UNAkS8v8GxGkUCakS8uGyoT2ZbehMtgqWSFVeKlx+7VJZHINUZsXK6YKDzU3RJtajyjDnWaOKIh+1PlDo8/dq9FDoysC8HuCFTYNrR/jAX4UVZGBxEz8sLLgMsNRnBXLwHfiNn85ZWlPBNibD+O2ZjyH3Wlmbz64oGmiS+OTAngczO0gj9Qrog2K3d7MEMYt00mCAvTd5KdmBc+1XuSkKZIJSsLGlQlSwsbKBC1hk8iELhETExPjOcb8AD1bx1yUoE17AAAAAElFTkSuQmCC';
        case 'clouds':
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOISURBVGhD7ZhPSBRRHMdHTCkvZn8wKYLCQyVCiBEVdahbQR3q0L2gQx6CDAoiiKhLWhCEu0USlIIKHvJP7uwftUCjVcPFSNt9s+pqlqL9EdN9E/vrN8vbZWf3zaqN6440X/iw6s689/k6b2afCmbMmDHzfwWswp5QlXCJfbs2Ey5hESbAIgC+XmE/XluJLRFhzZXhlTB8GVz/FxBrFItQh8zxSkTA47pU5yhUChvYkOkJStTwZJeNVchlQ6YnmkWeZAA0bgSwFwC4tgO0bAWozko8LoIhi7TlAwQOAEwdUfPtMMD7QoBn69THK6S9iEVoUgm9251YIB6pBOB5tnGKhJ9OVcJ8VEZZRjxxHoPF8UWus2FXN+ESsY/Yp5kAYwf50lo0b1GVWfVHc0IJhabNfNlk9O9VFVGg1XnlTm+wyOaTj9v99JCDhPLZtCsbbgmFNzv5sskYLo2e/6t2P3i6asDl/Q52SVZD5A82Qi/XD0A209AfLHFPVSBC9y6+bDJwKYasmTDUXgEOEkwsEIdI5EHH8MI+pqIvAEIGlrEkFHHiZwVHNjR1FBYmT8PvybPwZ+qE+j1fCfR3N3CltaE/HMPBEqajL+EyuK1QFanNUUkq8oOBOuj0T0YlHFIQekbcMDVRHj6GeB7GCC4dUaKBttHQJqajL9wyA0VhwZmvZdDhn+ZKRPCMiuAkc9z3loIoyZVMRX9YGW+0yMv1MBs4Dy5pljv5ikLo3KtxyGEq+oP3i2qL4u5/y584NZxhGvoTu9earSnmTZY6CL3BNPQntshoaxl/whSB98kDpqE/sUV8zjvcCVMHvck09Mft7jzV8Wn8hXPoZ5/dNz/DnzBFEDqNNDqIfA4AMpjS8tI8AnnKINwJ0gGRu9s/h3YwvaXFTiAX16eHO2BaoaPtftjGNBcPfrI28AcyAITamGbyiD5ayh3AQNgkeozpagcPrIg/0WjgLvkR09UOrkMn72QjIRLqYrraUf7I4Z1sJPCK9DJd7Sg3E+9kY0FbmK528Il1i3+yccCldZXpaqfNO1+IZShvAEOA2/vXw6ECpps8eJ/c5w5iCOg1prl4enogCy9fK3+g9IE3uXXZe656gEy8MrcNscwI/SKS4EWm9m9R/oFml4J38bcxgFdpAhlDPtqI3IEl7SsJLhsH7vF68eshfO0TpeBj0SefxP3VeqZjxowZM2aMFEH4C52ZWEhzPORwAAAAAElFTkSuQmCC';
        case 'atmosphere':
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdGSURBVGhD7ZltUFRVGMd3V4HxjZwxx5qxEqhFsRnNdUlMIXeVwRGWF+lDas6khtk005TZ9CGJxhkdtVErWRRQm9QKCO7yshqwuhcQ8WVF0URFDTVCUEjYXXmR3XN7zna3zj17kBc3bRqemf8nhr3/3z3nOc/znCsbiqEYiqF4rNGuVY+zzn91jl2jXmXTqLfYtaH7bdrQPLsmtNSmCT1l06otojLFf/lvxL2IaWOtmtBEMJoKugTGhX5Jo64Qf+LJhaBS+di16mgwlA1vucvDZH/0JEGaIyJGw3ZZC+YbmeYGoicBgmbNGgHbJhnUwjRFK1LV2ZEYcqUr6fmq7k/G8471Y82ODWN4x8ZR5W45v/DfJ/7844n7mpkxkJj1TMNuRao6OlcEnnKk+PPOnYpLaJfMKeySCQ8TSpM9nhWxRk0fD9vIwDQuqnPpSzX47YKpdpbZh+mxgMApNBdWoYFlHvLD2Z00qQrtVNSyDPZX/zoImF0HED00AFbn8qBqZ6riKssYLTCK0B55AzqoOIOyFZUod1i5YBjGu4W4YXvFR3o3hM9lCkjmr1kA9xdNb3ZuHVHJMuwWGHegA4pzqMjHjI761iDer0Mo8xN6Eyrz9f6KCG+E+ALEQRZEFyQx0staWOax0F55vVDkwyPet4lluDd5HUSQyeQAcYAGsGlnOhzJY814izABvpVfQSW+x+HNO1lG+5LXQaBC7/SAmK/ucmz1q2ICpMtbUbFPeX8BrPzoe7WmCZdPlU6sqSh94Yxbx0uf+1608OgBptfREPaoGTbnjuFnmRBZiirYQq0sw279Ynq2drtRxb9lWGiJ4XQt0VycwNIiLtY7K+I6YjVqBwkBK9ENENUeALtlXeiQTxnLOBZ+6zvAfJwh5jrLNEteAbFGqJ6m6wTOCeeXvp7bKV3Whky+51gANvPo9hRjmDk6L87KMvsweQUEIDgSAqsn+SmehkCZ8mZ01O8KC8JQrDyu42KbWCY9lLu4J+qnpfcic95pmJ+z+pZL2e8WiHYGF2L7LYHofDvoNH06oXRZOzL71dEAHeZR9vcKtMeYhkVF5qy5OeO7XF65+1pVoL6tfpLe2hOgtwmkJultg18RIVo1EvLiVxICil2TUy9rlUDslnWjI77VNMQd3v92PKe7yjKP3/qs/RmVL6Y1X6BNs/RIILAan5EQWM4tnhUbHfZM7JtHxtXHcroGFsRrB7afDExru8Ey3JsGDYKHInqewL2TBwQcsTRE09GnGnWcrpEGWJi7pE25+3oVy2hfGjSIfV7oxyQE7mIR1QC6ih1VJ3BOLOZi6mgIbfYH1wLS2m6xTGIFbm+9O23thYqwZeZjcxYfrg2PMzaHJxjvuRWRUFQiWut/4BmbHk9xK05CuECgYpMQWKzEnvfjpxcDUq1/sACUm25fm/2m6QQYd0TEG4XeFB5fNPAVwVMeCYFFzxPQO12GtgOREHnFkytpCG3Wh3WTUttbaYCgHa0tYcv5ir4A3BoUCORGFgmBJzsSwgUCDSAJYTePstJ1AudEgL7tNxpCuamxLiLh0C2W4d40YBB87wQFsJMEcWwaWS6BgFacbgJTCmfzJAQWrgs0xNTk66fD44rsLLNanbFjxbyCkxtfyee3vcyd0E8xnN812VCL9c3U/BzRYv/CdXlGQOAbDih+0hkb5gkSwsaPbqPbDnzE0hB4JWAr2WiABTFFbSkz8s0ZSs6eGWwQWMoINgxsRWBbpZIg+LaDhIDi54TZ4DYJss2oNpMQuNjRdQLnBGs7LdMWnk0PNrSwzJMaBIi6lgTpSfGX9FR4PCUhsOI5aRcbdjDzGAmBhRObhnh/blFFptLwgGWc1oBAcJdLQmDBaXVJAgIzNglx0fTMJRICKyit+TwJgY9Y+nRapimszlAauj1MYzAlVwLbbH1GMLc6YzKXhAV/04k2+w7XrTgJgvODujzDFwUkCL2tFmSvuQE1A5EguE6QEPN1he1g7i4NAW+dS1fmB4h2Bh+QHytJkI7EkDoJBL6y4f3ukyDL8hdaSBDVvpwyEiJoW8sdODp7SBCc2DQEaLMgE+SilUcL8fvE3yD4LlYCskfeQEJgxeTF3iVB6F5q2kcXykkIfMTSpxNsoTyvQeAA8/tJEHyhLAE5oDhDQriOXQICC88TJEjY8jJJkq96veCkBALyxCvbiQx6EsS34hKQLEUlCXLZNOGKFCThAT0UzUn8uZYEwcWOAikWH++9gBwxSUA2jJGuCL7GJEBOl06sIUH+akn+gcAKjzc2kSDbpxqqKJBk8fHeC/wxRQKyaWQFCeK6hyVAjpQEniJBInOSfvcEKWonQfQhXA0JskfJrRQf773wANksnQZR/nBJDTEVBw0cZIpBAgKJvkR8vPfifwMCyZ4Jcn8OtvRsHPkDAFjcQobh+wXez+IWXxKQDQC4jrgUmbOqFJLdQmpugrEC8sTi1ldTDRxUb4tbGcr8KPHxQzEUQzEUvYVM9idnxMKLpfCiTgAAAABJRU5ErkJggg==';
        case 'drizzle':
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPlSURBVGhD7VlbaBRXGN622FofSin0XUHwofVBsbQNSkSKiBLrJbG0KaVBmkRscymY3WiaTWtUjLuZHR+abGeStIbS9ELAh1L0JckmWqrrTISNO5vZmDbagkEofUi8oB7///ivTnaP7prMXqDzLR9n+c75Lx/zz7DMuhw4cJB7DExOLtaj8QotGu/TouYfetQ8h99RC4f/XkLHChtabOIdaPqKbsSZiLB39YJhbqLjhYnRS/Ed0Ozt5OZTGDXvgKEPKKywMGoYy3TDnBE2LiAYuXkxenkFxp6dmnpRN8Y/hNFTIccvmmF2wrorEok8z5PbDcbYszgW0IgPGumF9bAei2//ibHnoInvrI1mQsjx46gxsRaa/ku0DzRHY7E3qbw90MfM16CwJijGC8K4zAr0J1Iz4rfSx5kztpmB2X8dnj7/igvlhGY4HF5E7cwPOE5wJXRB8pxSi46XUkvzA90TwuS5pdlBLT0dVg9tKV8VKnHXnGsNHdKCLN90h30R7InayxyrhkqGV4dKWCERe6L2ModjJIt0jIiS5ZOOEVGyfNIxIkqWzLdGdgr1BN8Y3sYp2kvw7TQ5EsyKkTXD77LT08PsHnz+nL3Ktp+vTjnTEpPZ7J0bnM0xKWUfYzD2LuQ4NR3iOZPPWJkVI5+PtcLvyUf49drAnH28CmggAfyefGUwxor6sYNz9pOZFSNY1Ip0RmYK1QiOAY4DjsXkzBW27XxVyhlvLMANIJsMf8q+dbR+mx7Kz2glaMfNni5Hglk1kks6RkTJ8knHiChZPukYESXLJ//fRhKvg6zcoFR0bT786SCuVr3o5/d9qG+Uq/utejrieYxb90O5bNWLez4O8jqdu09Y9Xm9DhKhrPaL46U1+xmuJHGU7vVsRX1XXZNOUkYoqz2g8bjapo9I4nivbv9B1Evrm06QZC/2tPi+/6S5jeFKEseeFn8F6pUtx2IkZYRKr+8SxlW3+utI4qj+yt+BetWX/pMk2QuPpB7xBFSGK0kcDe3qlge68lQzjOcxriGgzPnTxx1QPDxfQP2aJHvhGHkM8mbELSnHqOFDJHGAsa2ouwNqiKSMAHFnqOEykjigTjPVmfNQWTA+k+UX3O3fbIDkESzQGOjaTVuufe3qGjDQ96Cw2kvyE1HvV15B89DwfxjX4O9eiXplMLgItPVwRS6QkRoeYBc8AaWNJwZC0/94pZ6XSd9s0e82yMEiHpAGcH7gYZykDLoYe4Z0r0W/3ih3vcoD7AIfHUn93S2p3W6pZynJLo9fWc7nXFL6oWgxyWmB9wAYH4F8R71y70skuzyyupHqfIu5SXbgwMGC4XLdBwewOt+Zrb7XAAAAAElFTkSuQmCC';
        case 'rain':
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUwSURBVGhD7Zl/TBtlHMbr1GgyE+PvOZ0Dp/6jxgHbuFI2hqmsLclMjIBDcMEJBQqDyZSwZGui2TJ63YYDCh1CtxYUwVBmcIKsLfTaGhX/MS5miclissSZKIYWE8nGXr/v+R5ru/fa6+qkM/dJnnB876V9nnt/XlDIyMgsH0Mezz2jbv8MFr4m5YRIt4QMeUZ0B/l1eRianLkXQiAsfE3KklnbPadMtwQX0zqD75LS8pBskPTOUAB6BKVZQnOr2+ceIOX/nmSCrLXMMTiEIOiVZnIrQYbQ7fABavKbZI4ECp5q9WlLTF6dkfVut7HjVaiuT40qrcz5ql7GU3uKaavvz8knzUVJswSrooIMkFuJAX/cBF07m94TeoSURDFPaTJMnPYo69X+zHI6JMj4hRrVnGSQ3paNdhzLQEXsC0sq/SDj8ls9m75rGMgtIh8TweNdfz4GHn7jQ1iCl9M75wrJLek8Yw0+iMcl/zQ6Q1ZSvg52WrfFxOnOhpsX9N6XBRBCiaptDK+q3mxUcmR9RBhBOy1Zv+/uz6kmH7vEE93zj6ZZ5suftISeI6XEgCdg5EOQpwEf9DC5xXPQq3mI5bQOGD5XaSFap3Wo3qFaCiHoTetGahCsYtCuE5t+0g+onyZfkzwwHieFIHyYjuDL5JbCzGlyTV7tRVoAQc0jW68LIaisPYsaRFBpW+aVOoeylnxdcsDavW8pRGcoiMcrroPJYpgHC9HGw3XIvQ1Vw7yghcDCQ6zITB9igkrgvsHOmHkzSWFEK/DYhBAH13WEnsUls0/zOkzoKzTz4Xrn0zxqgHCVt2dSA4QLDzXDKWU77+ffguUKt8brCazDU5qYvSGI75Uo4zQVQ8/U2XN3ExvJYfLoVsGcuEQzHq39Yy9SjdNU2ha5HIsJlu3FpkHlja1a4cDqNEozTVPj4GaqaZoqujZQjdMEq91FYufGaPVpdDTDNB324GF1bd+IJz0/6enGaTLYVS3EVuLA5J6hmabpwBk11XAsRe/2sfRGR9Y8sZUYJq5QTTMspmZn/NUqWuVx9pRoGRyqRmJPOnjnphkW056Pc6lmYymReYKFd35iTxrWmaw74QwVohkWk8EufX4IquyRtgwLgrPa1Z22vLuJzfjgYwjNrJhgeaYalSK88dFMi6nOodITm/GBYdVEMywm/lhCMSlFYidiMdXYmFFiMz7whK1LRmFHh2E2bOa0DaxX8yqceMtAh6DNj0Kb9ycLIszhd5DGQdWlvcP540fHWtD+wQpU3ZdzvvLD7IXwdlg7jl0LUnY8a0HfwwRqTyq78FlL35fjxHsI3uGFNrtOZJ8jNuPDenWfg/m/IATb6tu+mpQjQEhxG6xsRXjXx+8e2FStXbnYNJzn3ufMWY/b0F516wYYdXUvc0HfJwTJQK/B7l1rY1gjUqzAbaJ5+6MtGTCfvsWHyYruDb+ScnzgiXex/kJJxwLzdMGaA+PqC3sGN5/bO5K/jpR5Yr2zN9hzs+HMNQsr10KNQ7mRlGPS0K96BQJJ7xH8tMmlJOrPaO4ilxHECiJQZn9pJbmUhFiv3VSkBLklkIOkGnKQVEMOkmrIQVINOUiq8f8J8s8/Q/kgYxx3HynzON3+baddgaIxz9erSCm1GXX5/8BBRly+AlJSfDIeuB+CzOO6cyrwPCmnNqMuXzdv2OX7BcxX4V5wun3f8DW3/weEUEKvDMsGP09cvu+x8XA5Xf7Zz84GMkmzW4OJiYmVp11cCwTwQoCv4Odx5/T0GnJbRkbmpqNQ/A24xfOqIEbuqgAAAABJRU5ErkJggg==';
        case 'snow':
            return 'data:image/png;base64,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';
        case 'na':
            return 'data:image/png;base64,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';
        default:
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOISURBVGhD7ZhPSBRRHMdHTCkvZn8wKYLCQyVCiBEVdahbQR3q0L2gQx6CDAoiiKhLWhCEu0USlIIKHvJP7uwftUCjVcPFSNt9s+pqlqL9EdN9E/vrN8vbZWf3zaqN6440X/iw6s689/k6b2afCmbMmDHzfwWswp5QlXCJfbs2Ey5hESbAIgC+XmE/XluJLRFhzZXhlTB8GVz/FxBrFItQh8zxSkTA47pU5yhUChvYkOkJStTwZJeNVchlQ6YnmkWeZAA0bgSwFwC4tgO0bAWozko8LoIhi7TlAwQOAEwdUfPtMMD7QoBn69THK6S9iEVoUgm9251YIB6pBOB5tnGKhJ9OVcJ8VEZZRjxxHoPF8UWus2FXN+ESsY/Yp5kAYwf50lo0b1GVWfVHc0IJhabNfNlk9O9VFVGg1XnlTm+wyOaTj9v99JCDhPLZtCsbbgmFNzv5sskYLo2e/6t2P3i6asDl/Q52SVZD5A82Qi/XD0A209AfLHFPVSBC9y6+bDJwKYasmTDUXgEOEkwsEIdI5EHH8MI+pqIvAEIGlrEkFHHiZwVHNjR1FBYmT8PvybPwZ+qE+j1fCfR3N3CltaE/HMPBEqajL+EyuK1QFanNUUkq8oOBOuj0T0YlHFIQekbcMDVRHj6GeB7GCC4dUaKBttHQJqajL9wyA0VhwZmvZdDhn+ZKRPCMiuAkc9z3loIoyZVMRX9YGW+0yMv1MBs4Dy5pljv5ikLo3KtxyGEq+oP3i2qL4u5/y584NZxhGvoTu9earSnmTZY6CL3BNPQntshoaxl/whSB98kDpqE/sUV8zjvcCVMHvck09Mft7jzV8Wn8hXPoZ5/dNz/DnzBFEDqNNDqIfA4AMpjS8tI8AnnKINwJ0gGRu9s/h3YwvaXFTiAX16eHO2BaoaPtftjGNBcPfrI28AcyAITamGbyiD5ayh3AQNgkeozpagcPrIg/0WjgLvkR09UOrkMn72QjIRLqYrraUf7I4Z1sJPCK9DJd7Sg3E+9kY0FbmK528Il1i3+yccCldZXpaqfNO1+IZShvAEOA2/vXw6ECpps8eJ/c5w5iCOg1prl4enogCy9fK3+g9IE3uXXZe656gEy8MrcNscwI/SKS4EWm9m9R/oFml4J38bcxgFdpAhlDPtqI3IEl7SsJLhsH7vF68eshfO0TpeBj0SefxP3VeqZjxowZM2aMFEH4C52ZWEhzPORwAAAAAElFTkSuQmCC';
    }
};

function getWeatherGroup(code) {

    let group = 'na';

    if (200 <= code && code < 300) {

        group = 'thunderstorm';
    } else if (300 <= code && code < 400) {

        group = 'drizzle';
    } else if (500 <= code && code < 600) {

        group = 'rain';
    } else if (600 <= code && code < 700) {

        group = 'snow';
    } else if (700 <= code && code < 800) {

        group = 'atmosphere';
    } else if (800 === code) {

        group = 'clear';
    } else if (801 <= code && code < 900) {

        group = 'clouds';
    }
    return group;
};

function GetWeather(city) {

    // Example of Url : http://api.openweathermap.org/data/2.5/weather?appid=4054b4ce973443572614f3703668784b&q=Taoyuan

    const key = '4054b4ce973443572614f3703668784b';

    const city_splitted = city.split(" ")[0];

    const url = `http://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${city_splitted}`;

    let weatherSource = axios.CancelToken.source();

    //console.log(`Making request to: ${url}`);    

    return axios.get(url, { cancelToken: weatherSource.token });
};

// called when user issued a query in the search bar
function onSearchChange() {
    var query = document.querySelector(".searchBar").value;

    Microsoft.Maps.loadModule(['Microsoft.Maps.SpatialDataService', 'Microsoft.Maps.Search'], function () {

        var searchManager = new Microsoft.Maps.Search.SearchManager(map);

        var geocodeRequest = {

            where: query,
            callback: function (geocodeResult) {

                if (geocodeResult && geocodeResult.results && geocodeResult.results.length > 0) {

                    for (var i = map.entities.getLength() - 1; i >= 0; i--) {
                        var _pushpin = map.entities.get(i);

                        if (_pushpin instanceof Microsoft.Maps.Pushpin)
                            map.entities.removeAt(i);
                    }

                    map.setView({
                        //bounds: geocodeResult.results[0].bestView,
                        center: geocodeResult.results[0].location,
                        zoom: 10
                    });

                    var geoDataRequestOptions = {

                        entityType: 'PopulatedPlace',
                        getAllPolygons: true
                    };

                    GetWeather(query).then(function (res) {

                        // Icon for weather
                        var base64Image = GetBase64ForIcon(getWeatherGroup(res.data.weather[0].id));

                        var pushpin = new Microsoft.Maps.Pushpin(geocodeResult.results[0].location, {

                            icon: base64Image,
                            anchor: new Microsoft.Maps.Point(12, 28),
                            title: res.data.name,
                            subTitle: res.data.weather[0].main
                        });

                        Microsoft.Maps.Events.addHandler(pushpin, 'click', function (e) {

                            pushpin.setOptions({ visible: false });
                        });

                        map.entities.push(pushpin);
                    });

                    /*
                    var pushpin = new Microsoft.Maps.Pushpin(geocodeResult.results[0].location, {

                        anchor: new Microsoft.Maps.Point(0, 0)
                    });

                    map.entities.push(pushpin);
                    */

                    var NewPosition = new Microsoft.Maps.Location(geocodeResult.results[0].location.latitude - 0.14, geocodeResult.results[0].location.longitude);

                    map.setView({
                        //bounds: geocodeResult.results[0].bestView,
                        center: NewPosition,
                        zoom: 10
                    });

                    map.setOptions({

                        allowHidingLabelsOfRoad: true,
                        customMapStyle: {
                            elements: {
                                mapElement: {
                                    "labelVisible": false
                                }
                            },
                            settings: {
                                "landColor": "#fffff"
                            }
                        }
                    });



                }
            },
        };

        searchManager.geocode(geocodeRequest);
    });

    var searchUrl = BING_HOST + BING_SEARCHPATH + encodeURIComponent(query);
    var rest_url = BINGMAP_REST_URL + encodeURIComponent(query) + '&key=' + BINGMAP_KEY + '&w=200&h=150';

    axios.get(rest_url).then(function (response) {
        console.log(response.data.resourceSets[0].resources[0].address);

        // fill card with the result address
        fillUpAddress(response.data.resourceSets[0].resources[0].address);

        // load city image from Bing Image search
        axios.get(searchUrl, {
            headers: { 'Ocp-Apim-Subscription-Key': MICROSOFT_COGNITIVE_API_KEY }
        }).then(function (response) {
            // these stores the thumbnail image of the location
            // response.data.value[0].thumbnailUrl

            document.getElementById("cityImage1").src = response.data.value[0].thumbnailUrl;
            document.getElementById("cityImage2").src = response.data.value[1].thumbnailUrl;

            $(".result-card").animate({ height: '300px' });            
   
            document.querySelector(".searchBar").value="";
        }).catch(function (error) {
            console.log(error);
        });
    }).catch(function (error) {
        console.log(error);
    });


}

function fillUpAddress(addressObj) {
    var commaPos = addressObj.formattedAddress.indexOf(',');
    if (commaPos <= 0) commaPos = addressObj.formattedAddress.length;
    var targetName = addressObj.formattedAddress.substr(0, commaPos);
    var stateCode = addressObj.formattedAddress.substr(commaPos, addressObj.formattedAddress.length);

    console.log(toTitleCase(targetName));

    document.getElementById("searchCardTitle").innerHTML = toTitleCase(targetName);
    document.getElementById("adminDistrict").innerHTML = toTitleCase(targetName) + stateCode.toUpperCase();
    document.getElementById("country").innerHTML = toTitleCase(addressObj.countryRegion);
}

// function to convert all-caps to title case
function toTitleCase(str) {
    return str.replace(
        /[a-zA-Z]*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function onSaveIconClick() {
    $('#bookmark-outline-icon').hide();
    $('#bookmark-icon').show();
}

function onCloseCardClick() {
    $(".result-card").animate({ height: '0px' });    
}

function deleteItem(id) {

    console.log(id);
    var item = document.getElementById("list" + id);
    item.parentNode.removeChild(item);

    num_routing--;
}

function changeToWeatherMode() {
        
    $('#list_item_direction').hide();
    $('#list_item_routing').hide();
    $('#humid').show();
    $('#weather').show();
    $('#temperature').show();
    //$('#normalmode').css("background-color", "none");
    $('#weathermode').css("background-color", "gray");
    nowIsWeatherMode = true;
}

function changeToNormalMode() {
    $('#list_item_direction').show();
    $('#list_item_routing').show();
    $('#humid').hide();
    $('#weather').hide();
    $('#temperature').hide();
    //$('#normalmode').css("background-color", "gray");
    $('#weathermode').css("background-color", "none");
    nowIsWeatherMode = false;
}

function GetWeatherInfo() {

    map.setOptions({

        allowHidingLabelsOfRoad: true,
        customMapStyle: {
            elements: {
                mapElement: {
                    "labelVisible": false
                }
            },
            settings: {
                "landColor": "#fffff"
            }
        }
    });

    map.setView({
        center: new Microsoft.Maps.Location(25.0373706817627, 121.563552856445),
        zoom: 10,
    });
    

    const cities = ['Taipei', 'Taoyuan City', 'Hsinchu', 'Miaoli', 'Taichung', 'Changhua', 'Nantou', 'Yunlin', 'Chiayi', 'Kaohsiung', 'Pingtung', 'Tainan', 'Hualien', 'Penghu', 'Keelung', 'Yilan', 'Taitung'];

    for (var i = 0; i < cities.length; i++) {

        GetWeather(cities[i]).then(function (res) {

            Microsoft.Maps.loadModule(['Microsoft.Maps.SpatialDataService', 'Microsoft.Maps.Search'], function () {

                var searchManager = new Microsoft.Maps.Search.SearchManager(map);

                var _city = res.data.name;
                if (_city === 'Yilan') _city = 'I-lan';

                var geocodeRequest = {

                    where: _city,
                    callback: function (geocodeResult) {

                        if (geocodeResult && geocodeResult.results && geocodeResult.results.length > 0) {

                            map.setView({
                                bounds: geocodeResult.results[0].bestView
                            });

                            var geoDataRequestOptions = {

                                entityType: 'PopulatedPlace',
                                getAllPolygons: true
                            };

                            // Icon for weather
                            var base64Image = GetBase64ForIcon(getWeatherGroup(res.data.weather[0].id));

                            var pushpin = new Microsoft.Maps.Pushpin(geocodeResult.results[0].location, {

                                icon: base64Image,
                                anchor: new Microsoft.Maps.Point(12, 28),
                                title: res.data.name,
                                subTitle: res.data.weather[0].main
                            });

                            map.entities.push(pushpin);
                        }
                    },
                };

                searchManager.geocode(geocodeRequest);
            });

            return res.data.weather;
        });;
    }
};

function GetRainFallInfo(CallbackForDataReady, InfoType) {

    map.setOptions({

        allowHidingLabelsOfRoad: true
    });

    map.setView({
        center: new Microsoft.Maps.Location(53.32, -110.29),
        zoom: 3
    });

    //Create a legend. 
    createLegend(maxValue);

    //Load the Bing Spatial Data Services module.
    Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', function () {

        var worldBounds = Microsoft.Maps.LocationRect.fromEdges(90, -180, -90, 180);

        //Get all states by doing an intersection test against a bounding box of the world and have up to 52 results returned.
        var queryOptions = {

            queryUrl: 'https://spatial.virtualearth.net/REST/v1/data/755aa60032b24cb1bfb54e8a6d59c229/USCensus2010_States/States',
            spatialFilter: {
                spatialFilterType: 'intersects',
                intersects: worldBounds
            },
            top: 52
        };

        var stateList = [];
        var dataList = [];

        Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, function (data) {

            //Loop through results and set the fill color of the polygons based on the population property.
            for (var i = 0; i < data.length; i++) {

                if (stateList.indexOf(data[i].metadata.Name) === -1) {

                    stateList.push(data[i].metadata.Name);

                    GetWeather(data[i].metadata.Name).then(function (res) {

                        //console.log(res.data);

                        if (InfoType === 'humidity')
                            dataList.push(res.data.main.humidity);
                        else if (InfoType === 'temp')
                            dataList.push(res.data.main.temp_max);

                        if (dataList.length === 49) {

                            CallbackForDataReady(dataList);
                        }

                    }).catch((err) => {

                        console.log(err);
                    });

                }

            }

        });

    });
}

function CallbackForDataReady(dataList) {

    //console.log(pressureList);

    Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', function () {

        var worldBounds = Microsoft.Maps.LocationRect.fromEdges(90, -180, -90, 180);

        //Get all states by doing an intersection test against a bounding box of the world and have up to 52 results returned.
        var queryOptions = {

            queryUrl: 'https://spatial.virtualearth.net/REST/v1/data/755aa60032b24cb1bfb54e8a6d59c229/USCensus2010_States/States',
            spatialFilter: {
                spatialFilterType: 'intersects',
                intersects: worldBounds
            },
            top: 52
        };

        var stateList = [];


        Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, function (data) {

            //Loop through results and set the fill color of the polygons based on the population property.
            for (var i = 0; i < data.length; i++) {

                if (stateList.indexOf(data[i].metadata.Name) === -1) {

                    stateList.push(data[i].metadata.Name);

                    var unit = 0;

                    if (infoType === 'temp') {
                        unit = 273;
                    }


                    data[i].setOptions({

                        fillColor: getLegendColor(dataList[stateList.length - 1] - unit, maxValue)
                    });

                    var des = '';

                    if (dataList[stateList.length - 1] !== undefined)
                        des = (dataList[stateList.length - 1] - unit).toString();

                    var infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(data[i].metadata.Latitude, data[i].metadata.Longitude), {
                        title: data[i].metadata.Name,
                        description: des,
                        visible: false
                    });

                    infobox.setMap(map);

                    infoBoxes.push(data[i].metadata.EntityID);
                    infoBoxes.push(infobox);

                    Microsoft.Maps.Events.addHandler(infoBoxes[infoBoxes.length - 1], 'click', function (e) {

                        var v = e.target.getVisible();
                        e.target.setOptions({ visible: !v });
                    });

                    Microsoft.Maps.Events.addHandler(data[i], 'click', function (e) {

                        var index = infoBoxes.indexOf(e.target.metadata.EntityID);
                        var v = infoBoxes[index + 1].getVisible();

                        infoBoxes[index + 1].setOptions({ visible: !v });
                    });

                    //Add results to the map.
                    map.entities.push(data[i]);
                }

            }



        });

    });
};

function createLegend(maxValue) {

    var canvas = document.getElementById('legendCanvas');
    var ctx = canvas.getContext('2d');
    //Create a linear gradient for the legend. 
    var colorGradient = {
        '0.00': 'rgba(0,255,0,255)',
        '0.50': 'rgba(255,255,0,255)',
        '1.00': 'rgba(255,0,0,255)' // Red 
    };

    var grd = ctx.createLinearGradient(0, 0, 256, 0);

    for (var c in colorGradient) {

        grd.addColorStop(c, colorGradient[c]);
    }

    ctx.fillStyle = grd;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //Store the pixel information from the legend.

    heatGradientData = ctx.getImageData(0, 0, canvas.width, 1);
};

function getLegendColor(value, maxValue) {
    value = (value > maxValue) ? maxValue : value;
    //Calculate the pixel data index from the ratio of value/maxValue. 
    var idx = Math.round((value / maxValue) * 256) * 4 - 4;
    if (idx < 0) {
        idx = 0;
    }
    //Create an RGBA color from the pixel data at the calculated index. 
    return 'rgba(' + heatGradientData.data[idx] + ',' + heatGradientData.data[idx + 1] + ',' + heatGradientData.data[idx + 2] + ',' + '0.5)';
};

function deleteItem(id) {

    console.log(id);
    var item = document.getElementById("list" + id);
    item.parentNode.removeChild(item);

    num_routing--;
    data_arr[id] = 0;
}

function p2pSearch(mode) {
    var queryStartpoint = document.querySelector("#p2pStartpoint").value;
    var queryEndpoint = document.querySelector("#p2pEndpoint").value;

    console.log(queryStartpoint, queryEndpoint);

    var restUrlStart = BINGMAP_REST_URL + encodeURIComponent(queryStartpoint) + '&key=' + BINGMAP_KEY;
    var restUrlEnd = BINGMAP_REST_URL + encodeURIComponent(queryEndpoint) + '&key=' + BINGMAP_KEY;

    var correctNameStart, correctNameEnd;
    var promises = [];
    promises.push(restGet(restUrlStart));
    promises.push(restGet(restUrlEnd));

    Promise.all(promises).then(function (results) {
        CreateRoute(results, mode);
    });
}

function restGet(url) {
    return new Promise(function (resolve, reject) {
        axios.get(url).then(function (response) {
            addressObj = response.data.resourceSets[0].resources[0].address;

            var commaPos = addressObj.formattedAddress.indexOf(',');
            if (commaPos <= 0) commaPos = addressObj.formattedAddress.length;
            resolve(addressObj.formattedAddress.substr(0, commaPos));
        }).catch(function (error) {
            reject(error);
        });
    });
}

function MultiRoutePlanning(addresses, mode) {
    var locationList = [];
    addresses.forEach(function (address) {
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            var searchManager = new Microsoft.Maps.Search.SearchManager(map);
            var requestOptions = {
                bounds: map.getBounds(),
                where: address,
                callback: function (answer, userData) {
                    var info = {
                        "address": [address],
                        "location": answer.results[0].location,
                    };
                    locationList.push(info);
                    if (locationList.length === addresses.length)
                        AddressSort(locationList, locationList.length, mode);
                }
            };
            searchManager.geocode(requestOptions);
        });
    });
};

async function AddressSort(locationList, length, mode) {
    function getAllPermutations(string) {
        var results = [];

        if (string.length === 1) {
            results.push(string);
            return results;
        }

        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = getAllPermutations(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                results.push(firstChar + innerPermutations[j]);
            }
        }
        return results;
    }
    var input = '';
    for (var i = 0; i < length; i++) input += i;
    var result_str = await getAllPermutations(input);

    var result_int = [];
    result_str.forEach(function (str) {
        var integer = []
        for (var i = 0; i < length; i++) {
            integer.push(parseInt(str.slice(i, i + 1)));
        }
        result_int.push(integer);
    });

    var disTable = new Array();
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            disTable.push(0);
        }
    }
    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j < length; j++) {
            var R = 6371; // Radius of the earth in km
            var dLat = Math.abs(locationList[i].location.latitude - locationList[j].location.latitude) * (Math.PI / 180);
            var dLon = Math.abs(locationList[i].location.longitude - locationList[j].location.longitude) * (Math.PI / 180);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(locationList[i].location.latitude * (Math.PI / 180)) * Math.cos(locationList[j].location.latitude * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            //console.log(d);
            disTable[i * length + j] = d;
            disTable[j * length + i] = d;
        }
    }

    var minDis = Infinity;
    var ans_i = 0, ans_j = 0;
    for (var m = 0; m < result_int.length; m++) {
        var dis = 0;
        for (var n = 0; n < length - 1; n++) {
            dis += disTable[result_int[m][n] * length + result_int[m][n + 1]];
        }
        if (minDis >= dis) {
            minDis = dis;
            ans_i = result_int[m];
        }
    }

    var addresses_final = [];
    ans_i.forEach(function (index) {
        addresses_final.push(locationList[index].address[0]);
    });
    CreateRoute(addresses_final, mode);
}

function CreateRoute(addresses_final, mode) {
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        directionsManager.clearAll();
        directionsManager.clearDisplay();
        // Set Route Mode
        if (mode === 'walking')
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.walking });
        else if (mode === 'driving')
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
        else if (mode === 'transit')
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.transit });
        else if (mode === 'truck')
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.truck });

        addresses_final.forEach(function (address_fin) {
            directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({ address: address_fin }));
        });
        // Set the element in which the itinerary will be rendered
        //directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
        directionsManager.calculateDirections();
    });
};