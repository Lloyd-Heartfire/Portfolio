import React from "react";
import {Mail, Github, Linkedin, MapPin, Phone} from "lucide-react";

const Contact = () => {
    return(
        <section id="contact" className="relative py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 font-mono text-cyan-300" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.5)'}}>
                    &#91; CONTACTEZ-MOI &#93;
                </h2>

                <p className="text-cyan-400 mb-12 text-lg font-mono">
                    Je suis actuellement à la recherche d'un emploi afin de pouvoir approfondir et parfaire mes compétences, et également pouvoir apprendre de nouvelles choses. Si vous êtes intéressé, n'hésitez surtout pas à me contacter !
                </p>

                <form className="space-y-6">
                    {/* Name and Email or Phone row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Votre nom *"
                            className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan 500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all font-mono backdrop-blur-sm"
                            required 
                        />
                        <input
                            type="text"
                            placeholder="Email ou N° de téléphone *"
                            className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan 500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all font-mono backdrop-blur-sm"
                            required 
                        />
                    </div>

                    {/* Message textarea */}
                    <textarea
                        placeholder="Message *"
                        rows="8"
                        className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan-500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all resize-none font-mono backdrop-blur-sm"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-10 py-4 bg-cyan-500 text-gray-900 font-bold font-mono text-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 flex items-center gap-3 border-2 border-cyan-500 hover:scale-105"
                        >
                            ENVOYER
                            <span className="text-xl">▶</span>
                        </button>
                    </div>
                </form>

                {/* Contact info and links */}
                <div className="mt-12 pt-8 border-t-2 border-cyan-500/30">
                    <div className="flex flex-wrap justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-6 text-sm font-mono text-cyan-400">
                            <div className="flex items-center gap-2 border border-cyan-500/30 px-33 py-2 bg-gray-900/30">
                                <Phone className="w-4 h-4" />
                                <span>06.26.66.06.07</span>
                            </div>
                            <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/30">
                                <Mail className="w-4 h-4">
                                    <span>beaudonloic@hotmail.com</span>
                                </Mail>
                            </div>
                            <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/30">
                                <MapPin className="w-4 h-4">
                                    <span>Blagny, FRANCE</span>
                                </MapPin>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/Lloyd-Heartfire" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-cyan-500 hover:bg-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/50">
                                <Github className="w-5 h-5 text-cyan-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;