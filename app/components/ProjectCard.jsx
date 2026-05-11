export default function ProjectCard({project}) {
    return (
        <div className="h-80 w-60 bg-white rounded-tr-3xl shadow-xl">
            <img/>
            <div id="text">
                <p>{project.title}</p>
            </div>
        </div>
    )
}