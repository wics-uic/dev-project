import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import { getListOfProjects,getProjectContent } from '../../../helpers/postHelpers';
import { spring2026Projects } from "../../data/spring2026";

export const generateStaticParams = async () => {
  const projects = getListOfProjects()
  return projects.map(project => { slug: project.slug })
}

function Project({ params }) {
   const { content, data } = getProjectContent(params.slug)
  
  return (
      <ProjectPage content={content} data={data}/>
  );
}

// <div className="flex flex-col bg-[#F8E0D8] min-h-screen pb-20">
    //   <section className="flex flex-col items-center mt-15 gap-10">
    //     <h1 className="font-bold text-4xl text-[#BB868E] uppercase">
    //       {`${resolvedParams.slug} Projects`}
    //     </h1>
        
    //     {isSpring2026 ? (
    //       <div className="flex flex-wrap justify-center gap-8 max-w-5xl px-8">
    //         {spring2026Projects.map((project, idx) => (
    //           <a 
    //             key={idx} 
    //             href={project.url} 
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //             className="block"
    //           >
    //             <div className="bg-[#B0C4B2] border-2 border-[#4B5659] rounded-2xl p-6 shadow-md hover:scale-105 transition-all w-72 h-40 flex flex-col justify-center items-center text-center">
    //               <h3 className="text-2xl font-bold text-[#4B5659] mb-3">{project.name}</h3>
    //               <span className="text-sm font-bold text-[#4B5659] underline bg-white/30 px-3 py-1 rounded-full">Explore</span>
    //             </div>
    //           </a>
    //         ))}
    //       </div>
    //     ) : (
    //       <div className="text-lg text-[#4B5659]">
    //         No projects found for this cohort.
    //       </div>
    //     )}
    //   </section>
    // </div>