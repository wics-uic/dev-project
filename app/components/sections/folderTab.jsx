"use client"

export default function FolderTab({link,active}) {
    const isActive = active == "true"
    const background = isActive ? "#FFE9AD" : "#FBF2D8"
    
    const handleClick = () => {
        
    }


    return (
        <div 
        className={`flex rounded-t-2xl items-center h-10 w-fit pl-5 pr-5 shadow-xl`}
        style={{backgroundColor: background}}
        onClick={handleClick}
        >
            <a>{link}</a>
        </div>
    )
}