import { Card, Grid } from "@mui/material";
import StatusButtonGroup from "../components/StatusButtonGroup/StatusButtonGroup";
import Table from "../components/Table/Table";
import {
  Pipeline,
  PipelineBuilder,
  PipelineItemBuilder,
} from "../lib/Pipeline/Pipeline";
import PipelinesToTableDataMapper from "../util/PipelinesToTableDataMapper";

export default function MobilizationStatusScreen() {
  const pipelineLength = 24;

  const pipelines: Pipeline[] = [
    new PipelineBuilder("Soldiers", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Soldier", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Troopers", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Trooper", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Laser Troopers", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Laser Trooper", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Tanks", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Tank", 100).build();
        })
      )
      .build(),
  ];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} m={2}>
        <div style={{ textAlign: "center" }}>
          <div>
            Welcome back to the <strong>Mobilization Status Room</strong>
          </div>
          <div>
            Here you can inspect the amount military that will be mobilized in
            the next <strong>24 ticks</strong>.
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ p: 1 }}>
          <Grid item xs={12}>
            <Table data={PipelinesToTableDataMapper(pipelines)} />
          </Grid>
        </Card>
      </Grid>
      <StatusButtonGroup />
    </Grid>
  );
}
