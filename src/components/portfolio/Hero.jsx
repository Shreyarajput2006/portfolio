import React from "react";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { personalInfo } from "../../mock";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-10 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#1f3bb3]/20 via-[#5b3b6e]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#5b3b6e]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <div className="flex flex-wrap items-center gap-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1f3bb3] text-white font-semibold grid place-items-center">
                {personalInfo.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#14121a]">{personalInfo.name}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5b3b6e]">
                  Portfolio · 2025
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-7 text-sm text-[#14121a]">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-[#1f3bb3]">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ecfdf5] px-4 py-2 text-xs font-semibold text-[#15803d] border border-[#d1fae5]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Available
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#14121a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1f3bb3] transition-colors"
            >
              Let's talk
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#5b3b6e] mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-[#5b3b6e]" />
            Portfolio / 001
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e0d6] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#1f3bb3]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#3a2f44]">
              IT Engineer · UI/UX Designer
            </span>
          </div>

          <h1 className="font-display text-[14vw] md:text-[9vw] lg:text-[7.4vw] leading-[0.92] text-[#14121a] tracking-tight">
            <span className="block">Designing</span>
            <span className="block">
              seamless <span className="font-serif-accent italic text-[#5b3b6e]">digital</span>
            </span>
            <span className="block">
              <span className="font-serif-accent italic text-[#1f3bb3]">experiences</span>
              .
            </span>
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="font-body text-base md:text-lg text-[#3a2f44] leading-relaxed">
              Hi, I'm <span className="text-[#14121a] font-semibold">{personalInfo.name}</span> — a 3rd-year B.Tech IT student blending modern frontend technologies with thoughtful UI/UX principles to build interfaces people actually enjoy using.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-[#14121a] hover:bg-[#1f3bb3] text-[#faf8f5] rounded-full pl-6 pr-2 py-2 transition-colors duration-300"
            >
              <span className="font-body text-sm font-medium">View selected work</span>
              <span className="w-9 h-9 rounded-full bg-[#faf8f5] text-[#14121a] flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-500">
                <ArrowDownRight className="w-4 h-4" />
              </span>
            </a>
            <a href="#contact" className="font-body text-sm text-[#14121a] link-underline">
              or get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
