# Jeremiah Krakowski Brain Pack — Gemini CLI Guide

**Version:** 2.0 | **Updated:** 2026-04-01

## What This Corpus Is

A collection of ~1,000+ hours of Jeremiah Krakowski's teaching, transcribed from live coaching calls, webinars, YouTube videos, and courses (2022–2026). Jeremiah coaches coaches, mentors, and course creators to scale their businesses to six and seven figures.

Use this corpus to: write copy, draft coaching content, match Jeremiah's voice, apply his frameworks, and answer business questions the way he would.

**Corpus location:** `~/clawd/brain-pack/`

---

## 🗺️ MANDATORY FIRST STEP — Read the Content Map

```bash
# Always start here — master navigation for the entire corpus
cat ~/clawd/brain-pack/CONTENT-MAP.md
```

`CONTENT-MAP.md` contains the complete navigation guide: which folders have which content, which Thinkific courses are actually useful vs stubs, topic routing table, voice quotes, and reorganization proposals. **Read it before anything else.**

## Quick Start

```bash
# 1. Read the content map (mandatory)
cat ~/clawd/brain-pack/CONTENT-MAP.md

# 2. Get the frameworks overview
cat ~/clawd/brain-pack/frameworks/jeremiah-frameworks-extracted.md

# 3. Get orientation
cat ~/clawd/brain-pack/frameworks/START-HERE.md

# 4. Browse a folder for relevant content
ls ~/clawd/brain-pack/wca-training/ | grep "2025"

# 5. Sample files across a folder
for f in $(ls ~/clawd/brain-pack/youtube-transcripts/*.md | head -5); do
  echo "=== $(basename $f) ===" && head -60 "$f" && echo ""
done
```

---

## Folder Map

| Folder | Contents | When to Use |
|--------|----------|-------------|
| `frameworks/` | Pre-extracted frameworks, structured | **Always start here** |
| `wca-training/` | 150+ live coaching calls 2022–2026 | Real-world coaching examples, Q&A style |
| `sales-copywriting/` | Sales letter courses + live rewrites | Writing/critiquing sales copy |
| `ai-copywriting/` | CGA/WCA sessions + AI tools | Live coaching context, AI writing |
| `email-copywriting/` | Email strategy courses | Email sequences, subject lines, list strategy |
| `webinars/` | Webinar system courses + examples | Webinar outlines, VSL, event strategy |
| `youtube-transcripts/` | 15 YouTube videos | **Best voice calibration source** |
| `coaching/` | Coaching business courses | How to coach, imposter syndrome, scaling |
| `sell-more-programs/` | Offer building, copy rewrites, intensives | Full offer creation, sales psychology |

---

## The Core Frameworks

### 1. PAIN Method — Copy Structure
Every piece of sales copy Jeremiah writes follows this:

```
Problem:   Name the specific, real pain
           "You're posting content every day but still getting 0 clients"

Agitate:   Make it feel urgent and visceral
           "Meanwhile, your mortgage is due and you're wondering if this whole
           coaching thing is even working"

Interrupt: Break the pattern — introduce unexpected truth
           "But here's what's actually stopping you — and it's not your content"

Nurture:   Bridge to the solution
           "The coaches I've worked with who cracked six figures all did
           one thing differently..."
```

### 2. E5 Framework — Content to Client Pipeline
```
Expose → Engage → Educate → Empower → Enroll

Expose:   Short-form content (reels, TikTok, YouTube)
Engage:   Opt-in (webinar registration, lead magnet)
Educate:  Email/content value delivery
Empower:  Pre-sale trust (webinar content, case studies)
Enroll:   Sales presentation → paid client
```

### 3. 3-Part Webinar Formula
Jeremiah structures EVERY webinar this way:

**Part 1 — Vision & Mindset (first 30% of time)**
- Open with possibilities, not tactics
- Tell personal story of struggle → breakthrough
- Address self-limiting beliefs head-on
- Purpose: Naturally filter out people who won't buy

**Part 2 — Promised Content (middle 40%)**  
- Deliver the actual teaching
- Hold NOTHING back — "If I hold back, people sense it and don't trust me"
- Cover 3–5 actionable strategies

**Part 3 — Sales Pitch (final 30%)**
- Present offer with full value stack
- Price anchor (what it would cost in 1-on-1)
- Testimonials + results
- Clear CTA with deadline

### 4. The $5 Event Funnel
```
Free landing page registration
    ↓
Thank-you page: $5–$7 VIP upgrade offer
    ↓  
3–5 day live event (or pre-recorded delivery)
    ↓
Day 3–5: Sales pitch for main program ($497–$2,000)
    ↓
WCA ($197/mo) → VIP ($900/mo) → Consulting ($3.5k–$15k)
```
Key stat: 20–30% conversion from paid event attendees vs <5% from free webinars.

### 5. Copy Recipe — Offer Description
Fill in these 5 fields before writing any copy:
```
Who:         [hyper-specific audience]
Problem:     [in their exact words — use survey data]
Solution:    [what you actually provide]
Method:      [your unique process/framework]
Dream result:[vivid best-case outcome]
```

### 6. KLT Content Strategy
```
Know  → Very short content (7–30 sec reels) — discoverability
Like  → Medium content (10–25 min YouTube, podcast) — personality
Trust → Long content (webinar, email) + offers — conversion
```
Rule: Every piece of content should funnel toward a presentation (webinar/event).

---

## Voice Calibration

Jeremiah's authentic tone — pull from `youtube-transcripts/` for the clearest examples.

**Pattern analysis from source material:**

*Openings:*
- "Here's the thing..." [transition to real talk]
- "I'm gonna shoot straight with you..." [preface to hard truth]
- "Let me ask you something..." [Socratic opener]

*Conviction statements:*
- "I know that I know that I know..."
- "I'm not gonna blow smoke up your backside."
- "If that upsets you, I get it. But it's the truth."

*Teaching contrasts:*
- "All the broke coaches [do X]. The successful ones [do Y]."
- "You can do it the hard way... or you can do what works."

*Personal story hooks:*
- References: his mom Sandy (built $20M+ business), therapy journey, video game hobby, past failures, the time he quit webinars for 9 months

*Signature phrases:*
- "Speed of execution is the advantage"
- "Get it done, get it out there"
- "A crowd first, then a product"
- "Sales is trust building, nothing more"
- "Your first webinar is a test run, not your magnum opus"

**Tone:** Direct, warm, self-aware, story-heavy, unpolished on purpose. Never corporate. Never passive. Never vague.

---

## Specific Use Cases

### Writing a Sales Letter
1. Read: `~/clawd/brain-pack/sales-copywriting/2024-12-01_Sales Letter & Landing Page Copywriting Made Easy with A.I - Lesson 1.txt`
2. Apply: PAIN Method structure
3. Use: Copy Recipe for offer description
4. Check: `~/clawd/brain-pack/sell-more-programs/2022-11-10_LIVE Copywriting Re-Write Day.txt` for before/after critique examples

### Writing a Webinar Outline
1. Read: `~/clawd/brain-pack/webinars/2025-01-04_7 Figure Webinars - Lesson 1.txt`
2. Apply: 3-Part Webinar Formula
3. Use: ChatGPT prompts from frameworks file for structure generation
4. Reference: `~/clawd/brain-pack/webinars/2023-09-23_September 23*` for live example

### Writing in Jeremiah's Voice
1. Read 2–3 files from `~/clawd/brain-pack/youtube-transcripts/`
2. Note: sentence rhythm, self-interruption, storytelling transitions
3. Match: conversational pace, direct address ("you"), no passive voice
4. Avoid: corporate phrases, hedge words, empty affirmations

### Building an Offer
1. Read: `~/clawd/brain-pack/sell-more-programs/2022-02-24_DAY 1_ Sell More Paid Programs in 2022.txt`
2. Read: `~/clawd/brain-pack/sell-more-programs/2022-10-28_Offer Launchpad 2-Day Expereince.txt`
3. Fill out: Copy Recipe (5 fields above)
4. Apply: E5 Framework for the full pipeline

### Answering Coaching Questions
1. Read: `~/clawd/brain-pack/coaching/2022-03-02_Coaching - Lesson 1.txt`
2. Check: Relevant `wca-training/` files from 2024–2025 for current advice
3. Voice: Empathetic but direct — name the real issue, not just the surface question

### Email Marketing
1. Read: `~/clawd/brain-pack/email-copywriting/writing-7-figure-emails.md`
2. Apply: Story → Bridge → CTA structure
3. Frequency rule: 1–2 emails/day is correct; less is fear, not strategy
4. Subject lines: Curiosity gap + specificity (not clickbait, but open-worthy)

---

## Business Model Context (Always Hold This)

```
Jeremiah's Funnel:
$0 (free content: YouTube, social, podcast)
  ↓
$5–$7 paid event / webinar
  ↓
$197/mo — WCA (Wealthy Coach Academy) — group coaching
  ↓
$900/mo — VIP Program
  ↓
$3,500–$15,000 — 1-on-1 Consulting

Primary ad channels: Facebook + Instagram
Target: Coaches, mentors, course creators
Core philosophy: Imperfect action > perfect inaction
Differentiator: Business strategy + mindset/trauma work
```

---

## Sample Prompts That Work Well With This Corpus

```
# Voice-matched content
"Read 3 YouTube transcripts, then write a 15-second Instagram reel 
script about [topic] in Jeremiah's voice"

# Framework application  
"Use the PAIN Method to rewrite this landing page: [paste copy]"

# Offer building
"Using Jeremiah's Copy Recipe framework, build an offer for a 
[niche] coach targeting [audience]"

# Webinar creation
"Outline a 90-minute webinar about [topic] following the 
3-Part Webinar Formula"

# Research task
"Read 5 wca-training files from 2025 and summarize the top 3 
recurring client problems Jeremiah hears"
```

---

## Quality Check

Before finalizing any output:
- ✓ Is the audience hyper-specific (not vague)?
- ✓ Does the copy speak to emotion first, logic second?
- ✓ Does it sound like a real human who's been in the trenches?
- ✓ Is there a clear, unmistakable CTA?
- ✓ Would Jeremiah recognize his own frameworks in this?

If it reads like generic "coaching industry content" — go back to the transcripts and read more source material before rewriting.

---
*Guide maintained by Jill 🔍 | ~/clawd/brain-pack/*
