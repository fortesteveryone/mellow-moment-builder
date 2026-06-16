import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLu5mUmi6luUgJxlxS38lB8dnZCXNuUZBWrqoonn-uq6veTVbgNjAgX_JAhdSXgzdOphyQFPzEgua9QQ-Bsc911Q71ghi2j0KoRO33jgGCrAUBwzQ_vNiYn573FRfuApzCERVTRlMezLIhptoqooYRjsSTK0q-loDxhgqEbfQ0fq_CSWyNh7qmrjmRomjGI2gC50T-QBeT4MBO7qqZHNchOdtc-snK-v4v9NHD4DKS5NUaK6KaMSmXqK_OI";

const LOGO_IMG =
  "https://lh3.googleusercontent.com/aida/AP1WRLsPfsm2MxJ_FFvxjX0rS4bcQiFwrb7688cTBsj6ex8w1YYkpM4GXzDCip_SORJzE3KzLH3UjJXp46DfrCVe9WBTgg6Xu6JINZLkZG3GiOuDhv84BCtY8O8J48lxwLjcUTK4UVR_-Evbll79BqU8mzHMfUJAg10gaeEPgiWuGjeQCyZuvTEMHDDcxqIKy61Wi7AVscWeNxTynKwXUWS5Dazl9oqHp859c1zXInnbaOukv9AqpCUNZOe4TVM";

const WHATSAPP_URL = "https://wa.me/440000000000";
const WHATSAPP_PHONE = "440000000000";
const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

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

/* Islamic 8-point star ornament — used as a decorative divider */
function StarOrnament({
  className = "",
  color = "#C6A45D",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-hidden>
      <span
        className="h-px w-10 sm:w-16"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
      />
      <svg viewBox="0 0 40 40" className="h-4 w-4 sm:h-5 sm:w-5" fill={color}>
        <polygon points="20,0 24,16 40,20 24,24 20,40 16,24 0,20 16,16" opacity="0.95" />
        <polygon
          points="20,4 22,18 36,20 22,22 20,36 18,22 4,20 18,18"
          fill="none"
          stroke={color}
          strokeWidth="0.8"
          transform="rotate(45 20 20)"
        />
      </svg>
      <span
        className="h-px w-10 sm:w-16"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </span>
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
            alt="Whitmore Saudi Connect"
            className="h-9 w-auto max-w-[190px] shrink-0 object-contain sm:h-11 sm:max-w-[240px] md:h-12"
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
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 text-white sm:px-8 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16">
          <div className="max-w-4xl min-w-0">
          <div
            className="mb-4 font-arabic text-xl text-[#C6A45D] sm:text-2xl"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div className="mb-5 inline-flex max-w-full items-center gap-3 bg-[#C6A45D] px-4 py-1.5 text-[11px] font-black uppercase leading-none tracking-[0.22em] text-[#071B36] sm:text-xs">
            <span>Vision 2030 Aligned</span>
            <span className="font-arabic text-base font-normal normal-case tracking-normal" dir="rtl" lang="ar">
              رؤية ٢٠٣٠
            </span>
          </div>
          <h1 className="mb-6 max-w-[12ch] break-words font-display text-[42px] font-extrabold uppercase leading-[1.02] text-white sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-[72px] lg:leading-[1.06]">
            Establish Your{" "}
            <span className="text-[#C6A45D]">Business</span> In Saudi Arabia
          </h1>
          <p className="mb-8 max-w-2xl border-l-4 border-[#C6A45D] pl-5 text-base leading-8 text-white/80 sm:mb-10 sm:pl-8 sm:text-xl">
            The premier gateway for 100% foreign-owned corporate entities. We
            handle the complexity of MISA licensing, registration, and
            institutional setup with uncompromising precision.
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
              ["03 Days", "Fast-Track Setup"],
              ["Elite", "Consultancy Model"],
              ["Global", "Investor Network"],
            ].map(([n, l]) => (
              <div key={l} className="min-w-0">
                <div className="mb-2 font-display text-2xl font-black text-[#C6A45D] sm:text-4xl">
                  {n}
                </div>
                <div className="break-words text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/60">
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
                      "Hello Whitmore Saudi Connect, I'd like a strategic briefing on company formation in Saudi Arabia.",
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
                    href="tel:+440000000000"
                    className="mt-1 block font-display text-lg font-bold text-white transition-colors hover:text-[#C6A45D]"
                  >
                    +44 0000 000000
                  </a>
                  <a
                    href={buildWhatsAppUrl(
                      "Hello Whitmore Saudi Connect, I'd like a strategic briefing on company formation in Saudi Arabia.",
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
    <section className="islamic-pattern py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-6 flex justify-center">
          <StarOrnament />
        </div>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 font-arabic text-2xl text-[#C6A45D]" dir="rtl" lang="ar">
              بناء حضوركم في المملكة
            </p>
            <h2 className="mb-5 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
              Architecting Your Saudi Expansion
            </h2>
            <p className="text-base italic leading-8 text-[#44474d] sm:text-xl">
              We provide the structural foundation for international
              corporations to thrive in the Kingdom's evolving economic
              landscape.
            </p>
          </div>
          <div className="h-1.5 w-28 bg-[#C6A45D] sm:w-48" />
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
      className="relative overflow-hidden bg-[#071B36] py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="absolute right-0 top-0 hidden h-full w-1/3 -skew-x-12 translate-x-20 bg-[#C6A45D]/5 sm:block" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 font-arabic text-2xl text-[#C6A45D]" dir="rtl" lang="ar">
            خدماتنا التشغيلية
          </p>
          <h2 className="mb-4 break-words font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl lg:text-[56px]">
            Operational Capabilities
          </h2>
          <p className="text-xs font-bold uppercase leading-5 tracking-[0.22em] text-[#C6A45D] sm:text-sm sm:tracking-[0.3em]">
            Comprehensive Enterprise Support
          </p>
          <div className="mt-6 flex justify-center">
            <StarOrnament />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.title}
              href={buildWhatsAppUrl(
                `Hello Mellow Moment Builder, I'm interested in your "${s.title}" service. Could you please share more details, pricing, and the next steps?`
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

/* ---------------- Packages ---------------- */
function Packages() {
  return (
    <section id="packages" className="bg-[#f5f3ee] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
          <p className="mb-3 font-arabic text-2xl text-[#C6A45D]" dir="rtl" lang="ar">
            باقاتنا المختارة
          </p>
          <h2 className="mb-5 break-words font-display text-3xl font-bold uppercase leading-tight text-[#071B36] sm:text-4xl md:text-5xl lg:text-[56px]">
            Elite Formation Tiers
          </h2>
          <p className="text-base leading-7 text-[#44474d] sm:text-xl">
            Select the engagement model that matches your strategic timeline.
          </p>
          <div className="mt-6 flex justify-center">
            <StarOrnament />
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl border-2 border-[#071B36] shadow-2xl md:grid-cols-2 md:border-4">
          {/* Enterprise */}
          <div className="flex min-w-0 flex-col border-b-2 border-[#071B36] bg-white p-6 sm:p-8 md:border-b-0 md:border-r-4 lg:p-12 xl:p-16">
            <div className="mb-8">
              <h3 className="mb-4 break-words font-display text-2xl font-black uppercase leading-tight text-[#071B36] sm:text-3xl">
                Enterprise Standard
              </h3>
              <p className="mb-6 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#44474d]">
                Standard 30-Day Deployment
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-black text-[#071B36] sm:text-5xl">
                  £15,000
                </span>
              </div>
            </div>
            <ul className="mb-10 flex-grow space-y-4 sm:mb-12 sm:space-y-5">
              {[
                "Full Corporate Consultancy",
                "MISA License Coordination",
                "Commercial Registration",
                "Institutional Bank Prep",
                "24/7 WhatsApp Support",
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
              Enquire Now
            </a>
          </div>
          {/* Elite */}
          <div className="flex min-w-0 flex-col bg-[#071B36] p-6 text-white sm:p-8 lg:p-12 xl:p-16">
            <div className="mb-8 w-fit max-w-full bg-[#C6A45D] px-4 py-2 text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-[#071B36] sm:px-6">
              Priority Fast-Track
            </div>
            <div className="mb-8">
              <h3 className="mb-4 break-words font-display text-2xl font-black uppercase leading-tight text-[#C6A45D] sm:text-3xl">
                Elite Strategic
              </h3>
              <p className="mb-6 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-white/60">
                Priority 3-Day Executive Deployment
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-black text-[#C6A45D] sm:text-5xl">
                  £20,000
                </span>
              </div>
            </div>
            <ul className="mb-10 flex-grow space-y-4 sm:mb-12 sm:space-y-5">
              {[
                "Priority Senior Consultation",
                "Urgent Documentation Review",
                "Accelerated MISA Processing",
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
              Secure Priority
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#44474d] opacity-60">
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
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-28">
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
                (i % 2 === 1 ? "bg-[#f5f3ee] " : "") +
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
  const [submitted, setSubmitted] = useState(false);
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
              { l: "Instagram", url: "https://instagram.com/whitmoresaudi" },
              { l: "TikTok", url: "https://tiktok.com/@whitmoresaudi" },
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
              href="tel:+440000000000"
              className="group flex min-w-0 items-center gap-4 sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="call" />
              </div>
              <span className="min-w-0 break-words font-display text-base font-bold uppercase text-[#071B36] sm:text-xl">
                +44 XXX XXX XXXX
              </span>
            </a>
            <a
              href="mailto:info@whitmoresaudi.com"
              className="group flex min-w-0 items-center gap-4 sm:gap-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#071B36] text-[#C6A45D] transition-all group-hover:bg-[#C6A45D] group-hover:text-[#071B36]">
                <MS name="mail" />
              </div>
              <span className="min-w-0 break-all font-display text-base font-bold uppercase text-[#071B36] sm:text-xl">
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
          className="min-w-0 border-b-8 border-[#C6A45D] bg-[#071B36] p-6 text-white shadow-2xl sm:p-8 md:border-b-[12px] lg:p-12 xl:p-16"
        >
          <h3 className="mb-8 break-words font-display text-2xl font-black uppercase leading-tight text-[#C6A45D] sm:text-3xl">
            Formal Inquiry
          </h3>
          <div className="space-y-7 sm:space-y-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <FormField label="Corporate Name" placeholder="e.g. Whitmore Global" required />
              <FormField label="Email Address" type="email" placeholder="office@company.com" required />
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <FormField label="Phone Number" type="tel" placeholder="+44 ..." required />
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/50">
                  Selected Package
                </label>
                <select
                  className="w-full appearance-none border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
                >
                  <option className="bg-[#071B36]">Enterprise Standard</option>
                  <option className="bg-[#071B36]">Elite Strategic (Fast-Track)</option>
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
                className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C6A45D] px-4 py-4 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#071B36] transition-all hover:bg-white sm:py-5 sm:text-sm sm:tracking-[0.2em]"
            >
              Submit Strategic Inquiry
            </button>
            {submitted && (
              <p className="mt-5 text-center text-xs font-black uppercase leading-5 tracking-[0.12em] text-[#C6A45D] sm:text-sm">
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
      <label className="mb-2 block text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-0 border-b-2 border-white/20 bg-transparent px-0 py-2 text-sm leading-6 text-white placeholder:text-white/30 focus:border-[#C6A45D] focus:outline-none focus:ring-0 sm:text-base"
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
                    "overflow-hidden transition-all duration-300 ease-in-out " +
                    (isOpen ? "max-h-96" : "max-h-0")
                  }
                >
                  <p className="pb-8 font-medium leading-7 text-[#44474d] sm:pb-10">
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
    <footer className="bg-[#071B36] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <img
              src={LOGO_IMG}
              alt="Whitmore Saudi Connect"
              className="h-12 w-auto max-w-[220px] brightness-0 invert sm:h-14"
            />
            <p className="max-w-md text-sm leading-6 text-white/60 sm:text-base">
              Your trusted partner for seamless business entry and growth in the Kingdom of Saudi Arabia.
            </p>
          </div>
          <div className="flex justify-center gap-4 text-lg md:justify-end">
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
              <FaInstagram />
            </a>
            <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
              <FaXTwitter />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-[#C6A45D] hover:text-[#C6A45D]">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="mt-10 h-px w-full bg-white/10" />
        <p className="mt-6 text-center text-[10px] font-black uppercase leading-5 tracking-[0.18em] text-white/40">
          © {new Date().getFullYear()} Whitmore Saudi Connect. All rights reserved.
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