import { ResourceType } from "../../components/Resource/Resource";

export interface Research {
  name: string;
  resourceType: ResourceType;
  points: number;
  assigned: number;
}

export class ResearchBuilder {
  private data: Research = {
    name: "",
    resourceType: ResourceType.UNKNOWN,
    points: 0,
    assigned: 0,
  };

  constructor(name: string, points: number) {
    this.data.name = name;
    this.data.points = points;
  }

  public resourceType = (resourceType: ResourceType) => {
    this.data.resourceType = resourceType;
    return this;
  };

  public points = (points: number) => {
    this.data.points = points;
    return this;
  };

  public assigned = (assigned: number) => {
    this.data.assigned = assigned;
    return this;
  };

  public build = () => {
    return this.data;
  };
}
