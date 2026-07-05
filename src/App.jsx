import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Stats from './components/Stats.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050608] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
