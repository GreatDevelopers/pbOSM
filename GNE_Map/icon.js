var main_gate = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.85956, 30.86063], 'EPSG:4326', 'EPSG:3857')),
  name: 'Main Gate',
  population: 4000,
  rainfall: 500
});
var boyshostel = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86399, 30.86001], 'EPSG:4326', 'EPSG:3857')),
  name: 'Boys Hostel',
  population: 4000,
  rainfall: 500
});
var auditorium = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86068, 30.85885], 'EPSG:4326', 'EPSG:3857')),
  name: 'Auditorium',
  population: 4000,
  rainfall: 500
});
var workshop = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86165, 30.85957], 'EPSG:4326', 'EPSG:3857')),
  name: 'Worksop',
  population: 4000,
  rainfall: 500
});
var mba_block = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86015, 30.85990], 'EPSG:4326', 'EPSG:3857')),
  name: 'MBA Block',
  population: 4000,
  rainfall: 500
});
var pg_block = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86029, 30.86040], 'EPSG:4326', 'EPSG:3857')),
  name: 'PG Block',
  population: 4000,
  rainfall: 500
});
var library = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86035, 30.85829], 'EPSG:4326', 'EPSG:3857')),
  name: 'Library',
  population: 4000,
  rainfall: 500
});
var sports = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.transform([75.86356, 30.85878], 'EPSG:4326', 'EPSG:3857')),
  name: 'Sports',
  population: 4000,
  rainfall: 500
});


var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.75,
    src: 'marker-gold.png'
  }))
});


sports.setStyle(iconStyle);
library.setStyle(iconStyle);
pg_block.setStyle(iconStyle);
mba_block.setStyle(iconStyle);
workshop.setStyle(iconStyle);
auditorium.setStyle(iconStyle);
boyshostel.setStyle(iconStyle);
main_gate.setStyle(iconStyle);

var vectorSource1 = new ol.source.Vector({
  features: [sports]
});

var vectorLayer1 = new ol.layer.Vector({
  source: vectorSource1
});

var vectorSource2 = new ol.source.Vector({
  features: [library]
});

var vectorLayer2 = new ol.layer.Vector({
  source: vectorSource2
});

var vectorSource3 = new ol.source.Vector({
  features: [pg_block]
});

var vectorLayer3 = new ol.layer.Vector({
  source: vectorSource3
});

var vectorSource4 = new ol.source.Vector({
  features: [mba_block]
});

var vectorLayer4 = new ol.layer.Vector({
  source: vectorSource4
});

var vectorSource5 = new ol.source.Vector({
  features: [main_gate]
});

var vectorLayer5 = new ol.layer.Vector({
  source: vectorSource5
});

var vectorSource6 = new ol.source.Vector({
  features: [workshop]
});

var vectorLayer6 = new ol.layer.Vector({
  source: vectorSource6
});

var vectorSource7 = new ol.source.Vector({
  features: [auditorium]
});

var vectorLayer7 = new ol.layer.Vector({
  source: vectorSource7
});

var vectorSource8 = new ol.source.Vector({
  features: [boyshostel]
});

var vectorLayer8 = new ol.layer.Vector({
  source: vectorSource8
});
