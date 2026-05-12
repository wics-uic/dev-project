"use client"

export default function FolderTab({name,link,active,type, onClick}) {
    const background = active ? "#FFE9AD" : "#FBF2D8"


    return (
         type == "main" ? 
         <div
         className={`cursor-pointer shadow-[2px_0px_0px_0px_rgba(0,0,0,0.50)] flex rounded-t-2xl items-center h-15 w-50 pl-5 pr-5 `}
        style={{backgroundColor: background}}
        onClick={onClick}>
            <a href={link || "#"} className="font-bold">{name}</a>
            </div>
            
            : 

            <div 
        className={`cursor-pointer flex rounded-t-2xl items-center h-10 w-fit pl-5 pr-5 shadow-[0_5px_5px_rgba(0,0,0,0.50)]`}
        style={{backgroundColor: background}}
        onClick={onClick}
        >
            <p className="font-bold">{link}</p>
        </div>
    )
}