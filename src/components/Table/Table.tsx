import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import {
  TableCellData,
  TableCellDataType,
  TableData,
  TableRowData,
  TableSectionData,
  TableSectionDataType,
} from "../../lib/TableData/TableData";
import { SxProps } from "@mui/system";
import React from "react";

interface Props {
  data: TableData;
}

const Table: React.FC<Props> = ({ data }) => {
  const renderCell = (cellData: TableCellData) => {
    switch (cellData.type) {
      case TableCellDataType.HEAD: {
        const defaultStyle: SxProps<Theme> = {
          justifyContent: "center",
          textAlign: "center",
        };
        return (
          <TableCell
            key={cellData.uuid}
            sx={defaultStyle}
            colSpan={cellData.colSpan}
          >
            {cellData.component}
          </TableCell>
        );
      }
      case TableCellDataType.VALUE: {
        const defaultStyle: SxProps<Theme> = {
          justifyContent: "center",
          textAlign: "center",
        };
        return (
          <TableCell
            key={cellData.uuid}
            sx={defaultStyle}
            colSpan={cellData.colSpan}
          >
            {cellData.component}
          </TableCell>
        );
      }
    }
  };

  const renderRow = (rowData: TableRowData) => {
    return (
      <TableRow key={rowData.uuid}>{rowData.cells.map(renderCell)}</TableRow>
    );
  };

  const renderSection = (sectionData: TableSectionData) => {
    switch (sectionData.type) {
      case TableSectionDataType.HEAD:
        const defaultStyle: SxProps<Theme> = {
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        };
        return (
          <TableHead key={sectionData.uuid} sx={defaultStyle}>
            {sectionData.rows.map(renderRow)}
          </TableHead>
        );
      case TableSectionDataType.BODY:
        return (
          <TableBody key={sectionData.uuid}>
            {sectionData.rows.map(renderRow)}
          </TableBody>
        );
    }
  };

  const renderTable = (tableData: TableData) => {
    return (
      <MuiTable key={tableData.uuid}>
        {tableData.sections.map(renderSection)}
      </MuiTable>
    );
  };

  return renderTable(data);
};

export default Table;
