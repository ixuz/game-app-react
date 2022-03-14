import { Card, Grid } from "@mui/material";
import Table from "../components/Table/Table";
import StatusButtonGroup from "../components/StatusButtonGroup/StatusButtonGroup";
import {
  Pipeline,
  PipelineBuilder,
  PipelineItemBuilder,
} from "../lib/Pipeline/Pipeline";
import PipelinesToTableDataMapper from "../util/PipelinesToTableDataMapper";

export default function ConstructionStatusScreen() {
  const pipelineLength = 24;

  const pipelines: Pipeline[] = [
    new PipelineBuilder("Residences", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Residence", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Power Plants", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Power Plant", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Star Mines", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Star Mine", 100).build();
        })
      )
      .build(),
    new PipelineBuilder("Probe Factories", pipelineLength)
      .items(
        [...new Array(pipelineLength)].map(() => {
          return new PipelineItemBuilder("Probe", 100).build();
        })
      )
      .build(),
  ];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} m={2}>
        <div style={{ textAlign: "center" }}>
          <div>
            Welcome back to the <strong>Construction Status Room</strong>
          </div>
          <div>
            Here you can inspect the amount buildings that will be constructed
            in the next <strong>24 ticks</strong>.
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
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
