import { Grid } from "@mui/material";
import Area from "../Layout/Area";

export default function Sector() {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={12}>
          <Area>Explore planets dickhead!</Area>
        </Grid>
      </Grid>
    </div>
  );
}
