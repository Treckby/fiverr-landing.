import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
export default function Home() {
  return (
    <main>
      
        <Navbar />
        <Hero />
       <Companies />
       <Services/>
    </main>
  );
}