# OpenStreetMap
OpenStreetMap is an initiative to create and provide free geographic data, such as street maps, to anyone. The OpenStreetMap Foundation is an international not-for-profit organization supporting, but not controlling, the OpenStreetMap Project. It is dedicated to encouraging the growth, development and distribution of free geospatial data and to providing geospatial data for anyone to use and share.

 I have made view of Guru Nanak Dev Engineering college on Open Street Map as 3-D. The library that I have used to make 3-D buildings is "OSM Buildings". OSM Buildings is a JavaScript library for visualizing OpenStreetMap building geometry on 2D and 3D maps.
 https://osmbuildings.github.io/OSMBuildings/
 
 You can clone the latest version of repository from https://github.com/OSMBuildings/OSMBuildings/releases/tag/v3.1.0
 
Data used to view 3D buildings is coming from osm database but I have use custom map tile. You can also use custom /offline data for 3-D buildings with the help of GeoJSON file. Basically GeoJSON file is used to view buildings as 3D on  Openstreetmap.

I have generated GeoJSON file from openstreetmap data with the help of osmtogeojson converter https://github.com/tyrasd/osmtogeojson
You can get/extract .osm file from openstreetmap website.

When I used custom geojson file to view 3-d buildings, I was getting distorted buildings. So you can contribute and make the data offline for viewing 3-D buildings in such a way that there should be no difference between shape and look of buildings between offline data and the data coming from Osmbuildings Library.

