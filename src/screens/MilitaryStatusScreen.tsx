import { Card, Grid } from "@mui/material";
import StatusButtonGroup from "../components/StatusButtonGroup/StatusButtonGroup";
import Table from "../components/Table/Table";
import {
  TableCellDataBuilder,
  TableCellDataType,
  TableDataBuilder,
  TableRowDataBuilder,
  TableSectionDataBuilder,
  TableSectionDataType,
} from "../lib/TableData/TableData";
import { v4 as uuidv4 } from "uuid";

export default function MilitaryStatusScreen() {
  const militaryData = {
    leaders: [
      {
        name: "Home Leader",
        ticks: 100,
        units: [
          {
            name: "Soldier",
            amount: 101,
          },
          {
            name: "Trooper",
            amount: 101,
          },
          {
            name: "Laser Trooper",
            amount: 102,
          },
        ],
      },
      {
        name: "Attack Leader #1",
        ticks: 0,
        units: [
          {
            name: "Soldier",
            amount: 200,
          },
          {
            name: "Trooper",
            amount: 201,
          },
          {
            name: "Laser Trooper",
            amount: 202,
          },
        ],
      },
      {
        name: "Attack Leader #2",
        ticks: 0,
        units: [
          {
            name: "Soldier",
            amount: 300,
          },
          {
            name: "Trooper",
            amount: 301,
          },
          {
            name: "Laser Trooper",
            amount: 302,
          },
        ],
      },
      {
        name: "Attack Leader #3",
        ticks: 0,
        units: [
          {
            name: "Soldier",
            amount: 400,
          },
          {
            name: "Trooper",
            amount: 401,
          },
          {
            name: "Laser Trooper",
            amount: 402,
          },
        ],
      },
      {
        name: "Attack Leader #4",
        ticks: 0,
        units: [
          {
            name: "Soldier",
            amount: 500,
          },
          {
            name: "Trooper",
            amount: 501,
          },
          {
            name: "Laser Trooper",
            amount: 502,
          },
        ],
      },
    ],
  };

  const leadersByUnitName: any = {};
  militaryData.leaders.forEach((leader) => {
    leader.units.forEach((unit) => {
      if (!leadersByUnitName[unit.name]) {
        leadersByUnitName[unit.name] = { leaders: [] };
      }
      leadersByUnitName[unit.name].leaders.push(leader);
    });
  });

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(new TableCellDataBuilder(uuidv4()).build())
            .cells(
              militaryData.leaders.map((leader) => {
                return new TableCellDataBuilder(uuidv4())
                  .component(<div>{leader.name}</div>)
                  .build();
              })
            )
            .build()
        )
        .build()
    )
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.BODY)
        .rows(
          Object.keys(leadersByUnitName).flatMap((unitName) => {
            return new TableRowDataBuilder(uuidv4())
              .cell({
                uuid: uuidv4(),
                type: TableCellDataType.VALUE,
                component: <div>{unitName}</div>,
              })
              .cells(
                leadersByUnitName[unitName].leaders.flatMap((leader: any) => {
                  return leader.units
                    .filter((unit: any) => unit.name === unitName)
                    .flatMap((unit: any) => {
                      return {
                        uuid: uuidv4(),
                        type: TableCellDataType.VALUE,
                        component: <div>{unit.amount}</div>,
                      };
                    });
                })
              )
              .build();
          })
        )
        .build()
    )
    .build();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} m={2}>
        <div style={{ textAlign: "center" }}>
          <div>
            Welcome back to the <strong>Military Status Room</strong>
          </div>
          <div>
            Here you can inspect a report on the status and return time of your
            army.
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 1 }}>
          <Grid item xs={12}>
            <Table data={tableData} />
          </Grid>
        </Card>
      </Grid>
      <StatusButtonGroup />
    </Grid>
  );
}
