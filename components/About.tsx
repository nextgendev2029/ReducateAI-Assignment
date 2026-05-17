"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Microscope, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutValues } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Microscope,
  Rocket,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="About Us"
              title="A New-Age, Tech-Driven University"
              align="left"
            />
            <p className="text-charcoal-light/70 leading-relaxed text-base md:text-lg -mt-6">
              JG University offers programmes that evolve with future industry
              demand, enabling students to seamlessly transition into employment
              or self-employment. Sponsored by the{" "}
              <strong className="text-charcoal font-semibold">
                ASIA Charitable Trust
              </strong>
              , which has been in the field of education since 1965 —
              successfully managing 17 colleges and 3 schools.
            </p>
            <p className="mt-4 text-charcoal-light/70 leading-relaxed text-base md:text-lg">
              As a{" "}
              <strong className="text-primary font-semibold">
                UGC-approved university
              </strong>
              , JG stands committed to nurturing youth with capabilities to
              acquire knowledge and skills that help them become eminent
              practitioners and global change leaders.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/30">
              <Image
                src="/assets/campus-4.jpg"
                alt="JG University campus building and grounds"
                width={600}
                height={400}
                className="w-full h-[300px] md:h-[380px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </motion.div>
        </div>

        {/* Value Cards */}
        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-6">
          {aboutValues.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-6 md:p-8 rounded-xl bg-cream border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-charcoal font-serif">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
