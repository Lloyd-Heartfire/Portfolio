import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute bg-cyan-500 animate-pulse" 
                        style={{
                            width: Math.random() > 0.5 ? "2px" : "1px",
                            height: `${Math.random() * 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random()* 3}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Background;