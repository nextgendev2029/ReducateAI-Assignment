"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Alumni Voices"
          title="What Our Alumni Say"
          subtitle="Hear from graduates who have transformed their careers through JG University."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border/40">
            {/* Quote icon */}
            <Quote size={48} className="text-accent/15 mb-4" strokeWidth={1} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-serif text-lg md:text-xl text-charcoal/80 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/30 shadow-sm"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                      <span className="text-primary font-bold font-serif text-lg">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-charcoal text-sm">{t.name}</div>
                    <div className="text-xs text-charcoal-light/60">
                      {t.programme} &middot; {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-primary w-8"
                        : "bg-charcoal/15 hover:bg-charcoal/30 w-2.5"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-cream hover:border-primary/30 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} className="text-charcoal-light" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-cream hover:border-primary/30 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} className="text-charcoal-light" />
                </button>
              </div>
            </div>
          </div>

          {/* Avatar strip of all testimonials */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((person, i) => (
              <button
                key={person.name}
                onClick={() => setCurrent(i)}
                className={`rounded-full overflow-hidden transition-all duration-300 ${
                  i === current
                    ? "w-12 h-12 ring-2 ring-primary ring-offset-2 ring-offset-cream"
                    : "w-10 h-10 opacity-50 hover:opacity-80"
                }`}
                aria-label={`View ${person.name}'s testimonial`}
              >
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/15 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
