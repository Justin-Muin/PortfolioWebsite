import { useState } from "react";
import { Mail, Github, Linkedin, Copy, CheckCheck } from "lucide-react";
import { personalInfo } from "@/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (personalInfo.email === "[YOUR EMAIL]") return;
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mail client
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-zinc-900/30"
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader
            label="Contact"
            title="Let's talk."
            description="Open to internships, part-time roles, and project collaborations."
            centered
          />
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="max-w-lg mx-auto">
            {/* Email block */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-display text-lg font-medium text-zinc-900 dark:text-zinc-50 hover:text-accent dark:hover:text-accent-dark transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex-shrink-0 p-2 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {copied ? (
                    <CheckCheck size={16} className="text-emerald-500" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {personalInfo.linkedin &&
                personalInfo.linkedin !== "[LINKEDIN LINK]" && (
                  <Button
                    as="a"
                    href={personalInfo.linkedin}
                    external
                    variant="secondary"
                    size="lg"
                    className="w-full justify-center"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                )}
              {personalInfo.github &&
                personalInfo.github !== "[GITHUB LINK]" && (
                  <Button
                    as="a"
                    href={personalInfo.github}
                    external
                    variant="secondary"
                    size="lg"
                    className="w-full justify-center"
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                )}
            </div>

            {/* Quick compose mailto */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 text-center">
                Or send a quick message directly:
              </p>
              <ContactForm email={personalInfo.email} />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5"
        >
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Jane Smith"
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5"
        >
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="jane@company.com"
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Hi! I'm reaching out about..."
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark transition-colors resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-full justify-center"
      >
        <Mail size={16} />
        Send via Email Client
      </Button>
    </form>
  );
}
