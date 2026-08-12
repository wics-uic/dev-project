export default function PostHero() {
    return (
        <section id="post-hero">
            <div className="relative m-auto text-white flex flex-col justify-center align-middle items-center min-h-screen w-full bg-[url(/background/postHero.png)] bg-cover">
            
            
            <h1 className="text-3xl text-center hidden md:block">BUILDING THE NEXT GENERATION OF UIC DEVELOPERS</h1>
            <div className="flex flex-col lg:flex-row">
                <img src="post1.png" width="350px"/>
                <img src="post2.png" width="375px"/>
                <img src="post3.png" width="350px"/>
            </div>

            <img src="bigpinkstar.svg" className="absolute animate-pulse -left-10 top-40 md:-left-20 md:-bottom-20"/>
            <img src="pinkstar.svg" width="150px" className="absolute animate-bounce-small hidden md:left-10 md:bottom-30"/>

            <img src="yelstar.svg" className="absolute animate-bounce-small right-0 top-0 md:right-20 "/>
            <img src="smallyelstar.svg" className="absolute animate-bounce-small-delay right-0 md:right-20 md:bottom-90"/>

            <img src="bigpinkstar.svg" width="300px" className="absolute animate-pulse -left-10 md:top-50 md:left-70"/>
            
            <img src="whitestar.png" className="absolute animate-bounce-small-delay bottom-10 md:bottom-0 md:right-0"/>
            
            <img src="circle.png" className="absolute max-w-40 md:min-w-100 right-0 bottom-0"/>
            </div>
        </section>
    )
}