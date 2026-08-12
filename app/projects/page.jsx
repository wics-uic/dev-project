import React from 'react';
import Link from 'next/link';
import FolderTab from "../components/sections/folderTab"
import ProjectIndex from "../components/ProjectIndex"
import {getListOfProjects} from "../../helpers/postHelpers"
import NavBar from '../components/NavBar2';


export default function ProjectsPage() {
  const projects = getListOfProjects();
  return (
    
    <div className="flex flex-col bg-linear-to-r from-[#FFEAB0] via-[#F4919B] to-[#F6B9BA] min-h-screen">
      <NavBar/>
      <div className="h-10"></div>
      <div>
        <div className="ml-5 flex z-0">
         <FolderTab link="/" name="projects ✏️" active="true" type="main"/>
      </div>
      <div className="z-50 flex bg-[#FFE9AD] min-h-175 p-15 bottom-0">
        <ProjectIndex projects={projects}/>
      </div>
      </div>
      
    </div>
  
  );
}
