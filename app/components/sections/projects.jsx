import FolderTab from "./folderTab"

export default function Projects() {
    return (
        <div id="projects" className="gap-10 min-h-screen w-full bg-[#B0C4B2] flex flex-col justify-center items-center">
            <div id="folder-container" className="flex flex-col justify-center items-center">
                <div>
                    <ul className="flex flex-row min-w-full w-100 md:w-170 ">
                        <li><FolderTab link="..." active="true"/></li>
                        <li><FolderTab link="course bits" active="false"/></li>
                        <li><FolderTab link="wics" active="false"/></li>
                        <li><FolderTab link="sweet t" active="false"/></li>
                    </ul>
                </div>
                <div id="folder" className="bg-[#FFE9AD] rounded-b-4xl rounded-tr-4xl flex w-100 h-70 md:w-170 md:h-100 text-center justify-center items-center shadow-xl">
                    <div className="">
                        <h1 className="text-4xl md:text-5xl font-bold">PROJECTS</h1>
                    <h1 className="text-3xl">✏️</h1>
                    <h1 className="text-2xl">build beyond yesterday</h1>
                    </div>
                    
                </div>
                 
            </div>

            <div>
                <a className="bg-white p-3 shadow-xl cursor-pointer">view project gallery</a>
            </div>

        </div>
    )
}