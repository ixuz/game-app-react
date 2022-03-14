import React from "react";
import Resource, { IResource, ResourceType } from "../Resource/Resource";

interface Props {
  header: IResource;
  resources: IResource[];
}

const SummaryCard: React.FC<Props> = ({ header, resources }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Resource
          resourceType={header.resourceType}
          length={header.length}
          value={header.value}
        />
      </div>
      {resources.map((resource) => {
        return (
          <Resource
            resourceType={resource.resourceType}
            value={resource.value}
          />
        );
      })}
    </div>
  );
};

export default SummaryCard;
