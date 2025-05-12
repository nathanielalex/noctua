interface StatItemProps {
  value: string | number;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, description }) => {
  return (
    <li className="flex flex-col">
      <span className="text-xl font-bold text-[#FF6F00]">{value}</span>
      <span className="text-sm text-[#333333]">{description}</span>
    </li>
  );
};

export default StatItem;
