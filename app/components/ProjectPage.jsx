import ReactMarkdown from "react-markdown";
import FolderTab from "./sections/folderTab";
import Tool from "./Tools";

export default function ProjectPage({ content, data }) {
  const finalTitle = data.title.toUpperCase();
  const toolsArray = data.tools ? data.tools.split(",").map(t=>t.trim()) : [];

  return (
    <>
      <div className="flex flex-col bg-[#B0C4B2] min-h-screen">
        <div className="h-10"></div>
        <div>
          <div className="md:ml-5 flex z-0">
            <FolderTab name={finalTitle} active="true" type="main" />
            <FolderTab name="comments" active="false" type="main" />
            <FolderTab link="/projects" name="back to projects" active="false" type="main" />
          </div>
          <div className="z-50 flex flex-col bg-[#FFE9AD] p-15 min-h-175  bottom-0">
            <div id="content" className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div
                id="image"
                className="flex bg-white w-100 h-75 md:w-150 md:min-h-100 m-auto shadow-[0_5px_5px_rgba(0,0,0,0.50)]"
              >
                <img 
                  src={data.slideshow?.[0]?.image || data.image} 
                  alt={data.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="flex flex-col gap-5 ml-5">
                <h1 className="text-5xl font-bold text-[#4B5659]">{finalTitle}</h1>
                <p className="text-3xl">{data.date}</p>
                <p>{data.description}</p>
                <div className="flex gap-10">
                  <a href={data.github} target="_blank" rel="noreferrer">GitHub Repository</a>
                  <a href={data.siteUrl} target="_blank" rel="noreferrer">Deployed Website</a>
                </div>
                
                <div>
                  <p className="font-bold text-2xl">FEATURES</p>
                  <ul className="list-disc ml-5">
                    <li>feature #1</li>
                    <li>feature #1</li>
                    <li>feature #1</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-2xl mb-3">TOOLS</p>
                  <ul className="flex flex-wrap gap-2">
                    {toolsArray.map((toolName) => (
                      <li key={toolName}><Tool tool={toolName}/></li>
                    ))}
                  </ul>
                </div>

                {/* content */}

                <div className="prose prose-lg max-w-none">
                   <ReactMarkdown>{content}</ReactMarkdown>
                </div>

              </div>
            </div>
          </div>

          <section className="bg-[#FBF2D8] min-h-screen text-center p-15">
            <h1 className="text-6xl font-bold text-[#4B5659]">THE TEAM</h1>
            <div className="flex flex-wrap justify-center gap-12">
                {data.team?.map((member) => (
                    <div key={member.name} className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#B0C4B2] shadow-lg mb-4">
                            <img 
                                src={member.image || "/images/team/placeholder.jpg"} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-2xl font-bold text-[#4B5659]">{member.name}</p>
                        <p className="text-[#4B5659]/70">{member.role}</p>
                    </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
