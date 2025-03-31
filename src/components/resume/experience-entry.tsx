import React from "react";

interface ExperienceEntryProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  title,
  company,
  location,
  duration,
  description,
}) => {
  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{company}</span>
        <span>{location}</span>
      </div>
      <p className="text-sm text-gray-500">{duration}</p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceEntry;