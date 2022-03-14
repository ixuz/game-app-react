import {
  TableCellDataBuilder,
  TableDataBuilder,
  TableRowDataBuilder,
  TableSectionDataBuilder,
  TableSectionDataType,
} from "../lib/TableData/TableData";
import { v4 as uuidv4 } from "uuid";
import { Pipeline } from "../lib/Pipeline/Pipeline";

const PipelinesToTableDataMapper = (pipelines: Pipeline[]) => {
  const longestPipelineLength = Math.max.apply(
    Math,
    pipelines.map((pipeline: Pipeline) => {
      return pipeline.length;
    })
  );

  const tableData = new TableDataBuilder(uuidv4())
    .section(
      new TableSectionDataBuilder(uuidv4(), TableSectionDataType.HEAD)
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(new TableCellDataBuilder(uuidv4()).component("Name").build())
            .cell(
              new TableCellDataBuilder(uuidv4())
                .component(
                  `Pipeline output over next ${longestPipelineLength} ticks`
                )
                .colSpan(longestPipelineLength)
                .build()
            )
            .build()
        )
        .row(
          new TableRowDataBuilder(uuidv4())
            .cell(new TableCellDataBuilder(uuidv4()).build())
            .cells(
              [...new Array(longestPipelineLength)].flatMap((none, index) => {
                return new TableCellDataBuilder(uuidv4())
                  .component(index + 1)
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
          pipelines.flatMap((pipeline) => {
            return new TableRowDataBuilder(uuidv4())
              .cell(
                new TableCellDataBuilder(uuidv4())
                  .component(pipeline.name)
                  .build()
              )
              .cells(
                pipelines[0].items.flatMap((item) => {
                  return new TableCellDataBuilder(uuidv4())
                    .component(item.amount)
                    .build();
                })
              )
              .build();
          })
        )
        .build()
    )
    .build();

  return tableData;
};

export default PipelinesToTableDataMapper;
