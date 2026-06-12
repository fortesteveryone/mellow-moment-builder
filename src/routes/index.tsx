import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-riyadh.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menu,
  X,
  Check,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  Compass,
  FileText,
  Users,
  Shield,
  Zap,
  Building2,
  Briefcase,
  Landmark,
  CreditCard,
  Stamp,
  ScrollText,
  UserCheck,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Whitmore Saudi Connect — Premium Saudi Business Setup Consultancy",
      },
      {
        name: "description",
        content:
          "End-to-end consultancy for international investors setting up 100% foreign-owned companies in Saudi Arabia. Investment license, CR, tax, visa, and bank account opening support.",
      },
      {
        property: "og:title",
        content: "Whitmore Saudi Connect — Premium Saudi Business Setup",
      },
      {
        property: "og:description",
        content:
          "Premium consultancy helping international investors establish companies in Saudi Arabia.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/44000000000";

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-offwhite)] text-[var(--color-brand-ink)]">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Packages />
        <Process />
        <Documents />
        <WhyUs />
        <QRContact />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-brand-gold)]/20 bg-[var(--color-brand-navy)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-brand-navy)]/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex items-center gap-3 text-white">
          <Logo />
          <span className="font-display text-xl font-semibold tracking-wide">
            Whitmore <span className="text-[var(--color-brand-gold)]">Saudi Connect</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/80 transition hover:text-[var(--color-brand-gold)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-gold)] bg-[var(--color-brand-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-navy)] transition hover:bg-[var(--color-brand-gold-warm)]"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[var(--color-brand-navy)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-[var(--color-brand-gold)]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-brand-navy)]"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--color-brand-gold)]/60 bg-[var(--color-brand-royal)]">
      <span className="font-display text-lg font-semibold text-[var(--color-brand-gold)]">
        W
      </span>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--color-brand-navy)]">
      <img
        src={heroImage}
        alt="Abstract Riyadh skyline with Middle Eastern arches"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-navy)]/80 via-[var(--color-brand-navy)]/70 to-[var(--color-brand-navy)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-navy)] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 sm:pt-32 lg:pb-40 lg:pt-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-gold)]/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-brand-gold)]">
            <Sparkles className="h-3.5 w-3.5" /> Premium Saudi Consultancy
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Start Your{" "}
            <span className="text-[var(--color-brand-gold)]">
              100% Foreign-Owned
            </span>{" "}
            Company in Saudi Arabia
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Premium end-to-end consultancy for investment license, commercial
            registration, tax registration, visa support, and bank account
            opening assistance.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-7 py-3.5 text-sm font-semibold text-[var(--color-brand-navy)] shadow-lg shadow-[var(--color-brand-gold)]/20 transition hover:bg-[var(--color-brand-gold-warm)]"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation on WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)]"
            >
              View Packages <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "100% Foreign Ownership Support",
              "Fast-Track Package Available",
              "End-to-End Setup Assistance",
              "International Client Support",
            ].map((b) => (
              <div
                key={b}
                className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-medium text-white/85 backdrop-blur"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-gold)]" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Intro ---------------- */
function Intro() {
  const features = [
    {
      icon: Compass,
      title: "Strategic Guidance",
      body: "Clarity at every stage — from market entry strategy to post-setup coordination, tailored to international investors.",
    },
    {
      icon: FileText,
      title: "Document & Application Support",
      body: "Meticulous document review, preparation, and submission guidance handled by experienced consultants.",
    },
    {
      icon: Users,
      title: "Premium Client Coordination",
      body: "A dedicated consultant maintains direct communication, keeping you informed and supported throughout.",
    },
  ];
  return (
    <section className="bg-[var(--color-brand-offwhite)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Introduction</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Your Gateway to Business Ownership in Saudi Arabia
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gold-divider" />
          <p className="mt-8 text-base leading-relaxed text-[var(--color-brand-ink)]/70 sm:text-lg">
            Whitmore Saudi Connect helps international entrepreneurs and
            investors navigate the Saudi company formation process with clarity,
            speed, and professional guidance. From documentation to registration
            support, our consultancy process is designed for clients who want a
            smooth and premium experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-[var(--color-brand-navy)]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[var(--color-brand-gold)]/50 hover:shadow-xl hover:shadow-[var(--color-brand-navy)]/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-brand-navy)] text-[var(--color-brand-gold)] transition group-hover:bg-[var(--color-brand-gold)] group-hover:text-[var(--color-brand-navy)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-[var(--color-brand-navy)]">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand-ink)]/70">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">
      <span className="h-px w-8 bg-[var(--color-brand-gold)]" />
      {children}
      <span className="h-px w-8 bg-[var(--color-brand-gold)]" />
    </div>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { icon: Stamp, title: "Trade Name Reservation" },
    { icon: ScrollText, title: "Investment License Assistance" },
    { icon: Building2, title: "Commercial Registration / CR Support" },
    { icon: Landmark, title: "Chamber of Commerce Signature Approval Support" },
    { icon: ClipboardCheck, title: "Application Submission Guidance" },
    { icon: Briefcase, title: "Qiwa Registration Support" },
    { icon: UserCheck, title: "Muqeem Registration Support" },
    { icon: FileText, title: "Zakat & Tax Registration Support" },
    { icon: Shield, title: "General Manager Visa Assistance" },
    { icon: CreditCard, title: "Bank Account Opening Support" },
    { icon: Compass, title: "Business Setup Consultation" },
    { icon: ScrollText, title: "Document Coordination" },
  ];
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Our Consultancy Services
          </h2>
          <p className="mt-6 text-base text-[var(--color-brand-ink)]/65">
            A complete suite of support services for international clients
            establishing a presence in the Kingdom.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-brand-navy)]/10 bg-[var(--color-brand-navy)]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex items-start gap-4 bg-white p-6 transition hover:bg-[var(--color-brand-offwhite)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[var(--color-brand-gold)]/40 bg-[var(--color-brand-offwhite)] text-[var(--color-brand-navy)] transition group-hover:bg-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-gold)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-[var(--color-brand-navy)]">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Packages ---------------- */
function Packages() {
  const pkgs = [
    {
      name: "Enterprise Package",
      timeline: "30 Days",
      price: "£15,000",
      description:
        "A complete consultancy package for clients who want professional support throughout the Saudi company setup process.",
      includes: [
        "Initial consultation",
        "Document checklist",
        "Application preparation support",
        "Investment license assistance",
        "Commercial registration support",
        "Tax and registration guidance",
        "Bank account opening support",
        "WhatsApp consultant support",
      ],
      cta: "Choose Enterprise Package",
      featured: false,
    },
    {
      name: "Premium Fast-Track Package",
      timeline: "3 Days",
      price: "£20,000",
      description:
        "A priority consultancy package for urgent clients who require faster coordination, dedicated support, and premium handling.",
      includes: [
        "Priority consultation",
        "Urgent document review",
        "Fast-track coordination",
        "Dedicated consultant support",
        "Priority application preparation",
        "CR, tax, visa, and banking support guidance",
        "Direct WhatsApp communication",
      ],
      cta: "Choose Premium Package",
      featured: true,
    },
  ];
  return (
    <section id="packages" className="bg-[var(--color-brand-offwhite)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Packages</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Premium Saudi Company Formation Packages
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {pkgs.map((p) => (
            <div
              key={p.name}
              className={
                "relative rounded-3xl p-8 sm:p-10 transition " +
                (p.featured
                  ? "bg-[var(--color-brand-navy)] text-white shadow-2xl shadow-[var(--color-brand-navy)]/20 ring-1 ring-[var(--color-brand-gold)]/40"
                  : "border border-[var(--color-brand-navy)]/10 bg-white text-[var(--color-brand-ink)]")
              }
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-brand-gold)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-navy)]">
                  Most Popular
                </div>
              )}
              <div
                className={
                  "text-xs font-semibold uppercase tracking-[0.25em] " +
                  (p.featured ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-gold)]")
                }
              >
                {p.timeline}
              </div>
              <h3
                className={
                  "mt-3 font-display text-3xl font-semibold sm:text-4xl " +
                  (p.featured ? "text-white" : "text-[var(--color-brand-navy)]")
                }
              >
                {p.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span
                  className={
                    "font-display text-5xl font-semibold " +
                    (p.featured ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-navy)]")
                  }
                >
                  {p.price}
                </span>
              </div>
              <p
                className={
                  "mt-5 text-sm leading-relaxed " +
                  (p.featured ? "text-white/75" : "text-[var(--color-brand-ink)]/70")
                }
              >
                {p.description}
              </p>
              <div className={"my-8 h-px " + (p.featured ? "bg-white/10" : "bg-[var(--color-brand-navy)]/10")} />
              <ul className="space-y-3">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      className={
                        "mt-0.5 h-4 w-4 shrink-0 " +
                        (p.featured ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-navy)]")
                      }
                    />
                    <span className={p.featured ? "text-white/90" : "text-[var(--color-brand-ink)]/80"}>
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition " +
                  (p.featured
                    ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-gold-warm)]"
                    : "border border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white")
                }
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-[var(--color-brand-ink)]/55">
          Processing time may depend on authority approval, document readiness,
          client eligibility, and third-party/government processing timelines.
          Government fees are not included unless clearly stated in writing.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Book a Consultation", d: "Schedule a discovery call with a senior consultant via WhatsApp or the contact form." },
    { n: "02", t: "Document Review & Eligibility Check", d: "We review your documents and confirm eligibility against activity requirements." },
    { n: "03", t: "Application Preparation", d: "Our team prepares all applications and coordinates required signatures and approvals." },
    { n: "04", t: "Submission & Registration Support", d: "Guided submission for investment license, commercial registration, and tax." },
    { n: "05", t: "Final Setup Guidance", d: "Visa coordination, banking introductions, and post-setup advisory to operate smoothly." },
  ];
  return (
    <section id="process" className="bg-[var(--color-brand-navy)] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-5xl">
            How The Process Works
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-[var(--color-brand-gold)]/40 hover:bg-white/[0.06]"
            >
              <div className="font-display text-4xl font-semibold text-[var(--color-brand-gold)]">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-10 hidden h-px w-6 bg-[var(--color-brand-gold)]/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Documents ---------------- */
function Documents() {
  const docs = [
    "Passport copy",
    "Proposed company name",
    "Business activity details",
    "Shareholder information",
    "Contact details",
    "Existing company documents, if applicable",
    "Power of attorney, if required",
    "Additional documents based on activity type",
  ];
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow>Documents</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
              Basic Document Checklist
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-brand-ink)]/70">
              A clear list of the essentials needed to begin your Saudi company
              formation journey. Our consultants will guide you through every
              additional requirement specific to your business.
            </p>
            <p className="mt-6 rounded-xl border border-[var(--color-brand-gold)]/30 bg-[var(--color-brand-offwhite)] p-4 text-xs leading-relaxed text-[var(--color-brand-ink)]/70">
              <strong className="text-[var(--color-brand-navy)]">Note:</strong>{" "}
              Final document requirements may vary depending on business
              activity, ownership structure, and authority requirements.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {docs.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-brand-navy)]/10 bg-[var(--color-brand-offwhite)] p-4 text-sm transition hover:border-[var(--color-brand-gold)]/50"
              >
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--color-brand-navy)] text-[var(--color-brand-gold)]">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-[var(--color-brand-ink)]/80">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const items = [
    { icon: Sparkles, t: "Premium Client Experience", d: "Boutique-style service designed for serious investors and high-ticket clients." },
    { icon: Compass, t: "Clear Step-by-Step Guidance", d: "A transparent roadmap from first call through to final setup — no surprises." },
    { icon: Building2, t: "Saudi Market Entry Support", d: "Practical, current insight into the local landscape for international entrants." },
    { icon: MessageCircle, t: "Fast Communication Through WhatsApp", d: "Direct access to your consultant for prompt, dedicated responses." },
  ];
  return (
    <section className="bg-[var(--color-brand-offwhite)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Us</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Why Investors Choose Whitmore Saudi Connect
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="group rounded-2xl border border-[var(--color-brand-navy)]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-brand-navy)]/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-brand-navy)] text-[var(--color-brand-gold)]">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-brand-navy)]">
                {it.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-ink)]/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QR / Contact CTA ---------------- */
function QRContact() {
  const qrs = [
    { label: "WhatsApp", handle: "+44 XXX XXX XXXX" },
    { label: "Instagram", handle: "@whitmoresaudiconnect" },
    { label: "TikTok", handle: "@whitmoresaudiconnect" },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--color-brand-navy)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C6A45D 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Connect</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-white sm:text-5xl">
            Scan, Connect, Start Your Saudi Business Journey
          </h2>
          <p className="mt-6 text-base text-white/70">
            Scan the QR code to speak with our consultant directly or follow us
            on social media for updates.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {qrs.map((q) => (
            <div
              key={q.label}
              className="flex flex-col items-center rounded-2xl border border-[var(--color-brand-gold)]/30 bg-white/[0.04] p-8 text-center backdrop-blur"
            >
              <div className="grid aspect-square w-40 place-items-center rounded-xl border border-[var(--color-brand-gold)]/30 bg-white">
                <QRPlaceholder />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">
                {q.label}
              </div>
              <div className="mt-1 text-sm text-white/85">{q.handle}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactItem icon={MessageCircle} label="WhatsApp" value="+44 XXX XXX XXXX" href={WHATSAPP_URL} />
          <ContactItem icon={Phone} label="Phone" value="+44 XXX XXX XXXX" href="tel:+44000000000" />
          <ContactItem icon={Mail} label="Email" value="info@whitmoresaudiconnect.com" href="mailto:info@whitmoresaudiconnect.com" />
          <ContactItem icon={Globe} label="Website" value="www.whitmoresaudiconnect.com" href="#" />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof MessageCircle; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[var(--color-brand-gold)]/50 hover:bg-white/[0.06]"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)]">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-gold)]">{label}</div>
        <div className="truncate text-sm text-white/90">{value}</div>
      </div>
    </a>
  );
}

function QRPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" className="h-32 w-32 text-[var(--color-brand-navy)]" aria-hidden>
      <rect width="100" height="100" fill="white" />
      {/* corner squares */}
      {[
        [6, 6],
        [70, 6],
        [6, 70],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="24" height="24" fill="currentColor" />
          <rect x={x + 4} y={y + 4} width="16" height="16" fill="white" />
          <rect x={x + 8} y={y + 8} width="8" height="8" fill="currentColor" />
        </g>
      ))}
      {/* dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const cx = 36 + (i % 8) * 4;
        const cy = 36 + Math.floor(i / 8) * 4;
        if ((i * 7) % 3 === 0) return null;
        return <rect key={i} x={cx} y={cy} width="3" height="3" fill="currentColor" />;
      })}
    </svg>
  );
}

/* ---------------- Lead Form ---------------- */
function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Request Consultation</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Speak With a Senior Consultant
          </h2>
          <p className="mt-6 text-base text-[var(--color-brand-ink)]/70">
            Share a few details and our team will contact you to discuss your
            Saudi setup requirements.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-12 rounded-3xl border border-[var(--color-brand-navy)]/10 bg-[var(--color-brand-offwhite)] p-8 sm:p-10"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--color-brand-navy)] text-[var(--color-brand-gold)]">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-[var(--color-brand-navy)]">
                Thank you.
              </h3>
              <p className="mt-2 text-sm text-[var(--color-brand-ink)]/70">
                Our consultant will contact you shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" id="name"><Input id="name" required placeholder="Your full name" /></Field>
              <Field label="Email" id="email"><Input id="email" type="email" required placeholder="you@email.com" /></Field>
              <Field label="Phone / WhatsApp Number" id="phone"><Input id="phone" required placeholder="+44 ..." /></Field>
              <Field label="Country" id="country"><Input id="country" placeholder="United Kingdom" /></Field>
              <Field label="Preferred Package" id="package">
                <select id="package" className="flex h-10 w-full rounded-md border border-[var(--color-brand-navy)]/15 bg-white px-3 py-2 text-sm text-[var(--color-brand-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)]">
                  <option>Enterprise Package — £15,000</option>
                  <option>Premium Fast-Track Package — £20,000</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Business Activity" id="activity"><Input id="activity" placeholder="e.g. Consulting, Trading, Tech" /></Field>
              <div className="sm:col-span-2">
                <Field label="Message" id="message">
                  <Textarea id="message" rows={5} placeholder="Tell us a little about your plans..." />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-full bg-[var(--color-brand-navy)] text-base font-semibold text-white hover:bg-[var(--color-brand-royal)]"
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-navy)]">
        {label}
      </Label>
      {children}
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Can foreigners own 100% of a company in Saudi Arabia?",
      a: "In many sectors, foreign ownership may be available subject to activity type, eligibility, documentation, and authority approval.",
    },
    {
      q: "Is the 3-day package guaranteed?",
      a: "The Premium Fast-Track Package provides priority consultancy and coordination. Final processing may depend on document readiness, eligibility, and authority timelines.",
    },
    {
      q: "Are government fees included?",
      a: "Government or third-party fees are not included unless clearly stated in the package agreement.",
    },
    {
      q: "Can I start the process from outside Saudi Arabia?",
      a: "Yes, initial consultation and documentation guidance can begin remotely.",
    },
    {
      q: "Do you help with bank account opening?",
      a: "Yes, we provide guidance and support for the bank account opening process, subject to bank requirements.",
    },
    {
      q: "Do you assist with visa and tax registration?",
      a: "Yes, we provide support and guidance for relevant registration and visa-related steps.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--color-brand-offwhite)] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-[var(--color-brand-navy)] sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-[var(--color-brand-navy)]/10 bg-white px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-[var(--color-brand-navy)] hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-[var(--color-brand-ink)]/70">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--color-brand-gold)]/20 bg-[var(--color-brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-xl font-semibold">
              Whitmore <span className="text-[var(--color-brand-gold)]">Saudi Connect</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Premium consultancy helping international investors and foreign
            business owners establish their presence in the Kingdom of Saudi
            Arabia with confidence and clarity.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={WHATSAPP_URL} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)]" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)]" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:info@whitmoresaudiconnect.com" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)]" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-[var(--color-brand-gold)]">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>+44 XXX XXX XXXX</li>
            <li>info@whitmoresaudiconnect.com</li>
            <li>www.whitmoresaudiconnect.com</li>
            <li>@whitmoresaudiconnect</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-xs leading-relaxed text-white/55">
            Whitmore Saudi Connect provides consultancy, coordination, and
            support services. Final approvals, registrations, licenses, visas,
            tax registrations, and bank account opening are subject to relevant
            authority, bank, and third-party requirements.
          </p>
          <p className="mt-4 text-xs text-white/40">
            © {new Date().getFullYear()} Whitmore Saudi Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
