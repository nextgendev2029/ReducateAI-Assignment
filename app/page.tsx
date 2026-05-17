import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Strengths from "@/components/Strengths";
import Features from "@/components/Features";
import BeyondClassrooms from "@/components/BeyondClassrooms";
import Leadership from "@/components/Leadership";
import Partners from "@/components/Partners";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Strengths />
        <Features />
        <BeyondClassrooms />
        <Leadership />
        <Partners />
        <Campus />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
