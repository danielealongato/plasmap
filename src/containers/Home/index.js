import { Grid } from "@mui/material";
import React from "react";
// import Carousel from "react-material-ui-carousel";
import HowItWorks from "../HowItWorks";

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <Grid container alignContent={"flex-end"} style={{ color: "#CC1100", justifyContent: "flex-end", marginBottom: 15}}>
        <Grid item xs={4}>
          <h2>Plasmap</h2>
          Uma plataforma para ajudar doadores e pessoas necessitadas a se
          conectarem.
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <img
            src={require("../../assets/img/banner-home.png")}
            alt="Plasmap"
            width="100%"
          />
        </Grid>
      </Grid>
      <HowItWorks />
    </>
  );
}
