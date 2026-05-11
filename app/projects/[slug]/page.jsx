import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import { getListOfProjects,getProjectContent } from '../../../helpers/postHelpers';
import { spring2026Projects } from "../../data/spring2026";

export const generateStaticParams = async () => {
  const projects = getListOfProjects()
  return projects.map(project => ({ slug: project.slug }))
}

export default async function Project({ params }) {
  const { slug } = await params;
   const { content, data } = getProjectContent(slug)
  
  return (
      <ProjectPage content={content} data={data}/>
  );
}