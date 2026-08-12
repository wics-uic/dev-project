import NavBar from "../components/NavBar2";

export default function about() {
  return (
    <div className="w-screen min-h-screen p-15 bg-[url(/background/about.png)] bg-cover flex-col flex">
      <NavBar />
      <h1 className="text-4xl mb-5">ABOUT</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div id="about-column" className="flex flex-col gap-3">
          <h1>HOW IT STARTED</h1>
          <div className="max-w-[700px]">
            <p>
              At the end of Spring 2024 (the end of my Freshman year), I pitched
              my application to the WiCS board to be their website
              administrator. I mainly wanted practice building a website, but I
              also mentioned my previous experience teaching and leading others
              in app development. I was passionate about getting more students
              technical.
              <br />
              <br />
              After my presentation, Nandana and Jelena, the co-presidents of
              WiCS at the time, saw a new opportunity to use my skills that I
              hadn't anticipated. They were the ones who truly kickstarted the
              Dev Project.
              <br />
              <br />
              I had anticipated a few technical workshops -- she imagined a
              whole cohort of students who would build a big project over one
              semester. Nandana wanted people to get their hands dirty with web
              development. It's safe to say that much of WiCS:Wired Dev Project
              can credit itself to her ambition.
              <br />
              <br />
              The first semester, we threw out a poster and an interest form in
              the CS Lounge and Instagram. It said something like, "Interested
              in building a CS project for 1 hour each week with other students?
              Sign up here." We had over 80+ applicants in the span of 2 weeks.
              <br />
              <br />
              That's when I saw two things:
              <b>
                {" "}
                Students want to build. And students want to build in community.
              </b>
              <br />
              <br />
              From then on, the dev project has grown into an amazing
              opportunity for students to grow confidence in their development
              skills, get practice working on teams, get exposed to actual git
              version control outside of the classroom, and step up into
              leadership positions. We've had dev mentors (dev members who were
              part of previous cohorts) lead sessions for fellow members. We've
              seen students jump in to provide technical help on Discord while
              my co-lead and I were AWOL.
              <br />
              <br />
              My mind has truly been blown away by the level of passion and
              enthusiasm to learn displayed by the UIC CS community.
              <br />
              <br />
              And I have no doubt the Dev Project will continue to grow in
              tremendous ways as long as people keep wanting to build.
              <br />
              <br />
              Lots of love,
              <br />
              Flori (August 12, 2027)
            </p>
          </div>

          <h1>OUR MISSION TODAY</h1>

          <div className="max-w-[700px]">
            Get students building.
            <br/><br/>
            Most companies are interested in students' personal projects and skills. 
            Yet so many students leave that to their upperclassman years because they 
            don't know where to start as an underclassman.
            <br/><br/>
            There are so many tools, online tutorials, courses... and the classroom doesn't do
            much to provide these learning experiences.
            <br/><br/>
            Dev Project gets students exposed *early* to project building so students have
            the foundational skills to develop future projects.
            <br/><br/>
            They get weekly lessons catered to them by our dev leads, personalized help 
            online and in-person, and experience working on a team. 
            <br/><br/>
            Most of our students learn about Git Version Control through our initiative. 
            This is crazy, considering most companies consider Git a fundamental skill 
            in their applications. 
            <br/><br/>
            Don't know what a framework is? Never used VSCode?
            <br/><br/>
            Don't worry. We got you. All you need is the curiosity to learn.


          </div>

          <h1>WHAT TO EXPECT</h1>
          <div className="max-w-[500px]">
            <ul className="list-disc">
              <li>
                Weekly 1.5 hour meetings (attendance is tracked)
              </li>
              <li>
                Weekly tasks (submissions are tracked)
              </li>
              <li>
                1-2 hours of independent work outside of meetings
              </li>
              <li>
                Communication through Dev Project Discord Server
              </li>
              <li>
                A final, deployed product to add to your resume
              </li>
              <li>
                End-of-semester demo
              </li>
              <li>
                Skills learned: Intro to Web Dev, HTML, CSS, JS, Git Version Control, CLI Commands
              </li>
            </ul>
          </div>
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
