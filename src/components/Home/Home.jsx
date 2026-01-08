import React from "react";
import {Code, Palette, Mail, Github, MapPin, Phone} from "lucide-react";

const Home = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
            <div className="text-center z-10 max-w-4xl">
                <div className="mb-8 relative inline-block">
                    <div className="absolute -inset-4 bg-cyan-500 blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative w-32 h-32 mx-auto mb-6 border-4 border-cyan-500 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/50">
                        <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                            <Code className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </div>

                <h1 className="text-6xl font-bold mb-4 tracking-wider text-cyan-300" style={{ fontFamily: "monospace", textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>
                    LOÏC BEAUDON
                </h1>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <Code className="w-6 h-6 animate-pulse" />
                    <p className="text-2xl font-mono text-cyan-400">DÉVELOPPEUR FULL STACK</p>
                    <span className="text-cyan-500 text-2xl animate-pulse">|</span>
                    <p className="text-2xl font-mono text-cyan-400">DESIGNER UI/UX</p>
                    <Palette className="w-6 h-6 animate-pulse" />
                </div>

                <p className="text-lg font-mono text-cyan-400 mb-6">Spécialité Machine Learning</p>

                <div className="inline-block px-6 py-3 border-2 border-cyan-500 bg-cyan-500/10 backdrop-blur-sm animate-pulse mb-6">
                    <p className="text-lg font-mono text-cyan-300">
                        &#60; EN RECHERCHE D'EMPLOI /&#62;
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm font-mono mb-8">
                    <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/50">
                        <MapPin className="w-4 h-4" />
                        <span>Blagny, FRANCE</span>
                    </div>
                    <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/50">
                        <Phone className="w-4 h-4" />
                        <span>06.26.66.06.07</span>
                    </div>
                    <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/50">
                        <Mail className="w-4 h-4" /> 
                        <span>beaudonloic@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/50">
                        <div className="w-4 h-4" /> 
                        <span>En cours de construction</span>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://github.com/Lloyd-Heartfire" target="_blank" rel="noopener noreferrer" className="p-3 border border-cyan-500 hover:bg-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/50">
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500"></div>
        </section>
    );
};

export default Home;