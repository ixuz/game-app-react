import sectorHeader from "../../images/sector-header.jpg";

const SectorBanner = () => {
  return (
    <img
      alt="Sector banner"
      src={sectorHeader}
      style={{
        width: "100%",
        maxWidth: 500,
        maxHeight: 100,
      }}
    />
  );
};

export default SectorBanner;
