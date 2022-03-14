import { ResourceType } from "../../components/Resource/Resource";
import { Building } from "../Building/Buildings";
import { Military, MilitaryBuilder } from "../Military/Military";
import { Pipeline } from "../Pipeline/Pipeline";
import { Unit } from "../Unit/Unit";

export interface Kingdom {
  name: string;
  resourceType: ResourceType;
  land: number;
  networth: number;
  planetType: string;
  power: number;
  minerals: number;
  population: number;
  military: Military;
  buildings: Building[];
}

export class KingdomBuilder {
  private data: Kingdom = {
    name: "",
    resourceType: ResourceType.SOLDIER,
    land: 0,
    networth: 0,
    planetType: "unknown",
    power: 0,
    minerals: 0,
    population: 0,
    military: new MilitaryBuilder("Military").build(),
    buildings: [],
  };

  constructor(
    name: string,
    land: number,
    networth: number,
    planetType: string,
    power: number,
    minerals: number,
    population: number
  ) {
    this.data.name = name;
    this.data.land = land;
    this.data.networth = networth;
    this.data.planetType = planetType;
    this.data.power = power;
    this.data.minerals = minerals;
    this.data.population = population;
  }

  public resourceType = (resourceType: ResourceType) => {
    this.data.resourceType = resourceType;
    return this;
  };

  public military = (military: Military) => {
    this.data.military = military;
    return this;
  };

  public buildings = (buildings: Building[]) => {
    this.data.buildings = [...this.data.buildings, ...buildings];
    return this;
  };

  public building = (building: Building) => this.buildings([building]);

  public build = () => {
    return this.data;
  };
}
