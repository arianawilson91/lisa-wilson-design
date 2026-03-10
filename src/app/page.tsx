"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl text-white tracking-wider">
          Lisa Wilson <span className="italic font-light">Design</span>
        </a>

        {/* Desktop nav */}
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
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300 border border-white/40 px-5 py-2 hover:bg-white hover:text-[#1a1a1a]"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a1a1a]/95 backdrop-blur-sm px-8 pb-8 pt-2 flex flex-col gap-6 text-[11px] tracking-[0.25em] uppercase text-white/80">
          <a href="#about" onClick={closeMenu} className="hover:text-white transition-colors">
            About
          </a>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#services" onClick={closeMenu} className="hover:text-white transition-colors">
            Services
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-center border border-white/40 px-5 py-3 hover:bg-white hover:text-[#1a1a1a] transition-all"
          >
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
        <p className="text-base md:text-lg font-medium text-white mb-12 max-w-md mx-auto leading-relaxed tracking-wide text-shadow">
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
                src="/lisa-wilson-headshot.jpg"
                alt="Lisa Wilson, kitchen designer in Cape Coral, Florida"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#b8976a]/30 hidden md:block" />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#96784f] mb-4">
              About the Designer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2a2a2a] mb-8 leading-[1.2]">
              Meet Lisa
              <span className="block italic">Wilson</span>
            </h2>
            <div className="w-12 h-px bg-[#b8976a] mb-8" />
            <p className="text-sm leading-[1.9] text-gray-600 mb-6 tracking-wide">
              Lisa Wilson is a kitchen designer based in Cape Coral, Florida,
              dedicated to creating spaces that are as beautiful as they are
              functional. With a keen eye for detail and a passion for quality
              craftsmanship, she transforms kitchens into the heart of the home.
            </p>
            <p className="text-sm leading-[1.9] text-gray-600 mb-6 tracking-wide">
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
            <p className="text-xs leading-[1.8] text-gray-500 tracking-wide">
              Serving Cape Coral, Fort Myers, Naples, and surrounding
              Southwest Florida communities.
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
          <p className="sr-only">
            Kitchen and bathroom design projects by Lisa Wilson Design in Cape
            Coral, Florida
          </p>
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
            Woodharbor beadboard cabinetry &middot; Marble countertops &middot;
            Custom blue island &middot; Ocean views
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
            Two-tone cabinetry &middot; Gold hardware &middot; Quartz
            countertops &middot; Custom islands
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
          <span className="block italic text-[#d4c4a8]">
            Every surface intentional.
          </span>
        </h2>
        <a
          href="#contact"
          className="inline-block border border-[#b8976a] text-[#d4c4a8] px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#b8976a] hover:text-white transition-all duration-500"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lisa transformed our kitchen beyond what we imagined. Her eye for detail and understanding of how we live made all the difference.",
      name: "Sarah M.",
      location: "Cape Coral",
    },
    {
      quote:
        "From the very first consultation, Lisa listened to exactly what we wanted. The Woodharbor cabinets she recommended are stunning — the quality is unmatched.",
      name: "James & Karen T.",
      location: "Fort Myers",
    },
    {
      quote:
        "Working with Lisa was effortless. She handled everything and kept us on budget. We get compliments on our kitchen every single time we entertain.",
      name: "Michelle R.",
      location: "Naples",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#96784f] mb-4">
            Client Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#2a2a2a] mb-6">
            Kind Words
          </h2>
          <div className="w-16 h-px bg-[#b8976a] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="font-serif text-5xl text-[#b8976a]/30 mb-4">&ldquo;</div>
              <p className="text-sm text-gray-600 leading-[1.9] tracking-wide mb-6 italic">
                {t.quote}
              </p>
              <div className="w-8 h-px bg-[#b8976a] mx-auto mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase font-medium text-[#2a2a2a]">
                {t.name}
              </p>
              <p className="text-xs text-gray-500 tracking-wide mt-1">
                {t.location}
              </p>
            </div>
          ))}
        </div>
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
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block border border-[#b8976a] text-[#b8976a] px-10 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#b8976a] hover:text-white transition-all duration-500"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject Details:\n${message}`
    );

    window.open(`mailto:lisawilsondesign@gmail.com?subject=${subject}&body=${body}`, "_self");
    setFormStatus("sent");
    form.reset();
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#2a2a2a]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#b8976a] mb-4">
            Start Your Project
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-6 leading-[1.2]">
            Let&apos;s Create Something
            <span className="block italic text-[#d4c4a8]">Beautiful</span>
          </h2>
          <div className="w-16 h-px bg-[#b8976a] mx-auto mb-10" />
          <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed tracking-wide">
            Ready to transform your kitchen? Fill out the form below and
            Lisa will be in touch within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white tracking-wide focus:border-[#b8976a] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white tracking-wide focus:border-[#b8976a] focus:outline-none transition-colors"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white tracking-wide focus:border-[#b8976a] focus:outline-none transition-colors"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-[10px] uppercase tracking-[0.3em] text-[#b8976a] mb-2"
            >
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white tracking-wide focus:border-[#b8976a] focus:outline-none transition-colors resize-none"
              placeholder="Describe your kitchen vision, timeline, and any details you'd like to share..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-[#b8976a] text-white px-12 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-[#96784f] transition-all duration-500"
            >
              Send Message
            </button>
            {formStatus === "sent" && (
              <p className="text-[#b8976a] text-sm mt-4 tracking-wide">
                Thank you! Your email client should open with your message.
              </p>
            )}
          </div>
        </form>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-12">
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
              Service Area
            </p>
            <p className="text-sm text-white tracking-wide">
              Cape Coral, Fort Myers &amp; SW Florida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-serif text-lg text-white/60 tracking-wider">
            Lisa Wilson <span className="italic">Design</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-[#b8976a] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.houzz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-[#b8976a] transition-colors"
            >
              Houzz
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-[#b8976a] transition-colors"
            >
              Pinterest
            </a>
          </div>

          <p className="text-[10px] text-white/50 tracking-[0.2em] uppercase">
            &copy; 2026 All rights reserved
          </p>
        </div>
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
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
