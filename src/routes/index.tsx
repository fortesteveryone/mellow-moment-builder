import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLu5mUmi6luUgJxlxS38lB8dnZCXNuUZBWrqoonn-uq6veTVbgNjAgX_JAhdSXgzdOphyQFPzEgua9QQ-Bsc911Q71ghi2j0KoRO33jgGCrAUBwzQ_vNiYn573FRfuApzCERVTRlMezLIhptoqooYRjsSTK0q-loDxhgqEbfQ0fq_CSWyNh7qmrjmRomjGI2gC50T-QBeT4MBO7qqZHNchOdtc-snK-v4v9NHD4DKS5NUaK6KaMSmXqK_OI";

const LOGO_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLsPfsm2MxJ_FFvxjX0rS4bcQiFwrb7688cTBsj6ex8w1YYkpM4GXzDCip_SORJzE3KzLH3UjJXp46DfrCVe9WBTgg6Xu6JINZLkZG3GiOuDhv84BCtY8O8J48lxwLjcUTK4UVR_-Evbll79BqU8mzHMfUJAg10gaeEPgiWuGjeQCyZuvTEMHDDcxqIKy61Wi7AVscWeNxTynKwXUWS5Dazl9oqHp859c1zXInnbaOukv9AqpCUNZOe4TVM";

const WHATSAPP_URL = "https://wa.me/440000000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Whitmore Saudi Connect | Premium Saudi Company Formation",
      },
      {
        name: "description",
        content:
          "Premium consultancy for 100% foreign-owned company formation in Saudi Arabia. End-to-end investment licensing and registration support.",
      },
      { property: "og:title", content: "Whitmore Saudi Connect" },
      {
        property: "og:description",
        content:
          "Premium consultancy for 100% foreign-owned company formation in Saudi Arabia.",
      },
    ],
  }),
  component: Index,
});

function MS({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden>
      {name}
    </span>
  );
}

function Index() {
  return (
    <div
      className="min-h-screen bg-[#fbf9f4] font-sans text-[#1b1c19] selection:bg-[#C6A45D]/30"
      style={{ scrollBehavior: "smooth" }}
    >
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Packages />
        <Process />
        <WhyUs />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { l: "Home", h: "#home" },
    { l: "Services", h: "#services" },
    { l: "Packages", h: "#packages" },
    { l: "Process", h: "#process" },
    { l: "Contact", h: "#contact" },
  ];
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b-4 border-[#071B36] bg-white">
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 md:gap-8 md:px-12 lg:px-20 lg:py-5">
        <a href="#home" className="flex min-w-0 items-center">
          <img
            src={LOGO_IMG}
            alt="Whitmore Saudi Connect"
            className="h-10 w-auto shrink-0 object-contain sm:h-12 md:h-14"
          />
        </a>
        <div className="hidden items-center justify-center gap-6 xl:gap-10 lg:flex">
          {nav.map((n, i) => (
            <a
              key={n.h}
              href={n.h}
              className={
                "pb-1 text-[14px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-[#C6A45D] " +
                (i === 0
                  ? "border-b-4 border-[#C6A45D] font-black text-[#071B36]"
                  : "text-[#44474d]")
              }
            >
              {n.l}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-[#071B36] px-4 py-3 text-[12px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C6A45D] hover:text-[#071B36] sm:inline-flex md:px-6 md:py-3.5 md:text-[13px] lg:px-8 lg:py-4"
          >
            <MS name="chat" />
            <span>Consult</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#071B36] lg:hidden"
            aria-label="Toggle menu"
          >
            <MS name={open ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t-2 border-[#071B36]/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.h}
                href={n.h}
                onClick={() => setOpen(false)}
                className="border-b border-[#071B36]/10 py-3 text-sm font-bold uppercase tracking-widest text-[#071B36]"
              >
                {n.l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="hero-overlay absolute inset-0 z-10" />
        <img
          src={HERO_IMG}
          alt="Riyadh Financial District"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 text-white md:px-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block bg-[#C6A45D] px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-[#071B36]">
            Vision 2030 Partner
          </div>
          <h1 className="mb-8 font-display text-5xl font-extrabold uppercase leading-[1.05] sm:text-6xl md:text-7xl lg:text-[72px] lg:leading-[1.1]">
            Establish Your{" "}
            <span className="text-[#C6A45D]">Empire</span> In Saudi Arabia
          </h1>
          <p className="mb-12 max-w-2xl border-l-4 border-[#C6A45D] pl-8 text-lg leading-relaxed text-white/80 sm:text-xl">
            The premier gateway for 100% foreign-owned corporate entities. We
            handle the complexity of MISA licensing, registration, and
            institutional setup with uncompromising precision.
          </p>
          <div className="mb-20 flex flex-col gap-6 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-[#C6A45D] px-10 py-5 text-[13px] font-black uppercase tracking-widest text-[#071B36] transition-all hover:bg-white"
            >
              Request Strategic Briefing
            </a>
            <a
              href="#packages"
              className="border-2 border-white/30 px-10 py-5 text-center text-[13px] font-black uppercase tracking-widest text-white transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]"
            >
              Our Packages
            </a>
          </div>
          <div className="grid grid-cols-2 gap-12 border-t-2 border-white/10 pt-12 md:grid-cols-4">
            {[
              ["100%", "Foreign Ownership"],
              ["03 Days", "Fast-Track Setup"],
              ["Elite", "Consultancy Model"],
              ["Global", "Investor Network"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="mb-2 font-display text-3xl font-black text-[#C6A45D] sm:text-4xl">
                  {n}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  {l}
                </div>
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
  const items = [
    {
      icon: "account_balance",
      title: "Strategic Authority",
      body: "Navigating the nuances of the Saudi market with expert advice tailored to your specific business activities and long-term goals.",
    },
    {
      icon: "gavel",
      title: "Legal Framework",
      body: "Precision-focused preparation of all legal documentation, ensuring seamless compliance with Ministry of Investment requirements.",
    },
    {
      icon: "hub",
      title: "Institutional Access",
      body: "Dedicated account managers bridging the gap between your international headquarters and Saudi Arabian authorities.",
    },
  ];
  return (
    <section className="corporate-grid bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-[#071B36] sm:text-5xl md:text-[56px]">
              Architecting Your Saudi Expansion
            </h2>
            <p className="text-lg italic text-[#44474d] sm:text-xl">
              We provide the structural foundation for international
              corporations to thrive in the Kingdom's evolving economic
              landscape.
            </p>
          </div>
          <div className="h-2 w-48 bg-[#C6A45D]" />
        </div>
        <div className="grid border-2 border-[#071B36] md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={
                "group border-l-4 border-[#C6A45D] bg-white p-10 transition-all duration-300 hover:border-l-[12px] hover:bg-[#071B36]/[0.02] md:p-12 " +
                (i < items.length - 1 ? "md:border-r-2 md:border-r-[#071B36]" : "")
              }
            >
              <MS name={it.icon} className="mb-8 text-5xl text-[#071B36]" />
              <h3 className="mb-6 font-display text-2xl font-bold uppercase text-[#071B36] md:text-[28px]">
                {it.title}
              </h3>
              <p className="font-medium leading-relaxed text-[#44474d]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { icon: "badge", title: "Trade Name Reservation", body: "Expert assistance in securing your unique business identity across KSA." },
    { icon: "verified", title: "Investment License", body: "Comprehensive MISA license application and processing support." },
    { icon: "business", title: "Commercial Registry", body: "Full CR issuance management with Ministry of Commerce." },
    { icon: "corporate_fare", title: "Chamber Approval", body: "Securing necessary institutional approvals and memberships." },
    { icon: "article", title: "Application Filing", body: "Professional filing of all regulatory paperwork with authorities." },
    { icon: "receipt_long", title: "ZATCA Compliance", body: "Zakat, Tax, and Customs Authority registration support." },
    { icon: "assignment_ind", title: "GM Residency", body: "Strategic support for General Manager visas and residency." },
    { icon: "payments", title: "Corporate Banking", body: "Introductory assistance for corporate banking within Saudi Arabia." },
  ];
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#071B36] py-24 text-white md:py-32"
    >
      <div className="absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-20 bg-[#C6A45D]/5" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-20">
        <div className="mb-24 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-[56px]">
            Operational Capabilities
          </h2>
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#C6A45D]">
            Comprehensive Enterprise Support
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#071B36] p-10 transition-all duration-500 hover:bg-[#C6A45D]"
            >
              <MS
                name={s.icon}
                className="mb-6 text-4xl text-[#C6A45D] transition-colors group-hover:text-[#071B36]"
              />
              <h4 className="mb-4 font-display text-xl font-bold uppercase transition-colors group-hover:text-[#071B36]">
                {s.title}
              </h4>
              <p className="text-sm text-white/60 transition-colors group-hover:text-[#071B36]/80">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Packages ---------------- */
function Packages() {
  return (
    <section id="packages" className="bg-[#f5f3ee] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-[#071B36] sm:text-5xl md:text-[56px]">
            Elite Formation Tiers
          </h2>
          <p className="text-lg text-[#44474d] sm:text-xl">
            Select the engagement model that matches your strategic timeline.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl border-4 border-[#071B36] shadow-2xl md:grid-cols-2">
          {/* Enterprise */}
          <div className="flex flex-col border-b-4 border-[#071B36] bg-white p-10 md:border-b-0 md:border-r-4 md:p-16">
            <div className="mb-12">
              <h3 className="mb-4 font-display text-3xl font-black uppercase text-[#071B36]">
                Enterprise Standard
              </h3>
              <p className="mb-8 text-xs font-bold uppercase tracking-widest text-[#44474d]">
                Standard 30-Day Deployment
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-black text-[#071B36]">
                  £15,000
                </span>
              </div>
            </div>
            <ul className="mb-16 flex-grow space-y-6">
              {[
                "Full Corporate Consultancy",
                "MISA License Coordination",
                "Commercial Registration",
                "Institutional Bank Prep",
                "24/7 WhatsApp Support",
              ].map((it) => (
                <li key={it} className="flex gap-4 font-bold text-[#071B36]">
                  <MS name="check_box" className="text-[#C6A45D]" />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="w-full border-4 border-[#071B36] py-6 text-center text-sm font-black uppercase tracking-widest text-[#071B36] transition-all hover:bg-[#071B36] hover:text-white"
            >
              Enquire Now
            </a>
          </div>
          {/* Elite */}
          <div className="relative flex flex-col bg-[#071B36] p-10 text-white md:p-16">
            <div className="absolute right-6 top-6 bg-[#C6A45D] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#071B36] sm:right-10 sm:top-10 sm:px-6">
              Priority Fast-Track
            </div>
            <div className="mb-12 mt-12 sm:mt-0">
              <h3 className="mb-4 font-display text-3xl font-black uppercase text-[#C6A45D]">
                Elite Strategic
              </h3>
              <p className="mb-8 text-xs font-bold uppercase tracking-widest text-white/60">
                Priority 3-Day Executive Deployment
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-black text-[#C6A45D]">
                  £20,000
                </span>
              </div>
            </div>
            <ul className="mb-16 flex-grow space-y-6">
              {[
                "Priority Senior Consultation",
                "Urgent Documentation Review",
                "Accelerated MISA Processing",
                "Dedicated Senior Lead",
                "Global Partner Concierge",
              ].map((it) => (
                <li key={it} className="flex gap-4 font-bold text-white">
                  <MS name="bolt" className="text-[#C6A45D]" />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="w-full bg-[#C6A45D] py-6 text-center text-sm font-black uppercase tracking-widest text-[#071B36] transition-all hover:bg-white"
            >
              Secure Priority
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs font-bold uppercase tracking-widest text-[#44474d] opacity-60">
          Official government fees are additional to professional consultancy
          rates.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Strategic Intake", d: "Detailed assessment of corporate objectives and market alignment." },
    { n: "02", t: "Validation", d: "Rigorous verification of global credentials and legal standing." },
    { n: "03", t: "Execution", d: "Simultaneous filing across all relevant Saudi ministries." },
    { n: "04", t: "Deployment", d: "License issuance and commercial registry activation." },
    { n: "05", t: "Continuity", d: "Post-formation support for banking and executive residency." },
  ];
  return (
    <section id="process" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20">
        <h2 className="mb-24 text-center font-display text-4xl font-bold uppercase tracking-tight text-[#071B36] sm:text-5xl md:text-[56px]">
          Strategic Deployment Roadmap
        </h2>
        <div className="grid border-t-8 border-[#071B36] lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={
                "group p-10 " +
                (i % 2 === 1 ? "bg-[#f5f3ee] " : "") +
                (i < steps.length - 1 ? "border-b-2 border-[#071B36] lg:border-b-0 lg:border-r-2 " : "")
              }
            >
              <div className="mb-6 font-display text-6xl font-black text-[#C6A45D] opacity-30 transition-opacity group-hover:opacity-100">
                {s.n}
              </div>
              <h4 className="mb-4 font-display text-xl font-bold uppercase text-[#071B36]">
                {s.t}
              </h4>
              <p className="text-sm font-medium text-[#44474d]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const assets = [
    { i: "passport", l: "Global Passports" },
    { i: "history_edu", l: "Proposed Nomenclature" },
    { i: "analytics", l: "Activity Definitions" },
    { i: "group", l: "Shareholder Structure" },
    { i: "map", l: "Regional Presence" },
    { i: "verified_user", l: "Notarized POA" },
  ];
  const standards = [
    { t: "Unrivaled Precision", d: "Eliminating administrative friction through deep institutional intelligence." },
    { t: "Senior Advisory", d: "You deal with partners, not assistants. Expert guidance at every touchpoint." },
    { t: "Confidentiality", d: "Discrete handling of high-value corporate expansions and investor data." },
    { t: "Velocity", d: "Harnessing priority channels to ensure market entry at the speed of business." },
  ];
  return (
    <section className="bg-[#071B36] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:px-20 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <h2 className="mb-12 border-l-8 border-[#C6A45D] pl-6 font-display text-4xl font-bold uppercase sm:text-5xl md:pl-8">
            Prerequisite Assets
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {assets.map((a) => (
              <div
                key={a.l}
                className="group flex items-center gap-6 border-2 border-white/10 p-6 transition-all hover:border-[#C6A45D]"
              >
                <MS
                  name={a.i}
                  className="text-3xl text-[#C6A45D] transition-transform group-hover:scale-110"
                />
                <span className="text-sm font-bold uppercase tracking-widest">
                  {a.l}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 overflow-hidden bg-[#C6A45D] p-10 text-[#071B36] shadow-2xl md:p-16 lg:order-2">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-[#071B36]/5 bg-[#071B36]/5" />
          <h2 className="relative mb-12 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
            The Whitmore Standard
          </h2>
          <div className="relative z-10 space-y-10">
            {standards.map((s) => (
              <div key={s.t}>
                <h4 className="mb-2 text-lg font-black uppercase tracking-widest text-[#071B36]">
                  {s.t}
                </h4>
                <p className="font-medium">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="corporate-grid bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:px-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-10 font-display text-4xl font-bold uppercase leading-none text-[#071B36] sm:text-5xl md:text-[56px]">
            Initiate Your
            <br />
            <span className="text-[#C6A45D]">Onboarding</span>
          </h2>
          <p className="mb-16 max-w-lg text-lg font-medium text-[#44474d] sm:text-xl">
            Our consultants are available for immediate consultation across our
            global offices. Scan to connect instantly or utilize our formal
            intake form.
          </p>
          <div className="mb-16 grid grid-cols-3 gap-6 md:gap-10">
            {["WhatsApp Direct", "Instagram", "TikTok"].map((l) => (
              <div key={l} className="group text-center">
                <div className="mb-4 flex aspect-square w-full items-center justify-center border-4 border-[#071B36] p-4 transition-all group-hover:border-[#C6A45D]">
                  <MS
                    name="qr_code_scanner"
                    className="text-5xl text-[#071B36] opacity-20 sm:text-6xl"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#071B36] sm:text-xs">
                  {l}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <a
              href="tel:+440000000000"
              className="group flex items-center gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="call" />
              </div>
              <span className="font-display text-lg font-bold uppercase tracking-tight text-[#071B36] sm:text-xl">
                +44 XXX XXX XXXX
              </span>
            </a>
            <a
              href="mailto:info@whitmoresaudi.com"
              className="group flex items-center gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="mail" />
              </div>
              <span className="font-display text-base font-bold uppercase tracking-tight text-[#071B36] sm:text-xl">
                info@whitmoresaudi.com
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
          }}
          className="border-b-[16px] border-[#C6A45D] bg-[#071B36] p-10 text-white shadow-2xl md:p-16"
        >
          <h3 className="mb-12 font-display text-3xl font-black uppercase text-[#C6A45D]">
            Formal Inquiry
          </h3>
          <div className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <FormField label="Corporate Name" placeholder="e.g. Whitmore Global" required />
              <FormField label="Email Address" type="email" placeholder="office@company.com" required />
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <FormField label="Phone Number" type="tel" placeholder="+44 ..." required />
              <div>
                <label className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                  Selected Package
                </label>
                <select
                  className="w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-white focus:border-[#C6A45D] focus:outline-none focus:ring-0"
                >
                  <option className="bg-[#071B36]">Enterprise Standard</option>
                  <option className="bg-[#071B36]">Elite Strategic (Fast-Track)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                Proposed Activity
              </label>
              <textarea
                rows={3}
                placeholder="Provide a brief overview of intended business activities..."
                className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C6A45D] py-6 text-sm font-black uppercase tracking-[0.3em] text-[#071B36] transition-all hover:bg-white"
            >
              Submit Strategic Inquiry
            </button>
            {submitted && (
              <p className="mt-6 text-center text-sm font-black uppercase tracking-widest text-[#C6A45D]">
                Transmission Successful. A senior consultant will respond within
                2 hours.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0"
      />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "Corporate Sovereignty: 100% Ownership", a: "Under Ministry of Investment (MISA) frameworks, international entities are permitted 100% equity ownership across the vast majority of commercial and industrial sectors, negating the requirement for local sponsorship." },
    { q: "Fast-Track Engagement Protocol", a: "Our Elite tier utilizes priority processing queues and pre-verified document templates to achieve MISA licensure within 72 business hours, contingent on stakeholder response speed." },
    { q: "Fee Transparency Structure", a: "Our engagement fees cover high-level consultancy, legal oversight, and administrative handling. Government levies, municipal fees, and license costs are invoiced at cost directly from the respective authorities." },
    { q: "Remote Deployment Capabilities", a: "Initialization of the license and registration process can be conducted via digital proxy. Physical presence is typically only required during the final stages of corporate bank account activation and biometric residency processing." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#f5f3ee] py-24 md:py-32">
      <div className="mx-auto max-w-[900px] px-6 md:px-20">
        <h2 className="mb-20 text-center font-display text-4xl font-bold uppercase tracking-tight text-[#071B36] sm:text-5xl md:text-[56px]">
          Essential Intelligence
        </h2>
        <div className="border-t-4 border-[#071B36]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b-2 border-[#071B36]/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between py-8 text-left transition-colors hover:text-[#C6A45D]"
                >
                  <span className="font-display text-base font-black uppercase text-[#071B36] sm:text-xl">
                    {f.q}
                  </span>
                  <MS
                    name={isOpen ? "remove" : "add"}
                    className="text-[#071B36] group-hover:text-[#C6A45D]"
                  />
                </button>
                <div
                  className={
                    "overflow-hidden transition-all duration-300 ease-in-out " +
                    (isOpen ? "max-h-96" : "max-h-0")
                  }
                >
                  <p className="pb-10 font-medium leading-relaxed text-[#44474d]">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[#071B36] pt-24 text-white">
      <div className="mx-auto mb-20 grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:gap-20 md:px-20">
        <div className="md:col-span-2">
          <div className="mb-10">
            <img
              src={LOGO_IMG}
              alt="Whitmore Saudi Connect"
              className="h-14 w-auto brightness-0 invert sm:h-16"
            />
          </div>
          <p className="mb-12 max-w-sm text-xs font-medium uppercase leading-relaxed tracking-widest text-white/60">
            Bridging global capital with Saudi opportunity through architectural
            precision and uncompromising service standards.
          </p>
          <div className="flex gap-8">
            <MS name="language" className="cursor-pointer text-white/40 transition-colors hover:text-[#C6A45D]" />
            <MS name="share" className="cursor-pointer text-white/40 transition-colors hover:text-[#C6A45D]" />
            <MS name="verified" className="cursor-pointer text-white/40 transition-colors hover:text-[#C6A45D]" />
          </div>
        </div>
        <FooterCol
          title="Architecture"
          items={[
            ["Consultancy", "#services"],
            ["Formations", "#packages"],
            ["Deployment", "#process"],
            ["Inquiry", "#contact"],
          ]}
        />
        <FooterCol
          title="Governance"
          items={[
            ["Privacy Protocol", "#"],
            ["Terms of Engagement", "#"],
            ["Legal Mandate", "#"],
            ["Compliance", "#"],
          ]}
        />
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 border-t border-white/10 px-6 py-12 md:flex-row md:px-20">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Whitmore Saudi Connect. Authorized by Ministry of Investment.
        </p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#C6A45D]">
          <span>Riyadh</span>
          <span>London</span>
          <span>Dubai</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h5 className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#C6A45D]">
        {title}
      </h5>
      <ul className="space-y-5">
        {items.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              className="text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}