import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import EditorShowcase from "./components/sections/EditorShowcase";
import AboutStats from "./components/sections/AboutStats";
import HowItWorks from "./components/sections/HowItWorks";
import PortfolioShowcase from "./components/sections/PortfolioShowcase";
import ProblemSolution from "./components/sections/ProblemSolution";

export default function Home() {
  return (
    <><Header></Header>

    <main className="min-h-screen">
      <Hero />
      <EditorShowcase />
      <AboutStats />
      <ProblemSolution />
      <HowItWorks />
      <PortfolioShowcase />
    </main>
    </>
  );
}