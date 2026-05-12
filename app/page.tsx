import Hero from "./components/sections/hero"
import Projects from "./components/sections/projects"
import About from "./components/sections/about"
import Apply from "./components/sections/apply"
import Footer from "./components/sections/footer"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <Projects/>
      <About/>
      <Apply/>    
      <Footer/>
    </div>
  );
}
