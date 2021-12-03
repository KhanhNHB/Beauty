import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import axios from "axios";
import "./Map.css";

const markers = [
    {
        title: "Giàu",
        address: "Long Khánh Xuân Thọ Đồng Nai"
    },
    {
        title: "Hân",
        address: "Gia Ray Xuân Lộc Đồng Nai"
    },
    {
        title: "Hân",
        address: "Xuân Hiệp Xuân Lộc Đồng Nai"
    },
    {
        title: "ABC",
        address: "Xuân Tâm Xuân Lộc Đồng Nai"
    },
    {
        title: "ABC",
        address: "Suối Cát Xuân Lộc Đồng Nai"
    },
    {
        title: "ABC",
        address: "Xuân Hưng Đồng Nai"
    }
];

const Map = () => {
    const [addressMarker, setAddressMarker] = useState([]);

    useEffect(() => {
        let coordination = [];
        markers?.map(marker => {
            axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${marker.address}.json?access_token=pk.eyJ1Ijoia2hhbmhuaGIiLCJhIjoiY2t3cXFyc2Y2MHBlZzJ2bzhsbGkwZXI5biJ9.ibqWMYtLVm5BLJ9_VakXKg`
            )
                .then(function (response) {
                    console.log(response)
                    coordination.push({
                        ...marker,
                        longitude: response.data.features[0].center[0],
                        latitude: response.data.features[0].center[1]
                    })
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        });
        setAddressMarker(coordination);
    }, []);

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 10.923507639985418,
        longitude: 107.40163166942727,
        zoom: 11
    });

    return (
        <div className="map">
            <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1Ijoia2hhbmhuaGIiLCJhIjoiY2t3cXF1d3JmMDF6ZjJxc2h3MmFhcmp3biJ9.Jr3L-LnBeXi2R24CQiYeeA"
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                mapStyle='mapbox://styles/mapbox/streets-v11'
            >
                {addressMarker?.map((marker, index) => (
                    <Marker
                        key={index}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                        offsetLeft={-20}
                        offsetTop={-30}
                    >
                        <img
                            onClick={() => { }}
                            style={{ width: 50, height: 50 }}
                            src={"https://res.cloudinary.com/dvehkdedj/image/upload/v1638560589/person_hxxdhq.png"}
                        />
                    </Marker>
                ))}
            </ReactMapGL>
        </div>
    );
}

export default Map;