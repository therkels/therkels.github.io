import React from "react";

interface SkillCardProps {
  technology: string;
  icon: string; // Path to the icon or image
  comfortLevel: "low" | "medium" | "high"; // Comfort level
}

const comfortColors = {
  low: "bg-red-500",
  medium: "bg-yellow-500",
  high: "bg-green-500",
};

const SkillCard: React.FC<SkillCardProps> = ({ technology, icon, comfortLevel }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-gray-800 text-white">
      {/* Icon */}
      <img
        src={icon}
        alt={`${technology} icon`}
        className="w-12 h-12 mr-4 rounded-full border border-gray-600"
      />
      {/* Technology Name */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{technology}</h3>
      </div>
      {/* Comfort Level Indicator */}
      <div
        className={`w-4 h-4 rounded-full ${comfortColors[comfortLevel]}`}
        title={`Comfort Level: ${comfortLevel}`}
      ></div>
    </div>
  );
};

export default SkillCard;