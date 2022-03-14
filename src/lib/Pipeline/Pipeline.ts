export interface PipelineItem {
  name: string;
  amount: number;
}

export interface Pipeline {
  name: string;
  length: number;
  items: PipelineItem[];
}

export class PipelineItemBuilder {
  private data: PipelineItem = { name: "", amount: 0 };

  constructor(name: string, amount: number) {
    this.data.name = name;
    this.data.amount = amount;
  }

  public build = () => {
    return this.data;
  };
}

export class PipelineBuilder {
  private data: Pipeline = { name: "", length: 0, items: [] };

  constructor(name: string, length: number) {
    this.data.name = name;
    this.data.length = length;
  }

  public items = (items: PipelineItem[]) => {
    this.data.items = [...this.data.items, ...items];
    return this;
  };

  public item = (item: PipelineItem) => this.items([item]);

  public build = () => {
    return this.data;
  };
}
