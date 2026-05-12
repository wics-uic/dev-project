export default function ProjectCard({project}) {
    const finalTitle = (project.title).toUpperCase();
    return (
        <div className="flex flex-col items-center justify-center h-90 w-70 bg-white rounded-tr-3xl shadow-xl">
            <img width="150px" height="150px"/>
            <div id="text" className="flex flex-col p-3">
                <div className="flex justify-between">
                    <p className="font-bold">{finalTitle}</p>
                    <p>{project.date}</p>
                </div>
                <p>{project.description}</p>
                
            </div>
        </div>
    )
}