import { Card, Container, Grid, TextField } from "@mui/material";
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
import {
  PipelineBuilder,
  PipelineItem,
  PipelineItemBuilder,
} from "../lib/Pipeline/Pipeline";
import { Building } from "../lib/Building/Buildings";
import MockedPlayerKingdom from "../mock/MockedPlayerKingdom";

export default function BuildingsScreen() {
  const sumOfBuildingPipeline = (building: Building) => {
    return building.pipeline.items.reduce((acc, item: PipelineItem) => {
      return acc + item.amount;
    }, 0);
  };

  const percentageOfBuildingPipeline = (building: Building) => {
    const sum = sumOfBuildingPipeline(building);
    const percent = building.quantity > 0 ? sum / building.quantity : 0;
    return (percent * 100).toFixed(2) + "%";
  };

  const buildings = MockedPlayerKingdom.buildings;

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(new TableCellDataBuilder(uuidv4()).component("Name").build())
            .cell(new TableCellDataBuilder(uuidv4()).component("%").build())
            .cell(new TableCellDataBuilder(uuidv4()).component("Built").build())
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("Under Construction")
                .build()
            )
            .cell(new TableCellDataBuilder(uuidv4()).component("Build").build())
            .build()
        )
        .build()
    )
    .sections(
      buildings.map((building: Building) => {
        return new TableSectionDataBuilder(uuidv4(), TableSectionDataType.BODY)
          .row(
            new TableRowDataBuilder(uuidv4())
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={building.resourceType}
                      length="medium"
                      value={building.name}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(percentageOfBuildingPipeline(building))
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(building.quantity)
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(sumOfBuildingPipeline(building))
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Quantity"
                      variant="outlined"
                      sx={{ width: 100 }}
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
        <Grid item xs={12} m={2}>
          <div style={{ textAlign: "center" }}>
            <div>
              Welcome back to the <strong>Buildings Room</strong>
            </div>
            <div>What should your workers build this time?</div>
          </div>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Card sx={{ p: 1 }}>
            <Grid container spacing={1} justifyContent={"center"}>
              <Grid container item spacing={1} xs={12} md={6}>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    Construction time:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.TICK}
                      value={16}
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    Each building costs:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.MINERAL}
                      value={1173}
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    Available land to develop:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.LAND}
                      value={25}
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    Sufficient minerals for:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.BUILDING}
                      value={23}
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item spacing={1} xs={12}>
                <Grid item xs={12}>
                  <Table data={tableData} />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
