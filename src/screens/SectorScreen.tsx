import { Card, Container, Grid } from "@mui/material";
import Area from "../components/Layout/Area";
import SectorBanner from "../components/SectorBanner/SectorBanner";
import SectorNavigator from "../components/SectorNavigator/SectorNavigator";
import SectorStats from "../components/SectorStats/SectorStats";
import SectorName from "../components/SectorName/SectorName";
import SectorMessage from "../components/SectorMessage/SectorMessage";
import Table from "../components/Table/Table";
import {
  TableCellDataBuilder,
  TableDataBuilder,
  TableRowDataBuilder,
  TableSectionDataBuilder,
  TableSectionDataType,
} from "../lib/TableData/TableData";
import { v4 as uuidv4 } from "uuid";
import Resource, { ResourceType } from "../components/Resource/Resource";
import MockedKingdoms from "../mock/MockedKingdoms";

export default function SectorScreen() {
  const galaxy = 1;
  const sector = 18;
  const title = "Nebolu Road";
  const message = "We are one";

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("Kingdom Name")
                .build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("Planet Type")
                .build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4()).component("Planets").build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4()).component("Networth").build()
            )
            .build()
        )
        .build()
    )
    .sections(
      MockedKingdoms.map((kingdom: any) => {
        return new TableSectionDataBuilder(uuidv4(), TableSectionDataType.BODY)
          .row(
            new TableRowDataBuilder(uuidv4())
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={ResourceType.KINGDOM}
                      length="short"
                      value={kingdom.name}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={ResourceType.PLANET_TYPE}
                      length="short"
                      value={kingdom.planetType}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={ResourceType.LAND}
                      length="short"
                      value={kingdom.land}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={ResourceType.NETWORTH}
                      length="short"
                      value={kingdom.networth}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .build()
          )
          .build();
      })
    )
    .build();

  return (
    <Container>
      <Grid container rowSpacing={1} justifyContent={"center"}>
        <Grid item xs={12} sm={8} md={5}>
          <Area>
            <SectorNavigator />
          </Area>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectorName title={title} galaxy={galaxy} sector={sector} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectorMessage message={message} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectorBanner />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card sx={{ p: 1 }}>
            <Table data={tableData} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SectorStats />
        </Grid>
      </Grid>
    </Container>
  );
}
