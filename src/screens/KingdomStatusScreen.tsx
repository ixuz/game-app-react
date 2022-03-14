import { Container, Grid } from "@mui/material";
import KingdomStatus from "../components/KingdomStatus/KingdomStatus";
import StatusButtonGroup from "../components/StatusButtonGroup/StatusButtonGroup";

export default function KingdomStatusScreen() {
  return (
    <Container>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={12}>
          <KingdomStatus />
          <StatusButtonGroup />
        </Grid>
      </Grid>
    </Container>
  );
}
