import React from "react";
import {Briefcase} from "lucide-react";
import {experiences} from "../../data/experiences";

const Timeline = () => {
    return (
        <section className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 font-mono text-cyan-300" style={{ textShadow: "0 0 20px rgba(34,211, 238, 0.5"}}>
                    &#91; PARCOURS &#93;
                </h2>

                <div className="relative pl-8 md:pl-32">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-16 top-0 bottom-0 w-0.5 bg-cyan-500"></div>

                    {/* Timeline items */}
                    {experiences.map((item, i) => (
                        <div key={i} className="relative mb-12 pl-8 md:pl-12">
                            {/* Circle on timeline */}
                            <div className="absolute left-0 md:left-4 top-6 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>

                            {/* Date Badge */}
                            <div className="absolute left-16 md:left-24 top-6 transform -translate-y-1/2">
                                <div className="bg-gray-900 border-2 border-cyan-500 px-4 py-2 font-mono text-cyan-300 text-sm whitespace-nowrap">
                                    {item.period}
                                </div>
                            </div>

                            {/* Content card */}
                            <div className="ml-32 md:ml-48 mt-12 border-2 border-cyan-500 bg-gray-900/70 backdrop-blur-sm p-6 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                                <h4 className="text-lg font-mono text-cyan-300 font-bold mb-2">{item.title}</h4>
                                <p className="text-cyan-400 font-mono mb-3">{item.company}</p>
                                <p className="text-cyan-400/80 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Start point */}
                    <div className="relative pl-8 md:pl-12 pb-8">
                        <div className="absolute left-0 md:left-4 top-0 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-cyan-500/50 animate-pulse">
                            <div className="text-center">
                                <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                            </div>
                        </div>

                        <div className="ml-32 md:ml-48 border-2 border-cyan-500 bg-cyan-500/10 backdrop-blur-sm p-6">
                            <p className="text-cyan-300 font-mono text-center font-bold">
                                Début de mon parcours professionnel dans le numérique
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;