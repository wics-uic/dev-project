export default function Footer() {
    return (
        <div className="p-10 gap-5 md:gap-10 min-h-screen bg-[#ECB0B9] text-white">

            <div id="main" className="gap-5 flex flex-col md:flex md:flex-row justify-between">
                <div id="left-container">
                    <p className="text-3xl md:text-6xl font-bold">WiCS: Wired</p>
                    <p className="max-w-100">
                        No experience required. We welcome all students who are passionate about building.
No experience required. We welcome all students who are passionate about building.
No experience required. We welcome all students who are passionate about building.
No experience required. 

                    </p>
                </div>
                            
                <div id="right-container">
                    <p className="text-3xl md:text-6xl font-bold">Connect</p>
                    <ul className="flex gap-3">
                        <a href="https://www.instagram.com/wicsatuic/" target="_blank"><img width="40px" src="instagram.svg"/></a>
                        <a href="https://www.linkedin.com/company/women-in-computer-science-uic/posts/?feedView=all" target="_blank"><img width="40px" src="linkedin.svg"/></a>
                        <a href="https://github.com/wics-uic" target="_blank"><img width="40px" src="github.svg"/></a>
                    </ul>
                </div>
            </div>

            <div className="bg-white w-full h-[0.5] mt-5 mb-5"/>

            <div id="bottom" className="flex justify-between"> 
                <p>2026 WiCS Technical Project</p>

                <p className="hidden md:block">2026 WiCS Technical Project</p>
            </div>
            
        </div>
    )
}