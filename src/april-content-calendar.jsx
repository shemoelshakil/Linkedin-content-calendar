import { useState } from "react";

const CD = [
{d:16,day:"Wednesday",type:"Carousel",fmt:"Carousel — 8 slides",title:"Google Stitch 2.0 Just Dropped — and Figma Stock Fell 4%",hook:`Google just shipped voice-controlled UI design, an infinite AI canvas, and a file format that could change design systems forever.`,body:`SLIDE 1 (HOOK):
Google Stitch 2.0 just launched.
Figma shares dropped 4% the same day.
Here's what happened — and why it matters. ↓

SLIDE 2 (WHAT'S NEW):
Stitch evolved from a simple text-to-UI tool into a full AI-native design canvas.

What shipped in March 2026:
→ Infinite canvas (not single screens anymore)
→ Multi-screen generation — 5 connected screens at once
→ Voice Canvas — talk to your design, get real-time critiques
→ Design Agent that reasons across your entire project
→ 550 free generations/month (350 standard + 200 pro)

SLIDE 3 (VIBE DESIGNING):
Stitch introduced "Vibe Designing."

Instead of specifying exact components, you describe what you want users to FEEL:

"Premium and minimal, like Stripe"
"Urgent but not pushy — get users to sign up in 30 seconds"
"Playful and colorful, targeted at Gen Z"

Stitch generates multiple design directions that match that vibe. You pick. You refine. You ship.

SLIDE 4 (DESIGN.MD — THE REAL GAME CHANGER):
The most disruptive thing in Stitch 2.0 isn't the canvas. It's DESIGN.md.

A plain markdown file that stores your entire design system:
→ Color palette + semantic tokens
→ Typography (families, sizes, weights)
→ Spacing scale + layout rules
→ Component patterns + border radius + shadows

Drop it into ANY project. Any AI agent — Claude Code, Cursor, Antigravity — reads it and builds on-brand UI automatically.

It's being called "README.md but for design systems."

SLIDE 5 (WHY DESIGN.MD MATTERS):
There's already a GitHub repo called awesome-design-md with 2,400+ stars.

Pre-built DESIGN.md files for Stripe, Vercel, Linear, Notion, Figma, and more.

Write your design system ONCE as a markdown file. Every AI tool in your pipeline reads it. Every output stays consistent.

No Figma exports. No JSON schemas. No special tooling. Just text that machines understand.

SLIDE 6 (STITCH vs FIGMA — HONEST TAKE):
Stitch is NOT a Figma replacement:

Stitch wins at: speed-to-concept, early exploration, generating 5+ variations fast, zero cost
Figma wins at: collaboration, pixel-perfect editing, design system management, production workflows

Smart play: Use Stitch to start. Use Figma to finish.

SLIDE 7 (THE CATCH):
Stitch is still a Google Labs experiment.
→ No SLA, no guaranteed uptime
→ 68+ forum threads about "Sorry, Stitch is unavailable"
→ Google has a history of killing Labs products
→ No fine-grained editing — can't select elements like in Figma
→ Generic output unless you bring your own DESIGN.md

A prototyping powerhouse. Not a production tool. Yet.

SLIDE 8 (CTA):
The first 80% of UI design work just became free.

The value is shifting from production to direction. From assembling screens to defining the system AI follows.

Have you tried Stitch 2.0? Is DESIGN.md the future of portable design systems?

Drop your take below ↓`,aud:"Product Designers + Frontend Devs + Founders",cta:"Have you tried Stitch 2.0? Is DESIGN.md the future of portable design systems?",tag:"Tools"},

{d:17,day:"Thursday",type:"Text",fmt:"Text Post",title:"AI Can Generate 50 Screens Before Lunch. That's Not the Hard Part.",hook:`AI can generate 50 screens before lunch.\nThat's not the hard part anymore.`,body:`AI can generate 50 screens before lunch.
That's not the hard part anymore.

The hard part is making screen 51 feel like it belongs with the first 50.

Consistency. System thinking. Design logic.

NNGroup's State of UX 2026 report put it bluntly — if you're just assembling components from a design system, you're already replaceable by AI.

The standardization power of these tools means anyone can produce a decent-looking UI. From a distance, it even looks professional.

But zoom in and you see the cracks:
→ Spacing that's "close enough" but not systematic
→ Typography that's readable but has no character
→ Layouts that work but don't communicate hierarchy
→ Components that look fine alone but clash when combined

The differentiator isn't output speed. It's:

→ Knowing WHY a layout works, not just THAT it works
→ Maintaining coherence across 200 screens, not just 1
→ Making decisions AI can't — edge cases, emotional context, cognitive load
→ Building systems that scale, not just screens that ship

A 2026 Sleek design report found 67% of design teams at mid-to-large companies have integrated AI generation tools into their workflow.

But the teams shipping the best products aren't the ones generating the most screens.

They're the ones with the strongest systems behind those screens.

The job isn't "make screens" anymore.
It's "make systems that scale."

What do you think — is the design industry ready for this shift?`,aud:"Product Designers + Design Leads",cta:"Is the design industry ready for this shift?",tag:"AI × Design"},

{d:18,day:"Friday",type:"Carousel",fmt:"Carousel — 7 slides",title:"Figma MCP Just Changed the Design-to-Code Game",hook:`Figma just let AI agents write directly to your canvas.\nUsing your actual design system. For free.`,body:`SLIDE 1 (HOOK):
AI agents can now CREATE and EDIT components directly on the Figma canvas.

Using your tokens. Your components. Your spacing system.

Here's what changed — and why your design system quality just became your biggest competitive advantage ↓

SLIDE 2 (WHAT HAPPENED):
Figma launched the beta of its MCP server with write access.

Through the new use_figma tool, AI agents can now:
→ Create frames, components, and variables in your Figma files
→ Apply auto layout using your conventions
→ Build 72+ component variants by reading your existing library first
→ Generate entire screens that inherit your tokens and naming

Works with: Claude Code, Codex, Cursor, Copilot in VS Code, Warp, Firebender, and more.

Free during beta. Usage-based pricing coming later.

Figma expects Q1 2026 revenue between $315-317M — 38% year-over-year growth. MCP adoption is a big driver.

SLIDE 3 (BEFORE vs AFTER):
BEFORE: You prompt AI to generate a screen. It comes back looking like a wireframe by someone who's never seen your product. Wrong font. Wrong components. Arbitrary spacing.

AFTER: The AI reads your Figma library first. Uses YOUR buttons, YOUR cards, YOUR spacing scale. Output inherits your design system — not a generic template.

The difference: "close enough" vs "on-brand."

SLIDE 4 (SKILLS — THE REAL UNLOCK):
Skills are markdown files that teach agents HOW to behave on your canvas:
→ Which steps to follow
→ Which conventions to respect
→ Which tools to call and in what order

Anyone can write a skill. No plugin dev. No code. Just markdown.

Community skills already live:
→ /sync-figma-token — sync tokens with drift detection
→ /edit-figma-design — orchestrate design workflows
→ /multi-agent — parallel workflows across tools

SLIDE 5 (THE FLYWHEEL):
Figma's blog: "AI strengthens your design system, which powers better AI code generation."

Your system quality DIRECTLY determines AI output quality:
→ Well-named tokens = accurate AI output
→ Structured components = reusable AI output
→ Documented conventions = consistent AI output

Bad system = bad AI at scale.
Great system = AI that ships on-brand.

SLIDE 6 (THE CATCH):
Independent testers found 85-90% styling inaccuracy translating Figma nodes to web code via MCP.

Agent output is non-deterministic — same prompt, different results.

Starter plan: capped at 6 MCP tool calls/month.

Powerful. Early. Not production-ready for everything. But the direction is undeniable.

SLIDE 7 (CTA):
The Figma canvas is no longer just a design tool. It's shared infrastructure where agents and designers work together.

Your design system quality just became your moat.

Is your design system agent-ready?
Drop your take below ↓`,aud:"Product Designers + Frontend Devs + DS Engineers",cta:"Is your design system agent-ready?",tag:"Tools"},

{d:19,day:"Saturday",type:"Rest",fmt:"—",title:"No Post — Engage & Reply",hook:"",body:`REST DAY ACTIONS:\n→ Reply to every comment on this week's posts (algorithm signal)\n→ Comment on 5-10 posts from designers/devs in your network\n→ Save trending posts for content inspiration\n→ Check analytics — which hook performed best?`,aud:"—",cta:"",tag:"Rest"},

{d:20,day:"Sunday",type:"Rest",fmt:"—",title:"No Post — Batch Create",hook:"",body:`REST DAY ACTIONS:\n→ Design carousels for Monday + Wednesday\n→ Draft text posts for Tuesday + Thursday + Friday\n→ Schedule everything in advance`,aud:"—",cta:"",tag:"Rest"},

{d:21,day:"Monday",type:"Carousel",fmt:"Carousel — 8 slides",title:"The Vibe Coding Pipeline — Figma to Deployed Product in Days",hook:`Design it. Describe it. Ship it.\nNo waiting for dev sprints. Here's the exact pipeline.`,body:`SLIDE 1 (HOOK):
From Figma to a live product. Without writing traditional code. Without waiting for dev sprints.

Here's the exact pipeline designers are using in 2026 ↓

SLIDE 2 (WHAT IS VIBE CODING):
Vibe coding = describe what you want in natural language, AI handles the implementation.

Coined by Andrej Karpathy (co-founder of OpenAI, former Tesla AI director) in February 2025.

By 2026:
→ 92% of US developers use AI coding tools daily
→ 41% of global code is AI-generated
→ Lovable hit $300M ARR in under a year
→ Collins Dictionary named "vibe coding" Word of the Year

Not a niche. The new default.

SLIDE 3 (STEP 1 — DESIGN IN FIGMA):
Start where you always start. Build screens, components, flows in Figma.

This is still where the THINKING happens:
→ Information architecture
→ User flows and edge cases
→ Component structure
→ Design system decisions

AI can generate UI. Only a designer can define the system behind it.

SLIDE 4 (STEP 2 — PROTOTYPE WITH FIGMA MAKE OR STITCH):
Take your Figma designs → prompt to working prototype.

Figma Make: Pulls from your design system. Stays on-brand. Best for teams with Figma libraries.

Google Stitch: AI-native canvas. Voice commands. 5 screens at once. Best for rapid exploration. Free — 550 gen/month.

Idea → interactive prototype in minutes.

SLIDE 5 (STEP 3 — BUILD WITH LOVABLE OR BOLT):
Prototype → working app.

Lovable: Full-stack from conversation. Supabase backend + auth + storage built in. GitHub sync. Custom domains.

Bolt.new: Browser-based. React + Node.js from prompts. Figma import → React components. One-click deploy.

What used to take 3 sprints now takes 3 days.

SLIDE 6 (STEP 4 — REFINE WITH CURSOR OR CLAUDE CODE):
AI generates code fast but doesn't think in systems.

Quality control layer:
→ Clean up spaghetti code
→ Enforce component consistency
→ Handle edge cases AI missed
→ Restructure for scalability

Cursor: AI code editor on VS Code. Deep codebase awareness.
Claude Code: Terminal-based. Great for refactoring.

SLIDE 7 (STEP 5 — DEPLOY):
One-click deploy to Netlify or Vercel. Custom domain. SSL. Done.

Full pipeline: Figma → Make/Stitch → Lovable/Bolt → Cursor/Claude Code → Deploy

5 steps. Days, not months.

SLIDE 8 (THE CAVEAT + CTA):
AI is the most powerful design assistant ever created. But it's still an assistant.

A 2025 audit found 10% of Lovable-generated apps had critical vulnerabilities. 45% of AI-generated code contains security issues.

Speed without judgment is just fast failure.

Which step would change YOUR workflow the most? Comment below ↓`,aud:"Product Designers + Indie Makers + Frontend Devs",cta:"Which step in this pipeline would change your workflow the most?",tag:"Vibe Coding"},

{d:22,day:"Tuesday",type:"Text",fmt:"Text Post",title:"90% of AI-Generated UI Looks Exactly the Same",hook:`Rounded corners. Purple gradient. Inter font.\nCongrats, you just described 90% of AI-generated UI.`,body:`Rounded corners. Purple gradient. Inter font.
Shadow cards. White background. Gray body text.

Congrats, you just described 90% of AI-generated UI.

Every tool defaults to the same aesthetic. Lovable, Bolt, Stitch, v0 — prompt any of them without a design system and you get the statistical average of every interface they were trained on.

It's not bad design. It's no design.
It's the median of the internet, rendered in React.

When everyone's using the same tools with the same defaults, everything starts looking like everything else.

Adobe's 2026 Creative Trends report noticed the backlash. Designers are swinging toward raw imperfection — hand-drawn elements, earthy textures, zine-style layouts. Not because it's trendy, but because it's proof that a human made the decision.

AI will always converge on the mean.
A designer with a strong POV will diverge from it.

The best AI-generated UI still needs someone who:
→ Knows when to break the grid on purpose
→ Picks typography with character, not just readability
→ Uses color to serve brand identity, not just accessibility checkboxes
→ Creates layout tension that communicates hierarchy

Tubik Studio's 2026 UI trends report called it perfectly — the best work this year has "architecture with attitude. Clarity with signature."

The tools got faster.
The bar for what "good" looks like just got higher.

Craft isn't dead.
Defaults are.

What's your go-to move to make a design feel human?`,aud:"UI Designers + Creative Directors",cta:"What's your go-to move to make a design feel human?",tag:"AI × Design"},

{d:23,day:"Wednesday",type:"Carousel",fmt:"Carousel — 7 slides",title:"Agentic UX — Your Next User Might Not Be Human",hook:`60% of designers say AI agents will be a major design challenge in 2026.\nMost haven't started preparing.`,body:`SLIDE 1 (HOOK):
Your next user might not be a human.

AI agents are browsing websites, filling forms, completing tasks on behalf of real users.

Most products aren't designed for them. Here's what Agentic UX is — and why it changes everything ↓

SLIDE 2 (WHAT'S HAPPENING):
Browser companies are shipping agent-based browsing.

The user says: "Book me a flight to Dubai under $500."
The agent: opens a browser, searches flights, compares options, fills the form, completes the purchase.

The user never sees the UI. The agent does.

Already happening with Google's Project Mariner, Anthropic's computer use, Microsoft's Copilot Vision.

SLIDE 3 (WHAT IS AGENTIC UX):
Agentic UX = designing interfaces that work for BOTH humans AND AI agents.

Designers used to design for two stakeholders:
1. The business (goals, revenue)
2. The user (needs, friction)

Now there's a third:
3. The agent (parsability, predictability, structure)

Three stakeholders. One interface.

SLIDE 4 (WHAT CHANGES):
When an AI agent is your user:

→ Semantic HTML — agents parse structure, not pixels
→ Clear labeling — "Click here" breaks agent flows
→ Predictable navigation — agents need consistent patterns
→ Structured data — schema markup helps agents understand content
→ ARIA labels — originally for accessibility, now for AI parsability too

The overlap with accessibility is massive. Designing for agents and screen readers shares the same foundation.

SLIDE 5 (WHY NOW):
UX Collective's 2026 predictions called out "Machine Experience (MX) Design" as a new discipline.

We're no longer designing interfaces people use. We're designing interfaces machines use ON BEHALF of people.

User-centered design: "Can the user complete this task?"
Agentic UX: "Can an AI agent complete this task for the user?"

Different mental model. Same product.

SLIDE 6 (START HERE):
You don't need to rebuild everything:

→ Audit forms — are labels clear enough for an agent to fill?
→ Check navigation — consistent enough for pattern recognition?
→ Review CTAs — "Get Started" vs "Submit Application" — which can an agent parse?
→ Add structured data — schema.org markup gives agents context
→ Test with AI — ask Claude to parse your website. See what breaks.

SLIDE 7 (CTA):
Products designed for agents will capture users who never even visit the website.

Products that aren't will lose traffic they never knew they had.

Is your product ready for AI agents as users? Drop your take below ↓`,aud:"Product Designers + PMs + Frontend Devs",cta:"Is your product ready for AI agents as users?",tag:"Agentic UX"},

{d:24,day:"Thursday",type:"Carousel",fmt:"Carousel — 8 slides",title:"Lovable vs Bolt vs Stitch vs Figma Make — Honest Breakdown",hook:`Everyone's using vibe coding tools.\nNobody knows which one to pick.`,body:`SLIDE 1 (HOOK):
4 tools. 4 different strengths.
The internet is full of hype. Here's the honest breakdown — what each does best, where each falls short, and when to use which ↓

SLIDE 2 (FIGMA MAKE):
Best for: Designers who already live in Figma

→ Starts from your Figma files and design system
→ Make Kits + Attachments bring real components as context
→ Embeddable in Figma Design, FigJam, Slides
→ MCP server lets agents read/write canvas

Limitation: Not for production apps. Great for exploration, not for shipping.

Teams at ServiceNow, Ticketmaster, and Affirm use it to prototype before engineering builds.

SLIDE 3 (GOOGLE STITCH):
Best for: Rapid exploration at zero cost

→ AI-native infinite canvas
→ 5 connected screens at once
→ Voice Canvas — speak design, get critiques
→ DESIGN.md — portable design system as markdown
→ Exports: HTML/CSS, Tailwind, Vue, Angular, Flutter, SwiftUI
→ 550 free generations/month

Limitation: Google Labs experiment. Availability issues. No pixel editing.

MCP server + SDK: 2,400 GitHub stars. Figma shares dropped 4% on launch day.

SLIDE 4 (LOVABLE):
Best for: MVPs and functional products

→ Full-stack apps from conversation
→ Supabase backend + auth + storage
→ Lovable Cloud for infrastructure
→ GitHub sync for handoff
→ Custom domains for launch

$300M ARR by January 2026. Under a year.

Limitation: 10% of apps had critical vulnerabilities in a 2025 audit. Not for mission-critical systems without dev review.

SLIDE 5 (BOLT.NEW):
Best for: Speed builds, browser-based

→ Everything runs in browser — no local setup
→ React + Node.js from prompts
→ Figma import → React components
→ One-click deploy to Netlify/Vercel
→ AI agents handle errors autonomously

Limitation: Burns 7-12M tokens fixing simple errors. Advanced customization needs manual editing.

SLIDE 6 (WHEN TO USE WHICH):
Early exploration → Stitch (free, fast, multiple directions)
Prototyping with design system → Figma Make (stays on-brand)
Building MVP → Lovable (full-stack, fast to functional)
Speed builds → Bolt (instant preview, quick deploy)
Refining code → Cursor or Claude Code (quality control)

SLIDE 7 (THE REAL ANSWER):
It's not one tool. It's a pipeline.

Different tools for different layers:
Layer 1 (Exploration): Stitch, Figma Make
Layer 2 (MVP): Lovable, Bolt
Layer 3 (Production): Cursor, Claude Code, manual engineering

Pick tools based on the job, not loyalty.

SLIDE 8 (CTA):
Which one are you using? Did I miss your favorite?

Tag someone who's been stuck choosing between these tools ↓`,aud:"Designers + Frontend Devs + Founders",cta:"Which one are you using? Did I miss your favorite?",tag:"Vibe Coding"},

{d:25,day:"Friday",type:"Text",fmt:"Text Post",title:"The Anti-AI Aesthetic Is Becoming a Design Movement",hook:`After years of AI-polished perfection, the hottest design trend of 2026 is intentional imperfection.`,body:`After years of AI-polished perfection, the hottest design trend of 2026 is intentional imperfection.

Adobe's 2026 Creative Trends report called it.
Kittl's graphic design trends research confirmed it.
It's all over Dribbble and Behance right now.

The movement has a name: Naive Design.

Hand-drawn doodles in brand identities.
Letterpress-inspired, imperfect typography.
Earthy textures — sand, stone, bark.
Zine-style layouts with controlled chaos.
Collage compositions with unexpected juxtapositions.

Why now?

Because AI made everything look the same.

When every tool produces pixel-perfect, mathematically balanced, statistically average UI — the thing that stands out is proof that a human made this.

Kittl's 2026 report noted a 30% rise in searches for hand-drawn and imperfect design elements. Figma's State of Design survey found 60% of designers use AI for early concepts — which means the starting point for most projects is now generic.

The counter-movement makes sense.

It's the design equivalent of vinyl records in the Spotify era. Not better technically. Better emotionally.

But here's what people miss: this isn't anti-craft. It's hyper-craft.

It takes MORE skill to make something feel intentionally imperfect than to let AI produce something generically polished. You have to know the rules well enough to break them with purpose.

The designers leaning into this aren't rejecting AI. They're using it for the boring production work and saving the human touch for the parts that need to feel alive.

Perfection is the new default.
Character is the new premium.

Are you seeing this in your projects? Polished vs raw — which direction are you leaning?`,aud:"UI Designers + Brand Designers + Creative Directors",cta:"Polished vs raw — which direction are you leaning?",tag:"Design Trends"},

{d:26,day:"Saturday",type:"Rest",fmt:"—",title:"No Post — Engage & Network",hook:"",body:`REST DAY ACTIONS:\n→ Reply to every comment from this week\n→ Send connection requests to 10 people who engaged with your posts\n→ Save 5 trending posts for May content inspiration\n→ Review analytics — which post got most impressions?`,aud:"—",cta:"",tag:"Rest"},

{d:27,day:"Sunday",type:"Rest",fmt:"—",title:"No Post — Prep Final Week",hook:"",body:`REST DAY ACTIONS:\n→ Design carousels for Monday + Tuesday\n→ Draft text posts for Wednesday\n→ Schedule everything in advance`,aud:"—",cta:"",tag:"Rest"},

{d:28,day:"Monday",type:"Text",fmt:"Text Post",title:"Design Systems Are the New Moat",hook:`When AI can generate any UI, the only thing it can't generate is your system.`,body:`When AI can generate any UI, the only thing it can't generate is your system.

Lovable, Bolt, Stitch — they all produce decent-looking screens.

But ask any of them to maintain consistency across 200 screens and watch what happens:

→ Spacing that shifts between pages
→ Button variants that multiply without logic
→ Color tokens that drift from your palette
→ Typography that changes weight for no reason

That's not an AI problem. That's a design system problem.

And here's why it matters more than ever:

Figma just opened its canvas to AI agents through MCP. Agents can now read your tokens, your components, your naming conventions — and build with them.

Google Stitch introduced DESIGN.md — a portable markdown file that stores your entire design system for AI agents to consume.

Both tools are saying the same thing: your design system quality now DIRECTLY determines AI output quality.

Figma's blog: "AI strengthens your design system, which powers better AI code generation."

Bad system = bad AI output at scale.
Great system = AI that ships on-brand, every time.

Design systems used to be nice-to-have documentation. A reference PDF nobody updated.

In 2026, they're infrastructure.

The teams investing in rigorous, well-named, well-structured systems right now are building a competitive moat that AI amplifies instead of undermines.

Does your team treat the design system as infrastructure or decoration?`,aud:"Senior Designers + DS Engineers + Eng Leads",cta:"Does your team treat the design system as infrastructure or decoration?",tag:"Design Systems"},

{d:29,day:"Tuesday",type:"Carousel",fmt:"Carousel — 7 slides",title:"Vibe Designing — The Workflow Shift Every Designer Needs to Know",hook:`Vibe coding was 2025's buzzword.\nVibe designing is 2026's actual workflow shift.`,body:`SLIDE 1 (HOOK):
67% of design teams at mid-to-large companies have integrated AI generation tools.

But most are using them wrong.

Vibe coding was 2025. Vibe designing is 2026. Here's the difference — and the 5-step workflow behind it ↓

SLIDE 2 (WHAT IS VIBE DESIGNING):
Vibe designing = describe the aesthetic, mood, or outcome in natural language. AI generates design assets. You curate, refine, ship.

Creative direction over manual production.

You focus on WHAT it should feel like. AI handles HOW it gets assembled.

Extends Andrej Karpathy's "vibe coding" into the design layer. Same principle: intent over implementation.

SLIDE 3 (THE 5-STEP WORKFLOW):
Step 1 — Define creative direction. Write a design brief as a structured prompt:
Objective, audience, mood, references ("feels like Stripe meets Duolingo"), constraints (mobile-first, dark mode).

Step 2 — Generate variations. Use Stitch, Figma Make, or Sleek. Produce 5-10 directions fast. Don't settle on first output.

Step 3 — Curate the best. Your eye matters here. Pick the direction that serves the brief, not just the prettiest.

Step 4 — Refine with precision. Take selected direction into Figma for pixel-level adjustments. Or Cursor for code cleanup.

Step 5 — Ship with confidence. Deploy or hand off. Rooted in your brief, refined by your judgment.

SLIDE 4 (WHAT IT'S NOT):
Not "prompt and pray."
Not letting AI make design decisions.
Not skipping research, IA, or accessibility.

User research still requires humans.
Information architecture still requires strategic thinking.
Accessibility auditing still requires domain knowledge.

What changes: the production layer. The mechanical work of generating, resizing, adapting.

The thinking stays human. The assembly gets automated.

SLIDE 5 (THE TOOLS):
Exploration → Google Stitch (free, infinite canvas, voice)
Prototyping → Figma Make (design system aware)
Mobile-specific → Sleek (purpose-built for mobile mockups)
Code refinement → Cursor or Claude Code

The pipeline is the workflow. Not a single tool.

SLIDE 6 (THE SCALE SHIFT):
Solo designers using vibe design tools are handling project loads that previously required a 5-person team.

Adobe's 2026 report: 58% of pro designers use AI generation tools at least weekly.

Speed is no longer a team size problem. It's a workflow problem.

The designer who masters this pipeline delivers in 2 days what used to take 2 weeks. Not because thinking is faster — the production bottleneck is gone.

SLIDE 7 (CTA):
The advantage of a designer in 2026 isn't knowing one more tool.

It's knowing how to produce output that's fast, precise, consistent, and feels like a real product.

AI can generate UI. Only a designer can build a system with direction, rules, and logic.

Have you tried vibe designing? What's your stack? Share below ↓`,aud:"Product Designers + Freelance Designers",cta:"Have you tried vibe designing? What's your stack?",tag:"Vibe Coding"},

{d:30,day:"Wednesday",type:"Text",fmt:"Text Post",title:"The Design Industry Is Splitting in Two",hook:`In 2026, there are two types of designers.\nAnd the gap between them is growing fast.`,body:`In 2026, there are two types of designers.
And the gap between them is growing fast.

Type 1: Screen producers.
They open Figma, assemble components, follow the system, hand off specs.
Their output is clean. Predictable.
And increasingly automatable.

Type 2: System thinkers.
They define the rules AI follows.
They design the logic behind the layout.
They make the decisions that no prompt can make — context, emotion, edge cases, cognitive load.

This isn't about tools. Both types use Figma. Both might use AI.

The difference is what they're producing:
→ Deliverables vs decisions
→ Screens vs systems
→ Execution vs direction

NNGroup's State of UX 2026 warned about this directly — equating UX with UI doesn't just mislabel the work. It leads to the conclusion that design is becoming irrelevant.

It's not. But the part that's purely about screen production? That part IS getting automated.

The part about understanding humans, reducing ambiguity, and building trust? That part is becoming more valuable than ever.

Surveys from UXPA and User Interviews show UX team sizes stabilizing — and available roles increasingly demanding breadth and judgment, not just deliverables.

Responsibilities that were spread across 3 specialists are now in 1 role.
"Can you also code?" is becoming a real interview question.
Strategic thinking beats pixel perfection in hiring conversations.

The fundamentals haven't changed — understanding users, reducing friction, improving clarity.

But the bar has. Teams are leaner. Scrutiny is stronger. Every design decision needs a reason, not just a screenshot.

The split is happening now.
Which side are you building toward?`,aud:"All Designers + Design Managers + Hiring Managers",cta:"Which side of this split do you see yourself on?",tag:"Industry"}
];

const TC = {"Design Trends":{bg:"#DBEAFE",t:"#1E40AF"},"AI × Design":{bg:"#D1FAE5",t:"#065F46"},"Tools":{bg:"#FEF3C7",t:"#92400E"},"Industry":{bg:"#E0E7FF",t:"#3730A3"},"Vibe Coding":{bg:"#FCE7F3",t:"#9D174D"},"Agentic UX":{bg:"#EDE9FE",t:"#5B21B6"},"Design Systems":{bg:"#CCFBF1",t:"#115E59"},"Rest":{bg:"#F5F5F4",t:"#A8A29E"}};

export default function App() {
  const [sel, setSel] = useState(null);
  const [flt, setFlt] = useState("All");
  const [exp, setExp] = useState(false);
  const tags = ["All",...new Set(CD.filter(x=>x.tag!=="Rest").map(x=>x.tag))];
  const list = flt==="All"?CD:CD.filter(x=>x.tag===flt);
  const sd = sel!==null?CD.find(x=>x.d===sel):null;
  const pc=CD.filter(x=>x.tag!=="Rest").length, cc=CD.filter(x=>x.type==="Carousel").length, tc=CD.filter(x=>x.type==="Text").length;

  return (
    <div style={{fontFamily:"'DM Sans','Helvetica Neue',-apple-system,sans-serif",background:"#FAFAF9",minHeight:"100vh"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif&display=swap" rel="stylesheet"/>
      <div style={{padding:"36px 32px 24px"}}>
        <p style={{fontSize:"11px",textTransform:"uppercase",letterSpacing:"2px",color:"#A8A29E",fontWeight:600,margin:"0 0 8px"}}>LinkedIn Content Calendar</p>
        <h1 style={{fontFamily:"'Instrument Serif',serif",fontSize:"42px",fontWeight:400,color:"#1C1917",margin:"0 0 6px",letterSpacing:"-1px",lineHeight:1.1}}>April 16–30, 2026</h1>
        <p style={{fontSize:"14px",color:"#78716C",margin:0,lineHeight:1.5}}>{pc} posts with full content. Design trends, AI workflows, tool breakdowns. Tap any day for the complete post.</p>
      </div>
      <div style={{padding:"0 32px 20px",display:"flex",gap:"8px"}}>
        {[{n:pc,l:"Posts",s:"copy-paste ready"},{n:cc,l:"Carousels",s:"all slides written"},{n:tc,l:"Text Posts",s:"full drafts"},{n:"4",l:"Rest Days",s:"engage + batch"}].map((s,i)=>(
          <div key={i} style={{flex:1,background:"#FFF",border:"1px solid #E7E5E4",borderRadius:"10px",padding:"14px 12px",textAlign:"center"}}>
            <span style={{fontFamily:"'Instrument Serif',serif",fontSize:"26px",color:"#1C1917",display:"block"}}>{s.n}</span>
            <span style={{fontSize:"11px",color:"#78716C",fontWeight:600,display:"block"}}>{s.l}</span>
            <span style={{fontSize:"10px",color:"#A8A29E"}}>{s.s}</span>
          </div>
        ))}
      </div>
      <div style={{padding:"0 32px 16px",display:"flex",gap:"6px",flexWrap:"wrap"}}>
        {tags.map(t=>(
          <button key={t} onClick={()=>{setFlt(t);setSel(null);setExp(false)}} style={{padding:"5px 14px",borderRadius:"100px",border:flt===t?"1.5px solid #1C1917":"1px solid #D6D3D1",background:flt===t?"#1C1917":"transparent",color:flt===t?"#FAFAF9":"#78716C",fontSize:"12px",fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"all .15s"}}>{t}</button>
        ))}
      </div>
      <div style={{padding:"4px 32px 16px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:"8px"}}>
          {list.map(item=>{
            const r=item.tag==="Rest",s=sel===item.d;
            return(
              <div key={item.d} onClick={()=>{if(!r){setSel(s?null:item.d);setExp(false)}}} style={{background:s?"#1C1917":"#FFF",border:s?"1.5px solid #1C1917":"1px solid #E7E5E4",borderRadius:"10px",padding:"14px",cursor:r?"default":"pointer",transition:"all .2s",opacity:r?.4:1,minHeight:"135px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <span style={{fontFamily:"'Instrument Serif',serif",fontSize:"30px",color:s?"#FAFAF9":"#1C1917",lineHeight:1}}>{item.d}</span>
                    {!r&&<span style={{fontSize:"9px",fontWeight:700,padding:"3px 7px",borderRadius:"4px",background:s?"rgba(255,255,255,.12)":item.type==="Carousel"?"#FEF3C7":"#E0E7FF",color:s?"#A8A29E":item.type==="Carousel"?"#92400E":"#3730A3",textTransform:"uppercase",letterSpacing:".5px"}}>{item.type==="Carousel"?item.fmt.replace("Carousel — ",""):"Text"}</span>}
                  </div>
                  <span style={{fontSize:"10px",color:"#A8A29E",textTransform:"uppercase",letterSpacing:"1px",fontWeight:500,display:"block",marginTop:"2px"}}>{item.day}</span>
                </div>
                <div style={{marginTop:"10px"}}>
                  <p style={{fontSize:"12px",fontWeight:600,color:s?"#FAFAF9":"#1C1917",lineHeight:1.35,margin:"0 0 6px"}}>{item.title}</p>
                  {!r&&<span style={{display:"inline-block",padding:"2px 8px",borderRadius:"100px",fontSize:"9px",fontWeight:600,letterSpacing:".3px",textTransform:"uppercase",background:s?"rgba(255,255,255,.1)":TC[item.tag]?.bg,color:s?"#D6D3D1":TC[item.tag]?.t}}>{item.tag}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {sd&&sd.tag!=="Rest"&&(
        <div style={{margin:"8px 32px 32px",background:"#FFF",border:"1px solid #E7E5E4",borderRadius:"14px",overflow:"hidden"}}>
          <div style={{padding:"24px 28px 20px",borderBottom:"1px solid #F5F5F4",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px",flexWrap:"wrap"}}>
                <span style={{padding:"3px 10px",borderRadius:"100px",fontSize:"10px",fontWeight:600,textTransform:"uppercase",letterSpacing:".5px",background:TC[sd.tag]?.bg,color:TC[sd.tag]?.t}}>{sd.tag}</span>
                <span style={{fontSize:"12px",color:"#A8A29E"}}>{sd.type}</span>
                <span style={{fontSize:"12px",color:"#D6D3D1"}}>•</span>
                <span style={{fontSize:"12px",color:"#A8A29E"}}>{sd.fmt}</span>
                <span style={{fontSize:"12px",color:"#D6D3D1"}}>•</span>
                <span style={{fontSize:"12px",color:"#A8A29E"}}>{sd.aud}</span>
              </div>
              <h2 style={{fontFamily:"'Instrument Serif',serif",fontSize:"26px",fontWeight:400,color:"#1C1917",margin:0,letterSpacing:"-.3px",lineHeight:1.2}}>{sd.title}</h2>
            </div>
            <span style={{fontFamily:"'Instrument Serif',serif",fontSize:"48px",color:"#E7E5E4",lineHeight:1,marginLeft:"16px",flexShrink:0}}>{sd.d}</span>
          </div>
          <div style={{padding:"20px 28px",borderBottom:"1px solid #F5F5F4",background:"#FAFAF9"}}>
            <span style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"1.5px",color:"#A8A29E",fontWeight:600,display:"block",marginBottom:"6px"}}>Hook (First Line)</span>
            <p style={{fontSize:"16px",color:"#1C1917",fontWeight:500,margin:0,lineHeight:1.5,fontStyle:"italic",whiteSpace:"pre-line"}}>"{sd.hook}"</p>
          </div>
          <div style={{padding:"20px 28px",borderBottom:"1px solid #F5F5F4"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
              <span style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"1.5px",color:"#A8A29E",fontWeight:600}}>{sd.type==="Carousel"?"Complete Slide Content":"Full Post Copy"}</span>
              <button onClick={()=>setExp(!exp)} style={{fontSize:"11px",color:"#1C1917",background:"#F5F5F4",border:"1px solid #E7E5E4",borderRadius:"6px",padding:"4px 12px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:500}}>{exp?"Collapse":"Expand Full Content"}</button>
            </div>
            <div style={{maxHeight:exp?"none":"150px",overflow:"hidden",position:"relative"}}>
              <pre style={{fontSize:"13px",color:"#44403C",margin:0,lineHeight:1.7,whiteSpace:"pre-wrap",fontFamily:"'DM Sans',sans-serif"}}>{sd.body}</pre>
              {!exp&&<div style={{position:"absolute",bottom:0,left:0,right:0,height:"80px",background:"linear-gradient(transparent,#FFF)"}}/>}
            </div>
          </div>
          <div style={{padding:"16px 28px",display:"flex",alignItems:"center",gap:"8px"}}>
            <span style={{fontSize:"10px",textTransform:"uppercase",letterSpacing:"1.5px",color:"#A8A29E",fontWeight:600,flexShrink:0}}>CTA:</span>
            <span style={{fontSize:"13px",color:"#1C1917",fontWeight:500}}>{sd.cta}</span>
          </div>
        </div>
      )}
    </div>
  );
}
