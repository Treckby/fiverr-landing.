import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </main>
  );
}