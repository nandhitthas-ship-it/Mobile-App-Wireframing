import { useState } from "react";
import {
  Users,
  GitBranch,
  Smartphone,
  FileText,
  Search,
  ChevronRight,
  ArrowRight,
  Target,
  AlertCircle,
  CheckCircle2,
  Zap,
  MessageSquare,
  Heart,
  BarChart2,
  Bell,
  Settings,
  Home,
  User,
  Plus,
  Star,
  TrendingUp,
} from "lucide-react";

type Tab = "research" | "personas" | "flows" | "wireframes" | "process";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "research", label: "Research", icon: <Search size={14} /> },
  { id: "personas", label: "Personas", icon: <Users size={14} /> },
  { id: "flows", label: "User Flows", icon: <GitBranch size={14} /> },
  { id: "wireframes", label: "Wireframes", icon: <Smartphone size={14} /> },
  { id: "process", label: "Process", icon: <FileText size={14} /> },
];

const personas = [
  {
    initials: "AC",
    name: "Alex Chen",
    age: 28,
    role: "Product Manager",
    company: "Meridian Labs",
    quote: "I need to track my fitness goals between long work sprints without friction.",
    goals: ["Stay consistent with exercise", "Monitor progress over time", "Get smart nudges"],
    frustrations: ["Apps are too cluttered", "Data overload on dashboards", "Generic recommendations"],
    techLevel: 90,
    color: "#1B4FD8",
    bg: "#EEF2FF",
    tags: ["Early Adopter", "Data-driven", "Time-poor"],
    devices: ["iPhone 15 Pro", "Apple Watch Series 9"],
  },
  {
    initials: "MS",
    name: "Maria Santos",
    age: 42,
    role: "Nurse",
    company: "City General Hospital",
    quote: "I barely have time — I need something that just works without any thinking.",
    goals: ["Quick daily check-ins under 30s", "Simple habit tracking", "Sleep quality monitoring"],
    frustrations: ["Too many push notifications", "Complex navigation", "Requires too much manual input"],
    techLevel: 55,
    color: "#16A34A",
    bg: "#F0FDF4",
    tags: ["Pragmatist", "Routine-oriented", "Notification-averse"],
    devices: ["Samsung Galaxy S23", "Galaxy Watch 6"],
  },
  {
    initials: "JO",
    name: "James Okafor",
    age: 22,
    role: "University Student",
    company: "State University",
    quote: "I want to compete with friends and actually have fun staying fit.",
    goals: ["Social accountability features", "Gamification + streaks", "Free or low-cost premium"],
    frustrations: ["Paywalled core features", "No social layer", "Weak gamification"],
    techLevel: 95,
    color: "#E8320A",
    bg: "#FFF7F5",
    tags: ["Social-first", "Budget-conscious", "Competitive"],
    devices: ["iPhone 14", "AirPods Pro"],
  },
];

const researchMethods = [
  {
    method: "User Interviews",
    participants: 12,
    duration: "45–60 min each",
    insight: "Users abandon apps after 3 days if onboarding is over 5 steps",
    icon: <MessageSquare size={18} />,
  },
  {
    method: "Competitive Analysis",
    participants: 8,
    duration: "2 weeks",
    insight: "Top competitors lack social features — identified white space opportunity",
    icon: <BarChart2 size={18} />,
  },
  {
    method: "Survey",
    participants: 287,
    duration: "Async, 8 min avg",
    insight: "73% want personalized goal-setting; only 34% use current app recommendations",
    icon: <Star size={18} />,
  },
  {
    method: "Usability Testing",
    participants: 8,
    duration: "30 min each",
    insight: "Navigation hierarchy confused 6 of 8 testers — tabs outperformed hamburger menu",
    icon: <Target size={18} />,
  },
];

const keyInsights = [
  { stat: "73%", label: "want personalized goals", positive: true },
  { stat: "3 days", label: "avg app abandonment window", positive: false },
  { stat: "5+", label: "onboarding steps causes drop-off", positive: false },
  { stat: "81%", label: "prefer bottom nav tabs", positive: true },
  { stat: "68%", label: "want social accountability", positive: true },
  { stat: "2.1×", label: "retention with streaks + rewards", positive: true },
];

const processSteps = [
  {
    phase: "01",
    title: "Empathize",
    duration: "Week 1–2",
    color: "#1B4FD8",
    activities: [
      "Conducted 12 in-depth user interviews",
      "Distributed 287-response online survey",
      "Analyzed 8 competitor apps (Strava, MyFitnessPal, Whoop)",
      "Synthesized insights into affinity map",
    ],
    output: "Research Report + Affinity Map",
  },
  {
    phase: "02",
    title: "Define",
    duration: "Week 3",
    color: "#E8320A",
    activities: [
      "Created 3 primary user personas",
      "Wrote 5 core problem statements (HMW format)",
      "Mapped user journey for key flows",
      "Prioritized pain points by severity × frequency",
    ],
    output: "Persona Deck + Problem Statements",
  },
  {
    phase: "03",
    title: "Ideate",
    duration: "Week 4",
    color: "#16A34A",
    activities: [
      "Ran 2× design sprint ideation sessions",
      "Generated 60+ solution concepts via Crazy 8s",
      "Dot-voted to 12 priority concepts",
      "Sketched rough concepts on paper",
    ],
    output: "Concept Sketches + Feature Backlog",
  },
  {
    phase: "04",
    title: "Prototype",
    duration: "Week 5–6",
    color: "#7C3AED",
    activities: [
      "Designed 4 core screen wireframes (lo-fi)",
      "Built clickable prototype in Figma",
      "Documented design rationale",
      "Prepared test script for usability sessions",
    ],
    output: "Lo-fi Wireframes + Prototype",
  },
  {
    phase: "05",
    title: "Test",
    duration: "Week 7",
    color: "#D97706",
    activities: [
      "Ran 8 moderated usability tests",
      "Collected quantitative task-success metrics",
      "Identified 3 critical navigation issues",
      "Iterated on nav architecture",
    ],
    output: "Usability Report + Iteration Log",
  },
];

// ---- Phone Frame ----
function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative bg-[#1A1A1A] rounded-[32px] p-[10px] shadow-2xl"
        style={{ width: 200, height: 400 }}
      >
        {/* notch */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[22px] bg-[#1A1A1A] rounded-b-2xl z-20" />
        <div
          className="relative bg-[#F5F4F0] rounded-[24px] overflow-hidden h-full flex flex-col"
        >
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-7 pb-1 bg-[#F5F4F0] shrink-0">
            <span className="text-[8px] font-semibold text-[#141414]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-[6px] border border-[#141414] rounded-[1px] relative">
                <div className="absolute inset-[1px] right-[2px] bg-[#141414] rounded-[0.5px]" />
              </div>
            </div>
          </div>
          {/* content */}
          <div className="flex-1 overflow-hidden">
            {children}
          </div>
          {/* home indicator */}
          <div className="flex justify-center pb-2 shrink-0">
            <div className="w-10 h-1 bg-[#141414] rounded-full opacity-30" />
          </div>
        </div>
      </div>
      <span
        className="text-xs font-semibold tracking-wider uppercase text-muted-foreground"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px" }}
      >
        {label}
      </span>
    </div>
  );
}

// ---- Wireframe Block (lo-fi gray box) ----
function WfBlock({ h, className = "" }: { h?: string; className?: string }) {
  return (
    <div
      className={`bg-[#DDDBD3] rounded-sm ${className}`}
      style={{ height: h }}
    />
  );
}
function WfLine({ w = "100%", short = false }: { w?: string; short?: boolean }) {
  return (
    <div
      className="bg-[#CCCAC2] rounded-full"
      style={{ height: 5, width: short ? "60%" : w, marginBottom: 4 }}
    />
  );
}
function WfAvatar({ size = 28 }: { size?: number }) {
  return (
    <div
      className="bg-[#C0BEB6] rounded-full shrink-0 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div className="w-1/2 h-1/2 bg-[#DDDBD3] rounded-full" />
    </div>
  );
}
function WfBtn({ full = false, dark = false }: { full?: boolean; dark?: boolean }) {
  return (
    <div
      className={`rounded-sm ${dark ? "bg-[#6B6B68]" : "bg-[#DDDBD3]"} ${full ? "w-full" : "w-2/3 mx-auto"}`}
      style={{ height: 22 }}
    />
  );
}
function WfIcon({ size = 14 }: { size?: number }) {
  return (
    <div
      className="bg-[#C0BEB6] rounded-sm shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

// ---- Wireframe Screens ----
function SplashScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 px-5 bg-[#F5F4F0]">
      <div className="w-14 h-14 bg-[#BBBAB2] rounded-2xl" />
      <WfLine w="70%" />
      <WfLine w="50%" short />
      <div className="mt-4 w-full flex flex-col gap-2">
        <WfBtn full dark />
        <WfBtn full />
      </div>
    </div>
  );
}

function OnboardingScreen() {
  return (
    <div className="h-full flex flex-col px-4 pt-2 gap-3 bg-[#F5F4F0]">
      {/* progress */}
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? "bg-[#6B6B68]" : "bg-[#DDDBD3]"}`} />
        ))}
      </div>
      <WfBlock h="90px" className="w-full" />
      <WfLine />
      <WfLine short />
      <div className="flex flex-col gap-2 mt-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-[#ECEAE4] rounded-sm">
            <WfIcon size={16} />
            <WfLine w="60%" />
          </div>
        ))}
      </div>
      <div className="mt-auto mb-1">
        <WfBtn full dark />
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F5F4F0]">
      {/* header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between">
        <div>
          <WfLine w="80px" />
          <WfLine w="50px" short />
        </div>
        <WfAvatar size={26} />
      </div>
      {/* hero card */}
      <div className="mx-3 bg-[#DDDBD3] rounded-md p-3 mb-3" style={{ height: 80 }}>
        <WfLine w="50%" />
        <WfLine w="30%" short />
        <div className="mt-2 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 bg-[#C8C6BF] rounded-sm" style={{ height: 24 }} />
          ))}
        </div>
      </div>
      {/* section label */}
      <div className="px-3 mb-1">
        <WfLine w="60px" />
      </div>
      {/* activity list */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="mx-3 mb-2 flex items-center gap-2 bg-white rounded-sm p-2">
          <WfIcon size={24} />
          <div className="flex-1">
            <WfLine w="70%" />
            <WfLine w="40%" short />
          </div>
          <WfIcon size={14} />
        </div>
      ))}
      {/* bottom nav */}
      <div className="mt-auto border-t border-[#DDDBD3] flex justify-around py-2 bg-white">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <WfIcon size={16} />
            <div className={`h-1 w-6 rounded-full ${i === 1 ? "bg-[#6B6B68]" : "bg-transparent"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="h-full flex flex-col bg-[#F5F4F0]">
      {/* header */}
      <div className="px-4 pt-1 pb-3 flex items-center justify-between">
        <WfLine w="50px" />
        <WfIcon size={16} />
      </div>
      {/* avatar area */}
      <div className="flex flex-col items-center gap-2 pb-4">
        <WfAvatar size={48} />
        <WfLine w="80px" />
        <WfLine w="60px" short />
      </div>
      {/* stats row */}
      <div className="mx-3 flex gap-2 mb-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 bg-white rounded-sm p-2 flex flex-col items-center gap-1">
            <WfLine w="30px" />
            <WfLine w="40px" short />
          </div>
        ))}
      </div>
      {/* settings list */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="mx-3 mb-[6px] flex items-center gap-2 bg-white rounded-sm p-2">
          <WfIcon size={16} />
          <WfLine w="60%" />
          <WfIcon size={10} />
        </div>
      ))}
      {/* bottom nav */}
      <div className="mt-auto border-t border-[#DDDBD3] flex justify-around py-2 bg-white">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <WfIcon size={16} />
            <div className={`h-1 w-6 rounded-full ${i === 4 ? "bg-[#6B6B68]" : "bg-transparent"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

const wireframeScreens = [
  { label: "01 — Splash", component: <SplashScreen /> },
  { label: "02 — Onboarding", component: <OnboardingScreen /> },
  { label: "03 — Home Feed", component: <HomeScreen /> },
  { label: "04 — Profile", component: <ProfileScreen /> },
];

// ---- Flow Node ----
function FlowNode({
  label,
  type,
  index,
}: {
  label: string;
  type: "start" | "step" | "decision" | "optional" | "end";
  index: number;
}) {
  const config: Record<string, { bg: string; border: string; text: string; shape: string }> = {
    start: { bg: "#1B4FD8", border: "#1B4FD8", text: "#FFFFFF", shape: "rounded-full" },
    step: { bg: "#FFFFFF", border: "#141414", text: "#141414", shape: "rounded-sm" },
    decision: { bg: "#FEF3C7", border: "#D97706", text: "#141414", shape: "rounded-lg" },
    optional: { bg: "#F5F4F0", border: "#6B6B68", text: "#6B6B68", shape: "rounded-sm" },
    end: { bg: "#E8320A", border: "#E8320A", text: "#FFFFFF", shape: "rounded-full" },
  };
  const c = config[type];
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex items-center justify-center text-xs font-semibold border-2 px-4 py-2 ${c.shape} transition-all hover:scale-105`}
        style={{
          backgroundColor: c.bg,
          borderColor: c.border,
          color: c.text,
          minWidth: 120,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ---- Main Tabs ----
function ResearchTab() {
  return (
    <div className="space-y-10">
      {/* key stats */}
      <section>
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Key Findings
          </span>
          <div className="flex-1 border-t border-border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {keyInsights.map((item) => (
            <div
              key={item.stat}
              className="bg-card border border-border p-5 hover:border-foreground/20 transition-colors"
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: item.positive ? "#1B4FD8" : "#E8320A",
                }}
              >
                {item.stat}
              </div>
              <div className="text-sm text-muted-foreground leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* research methods */}
      <section>
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Research Methods
          </span>
          <div className="flex-1 border-t border-border" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {researchMethods.map((r) => (
            <div
              key={r.method}
              className="bg-card border border-border p-5 group hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 bg-secondary flex items-center justify-center text-foreground shrink-0">
                  {r.icon}
                </div>
                <div>
                  <div
                    className="font-semibold text-base"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {r.method}
                  </div>
                  <div
                    className="text-xs text-muted-foreground mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    n={r.participants} · {r.duration}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                <span>{r.insight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* hmw statements */}
      <section>
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            How Might We…
          </span>
          <div className="flex-1 border-t border-border" />
        </div>
        <div className="space-y-2">
          {[
            "…reduce onboarding to under 4 steps while still capturing meaningful goal data?",
            "…design social features that motivate without triggering social comparison anxiety?",
            "…surface relevant metrics without overwhelming users with data?",
            "…make daily check-ins feel effortless for users with unpredictable schedules?",
            "…build a reward system that sustains motivation beyond the first week?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-4 bg-card border border-border px-5 py-4 hover:border-accent/50 transition-colors group">
              <span
                className="text-xs font-bold text-primary shrink-0 mt-0.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                HMW{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed">{q}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PersonasTab() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <div className="space-y-6">
      {/* selector */}
      <div className="flex gap-2 flex-wrap">
        {personas.map((person, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-all ${
              active === i
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/40"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              style={{ backgroundColor: person.color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {person.initials}
            </div>
            {person.name}
          </button>
        ))}
      </div>

      {/* persona card */}
      <div className="grid sm:grid-cols-3 gap-0 border border-border bg-card overflow-hidden">
        {/* identity */}
        <div className="p-6 border-r border-border flex flex-col gap-5">
          <div>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
              style={{ backgroundColor: p.color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {p.initials}
            </div>
            <div
              className="text-2xl font-bold leading-tight mb-1"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {p.name}
            </div>
            <div className="text-sm text-muted-foreground">{p.role}</div>
            <div className="text-sm text-muted-foreground">{p.company}</div>
          </div>
          <div className="flex gap-1 flex-wrap">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 bg-secondary text-foreground/70"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Tech Literacy
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${p.techLevel}%`, backgroundColor: p.color }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Novice</span>
              <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Expert</span>
            </div>
          </div>
          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Devices
            </div>
            {p.devices.map((d) => (
              <div key={d} className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                <Smartphone size={10} />
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* quote + goals */}
        <div className="p-6 border-r border-border flex flex-col gap-6">
          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              In Their Words
            </div>
            <blockquote
              className="text-lg leading-snug font-medium"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                borderLeft: `3px solid ${p.color}`,
                paddingLeft: "1rem",
              }}
            >
              "{p.quote}"
            </blockquote>
          </div>
          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Goals
            </div>
            <div className="space-y-2">
              {p.goals.map((g) => (
                <div key={g} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: p.color }} />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* frustrations */}
        <div className="p-6 flex flex-col gap-6">
          <div>
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Frustrations
            </div>
            <div className="space-y-2">
              {p.frustrations.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm">
                  <AlertCircle size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto bg-secondary p-4">
            <div
              className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Age
            </div>
            <div
              className="text-3xl font-bold"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: p.color }}
            >
              {p.age}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowsTab() {
  const flows = [
    {
      title: "New User Onboarding",
      description: "First-time user download → completing profile setup",
      steps: [
        { label: "Download App", type: "start" as const },
        { label: "View Splash Screen", type: "step" as const },
        { label: "Sign Up / Log In", type: "step" as const },
        { label: "Existing User?", type: "decision" as const },
        { label: "Set Fitness Goals", type: "step" as const },
        { label: "Grant Permissions", type: "step" as const },
        { label: "Home Dashboard", type: "end" as const },
      ],
      decisionBranches: ["Yes → Skip to Dashboard", "No → Set Goals"],
    },
    {
      title: "Log Activity",
      description: "User records a workout session from the home screen",
      steps: [
        { label: "Home Dashboard", type: "start" as const },
        { label: "Tap + Log Activity", type: "step" as const },
        { label: "Select Activity Type", type: "step" as const },
        { label: "Manual or Auto?", type: "decision" as const },
        { label: "Confirm & Save", type: "step" as const },
        { label: "View Summary", type: "step" as const },
        { label: "Share to Feed?", type: "optional" as const },
      ],
      decisionBranches: ["Manual → Enter duration/reps", "Auto → Start timer"],
    },
  ];

  const [activeFlow, setActiveFlow] = useState(0);
  const flow = flows[activeFlow];

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {flows.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFlow(i)}
            className={`px-4 py-2 text-sm font-medium border transition-all ${
              activeFlow === i
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/40"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {f.title}
          </button>
        ))}
      </div>

      <div className="bg-card border border-border p-6">
        <div className="mb-6">
          <div
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {flow.title}
          </div>
          <div className="text-sm text-muted-foreground">{flow.description}</div>
        </div>

        {/* flow diagram */}
        <div className="flex flex-col items-center gap-0 py-4">
          {flow.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <FlowNode label={step.label} type={step.type} index={i} />
              {i < flow.steps.length - 1 && (
                <div className="flex flex-col items-center my-1">
                  <div className="w-px h-5 bg-border" />
                  <div className="w-0 h-0" style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid #14141433" }} />
                  {step.type === "decision" && (
                    <div
                      className="text-[10px] text-muted-foreground mt-1 text-center px-2 py-0.5 bg-yellow-50 border border-yellow-200"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {flow.decisionBranches[0]}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* legend */}
        <div className="mt-6 pt-4 border-t border-border">
          <div
            className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Legend
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Start / End", bg: "#1B4FD8", text: "#FFF", shape: "rounded-full" },
              { label: "Step", bg: "#FFF", border: "#141414", text: "#141414", shape: "rounded-sm" },
              { label: "Decision", bg: "#FEF3C7", border: "#D97706", text: "#141414", shape: "rounded-lg" },
              { label: "Optional", bg: "#F5F4F0", border: "#6B6B68", text: "#6B6B68", shape: "rounded-sm" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className={`w-8 h-5 border ${item.shape}`}
                  style={{ backgroundColor: item.bg, borderColor: item.border || item.bg }}
                />
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WireframesTab() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {wireframeScreens.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium border transition-all ${
              active === i
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/40"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* wireframe preview */}
        <div className="flex items-center justify-center bg-secondary/50 border border-border py-10 px-6">
          <PhoneFrame label={wireframeScreens[active].label}>
            {wireframeScreens[active].component}
          </PhoneFrame>
        </div>

        {/* all screens overview */}
        <div className="flex flex-col gap-4">
          <div
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            All Screens
          </div>
          <div className="grid grid-cols-2 gap-4">
            {wireframeScreens.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-2 p-3 border transition-all ${
                  active === i ? "border-foreground" : "border-border hover:border-foreground/30"
                } bg-card`}
              >
                <div
                  className="relative bg-[#1A1A1A] rounded-[14px] p-[4px] w-full"
                  style={{ aspectRatio: "9/16" }}
                >
                  <div className="bg-[#F5F4F0] rounded-[10px] overflow-hidden h-full">
                    <div className="scale-50 origin-top-left" style={{ width: "200%", height: "200%", transform: "scale(0.5)", transformOrigin: "top left" }}>
                      {s.component}
                    </div>
                  </div>
                </div>
                <span
                  className="text-[10px] text-muted-foreground"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* annotation */}
      <div className="bg-card border border-border p-5">
        <div
          className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Design Notes — {wireframeScreens[active].label}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-foreground/80">
          {[
            {
              label: "Fidelity",
              value: "Low — structural intent only. Grayscale boxes represent content zones.",
            },
            {
              label: "Purpose",
              value: "Validate information architecture and user flow before visual design.",
            },
            {
              label: "Next Step",
              value: "Conduct usability test with clickable prototype, then iterate.",
            },
          ].map((note) => (
            <div key={note.label}>
              <div
                className="text-[11px] font-semibold tracking-wide uppercase text-primary mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {note.label}
              </div>
              <div className="leading-relaxed">{note.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-3 mb-6">
        <span
          className="text-xs font-semibold tracking-widest uppercase text-muted-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Design Thinking Framework
        </span>
        <div className="flex-1 border-t border-border" />
        <span
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          7 weeks total
        </span>
      </div>

      {processSteps.map((step, i) => (
        <div key={step.phase} className="border border-border bg-card overflow-hidden">
          <div
            className="flex items-stretch"
          >
            {/* phase number */}
            <div
              className="flex flex-col items-center justify-center px-5 py-6 min-w-[80px]"
              style={{ backgroundColor: step.color }}
            >
              <span
                className="text-white text-2xl font-bold"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {step.phase}
              </span>
            </div>

            {/* content */}
            <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-3">
                  <div
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <span
                    className="text-[11px] text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.duration}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {step.activities.map((a, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <div
                        className="w-1 h-1 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: step.color }}
                      />
                      <span className="text-foreground/80">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="sm:text-right shrink-0"
              >
                <div
                  className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Output
                </div>
                <div
                  className="text-xs font-semibold px-3 py-2 inline-block"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: step.color + "15",
                    color: step.color,
                    border: `1px solid ${step.color}40`,
                  }}
                >
                  {step.output}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---- Root ----
export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("research");

  const tabContent: Record<Tab, React.ReactNode> = {
    research: <ResearchTab />,
    personas: <PersonasTab />,
    flows: <FlowsTab />,
    wireframes: <WireframesTab />,
    process: <ProcessTab />,
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-primary flex items-center justify-center">
                  <Smartphone size={14} className="text-white" />
                </div>
                <div>
                  <div
                    className="text-base font-bold leading-tight"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    FitPulse
                  </div>
                  <div
                    className="text-[10px] text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    UX DESIGN BRIEF
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="text-[11px] text-muted-foreground hidden sm:block"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                v1.0 · 2024
              </span>
              <div className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold">
                Lo-fi Wireframes
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-0 -mb-px overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[11px] font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#E8320A" }}
            >
              {TABS.find((t) => t.id === activeTab)?.label}
            </span>
            <ArrowRight size={10} className="text-primary" />
            <span
              className="text-[11px] tracking-wide text-muted-foreground"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              FitPulse Mobile Application
            </span>
          </div>
          <h1
            className="text-4xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {activeTab === "research" && "User Research"}
            {activeTab === "personas" && "User Personas"}
            {activeTab === "flows" && "User Flows"}
            {activeTab === "wireframes" && "Wireframe Screens"}
            {activeTab === "process" && "Design Process"}
          </h1>
          <p className="text-muted-foreground mt-1 text-sm max-w-lg leading-relaxed">
            {activeTab === "research" && "Qualitative and quantitative findings from 12 interviews, 287 survey responses, and competitive analysis."}
            {activeTab === "personas" && "Three primary personas synthesized from user research to guide design decisions."}
            {activeTab === "flows" && "Task-flow diagrams for core user journeys within the FitPulse application."}
            {activeTab === "wireframes" && "Low-fidelity screens representing information architecture before visual design."}
            {activeTab === "process" && "End-to-end design thinking methodology from empathize through test."}
          </p>
        </div>

        {tabContent[activeTab]}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            FitPulse · UX Research & Design · Sprint 1
          </span>
          <div className="flex gap-4">
            {["Research", "Personas", "Flows", "Wireframes"].map((label) => (
              <button
                key={label}
                onClick={() => setActiveTab(label.toLowerCase() as Tab)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
