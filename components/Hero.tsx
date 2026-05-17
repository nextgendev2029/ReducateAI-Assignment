"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroStats, heroTrustPoints } from "@/lib/data";
import { ArrowRight, Sparkles, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(185,28,28,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(212,160,23,0.04),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                Admissions Open 2026-27
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight">
              Future-ready education for{" "}
              <span className="text-primary">ambitious learners</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-charcoal-light/70 leading-relaxed max-w-lg">
              A new-age, tech-driven university offering programmes aligned with
              future industry demand — empowering students to seamlessly
              transition into employment and self-employment.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#programmes"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Explore Programmes
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-accent/40 text-charcoal text-sm font-semibold rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-200"
              >
                Apply Now
              </a>
            </div>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {heroTrustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-cream-dark text-charcoal-light/70 border border-border/60"
                >
                  <Shield size={10} className="text-primary" />
                  {point}
                </span>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 pt-8 border-t border-border/60"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {heroStats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-lg sm:text-xl font-bold text-charcoal font-serif">
                      {stat.value}
                    </div>
                    <div className="text-xs text-charcoal-light/50 mt-0.5 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Editorial Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main large image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border/30">
                <Image
                  src="/assets/jg/banner-1.webp"
                  alt="JG University students in a collaborative learning environment"
                  width={640}
                  height={420}
                  className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover"
                  priority
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/15 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Smaller overlapping image — bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 w-[140px] sm:w-[180px] rounded-xl overflow-hidden shadow-xl border-[3px] border-cream hidden sm:block"
              >
                <Image
                  src="/assets/jg/campus-interior.webp"
                  alt="Modern campus interior"
                  width={180}
                  height={130}
                  className="w-full h-[100px] sm:h-[120px] object-cover"
                />
              </motion.div>

              {/* Smaller overlapping image — top-right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute -top-4 -right-3 sm:-right-5 w-[130px] sm:w-[160px] rounded-xl overflow-hidden shadow-xl border-[3px] border-cream hidden sm:block"
              >
                <Image
                  src="/assets/jg/campus-students.webp"
                  alt="Students at campus event"
                  width={160}
                  height={120}
                  className="w-full h-[90px] sm:h-[110px] object-cover"
                />
              </motion.div>

              {/* Est. 1965 label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-primary text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-[10px] font-medium uppercase tracking-widest opacity-80 block leading-tight">
                  Established
                </span>
                <span className="text-lg font-serif font-bold leading-tight">
                  1965
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
