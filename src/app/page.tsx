import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";


;

export default function Home() {
  return (

    <section>

      {/* About Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <div className="mb-16">
        <Services />
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <Contact />
      </div>
    </section>

  );
}
