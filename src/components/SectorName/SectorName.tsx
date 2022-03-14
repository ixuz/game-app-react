interface Props {
  title: string;
  galaxy: number;
  sector: number;
}

const SectorName: React.FC<Props> = ({ title, galaxy, sector }) => {
  return <strong>{`${title} (${galaxy}:${sector})`}</strong>;
};

export default SectorName;
