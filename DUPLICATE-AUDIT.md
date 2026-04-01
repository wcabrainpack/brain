# Duplicate Audit — Jeremiah Brain Pack
*Generated 2026-04-01 by Anton*

## Scope
Audit run across the current repo contents at `~/clawd/brain-pack/`.

## Headline Findings
- **Total files scanned:** 3,523
- **Exact duplicate content groups:** 237
- **Files participating in exact duplicate groups:** 942
- **Normalized filename duplicate groups:** 216

## Important Interpretation
Most duplicate concentration is inside **Thinkific exports**, especially:
- title-only stub lessons
- repeated "Session" / "Introduction" / "VIP Recording" shells
- repeated event bundles reused across multiple course folders

This means the current duplicate problem is **not random noise across the whole corpus**.
It is mostly **systematic export duplication inside `thinkific-courses/`**.

## Biggest Duplicate Hotspots

### 1) `thinkific-courses/intermediate-courses/`
- `Introduction*.md` appears **93 times** with identical content
- These are almost certainly export stubs/placeholders

### 2) `thinkific-courses/private-vault-virtual-events/`
Heavy repetition of:
- `VIP Recording*.md` (**40 exact duplicates**)
- `Main Session*.md` (**20 exact duplicates**)
- `Day 1` / `Day 2` / `Day 3` / `Day 4` / `Day 5`
- `VIP Day 1`
- `Bonus Q&A 1` / `Bonus Q&A 2`

### 3) `thinkific-courses/offer-launchpad-mastermind-recordings/`
- `Session 1` through `Session 6` repeated **14–15x each**

### 4) Cross-course duplicate assets
Repeated across many course/event folders:
- `Get Unstuck To Take Massive Action.md` (**12 exact duplicates**)
- `Chat GPT Sales Letter Prompts.md` (**10 exact duplicates**)
- `Fun & Freedom Business Approach Plan.md` (**10 exact duplicates**)
- `VIP Mindset Training.md` (**10 exact duplicates**)

## What This Means
There are at least **three duplicate classes**:

### A. Safe-looking stub duplicates
Examples:
- `Introduction.md`
- `Session.md`
- `VIP Recording.md`
- tiny 9–17 byte files

These are the easiest candidates for later cleanup/quarantine.

### B. Reused curriculum assets across multiple programs
Examples:
- `Chat GPT Sales Letter Prompts.md`
- `Fun & Freedom Business Approach Plan.md`
- `VIP Mindset Training.md`

These may be intentionally reused and should **not** be deleted blindly.
They should likely become **canonical shared assets** in a future reorganization.

### C. Event-series mirrors / bundle copies
Examples:
- `Day 1–5`
- `Bonus Q&A`
- `Session 1–6`

These may represent repeated launches of similar programs, not accidental duplicates.
Treat as structural duplicates until verified.

## Cautious Recommendation
Do **not** mass-delete anything else yet.

Instead:
1. **Quarantine exact stub duplicates first** into a review list
2. **Separate duplicated reusable assets** from duplicated junk
3. Build a **canonical-content map**:
   - canonical source file
   - mirrored/reused copies
   - stub placeholders
4. Only then decide what to remove vs preserve

## Proposed Next Pass
Create three reports:
- `duplicate-stubs.md` — exact tiny placeholder duplicates, likely safe cleanup
- `duplicate-reused-assets.md` — intentionally reused worksheets/prompts
- `duplicate-event-series.md` — recurring launch/session mirrors

That gives us a safe path to organize without deleting valuable curriculum.

## Example Exact Duplicate Groups

### Group: `Introduction*.md`
- 93 identical files in `thinkific-courses/intermediate-courses/`

### Group: `VIP Recording*.md`
- 40 identical files, mostly in `thinkific-courses/private-vault-virtual-events/`

### Group: `Main Session*.md`
- 20 identical files in `thinkific-courses/private-vault-virtual-events/`

### Group: `Get Unstuck To Take Massive Action.md`
- 12 identical files spread across multiple launch/event folders

### Group: `Chat GPT Sales Letter Prompts.md`
- 10 identical files spread across multiple launch/event folders

### Group: `Fun & Freedom Business Approach Plan.md`
- 10 identical files spread across multiple launch/event folders

## Status
- **Audit complete**
- **No deletions performed in this pass**
- **Next safe move:** classify duplicate groups before touching content
