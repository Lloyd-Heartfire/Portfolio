import React, {useState} from "react";
import {Mail, Github, Linkedin, MapPin, Phone, CheckCircle, AlertCircle} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({type:"", message:""});

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    message: formData.message,
                    to_email: "beaudonloic@hotmail.com"
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                type: "success",
                message: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais."
            });

            // Réinitialisation du formulaire
            setFormData({
                from_name: "",
                from_email: "",
                message: "",
            });
        } catch (error) {
            console.error("Erreur lors de l\'envoi:", error);
            setStatus({
                type:"error",
                message: "Erreur lors de l\'envoi du message. Veuillez réessayer dans quelques instants. Si le problème persiste, contactez moi directement par mail."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <section id="contact" className="relative py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 font-mono text-cyan-300" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.5)'}}>
                    &#91; CONTACTEZ-MOI &#93;
                </h2>

                <p className="text-cyan-400 mb-12 text-lg font-mono">
                    Je suis actuellement à la recherche d'un emploi afin de pouvoir approfondir et parfaire mes compétences, et également pouvoir apprendre de nouvelles choses. Si vous êtes intéressé, n'hésitez surtout pas à me contacter !
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Stats message */}
                    {status.message && (
                        <div className={`p-4 border-2 flex items-center gap-3 ${
                            status.type === "success"
                            ? "bg-green-500/10 border-green-500 text-green-400"
                            : "bg-red-500/10 border-red-500 text-red-400"
                        }`}>
                            {status.type === "success" ? (
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            )}
                            <p className="font-mono text-sm">{status.message}</p>
                        </div>
                    )}
                </form>

                <form className="space-y-6">

                    {/* Name and Email row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Votre nom *"
                            className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan 500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all font-mono backdrop-blur-sm"
                            required 
                        />
                        <input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            placeholder="Email *"
                            className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan 500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all font-mono backdrop-blur-sm"
                            required 
                        />
                    </div>

                    {/* Message textarea */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        rows="8"
                        className="w-full px-6 py-4 bg-gray-900/50 text-cyan-400 placeholder-cyan-600 border-2 border-cyan-500 focus:border-cyan-300 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all resize-none font-mono backdrop-blur-sm"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-10 py-4 bg-cyan-500 text-gray-900 font-bold font-mono text-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 flex items-center gap-3 border-2 border-cyan-500 hover:scale-105 ${
                                isLoading 
                                ? "opacity-50 cursor-not-allowed" 
                                : ""
                            }`}
                        >
                            {isLoading ? "ENVOI EN COURS..." : "ENVOYER"}
                            {!isLoading && <span className="text-xl">▶</span>}
                        </button>
                    </div>
                </form>

                {/* Contact info and links */}
                <div className="mt-12 pt-8 border-t-2 border-cyan-500/30">
                    <div className="flex flex-wrap justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-6 text-sm font-mono text-cyan-400">
                            <div className="flex items-center gap-2 border border-cyan-500/30 px-33 py-2 bg-gray-900/30">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+33626660607">06.26.66.06.07</a>
                            </div>
                            <div className="flex items-center gap-2 border border-cyan-500/30 px-3 py-2 bg-gray-900/30">
                                <Mail className="w-4 h-4">
                                    <a href="mailto:beaudonloic@hotmail.com">beaudonloic@hotmail.com</a>
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