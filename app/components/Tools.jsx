export default function Tool({tool}){
    const finalTool = tool.toUpperCase()
    return (
        <p className="text-white pl-5 pr-5 pt-3 pb-3 border border-black w-fit rounded-4xl bg-[#F4919B]">{finalTool}</p>
    )
}