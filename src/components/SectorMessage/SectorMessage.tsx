interface Props {
  message: string;
}

const SectorMessage: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default SectorMessage;
