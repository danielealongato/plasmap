import { Grid } from "@mui/material";
import React from "react";

export default function NotFound() {
    return (
        <Grid container alignContent={"flex-end"} style={{ color: "#CC1100", justifyContent: "center", marginBottom: 15}}>
        <Grid item xs={4}>
          <h2>404 - Página não encontrada</h2>
        </Grid>
      </Grid>
    );
}