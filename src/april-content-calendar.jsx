import { useState } from "react";

const calendarData = [
  {
    date: 15,
    day: "Tuesday",
    type: "Tool Breakdown",
    format: "Carousel (6–8 slides)",
    title: "Google Stitch 2.0 Just Dropped — and Figma Stock Fell 4%",
    hook: "Google just shipped voice-controlled UI design, an infinite AI canvas, and a file format that might change how design systems work forever.",
    body: `Slide 1: Hook — "Google Stitch 2.0 launched. Figma shares dropped 4% the same day. Here's why."

Slide 2: What's new — AI-native infinite canvas, multi-screen generation (5 screens at once), voice commands for real-time design critiques, and a brand new design agent that reasons across your entire project.

Slide 3: Vibe Designing — you don't specify components anymore. You describe what you want users to FEEL. "Premium and minimal like Stripe" or "playful and urgent like Duolingo." Stitch generates multiple directions.

Slide 4: The real game changer — DESIGN.md. A plain markdown file that stores your entire design system — colors, typography, spacing, component rules. Drop it into any project. Any AI agent (Claude Code, Cursor, Antigravity) reads it and builds on-brand UI automatically.

Slide 5: Why DESIGN.md matters — it's being called "README.md but for design systems." Portable, human-readable, machine-readable. No Figma exports needed. There's already a GitHub repo (awesome-design-md) with 2,400+ stars and DESIGN.md files for Stripe, Vercel, Linear, and Notion.

Slide 6: The catch — Stitch is still a Labs experiment. Availability issues persist, 68+ forum threads about downtime. Best for rapid prototyping, not production pipelines. Use Stitch to start. Use Figma to finish.

Slide 7: What this means — the first 80% of design work just became free. 550 generations/month at zero cost. The value is shifting from production to direction.

Slide 8: CTA — "Have you tried Stitch 2.0 yet? Is DESIGN.md the future of portable design systems?"`,
    audience: "Product Designers + Frontend Devs",
    cta: "Have you tried Stitch 2.0? Is DESIGN.md the future of portable design systems?",
    tag: "Tools",
  },
  {
    date: 16,
    day: "Wednesday",
    type: "Industry Take",
    format: "Text Post",
    title: "AI Can Generate 50 Screens Before Lunch. That's Not the Hard Part.",
    hook: "AI can generate 50 screens before lunch. That's not the hard part anymore.",
    body: `The hard part is making screen 51 feel like it belongs with the first 50.

Consistency. System thinking. Design logic.

NNGroup's State of UX 2026 report said it clearly — if you're just assembling components from a design system, you're already replaceable by AI.

The standardization power of AI means anyone can produce a decent-looking UI. The differentiator isn't output speed. It's:

→ Knowing WHY a layout works, not just THAT it works
→ Maintaining coherence across 200 screens, not just 1
→ Making decisions AI can't — edge cases, emotional context, cognitive load

The job isn't "make screens" anymore.
It's "make systems that scale."

Designers who think in systems will lead.
Designers who think in screens will compete with prompts.

What's your take — is the design industry ready for this shift?`,
    audience: "Product Designers + Design Leads",
    cta: "Is the design industry ready for this shift?",
    tag: "AI × Design",
  },
  {
    date: 17,
    day: "Thursday",
    type: "Tool Breakdown",
    format: "Carousel (6–7 slides)",
    title: "Figma MCP Just Changed the Design-to-Code Game",
    hook: "Figma just let AI agents edit your canvas directly. Using your actual design system.",
    body: `Slide 1: Hook — "AI agents can now create and edit components directly on the Figma canvas."

Slide 2: What happened — Figma's MCP server now allows Claude Code, Cursor, Codex, and Copilot to write directly to your Figma files using the use_figma tool.

Slide 3: Before vs After — Before: AI generates generic UI with no context. After: AI generates UI using YOUR tokens, components, and spacing system.

Slide 4: The game changer — Skills. Markdown files that teach agents how to behave on your canvas. Define conventions, sequencing, edge cases. Anyone can write a skill, no plugin required.

Slide 5: What this means for workflows — Figma is no longer just a design tool. It's shared infrastructure where agents and designers work together on the same canvas.

Slide 6: The real implication — your design system quality just became your competitive advantage. The rigor in naming tokens and structuring components determines what agents can do with them.

Slide 7: CTA — "Is your design system agent-ready?"`,
    audience: "Product Designers + Frontend Devs",
    cta: "Is your design system agent-ready?",
    tag: "Tools",
  },
  {
    date: 18,
    day: "Friday",
    type: "Industry Take",
    format: "Text Post",
    title: "The UX Job Market in 2026 — What's Actually Happening",
    hook: "The design job market isn't shrinking. It's compressing.",
    body: `Surveys from UXPA and User Interviews show team sizes stabilizing and potentially growing. That's the good news.

The harder truth? Available roles now demand breadth and judgment, not just deliverables.

What's actually happening:

→ Responsibilities that were spread across 3 specialists are now in 1 role
→ Junior supply still massively outpaces open positions
→ "Can you also code?" is becoming a real interview question
→ Strategic thinking beats pixel perfection in hiring conversations

The fundamentals haven't changed — understanding users, reducing friction, improving clarity.

But the bar has. Teams are leaner. Scrutiny is stronger. Every design decision needs a reason, not just a Dribbble-worthy screenshot.

The designers who thrive in 2026 are adaptable generalists who treat UX as strategic problem solving. Not deliverable production.

The question isn't "can you design?" anymore.
It's "can you think?"`,
    audience: "All Designers + Hiring Managers",
    cta: "What's the biggest shift you've seen in design hiring this year?",
    tag: "Industry",
  },
  {
    date: 19,
    day: "Saturday",
    type: "Rest",
    format: "—",
    title: "No Post",
    hook: "",
    body: "Engage with comments from the week's posts. Reply to every comment — this signals the algorithm to boost reach.",
    audience: "—",
    cta: "",
    tag: "Rest",
  },
  {
    date: 20,
    day: "Sunday",
    type: "Rest",
    format: "—",
    title: "No Post",
    hook: "",
    body: "Batch-create carousels and draft text for the upcoming week.",
    audience: "—",
    cta: "",
    tag: "Rest",
  },
  {
    date: 21,
    day: "Monday",
    type: "Workflow Guide",
    format: "Carousel (7–8 slides)",
    title: "The Vibe Coding Pipeline — Figma to Deployed Product",
    hook: "Design it. Describe it. Ship it. No waiting for dev sprints.",
    body: `Slide 1: Hook — "From Figma to a live product without writing traditional code. Here's the pipeline."

Slide 2: Step 1 — Design in Figma. Build your screens, components, and flows like you normally would. This is still where the thinking happens.

Slide 3: Step 2 — Figma Make / Stitch. Prompt your way to a functional prototype. AI pulls from your design system and generates working UI.

Slide 4: Step 3 — Lovable / Bolt. Move from prototype to a working app with backend. Natural language prompts → full-stack output.

Slide 5: Step 4 — Cursor / Claude Code. Refine, restructure, clean up AI-generated code. This is where quality control happens.

Slide 6: Step 5 — Deploy. One-click deploy to Netlify/Vercel. What took 3 sprints now takes 3 days.

Slide 7: The catch — AI generates code fast but doesn't think in systems. You still need to enforce consistency, catch edge cases, and make judgment calls. AI is the intern. You're the lead.

Slide 8: CTA — "Which step in this pipeline would change your workflow the most?"`,
    audience: "Product Designers + Indie Makers + Frontend Devs",
    cta: "Which step in this pipeline would change your workflow the most?",
    tag: "Vibe Coding",
  },
  {
    date: 22,
    day: "Tuesday",
    type: "Hot Take",
    format: "Text Post",
    title: "90% of AI-Generated UI Looks Exactly the Same",
    hook: "Rounded corners. Purple gradient. Inter font. Shadow cards. Congrats, you just described 90% of AI-generated UI.",
    body: `Every AI tool defaults to the same aesthetic:
→ Inter or system font
→ Purple-to-blue gradient
→ 8px border radius on everything
→ Card-based layout with drop shadows
→ White background, gray text

It's not bad design. It's no design. It's the statistical average of every UI ever trained on.

This is exactly why taste and point of view matter more than ever.

AI will always converge on the mean. A designer with a strong aesthetic POV will diverge from it.

The best AI-generated UI still needs:
→ A human who knows when to break the grid
→ Typography that has character, not just readability
→ Color choices that serve brand, not just accessibility checkboxes
→ Layout tension that creates visual hierarchy

The tools got faster.
The bar for what "good" looks like just got higher.

Craft isn't dead. Defaults are.`,
    audience: "UI Designers + Creative Directors",
    cta: "What's your go-to move to make a design feel human?",
    tag: "AI × Design",
  },
  {
    date: 23,
    day: "Wednesday",
    type: "Educational",
    format: "Carousel (5–7 slides)",
    title: "Agentic UX — The New Design Layer Nobody's Talking About",
    hook: "Your next user might not be a human. Here's what that changes.",
    body: `Slide 1: Hook — "60% of designers say AI agents will be a major design challenge in 2026. Most haven't started preparing."

Slide 2: What is Agentic UX — designing interfaces that work for AI agents that browse, click, and complete tasks on behalf of users. Think: AI booking your flights, filling forms, managing inboxes.

Slide 3: Why it matters now — browser companies are shipping agent-based browsing. Users ask, agents do. The UI becomes the machine-readable API.

Slide 4: What changes — semantic HTML matters more. Clear labeling matters more. Predictable navigation patterns matter more. If an agent can't parse your UI, your product loses users.

Slide 5: The design shift — we used to design for: Business + User. Now we design for: Business + User + Agent. Three stakeholders, one interface.

Slide 6: Practical starting points — structured data, ARIA labels, consistent naming, predictable flows, minimal ambiguity in CTAs.

Slide 7: CTA — "Is your product ready for AI agents as users?"`,
    audience: "Product Designers + PMs + Frontend Devs",
    cta: "Is your product ready for AI agents as users?",
    tag: "Agentic UX",
  },
  {
    date: 24,
    day: "Thursday",
    type: "Tool Comparison",
    format: "Carousel (6–8 slides)",
    title: "Lovable vs Bolt vs Stitch vs Figma Make — Which One Does What",
    hook: "Everyone's using vibe coding tools. Nobody knows which one to pick.",
    body: `Slide 1: Hook — "4 tools. 4 different strengths. Here's the honest breakdown."

Slide 2: Figma Make — Best for designers. Starts from your Figma files and design system. Great for prototypes that need to stay on-brand. Limitation: not for production-grade apps.

Slide 3: Google Stitch — Text/voice/image to UI. Experimental but powerful for rapid exploration. Best for early ideation and concept validation. Limitation: still rough on consistency.

Slide 4: Lovable — Best for MVPs. Full-stack apps from natural language. Supabase backend, auth, storage built in. Hit $300M ARR by January 2026. Limitation: complex architectures need manual refinement.

Slide 5: Bolt.new — Speed-first. Browser-based, instant preview. React frontends + Node.js backends from prompts. Figma import converts designs to React components. Limitation: high token consumption on fixes.

Slide 6: When to use which — Exploration → Stitch. Prototyping → Figma Make. MVP → Lovable. Speed build → Bolt.

Slide 7: The real answer — it's not one tool. It's a pipeline. Pick tools based on the job, not loyalty.

Slide 8: CTA — "Which one are you using? Did I miss your favorite?"`,
    audience: "Designers + Frontend Devs + Founders",
    cta: "Which one are you using? Did I miss your favorite?",
    tag: "Vibe Coding",
  },
  {
    date: 25,
    day: "Friday",
    type: "Trend Analysis",
    format: "Text Post",
    title: "The Anti-AI Aesthetic Is Becoming a Design Movement",
    hook: "After years of AI-polished perfection, the hottest design trend of 2026 is intentional imperfection.",
    body: `Adobe's 2026 Creative Trends report called it.
Kittl's design trends research confirmed it.
And it's everywhere on Dribbble right now.

Naive Design. Hand-drawn. Imperfect. Deliberately unpolished.

→ Wobbly doodles in brand identities
→ Hand-rendered, letterpress-inspired typography
→ Earthy textures — sand, stone, bark
→ Zine-style layouts with controlled chaos
→ Collage compositions with unexpected juxtapositions

Why now? Because AI made everything look the same.

When every tool produces pixel-perfect, mathematically balanced, statistically average UI — the thing that stands out is proof that a human made this.

It's the design equivalent of vinyl records in the Spotify era. Not better technically. Better emotionally.

This isn't anti-craft. It's hyper-craft. It takes MORE skill to make something feel intentionally imperfect than to let AI produce something generically polished.

The designers leaning into this aren't rejecting AI. They're using it for the boring parts and saving the human touch for the parts that need to feel alive.

Perfection is the new default. Character is the new premium.`,
    audience: "UI Designers + Brand Designers + Creative Directors",
    cta: "Are you seeing this trend in your projects? Polished vs raw — which direction are you leaning?",
    tag: "Design Trends",
  },
  {
    date: 26,
    day: "Saturday",
    type: "Rest",
    format: "—",
    title: "No Post",
    hook: "",
    body: "Engage with comments. Network with new connections. Save ideas from the feed.",
    audience: "—",
    cta: "",
    tag: "Rest",
  },
  {
    date: 27,
    day: "Sunday",
    type: "Rest",
    format: "—",
    title: "No Post",
    hook: "",
    body: "Prep final week content. Finalize carousels.",
    audience: "—",
    cta: "",
    tag: "Rest",
  },
  {
    date: 28,
    day: "Monday",
    type: "Workflow",
    format: "Text Post",
    title: "Design Systems Are the New Moat",
    hook: "When AI can generate any UI, the only thing it can't generate is your system.",
    body: `AI tools are getting faster at generating UI.
Lovable, Bolt, Stitch — they all produce decent-looking screens.

But here's what they all struggle with:

→ Consistent spacing across 200 screens
→ Token naming that makes sense at scale
→ Component logic that accounts for edge cases
→ The 47th variation of a button that still feels on-brand

That's not an AI problem. That's a design system problem.

And with Figma's MCP letting agents work directly with your tokens and components — the quality of your system now determines the quality of AI output.

Bad system = bad AI output at scale.
Great system = AI that actually ships on-brand.

Design systems used to be nice-to-have documentation.
In 2026, they're infrastructure.

The teams investing in rigorous, well-named, well-structured systems right now are building a competitive moat that AI amplifies instead of undermines.`,
    audience: "Senior Designers + Design Systems Engineers",
    cta: "Does your team treat the design system as infrastructure or decoration?",
    tag: "Design Systems",
  },
  {
    date: 29,
    day: "Tuesday",
    type: "Educational",
    format: "Carousel (5–7 slides)",
    title: "Vibe Designing — The 2026 Workflow Designers Need to Learn",
    hook: "Vibe coding was 2025. Vibe designing is 2026. Here's the difference.",
    body: `Slide 1: Hook — "67% of design teams at mid-to-large companies have integrated AI generation tools. But most are using them wrong."

Slide 2: What is vibe designing — describe the aesthetic, mood, or outcome in natural language. AI generates design assets. You curate, refine, and ship. Creative direction over manual production.

Slide 3: The 5-step workflow — 1) Define creative direction (write a design brief as a structured prompt). 2) Generate variations. 3) Curate the best output. 4) Refine with precision. 5) Ship with confidence.

Slide 4: What vibe designing is NOT — it's not "prompt and pray." It's disciplined creative direction. User research, information architecture, and accessibility still require human expertise.

Slide 5: The tools — Figma Make for prototyping, Stitch for exploration, Sleek for mobile, Cursor for refinement. Different tools for different layers.

Slide 6: The key insight — solo designers using vibe design tools are handling project loads that used to need a 5-person team. Speed is no longer a team size problem.

Slide 7: CTA — "Have you tried vibe designing? What's your stack?"`,
    audience: "Product Designers + Freelance Designers",
    cta: "Have you tried vibe designing? What's your stack?",
    tag: "Vibe Coding",
  },
  {
    date: 30,
    day: "Wednesday",
    type: "Hot Take",
    format: "Text Post",
    title: "The Design Industry Is Splitting in Two",
    hook: "In 2026, there are two types of designers. And the gap is growing fast.",
    body: `Type 1: Screen producers.
They open Figma, assemble components, follow the system, hand off specs. Their output is clean. Predictable. And increasingly automatable.

Type 2: System thinkers.
They define the rules AI follows. They design the logic behind the layout. They make the decisions that no prompt can make — context, emotion, edge cases, cognitive load.

This isn't about tools. Both types use Figma. Both might use AI.

The difference is what they're producing:
→ Deliverables vs decisions
→ Screens vs systems
→ Execution vs direction

NNGroup warned about this — equating UX with UI doesn't just mislabel the work. It leads to the conclusion that design is becoming irrelevant.

It's not. But the part that's purely about screen production? That part IS getting automated.

The part about understanding humans, reducing ambiguity, and building trust? That part is becoming more valuable.

The split is happening now.
Which side are you building toward?`,
    audience: "All Designers + Design Managers",
    cta: "Which side of this split do you see yourself on?",
    tag: "Industry",
  },
];

const tagColors = {
  "Design Trends": { bg: "#DBEAFE", text: "#1E40AF" },
  "AI × Design": { bg: "#D1FAE5", text: "#065F46" },
  "Tools": { bg: "#FEF3C7", text: "#92400E" },
  "Industry": { bg: "#E0E7FF", text: "#3730A3" },
  "Vibe Coding": { bg: "#FCE7F3", text: "#9D174D" },
  "Agentic UX": { bg: "#EDE9FE", text: "#5B21B6" },
  "Design Systems": { bg: "#CCFBF1", text: "#115E59" },
  "Rest": { bg: "#F5F5F4", text: "#A8A29E" },
};

const formatIcons = {
  "Text Post": "T",
  "Carousel (6–8 slides)": "C",
  "Carousel (6–7 slides)": "C",
  "Carousel (5–7 slides)": "C",
  "Carousel (7–8 slides)": "C",
  "—": "—",
};

export default function ContentCalendar() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [expandedContent, setExpandedContent] = useState(false);

  const activeTags = ["All", ...new Set(calendarData.filter(d => d.tag !== "Rest").map(d => d.tag))];
  const filtered = filter === "All" ? calendarData : calendarData.filter(d => d.tag === filter);
  const selectedData = selected !== null ? calendarData.find(d => d.date === selected) : null;
  
  const postCount = calendarData.filter(d => d.tag !== "Rest").length;
  const carouselCount = calendarData.filter(d => d.format.startsWith("Carousel")).length;
  const textCount = calendarData.filter(d => d.format === "Text Post").length;

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', -apple-system, sans-serif",
      background: "#FAFAF9",
      minHeight: "100vh",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ padding: "36px 32px 24px" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#A8A29E", fontWeight: 600, margin: "0 0 8px" }}>
          LinkedIn Content Calendar
        </p>
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "42px",
          fontWeight: 400,
          color: "#1C1917",
          margin: "0 0 6px",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}>
          April 15–30, 2026
        </h1>
        <p style={{ fontSize: "14px", color: "#78716C", margin: 0, lineHeight: 1.5 }}>
          {postCount} posts — design trends, AI automation, new tools, modern workflows. No personal content.
        </p>
      </div>

      {/* Stats Row */}
      <div style={{ padding: "0 32px 20px", display: "flex", gap: "8px" }}>
        {[
          { n: postCount, l: "Posts" },
          { n: carouselCount, l: "Carousels" },
          { n: textCount, l: "Text" },
          { n: "5", l: "Rest" },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid #E7E5E4",
            borderRadius: "10px",
            padding: "14px 12px",
            textAlign: "center",
          }}>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "26px", color: "#1C1917", display: "block" }}>{s.n}</span>
            <span style={{ fontSize: "11px", color: "#A8A29E", fontWeight: 500, letterSpacing: "0.5px" }}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div style={{ padding: "0 32px 16px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {activeTags.map(tag => (
          <button
            key={tag}
            onClick={() => { setFilter(tag); setSelected(null); }}
            style={{
              padding: "5px 14px",
              borderRadius: "100px",
              border: filter === tag ? "1.5px solid #1C1917" : "1px solid #D6D3D1",
              background: filter === tag ? "#1C1917" : "transparent",
              color: filter === tag ? "#FAFAF9" : "#78716C",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.15s ease",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ padding: "4px 32px 16px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
          gap: "8px",
        }}>
          {filtered.map((item) => {
            const isRest = item.tag === "Rest";
            const isSelected = selected === item.date;
            return (
              <div
                key={item.date}
                onClick={() => {
                  if (!isRest) {
                    setSelected(isSelected ? null : item.date);
                    setExpandedContent(false);
                  }
                }}
                style={{
                  background: isSelected ? "#1C1917" : "#FFFFFF",
                  border: isSelected ? "1.5px solid #1C1917" : "1px solid #E7E5E4",
                  borderRadius: "10px",
                  padding: "14px 14px 12px",
                  cursor: isRest ? "default" : "pointer",
                  transition: "all 0.2s ease",
                  opacity: isRest ? 0.4 : 1,
                  minHeight: "130px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "30px",
                      color: isSelected ? "#FAFAF9" : "#1C1917",
                      lineHeight: 1,
                    }}>{item.date}</span>
                    {!isRest && (
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isSelected ? "rgba(255,255,255,0.12)" : "#F5F5F4",
                        color: isSelected ? "#A8A29E" : "#78716C",
                      }}>
                        {formatIcons[item.format] || "T"}
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontSize: "10px",
                    color: "#A8A29E",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 500,
                    display: "block",
                    marginTop: "2px",
                  }}>{item.day}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <p style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: isSelected ? "#FAFAF9" : "#1C1917",
                    lineHeight: 1.35,
                    margin: "0 0 6px",
                  }}>{item.title}</p>
                  {!isRest && (
                    <span style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: "100px",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.3px",
                      textTransform: "uppercase",
                      background: isSelected ? "rgba(255,255,255,0.1)" : tagColors[item.tag]?.bg,
                      color: isSelected ? "#D6D3D1" : tagColors[item.tag]?.text,
                    }}>{item.tag}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      {selectedData && selectedData.tag !== "Rest" && (
        <div style={{
          margin: "8px 32px 32px",
          background: "#FFFFFF",
          border: "1px solid #E7E5E4",
          borderRadius: "14px",
          overflow: "hidden",
        }}>
          {/* Detail Header */}
          <div style={{
            padding: "24px 28px 20px",
            borderBottom: "1px solid #F5F5F4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span style={{
                  padding: "3px 10px",
                  borderRadius: "100px",
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  background: tagColors[selectedData.tag]?.bg,
                  color: tagColors[selectedData.tag]?.text,
                }}>{selectedData.tag}</span>
                <span style={{ fontSize: "12px", color: "#A8A29E" }}>{selectedData.type}</span>
                <span style={{ fontSize: "12px", color: "#D6D3D1" }}>•</span>
                <span style={{ fontSize: "12px", color: "#A8A29E" }}>{selectedData.format}</span>
                <span style={{ fontSize: "12px", color: "#D6D3D1" }}>•</span>
                <span style={{ fontSize: "12px", color: "#A8A29E" }}>{selectedData.audience}</span>
              </div>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "26px",
                fontWeight: 400,
                color: "#1C1917",
                margin: 0,
                letterSpacing: "-0.3px",
                lineHeight: 1.2,
              }}>{selectedData.title}</h2>
            </div>
            <span style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "48px",
              color: "#E7E5E4",
              lineHeight: 1,
              marginLeft: "16px",
            }}>{selectedData.date}</span>
          </div>

          {/* Hook */}
          <div style={{
            padding: "20px 28px",
            borderBottom: "1px solid #F5F5F4",
            background: "#FAFAF9",
          }}>
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#A8A29E", fontWeight: 600, display: "block", marginBottom: "6px" }}>
              Hook (First Line)
            </span>
            <p style={{
              fontSize: "16px",
              color: "#1C1917",
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.5,
              fontStyle: "italic",
            }}>"{selectedData.hook}"</p>
          </div>

          {/* Full Content */}
          <div style={{ padding: "20px 28px", borderBottom: "1px solid #F5F5F4" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#A8A29E", fontWeight: 600 }}>
                Full Content / Slide Breakdown
              </span>
              <button
                onClick={() => setExpandedContent(!expandedContent)}
                style={{
                  fontSize: "11px",
                  color: "#1C1917",
                  background: "#F5F5F4",
                  border: "1px solid #E7E5E4",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                {expandedContent ? "Collapse" : "Expand"}
              </button>
            </div>
            <div style={{
              maxHeight: expandedContent ? "none" : "120px",
              overflow: "hidden",
              position: "relative",
            }}>
              <pre style={{
                fontSize: "13px",
                color: "#44403C",
                margin: 0,
                lineHeight: 1.7,
                whiteSpace: "pre-wrap",
                fontFamily: "'DM Sans', sans-serif",
              }}>{selectedData.body}</pre>
              {!expandedContent && (
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60px",
                  background: "linear-gradient(transparent, #FFFFFF)",
                }} />
              )}
            </div>
          </div>

          {/* CTA */}
          <div style={{ padding: "16px 28px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#A8A29E", fontWeight: 600 }}>CTA:</span>
            <span style={{ fontSize: "13px", color: "#1C1917", fontWeight: 500 }}>{selectedData.cta}</span>
          </div>
        </div>
      )}
    </div>
  );
}
