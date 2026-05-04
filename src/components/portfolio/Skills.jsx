import React from "react";
import { skills } from "../../mock";

const SkillGroup = ({ title, items, accent }) => (
  <div className="p-7 rounded-3xl border border-[#e7e0d6] bg-white hover:bg-[#fbf6ee] transition-colors duration-300">
    <div className="flex items-center justify-between mb-6">
      <h3 className="font-display text-xl text-[#14121a]">{title}</h3>
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-white"
        style={{ background: accent }}
      >
        {items.length.toString().padStart(2, "0")}
      </span>
    </div>
    <ul className="space-y-5">
      {items.map((s) => (
        <li key={s.name}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-body text-sm text-[#14121a]">{s.name}</span>
            <span className="font-mono text-[11px] text-[#5b3b6e]">
              {s.level}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-[#f3eee8] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${s.level}%`, background: accent }}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const marqueeItems = [
  "React.js",
  "JavaScript",
  "Figma",
  "Node.js",
  "MongoDB",
  "UI / UX",
  "Python",
  "HTML / CSS",
  "Express",
  "MySQL",
  "Postman",
  "VS Code",
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#f3eee8]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f3bb3]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5b3b6e]">
            02 — Skills
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <h2 className="lg:col-span-7 font-display text-4xl md:text-6xl leading-[1.05] text-[#14121a]">
            A toolbox of{" "}
            <span className="font-serif-accent italic text-[#5b3b6e]">
              code
            </span>{" "}
            and{" "}
            <span className="font-serif-accent italic text-[#1f3bb3]">
              craft
            </span>
            .
          </h2>
          <p className="lg:col-span-5 font-body text-[#3a2f44] leading-relaxed">
            A balanced toolkit spanning frontend frameworks, backend basics,
            data and design tools — the ingredients I use to ship thoughtful
            digital products end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <SkillGroup
            title="Languages"
            items={skills.languages}
            accent="#1f3bb3"
          />
          <SkillGroup
            title="Frameworks"
            items={skills.frameworks}
            accent="#5b3b6e"
          />
          <SkillGroup
            title="Databases"
            items={skills.databases}
            accent="#2e2235"
          />
          <SkillGroup title="Tools" items={skills.tools} accent="#3a4ab5" />
        </div>

        <div className="mt-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5b3b6e] mb-4">
            — in my stack
          </div>
          <div className="relative overflow-hidden border-y border-[#e7e0d6] py-6">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((m, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-5xl text-[#14121a]"
                >
                  {m}{" "}
                  <span className="text-[#1f3bb3]">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
