import { ResourceType } from "../../components/Resource/Resource";
import { Pipeline, PipelineBuilder } from "../Pipeline/Pipeline";

export interface Building {
  name: string;
  resourceType: ResourceType;
  quantity: number;
  pipeline: Pipeline;
}

export class BuildingBuilder {
  private data: Building = {
    name: "",
    resourceType: ResourceType.UNKNOWN,
    quantity: 0,
    pipeline: new PipelineBuilder("unknown", 0).build(),
  };

  constructor(name: string, quantity: number) {
    this.data.name = name;
    this.data.quantity = quantity;
  }

  public resourceType = (resourceType: ResourceType) => {
    this.data.resourceType = resourceType;
    return this;
  };

  public pipeline = (pipeline: Pipeline) => {
    this.data.pipeline = pipeline;
    return this;
  };

  public build = () => {
    return this.data;
  };
}
