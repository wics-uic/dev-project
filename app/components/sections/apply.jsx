import Link from "next/link"
export default function Apply() {
    return (
        <div id="apply" className="flex justify-center items-center min-h-screen bg-[#BBCCF7]">
            <div className="bg-white h-70 w-100 md:w-200 md:h-100 shadow-[0_5px_5px_rgba(0,0,0,0.50)] flex flex-col gap-3 text-center justify-center">
                <img className="ml-auto mr-auto" src="heart.svg" width="70px"/>
                <h1 className="text-[#21376D] font-bold text-3xl md:text-6xl">Ready to start building?</h1>
                <p className="text-[#F4919B]">No experience required. We welcome all students.</p>
                <Link href="/apply" className="bg-[#F6B9BA] font-bold text-2xl ml-auto mr-auto w-fit rounded-4xl border border-[#BB868E] p-3 text-white">Apply for Fall 2026</Link>

            </div>
        </div>
    )
}