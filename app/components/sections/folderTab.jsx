"use client"

export default function FolderTab({link,active,type}) {
    const isActive = active == "true"
    const background = isActive ? "#FFE9AD" : "#FBF2D8"

    
    const handleClick = () => {
        
    }


    return (

         type == "main" ? 
         <div
         className={`flex rounded-t-2xl items-center h-15 w-50 pl-5 pr-5 `}
        style={{backgroundColor: background}}
        onClick={handleClick}>
            <a className="font-bold">{link}</a>
            </div>
            
            : 

            <div 
        className={`flex rounded-t-2xl items-center h-10 w-fit pl-5 pr-5 shadow-xl`}
        style={{backgroundColor: background}}
        onClick={handleClick}
        >
            <a>{link}</a>
        </div>

        
        
    )
}