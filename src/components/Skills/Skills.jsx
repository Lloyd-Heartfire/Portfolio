import React from "react";
import {Code, Palette} from "lucide-react";
import SkillCategory from "./SkillCategory";
import {devSkills, mlSkills, designSkills, toolsSkills} from "../../data/skills";

const Skills = () => {
    return (
        <section className="relative py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 font-mono text-cyan-300" style={{textShadow:"0 0 20px rgba(34, 211, 238, 0.5"}}>
                    &#91; COMPÉTENCES &#93;
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <SkillCategory icon={Code} title="FRONTEND & BACKEND" skills={devSkills} />
                    <SkillCategory icon={Code} title="IA & DATA SCIENCE" skills={mlSkills} />
                    <SkillCategory icon={Palette} title="DESIGN UI/UX" skills={designSkills} />
                    <SkillCategory icon={Code} title="OUTILS" skills={toolsSkills} />
                </div>

                {/* Languages */}
                <div className="mt-8 border-2 border-cyan-500 p-8 bg-gray-900/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-mono text-cyan-300 mb-6 text-center">LANGUES</h3>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="px-6 py-3 border-2 border-cyan-500 bg-cyan-500/10">
                            <span className="font-mono text-cyan-300">Anglais - <span className="text-cyan-500 font-bold">B2</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;