import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl text-white tracking-wider">
          Lisa Wilson <span className="italic font-light">Design</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-white/80">
          <a href="#about" className="hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors duration-300">
            Portfolio
          </a>
          <a href="#services" className="hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300 border border-white/40 px-5 py-2 hover:bg-white hover:text-[#1a1a1a]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/portfolio/kitchen-waterfront-view.jpg"
          alt="Waterfront kitchen design by Lisa Wilson"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fade-in-up">
        <div className="w-16 h-px bg-[#b8976a] mx-auto mb-8" />
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4c4a8] mb-6">
          Cape Coral, Florida
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-8 leading-[1.1]">
          Luxury Kitchen
          <span className="block italic font-light text-[#d4c4a8]">Design</span>
        </h1>
        <p className="text-sm md:text-base font-light text-white/90 mb-12 max-w-md mx-auto leading-relaxed tracking-wide">
          Elevating homes with timeless kitchens, designed with
          intention and built to inspire.
        </p>
        <a
          href="#portfolio"
          className="inline-block border border-[#b8976a] text-[#d4c4a8] px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#b8976a] hover:text-white transition-all duration-500"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/portfolio/kitchen-elegant.jpg"
                alt="Elegant kitchen design"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#b8976a]/30 hidden md:block" />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#96784f] mb-4">
              About the Designer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2a2a2a] mb-8 leading-[1.2]">
              Where Vision
              <span className="block italic">Meets Craft</span>
            </h2>
            <div className="w-12 h-px bg-[#b8976a] mb-8" />
            <p className="text-sm leading-[1.9] text-gray-600 mb-6 tracking-wide">
              Lisa Wilson is a kitchen designer based in Cape Coral, Florida,
              dedicated to creating spaces that are as beautiful as they are
              functional. With a keen eye for detail and a passion for quality
              craftsmanship, she transforms kitchens into the heart of the home.
            </p>
            <p className="text-sm leading-[1.9] text-gray-600 tracking-wide">
              As an authorized dealer of{" "}
              <a
                href="https://www.woodharbor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b8976a] hover:text-[#96784f] transition-colors border-b border-[#b8976a]/40"
              >
                Woodharbor Cabinetry
              </a>
              , Lisa brings premium, American-made cabinetry to every project —
              combining timeless design with exceptional build quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6 leading-[1.2]">
            Our Portfolio
          </h2>
          <p className="sr-only">Kitchen and bathroom design projects by Lisa Wilson Design in Cape Coral, Florida</p>
          <div className="w-16 h-px bg-[#b8976a] mx-auto" />
        </div>

        {/* Project 1: Waterfront Residence */}
        <div className="mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-2">
            01
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Waterfront Residence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/kitchen-waterfront-view.jpg"
                  alt="Waterfront kitchen with ocean views, blue island, and marble countertops"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/kitchen-waterfront-island.jpg"
                  alt="Waterfront kitchen island with beadboard detail and marble top"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/kitchen-waterfront-galley.jpg"
                  alt="Waterfront kitchen galley view with white and grey cabinetry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/bathroom-white.jpg"
                  alt="White beadboard bathroom vanity with marble countertop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/bathroom-slate.jpg"
                  alt="Slate grey bathroom vanity with granite countertop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 tracking-wide mt-4">
            Woodharbor beadboard cabinetry &middot; Marble countertops &middot; Custom blue island &middot; Ocean views
          </p>
        </div>

        {/* Project 2: Original kitchens */}
        <div>
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-2">
            02
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
            Recent Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "/portfolio/kitchen-modern.jpg",
                alt: "Modern kitchen with black and white cabinetry and gold hardware",
              },
              {
                src: "/portfolio/kitchen-elegant.jpg",
                alt: "Elegant white kitchen with long peninsula and pendant lights",
              },
              {
                src: "/portfolio/kitchen-coastal.jpeg",
                alt: "Coastal white kitchen with shiplap island",
              },
            ].map((img) => (
              <div key={img.src} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 tracking-wide mt-4">
            Two-tone cabinetry &middot; Gold hardware &middot; Quartz countertops &middot; Custom islands
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureBanner() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/portfolio/kitchen-waterfront-galley.jpg"
          alt="Kitchen design detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-8">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4c4a8] mb-6">
          Crafted with Purpose
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white max-w-3xl mx-auto leading-[1.3] mb-8">
          Every detail considered.
          <span className="block italic text-[#d4c4a8]">Every surface intentional.</span>
        </h2>
        <a
          href="https://www.woodharbor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#b8976a] text-[#d4c4a8] px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#b8976a] hover:text-white transition-all duration-500"
        >
          Explore Woodharbor
        </a>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      number: "01",
      title: "Kitchen Design",
      description:
        "Full-service kitchen design from concept to completion. Space planning, material selection, and meticulous project coordination.",
    },
    {
      number: "02",
      title: "Woodharbor Cabinetry",
      description:
        "Authorized dealer of Woodharbor custom and semi-custom cabinetry. Premium American-made cabinets with endless style possibilities.",
    },
    {
      number: "03",
      title: "Design Consultation",
      description:
        "Expert guidance for your kitchen remodel. Budget planning, layout optimization, and personalized design direction.",
    },
  ];

  return (
    <section id="services" className="py-28 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#2a2a2a] mb-6">
            Services
          </h2>
          <div className="w-16 h-px bg-[#b8976a] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service) => (
            <div key={service.number} className="text-center group">
              <p className="font-serif text-4xl text-[#b8976a]/50 mb-6 group-hover:text-[#b8976a] transition-colors duration-300">
                {service.number}
              </p>
              <h3 className="text-sm tracking-[0.2em] uppercase font-medium text-[#2a2a2a] mb-4">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-[#b8976a] mx-auto mb-6" />
              <p className="text-sm text-gray-600 leading-[1.8] tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-[#2a2a2a]">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-4">
          Start Your Project
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6 leading-[1.2]">
          Let&apos;s Create Something
          <span className="block italic text-[#d4c4a8]">Beautiful</span>
        </h2>
        <div className="w-16 h-px bg-[#b8976a] mx-auto mb-10" />
        <p className="text-sm text-gray-300 max-w-md mx-auto mb-16 leading-relaxed tracking-wide">
          Ready to transform your kitchen? Reach out to begin the conversation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-3">
              Email
            </p>
            <a
              href="mailto:lisawilsondesign@gmail.com"
              className="text-sm text-white hover:text-[#d4c4a8] transition-colors tracking-wide"
            >
              lisawilsondesign@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-3">
              Phone
            </p>
            <a
              href="tel:2393369975"
              className="text-sm text-white hover:text-[#d4c4a8] transition-colors tracking-wide"
            >
              (239) 336-9975
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-3">
              Location
            </p>
            <p className="text-sm text-white tracking-wide">Cape Coral, FL</p>
          </div>
        </div>
        <a
          href="mailto:lisawilsondesign@gmail.com"
          className="inline-block bg-[#b8976a] text-white px-12 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#96784f] transition-all duration-500"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-white/60 tracking-wider">
          Lisa Wilson <span className="italic">Design</span>
        </p>
        <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">
          &copy; 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <FeatureBanner />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
