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
    <div className="min-h-screen w-full">
      <Navigation />
      <div className="w-full">
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
