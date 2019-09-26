import React from "react";
import Header from "./components/header";
import mapboxgl from "mapbox-gl";

export default class Map3 extends React.Component {
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

    var fr = {
        "features": [
          {
            "type": "Feature",
            "properties": {
              "title": " Art Gallery of Ontario",
              "location": "Ontario, Canada"
            },
            "geometry": {
              "coordinates": [
                -79.392765,
                43.653588
              ],
              "type": "Point"
            },
            "id": "16becf9ed09ec6406093e44d90ba7084"
          },
          {
            "type": "Feature",
            "properties": {
              "title": " Massachusetts Institute of Technology - Stata Center",
              "location": "Cambridge, USA"
            },
            "geometry": {
              "coordinates": [
                -71.095683,
                42.358412
              ],
              "type": "Point"
            },
            "id": "7626bb46db02c0ca523735d4a9272331"
          },
          {
            "type": "Feature",
            "properties": {
              "title": " Biomuseo",
              "location": "Panama City"
            },
            "geometry": {
              "coordinates": [
                -79.544748,
                8.931898
              ],
              "type": "Point"
            },
            "id": "79bfd05238207b8c6f791ea4730b2354"
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Walt Disney Concert Hall",
              "location": "LA, USA"
            },
            "geometry": {
              "coordinates": [
                -118.249904,
                34.055428
              ],
              "type": "Point"
            },
            "id": "8bcd5ef63996c1783e2c3763406e8d43"
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Hotel Marqués de Riscal",
              "location": "Elciego, Spain"
            },
            "geometry": {
              "coordinates": [
                -2.617713,
                42.511677
              ],
              "type": "Point"
            },
            "id": "f29f9432e1016d03e52ace631afc5bea"
          },
          {
            "type": "Feature",
            "properties": {
              "title": "Dr Chau Chak Wing Building",
              "location": "Sydney, Australia"
            },
            "geometry": {
              "coordinates": [
                151.200751,
                -33.880926
              ],
              "type": "Point"
            },
            "id": "fcab59f73995e648c4062016224950a9"
          }
        ],
        "type": "FeatureCollection"
      };

    map.on("load", function(e) {
      map.addLayer({
        id: "fr",
        type: "symbol",
        source: {
          type: "geojson",
          data: fr
        },
        layout: {
          visibility: "visible",
          "icon-image": "dot-10",
          "icon-allow-overlap": true
        }
      });

      fr.features.forEach(function(marker) {
        var el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url(https://previews.dropbox.com/p/thumb/AAluqIj-2n3K9Azh3uH_Ux6a5R4SC2BEyurT3sbKI4KGN40vkntap_1Bd0en_tohq0c8tnEFTVDguYWzG5IqcdRVSIl220Go-OcbO34AX208J5PiCr_oLB4J9SQw4jhhv1ACp1m6Ur1QLvDIMHHxggSaGCbVLoBfOTlpOWG7QVgSs2QY8XxAORd6TP2nsf10grosGb1i4Seu231BkJQvYdynYqQrrnlWB0zIOj0bysNJUppBPzUJsdKiGj6cG4YEYSr1LVNTxZi19cyzDVxGjhI0k-3wtd1Al3saTjHDOKF7hEJtFs8LKqA_kYyQ8u40NWhEHLfYcvzOmsH13u5V0R3H/p.png?fv_content=true&size_mode=5)";
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
        layers: ["fr"]
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
