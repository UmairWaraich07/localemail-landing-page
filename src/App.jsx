import "./App.css";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import HowToDownload from "./sections/HowToDownload";

function App() {
  return (
    <main className="bg-dark w-full min-h-screen overflow-hidden px-6 sm:px-16 text-light pb-20">
      <div className="max-w-[1280px] m-auto">
        <Hero />
        <Features />
        <HowItWorks />
        <HowToDownload />
        <Testimonials />
        <CTA />
      </div>
    </main>
  );
}

export default App;
