export default function FAQ({question,answer}) {
    return (
        <div className="bg-white text-black shadow-[0_5px_5px_rgba(0,0,0,0.50)] w-fit rounded-xl h-fit p-5">
            <p className="font-bold">{question}</p>
            <p>{answer}</p>
        </div>
    )
}