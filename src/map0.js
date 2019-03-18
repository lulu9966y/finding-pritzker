import React from "react";
import Header from "./components/header";
import mapboxgl from "mapbox-gl";

export default class Map0 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibHVsdTk5NjZ5IiwiYSI6ImNqczNpMW41NjAydWgzeXF2bHAwbXZqdGoifQ.QpD9CuUbYSpOpzMml6hMnQ";

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lulu9966y/cjsp26plx22iq1fqguelizzwa",
      center: [-95, 38],
      zoom: 3.5
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());

    var ph = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "The Glass House",
            location: "New Canaan, USA"
          },
          geometry: {
            coordinates: [-73.496805, 41.146459],
            type: "Point"
          },
          id: "3855945a9f5952efba3a86070c4806b8"
        },
        {
          type: "Feature",
          properties: {
            title: "550 Madison Avenue",
            location: "New York, USA"
          },
          geometry: {
            coordinates: [-74.905673, 40.155505],
            type: "Point"
          },
          id: "7269b472389d2e52d3ebe85dca2ec7d1"
        },
        {
          type: "Feature",
          properties: {
            title: "Seagram Building",
            location: "New York, USA"
          },
          geometry: {
            coordinates: [-73.971985, 40.758417],
            type: "Point"
          },
          id: "d42382d40c89aee7f62368fffdd6e40a"
        }
      ],
      type: "FeatureCollection"
    };

    map.on("load", function(e) {
      map.addLayer({
        id: "ph",
        type: "symbol",
        source: {
          type: "geojson",
          data: ph
        },
        layout: {
          visibility: "visible",
          "icon-image": "dot-10",
          "icon-allow-overlap": true
        }
      });

      ph.features.forEach(function(marker) {
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url(https://previews.dropbox.com/p/thumb/AAVojIiE5EPTxhrMrmXyeUvhIquKDdqtbD3uZKzSThv6pC6WpRH_UHZpgFRSEGoVOKB59n_K5HbVixwOAqj9i9gpCasNHFzldmdCvEi1ZxEleKKzszDU7EmqHT1e_3qkzoMJlfbyO6ZxXuu6TYmO840aW3PyzV3CtfW7CnxQhJHnhUWYQbV7ykcOAIpzfjC0qJtpc9SEE-7QhpODtmnwZPHyAKRlZDxFB6iLjlJ22sNHQUKXlrLpX2REaiXp9qUeaGY/p.png?size_mode=5)";
        el.style.backgroundSize = "cover";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "15px";
        el.style.border = "1px solid #FAC733";

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });

    });

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 4
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
        layers: ["ph"]
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
