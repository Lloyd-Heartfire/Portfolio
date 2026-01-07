import React from "react";
import {Briefcase} from "lucide-react";
import {experiences} from "../../data/experiences";

const Timeline = () => {
  return (
    <section className="relative py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-mono text-cyan-300" style={{ textShadow: "0 0 20px rgba(34,211, 238, 0.5)"}}>
          &#91; PARCOURS &#93;
        </h2>

        <div className="relative pl-16 md:pl-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-10 top-0 w-0.5 bg-cyan-500" style={{ bottom: "80px"}}></div>

          {/* Timeline items */}
          {experiences.map((item, i) => (
            <div key={i} className="relative mb-12">
              {/* Circle on timeline */}
              <div className="absolute -left-14 md:-left-16 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10">
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              {/* Date Badge */}
              <div className="mb-4">
                <div className="inline-block bg-gray-900 border-2 border-cyan-500 px-4 py-2 font-mono text-cyan-300 text-sm">
                  {item.period}
                </div>
              </div>

              {/* Content card */}
              <div className="border-2 border-cyan-500 bg-gray-900/70 backdrop-blur-sm p-6 hover:bg-cyan-500/10 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                <h4 className="text-lg font-mono text-cyan-300 font-bold mb-2">{item.title}</h4>
                <p className="text-cyan-400 font-mono mb-3">{item.company}</p>
                <p className="text-cyan-400/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Start point */}
          <div className="relative pb-8">
            <div className="absolute -left-16 md:-left-[4.5rem] top-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse z-10">
              <div className="w-8 h-8 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="pt-4 border-2 border-cyan-500 bg-cyan-500/10 backdrop-blur-sm p-6">
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