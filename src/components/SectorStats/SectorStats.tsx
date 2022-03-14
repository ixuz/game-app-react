import Resource, { ResourceType } from "../Resource/Resource";

const SectorStats = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Total sector networth:&nbsp;
        <Resource resourceType={ResourceType.NETWORTH} value={226522} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Total sector land:&nbsp;
        <Resource resourceType={ResourceType.LAND} value={4274} />
      </div>
    </div>
  );
};

export default SectorStats;
