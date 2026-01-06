import React from "react";

const SkillCategory = ({icon: Icon, title, skills}) => {
    return(
        <div className="border-2 border-cyan-500 p-8 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <Icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-mono text-cyan-300">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <span 
                        key={i} 
                        className="px-4 py-2 border border-cyan-500 bg-cyan-500/10 font-mono text-sm hover:bg-cyan-500/20 transition-all hover:shadow-cyan-500/30">
                            {skill}
                    </span>
                    ))}
            </div>
        </div>
    );
};

export default SkillCategory;