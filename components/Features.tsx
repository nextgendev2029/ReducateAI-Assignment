"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { salientFeatures } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left headline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-accent/10 text-accent border border-accent/20">
              Salient Features
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              What Sets Us Apart
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 text-charcoal-light/70 leading-relaxed">
              From NEP 2020 compliance to international collaborations, JG University delivers an education built for the demands of tomorrow.
            </p>
          </motion.div>

          {/* Right checklist grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {salientFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-border/40 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm font-medium text-charcoal-light/80 leading-snug group-hover:text-charcoal transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
