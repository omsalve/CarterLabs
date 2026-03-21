'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

// ─── Magnetic Button ──────────────────────────────────────────────────────────

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  { id: '01', label: 'Email', value: 'hello@carterlabs.in', href: 'mailto:hello@carterlabs.in' },
  { id: '02', label: 'Instagram', value: '@carterlabs', href: '#' },
  { id: '03', label: 'Location', value: 'Bandra, Mumbai', href: '#' },
];

// ─── Film grain ────────────────────────────────────────────────────────────────

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

// ─── Section Header ────────────────────────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} className="mb-16 md:mb-24">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[1px] origin-left mb-8"
        style={{
          background:
            'linear-gradient(to right, #dc2626 0%, #dc2626 15%, rgba(255,255,255,0.08) 60%, transparent 100%)',
        }}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs text-red-600 tracking-[0.3em] uppercase block mb-4"
          >
            004 // Contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[12vw] md:text-[7rem] leading-none text-white"
          >
            LET'S
            <br />
            <span className="text-zinc-700">TALK.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-body text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right md:mb-2"
        >
          We work with a curated few.
          <br />
          If you're Bandra, you're in the conversation.
        </motion.p>
      </div>
    </div>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', email: '', message: '' });

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const fields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Who are you?', span: 1 },
    { id: 'business', label: 'Business / Venture', type: 'text', placeholder: 'What do you run?', span: 1 },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Where do we reach you?', span: 2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-24 flex flex-col items-start gap-6"
          >
            {/* Red bleed top rule */}
            <div
              className="w-16 h-[1px]"
              style={{ background: 'linear-gradient(to right, #dc2626, transparent)' }}
            />
            <h2 className="font-heading text-5xl md:text-7xl text-white leading-none">
              MESSAGE
              <br />
              <span className="text-red-600">RECEIVED.</span>
            </h2>
            <p className="font-body text-zinc-500 text-sm leading-relaxed max-w-sm">
              We'll be in touch. If you're the right fit, you'll hear from us shortly.
            </p>
            <span className="font-mono text-[10px] text-zinc-700 tracking-[0.3em] uppercase mt-4">
              CL-004 // Bandra, Mumbai
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0"
          >
            {/* Name + Business grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {fields.filter(f => f.span === 1).map((field, i) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={form[field.id as keyof typeof form]}
                  focused={focused === field.id}
                  index={i}
                  isInView={isInView}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  onChange={(v) => setForm(p => ({ ...p, [field.id]: v }))}
                />
              ))}
            </div>

            {/* Email — full width */}
            {fields.filter(f => f.span === 2).map((field, i) => (
              <FormField
                key={field.id}
                field={field}
                value={form[field.id as keyof typeof form]}
                focused={focused === field.id}
                index={i + 2}
                isInView={isInView}
                onFocus={() => setFocused(field.id)}
                onBlur={() => setFocused(null)}
                onChange={(v) => setForm(p => ({ ...p, [field.id]: v }))}
              />
            ))}

            {/* Message textarea */}
            <div className="relative border-b border-white/[0.06] py-6">
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-red-600"
                animate={{ width: focused === 'message' ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <label className="font-mono text-[9px] text-red-600/70 tracking-[0.3em] uppercase block mb-3">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your venture."
                value={form.message}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-transparent font-body text-white text-sm md:text-base placeholder:text-zinc-700 outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="pt-10 flex items-center justify-between"
            >
              <span className="font-mono text-[9px] text-zinc-700 tracking-[0.3em] uppercase">
                CL-004 // Bandra, Mumbai
              </span>

              <MagneticButton>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden"
                >
                  {/* Red sweep on hover */}
                  <motion.span
                    className="absolute inset-0 bg-red-600 rounded-full"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <span className="relative z-10 w-[5px] h-[5px] rounded-full bg-red-600 group-hover:bg-white transition-colors duration-200 shrink-0" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    Send It
                  </span>
                  <span className="relative z-10 w-4 h-[1px] bg-red-600 group-hover:bg-white group-hover:w-6 transition-all duration-300 shrink-0" />
                </motion.button>
              </MagneticButton>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Form Field ────────────────────────────────────────────────────────────────

function FormField({
  field, value, focused, index, isInView, onFocus, onBlur, onChange,
}: {
  field: { id: string; label: string; type: string; placeholder: string };
  value: string;
  focused: boolean;
  index: number;
  isInView: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-b border-white/[0.06] py-6 pr-8"
    >
      {/* Animated red bottom rule on focus */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-red-600"
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <label className="font-mono text-[9px] text-red-600/70 tracking-[0.3em] uppercase block mb-3">
        {field.label}
      </label>
      <input
        type={field.type}
        required
        placeholder={field.placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-transparent font-body text-white text-sm md:text-base placeholder:text-zinc-700 outline-none"
      />
    </motion.div>
  );
}

// ─── Contact Methods Sidebar ───────────────────────────────────────────────────

function ContactSidebar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="space-y-0">
      {/* Top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full h-[1px] origin-left mb-10"
        style={{ background: 'linear-gradient(to right, #dc2626 0%, rgba(255,255,255,0.06) 100%)' }}
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono text-[9px] text-zinc-600 tracking-[0.3em] uppercase block mb-10"
      >
        Reach Us Directly
      </motion.span>

      {CONTACT_METHODS.map((method, i) => (
        <motion.div
          key={method.id}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="group relative border-b border-white/[0.04] py-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] text-red-600/60 tracking-[0.3em] uppercase block mb-2">
                {method.id} // {method.label}
              </span>
              <a
                href={method.href}
                className="font-body text-zinc-400 hover:text-white transition-colors duration-400 text-sm"
              >
                {method.value}
              </a>
            </div>
            <span className="font-mono text-[9px] text-zinc-800 group-hover:text-red-700 transition-colors duration-400 mt-1">
              ↗
            </span>
          </div>
        </motion.div>
      ))}

      {/* Availability pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="pt-10"
      >
        <div className="inline-flex items-center gap-3 border border-white/[0.06] rounded-full px-4 py-2">
          <span className="w-[6px] h-[6px] rounded-full bg-red-600 animate-pulse shrink-0" />
          <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase">
            Accepting new clients — 2025
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ['start end', 'end start'],
  });

  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '-3%']);

  return (
    <div
      ref={pageRef}
      className="relative bg-[#080808] text-white min-h-screen overflow-hidden"
    >
      {/* Film grain */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.35] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_SVG, backgroundSize: '200px 200px' }}
        aria-hidden
      />

      {/* Atmospheric red bleeds */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 30%, rgba(220,38,38,0.07) 0%, transparent 65%)',
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 100% 80%, rgba(220,38,38,0.05) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      {/* Ghost word */}
      <motion.div
        style={{ x: ghostX }}
        className="absolute bottom-0 left-0 pointer-events-none select-none z-[2] leading-none"
        aria-hidden
      >
        <span className="font-heading text-[22vw] text-white/[0.03] whitespace-nowrap">
          CONTACT.
        </span>
      </motion.div>

      {/* Top nav strip */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10 flex items-center justify-between">
        <MagneticButton>
          <a
            href="/"
            className="group inline-flex items-center gap-3 font-mono text-[9px] text-zinc-600 hover:text-white tracking-[0.3em] uppercase transition-colors duration-400"
          >
            <span className="w-4 h-[1px] bg-red-700 group-hover:w-8 transition-all duration-400 block" />
            Back
          </a>
        </MagneticButton>
        <span className="font-mono text-[9px] text-zinc-700 tracking-[0.3em] uppercase">
          CL-004 // Contact
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <SectionHeader />

        {/* Two-column layout — form left, sidebar right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16 md:gap-20">
          <ContactForm />
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}