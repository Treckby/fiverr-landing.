import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
export default function Home() {
  return (
    <main>
      
        <Navbar />
        <Hero />
       <Companies />
    </main>
  );
}