import React from 'react';
import Link from 'next/link';
import FolderTab from "../components/sections/folderTab"
import ProjectIndex from "../components/ProjectIndex"
import {getListOfProjects} from "../../helpers/postHelpers"

export default function ProjectsPage() {
  const projects = getListOfProjects();
  return (
    
    <div className="flex flex-col bg-[#B0C4B2] min-h-screen">
      <div className="h-10"></div>
      <div>
        <div className="ml-5 flex z-0">
         <FolderTab link="projects ✏️" active="true" type="main"/>
        {/* <FolderTab link="projects" active="false" type="main"/>
        <FolderTab link="projects" active="false" type="main"/>
        <FolderTab link="projects" active="false" type="main"/> */}
      </div>
      <div className="z-999 flex bg-[#FFE9AD] min-h-175 max-h-screen bottom-0">
        <ProjectIndex projects={projects}/>
      </div>
      </div>
      
    </div>
  
  );
}
