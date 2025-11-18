import "./App.css";
import {
  About,
  Competitions,
  Contact,
  DesignProcess,
  Hero,
  Navigation,
  Projects,
  Reflection,
  Toolkit,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen w-ful">
      <Navigation />
      <div className="bg-red-800">
        <Hero />
        <About />
        <Projects />
        <Competitions />
        <DesignProcess />
        <Toolkit />
        <Reflection />
        <Contact />
      </div>
    </div>
  );
}
