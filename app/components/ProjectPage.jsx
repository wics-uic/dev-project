import ReactMarkdown from "react-markdown";
import FolderTab from "./sections/folderTab";
import Tool from "./Tools";

export default function ProjectPage({ content, data }) {
  const finalTitle = data.title.toUpperCase();

  return (
    <>
      {/* <h1>{data.title}</h1>
      <h2>{new Date(data.date).toLocaleDateString()}</h2> */}
      <div className="flex flex-col bg-[#B0C4B2] min-h-screen">
        <div className="h-10"></div>
        <div>
          <div className="md:ml-5 flex z-0">
            <FolderTab link={data.title} active="true" type="main" />
            <FolderTab link="comments" active="false" type="main" />
            <FolderTab link="back to projects" active="false" type="main" />
          </div>
          <div className="z-999 flex flex-col bg-[#FFE9AD] p-15 min-h-175  bottom-0">
            {/* <section>
        <ReactMarkdown>
        {content}
        </ReactMarkdown>
       </section> */}
            <div id="content" className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div
                id="image"
                className="flex bg-white w-100 h-75 md:w-150 md:min-h-100 m-auto shadow-sm"
              >
                <img className="w-80 h-50 md:w-100 md:h-70 border m-auto"/>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-5xl font-bold text-[#4B5659]">{finalTitle}</p>
                <p className="text-3xl">{data.date}</p>
                <p>{data.description}</p>
                <div>
                  <a>{data.github}</a>
                  <a>{data.siteUrl}</a>
                </div>
                
                <div>
                  <p className="font-bold text-2xl">FEATURES</p>
                  <ul>
                    <li>feature #1</li>
                    <li>feature #1</li>
                    <li>feature #1</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-2xl">TOOLS</p>
                  <ul>
                    <li><Tool tool="tool #1"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-[#FBF2D8] min-h-screen text-center p-15">
            <h1 className="text-6xl font-bold text-[#4B5659]">THE TEAM</h1>
          </section>
        </div>
      </div>
    </>
  );
}
