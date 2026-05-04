import React from "react";
import { Award } from "lucide-react";
import { certificates, education } from "../../mock";

const Credentials = () => {
  return (
    <section id="education" className="relative py-28 bg-[#14121a] text-[#faf8f5]">
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7a8eff]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a89cb3]">
            04 — Education & Credentials
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Education */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-10">
              Where I'm{" "}
              <span className="font-serif-accent italic text-[#a89cb3]">
                learning
              </span>
              .
            </h2>

            <div className="space-y-6">
              {education.map((e) => (
                <div
                  key={e.institution}
                  className="relative p-7 rounded-3xl border border-[#2e2235] bg-[#1c1820]"
                >
                  <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-[#1f3bb3] text-[#faf8f5] font-mono text-[10px] uppercase tracking-widest">
                    {e.period}
                  </div>
                  <div className="font-display text-2xl mt-2">
                    {e.institution}
                  </div>
                  <div className="font-body text-sm text-[#a89cb3] mt-2">
                    {e.degree}
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#2e2235]">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#a89cb3]">
                      {e.location}
                    </span>
                    <span className="font-display text-lg text-[#7a8eff]">
                      {e.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-10">
              Certifications &{" "}
              <span className="font-serif-accent italic text-[#7a8eff]">
                pursuits
              </span>
              .
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((c, i) => (
                <div
                  key={c.title}
                  className="group p-6 rounded-2xl border border-[#2e2235] bg-[#1c1820] hover:border-[#7a8eff] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#2e2235] group-hover:bg-[#1f3bb3] flex items-center justify-center transition-colors duration-300">
                      <Award className="w-5 h-5 text-[#faf8f5]" />
                    </div>
                    <span className="font-mono text-[11px] text-[#a89cb3]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg mt-5 leading-snug">
                    {c.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2e2235]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3]">
                      {c.issuer}
                    </span>
                    <span className="font-mono text-[11px] text-[#7a8eff]">
                      {c.year}
                    </span>
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

export default Credentials;
