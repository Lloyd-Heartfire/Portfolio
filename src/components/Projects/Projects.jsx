import React, {useState} from "react";
import {Code, Palette} from "lucide-react";
import ProjectCard from "./ProjectCard";
import {devProjects, designProjects} from "../../data/projects";

const Projects = () => {
    const [activeTab, setActiveTab] = useState('dev');

    return (
        <section className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 font-mono text-cyan-300" style={{textShadow: "0 0 20px rgba(34, 211, 238, 0.5"}}>
                    &#91; MES PROJETS &#93;
                </h2>

                {/* Toggle Tabs */}
                <div className="flex justify-center mb-12 gap-4">
                    <button
                        onClick={() => setActiveTab("dev")}
                        className={`^x-8 py-4 font-mono text-lg border-2 transition-all ${
                            activeTab === "dev"
                            ? "bg-cyan-500 text-gray-900 border-cyan-500 shadow-lg shadow-cyan-500/50"
                            : "bg-transparent text-cyan-400 border-cyan-500 hover:bg-cyan-500/10"
                        }`}
                        >
                        <Code className="inline mr-2 w-5 h-5" />
                        DÉVELOPPEUR
                    </button>
                    <button
                        onClick={() => setActiveTab("design")}
                        className={`^x-8 py-4 font-mono text-lg border-2 transition-all ${
                            activeTab === "design"
                            ? "bg-cyan-500 text-gray-900 border-cyan-500 shadow-lg shadow-cyan-500/50"
                            : "bg-transparent text-cyan-400 border-cyan-500 hover:bg-cyan-500/10"
                        }`}
                        >
                        <Palette className="inline mr-2 w-5 h-5" />
                        DESIGNER
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {activeTab === "dev" ? (
                        devProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} isDesign={false} />
                        ))
                    ) : (
                        designProjects.map((project, i) => (
                            <ProjectCard key={i} project={project} isDesign={true} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;