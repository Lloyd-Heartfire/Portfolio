import React, {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        {id: "home", label: "ACCUEIL"},
        {id: "timeline", label: "PARCOURS"},
        {id: "projects", label: "PROJETS"},
        {id: "skills", label: "COMPÉTENCES"},
        {id: "contact", label: "CONTACT"}
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavio: "smooth"});
            setIsOpen(false);
        }
    };

    // Active scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.lenght - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b-2 border-cyan-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("home")}
                        className="text-cyan-300 font-bold font-mono text-xl hover:text-cyan-400 transition-colors"
                    >
                        &#91; LB &#93;
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="{`px-4 py-2 font-mono text-sm transition-all ${
                                activeSection === item.id
                                ? 'bg-cyan-500 text-gray-900 font-bold'
                                : 'text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300'
                                }`}"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-4 py-3 font-mono text-sm transition-all ${
                                    activeSection === item.id
                                    ? 'bg-cyan-500 text-gray-900 font-bold'
                                    : 'text-cyan-400 hover:bg-cyan-500/20'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;