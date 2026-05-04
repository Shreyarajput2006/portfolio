import React from "react";
import { Mail, Linkedin, ArrowUp } from "lucide-react";
import { personalInfo } from "../../mock";

const Footer = () => {
  return (
    <footer className="relative bg-[#14121a] text-[#faf8f5] pt-20 pb-10">
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-[#2e2235]">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a89cb3] mb-6">
              — Available for opportunities
            </div>
            <h3 className="font-display text-5xl md:text-7xl leading-[0.98]">
              Have a project in{" "}
              <span className="font-serif-accent italic text-[#7a8eff]">
                mind?
              </span>
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 mt-8 font-display text-2xl link-underline"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3] mb-4">
                Navigate
              </div>
              <ul className="space-y-3 font-body text-sm">
                <li><a href="#about" className="link-underline">About</a></li>
                <li><a href="#skills" className="link-underline">Skills</a></li>
                <li><a href="#work" className="link-underline">Selected Work</a></li>
                <li><a href="#education" className="link-underline">Education</a></li>
                <li><a href="#contact" className="link-underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3] mb-4">
                Elsewhere
              </div>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 link-underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 link-underline"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#a89cb3]">
            © {new Date().getFullYear()} {personalInfo.name} — Crafted with care.
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#a89cb3]">
            Surat · IST · designer-developer
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2e2235] hover:border-[#7a8eff] transition-colors font-mono text-[11px] uppercase tracking-widest"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
