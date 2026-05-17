"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { leaders } from "@/lib/data";

export default function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Leaders"
          title="Visionary Leadership"
          subtitle="Guided by leaders who bridge the gap between academic excellence and industry relevance."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 md:p-8 rounded-2xl bg-white border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-accent/20 shadow-md group-hover:border-accent/40 transition-colors">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-primary mt-1">
                  {leader.title}
                </p>
                <div className="mt-2 h-0.5 w-10 bg-accent rounded-full mx-auto sm:mx-0" />
                <p className="mt-3 text-sm text-charcoal-light/60 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
