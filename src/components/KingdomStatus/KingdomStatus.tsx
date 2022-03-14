import { Grid } from "@mui/material";
import Area from "../Layout/Area";
import ResourceSummary from "../ResourceSummary/ResourceSummary";
import { ResourceType } from "../Resource/Resource";
import MockedPlayerKingdom from "../../mock/MockedPlayerKingdom";

const KingdomStatus = () => {
  const status = {
    kingdomName: MockedPlayerKingdom.name,
    galaxy: 1,
    sector: 18,
    pronoun: "King",
    name: "Starsky",
    land: MockedPlayerKingdom.land,
    networth: MockedPlayerKingdom.networth,
    minerals: MockedPlayerKingdom.minerals,
    honor: 1200,
    power: MockedPlayerKingdom.power,
    population: MockedPlayerKingdom.population,
    planetType: MockedPlayerKingdom.planetType,
    soldiers: 200,
    troopers: 0,
    laserTroopers: 0,
    tanks: 0,
    scientists: 10,
    probes: 0,
    maProtection: 0,
  };

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1 }}
        justifyContent="center"
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={12} spacing={1} sm={12} md={8}>
            <Grid item xs={12} sm={6} md={6}>
              <Area>
                <ResourceSummary
                  header={{
                    resourceType: ResourceType.KINGDOM,
                    length: "medium",
                    value: `${status.kingdomName} (${status.galaxy}:${status.sector})`,
                  }}
                  resources={[
                    {
                      resourceType: ResourceType.LEADER,
                      value: `${status.pronoun} ${status.name}`,
                    },
                    {
                      resourceType: ResourceType.PLANET_TYPE,
                      value: status.planetType,
                    },
                  ]}
                />
              </Area>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Area>
                <ResourceSummary
                  header={{
                    resourceType: ResourceType.ASSET,
                    length: "medium",
                    value: "Assets",
                  }}
                  resources={[
                    {
                      resourceType: ResourceType.NETWORTH,
                      value: status.networth,
                    },
                    {
                      resourceType: ResourceType.LAND,
                      value: status.land,
                    },
                    {
                      resourceType: ResourceType.MINERAL,
                      value: status.minerals,
                    },
                    {
                      resourceType: ResourceType.POPULATION,
                      value: status.population,
                    },
                    {
                      resourceType: ResourceType.POWER,
                      value: status.power,
                    },
                  ]}
                />
              </Area>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Area>
                <ResourceSummary
                  header={{
                    resourceType: ResourceType.MILITARY,
                    length: "medium",
                    value: "Military",
                  }}
                  resources={[
                    {
                      resourceType: ResourceType.HONOR,
                      value: status.honor,
                    },
                    {
                      resourceType: ResourceType.SOLDIER,
                      value: status.soldiers,
                    },
                    {
                      resourceType: ResourceType.TROOPER,
                      value: status.troopers,
                    },
                    {
                      resourceType: ResourceType.LASER_TROOPER,
                      value: status.laserTroopers,
                    },
                    {
                      resourceType: ResourceType.TANK,
                      value: status.tanks,
                    },
                    {
                      resourceType: ResourceType.PROBE,
                      value: status.probes,
                    },
                    {
                      resourceType: ResourceType.SCIENTIST,
                      value: status.scientists,
                    },
                  ]}
                />
              </Area>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default KingdomStatus;
