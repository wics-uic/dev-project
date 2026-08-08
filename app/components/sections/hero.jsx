export default function Hero() {
    return (
        // <div className="text-white flex flex-col justify-center items-center min-h-screen w-full bg-linear-to-t from-[#F4919B] to-[#F8E0D8]">
        <div className="text-white flex flex-col justify-center items-center min-h-screen w-full bg-[url(/projectPhotos/background/hero.png)] bg-cover">
            <div className="header-container">
                <div className="gap-3 mb-5 flex justify-between items-center header-top">
                    <p className="font-pixel text-3xl md:text-5xl">WiCS: WIRED</p>
                    <a className="border border-amber-50 rounded-4xl p-3">A STUDENT INITIATIVE</a>
                </div>
            <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl">DEV PROJECT</h1>
            <div id="hero-nav" className="header-bottom">
                <ul className="font-bold text-2xl flex flex-col gap-5 md:gap-20 md:flex-row mt-10">
                    <li><a href="#about" className="hover:underline">ABOUT</a></li>
                    <li><a href="#projects" className="hover:underline">PROJECTS</a></li>
                    <li><a href="#apply" className="hover:underline">APPLY</a></li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}