"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { programmes } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programmes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Programmes"
          title="Explore Our Programmes"
          subtitle="Industry-aligned academic paths from undergraduate to doctoral level — plus cutting-edge professional certifications."
        />

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[340px] sm:h-[380px] lg:h-[420px]"
            >
              {/* Image */}
              <Image
                src={prog.image}
                alt={`${prog.title} programmes at JG University`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10 group-hover:from-charcoal/95 group-hover:via-charcoal/50 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                    {prog.title}
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <ArrowUpRight
                      size={18}
                      className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {prog.description}
                </p>

                {/* Course Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {prog.courses.slice(0, 5).map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-white/80 border border-white/10 backdrop-blur-sm"
                    >
                      {course}
                    </span>
                  ))}
                  {prog.courses.length > 5 && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-accent/20 text-accent-light border border-accent/20">
                      +{prog.courses.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
