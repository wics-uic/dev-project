import Link from "next/link"
import ProjectCard from "./ProjectCard"

function ProjectIndex({ projects }) {
    console.log(projects)
  return (
    <section className="m-auto grid lg:grid xl:grid-cols-4 gap-6">
      {
        projects.map(project => (
          <article key={project.slug}>
            <Link href={`projects/${project.slug}`} className="text-black">
              <ProjectCard project={project}/>
            </Link>
          </article>
        ))
      }
    </section>
  )
}

export default ProjectIndex