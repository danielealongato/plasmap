/* eslint-disable no-import-assign */
import React from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

const hemocentros = require("../../assets/json/hemocentros.json");

export default function Mapping() {
  const defaultProps = {
    center: {
      lat: -23.5973,
      lng: -46.6004,
    },
    zoom: 11,
  };
  const lista = hemocentros.list;
  console.log(lista[0]);
  const listItem = (name, local, telefone, key) => {
    return (
      <div
        key={key + 1}
        style={{
          p: 10,
          m: 10,
        }}
      >
        <h3>{name}</h3>
        <label>{local}</label>
        <h3>{telefone}</h3>
      </div>
    );
  };

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBchQuQlmxRk - LeSQbgJ_cRibxNLKtovak",
            language: "pt-br",
            region: "pt-br",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {lista.map((item, index) => {
            return (
              <RoomIcon
                key={index}
                sx={{ fontSize: 30 }}
                color="primary"
                lat={item.lat}
                lng={item.lng}
              />
            );
          })}
        </GoogleMapReact>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Hemocentros</h1>
        </div>
        <div
          style={{
            margin: 20,
            alignItems: "flex-start",
          }}
        >
          {lista.map((item, index) => {
            //         listItem(item.name, item.local,item.telefone);
            return (
              <>
                {listItem(item.name, item.local, item.telefone, index)}
                <hr key={index * 3} />
              </>

              // <ItemList key= {index} name = {item.name} local = {item.local} telefone = {item.telefone}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
