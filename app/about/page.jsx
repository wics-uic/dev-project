import NavBar from "../components/NavBar2";

export default function about() {
  return (

    <div className="w-screen min-h-screen p-15 bg-[url(/background/about.png)] bg-cover flex-col flex">
      <NavBar/>
      <h1 className="text-4xl mb-5">ABOUT</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div id="about-column">
          <h1>HOW IT GOT STARTED</h1>

          <h1>OUR MISSION TODAY</h1>

          <h1>WHAT TO EXPECT</h1>
        </div>

        <div id="prev-leads">
          <div id="2026-27">
            <h1>FALL 2026 DEV LEADS</h1>

            <ul>
              <li>
                <p>Zeel Patel</p>
              </li>

              <li>
                <p>Parineet Sond</p>
              </li>
            </ul>
          </div>

          <div id="2026-27">
            <h1>SPRING 2026 DEV LEADS</h1>

            <ul>
              <li>
                <p>Zeel Patel</p>
              </li>

              <li>
                <p>Florianne Che</p>
              </li>
            </ul>
          </div>

          <div id="2026-27">
            <h1>FALL 2025 DEV LEADS</h1>

            <ul>
              <li>
                <p>Zeel Patel</p>
              </li>

              <li>
                <p>Florianne Che</p>
              </li>
            </ul>
          </div>

          <div id="2026-27">
            <h1>SPRING 2025 DEV LEADS</h1>

            <ul>
              <li>
                <p>Michelle Vences</p>
              </li>

              <li>
                <p>Florianne Che</p>
              </li>
            </ul>
          </div>

          <div id="2026-27">
            <h1>FALL 2024 DEV LEADS</h1>

            <ul>
              <li>
                <p>Florianne Che</p>
              </li>
              <li>
                <p>Nandana Sheri (Advisor)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
