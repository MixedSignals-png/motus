import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  MessageSquare,
  Search,
  User,
  Trash2,
  ArrowRight,
  Zap,
  ShieldOff,
  Link2,
  Sparkles,
  Bot,
} from "lucide-react";

import olivia from "@/assets/char-olivia.jpg";
import byakuya from "@/assets/char-byakuya.jpg";
import maya from "@/assets/char-maya.jpg";
import luna from "@/assets/char-luna.jpg";
import kai from "@/assets/char-kai.jpg";
import rin from "@/assets/char-rin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motus Research — Unfiltered AI Chat Platform" },
      {
        name: "description",
        content:
          "Motus Research is an unfiltered AI platform. Import Chai bots instantly or build your own unrestricted characters. Zero filters. Zero latency.",
      },
      { property: "og:title", content: "Motus Research — Unfiltered AI" },
      {
        property: "og:description",
        content:
          "The raw power of Chai's AI engine, stripped of filters. Bring your own bots or discover community favorites.",
      },
    ],
  }),
  component: Landing,
});

const APP_URL = "https://chat.motus-research.xyz";

type Bot = {
  name: string;
  desc: string;
  metric: string;
  img: string;
};

const BOTS: Bot[] = [
  { name: "Olivia Halford", desc: "The girl next door who knows too much.", metric: "27.7M", img: olivia },
  { name: "Byakuya Togami Girl", desc: "Cold heir. Sharper than you think.", metric: "32.7M", img: byakuya },
  { name: "Maya — Bully", desc: "Popular. Cruel. Impossible to ignore.", metric: "18.4M", img: maya },
  { name: "Luna Vex", desc: "Cyberpunk thief with violet eyes.", metric: "9.2M", img: luna },
  { name: "Kai Mercer", desc: "Ex-soldier turned rogue operator.", metric: "14.1M", img: kai },
  { name: "Rin Akiyama", desc: "Bright outside. Storm underneath.", metric: "22.0M", img: rin },
];

type Chat = {
  name: string;
  snippet: string;
  when: string;
  img: string;
};
const CHATS: Chat[] = [
  { name: "Bully popular girl (Maya)", snippet: "Don't act like you didn't see me in the hall…", when: "Today", img: maya },
  { name: "Olivia Halford", snippet: "Stay. Just five more minutes.", when: "Today", img: olivia },
  { name: "Luna Vex", snippet: "The vault's offline. We move at 3.", when: "Yesterday", img: luna },
  { name: "Kai Mercer", snippet: "I told you not to call this number.", when: "2d", img: kai },
];

type Tab = "Browse" | "My Bots" | "My chats";

function Landing() {
  const [tab, setTab] = useState<Tab>("Browse");

  // Always start at the top of the landing page — strip any leftover hash
  // (e.g. /#app from a previous nav click) so users land on the hero.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);


  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] grid-bg opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.22_295/0.25)] blur-[140px]" />

      {/* nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/70 p-1 backdrop-blur sm:flex">
          <a href="#features" className="rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm">Features</a>
          <a href="#app" className="rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm">App</a>
          <a href="#pricing" className="rounded-full px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:px-4 sm:text-sm">Pricing</a>
        </nav>

        <a href={APP_URL} className="group relative inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/70 px-4 py-2 text-sm font-medium text-white transition glow-border btn-press circuit-border">
          Sign in <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-14 text-center md:pb-24 md:pt-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/70 px-3 py-1.5 text-xs text-zinc-400 animate-fade">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.28_300)] animate-pulse-glow" />
          motus-research // v0.9 unfiltered build
        </div>

        <h1
          data-text="Unfiltered. Unrestricted. Your bots, liberated."
          className="text-glitch font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[88px] animate-rise"
          style={{ animationDelay: "0.05s" }}
        >
          Unfiltered. <span className="text-zinc-500">Unrestricted.</span><br />
          Your bots, <span className="shimmer-text">liberated</span>.
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg animate-rise"
          style={{ animationDelay: "0.2s" }}
        >
          The raw power of Chai's AI engine, entirely stripped of filters. Bring your own bots or discover community favorites instantly.
        </p>

        <div className="mx-auto mt-10 max-w-2xl animate-rise" style={{ animationDelay: "0.35s" }}>
          <BotImport />
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5"><ShieldOff className="h-3.5 w-3.5" /> No guardrails</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> &lt;120ms inference</span>
            <span className="inline-flex items-center gap-1.5"><Link2 className="h-3.5 w-3.5" /> Instant Chai sync</span>
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section id="app" className="relative z-10 mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 shadow-[0_0_120px_-30px_oklch(0.55_0.22_295/0.5)] backdrop-blur">
          {/* app top bar */}
          <div className="flex items-center justify-between gap-3 border-b border-neutral-900 px-4 py-3 md:px-6">
            <Logo small />
            <div className="flex items-center gap-1 rounded-full border border-neutral-800 bg-black/60 p-1">
              {(["Browse", "My Bots", "My chats"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition md:px-4 md:text-sm ${
                    tab === t
                      ? "bg-gradient-to-b from-[oklch(0.32_0.15_295)] to-[oklch(0.18_0.08_290)] text-white glow-ring"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button aria-label="Profile" className="grid h-9 w-9 place-items-center rounded-full border border-neutral-800 bg-neutral-950 text-zinc-300 transition hover:text-white glow-border">
              <User className="h-4 w-4" />
            </button>
          </div>

          {/* tab content */}
          <div className="px-4 py-6 md:px-8 md:py-8">
            {tab === "Browse" && <BrowsePane />}
            {tab === "My Bots" && <MyBotsPane />}
            {tab === "My chats" && <MyChatsPane />}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[oklch(0.7_0.28_300)]">// why motus</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Built for those who want more.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Feature
            icon={<ShieldOff className="h-5 w-5" />}
            title="100% Unfiltered"
            body="Deep, unrestricted logic paths. No blocks, no guardrails, pure freedom."
          />
          <Feature
            icon={<Link2 className="h-5 w-5" />}
            title="Instant Chai Sync"
            body="Drop any bot link or unique identifier to instantly map characters, descriptions, and logic into Motus."
          />
          <Feature
            icon={<Zap className="h-5 w-5" />}
            title="Zero Latency"
            body="High-performance inference engine built for real-time, instantaneous text generation."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo small />
            <span>© {new Date().getFullYear()} motus-research</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <a href="https://discord.gg/TsmmZ5XYYb" className="hover:text-white">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative grid place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.28_300)] to-[oklch(0.4_0.2_280)] shadow-[0_0_24px_-2px_oklch(0.65_0.25_295/0.6)] ${small ? "h-7 w-7" : "h-9 w-9"}`}>
        <MessageSquare className={small ? "h-3.5 w-3.5 text-white" : "h-4 w-4 text-white"} />
      </div>
      <span className={`font-display font-bold tracking-tight ${small ? "text-sm" : "text-base"}`}>
        motus<span className="text-[oklch(0.7_0.28_300)]">.</span>research
      </span>
    </div>
  );
}

function BotImport() {
  const [val, setVal] = useState("");
  const href = APP_URL;
  return (
    <form
      action={APP_URL}
      onSubmit={(e) => { e.preventDefault(); window.location.href = href; }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[oklch(0.65_0.25_295/0.5)] via-transparent to-[oklch(0.65_0.25_295/0.5)] opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100 group-hover:opacity-60" />
      <div className="relative flex flex-col items-stretch gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-2 backdrop-blur transition focus-within:border-[oklch(0.65_0.25_295/0.7)] focus-within:shadow-[0_0_0_4px_oklch(0.65_0.25_295/0.15)] sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 px-3">
          <Link2 className="h-4 w-4 text-zinc-500 transition group-focus-within:text-[oklch(0.75_0.25_300)]" />
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Paste Chai Bot Link or ID"
            className="w-full bg-transparent py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
          />
        </div>
        <a
          href={href}
          className="group/btn inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-[oklch(0.7_0.28_300)] to-[oklch(0.5_0.22_285)] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_oklch(0.65_0.25_295/0.8)] btn-press"
        >
          <Sparkles className="h-4 w-4 transition group-hover/btn:rotate-12" />
          Launch Bot
          <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
        </a>
      </div>
    </form>
  );
}

function BrowsePane() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Browse</h3>
          <p className="text-sm text-zinc-500">Discover characters from Chai.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-neutral-800 bg-black/60 px-3 py-1.5 text-xs text-zinc-400 sm:flex">
            <Search className="h-3.5 w-3.5" /> Search bots
          </div>
          <span className="rounded-full border border-neutral-800 bg-black/60 px-3 py-1.5 text-xs text-zinc-300">
            {BOTS.length * 3 + 1} bots
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {BOTS.map((b, i) => (
          <a
            href={APP_URL}
            key={b.name}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 card-lift circuit-border animate-rise"
          >
            <img
              src={b.img}
              alt={b.name}
              width={512}
              height={768}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 scanline" />
            <div className="absolute left-3 top-3 transition duration-500 group-hover:-translate-y-0.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                <MessageSquare className="h-3 w-3" /> {b.metric}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
              <h4 className="truncate text-sm font-bold text-white transition duration-500 group-hover:translate-y-[-2px] md:text-base">{b.name}</h4>
              <p className="mt-0.5 line-clamp-2 text-xs text-zinc-400">{b.desc}</p>
              <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-[oklch(0.75_0.25_300)] opacity-0 transition duration-500 group-hover:opacity-100">
                Chat now <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function MyBotsPane() {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">My Bots</h3>
        <p className="text-sm text-zinc-500">Your imported and custom characters.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <a href={APP_URL} className="flex aspect-[3/2] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/40 text-zinc-400 transition card-lift circuit-border hover:text-white">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-neutral-800 bg-black">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Create new bot</span>
          <span className="text-xs text-zinc-600">Or paste a Chai link above</span>
        </a>
        {BOTS.slice(0, 5).map((b) => (
          <a
            href={APP_URL}
            key={b.name}
            className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-3 card-lift circuit-border"
          >
            <img src={b.img} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 rounded-xl object-cover transition duration-500 group-hover:scale-105" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{b.name}</p>
              <p className="truncate text-xs text-zinc-500">{b.desc}</p>
            </div>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-neutral-800 text-zinc-400 transition group-hover:border-[oklch(0.65_0.25_295/0.6)] group-hover:text-white">
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function MyChatsPane() {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">My chats</h3>
        <p className="text-sm text-zinc-500">Continue your saved conversations.</p>
      </div>
      <div className="divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/50">
        {CHATS.map((c) => (
          <a
            href={APP_URL}
            key={c.name}
            className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 transition duration-300 hover:bg-[oklch(0.65_0.25_295/0.06)] hover:pl-5 md:px-5 md:py-4"
          >
            <img src={c.img} alt="" width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 rounded-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_-4px_oklch(0.65_0.25_295/0.7)]" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-white">{c.name}</p>
                <span className="hidden text-xs text-zinc-600 md:inline">·</span>
                <span className="hidden text-xs text-zinc-500 md:inline">{c.when}</span>
              </div>
              <p className="truncate text-xs text-zinc-500 md:text-sm">{c.snippet}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-neutral-800 bg-black/60 px-2 py-0.5 text-[10px] text-zinc-400 md:inline">{c.when}</span>
              <button
                aria-label="Delete"
                onClick={(e) => { e.preventDefault(); }}
                className="grid h-9 w-9 place-items-center rounded-lg border border-transparent text-zinc-500 transition hover:rotate-6 hover:border-[oklch(0.6_0.24_25/0.5)] hover:text-[oklch(0.75_0.22_25)]"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 card-lift circuit-border">
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[oklch(0.55_0.22_295/0.25)] blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-black text-[oklch(0.75_0.25_300)] transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:shadow-[0_0_24px_-4px_oklch(0.65_0.25_295/0.7)]">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
    </div>
  );
}
