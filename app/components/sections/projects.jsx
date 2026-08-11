"use client"

import FolderTab from "./folderTab"
import Link from "next/link"

import { useState } from "react"

export default function Projects() {
     const [activeTab, setActiveTab] = useState("...")

    //  const tabs = ["...","course bits","wics","sweet t"]

    const tabs = ["..."]
    const handleClick = (e) => {
        console.log(e.target);
        setActiveTab(e.target);
        // for each tab, set the active status to 0
    }


    return (
        <div id="projects" className="gap-10 min-h-screen w-full bg-[url(/background/projects.png)] bg-cover flex flex-col justify-center items-center">
            <div id="folder-container" className="flex flex-col justify-center items-center">
                <div>
                    <ul className="flex flex-row min-w-full w-100 md:w-170 ">
                        {/* <li><FolderTab link="..." active="true"/></li>
                        <li><FolderTab link="course bits" active="false"/></li>
                        <li><FolderTab link="wics" active="false"/></li>
                        <li><FolderTab link="sweet t" active="false"/></li> */}
                        {tabs.map((tab) => (
                            <FolderTab
                            key={tab}
                            link={tab}
                            active={activeTab === tab}
                            onClick={() => setActiveTab(tab)}
                            />
                        ))}
                    </ul>
                </div>
                <div id="folder" className=" bg-[#FFE9AD] rounded-b-4xl rounded-tr-4xl flex w-100 h-70 md:w-170 md:h-100 text-center justify-center items-center shadow-[0_5px_5px_rgba(0,0,0,0.50)]">
                    <div className="flex flex-col gap-5">
                        <p className="text-4xl md:text-5xl font-bold">PROJECTS</p>
                    <h1 className="text-3xl">✏️</h1>
                    <p className="text-2xl">build beyond yesterday</p>
                    </div>
                    
                </div>
                 
            </div>

            <div>
                <Link className="bg-white p-3 shadow-[0_5px_5px_rgba(0,0,0,0.50)] cursor-pointer" href="/projects">view project gallery</Link>
            </div>

        </div>
    )
}