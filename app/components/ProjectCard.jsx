export default function ProjectCard(name,date,description,img) {
    return (
        <div className="h-200 w-80 bg-white rounded-tr-3xl rounded-b-3xl shadow-xl">
            <img/>
            <div id="text">
                <p>{name}</p>
                <p>{date}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}