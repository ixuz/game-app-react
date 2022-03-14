import { Button, Card, Container, Grid, Link, TextField } from "@mui/material";
import Resource, { ResourceType } from "../components/Resource/Resource";
import StatusButtonGroup from "../components/StatusButtonGroup/StatusButtonGroup";

export default function ExploreScreen() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} sm={12} md={7} justifyContent={"center"}>
        <Grid item xs={12} justifyContent={"center"} p={2}>
          <div style={{ textAlign: "center" }}>
            <div>
              Welcome back to the <strong>Explore Room</strong>
            </div>
            <div>
              It will take <strong>24 ticks</strong> to settle new colonies.
            </div>
          </div>
        </Grid>
        <Card sx={{ p: 1 }}>
          <Grid container item spacing={1} xs={12}>
            <Grid container item xs={12}>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                Settling one land costs:
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Resource resourceType={ResourceType.MINERAL} value={633} />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                You are currently exploring:
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Resource resourceType={ResourceType.LAND} value={0} />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                You can explore a maximum of:
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                display={"flex"}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Resource resourceType={ResourceType.LAND} value={43} />
              </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <div style={{ display: "flex", alignItems: "center" }}>
                Land to explore:&nbsp;
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Land"
                  variant="outlined"
                  sx={{ width: 80 }}
                />
                &nbsp;<Link href="#">Max</Link>
              </div>
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <Button
                  variant="outlined"
                  sx={{ width: "100%", height: "100%" }}
                >
                  Explore
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <StatusButtonGroup />
      </Grid>
    </Container>
  );
}
