import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Features />
      <Portfolio />
      <Process />
    </main>
  );
}