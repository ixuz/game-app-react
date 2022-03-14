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
import { Research } from "../lib/Research/Research";

export default function ResearchScreen() {
  const researchArray: Research[] = [
    {
      name: "Population Bonus",
      resourceType: ResourceType.RESEARCH_POPULATION_BONUS,
      points: 1500,
      assigned: 300,
    },
    {
      name: "Power Bonus",
      resourceType: ResourceType.RESEARCH_POWER_BONUS,
      points: 1100,
      assigned: 50,
    },
    {
      name: "Military Bonus",
      resourceType: ResourceType.RESEARCH_MILITARY_BONUS,
      points: 3450,
      assigned: 210,
    },
    {
      name: "Mineral Bonus",
      resourceType: ResourceType.RESEARCH_MINERAL_BONUS,
      points: 4200,
      assigned: 510,
    },
  ];

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("Research Name")
                .build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("Sci. assigned")
                .build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4()).component("Points").build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4()).component("Assign").build()
            )
            .build()
        )
        .build()
    )
    .sections(
      researchArray.map((research: Research) => {
        return new TableSectionDataBuilder(uuidv4(), TableSectionDataType.BODY)
          .row(
            new TableRowDataBuilder(uuidv4())
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={research.resourceType}
                      length="medium"
                      value={research.name}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(research.assigned)
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(research.points)
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Scientists"
                      variant="outlined"
                      sx={{ width: 120 }}
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
              Welcome back to the <strong>Research Room</strong>
            </div>
            <div>
              Here you can send scientists to develop and discover new
              technology
            </div>
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
                    Total scientists:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.SCIENTIST}
                      value={400}
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
                    Available scientists:
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Resource
                      resourceType={ResourceType.SCIENTIST}
                      value={0}
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
