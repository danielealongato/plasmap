import React from "react";
import GoogleMapReact from "google-map-react";

export default function Mapping() {
  const defaultProps = {
    center: {
      lat: -23.36,
      lng: -46.84,
    },
    zoom: 11,
  };

  return (
    <>
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBchQuQlmxRk - LeSQbgJ_cRibxNLKtovak",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
}
