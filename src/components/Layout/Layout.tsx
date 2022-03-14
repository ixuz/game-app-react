import React from "react";
import { Grid } from "@mui/material";

interface Props {
  headerComponent: React.ReactNode;
  sidebarComponent: React.ReactNode;
  mainComponent: React.ReactNode;
  footerComponent: React.ReactNode;
}

export const Layout: React.FC<Props> = ({
  headerComponent,
  sidebarComponent,
  mainComponent,
  footerComponent,
}) => {
  return (
    <Grid container spacing={1} p={1}>
      <Grid item xs={12} sm={3} md={2}>
        {sidebarComponent}
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            {headerComponent}
          </Grid>
          <Grid item xs={12} sm={12}>
            {mainComponent}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
