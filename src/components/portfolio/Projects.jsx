import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../mock";

const Projects = () => {
  return (
    <section id="work" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f3bb3]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5b3b6e]">
            03 — Selected Work
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <h2 className="lg:col-span-8 font-display text-4xl md:text-6xl leading-[1.05] text-[#14121a]">
            Projects I'm{" "}
            <span className="font-serif-accent italic text-[#1f3bb3]">
              proud
            </span>{" "}
            of — building, shipping, learning.
          </h2>
          <p className="lg:col-span-4 font-body text-[#3a2f44] leading-relaxed">
            A small, focused selection — each project taught me something new
            about design systems, architecture or user behaviour.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((p, idx) => {
            const isReversed = idx % 2 === 1;
            const accentColor = p.accent === "royal" ? "#1f3bb3" : "#5b3b6e";
            return (
              <article
                key={p.id}
                className="group grid lg:grid-cols-12 gap-8 items-stretch border border-[#e7e0d6] rounded-3xl p-5 bg-white hover:border-[#1f3bb3] transition-colors duration-500"
              >
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-[#2e2235]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-40"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor} 0%, transparent 60%)`,
                      }}
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#faf8f5]"
                        style={{ background: accentColor }}
                      >
                        {p.year}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#faf8f5] text-[#14121a]">
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 flex flex-col justify-between p-3 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#5b3b6e]">
                        {p.category}
                      </span>
                      <span className="font-mono text-[11px] text-[#5b3b6e]">
                        0{idx + 1} / 0{projects.length}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl md:text-5xl text-[#14121a] leading-tight">
                      {p.title}
                    </h3>
                    <p className="font-serif-accent italic text-xl text-[#5b3b6e] mt-1">
                      {p.subtitle}
                    </p>

                    <p className="font-body text-[#3a2f44] mt-5 leading-relaxed">
                      {p.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {p.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-body text-sm text-[#3a2f44]"
                        >
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: accentColor }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 rounded-full bg-[#f3eee8] text-[#3a2f44] font-mono text-[11px]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 font-body text-sm text-[#14121a] group/btn">
                      <span className="link-underline">Case study</span>
                      <span className="w-8 h-8 rounded-full bg-[#14121a] text-[#faf8f5] flex items-center justify-center group-hover/btn:bg-[#1f3bb3] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
