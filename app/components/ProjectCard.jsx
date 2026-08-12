export default function ProjectCard({project}) {
    const finalTitle = (project.title).toUpperCase();
    return (
        <div className="flex flex-col p-5 gap-5 items-center justify-between min-h-100 w-70 bg-white rounded-tr-3xl shadow-[0_5px_5px_rgba(0,0,0,0.50)]">
            <img className="rounded-lg" width="200px" height="200px" src={project.image || "/projectIcons/placholder.svg"}/>
            <div id="text" className="flex flex-col">
                <div className="flex justify-between">
                    <p className="font-bold">{finalTitle}</p>
                    <p>{project.cohort}</p>
                </div>
                <p>{project.description}</p>
                
            </div>
        </div>
    )
}