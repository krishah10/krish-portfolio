"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ---
// Krish Shah — Portfolio (single-file React page)
// Paste into:
//   - Next.js App Router: app/page.tsx (convert to TS if you want)
//   - Next.js Pages Router: pages/index.jsx
//   - Vite/CRA: render <App />
//
// How to use your photo:
//   1) Put your headshot file in /public/images/krish.jpg (or .png)
//   2) Set `headshotSrc` below to "/images/krish.jpg"
// ---

const content = {
  name: "Krish Shah",
  headline: "Finance & Business Analytics student | Auditing • Reporting • Data Analysis",
  location: "Egg Harbor Township, NJ",
  phone: "(609) 553-4875",
  email: "krishs0110@gmail.com",
  linkedinLabel: "linkedin.com/in/krish-shah",
  linkedinUrl: "https://www.linkedin.com/in/krish-shah-1949b0248/",
  resumeUrl: "/KrishShah_Resume.pdf",
  headshotSrc: "/images/krish.jpg",

  education: {
    school: "Rutgers University — Rutgers Business School",
    campus: "New Brunswick, NJ",
    degree: "Double Major: Finance & Business Analytics Information Technology",
    grad: "May 2028",
    gpa: "3.7",
    coursework: [
      "Calculus I",
      "Financial Accounting",
      "Microeconomics",
      "Macroeconomics",
      "Statistics for Business",
      "Management",
      "Marketing",
    ],
  },

  experience: [
    {
      role: "Finance Intern",
      company: "Hard Rock Hotel & Casino",
      where: "Atlantic City, NJ",
      when: "Jun 2025 – Aug 2025",
      bullets: [
        "Performed 30+ W-2G audits ensuring 100% accuracy of high-value win reporting and IRS compliance.",
        "Calculated and analyzed daily Marginal Gross Revenue (MGR) trends across gaming operations, tracking $MM+ in revenue and identifying variances to improve reporting accuracy.",
        "Conducted Chip Bank audits to verify casino chip inventory accuracy, identify discrepancies, and ensure compliance with internal control procedures.",
      ],
      tags: ["Auditing", "Variance Analysis", "Reporting", "Controls"],
      icon: ShieldCheck,
    },
    {
      role: "Sales Associate",
      company: "Journeys Kidz (Genesco Inc.)",
      where: "Mays Landing, NJ",
      when: "Jun 2024 – May 2025",
      bullets: [
        "Consistently surpassed sales goals by 15% through proactive customer engagement and product recommendations.",
        "Delivered exceptional customer service to families, improving satisfaction and repeat business.",
        "Maintained merchandise displays and store organization to maximize visual appeal and sales performance.",
      ],
      tags: ["Sales", "Customer Experience", "Communication"],
      icon: Sparkles,
    },
    {
      role: "Volunteer",
      company: "Hindu Jain Cultural Group of South Jersey",
      where: "Galloway Township, NJ",
      when: "2022 – Present",
      bullets: [
        "Assisted in organizing cultural and community events with 100+ attendees.",
        "Supported event logistics including setup, registration, and clean-up to ensure smooth operations.",
        "Collaborated with team members to manage activities and enhance participant experience.",
      ],
      tags: ["Leadership", "Operations", "Teamwork"],
      icon: BadgeCheck,
    },
  ],

  skills: {
    technical: [
      "Microsoft Excel (PivotTables, Functions, Data Visualization)",
      "Microsoft Office Suite",
    ],
    analytical: ["Financial auditing", "Reconciliations", "Data analysis"],
    languages: ["English (Fluent)", "Gujarati (Conversational)"],
    interests: ["Financial Markets", "Technology", "Football", "Volleyball", "Cars", "Music"],
  },

  projects: [
    {
      title: "Marketing Analytics — Foundations, Applications & Ethics (Team Report)",
      description:
        "Comprehensive team analysis on how organizations leverage marketing analytics to drive segmentation, campaign optimization, and data-driven decision-making while managing ethical and privacy tradeoffs.",
      highlights: [
        "Led evaluation of real-world applications including segmentation modeling, social & web analytics, pricing optimization, and geographic targeting",
        "Analyzed strategic advantages (ROI lift, personalization, forecasting accuracy) versus risks (data privacy exposure, bias, data integrity issues)",
        "Framed executive-level recommendations on responsible analytics adoption and long-term competitive advantage",
      ],
      icon: BarChart3,
      linkLabel: "View PDF",
      linkUrl: "/Marketing_Analytics_Final_Project.pdf",
    },
    {
      title: "Knight Bites — Late-Night Dining Hall Food Concept (Business Design)",
      description:
        "Designed a scalable campus food venture concept partnering with university dining services to repurpose excess inventory into a late-night offering—combining operational efficiency with sustainability and revenue generation.",
      highlights: [
        "Architected the core business model including value proposition, revenue structure, and strategic positioning",
        "Designed the end-to-end business process (SIPOC framework) to streamline sourcing, packaging, distribution, and customer feedback loops",
        "Integrated sustainability and cost-efficiency principles to reduce food waste while maintaining profitability",
      ],
      icon: FileSpreadsheet,
      linkLabel: "View slides",
      linkUrl: "/KnightBitesFinalPres.pdf",
    },
  ],
};

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.2em] text-white/50">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>

      {subtitle ? (
        <p className="mt-2 text-white/70">{subtitle}</p>
      ) : null}
    </div>
  )
}


function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  )
}

function IconLine({
  icon: Icon,
  children,
}: {
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/80">
      <Icon className="h-4 w-4 text-white/70" />
      <span>{children}</span>
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
              <span className="text-sm font-semibold">KS</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium">{content.name}</div>
              <div className="text-xs text-white/60">{content.headline}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={content.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:pb-16 md:pt-16">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55 }}
            className="grid items-center gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                Open to internships • Finance / Analytics
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] md:text-5xl">
  <span className="block">Strategic finance.</span>
  <span className="block">Data-driven thinking.</span>
  <span className="block">Operational precision.</span>
</h1>

              <p className="mt-4 max-w-xl text-white/70">
                I’m {content.name}, a Rutgers Business School student focused on finance and business analytics. I’ve supported
                compliance-driven audits and revenue reporting in a high-volume casino environment and I love turning messy
                numbers into clear decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Excel Dashboards</Pill>
                <Pill>Audits & Reconciliations</Pill>
                <Pill>Variance Analysis</Pill>
                <Pill>Client Communication</Pill>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-[#070A12] hover:opacity-90"
                >
                  View projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10"
                >
                  Contact me
                </a>
              </div>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                <IconLine icon={MapPin}>{content.location}</IconLine>
                <IconLine icon={Mail}>
                  <a className="hover:text-white" href={`mailto:${content.email}`}>
                    {content.email}
                  </a>
                </IconLine>
                <IconLine icon={Phone}>
                  <a className="hover:text-white" href={`tel:${content.phone.replace(/[^0-9+]/g, "")}`}>
                    {content.phone}
                  </a>
                </IconLine>
                <IconLine icon={Linkedin}>
                  <a className="hover:text-white" href={content.linkedinUrl} target="_blank" rel="noreferrer">
                    {content.linkedinLabel}
                  </a>
                </IconLine>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[28px] bg-white/5 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                  {/* Headshot */}
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={content.headshotSrc}
                      alt={`${content.name} headshot`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback gradient if the image isn't set yet
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector(".fallback")) {
                          const d = document.createElement("div");
                          d.className =
                            "fallback h-full w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent";
                          parent.appendChild(d);
                        }
                      }}
                    />
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-3 p-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">GPA</div>
                      <div className="mt-1 text-lg font-semibold">{content.education.gpa}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Focus</div>
                      <div className="mt-1 text-lg font-semibold">Finance</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Focus</div>
                      <div className="mt-1 text-lg font-semibold">Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About / Education */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <SectionTitle
            eyebrow="Overview"
            title="About"
            subtitle="A practical, numbers-first approach — built in operations, sharpened in finance."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="mt-2 text-white/80">
                <span className="font-medium text-white">{content.education.school}</span> — {content.education.campus}
              </p>
              <p className="mt-1 text-white/70">{content.education.degree}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Graduation: {content.education.grad}</Pill>
                <Pill>GPA: {content.education.gpa}</Pill>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium text-white/80">Relevant coursework</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {content.education.coursework.map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">What I bring</h3>
              <ul className="mt-3 space-y-3 text-white/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  <span>
                    <span className="font-medium text-white">Accuracy-first</span> mindset from audits and compliance-driven
                    reporting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  <span>
                    Strong <span className="font-medium text-white">Excel</span> skills for dashboards, reconciliations,
                    and analysis.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  <span>
                    Clear communication and performance under pressure from customer-facing roles.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <SectionTitle
            eyebrow="Work"
            title="Experience"
            subtitle="Impact-focused bullets, built for recruiters — and backed by real outcomes."
          />

          <div className="grid gap-6">
            {content.experience.map((job) => {
              const Icon = job.icon;
              return (
                <Card key={`${job.company}-${job.role}`}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-white/80" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold">{job.role}</div>
                          <div className="text-white/70">
                            {job.company} • {job.where}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-white/60">{job.when}</div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-12">
                    <ul className="space-y-2 text-white/75 md:col-span-9">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="md:col-span-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">Skills</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <SectionTitle
            eyebrow="Portfolio"
            title="Projects"
            subtitle="Two team projects that show strategy, analytics thinking, and professional communication."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-white/80" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{p.title}</div>
                        <div className="mt-1 text-sm text-white/70">{p.description}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-medium text-white/80">Highlights</div>
                    <ul className="mt-2 space-y-2 text-white/75">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <a
                      href={p.linkUrl}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      {p.linkLabel} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <SectionTitle eyebrow="Capabilities" title="Skills" subtitle="Tools I use + what I’m strongest at." />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="text-sm font-medium text-white/80">Technical</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.technical.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>

              <div className="mt-6 text-sm font-medium text-white/80">Analytical</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.analytical.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-sm font-medium text-white/80">Languages</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.languages.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>

              <div className="mt-6 text-sm font-medium text-white/80">Interests</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.skills.interests.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-20 md:pt-14">
          <SectionTitle
            eyebrow="Reach out"
            title="Contact"
            subtitle="If you’re hiring for finance or analytics internships, I’d love to connect."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4" /> Email
              </div>
              <a className="mt-2 block text-white hover:opacity-90" href={`mailto:${content.email}`}>
                {content.email}
              </a>
            </Card>

            <Card>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4" /> Phone
              </div>
              <a
                className="mt-2 block text-white hover:opacity-90"
                href={`tel:${content.phone.replace(/[^0-9+]/g, "")}`}
              >
                {content.phone}
              </a>
            </Card>

            <Card>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </div>
              <a className="mt-2 block text-white hover:opacity-90" href={content.linkedinUrl} target="_blank" rel="noreferrer">
                {content.linkedinLabel}
              </a>
            </Card>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">Want this to look even more elite?</div>
              <p className="mt-1 text-white/70">
                Add 2–3 real artifacts (Excel dashboards, audit template, a short write-up). I can help you package them as
                case studies.
              </p>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-[#070A12] hover:opacity-90"
            >
              Upgrade projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 text-sm text-white/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {content.name}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2">
              <span className="text-white/40">Built with</span>
              <span className="inline-flex items-center gap-1 text-white/70">
                <Sparkles className="h-4 w-4" /> React
              </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
