import Bio from "./componets/Bio";
import Contact from "./componets/Contact";
import Education from "./componets/Education";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Hobbies from "./componets/Hobbies";
import Navbar from "./componets/Navbar";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import WorkEx from "./componets/WorkEx";
import Snowfall from 'react-snowfall'

function App() {
  return (
    <>
    
      <div className="relative h-full overflow-y-hidden antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-9 container mx-auto">
        <Snowfall/>
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <WorkEx />
          <Education />
          <Hobbies/>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
