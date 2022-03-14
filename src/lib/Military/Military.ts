import { ResourceType } from "../../components/Resource/Resource";
import { Unit } from "../Unit/Unit";

export interface Military {
  name: string;
  resourceType: ResourceType;
  units: Unit[];
}

export class MilitaryBuilder {
  private data: Military = {
    name: "",
    resourceType: ResourceType.SOLDIER,
    units: [],
  };

  constructor(name: string) {
    this.data.name = name;
  }

  public resourceType = (resourceType: ResourceType) => {
    this.data.resourceType = resourceType;
    return this;
  };

  public units = (units: Unit[]) => {
    this.data.units = [...this.data.units, ...units];
    return this;
  };

  public unit = (unit: Unit) => this.units([unit]);

  public build = () => {
    return this.data;
  };
}
