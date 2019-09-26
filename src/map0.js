import React from "react";
import Header from "./components/header";
import mapboxgl from "mapbox-gl";
import "./map.css";
import {Round4} from "./photo-host/Round4.png";
import {Round1} from "./photo-host/Round1.png";
import {Round6} from "./photo-host/Round6.png";
import {Round} from "./photo-host/Round.png";
import {Round7} from "./photo-host/Round7.png";
import {Round5} from "./photo-host/Round5.png";
import {Round9} from "./photo-host/Round9.png";
import {Round3} from "./photo-host/Round3.png";
import {Round2} from "./photo-host/Round2.png";
import {Round8} from "./photo-host/Round8.png";

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
      center: [21, 24],
      zoom: 1
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
    var fr = {
      features: [
        {
          type: "Feature",
          properties: {
            title: " Art Gallery of Ontario",
            location: "Ontario, Canada"
          },
          geometry: {
            coordinates: [-79.392765, 43.653588],
            type: "Point"
          },
          id: "16becf9ed09ec6406093e44d90ba7084"
        },
        {
          type: "Feature",
          properties: {
            title: " Massachusetts Institute of Technology - Stata Center",
            location: "Cambridge, USA"
          },
          geometry: {
            coordinates: [-71.095683, 42.358412],
            type: "Point"
          },
          id: "7626bb46db02c0ca523735d4a9272331"
        },
        {
          type: "Feature",
          properties: {
            title: " Biomuseo",
            location: "Panama City"
          },
          geometry: {
            coordinates: [-79.544748, 8.931898],
            type: "Point"
          },
          id: "79bfd05238207b8c6f791ea4730b2354"
        },
        {
          type: "Feature",
          properties: {
            title: "Walt Disney Concert Hall",
            location: "LA, USA"
          },
          geometry: {
            coordinates: [-118.249904, 34.055428],
            type: "Point"
          },
          id: "8bcd5ef63996c1783e2c3763406e8d43"
        },
        {
          type: "Feature",
          properties: {
            title: "Hotel Marqués de Riscal",
            location: "Elciego, Spain"
          },
          geometry: {
            coordinates: [-2.617713, 42.511677],
            type: "Point"
          },
          id: "f29f9432e1016d03e52ace631afc5bea"
        },
        {
          type: "Feature",
          properties: {
            title: "Dr Chau Chak Wing Building",
            location: "Sydney, Australia"
          },
          geometry: {
            coordinates: [151.200751, -33.880926],
            type: "Point"
          },
          id: "fcab59f73995e648c4062016224950a9"
        }
      ],
      type: "FeatureCollection"
    };
    var ta = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "Naoshima Contemporary Art Museum",
            location: "Kagawa, Japan"
          },
          geometry: {
            coordinates: [133.98599, 34.449891],
            type: "Point"
          },
          id: "11e76fee41da6084c2a76437b371066d"
        },
        {
          type: "Feature",
          properties: {
            title: "茨木春日丘教会",
            location: "Osaka, Japan"
          },
          geometry: {
            coordinates: [135.53709, 34.818552],
            type: "Point"
          },
          id: "2acbb49a7318794cd5080d8ae899b0b6"
        },
        {
          type: "Feature",
          properties: {
            title: "水の教会",
            location: "Hokkaido, Japan"
          },
          geometry: {
            coordinates: [142.627444, 43.063565],
            type: "Point"
          },
          id: "f871591ba41b7336c89a57df160746ae"
        },
        {
          type: "Feature",
          properties: {
            title: "Rokko Housing I and II",
            location: "Hyogo, Japan"
          },
          geometry: {
            coordinates: [135.1923, 34.698604],
            type: "Point"
          },
          id: "ff60eaaf82b269b0c1a0ff2aec882d2d"
        }
      ],
      type: "FeatureCollection"
    };
    var re = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "Maison à Bordeaux",
            location: "Floirac, France"
          },
          geometry: {
            coordinates: [-0.554076, 44.844868],
            type: "Point"
          },
          id: "08618adff7dfa30fca8c82308f77334e"
        },
        {
          type: "Feature",
          properties: {
            title: "Dance Theatre",
            location: "Hague, Netherlands"
          },
          geometry: {
            coordinates: [4.898042, 52.372383],
            type: "Point"
          },
          id: "36c41d12feb270877bd63e1fab17c25a"
        },
        {
          type: "Feature",
          properties: {
            title: "Villa dall’Ava",
            location: "Paris, France"
          },
          geometry: {
            coordinates: [2.217528, 48.858866],
            type: "Point"
          },
          id: "d1436ce009f67cbcfec4df0ea3c5768b"
        }
      ],
      type: "FeatureCollection"
    };
    var za = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "Bergisel Ski Jump",
            location: "Innsbruck, Austria"
          },
          geometry: {
            coordinates: [11.393758, 47.265715],
            type: "Point"
          },
          id: "195d90d18832bef7cbec0e264df831b1"
        },
        {
          type: "Feature",
          properties: {
            title: "Vitra Fire Station",
            location: "Weil am Rhein, Germany"
          },
          geometry: {
            coordinates: [7.614529, 47.600264],
            type: "Point"
          },
          id: "a75306d512ae123dcd2c5a41942b7c76"
        },
        {
          type: "Feature",
          properties: {
            title: "广州大剧院",
            location: "Guangzhou, China"
          },
          geometry: {
            coordinates: [113.317087, 23.117835],
            type: "Point"
          },
          id: "de5f9fa558c7fb937255898c187efcc2"
        },
        {
          type: "Feature",
          properties: {
            title: "The Richard and Lois Rosenthal Center for Contemporary Art",
            location: "Cincinnati, USA"
          },
          geometry: {
            coordinates: [-84.513186, 39.101499],
            type: "Point"
          },
          id: "f7c52c03d4fff87991506938da8d2534"
        }
      ],
      type: "FeatureCollection"
    };
    var pe = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "Kunsthaus Bregenz",
            location: "Bregenz, Austria"
          },
          geometry: {
            coordinates: [9.747303, 47.504988],
            type: "Point"
          },
          id: "160338487176f58585fa68b080335377"
        },
        {
          type: "Feature",
          properties: {
            title: "Brother Klaus Field Chapel",
            location: "Eifel, Germany"
          },
          geometry: {
            coordinates: [6.742512, 50.595565],
            type: "Point"
          },
          id: "25a875b6db8f757f995f23efc7a49002"
        },
        {
          type: "Feature",
          properties: {
            title: "Saint Benedict Chapel",
            location: "Graubünden, Switzerland"
          },
          geometry: {
            coordinates: [8.939233, 46.728812],
            type: "Point"
          },
          id: "56d280465791ae83a3f86362fff666ea"
        },
        {
          type: "Feature",
          properties: {
            title: "Thermal Bath Vals",
            location: "Graubünden, Switzerland"
          },
          geometry: {
            coordinates: [9.180738, 46.616105],
            type: "Point"
          },
          id: "65af55106f14fe15ce8fccd5d5c54a96"
        }
      ],
      type: "FeatureCollection"
    };
    var ka = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "O美術館",
            location: "Nagano, Japan"
          },
          geometry: {
            coordinates: [139.729382, 35.620681],
            type: "Point"
          },
          id: "024fd522960fb66754fc06a767119de7"
        },
        {
          type: "Feature",
          properties: {
            title: "The Rolex Learning Center",
            location: "Lausanne, Switzerland"
          },
          geometry: {
            coordinates: [6.568352, 46.518373],
            type: "Point"
          },
          id: "218eec91d1d4282a88a6dbbd18f106b1"
        },
        {
          type: "Feature",
          properties: {
            title: "New Museum",
            location: "New York, USA"
          },
          geometry: {
            coordinates: [-73.992852, 40.722355],
            type: "Point"
          },
          id: "967d9828c3fc4c51e88fc208b75dbbcd"
        },
        {
          type: "Feature",
          properties: {
            title: "金沢21世紀美術館",
            location: "Ishikawa, Japan"
          },
          geometry: {
            coordinates: [136.65823, 36.56085],
            type: "Point"
          },
          id: "ca169c2dc24d1ea21292b7a27c59ef4d"
        },
        {
          type: "Feature",
          properties: {
            title: "Toledo Museum of Art",
            location: "Toledo, USA"
          },
          geometry: {
            coordinates: [-83.559534, 41.658454],
            type: "Point"
          },
          id: "cf3178702b913dbddab78200e6c586b6"
        }
      ],
      type: "FeatureCollection"
    };
    var wa = {
      features: [
        {
          type: "Feature",
          properties: {
            title: "宁波博物馆",
            location: "Ningbo, China"
          },
          geometry: {
            coordinates: [121.540909, 29.817189],
            type: "Point"
          },
          id: "73412ff5c5b4343ff5dd4f72f0a19f79"
        },
        {
          type: "Feature",
          properties: {
            title: "中国美术学院（象山校区）",
            location: "Hangzhou, China"
          },
          geometry: {
            coordinates: [120.073066, 30.157313],
            type: "Point"
          },
          id: "deeedc6a3f52655011b399a417a65a17"
        }
      ],
      type: "FeatureCollection"
    };

    // ph.features.forEach(function(marker) {
    //   var el = document.createElement("div");
    //   el.className = "marker";
    //   el.style.backgroundImage =
    //     "url(https://previews.dropbox.com/p/thumb/AAVojIiE5EPTxhrMrmXyeUvhIquKDdqtbD3uZKzSThv6pC6WpRH_UHZpgFRSEGoVOKB59n_K5HbVixwOAqj9i9gpCasNHFzldmdCvEi1ZxEleKKzszDU7EmqHT1e_3qkzoMJlfbyO6ZxXuu6TYmO840aW3PyzV3CtfW7CnxQhJHnhUWYQbV7ykcOAIpzfjC0qJtpc9SEE-7QhpODtmnwZPHyAKRlZDxFB6iLjlJ22sNHQUKXlrLpX2REaiXp9qUeaGY/p.png?size_mode=5)";
    //   el.style.backgroundSize = "cover";
    //   el.style.width = "30px";
    //   el.style.height = "30px";
    //   el.style.borderRadius = "15px";
    //   el.style.border = "1px solid #FAC733";

    //   new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    //   new mapboxgl.Marker(el)
    //     .setLngLat(marker.geometry.coordinates)
    //     .setPopup(
    //       new mapboxgl.Popup({ offset: 25 }).setHTML(
    //         "<h3>" +
    //           marker.properties.title +
    //           "</h3><p>" +
    //           marker.properties.location +
    //           "</p>"
    //       )
    //     )
    //     .addTo(map);
    //   new mapboxgl.Marker(el).remove();
    // });

    map.on("load", function(e) {
      map.loadImage(
        Round4,
        function(error, image) {
          if (error) throw error;
          map.addImage("ph", image);
          map.addLayer({
            id: "Philip Johnson",
            type: "symbol",
            source: {
              type: "geojson",
              data: ph
            },
            layout: {
              visibility: "none",
              "icon-image": "ph",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round1,
        function(error, image) {
          if (error) throw error;
          map.addImage("im", image);
          map.addLayer({
            id: "I.M.Pei",
            type: "symbol",
            source: {
              type: "geojson",
              data: im
            },
            layout: {
              visibility: "none",
              "icon-image": "im",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round6,
        function(error, image) {
          if (error) throw error;
          map.addImage("ri", image);
          map.addLayer({
            id: "Richard Meier",
            type: "symbol",
            source: {
              type: "geojson",
              data: ri
            },
            layout: {
              visibility: "none",
              "icon-image": "ri",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round,
        function(error, image) {
          if (error) throw error;
          map.addImage("fr", image);
          map.addLayer({
            id: "Frank Gehry",
            type: "symbol",
            source: {
              type: "geojson",
              data: fr
            },
            layout: {
              visibility: "none",
              "icon-image": "fr",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round7,
        function(error, image) {
          if (error) throw error;
          map.addImage("ta", image);
          map.addLayer({
            id: "Tadao Ando",
            type: "symbol",
            source: {
              type: "geojson",
              data: ta
            },
            layout: {
              visibility: "none",
              "icon-image": "ta",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round5,
        function(error, image) {
          if (error) throw error;
          map.addImage("re", image);
          map.addLayer({
            id: "Rem Koolhaas",
            type: "symbol",
            source: {
              type: "geojson",
              data: re
            },
            layout: {
              visibility: "none",
              "icon-image": "re",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round9,
        function(error, image) {
          if (error) throw error;
          map.addImage("za", image);
          map.addLayer({
            id: "Zaha Hadid",
            type: "symbol",
            source: {
              type: "geojson",
              data: za
            },
            layout: {
              visibility: "none",
              "icon-image": "za",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round3,
        function(error, image) {
          if (error) throw error;
          map.addImage("pe", image);
          map.addLayer({
            id: "Peter Zumthor",
            type: "symbol",
            source: {
              type: "geojson",
              data: pe
            },
            layout: {
              visibility: "none",
              "icon-image": "pe",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round2,
        function(error, image) {
          if (error) throw error;
          map.addImage("ka", image);
          map.addLayer({
            id: "Kazuyo Sejima & Ryue Nishizawa",
            type: "symbol",
            source: {
              type: "geojson",
              data: ka
            },
            layout: {
              visibility: "none",
              "icon-image": "ka",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
      map.loadImage(
        Round8,
        function(error, image) {
          if (error) throw error;
          map.addImage("wa", image);
          map.addLayer({
            id: "Wang Shu",
            type: "symbol",
            source: {
              type: "geojson",
              data: wa
            },
            layout: {
              visibility: "none",
              "icon-image": "wa",
              "icon-size": 0.12,
              "icon-allow-overlap": true
            }
          });
        }
      );
    });

    var toggleableLayerIds = [
      "Philip Johnson",
      "I.M.Pei",
      "Richard Meier",
      "Frank Gehry",
      "Tadao Ando",
      "Rem Koolhaas",
      "Zaha Hadid",
      "Peter Zumthor",
      "Kazuyo Sejima & Ryue Nishizawa",
      "Wang Shu"
    ];

    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];

      var link = document.createElement("a");
      link.href = "#";
      link.className = "";
      link.textContent = id;

      link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, "visibility");

        if (visibility === "visible") {
          map.setLayoutProperty(clickedLayer, "visibility", "none");
          this.className = "";
        } else {
          this.className = "active";
          map.setLayoutProperty(clickedLayer, "visibility", "visible");
        }
      };

      var layers = document.getElementById("mapMenu");
      layers.appendChild(link);
    }

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 8
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
        layers: [
          "Philip Johnson",
          "I.M.Pei",
          "Richard Meier",
          "Frank Gehry",
          "Tadao Ando",
          "Rem Koolhaas",
          "Zaha Hadid",
          "Peter Zumthor",
          "Kazuyo Sejima & Ryue Nishizawa",
          "Wang Shu"
        ]
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
    let mapMenu = {
      zIndex: 1000,
      position: "absolute",
      top: 0,
      left: 0,
      display: "grid",
      gridTemplateColumns: "auto"
    };
    return (
      <div>
        <Header />
        <div ref={el => (this.mapContainer = el)} style={mapContainer}>
          {" "}
          <div id="mapMenu" style={mapMenu} />
        </div>
      </div>
    );
  }
}
