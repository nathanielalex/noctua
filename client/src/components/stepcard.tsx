interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A8D0E6] text-white font-bold text-xl">
        {number}
      </div>
      <h3 className="text-xl font-bold text-[#333333]">{title}</h3>
      <p className="text-[#333333] text-center">{description}</p>
    </div>
  );
};

export default StepCard;
