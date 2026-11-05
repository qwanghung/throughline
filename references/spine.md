# The spine

A pitch works at two levels:

- **Macro**: one through line. Every part of the pitch connects back to it.
- **Micro**: each point is a three-beat structure (see "Point structures" below).

You build in order 0 → 6. You present in this order: **hook → point → proof → push**. The hook and point come first, the spine supplies the proof, and the ask is the push.

## 0. Through line

One sentence naming the outcome the decider cares about, in their terms. Write "make every new user a regular user", not "redesign import".

- Take it from the audience card's "cares about" list.
- It decides what goes in. A detail that serves the through line stays. Anything else goes, even if it's true and well made. Expect to cut most of your material.
- Changing the through line changes the content. A retention through line calls for funnel data and research. A UX through line calls for interaction detail. Don't mix them.
- Test: for each section, can you finish the sentence "this matters because it [through line]"? If you can't, cut the section.
- Keep it plain and true. It's the spine, not the decoration: "Light stays quiet until it meets glass." Imagination belongs in the hook.

## Opening: hook, then point

**Hook**: one sentence that states the main benefit in a fresh, slightly provocative frame. It is not a summary or an agenda.

- Weak: "Here's how we can redesign import."
- Strong: "What if every new user became a regular user right after signup?"
- A hook may push the benefit to its ideal ("every"), because it's framing, not a claim. The sentences after it give the real numbers, and nothing after it may overstate them.

**Two registers of hook.** Pick by audience:

| Register | For | Example |
|---|---|---|
| Benefit | decision pitches, business readers | "What if every new user became a regular user right after signup?" |
| Imaginative | showcases, craft-minded readers | "What if work could bloom the way sunlight does when it slips through glass?" |

An imaginative hook is whimsical and sensory, and leaves a small question in the reader's mind. Craft-minded readers hear a literal hook ("Every flash of colour means work just happened") as AI-generic.

**Universality test.** Would any reader in the audience picture the hook without knowing the designer's backstory? If it depends on a private moment ("a window turning the sun into a rainbow") or a detail that sounds odd out of context ("a little spectrum on the floor"), it fails. Move the personal moment into the origin story, straight after the hook, where it's allowed to be personal.

**Point**: the solution in one line plus the ask, by the second sentence at the latest.

**Reframing**: if the design has an obvious weakness, frame it around the one distinct strength the audience actually values. A car that is cramped and underpowered can be framed as "small, so practical for the city". This only works if the strength is real and on the audience's "cares about" list. Otherwise it's spin.

## 1. Audience

Fill the card in `audience.md`. Everything later is judged against it.

**Discern the ask**: what would make this minute valuable to the decider? Usually one of these:

- a decision
- a recommendation
- reassurance
- alignment
- the next step
- feeling understood
- in a showcase: something to admire, then adopt or clone

If you don't know which, ask the designer. In a live meeting, the designer can ask the decider: "Do you want my recommendation, or the options?"

## 2. Problems

For each problem:

- **Who** has it: a named segment or role, never "users".
- **What happens**: the observable behaviour or failure, not your interpretation of it.
- **Evidence**: the strongest rung you have on the evidence ladder (`rationale.md`).
- **Cost of doing nothing**: in the units the audience cares about (money, time, churn, support tickets, risk).

Keep 2–4 problems. Start with the one the audience already half-believes and build to the one they haven't seen.

**Put a person behind the number.** Data alone is dull, and user quotes alone are anecdotes. Pair them: "Everyone sees the home view after signup, but only 12% are still here after three months. Users who import their data stay at 40%. In interviews, people told us why: they didn't know import existed, and typing everything in by hand was too much to ask." User feedback is a reliable source of these human details.

## 3. Principle

One idea that produces the design decisions. It's one of two kinds:

- **Inspiration from something real**: a pattern from another domain that solves the same structural problem. The analogy must map part by part: say which part of the source matches which part of your design.
- **Core idea**: a rule stated as a choice ("show the cost before the commitment", "one primary action per screen").

Test: write "Because [principle], we [decision A], [decision B]." If you can't fill in two decisions, it's a slogan. Cut it.

**Analogy map.** When the principle comes from something real, map it part by part in a table: the part of the source, the part of the design, the decision it produces. For example, sunlight through glass gives: the sun is Prism (one light source), the glass edge is the card's rim (colour only at the edge), the clear middle is where the text sits. A good map often answers "isn't this just X?" by itself, because it shows where the idea came from.

**Stories**: a short story earns its place when it makes the problem or the principle easier to grasp than the abstract version would. Rules:

- Real and specific beats invented.
- One per pitch, and short.
- It must carry the through line.

Good sources: incidents from the domain, user feedback, and the designer's own experience ("I designed this app and didn't know import existed").

## 4. Solution

- Show the design: a frame, a flow, a prototype.
- Name 2–4 features that carry it. A feature earns a place only if it maps to a problem (step 5) and serves the through line.
- Show each feature in use, not as a spec: what the person does and what changes for them.
- Detail stops one level below what the audience knows by heart. If they know what a drag-and-drop field is, don't explain it. Explain why it sits on the home view.

## 5. Map

Use the problem × feature table in `rationale.md`. Then state:

- Which problem is solved best, and why.
- Which is only partly solved, and what's left.
- Which is not solved, and whether that's deliberate.
- The options you rejected and the criterion each one lost on. This is the part that justifies calling the solution the best one.

## 6. Ask (the push)

For a decision pitch: one decision, one owner, one date or trigger. "Approve the 3-step flow for the March sprint" beats "let us know your thoughts". In a spoken pitch, say it again as the last sentence.

For a showcase: one next move for the reader, such as try it, clone it, or follow where it goes. It can be implied rather than stated. A "Build it" layer is an invitation to clone, and a "Where it could go" section is an invitation to follow. Don't end on a sales line.

## Point structures

Build each point (a slide, a paragraph, an answer) from three beats: a clear beginning, middle and end. Don't name the structure out loud.

| Structure | Beats | Use when |
|---|---|---|
| **PSB** | Problem → Solution → Benefit | The default for rationale. Logical, keeps the focus on the issue |
| **SIA** | Story → Insight → Action | Personal and emotional. Use it when the audience doesn't believe the problem yet, or at a kickoff |
| **PPP** | Point → Proof → Push | Answers, status updates, Q&A. One sentence per beat, then stop |
| **IRB** | Image → Rule → Build | Design-language and system docs. Image = one poetic line of what you see ("Touch, and the glass glows from your fingertip"). Rule = the plain design rule. Build = the method and exact values, folded or in smaller type for people who want to clone it |

Short labels like these help when speaking off the cuff, especially in a second language. They're worth teaching to Vietnamese designers who present in English. A designer may invent their own; record them under "Your structures".

## Rehearse and cut

- Rehearse aloud. Cut whatever doesn't land, including jokes that weren't funny in rehearsal.
- These are guidelines, not a script. Authenticity matters more than technique, so adapt them to the designer's style.

## Your structures

> TODO (optional): your own three-beat structures.

---
Sources: Wojtek Dziedzic, "Pitch perfect: how to present ideas and cut through the noise" (Config 2025): through line, hook, reframing, PSB/SIA, stories, data plus feedback, rehearse and cut. The "discern the ask" list and PPP come from the value-per-minute video (see `density.md`).
