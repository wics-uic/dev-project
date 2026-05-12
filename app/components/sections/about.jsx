import YellowTiles from "./yellowTiles.jsx";
import AboutImages from "./aboutImages.jsx";

export default function About() {
  return (
    <div id="about" className="overflow-clip flex w-full items-center min-h-screen bg-[#FBF2D8]">
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
        <div id="yellow-container" className="justify-center flex flex-col p-5 shadow-[0_5px_5px_rgba(0,0,0,0.50)] h-150 w-100 md:w-120  bg-white z-999">
          <h1 className="font-bold text-4xl">ABOUT</h1>
          <p>
            The WiCS: Wired Dev Project is a .... This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
            This is about our website. This is about our website. This is about
            our website. This is about our website. This is about our website.
          </p>
        </div>
        </div>
      
      <AboutImages/>
      
    </div>
  );
}
