import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import ReactMapGL, { Marker } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';

const TOKEN = process.env.REACT_APP_TOKEN;

function Map() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 28,
    longitude: 77,
    zoom: 4,
    width: "100vw",
    height: "100vh",
  });

  function handleClick(e) {
    console.log ("newPlace")
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  }

 
  return (
    <div style={{ width: "100vw", height: "100vh", zIndex: 999 }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="https://api.mapbox.com/styles/v1/kethmipujani/clxiwt2iy00az01pcbyuzcrml.html?title=view&access_token=pk.eyJ1Ijoia2V0aG1pcHVqYW5pIiwiYSI6ImNseGl3MGU1MDFrb24ybG9odjJjc2diemsifQ.Y0YSrqWczEq4x4TjtcScDw&zoomwheel=true&fresh=true#2/38/-34"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        onDblClick={handleClick}
      >
        {newPlace ? (
          <Marker
            latitude={newPlace.lat}
            longitude={newPlace.long}
            offsetLeft={-3.5 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
          >
            <RoomIcon
              style={{
                fontSize: 7 * viewport.zoom,
                color: "tomato",
                cursor: "pointer",
              }}
            />
          </Marker>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Map;