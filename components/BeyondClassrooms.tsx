"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Building2, PartyPopper } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { beyondClassrooms } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Building2,
  PartyPopper,
};

export default function BeyondClassrooms() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Holistic Growth"
          title="Learning Beyond Classrooms"
          subtitle="Education at JG extends far beyond lectures — through hands-on projects, industry exposure, and vibrant campus life."
        />

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {beyondClassrooms.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl overflow-hidden h-[320px] sm:h-[360px] lg:h-[400px] cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/5 group-hover:from-charcoal/95 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 backdrop-blur-sm border border-accent/20">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-accent-light"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
