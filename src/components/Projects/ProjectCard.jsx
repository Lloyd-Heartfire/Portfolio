import React from "react";
import {Code, Palette, ExternalLink} from "lucide-react";

const ProjectCard = ({project, isDesign}) => {
    return (
        <div className="border-2 border-cyan-500 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/50 group">
            {/* Image */}
            <div className="w-full h-48 from-gray-800 border-b-2 border-cyan-500 relative overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="absolute inset-0 bg-cyan-500/5  group-hover:bg-cyan-500/10 transition-all"></div>
                        {isDesign ? (
                            <Palette className="w-16 h-16 text-cyan-500/30 group-hover:text-cyan-500/50 transition-all" />
                        ) : (
                            <Code className="w-16 h-16 text-cyan-500/30 group-hover:text-cyan-500/50 transition-all" />
                        )}
                        <div className="absolute bottom-2 right-2 text-xs font-mono text-cyan-500/50">IMAGE</div>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-mono text-cyan-300 font-bold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-cyan-500 mb-3 font-mono">
                    {isDesign ? project.type : project.tech}
                </p>
                <p className="text-cyan-400/80 text-sm">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;