import React from "react";
import Header from "./components/header";
import mapboxgl from "mapbox-gl";

export default class Map2 extends React.Component {
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

    var ri = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "The Smith House",
            location: "Darien, USA"
          },
          geometry: {
            coordinates: [-73.470643, 41.077513],
            type: "Point"
          },
          id: "219846d458ceb307e2e5da9c8f0e6019"
        },
        {
          type: "Feature",
          properties: {
            title: "The Getty Center",
            location: "LA, USA"
          },
          geometry: {
            coordinates: [-118.47477, 34.076341],
            type: "Point"
          },
          id: "3de23eb667c724a06e555097a95ef9d9"
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [-73.401218, 41.076943],
            type: "Point"
          },
          id: "853122a91a3621ac995b1b178ebd71a9"
        },
        {
          type: "Feature",
          properties: {
            title: "Parrocchia Dio Padre Misericordioso",
            location: "Roma, Itlay"
          },
          geometry: {
            coordinates: [12.585447, 41.8824],
            type: "Point"
          },
          id: "87ef10a868db30d8e82ddba7d07e1269"
        }
      ],
      type: "FeatureCollection"
    };

    map.on("load", function(e) {
      map.addLayer({
        id: "ri",
        type: "symbol",
        source: {
          type: "geojson",
          data: ri
        },
        layout: {
          visibility: "visible",
          "icon-image": "dot-10",
          "icon-allow-overlap": true
        }
      });

      ri.features.forEach(function(marker) {
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url(https://previews.dropbox.com/p/thumb/AAUwG8Jp69lg_0I0STL9bgX53XnD-NepdCKVWDDp4dC16vkx08GARMg3W_i5IkDO0ZAo2h68hj5V7_T0gDnNFCZqYl1pfbGiMEz_nBWxaw9s3Llo8Mw5Njrq3hfphcXS1ntyKpDDS60CQf-4ETU7cmE_NLmC9G5Dd4rcwtjeOXPWrnp1ilPAS_zJRxmW6XMl6QELV6ef7eN5IVwBXBqDU3Ph-okwG408Lg8UIIuJWMeuxRZEIhyMR1yASdF7Ruy6fFc/p.png?size_mode=5)";
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
        zoom: 3
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
        layers: ["ri"]
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
