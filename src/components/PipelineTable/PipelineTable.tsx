import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface Pipeline {
  name: string;
  output: number[];
}

interface Props {
  pipelines: Pipeline[];
}

const PipelineTable: React.FC<Props> = ({ pipelines }) => {
  const ticks = 24;

  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
              <TableCell>
                <div style={{ textAlign: "center" }}>
                  <strong>Name</strong>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ textAlign: "center" }}>
                  <strong>Amount</strong>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ textAlign: "center" }}>
                  <strong>Percent</strong>
                </div>
              </TableCell>
              <TableCell colSpan={ticks}>
                <div style={{ textAlign: "center" }}>
                  <strong>Pipeline output over next {ticks} ticks</strong>
                </div>
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
              <TableCell>
                <div style={{ textAlign: "center" }}></div>
              </TableCell>
              <TableCell>
                <div style={{ textAlign: "center" }}></div>
              </TableCell>
              <TableCell>
                <div style={{ textAlign: "center" }}></div>
              </TableCell>
              {[...Array(ticks)].map((none, index) => (
                <TableCell>
                  <div style={{ textAlign: "center" }}>
                    <strong>{index + 1}</strong>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pipelines.map((pipeline) => (
              <TableRow
                key={pipeline.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pipeline.name}
                </TableCell>
                <TableCell align="center">100</TableCell>
                <TableCell align="center">100%</TableCell>
                {pipeline.output.map((out) => (
                  <TableCell align="center">{out}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PipelineTable;
