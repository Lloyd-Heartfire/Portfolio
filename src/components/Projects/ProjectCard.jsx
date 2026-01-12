import React, {useState} from "react";
import {Code, Palette, ExternalLink, ChevronDown, ChevronUp} from "lucide-react";

const ProjectCard = ({project, isDesign}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-2 border-cyan-500 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/50 group">
            {/* Image */}
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b-2 border-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-all"></div>
                {isDesign ? (
                    <Palette className="w-16 h-16 text-cyan-500/30 group-hover:text-cyan-500/50 transition-all" />
                ) : (
                    <Code className="w-16 h-16 text-cyan-500/30 group-hover:text-cyan-500/50 transition-all" />
                )}
                <div className="absolute bottom-2 right-2 text-xs font-mono text-cyan-500/50">IMAGE</div>
            </div>

            <div className="p-6">
                <div 
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-mono text-cyan-300 font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-cyan-500 font-mono">
                                {isDesign ? project.type : project.tech}
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                            {isOpen ? (
                                <ChevronUp className="w-5 h-5 text-cyan-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-cyan-400" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Collapsible content */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-4 border-t border-cyan-500/30">
                        {project.description && (
                            <p className="text-cyan-400/80 text-sm mb-4">{project.description}</p>
                        )}

                        {project.details && (
                            <div className="space-y-2">
                                <h4 className="text-cyan-300 font-mono text-sm font-bold mb-2"> Détails :</h4>
                                <ul className="text-cyan-400/80 text-sm space-y-1 list-disc list-inside">
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies && (
                            <div className="mt-4">
                                <h4 className="text-cyan-300 font-mono text-sm font-bold mb-2">Technologies :</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.results && (
                            <div className="mt-4">
                                <h4 className="text-cyan-300 font-mono text-sm font-bold mb-2">Résultats :</h4>
                                <ul className="text-cyan-400/80 text-sm space-y-1 list-disc list-inside">
                                    {project.results.map((result, i) => (
                                        <li key={i}>{result}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;