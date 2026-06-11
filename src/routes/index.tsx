import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preet Sawari Mandhwani — Python Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Preet Sawari Mandhwani — Junior Python Engineer & AI developer based in Karachi, Pakistan.",
      },
    ],
  }),
  component: Index,
});

const PORTRAIT =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/017d69b7-3445-43c2-a6cd-2e890a8aac3c-preet-beta-vercel-app/assets/images/WhatsApp_20Image_202025-09-14_20at_2019_52_32_c319-1.jpg";

const STACK = [
  "Python", "Django", "FastAPI", "LangChain", "PyTorch",
  "TensorFlow", "React", "Node.js", "MongoDB", "Tailwind",
  "YOLO", "OpenCV",
];

const PROJECTS = [
  {
    n: "01",
    title: "AI English Learning Platform",
    role: "Final Year Project · Python · NLP · MERN",
    blurb:
      "Full-stack AI app for grammar correction, IELTS practice and role-based conversation simulation using NLP pipelines served over REST.",
    href: "https://github.com/Preet411",
  },
  {
    n: "02",
    title: "Legal Chatbot",
    role: "LangChain · RAG · Flask",
    blurb:
      "Context-aware legal Q&A bot with semantic vector search and LLM reasoning over legal documents.",
    href: "https://github.com/Preet411",
  },
  {
    n: "03",
    title: "RAG Course Assistant",
    role: "LangChain · Vector DB · LLM",
    blurb:
      "Retrieval-Augmented learning assistant trained on deep-learning books — semantic search, quiz generation, grounded answers.",
    href: "https://github.com/Preet411",
  },
  {
    n: "04",
    title: "Object Detection + Context",
    role: "YOLO · OpenCV · CNN",
    blurb:
      "Real-time YOLO object detection on COCO with contextual scene description generation.",
    href: "https://github.com/Preet411",
  },
  {
    n: "05",
    title: "Image Captioning System",
    role: "TensorFlow · CNN · LSTM",
    blurb:
      "End-to-end deep learning pipeline that generates natural-language captions for unseen images.",
    href: "https://github.com/Preet411",
  },
  {
    n: "06",
    title: "Doctor Appointment System",
    role: "MERN · JWT · REST",
    blurb:
      "Full-stack medical booking platform with role-based access and availability tracking.",
    href: "https://github.com/Hammad-Zubari/Doctor-Appointment.git",
  },
];

const CERTS = [
  "Python for Data Science, AI & Development — IBM",
  "Django Web Framework — Meta",
  "Introduction to MongoDB — MongoDB University",
  "AI for Everyone — DeepLearning.AI",
  "Generative AI Fundamentals — Google Cloud",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const } },
};

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="flex items-end justify-between mb-12 border-b border-border pb-5"
      >
        <div className="flex items-baseline gap-4">
          <span className="mono text-xs text-muted-foreground">{num}</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            {title}
          </h2>
        </div>
      </motion.div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--brand)] animate-pulse" />
            Preet<span className="text-muted-foreground">.</span>
          </a>
          <ul className="hidden sm:flex items-center gap-7 text-sm">
            {[
              ["#work", "Work"],
              ["#about", "About"],
              ["#stack", "Stack"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="link-u text-foreground/80 hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:mandhwanipreet@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full bg-foreground text-background hover:bg-[var(--brand)] transition-colors"
          >
            Say hi <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pt-20 md:pt-32 pb-20 md:pb-28"
      >
        <div className="absolute inset-0 dotgrid opacity-40 pointer-events-none" />
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6"
            >
              ✦ Karachi, Pakistan — Available for work
            </motion.p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.02]">
              {"Preet Sawari".split(" ").map((word, wi) => (
                <span key={wi} className="inline-block mr-3 overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + wi * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
              <br />
              <span className="overflow-hidden inline-block align-bottom">
                <motion.span
                  className="inline-block text-muted-foreground italic"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  builds with Python &amp; AI.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              Junior Python Engineer & CS graduate from Sukkur IBA. I ship
              Django / FastAPI backends, MERN apps and AI products powered by
              LangChain, RAG and deep learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm hover:bg-[var(--brand)] transition-colors"
              >
                View work <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Preet411"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm hover:border-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="md:col-span-4 relative"
          >
            <div className="relative mx-auto w-56 h-72 sm:w-64 sm:h-80 md:w-full md:h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border">
                <img
                  src={PORTRAIT}
                  alt="Portrait of Preet Sawari Mandhwani"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-2.5 shadow-sm"
              >
                <p className="mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  CGPA
                </p>
                <p className="font-medium">3.28 / 4.0</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-6 overflow-hidden bg-card">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...STACK, ...STACK, ...STACK].map((s, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-medium text-foreground/40 hover:text-[var(--brand)] transition-colors flex items-center gap-12"
            >
              {s}
              <span className="text-[var(--brand)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <Section id="work" num="01" title="Selected work">
        <div className="divide-y divide-border border-y border-border">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.n}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ x: 6 }}
              className="group block py-7 md:py-9 grid grid-cols-12 gap-4 items-start"
            >
              <span className="col-span-2 md:col-span-1 mono text-xs text-muted-foreground pt-2">
                {p.n}
              </span>
              <div className="col-span-10 md:col-span-7">
                <h3 className="text-xl md:text-2xl font-medium group-hover:text-[var(--brand)] transition-colors">
                  {p.title}
                </h3>
                <p className="mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                  {p.role}
                </p>
              </div>
              <p className="col-span-12 md:col-span-3 text-sm text-foreground/70 leading-relaxed">
                {p.blurb}
              </p>
              <ArrowUpRight className="hidden md:block col-span-1 w-5 h-5 text-muted-foreground group-hover:text-[var(--brand)] justify-self-end mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" num="02" title="About">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              I&apos;m a Computer Science graduate from{" "}
              <span className="text-foreground">Sukkur IBA University</span>{" "}
              (May 2026) with a strong focus on Python backend development and
              applied AI.
            </p>
            <p>
              Most recently I interned at{" "}
              <span className="text-foreground">10Pearls</span> building{" "}
              <em>NoteSnap</em> — a full-stack notes app with Django, React and
              MongoDB. JWT auth, RBAC, full test coverage with Jest / Mocha,
              and code quality monitoring with SonarQube in an Agile sprint
              cadence.
            </p>
            <p>
              Outside of work I build AI products — RAG chatbots, deep learning
              pipelines, and computer vision systems with YOLO. I care about
              clean code, fast feedback loops and shipping things people
              actually use.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-5 space-y-4"
          >
            {[
              { k: "Experience", v: "MERN / Python Intern @ 10Pearls", s: "Sep – Dec 2025" },
              { k: "Education", v: "BS Computer Science · Sukkur IBA", s: "2022 – 2026 · CGPA 3.28" },
              { k: "Location", v: "Karachi, Pakistan", s: "UTC+5 · Open to remote" },
              { k: "Focus", v: "Python · AI · Full-stack", s: "Django · LangChain · MERN" },
            ].map((row) => (
              <div key={row.k} className="border-b border-border pb-4 flex justify-between items-start gap-4">
                <p className="mono text-xs uppercase tracking-wider text-muted-foreground pt-1">
                  {row.k}
                </p>
                <div className="text-right">
                  <p className="font-medium">{row.v}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{row.s}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* STACK */}
      <Section id="stack" num="03" title="Stack & certifications">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-8">
            {[
              {
                title: "Backend",
                items: "Python · Django · DRF · FastAPI · Flask · Node · Express · REST · JWT",
              },
              {
                title: "AI / ML",
                items: "PyTorch · TensorFlow · Keras · LangChain · RAG · FAISS · YOLO · OpenCV · NLP · Transformers",
              },
              {
                title: "Frontend & Data",
                items: "React · Tailwind · HTML5 · MongoDB · MySQL · Pandas · NumPy · Git",
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-b border-border pb-6"
              >
                <p className="mono text-xs uppercase tracking-wider text-[var(--brand)] mb-2">
                  {b.title}
                </p>
                <p className="text-lg leading-relaxed">{b.items}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-4 h-4 text-[var(--brand)]" />
              <p className="mono text-xs uppercase tracking-wider text-muted-foreground">
                Certifications
              </p>
            </div>
            <ul className="space-y-3">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mono text-xs text-muted-foreground pt-0.5">→</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" num="04" title="Get in touch">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-10 items-start"
        >
          <div className="md:col-span-7">
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1]">
              Let&apos;s build
              <br />
              <span className="italic text-muted-foreground">
                something good.
              </span>
            </h3>
            <p className="mt-6 text-foreground/70 max-w-md">
              Open to junior Python / full-stack / AI engineering roles &amp;
              freelance work.
            </p>

            <a
              href="mailto:mandhwanipreet@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-lg link-u"
            >
              mandhwanipreet@gmail.com <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <ul className="md:col-span-5 space-y-3">
            {[
              { Icon: Linkedin, label: "LinkedIn", v: "preet-sawari-mandhwani", href: "https://www.linkedin.com/in/preet-sawari-mandhwani/" },
              { Icon: Github, label: "GitHub", v: "@Preet411", href: "https://github.com/Preet411" },
              { Icon: Phone, label: "Phone", v: "+92 315 037 4972", href: "tel:+923150374972" },
              { Icon: Mail, label: "Email", v: "mandhwanipreet@gmail.com", href: "mailto:mandhwanipreet@gmail.com" },
              { Icon: MapPin, label: "Location", v: "Karachi, Pakistan", href: "#" },
            ].map(({ Icon, label, v, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-border py-3 hover:border-foreground transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-[var(--brand)] transition-colors" />
                    <span className="mono text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                  </span>
                  <span className="text-sm">{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 mono text-xs text-muted-foreground border-t border-border">
        <span>© {new Date().getFullYear()} Preet Sawari Mandhwani</span>
        <span>Designed &amp; built with care.</span>
      </footer>
    </div>
  );
}
