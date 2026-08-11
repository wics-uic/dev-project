import Link from "next/link"
export default function Apply() {
    return (
        <div id="apply" className="flex justify-center items-center min-h-screen  bg-[url(/background/apply.png)] bg-cover">
            
            <div className="bg-white h-60 w-90 md:w-200 md:h-100 shadow-[0_5px_5px_rgba(0,0,0,0.50)] flex flex-col gap-3 text-center justify-center">
                <img className="ml-auto mr-auto max-w-10 md:max-w-70" src="heart.svg" />
                <h1 className="text-[#21376D] font-bold text-xl md:text-4xl">Ready to start building?</h1>
                <p className="text-[#F4919B] text-sm md:text-lg">No experience required. We welcome all students.</p>
                <Link href="/apply" className="bg-[#F6B9BA] font-bold text-md md:text-2xl ml-auto mr-auto w-fit rounded-4xl border border-[#BB868E] p-2 md:p-3 text-white">Apply for Fall 2026</Link>

            </div>
        </div>
    )
}