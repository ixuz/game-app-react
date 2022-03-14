import { BuildingBuilder } from "../lib/Building/Buildings";
import { Kingdom, KingdomBuilder } from "../lib/Kingdom/Kingdom";
import { PipelineBuilder, PipelineItemBuilder } from "../lib/Pipeline/Pipeline";

const MockedKingdoms: Kingdom[] = [
  new KingdomBuilder(
    "Modest Morey",
    558,
    29574,
    "Mountainous",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
  new KingdomBuilder(
    "Frantic Fred",
    485,
    25785,
    "Volcanic Inferno",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
  new KingdomBuilder(
    "Wicked William",
    365,
    19345,
    "Terraform",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
  new KingdomBuilder(
    "Pleasant Phil",
    897,
    47541,
    "Oceanic",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
  new KingdomBuilder(
    "Naughty Nicholas",
    787,
    41711,
    "Desert Wasteland",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
  new KingdomBuilder(
    "Angry Andy",
    1182,
    72646,
    "Desert Wasteland",
    10000,
    100000,
    7500
  )
    .buildings([
      new BuildingBuilder("Residences", 353)
        .pipeline(
          new PipelineBuilder("Residences", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Residence", 1).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Power Plants", 214)
        .pipeline(
          new PipelineBuilder("Power Plants", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Power Plant", 2).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Star Mines", 214)
        .pipeline(
          new PipelineBuilder("Star Mines", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Star Mine", 3).build()
              )
            )
            .build()
        )
        .build(),
      new BuildingBuilder("Probe Factories", 214)
        .pipeline(
          new PipelineBuilder("Probe Factories", 24)
            .items(
              [...new Array(24)].map(() =>
                new PipelineItemBuilder("Probe Factory", 4).build()
              )
            )
            .build()
        )
        .build(),
    ])
    .build(),
];

export default MockedKingdoms;
