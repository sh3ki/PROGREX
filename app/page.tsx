import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="bg-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Blogs />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
