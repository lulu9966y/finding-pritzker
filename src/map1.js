import React from "react";
import Header from "./components/header";
import mapboxgl from "mapbox-gl";
import {Round1} from "./photo-host/Round1.png";


export default class Map1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibHVsdTk5NjZ5IiwiYSI6ImNqczNpMW41NjAydWgzeXF2bHAwbXZqdGoifQ.QpD9CuUbYSpOpzMml6hMnQ";

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lulu9966y/cjsp26plx22iq1fqguelizzwa",
      center: [21, 24],
      zoom: 1
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    var im = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "National Gallery of Art - East Building",
            location: "Washington, USA"
          },
          geometry: {
            coordinates: [-77.019884, 38.891304],
            type: "Point"
          },
          id: "00e38674e76716c3fe1839cc7d052406"
        },
        {
          type: "Feature",
          properties: {
            title: "Bank of China Tower",
            location: "Hongkong, China"
          },
          geometry: {
            coordinates: [114.161609, 22.279182],
            type: "Point"
          },
          id: "05bd18d151cd6d17f7d4153f996cb50b"
        },
        {
          type: "Feature",
          properties: {
            title: "Rock and Roll Hall of Fame",
            location: "Cleveland, USA"
          },
          geometry: {
            coordinates: [-81.695496, 41.508526],
            type: "Point"
          },
          id: "0e0c54b28ab4d41565fa28b6b6e642e0"
        },
        {
          type: "Feature",
          properties: {
            title: "Deutsches Historisches Museum (New) ",
            location: "Berlin, Germany"
          },
          geometry: {
            coordinates: [13.397039, 52.517686],
            type: "Point"
          },
          id: "40c8314074b7a81c0d23bea40338adbf"
        },
        {
          type: "Feature",
          properties: {
            title: "Louvre Pyramid",
            location: "Paris, France"
          },
          geometry: {
            coordinates: [2.335855, 48.860998],
            type: "Point"
          },
          id: "6c61009a1d9cf148a7ab7274bb7bde38"
        },
        {
          type: "Feature",
          properties: {
            title: "Luce Memorial Chapel",
            location: "Taiwan"
          },
          geometry: {
            coordinates: [120.600543, 24.178879],
            type: "Point"
          },
          id: "6e80b2d26a4e45a6ab468dc7e3a78355"
        },
        {
          type: "Feature",
          properties: {
            title: "Museum of Islamic Art",
            location: "Doha, Qatar"
          },
          geometry: {
            coordinates: [51.543682, 25.295085],
            type: "Point"
          },
          id: "83487c41bd90bd11fc6f868a893aa23a"
        },
        {
          type: "Feature",
          properties: {
            title: "苏州博物馆",
            location: "Suzhou, China"
          },
          geometry: {
            coordinates: [120.625794, 31.325428],
            type: "Point"
          },
          id: "95b0c8d32529c0cece27746dcd7aa5d9"
        },
        {
          type: "Feature",
          properties: {
            title: "Wilson Commons, University of Rochester",
            location: "Rochester, USA"
          },
          geometry: {
            coordinates: [-77.630665, 43.129144],
            type: "Point"
          },
          id: "c9f2a3985adeaf22c27cc1265c817f8f"
        },
        {
          type: "Feature",
          properties: {
            title: "Miho Museum",
            location: "Kyoto, Japan"
          },
          geometry: {
            coordinates: [136.016122, 34.914896],
            type: "Point"
          },
          id: "dcd09a2fb9b8b7c3605d30137d122ce5"
        }
      ],
      type: "FeatureCollection"
    };

    map.on("load", function(e) {
      map.addLayer({
        id: "im",
        type: "symbol",
        source: {
          type: "geojson",
          data: im
        },
        layout: {
          visibility: "visible",
          "icon-image": "dot-10",
          "icon-allow-overlap": true
        }
      });

      im.features.forEach(function(marker) {
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url('https://previews.dropbox.com/p/thumb/AAlI5iQQDC6xGmi4GqH4GDfATylt1Yf4ilorV4hsIZAQXc5QpOQOd5cWVB19ToxDTVxnceS5vVRcjvsFAYhjI-qvzLAdVgvPNCvtqjsGcyehIxtXgqo-ZsF-tScYzSZdde49z9I0PORncvOqZlwBF-MI5_xpUuM7_Ea1skcozprK7mX_JQ-sJ-uPAt8fRN0kFPUwbCqHYjIAZ072yfZq2zun6Y8jNGys541LLOxw4UmZBNDsEFm4Z0VXBkwlrpvbdGtJoQ5QMwl4k0nYU_FjH2oVENRUGHSrTZzgeXri9RgyEHBH_gQa6ThAw2q84V7e94q69FbyBODdJokvnYojpf5t/p.png?fv_content=true&size_mode=5')";
        el.style.backgroundSize = "cover";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "15px";
        el.style.border = "1px solid #FAC733";

        var marker = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);

      });

    });

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 6
      });
    }

    function createPopUp(currentFeature) {
      var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
          "<h3>" +
            currentFeature.properties.title +
            "</h3>" +
            "<h4>" +
            currentFeature.properties.location +
            "</h4>"
        )
        .addTo(map);
    }

    map.on("click", function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["im"]
      });
      if (features.length) {
        var clickedPoint = features[0];
        createPopUp(clickedPoint);
        flyToStore(clickedPoint);
      }
    });
  }
  render() {
    let mapContainer = {
      position: "relative",
      top: "150px",
      height: "500px",
      width: "80%",
      margin: "auto"
    };
    return (
      <div>
        <Header />
        <div ref={el => (this.mapContainer = el)} style={mapContainer} />
      </div>
    );
  }
}
