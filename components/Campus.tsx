"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Lightbulb, Library, Wifi } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { campusFacilities, campusGallery } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Lightbulb, Library, Wifi,
};

export default function Campus() {
  return (
    <section id="campus" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Campus"
          title="Where Learning Comes to Life"
          subtitle="A tech-enabled campus designed for exploration, collaboration, and innovation."
        />

        {/* Campus Mosaic Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {/* Featured large image — spans 2 cols and 2 rows */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl border border-border/30 group cursor-pointer">
            <Image
              src={campusGallery[0].src}
              alt={campusGallery[0].alt}
              width={600}
              height={500}
              className="w-full h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          {/* 4 smaller images */}
          {campusGallery.slice(1, 5).map((img, i) => (
            <div
              key={img.src}
              className="rounded-xl overflow-hidden shadow-md border border-border/30 group cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="w-full h-[120px] sm:h-[150px] lg:h-[195px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Facility Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {campusFacilities.map((facility, i) => {
            const Icon = iconMap[facility.icon];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-5 md:p-6 rounded-xl bg-cream border border-border/50 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  {Icon && <Icon size={22} className="text-accent" strokeWidth={1.5} />}
                </div>
                <h3 className="text-sm md:text-base font-bold text-charcoal font-serif">{facility.title}</h3>
                <p className="mt-1.5 text-xs md:text-sm text-charcoal-light/55 leading-relaxed hidden sm:block">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
