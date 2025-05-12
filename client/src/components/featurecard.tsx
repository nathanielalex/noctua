interface FeatureCardProps {
  icon: React.ReactNode; // Allows any valid React element for the icon
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow">
      <div className="p-2 bg-[#F0F0F0] rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-[#333333]">{title}</h3>
      <p className="text-[#333333] text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
