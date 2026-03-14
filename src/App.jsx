import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories'; 
import Investors from './components/Investors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans selection:bg-neonGreen selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Categories />
        <Investors />
      </main>
      <Footer />
    </div>
  );
}

export default App;