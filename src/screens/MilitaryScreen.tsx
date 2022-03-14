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
import { MilitaryBuilder } from "../lib/Military/Military";
import { Unit, UnitBuilder } from "../lib/Unit/Unit";
import {
  PipelineBuilder,
  PipelineItem,
  PipelineItemBuilder,
} from "../lib/Pipeline/Pipeline";

export default function MilitaryScreen() {
  const sumOfUnitPipeline = (unit: Unit) => {
    return unit.pipeline.items.reduce((acc, item: PipelineItem) => {
      return acc + item.amount;
    }, 0);
  };

  const military = new MilitaryBuilder("Military")
    .unit(
      new UnitBuilder("Soldiers", 483)
        .resourceType(ResourceType.SOLDIER)
        .pipeline(
          new PipelineBuilder("Soldiers", 24)
            .items(
              [...new Array(24)].map(() => {
                return new PipelineItemBuilder("Soldier", 4).build();
              })
            )
            .build()
        )
        .build()
    )
    .unit(
      new UnitBuilder("Troopers", 1457)
        .resourceType(ResourceType.TROOPER)
        .pipeline(
          new PipelineBuilder("Troopers", 24)
            .items(
              [...new Array(24)].map(() => {
                return new PipelineItemBuilder("Trooper", 2).build();
              })
            )
            .build()
        )
        .build()
    )
    .unit(
      new UnitBuilder("Laser Troopers", 3455)
        .resourceType(ResourceType.LASER_TROOPER)
        .pipeline(
          new PipelineBuilder("Laser Troopers", 24)
            .items(
              [...new Array(24)].map(() => {
                return new PipelineItemBuilder("Laser Trooper", 3).build();
              })
            )
            .build()
        )
        .build()
    )
    .unit(
      new UnitBuilder("Tanks", 123)
        .resourceType(ResourceType.TANK)
        .pipeline(
          new PipelineBuilder("Tanks", 24)
            .items(
              [...new Array(24)].map(() => {
                return new PipelineItemBuilder("Tank", 7).build();
              })
            )
            .build()
        )
        .build()
    )
    .unit(
      new UnitBuilder("Scientists", 375)
        .resourceType(ResourceType.SCIENTIST)
        .pipeline(
          new PipelineBuilder("Scientists", 24)
            .items(
              [...new Array(24)].map(() => {
                return new PipelineItemBuilder("Scientist", 0).build();
              })
            )
            .build()
        )
        .build()
    )
    .build();

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(
              new TableCellDataBuilder(uuidv4()).component("Unit Name").build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4()).component("You own").build()
            )
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component("In training")
                .build()
            )
            .cell(new TableCellDataBuilder(uuidv4()).component("Train").build())
            .build()
        )
        .build()
    )
    .sections(
      military.units.map((unit: Unit) => {
        return new TableSectionDataBuilder(uuidv4(), TableSectionDataType.BODY)
          .row(
            new TableRowDataBuilder(uuidv4())
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <Resource
                      resourceType={unit.resourceType}
                      length="medium"
                      value={unit.name}
                      sx={{ justifyContent: "center" }}
                    />
                  )
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(unit.quantity)
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(sumOfUnitPipeline(unit))
                  .build()
              )
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(
                    <TextField
                      size="small"
                      id="outlined-basic"
                      label="Units"
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
              Welcome back to the <strong>Military Room</strong>
            </div>
            <div>
              It will take 24 ticks to train your population into soldiers, and
              your soldiers into elite units.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Card sx={{ p: 1 }}>
            <Grid container spacing={1} justifyContent={"center"}>
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
