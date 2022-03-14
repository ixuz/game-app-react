import { Grid } from "@mui/material";
import Area from "../Layout/Area";
import Resource, { ResourceType } from "../Resource/Resource";
import MockedPlayerKingdom from "../../mock/MockedPlayerKingdom";

const Header = () => {
  return (
    <div>
      <Grid
        container
        rowSpacing={{ xs: 0, sm: 0, md: 1 }}
        columnSpacing={{ xs: 0, sm: 0, md: 1 }}
      >
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.TIME}
                length="medium"
                value="17 Oct, 07:59:28"
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.LAND}
                value={MockedPlayerKingdom.land}
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.NETWORTH}
                value={MockedPlayerKingdom.networth}
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.NEWS}
                length="medium"
                value="No News"
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.MINERAL}
                value={MockedPlayerKingdom.minerals}
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.POPULATION}
                value={MockedPlayerKingdom.population}
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.POWER}
                value={MockedPlayerKingdom.power}
              />
            </div>
          </Area>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Area>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Resource
                resourceType={ResourceType.MESSAGE}
                length="medium"
                value="Read Messages"
              />
            </div>
          </Area>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
