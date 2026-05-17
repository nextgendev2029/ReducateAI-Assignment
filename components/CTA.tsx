"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Build your future with{" "}
            <span className="text-accent-light">industry-ready learning</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Join a university that bridges the gap between education and employment with cutting-edge programmes, real-world projects, and a legacy of 60+ years.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-charcoal text-sm font-bold rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#programmes"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              View Programmes
            </a>
          </div>

          <p className="mt-8 text-xs text-white/40 tracking-wide">
            UGC Approved &bull; Industry-Focused &bull; Experiential Learning &bull; NEP 2020 Compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
}
