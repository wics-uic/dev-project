export default function PostHero() {
    return (
        <section id="post-hero">
            <div className="m-auto text-white flex flex-col justify-center align-middle items-center min-h-screen w-full bg-[url(/background/postHero.png)] bg-cover">
            
            
            <h1 className="text-3xl text-center hidden md:block">BUILDING THE NEXT GENERATION OF UIC DEVELOPERS</h1>
            <div className="flex flex-col md:flex-row">
                <img src="post1.png" width="350px"/>
                <img src="post2.png" width="375px"/>
                <img src="post3.png" width="350px"/>
            </div>

               {/* <img src="bigpinkstar.svg" className="absolute animate-pulse left-0 -top-10"/>

            <img src="yelstar.svg" className="absolute animate-bounce-small "/>
            <img src="smallyelstar.svg" className="absolute animate-bounce-small-delay "/>

            <img src="bigpinkstar.svg" width="300px" className="absolute animate-pulse "/>
            <img src="pinkstar.svg" width="150px" className="absolute animate-pulse rotate-90"/>
            

            <img src="whitestar.png" className="relative bottom-0 right-0"/> */}
            </div>
        </section>
    )
}