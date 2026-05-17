"use client";

import { motion } from "framer-motion";
import { Puzzle, FlaskConical, Brain, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { strengths } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Puzzle, FlaskConical, Brain, Users,
};

export default function Strengths() {
  return (
    <section id="why-jg" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Strengths"
          title="Why Choose JG University?"
          subtitle="A university built on the pillars of innovation, industry relevance, and holistic development."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 md:p-7 rounded-xl border border-border/50 bg-cream/50 hover:bg-cream hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors duration-300">
                  {Icon && <Icon size={26} className="text-primary" strokeWidth={1.5} />}
                </div>
                <h3 className="text-base font-bold text-charcoal font-serif leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-sm text-charcoal-light/60 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
