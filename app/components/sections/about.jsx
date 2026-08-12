import YellowTiles from "./yellowTiles.jsx";
import AboutImages from "./aboutImages.jsx";

export default function About() {
  return (
    // <div id="about" className="overflow-clip flex w-full items-center min-h-screen bg-[#FBF2D8]">
    <div id="about" className="relative overflow-clip flex w-full items-center min-h-screen bg-[url(/background/about.png)] bg-cover">
      
      
      
      <div
        id="tile-background"
        className="hidden max-h-screen overflow-hidden md:grid md:grid-cols-3 gap-5 absolute right-0 z-0"
      >
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
        <YellowTiles />
      </div>

      
        <div
        id="blue-container"
        className="p-2 justify-center shadow-[0_5px_5px_rgba(0,0,0,0.50)] m-auto h-150 w-100 md:ml-20 md:w-120 bg-[#BBCCF7] z-30"
      >
        <div id="yellow-container" className="justify-center flex flex-col gap-2 p-5 shadow-[0_5px_5px_rgba(0,0,0,0.50)] h-150 w-100 md:w-120  bg-white z-999">
          <h1 className="font-bold text-4xl"><a href="/about">ABOUT</a></h1>
          <p className="text-xs md:text-base">

            <b>The WiCS: Wired Dev Project</b> is a student-led initiative at UIC designed to bridge the gap between classroom theory and real-world software engineering. While CS courses teach you the logic, we provide the environment to actually build, break, and deploy something from scratch.

            <br/>
            <br/>
            Over the course of a semester, you’ll join a team of <b>15–25 members</b> to build and deploy a real-world collaborative project.
            
            Our Dev Co-leads organize weekly sessions that cover the full development lifecycle—from <b>Figma</b> designs and <b>Git version control</b> to modern <b>web frameworks</b> and final deployment. If you want to add a solid project to your resume and experience a real team sprint, this is the place for you.
            
            <br/>
            <br/>
            <b>Why Join?</b>
            
            If you’ve ever struggled to start a side project on your own, this is the place for you. You’ll leave the semester with a shippable project for your resume, experience working in a team sprint, and a community of developers who have your back.
          </p>
        </div>
        </div>
      <AboutImages/>

      
    </div>
  );
}
