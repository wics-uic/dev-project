import ReactMarkdown from "react-markdown"
export default function ProjectPage({content,data}) {
    return (
    <>
      <h1>{data.title}</h1>
      <h2>{new Date(data.date).toLocaleDateString()}</h2>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </>
  )
}