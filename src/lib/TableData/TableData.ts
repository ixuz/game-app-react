import React from "react";

export enum TableCellDataType {
  HEAD,
  VALUE,
}

export interface TableCellData {
  uuid: string;
  type: TableCellDataType;
  component: React.ReactNode;
  colSpan?: number;
}

export interface TableRowData {
  uuid: string;
  cells: TableCellData[];
}

export enum TableSectionDataType {
  HEAD,
  BODY,
}

export interface TableSectionData {
  uuid: string;
  type: TableSectionDataType;
  rows: TableRowData[];
}

export interface TableData {
  uuid: string;
  sections: TableSectionData[];
}

export class TableCellDataBuilder {
  private data: TableCellData = {
    uuid: "",
    type: TableCellDataType.VALUE,
    component: undefined,
  };

  constructor(uuid: string) {
    this.data.uuid = uuid;
  }

  public type = (type: TableCellDataType) => {
    this.data.type = type;
    return this;
  };

  public component = (component: React.ReactNode) => {
    this.data.component = component;
    return this;
  };

  public colSpan = (colSpan: number) => {
    this.data.colSpan = colSpan;
    return this;
  };

  public build = () => {
    return this.data;
  };
}

export class TableRowDataBuilder {
  private data: TableRowData = { uuid: "", cells: [] };

  constructor(uuid: string) {
    this.data.uuid = uuid;
  }

  public cells = (cells: TableCellData[]) => {
    this.data.cells = [...this.data.cells, ...cells];
    return this;
  };

  public cell = (cell: TableCellData) => this.cells([cell]);

  public build = () => {
    return this.data;
  };
}

export class TableSectionDataBuilder {
  private data: TableSectionData = {
    uuid: "",
    type: TableSectionDataType.BODY,
    rows: [],
  };

  constructor(uuid: string, type: TableSectionDataType) {
    this.data.uuid = uuid;
    this.data.type = type;
  }

  public rows = (rows: TableRowData[]) => {
    this.data.rows = [...this.data.rows, ...rows];
    return this;
  };

  public row = (row: TableRowData) => this.rows([row]);

  public build = () => {
    return this.data;
  };
}

export class TableDataBuilder {
  private data: TableData = { uuid: "", sections: [] };

  constructor(uuid: string) {
    this.data.uuid = uuid;
  }

  public sections = (sections: TableSectionData[]) => {
    this.data.sections = [...this.data.sections, ...sections];
    return this;
  };

  public section = (section: TableSectionData) => this.sections([section]);

  public build = () => {
    return this.data;
  };
}
