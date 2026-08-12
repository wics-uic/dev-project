export default function Footer() {
  return (
    <div className="p-10 flex flex-col gap-5 md:gap-10 min-h-screen bg-[url(/background/footer.png)] bg-cover text-white">
      
      <h1 className=" text-center">made with love by</h1>

      <div id="top-section" className="max-h-fit flex flex-col md:flex-row">
        <div className="max-h-100 p-0 flex flex-col align-middle items-center justify-center">
          <img src="flori.png" />
          <div className="text-center relative -top-31.25 lg:-top-50">
            <h1><b>Flori Che</b></h1>
          <p>CS '27</p>
          </div>
          
        </div>

        <div className="max-h-100 p-0 flex flex-col align-middle items-center justify-center">
          <img src="zeel.png" />
          <div className="text-center relative -top-31.25 lg:-top-50">
            <h1><b>Zeel Patel</b></h1>
            <p>CS '27</p>
          </div>
        </div>
      </div>

      <div id="bottom-section" className="">
        <div
          id="main"
          className="gap-5 flex flex-col md:flex md:flex-row justify-between"
        >
          <div id="left-container">
            <p className="text-3xl md:text-6xl font-bold">WiCS: Wired</p>
            <p className="max-w-100">
              Questions? Reach out to us on Discord in the 
              <br/>#dev-channel server.
            </p>
          </div>

          <div id="right-container">
            <p className="text-3xl md:text-6xl font-bold">Connect</p>
            <ul className="flex gap-3">
              <a href="https://www.instagram.com/wicsatuic/" target="_blank">
                <img width="40px" src="instagram.svg" />
              </a>
              <a
                href="https://www.linkedin.com/company/women-in-computer-science-uic/posts/?feedView=all"
                target="_blank"
              >
                <img width="40px" src="linkedin.svg" />
              </a>
              <a href="https://github.com/wics-uic" target="_blank">
                <img width="40px" src="github.svg" />
              </a>
            </ul>
          </div>
        </div>

        <div className="bg-white w-full h-[0.5] mt-5 mb-5" />

        <div id="bottom" className="flex justify-between">
          <p>No experience needed! All are welcome.</p>

          <p className="hidden md:block">est. 2024 WiCS Technical Project</p>
        </div>
      </div>
    </div>
  );
}
