# Apache Cordova Bing Maps
This is a simple Bing Map implementation under the Apache Cordova framework. Apache Cordova allows for building native mobile applications using HTML, CSS and JavaScript. With proper configuration this applicaton can be quickly deployed to both iOS and Android platform.

The core functionality of Bing Map is powered by Bing Maps V8 Interavtive SDK. The following list of functionalities have been implemented in this project.

* Interactive Bing Map with Bing Maps REST APIs.
* Multi-waypoint route planning.
* Spatial data visualization using the Bing Maps layers

The following article serves as a brief summary of these functionalities.

<img src=".\Photos\home.PNG" width="80%"/>

## Interactive Bing Map
The basic requirement for this project was to create a usable Bing Map mobile application. Functionalities such as searching and point-to-point route planing. Most of the UI elements were implemented with the ONSEN-UI library, which allow quick development of iOS/Android style UI components.

To allow a more complete Microsoft experience (we assume thats what people expect from a Bing Maps Application), all the geological and image data that appears in the search result are obtained through the Bing/Microsoft Cognitive Services. 


<img src=".\Photos\find.PNG" width="80%"/>

## Multi-Route Planning 
Often app users have more that one destination they wish to visit, be it popular tourist attractions or serveral stores you want to swing by before you head home. Our app offered to solve this problem with what we call Multi-Route Planning. The problem is basically the famous "Traveling Salesman Problem". Users can choose any number of waypoints. We first obtain the shortest route between every pair of points and contruct a complete graph. Then a algorthim is used to solve the TSP. The result route is then shown to on the map to our users.

<img src=".\Photos\route.PNG" width="80%"/> 
<img src=".\Photos\direction.PNG" width="80%"/> 

## Data Visualization
Another big feature of the Bing Maps API is its ability to visualize data on the map. We showcased the possibiliy of this feature with a weather map layer. With this app, users can watch weather data projected on the map live. Addition to weather, we have seen great potential in this kind of geographical data visualization. By collecting more and wider range of data, users can extract more information with these applications.

<img src=".\Photos\weather.PNG" width="80%"/> 
<img src=".\Photos\humid.PNG" width="80%"/> 


