import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../../mock";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatusMessage("Please fill out all fields before sending.");
      return;
    }
    setSubmitting(true);
    setStatusMessage("");
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("messages") || "[]");
      stored.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem("messages", JSON.stringify(stored));
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
      setStatusMessage("Message sent ✨ Thanks for reaching out — I'll get back soon!");
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f3bb3]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#5b3b6e]">
            05 — Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] text-[#14121a]">
              Let's build <span className="font-serif-accent italic text-[#1f3bb3]">something</span> that <span className="font-serif-accent italic text-[#5b3b6e]">feels right</span>.
            </h2>
            <p className="mt-8 font-body text-lg text-[#3a2f44] leading-relaxed max-w-xl">
              Open to internships, freelance UI/UX & frontend collaborations, and student team projects. Drop a message — I usually reply within a day.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e7e0d6] bg-white hover:border-[#1f3bb3] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f3eee8] group-hover:bg-[#1f3bb3] group-hover:text-[#faf8f5] text-[#1f3bb3] flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#5b3b6e]">Email</div>
                  <div className="font-body text-sm text-[#14121a] truncate">{personalInfo.email}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5b3b6e] group-hover:text-[#1f3bb3] transition-colors" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e7e0d6] bg-white hover:border-[#1f3bb3] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f3eee8] group-hover:bg-[#1f3bb3] group-hover:text-[#faf8f5] text-[#1f3bb3] flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#5b3b6e]">Phone</div>
                  <div className="font-body text-sm text-[#14121a]">{personalInfo.phone}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5b3b6e] group-hover:text-[#1f3bb3] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e7e0d6] bg-white hover:border-[#1f3bb3] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f3eee8] group-hover:bg-[#1f3bb3] group-hover:text-[#faf8f5] text-[#1f3bb3] flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#5b3b6e]">LinkedIn</div>
                  <div className="font-body text-sm text-[#14121a]">/shreya-rajput2006</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5b3b6e] group-hover:text-[#1f3bb3] transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-[#e7e0d6] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#f3eee8] text-[#1f3bb3] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#5b3b6e]">Based in</div>
                  <div className="font-body text-sm text-[#14121a]">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-[#14121a] text-[#faf8f5] relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#1f3bb3]/30 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5b3b6e]/30 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a89cb3]">Send a message</div>
                <h3 className="font-display text-2xl mt-2 mb-7">Tell me about your idea.</h3>

                <div className="space-y-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3]">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-2xl border border-[#2e2235] bg-[#1c1820] px-4 py-3 text-[#faf8f5] placeholder:text-[#5e5466] focus:outline-none focus:ring-2 focus:ring-[#1f3bb3]"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3]">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="mt-1.5 w-full rounded-2xl border border-[#2e2235] bg-[#1c1820] px-4 py-3 text-[#faf8f5] placeholder:text-[#5e5466] focus:outline-none focus:ring-2 focus:ring-[#1f3bb3]"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-[#a89cb3]">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are we building?"
                      rows={5}
                      className="mt-1.5 w-full rounded-2xl border border-[#2e2235] bg-[#1c1820] px-4 py-3 text-[#faf8f5] placeholder:text-[#5e5466] focus:outline-none focus:ring-2 focus:ring-[#1f3bb3] resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full rounded-full bg-[#faf8f5] px-5 py-3 text-[#14121a] font-medium transition-colors hover:bg-[#1f3bb3] hover:text-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : (
                    <span className="inline-flex items-center gap-2 justify-center w-full">
                      <Send className="w-4 h-4" /> Send message
                    </span>
                  )}
                </button>

                {statusMessage && (
                  <div className="mt-4 text-sm text-[#f8faf9] text-opacity-90">
                    {statusMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
