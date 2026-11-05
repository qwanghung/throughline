---
name: pitch-perfect
description: Guide a designer from "who am I convincing, and of what?" to a finished pitch, design rationale, or showcase piece such as a design-language doc. First it pins down the audience and the one thing they must believe. Then it finds the questions that will decide the outcome, plans an outline that answers them, and only then writes, cutting everything the audience already knows. English and Vietnamese. Use for "help me pitch this design", "write my design rationale", "prepare a design presentation", "review my pitch", "make this denser", "viết rationale", "chuẩn bị thuyết trình thiết kế", or /pitch-perfect.
---

# Pitch perfect

The goal: a person who owns a decision finishes the pitch convinced the problem is real, convinced this solution beats the alternatives, clear on what you are asking them to decide, and caring about the people it helps.

The work happens in phases. **Plan before writing**: there's no prose until the designer has approved an outline that answers the questions that matter most.

## Two kinds of piece

Settle which kind it is in phase 1. It changes the ask, the gates and how defensive the piece should be.

| | Decision pitch | Showcase |
|---|---|---|
| Examples | design review, client pitch, rationale for approval | design-language doc, portfolio piece, launch post, talk |
| The reader ends by | approving, funding, choosing | admiring, adopting, cloning, following |
| Objections and limits | required (G4, G5 gaps) | optional, the designer decides |
| Voice | clear, direct | may be whimsical and sensory, still exact where it teaches |

## Session flow

| Phase | The designer gives | You produce | Move on when |
|---|---|---|---|
| 1. Audience | Who they're convincing | Audience card | The designer confirms the card |
| 2. Conviction | The one thing they need to land | Conviction statement, through line, ranked questions | The designer confirms the question list |
| 3. Plan | Answers to the questions | Answers, hook candidates, outline, gate check | The top 3 questions are answered or named as gaps, and the designer approves the outline |
| 4. Write | Approval | The pitch, the problem × feature map, open items | Delivered |
| 5. Refine (optional) | Feedback | Review, tighten, adapt, rehearse | The designer is done |

Keep the plan in `pitch-plan.md` (`references/plan-template.md`) and update it after every exchange. If `pitch-plan.md` already exists, read it and resume at the first phase that isn't finished.

**Conversation rules for every phase:**
- Ask at most three questions per message. Put the most important one first.
- Offer a guess to react to rather than a blank question: "For a client owner I'd assume they know their store operations by heart and care most about queue time. Right?"
- Answer in the designer's language (`references/patterns-vi.md` for Vietnamese).
- End each phase by showing what you've captured and asking the designer to confirm it.
- **Vetoes are permanent.** When the designer rejects a word, phrase, image or idea, record it under "Vetoed" in the plan. It must not come back anywhere: hook, story, headings, tables or the final text.
- **Drafts go out as options.** Offer 2–3 options for hooks, through lines and image lines. The designer's reaction ("too literal", "odd", "assumes too much") teaches you their taste. Write the reason into the plan and apply it to everything after.

### Phase 1: Audience

Open with: who are you trying to convince, or who is this document for?

Then fill the audience card (`references/audience.md`), asking only for what you can't infer:
- the kind of piece: a decision pitch or a showcase
- the decider (for a showcase, the reader you most want to win), and who else is reading
- the decision they own, or what they'd do with the work
- what they want from this piece: a decision, a recommendation, reassurance, alignment, the next step, or for a showcase, something to admire, adopt or clone
- what they know by heart
- what they care about
- their worries and likely objections
- language, form of address, format and length

Start from the default profiles in `audience.md` and have the designer correct them. If there are several audiences, write for the decider and note what the others need.

Exit: show the card and get a yes.

### Phase 2: Conviction

Ask: what is the one thing you most need them to believe or do? Push until it fits in one sentence. If the designer gives several, ask which one the decision hangs on.

Then:
1. Write the **conviction statement**: "[Decider] will [ask] once they believe [belief]."
2. Draft the **through line** (`references/spine.md` §0) from the decider's "cares about" list.
3. Generate the **questions that move the needle** (`references/questions.md`): 5–7 questions, in the decider's words, ranked, including at least one heart question. For a showcase, include at least one expression question ("What does each decision feel like?"). Mark the top 3 as must-answer.

The through line and the hook are separate jobs (`spine.md` §0 and § Opening). Draft the through line now, plain and true. The hook comes in phase 3.

Exit: the designer confirms the statement and the questions, or edits them. Ask whether a question they'd expect is missing. They may drop any question; record why under the decisions log.

### Phase 3: Plan

Work through the questions from the top, one or two at a time (`questions.md` § Work through the answers):
- Push back on vague answers and place each one on the evidence ladder (`references/rationale.md`).
- If an answer is missing: get it, narrow the claim, or name it as a gap.
- Never answer for the designer. You may suggest a hypothesis labelled "Hypothesis — confirm?".

As answers come in, build the plan:
- **Hook candidates**: 2–3 options (`spine.md` § Opening). Each must pass the universality test.
- **Analogy map**: if the principle comes from something real (an object, a moment), map it part by part to the design decisions (`spine.md` §3).
- **Outline**: one section per question, each with a three-beat structure (PSB, SIA, PPP, or Image → Rule → Build for design-language docs), a one-sentence key point and its evidence.
- **Options and map**: the rejected alternatives and the problem × feature table (`rationale.md`).
- **Gate check**: G0–G6 (below).

Exit: the top 3 questions are answered or explicitly accepted as gaps, the gates pass or have named gaps, and the designer approves the outline. Ask outright: "Ready for me to write it?"

### Phase 4: Write

1. Pick the format and length budget from `references/formats.md`.
2. Draft in the order **hook → point (by the second sentence) → proof → push**, following the approved outline. Each section answers its question and nothing else.
3. Density pass: `references/density.md`.
4. Pattern pass: `references/patterns-en.md` or `references/patterns-vi.md`. Then check that every claim from the outline survived and nothing was added.
5. Save to `pitch.md`, or the file the designer named.

### Phase 5: Refine

On request:
- `review`: score against the checklist without editing.
- `tighten`: density and pattern passes only.
- `adapt en|vi`: a native rewrite in the other language.
- `rehearse`: for spoken pitches. Time it at about 130 words per minute, mark the sentences that are hard to say aloud, and cut to the budget.

## Shortcuts

- **The designer brings notes, a doc or a Figma link**: prefill phases 1–3 from it, show what you filled in, and ask only for the gaps. Never skip the audience card or the question list. Their confirmation is the point.
- **Rewrite in place**: when the input is an existing doc or page that should stay where it is, read all of it first. Keep its structure, live examples, code and links unless the plan says otherwise. Audit the story and the density, change only the prose, check every number you keep against the source, then save or republish to the same place. Report what moved, what was cut and what stayed.
- **`/pitch-perfect review <file>`**, **`tighten <file>`**, **`adapt <file> en|vi`**: run these directly, without the phases. If there's no audience card, ask the two questions that matter most (who decides, and what they must believe) before reviewing.

## Gates

Check them in phase 3. Phase 4 can't start while a gate fails, unless the designer accepts the gap. For a showcase, G4 and G5 are optional, and G6 is an adoption ask.

- **G0 Through line.** One sentence, drawn from the audience's "cares about" list. Every section passes "this matters because it [through line]".
- **G1 Audience.** A confirmed card, including what the decider wants from the pitch.
- **G2 Problems.** Every problem names who has it, the evidence for it, and the cost of leaving it.
- **G3 Principle.** The principle explains at least two concrete design decisions. If it explains none, cut it.
- **G4 Options.** At least one real alternative was rejected against named criteria. Without one, don't call the solution "optimal" or "best".
- **G5 Map.** Every feature maps to at least one problem; cut any feature that maps to none. Every problem maps to a feature or is marked "not solved".
- **G6 Ask.** For a decision pitch: one decision, one owner, one date or trigger. For a showcase: one clear next move for the reader (try it, clone it, follow along), even if it's only implied by a "Build it" layer or a closing line.

## Rules

- Never invent facts, numbers, quotes, research findings, or user names. Use `[NEED: what, from whom]`.
- Don't explain what's on the "knows by heart" list. Go one level deeper on what's on the "cares about" list.
- Take a position. State the strongest real objection once and answer or concede it. Don't invent weak objections to knock down.
- Give uncertainty one calibrated sentence ("about 70% confident; the risk is X"), never stacked hedges or apologies.
- In a decision pitch, name the gaps: problems not solved, risks, what would change the decision. In a showcase, the designer decides whether to include them, but nothing may be overstated either way.
- A hook may frame the benefit at its ideal. Nothing after it may overstate the evidence.
- A hook must work for any reader without the designer's backstory. Personal detail belongs in the origin story, right after the hook.
- Use at most one story per pitch, and only if it carries the through line.
- Say how things connect ("because", "so", "which means") instead of leaving the link implied.
- Keep the designer's voice. Given a writing sample, match its rhythm and word choice.

## Output in phase 4

1. The through line, in one sentence.
2. The pitch, in the chosen format.
3. The problem × feature map.
4. `[NEED]` items, if any.
5. One line on what was cut and why. Omit it when nothing was cut.

`review` reports, in order:
1. Gates G0–G6: pass or fail, each with a quoted line as evidence.
2. Opening: is there a hook, and does the point arrive by the second sentence?
3. A VPM score per section (`density.md` § Scoring), and the three lowest sections, each with a suggested cut.
4. Each pattern tell found, with its line.
5. The top three fixes, in order of impact.

## Examples

- `examples/04-dry-run-glass-and-light.md`: a real showcase session, rewritten in place, with the designer's corrections at each step.
- `examples/03-refund-plan.md`: a completed plan from phases 1–3.
- `examples/01-refund-flow-en.md` and `examples/02-refund-flow-vi.md`: the phase 4 output, before and after.
