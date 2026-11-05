# Questions that move the needle

A needle-moving question is one the decider is asking, out loud or silently, whose answer decides whether they say yes. The pitch exists to answer these questions and nothing else.

## Inputs

- The **conviction statement**: "[Decider] will [ask] once they believe [belief]."
- The **audience card**: what they care about, their worries, and what they want from this minute.
- The **gates** G0–G6 in `SKILL.md`.

## Where questions come from

Draft candidates from each source. Keep only those that are real for this decider.

| Source | Generic form | Spine slot |
|---|---|---|
| Belief | Is the problem real, and is it ours? | Problems |
| Stakes | What does it cost if we leave it? Why now? | Problems |
| Heart | Whose day gets better or worse, and what does that look like? | Problems / story |
| Fit | Why does this design solve it? | Principle, Solution |
| Choice | Why this instead of X, the existing pattern, or doing nothing? | Map / options |
| Cost & risk | What does it cost us (build, retraining, time)? What if it's wrong? | Map / objection |
| Their worry | The specific objection from the card | Objection |
| Ask | What exactly do you need from me, and what happens next? (Showcase: how do I use or clone this?) | Push |
| Expression | What does each decision feel like? What image says it in one line? | Principle, Solution (IRB image lines) |

**Write every question in the decider's own words and specific to the project.** "Is the problem real?" is not a question anyone asks. "Are refunds really slowing the queue, or is it one bad store?" is.

**Include at least one heart question.** It's the one that makes the decider care about a person, not a metric. Stories (SIA) and the human detail behind each number come from it.

**For a showcase, include at least one expression question.** Admiration comes from how the decisions are put into words, not only from their reasons. These questions usually rank high.

**Defensive questions are the designer's call in a showcase.** Belief, cost & risk, and objection questions are required for a decision pitch. In a showcase the designer may drop them ("I want it to inspire, not defend"). Record the drop in the decisions log, and still never overstate anything.

## Rank

Score each candidate:
- **Weight**: does the decision hinge on it? 1 = nice to know, 2 = matters, 3 = no yes without it.
- **Doubt**: how unconvinced is the decider right now? 1 = already believes it, 2 = unsure, 3 = sceptical.

Priority = weight × doubt. Sort from highest to lowest.

- Drop any question whose answer is on the "knows by heart" list, or that wouldn't change the decision.
- Keep 5–7. The top 3 are **must-answer**: the plan isn't ready until they have answers.
- If two questions would share one answer, merge them.

## Present the list

| # | Their question | Why it moves them | A convincing answer needs | Slot | Priority |
|---|---|---|---|---|---|
| 1 | … | … | e.g. funnel data + one quote | Problems | 9 |

Then ask the designer:
- Is anything missing that they'd expect this decider to ask?
- Is anything ranked wrong?

## Work through the answers

- Take one or two questions at a time, from the top.
- **Push back on vague answers.** Ask for the number, the who, the source. Place each answer on the evidence ladder (`rationale.md`) and say which rung it's on.
- **When the designer doesn't have an answer**, offer three ways forward:
  1. **Get it**: say what evidence is needed and who has it.
  2. **Narrow the claim** to what the evidence supports.
  3. **Name it as a gap** in the pitch.
- **Never answer a question for the designer.** You may suggest a hypothesis, labelled `Hypothesis — confirm?`, for them to accept or correct.
- Each answer is short: one sentence for the claim, one for the proof. That's what goes into the outline.

## Example

Refund flow, decider is the Head of Retail Ops. See `examples/03-refund-plan.md`.

| # | Their question | Why it moves them | A convincing answer needs | Slot | Priority |
|---|---|---|---|---|---|
| 1 | "Will I have to retrain 400 cashiers?" | Their stated worry; training cost is on their budget | Test result with new cashiers | Objection | 9 |
| 2 | "Is refund time really what makes the peak queue?" | They'll only fund a fix to the bottleneck | Till timings + queue counts | Problems | 6 |
| 3 | "What does it cost me if we leave it?" | They're measured on errors and queue time | Error rate × finance hours | Problems | 6 |
| 4 | "What's it like for the cashier today?" (heart) | Staff turnover is on their mind | One observed session, one quote | Story | 4 |
| 5 | "Why not just give managers a PIN shortcut?" | It's the cheap option they'll think of | Option table: it doesn't remove the manager | Map | 4 |
| 6 | "What do you need from me?" | They want a bounded commitment | One store, March, 4-week readout | Push | 3 |
