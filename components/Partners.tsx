"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { partners } from "@/lib/data";

export default function Partners() {
  // Double logos for seamless infinite loop
  const allLogos = [...partners, ...partners];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industry Linkages"
          title="Partners & Collaborations"
          subtitle="Collaborations that connect students with real-world learning ecosystems."
        />
      </div>

      {/* Marquee strip — inline styles to guarantee horizontal layout */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "max-content",
              animation: "marquee-scroll 30s linear infinite",
            }}
            className="hover:[animation-play-state:paused]"
          >
            {allLogos.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                style={{ flexShrink: 0, margin: "0 16px" }}
              >
                <div className="w-[140px] sm:w-[160px] h-[80px] sm:h-[90px] rounded-xl bg-cream/80 border border-border/40 flex items-center justify-center p-4 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-[100px] sm:max-w-[120px] max-h-[50px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
