import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/inquiry.functions";
import type { IconType } from "react-icons";
import {
  FiMessageCircle,
  FiX,
  FiMenu,
  FiCheckSquare,
  FiZap,
  FiPhone,
  FiMail,
  FiAward,
  FiCheckCircle,
  FiBriefcase,
  FiFileText,
  FiClipboard,
  FiUserCheck,
  FiCreditCard,
  FiShare2,
  FiHome,
} from "react-icons/fi";
import { LuLandmark, LuBuilding2 } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { QRCodeSVG } from "qrcode.react";
import { FaGavel, FaLinkedinIn, FaInstagram, FaWhatsapp, FaXTwitter, FaQuoteLeft } from "react-icons/fa6";
import logoImg from "@/assets/logo.png";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLu5mUmi6luUgJxlxS38lB8dnZCXNuUZBWrqoonn-uq6veTVbgNjAgX_JAhdSXgzdOphyQFPzEgua9QQ-Bsc911Q71ghi2j0KoRO33jgGCrAUBwzQ_vNiYn573FRfuApzCERVTRlMezLIhptoqooYRjsSTK0q-loDxhgqEbfQ0fq_CSWyNh7qmrjmRomjGI2gC50T-QBeT4MBO7qqZHNchOdtc-snK-v4v9NHD4DKS5NUaK6KaMSmXqK_OI";

const LOGO_IMG = logoImg;

const WHATSAPP_URL = "https://wa.me/447471451865";
const WHATSAPP_PHONE = "447471451865";
const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Whitmore Consultancy | Saudi Business Setup & Advisory",
      },
      {
        name: "description",
        content:
          "Whitmore Consultancy is a premium advisory firm helping international corporations, investors, and individuals establish, operate, and grow within Saudi Arabia.",
      },
      { property: "og:title", content: "Whitmore Consultancy" },
      {
        property: "og:description",
        content:
          "Premium Saudi-focused business setup and advisory consultancy for international clients.",
      },
    ],
  }),
  component: Index,
});

const ICON_MAP: Record<string, IconType> = {
  chat: FiMessageCircle,
  close: FiX,
  menu: FiMenu,
  check_box: FiCheckSquare,
  bolt: FiZap,
  call: FiPhone,
  mail: FiMail,
  account_balance: LuLandmark,
  gavel: FaGavel,
  hub: FiShare2,
  badge: FiAward,
  verified: FiCheckCircle,
  business: FiBriefcase,
  corporate_fare: LuBuilding2,
  article: FiFileText,
  receipt_long: FiClipboard,
  assignment_ind: FiUserCheck,
  payments: FiCreditCard,
  home: FiHome,
};

function MS({ name, className = "" }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? FiCheckCircle;
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden>
      <Icon />
    </span>
  );
}

/* Small Islamic 8-point star ornament — used as a subtle divider accent */
function StarOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path d="M20 3 L25 15 L37 20 L25 25 L20 37 L15 25 L3 20 L15 15 Z" />
      <path d="M20 9 L23 17 L31 20 L23 23 L20 31 L17 23 L9 20 L17 17 Z" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function Index() {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#fbf9f4] font-sans text-[#1b1c19] selection:bg-[#C6A45D]/30"
      style={{ scrollBehavior: "smooth" }}
    >
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Packages />
        <Residency />
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
    <header className="fixed left-0 top-0 z-50 w-full border-b-2 border-[#071B36] bg-white">
      <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,auto)_1fr_auto] items-center gap-3 px-5 py-3 sm:px-8 sm:py-4 md:gap-8 md:px-12 lg:px-20">
        <a href="#home" className="flex min-w-0 items-center">
          <img
            src={LOGO_IMG}
            alt="Whitmore Consultancy"
            style={{ margin: 0, padding: 0 }}
            className="-mx-2 block h-12 w-auto max-w-[180px] shrink-0 object-contain sm:h-14 sm:max-w-[220px] md:h-16 md:max-w-[260px]"
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
            className="hidden shrink-0 items-center gap-2 bg-[#071B36] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#C6A45D] hover:text-[#071B36] sm:inline-flex md:px-6 md:text-[13px]"
          >
            <MS name="chat" />
            <span>Consult</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="-mr-3 shrink-0 p-2 text-[#071B36] sm:-mr-4 md:-mr-6 lg:hidden"
            aria-label="Toggle menu"
          >
            <MS name={open ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t-2 border-[#071B36]/10 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col px-5 py-3 sm:px-8">
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
      className="relative flex min-h-[calc(100svh-68px)] items-center overflow-hidden py-14 pt-28 sm:min-h-[90vh] sm:py-20 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <div className="absolute inset-0 z-0">
        <div className="hero-overlay absolute inset-0 z-10" />
        <img
          src={HERO_IMG}
          alt="Riyadh Financial District"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Subtle Islamic geometric pattern overlay */}
      <div className="islamic-pattern pointer-events-none absolute inset-0 z-10 opacity-[0.07]" aria-hidden />
      {/* Decorative arch silhouette on the right */}
      <svg
        aria-hidden
        viewBox="0 0 200 400"
        className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-[80%] -translate-y-1/2 opacity-10 lg:block"
        fill="none"
        stroke="#C6A45D"
        strokeWidth="1"
      >
        <path d="M20 380 L20 140 Q20 20 100 20 Q180 20 180 140 L180 380" />
        <path d="M40 380 L40 150 Q40 40 100 40 Q160 40 160 150 L160 380" />
      </svg>
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 text-white sm:px-8 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16">
          <div className="max-w-4xl min-w-0">
          <div className="mb-5 inline-block max-w-full bg-[#C6A45D] px-4 py-1.5 text-[11px] font-black uppercase leading-none tracking-[0.22em] text-[#071B36] sm:text-xs">
            Vision 2030 Aligned
          </div>
          <h1 className="mb-6 max-w-[12ch] break-words font-display text-[42px] font-extrabold uppercase leading-[1.02] text-white sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-[72px] lg:leading-[1.06]">
            Establish Your{" "}
            <span className="text-[#C6A45D]">Business</span> In Saudi Arabia
          </h1>
          <p className="mb-8 max-w-2xl border-l-4 border-[#C6A45D] pl-5 text-base leading-8 text-white/80 sm:mb-10 sm:pl-8 sm:text-xl">
            A trusted advisory partner for international corporations,
            investors, and individuals — guiding you through MISA licensing,
            registration, and institutional setup in Saudi Arabia.
          </p>
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:gap-5 lg:mb-16">
            <a
              href="#contact"
              className="flex min-h-14 items-center justify-center bg-[#C6A45D] px-5 py-4 text-center text-[12px] font-black uppercase leading-5 tracking-[0.14em] text-[#071B36] transition-all hover:bg-white sm:px-8"
            >
              Request Strategic Briefing
            </a>
            <a
              href="#packages"
              className="flex min-h-14 items-center justify-center border-2 border-white/30 px-5 py-4 text-center text-[12px] font-black uppercase leading-5 tracking-[0.14em] text-white transition-all hover:border-[#C6A45D] hover:text-[#C6A45D] sm:px-8"
            >
              Our Packages
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 border-t-2 border-white/10 pt-8 sm:gap-8 sm:pt-10 md:grid-cols-4">
            {[
              ["100%", "Foreign Ownership"],
              ["Fast-Track", "Advisory Support"],
              ["Elite", "Consultancy Model"],
              ["Global", "Investor Network"],
            ].map(([n, l]) => (
              <div key={l} className="min-w-0">
                <div className="mb-2 font-display text-2xl font-black text-[#C6A45D] sm:text-4xl">
                  {n}
                </div>
                <div className="break-words text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/60 md:whitespace-nowrap md:tracking-[0.1em]">
                  {l}
                </div>
              </div>
            ))}
          </div>
          </div>
          <aside className="hidden lg:block">
            <div className="relative border border-[#C6A45D]/40 bg-[#071B36]/70 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-md xl:p-7">
              <div className="absolute -top-3 left-6 bg-[#C6A45D] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#071B36]">
                Direct Line
              </div>
              <div className="mb-5 mt-2">
                <div className="font-display text-xl font-bold leading-tight text-white xl:text-2xl">
                  Speak with a<br />
                  <span className="text-[#C6A45D]">Senior Advisor</span>
                </div>
                <div className="mt-2 text-[12px] leading-5 text-white/60">
                  Scan to start a confidential consultation on WhatsApp — typical reply within the hour.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0 bg-white p-2.5">
                  <QRCodeSVG
                    value={buildWhatsAppUrl(
                      "Hello Whitmore Consultancy, I'd like a strategic briefing on company formation in Saudi Arabia.",
                    )}
                    size={108}
                    bgColor="#ffffff"
                    fgColor="#071B36"
                    level="M"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                    Or call
                  </div>
                  <a
                    href="tel:+447471451865"
                    className="mt-1 block font-display text-lg font-bold text-white transition-colors hover:text-[#C6A45D]"
                  >
                    +44 7471 451865
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      "Hello Whitmore Consultancy, I'd like a strategic briefing on company formation in Saudi Arabia.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 border border-[#C6A45D] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#C6A45D] transition-colors hover:bg-[#C6A45D] hover:text-[#071B36]"
                  >
                    <FaWhatsapp /> Chat now
                  </a>
                </div>
              </div>
            </div>
          </aside>
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
    <section className="corporate-grid bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-5 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
              Architecting Your Saudi Expansion
            </h2>
            <p className="text-base italic leading-8 text-[#44474d] sm:text-xl">
              We provide the structural foundation for international
              corporations and individuals to thrive in the Kingdom's
              evolving economic landscape.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[#C6A45D]">
            <span className="h-px w-16 bg-[#C6A45D] sm:w-28" />
            <StarOrnament className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="h-px w-16 bg-[#C6A45D] sm:w-28" />
          </div>
        </div>
        <div className="grid border-2 border-[#071B36] md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={
                "group border-l-4 border-[#C6A45D] bg-white p-6 transition-all duration-300 hover:bg-[#071B36]/[0.02] sm:p-8 lg:p-10 " +
                (i < items.length - 1 ? "md:border-r-2 md:border-r-[#071B36]" : "")
              }
            >
              <MS name={it.icon} className="mb-6 text-4xl text-[#071B36] sm:text-5xl" />
              <h3 className="mb-4 break-words font-display text-xl font-bold uppercase leading-tight text-[#071B36] sm:text-2xl">
                {it.title}
              </h3>
              <p className="font-medium leading-7 text-[#44474d]">
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
    { icon: "business", title: "Business Setup Services", body: "End-to-end advisory for company formation, MISA licensing, trade name reservation, and commercial registration in Saudi Arabia." },
    { icon: "account_balance", title: "Government Liaison", body: "Coordinated engagement with Saudi ministries and authorities to streamline filings, approvals, and documentation." },
    { icon: "gavel", title: "Compliance & Regulatory", body: "Guidance on ZATCA registration, GOSI, labour rules, and ongoing corporate compliance obligations." },
    { icon: "article", title: "New Rules Advisory", body: "Up-to-date briefings on evolving Saudi investment policy, sector reforms, and regulatory changes." },
    { icon: "hub", title: "Growth Support", body: "Strategic support for expansion, partnerships, market entry, and operational scaling within the Kingdom." },
    { icon: "verified", title: "Comprehensive Support", body: "Continuity through corporate banking introductions, executive residency coordination, and post-formation advisory." },
  ];
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#071B36] py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="absolute right-0 top-0 hidden h-full w-1/3 -skew-x-12 translate-x-20 bg-[#C6A45D]/5 sm:block" />
      <div className="islamic-pattern pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 break-words font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl lg:text-[56px]">
            Our Services
          </h2>
          <p className="text-xs font-bold uppercase leading-5 tracking-[0.22em] text-[#C6A45D] sm:text-sm sm:tracking-[0.3em]">
            Advisory for Setup, Compliance & Growth
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[#C6A45D]/70">
            <span className="h-px w-12 bg-[#C6A45D]/40" />
            <StarOrnament className="h-6 w-6" />
            <span className="h-px w-12 bg-[#C6A45D]/40" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={buildWhatsAppUrl(
                `Hello Whitmore Consultancy, I'm interested in your "${s.title}" service. Could you please share more details and the next steps?`
              )}
              target="_blank"
              rel="noreferrer"
              className="group relative block bg-[#071B36] p-6 transition-all duration-500 hover:bg-[#C6A45D] sm:p-8 lg:p-10"
            >
              <MS
                name={s.icon}
                className="mb-6 text-4xl text-[#C6A45D] transition-colors group-hover:text-[#071B36]"
              />
              <h4 className="mb-3 break-words font-display text-lg font-bold uppercase leading-tight transition-colors group-hover:text-[#071B36] sm:text-xl">
                {s.title}
              </h4>
              <p className="text-sm leading-6 text-white/60 transition-colors group-hover:text-[#071B36]/80">
                {s.body}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Residency ---------------- */
function Residency() {
  const pathways = [
    {
      n: "01",
      icon: "work",
      title: "Employment-Based Residency (Iqama)",
      body:
        "The most common pathway is securing employment with a Saudi employer or sponsor. Subject to official approval, your employer arranges the work visa and processes your residence permit, known as the Iqama. Once issued, an Iqama may allow you to open a local bank account, rent housing, and sponsor eligible family members under applicable regulations.",
    },
    {
      n: "02",
      icon: "diamond",
      title: "Premium Residency",
      body:
        "Saudi Arabia offers a Premium Residency program for qualifying investors, entrepreneurs, and high-net-worth individuals — designed to allow holders to live, work, and own property without a traditional local sponsor. Premium Residency options are subject to current Saudi eligibility criteria, official fees, documentation requirements, and approval.",
    },
    {
      n: "03",
      icon: "apartment",
      title: "Real Estate Ownership",
      body:
        "Non-Saudis may, in certain cases, own residential real estate within the Kingdom — subject to approved areas, ownership controls, and current Saudi regulations. We advise on eligibility before any commitment.",
    },
    {
      n: "04",
      icon: "family_restroom",
      title: "Family Sponsorship",
      body:
        "Eligible dependents may be sponsored by a family member residing in Saudi Arabia. Family sponsorship depends on the sponsor's valid Iqama, eligibility under current rules, and official approval.",
    },
  ];
  return (
    <section id="residency" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-xs font-bold uppercase leading-5 tracking-[0.22em] text-[#C6A45D] sm:text-sm sm:tracking-[0.3em]">
            Pathways to the Kingdom
          </p>
          <h2 className="mb-5 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
            Residency Routes for Saudi Arabia
          </h2>
          <p className="text-base leading-7 text-[#44474d] sm:text-xl">
            The most common route is securing a sponsored work contract leading
            to an Iqama — but several structured pathways exist for
            professionals, investors, property owners, and families.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[#C6A45D]/70">
            <span className="h-px w-12 bg-[#C6A45D]/40" />
            <StarOrnament className="h-6 w-6" />
            <span className="h-px w-12 bg-[#C6A45D]/40" />
          </div>
        </div>
        <div className="grid border-2 border-[#071B36] md:grid-cols-2">
          {pathways.map((p, i) => (
            <div
              key={p.n}
              className={
                "group relative border-l-4 border-[#C6A45D] bg-white p-6 transition-all duration-300 hover:bg-[#071B36]/[0.02] sm:p-8 lg:p-10 " +
                (i % 2 === 0 ? "md:border-r-2 md:border-r-[#071B36] " : "") +
                (i < 2 ? "md:border-b-2 md:border-b-[#071B36]" : "")
              }
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-[#C6A45D] sm:text-4xl">
                  {p.n}
                </span>
              </div>
              <h3 className="mb-4 break-words font-display text-xl font-bold uppercase leading-tight text-[#071B36] sm:text-2xl">
                {p.title}
              </h3>
              <p className="font-medium leading-7 text-[#44474d]">{p.body}</p>
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
    <section id="packages" className="bg-[#f5f3ee] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
          <h2 className="mb-5 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
            Elite Formation Tiers
          </h2>
          <p className="text-base leading-7 text-[#44474d] sm:text-xl">
            Select the engagement model that matches your strategic timeline.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl border-2 border-[#071B36] shadow-2xl md:grid-cols-2 md:border-4">
          {/* Enterprise */}
          <div className="flex min-w-0 flex-col border-b-2 border-[#071B36] bg-white p-6 sm:p-8 md:border-b-0 md:border-r-4 lg:p-12 xl:p-16">
            <div className="mb-8">
              <h3 className="mb-4 break-words font-display text-2xl font-black uppercase leading-tight text-[#071B36] sm:text-3xl">
                Enterprise Standard
              </h3>
              <p className="mb-6 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#44474d]">
                Structured Advisory Engagement
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#071B36] sm:text-5xl">
                  £15,000
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#44474d]">
                  GBP
                </span>
              </div>
            </div>
            <ul className="mb-10 flex-grow space-y-4 sm:mb-12 sm:space-y-5">
              {[
                "Full Corporate Consultancy",
                "MISA License Coordination",
                "Commercial Registration",
                "Institutional Bank Prep",
                "Dedicated WhatsApp Support",
              ].map((it) => (
                <li key={it} className="flex min-w-0 items-start gap-3 font-bold leading-6 text-[#071B36]">
                  <MS name="check_box" className="shrink-0 pt-0.5 text-[#C6A45D]" />
                  <span className="min-w-0 break-words">{it}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="w-full border-2 border-[#071B36] px-4 py-4 text-center text-xs font-black uppercase leading-5 tracking-[0.16em] text-[#071B36] transition-all hover:bg-[#071B36] hover:text-white sm:py-5 sm:text-sm"
            >
              Request Quote
            </a>
          </div>
          {/* Elite */}
          <div className="flex min-w-0 flex-col bg-[#071B36] p-6 text-white sm:p-8 lg:p-12 xl:p-16">
            <div className="mb-8 w-fit max-w-full bg-[#C6A45D] px-4 py-2 text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-[#071B36] sm:px-6">
              Priority Engagement
            </div>
            <div className="mb-8">
              <h3 className="mb-4 break-words font-display text-2xl font-black uppercase leading-tight text-[#C6A45D] sm:text-3xl">
                Elite Strategic
              </h3>
              <p className="mb-6 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-white/60">
                Accelerated Application Coordination
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#C6A45D] sm:text-5xl">
                  £20,000
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                  GBP
                </span>
              </div>
            </div>
            <ul className="mb-10 flex-grow space-y-4 sm:mb-12 sm:space-y-5">
              {[
                "Priority Senior Consultation",
                "Urgent Documentation Review",
                "Expedited Application Handling",
                "Dedicated Senior Lead",
                "Global Partner Concierge",
              ].map((it) => (
                <li key={it} className="flex min-w-0 items-start gap-3 font-bold leading-6 text-white">
                  <MS name="bolt" className="shrink-0 pt-0.5 text-[#C6A45D]" />
                  <span className="min-w-0 break-words">{it}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="w-full bg-[#C6A45D] px-4 py-4 text-center text-xs font-black uppercase leading-5 tracking-[0.16em] text-[#071B36] transition-all hover:bg-white sm:py-5 sm:text-sm"
            >
              Discuss Package
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#44474d] opacity-60">
          Government fees, authority charges, and third-party costs are
          separate from professional consultancy fees. Timelines depend on
          document readiness, authority processing, and official approval.
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
    <section id="process" className="bg-[#f5f3ee] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <h2 className="mx-auto mb-12 max-w-3xl break-words text-center font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:mb-16 lg:text-[56px]">
          Strategic Deployment Roadmap
        </h2>
        <div className="grid border-t-4 border-[#071B36] lg:grid-cols-5 lg:border-t-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={
                "group p-6 sm:p-8 lg:p-6 xl:p-8 " +
                (i % 2 === 1 ? "bg-white " : "") +
                (i < steps.length - 1 ? "border-b-2 border-[#071B36] lg:border-b-0 lg:border-r-2 " : "")
              }
            >
              <div className="mb-5 font-display text-5xl font-black text-[#C6A45D] opacity-30 transition-opacity group-hover:opacity-100 sm:text-6xl">
                {s.n}
              </div>
              <h4 className="mb-3 break-words font-display text-lg font-bold uppercase leading-tight text-[#071B36] sm:text-xl">
                {s.t}
              </h4>
              <p className="text-sm font-medium leading-6 text-[#44474d]">{s.d}</p>
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
    <section className="bg-[#071B36] py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-20">
        <div className="order-2 lg:order-1">
          <h2 className="mb-8 border-l-4 border-[#C6A45D] pl-4 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:pl-6 lg:text-5xl">
            Prerequisite Assets
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {assets.map((a) => (
              <div
                key={a.l}
                className="group flex min-w-0 items-center gap-4 border-2 border-white/10 p-4 transition-all hover:border-[#C6A45D] sm:p-5"
              >
                <MS
                  name={a.i}
                  className="shrink-0 text-3xl text-[#C6A45D] transition-transform group-hover:scale-110"
                />
                <span className="min-w-0 break-words text-xs font-bold uppercase leading-5 tracking-[0.12em] sm:text-sm">
                  {a.l}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 overflow-hidden bg-[#C6A45D] p-6 text-[#071B36] shadow-2xl sm:p-8 lg:order-2 lg:p-12 xl:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-[#071B36]/5 bg-[#071B36]/5" />
          <h2 className="relative mb-8 break-words font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            The Whitmore Standard
          </h2>
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {standards.map((s) => (
              <div key={s.t}>
                <h4 className="mb-2 break-words text-base font-black uppercase leading-6 tracking-[0.12em] text-[#071B36] sm:text-lg">
                  {s.t}
                </h4>
                <p className="font-medium leading-7">{s.d}</p>
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
  const submit = useServerFn(submitInquiry);
  const initial = { name: "", email: "", phone: "", interest: "Business Setup", activity: "" };
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const update = (k: keyof typeof initial) => (v: string) => setForm((f) => ({ ...f, [k]: v }));
  return (
    <section id="contact" className="corporate-grid bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-20">
        <div className="min-w-0">
          <h2 className="mb-6 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
            Initiate Your
            <br />
            <span className="text-[#C6A45D]">Onboarding</span>
          </h2>
          <p className="mb-10 max-w-lg text-base font-medium leading-8 text-[#44474d] sm:text-xl lg:mb-12">
            Our consultants are available for immediate consultation across our
            global offices. Scan to connect instantly or utilize our formal
            intake form.
          </p>
          <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-6 lg:mb-12 lg:gap-8">
            {[
              { l: "WhatsApp Direct", url: WHATSAPP_URL },
              { l: "Instagram", url: "https://www.instagram.com/uzglobalservices?igsh=NGYyZTlpMW9iaGFx" },
              { l: "TikTok", url: "https://tiktok.com/@whitmoreconsultancy" },
            ].map(({ l, url }) => (
              <a
                key={l}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group min-w-0 text-center"
              >
                <div className="mb-3 flex aspect-square w-full items-center justify-center border-2 border-[#071B36] bg-white p-2 transition-all group-hover:border-[#C6A45D] sm:border-4 sm:p-3">
                  <QRCodeSVG
                    value={url}
                    bgColor="#ffffff"
                    fgColor="#071B36"
                    level="M"
                    className="h-full w-full"
                  />
                </div>
                <span className="block break-words text-[10px] font-black uppercase leading-4 tracking-[0.08em] text-[#071B36] sm:text-xs sm:tracking-[0.12em]">
                  {l}
                </span>
              </a>
            ))}
          </div>
          <div className="space-y-5">
            <a
              href="tel:+447471451865"
              className="group flex min-w-0 items-center gap-4 sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="call" />
              </div>
              <span className="min-w-0 break-words font-sans text-base font-bold text-[#071B36] sm:text-xl">
                +44 7471 451865
              </span>
            </a>
            <a
              href="mailto:info@whitmoreconsultancy.com"
              className="group flex min-w-0 items-center gap-4 sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="mail" />
              </div>
              <span className="min-w-0 break-all font-sans text-base font-semibold lowercase text-[#071B36] sm:text-xl">
                info@whitmoreconsultancy.com
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("loading");
            try {
              await submit({ data: form });
              setForm(initial);
              setStatus("success");
              setTimeout(() => setStatus("idle"), 5000);
            } catch (err) {
              console.error(err);
              setStatus("error");
            }
          }}
          className="min-w-0 border-b-8 border-[#C6A45D] bg-[#071B36] p-6 text-white shadow-2xl sm:p-8 md:border-b-[12px] lg:p-12 xl:p-16"
        >
          <h3 className="mb-8 break-words font-display text-2xl font-black uppercase leading-tight text-[#C6A45D] sm:text-3xl">
            Formal Inquiry
          </h3>
          <div className="space-y-7 sm:space-y-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <FormField label="Full Name / Company" placeholder="e.g. Whitmore Consultancy" required value={form.name} onChange={update("name")} />
              <FormField label="Email Address" type="email" placeholder="office@company.com" required value={form.email} onChange={update("email")} />
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <FormField label="Phone Number" type="tel" placeholder="+44 ..." required value={form.phone} onChange={update("phone")} />
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/50">
                  Area of Interest
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => update("interest")(e.target.value)}
                  className="w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
                >
                  <option className="bg-[#071B36]">Business Setup</option>
                  <option className="bg-[#071B36]">Compliance & Regulatory</option>
                  <option className="bg-[#071B36]">Residency Advisory</option>
                  <option className="bg-[#071B36]">Growth Support</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/50">
                Proposed Activity
              </label>
              <textarea
                rows={3}
                placeholder="Provide a brief overview of intended business activities..."
                value={form.activity}
                onChange={(e) => update("activity")(e.target.value)}
                className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#C6A45D] px-4 py-4 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#071B36] transition-all hover:bg-white disabled:opacity-60 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
            >
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </button>
            {status === "success" && (
              <p className="mt-5 text-center text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#C6A45D] sm:text-sm">
                Thank you. A senior consultant from Whitmore Consultancy will
                be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-5 border border-red-400/40 bg-red-500/10 px-4 py-3 text-center text-xs font-black uppercase leading-5 tracking-[0.12em] text-red-300 sm:text-sm">
                Something went wrong. Please try again in a moment or call us at +44 7471 451865.
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
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
      />
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "100% Foreign Ownership", a: "Under Ministry of Investment (MISA) frameworks, international entities may hold 100% equity ownership across most commercial and industrial sectors, subject to current eligibility and approval. Some regulated sectors retain specific conditions." },
    { q: "Fast-Track Advisory Support", a: "Our Priority engagement uses senior advisors, pre-prepared documentation templates, and accelerated coordination to move applications as quickly as possible. Final timelines depend on document readiness, authority processing, and official approval." },
    { q: "Fee Transparency", a: "Our engagement fees cover advisory, document handling, and coordination with authorities. Government fees, municipal charges, license costs, and third-party expenses are billed separately at cost." },
    { q: "Remote Onboarding", a: "Most of the licensing and registration process can be initiated remotely through digital proxy. Physical presence is typically required only for the final stages of corporate bank account activation and biometric residency processing." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#f5f3ee] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[980px] px-5 sm:px-8 md:px-12 lg:px-20">
        <h2 className="mb-12 break-words text-center font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:mb-16 lg:text-[56px]">
          Essential Intelligence
        </h2>
        <div className="border-t-4 border-[#071B36]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b-2 border-[#071B36]/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-[#C6A45D] sm:items-center sm:py-8"
                >
                  <span className="min-w-0 break-words font-display text-base font-black uppercase leading-tight text-[#071B36] sm:text-xl">
                    {f.q}
                  </span>
                  <FiChevronDown
                    className={
                      "shrink-0 text-2xl text-[#071B36] transition-transform duration-300 group-hover:text-[#C6A45D] " +
                      (isOpen ? "rotate-180" : "")
                    }
                    aria-hidden
                  />
                </button>
                <div
                  className={
                    "grid transition-all duration-300 ease-in-out " +
                    (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 font-medium leading-7 text-[#44474d] sm:pb-10">
                      {f.a}
                    </p>
                  </div>
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
    <footer className="bg-[#071B36] pt-12 pb-6 text-white sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="inline-flex rounded-md bg-white px-4 py-3">
              <img
                src={LOGO_IMG}
                alt="Whitmore Consultancy"
                style={{ margin: 0, padding: 0 }}
                className="block h-14 w-auto max-w-[220px] sm:h-16 sm:max-w-[260px]"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/60 sm:text-base">
              Whitmore Consultancy — your trusted partner for business setup,
              advisory, and growth in the Kingdom of Saudi Arabia.
            </p>
            <div className="mt-6 flex gap-3 text-base">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/uzglobalservices?igsh=NGYyZTlpMW9iaGFx" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
                <FaInstagram />
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
                <FaXTwitter />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <FooterCol
              title="Explore"
              items={[
                ["Services", "#services"],
                ["Packages", "#packages"],
                ["Process", "#process"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ]}
            />
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h5 className="mb-6 text-sm font-black uppercase leading-5 tracking-[0.18em] text-[#C6A45D]">
              Get in Touch
            </h5>
            <ul className="space-y-4 text-sm leading-6 text-white/70">
              <li>
                <a href="tel:+447471451865" className="transition-colors hover:text-[#C6A45D]">
                  +44 7471 451865
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#C6A45D]">
                  WhatsApp us directly
                </a>
              </li>
              <li className="text-white/60">
                Riyadh, Kingdom of Saudi Arabia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/10" />
        <p className="mt-4 text-center text-[10px] font-black uppercase leading-5 tracking-[0.18em] text-white/40">
          © {new Date().getFullYear()} Whitmore Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h5 className="mb-6 text-sm font-black uppercase leading-5 tracking-[0.18em] text-[#C6A45D]">
        {title}
      </h5>
      <ul className="space-y-3">
        {items.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              className="break-words text-xs font-bold uppercase leading-5 tracking-[0.12em] text-white/60 transition-colors hover:text-white"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}