import React from 'react';
import Link from 'next/link';
import FolderTab from "../components/sections/folderTab"
import ProjectIndex from "../components/sections/folderTab"
import {getListOfProjects} from "../../helpers/postHelpers"

export default function ProjectsPage() {
  const posts = getListOfProjects();
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
        <BlogIndex posts={posts}/>
      </div>
      </div>
      
    </div>
    // <div className="flex flex-col bg-[#F8E0D8] min-h-screen">
    //   <section className="flex flex-col items-center mt-15 mb-20 gap-10">
    //     <h1 className="font-bold text-4xl text-[#BB868E]">PROJECTS</h1>
    //     <div className="flex flex-wrap justify-center gap-5">
    //       <Link href="/projects/spring-2026">
    //         <div className="cursor-pointer rounded-2xl w-fit p-6 bg-[#B0C4B2] border-2 border-[#4B5659] hover:scale-105 transition-all shadow-md mt-5">
    //           <h2 className="font-bold text-2xl text-[#4B5659]">Spring 2026</h2>
    //           <p className="mt-2 text-sm text-[#4B5659]">View cohort projects &rarr;</p>
    //         </div>
    //       </Link>
    //     </div>
    //   </section>
    // </div>
  );
}
