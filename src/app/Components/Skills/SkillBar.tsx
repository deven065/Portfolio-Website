import React from "react";

type SkillBarProps = {
    name: string;
    percentage: number;
    barColor?: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, barColor = "bg-blue-500" }) => {
    return (
        <div className="mb-2">
            <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{name}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full">
                <div 
                    className={`h-1.5 rounded-full ${barColor}`}
                    style={{ width: `${percentage}%` }} 
                />
            </div>
        </div>
    )
}

export default SkillBar;