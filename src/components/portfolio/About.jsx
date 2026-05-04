import React from "react";
import { aboutImage, personalInfo } from "../../mock";
import { Code2, Palette, Layers } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    text: "React, JavaScript, semantic HTML and modern CSS — building responsive, accessible interfaces that scale.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    text: "From user flows and wireframes to high-fidelity Figma screens — designing thoughtful, simple journeys.",
  },
  {
    icon: Layers,
    title: "Full-Stack Foundations",
    text: "Node, Express and MongoDB — connecting clean UIs to reliable APIs and well-structured data.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f3bb3]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5b3b6e]">
            01 — About
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#2e2235]">
                <img
                  src={aboutImage}
                  alt="Workspace"
                  className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14121a] via-[#14121a]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#faf8f5]">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#faf8f5]/70">
                    Currently studying
                  </div>
                  <div className="font-display text-xl mt-1">
                    P.P Savani University — IT Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[#14121a]">
              Designing with empathy.{" "}
              <span className="font-serif-accent italic text-[#1f3bb3]">
                Building
              </span>{" "}
              with intent.
            </h2>

            <p className="mt-8 font-body text-lg text-[#3a2f44] leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="mt-10 grid sm:grid-cols-1 gap-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group p-6 rounded-2xl border border-[#e7e0d6] bg-white hover:border-[#1f3bb3] transition-colors duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-[#f3eee8] group-hover:bg-[#1f3bb3] group-hover:text-[#faf8f5] text-[#1f3bb3] flex items-center justify-center transition-colors duration-300">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-[#14121a]">
                        {p.title}
                      </h3>
                      <p className="font-body text-sm text-[#3a2f44] mt-1.5 leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
