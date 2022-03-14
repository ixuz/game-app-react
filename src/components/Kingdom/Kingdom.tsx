import { Grid } from "@mui/material";
import Area from "../Layout/Area";

const Kingdom = () => {
  const status = {
    kingdomName: "STAR",
    galaxy: 2,
    sector: 16,
    pronoun: "King",
    name: "Starsky",
    land: 250,
    networth: 13266,
    money: 175000,
    honor: 1200,
    power: 500,
    population: 2250,
    planetType: "Terra Form",
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
          <Grid item xs={12} sm={12} md={8}>
            <Area>
              <div>
                The kingdom of{" "}
                <strong>{`${status.kingdomName} (${status.galaxy}:${status.sector})`}</strong>
              </div>
            </Area>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Area>
              <div>
                Name: <strong>{`${status.pronoun} ${status.name}`}</strong>
              </div>
              <div>
                Name: <strong>{`${status.pronoun} ${status.name}`}</strong>
              </div>
              <div>
                Land: <strong>{`${status.land}`}</strong>
              </div>
              <div>
                Networth: <strong>{`${status.networth}`}</strong>
              </div>
              <div>
                Honor: <strong>{`${status.honor}`}</strong>
              </div>
              <div>
                Money: <strong>{`${status.money}`}</strong>
              </div>
              <div>
                Power: <strong>{`${status.power}`}</strong>
              </div>
              <div>
                Population: <strong>{`${status.population}`}</strong>
              </div>
            </Area>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Area>
              <div>
                Planet Type: <strong>{`${status.planetType}`}</strong>
              </div>
              <div>
                Soldiers: <strong>{`${status.soldiers}`}</strong>
              </div>
              <div>
                Troopers: <strong>{`${status.troopers}`}</strong>
              </div>
              <div>
                Laser Troopers: <strong>{`${status.laserTroopers}`}</strong>
              </div>
              <div>
                Tanks: <strong>{`${status.tanks}`}</strong>
              </div>
              <div>
                Probes: <strong>{`${status.probes}`}</strong>
              </div>
            </Area>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={12} sm={12} md={8}>
            <Area>
              <div>
                MA Protection: <strong>{`${status.maProtection}`}</strong>
              </div>
            </Area>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Kingdom;
