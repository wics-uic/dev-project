"use client"; 

import { useState } from "react";

export default function AboutImages() {
    const images = [
        "/about/about1.jpg", 
        "/about/about2.png",
        "/about/about3.jpg",
        "/about/about4.jpg",
        "/about/about5.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        // Added 'relative', 'overflow-hidden', and 'group' to your existing classes
        <div className="hidden lg:flex lg:mr-30 w-100 h-100 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.50)] z-30 justify-center items-center relative overflow-hidden group">
            
            <img 
                src={images[currentIndex]} 
                alt={`About photo ${currentIndex + 1}`}
                className="object-cover w-full h-full transition-opacity duration-300"
            />

            <button 
                onClick={prevImage}
                className="absolute left-3 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 cursor-pointer"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Right Arrow Button */}
            <button 
                onClick={nextImage}
                className="absolute right-3 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 cursor-pointer"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Navigation Dots (Optional) */}
            <div className="absolute bottom-4 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}