# Example: refund flow, phases 1–3

> SYNTHETIC: the same invented project as `01-refund-flow-en.md`. It shows how a session feels and what the finished plan looks like. Replace it with a real session.

## How the conversation goes (excerpt)

**Phase 1**

> **Agent:** Who are you trying to convince with this?
>
> **Designer:** The client's Head of Retail Ops. Their regional managers will be in the meeting too.
>
> **Agent:** For a Head of Ops I'd assume they know store operations, the refund policy and staff turnover by heart, and care most about queue time and errors. Right? Also, what do you want from them in this meeting: a decision, or just alignment?
>
> **Designer:** Yes, and add training cost; they hate retraining. I want them to approve a pilot.

**Phase 2**

> **Agent:** What's the one thing they must believe for them to approve the pilot?
>
> **Designer:** That the new flow is faster and cashiers can learn it easily, and also that it reduces errors, and that it looks more modern…
>
> **Agent:** Which of those does the decision hang on? "Modern" isn't on their list of cares.
>
> **Designer:** That cashiers can handle refunds alone, without retraining.
>
> **Agent:** Conviction: "Head of Ops will approve a one-store pilot once they believe cashiers can finish normal refunds alone without retraining." Through line: "a cashier can finish any normal refund alone." Here are the questions they'll be asking, ranked… *(the table below)*. Anything missing?

**Phase 3**

> **Agent:** Q1 first: "Will I have to retrain 400 cashiers?" What do you have?
>
> **Designer:** It's pretty intuitive.
>
> **Agent:** That's an opinion, the bottom rung. They'll want to see it happen. Did any new cashiers try it?
>
> **Designer:** In testing, all three new hires finished a refund without help on the first try.
>
> **Agent:** Good: direct observation, n = 3. I'll write it as "3 of 3 new hires" and keep the small sample visible.

## The plan at the end of phase 3

```markdown
# Pitch plan: Refund flow pilot

Phase: 3 Plan → ready for 4
Language: en    Format: spoken, 3 min + slides    Length: ~400 words

## 1. Audience
Decider:            Head of Retail Ops (client)
Also in the room:   regional managers
Decision they own:  approving pilots and rollouts
Wants from this:    decision
Knows by heart:     store operations, refund policy, staff turnover, POS hardware
Cares about:        peak queue time, refund errors, training cost
Worries:            "Retraining 400 cashiers again?"
Address & register: direct, first names

## 2. Conviction
Head of Ops will approve a one-store pilot once they believe cashiers can finish
normal refunds alone without retraining.
Through line: a cashier can finish any normal refund alone.

| # | Their question | Priority | Status |
|---|---|---|---|
| 1 | "Will I have to retrain 400 cashiers?" | 9 | answered |
| 2 | "Is refund time really what makes the peak queue?" | 6 | answered |
| 3 | "What does it cost me if we leave it?" | 6 | answered |
| 4 | "What's it like for the cashier today?" (heart) | 4 | answered |
| 5 | "Why not a manager PIN shortcut?" | 4 | answered |
| 6 | "What do you need from me?" | 3 | answered |

## 3. Plan

### Answers
Q1: Layout unchanged — 3 of 3 new hires finished a refund unaided on first try — direct observation, n=3
Q2: A refund takes ~4 min; at peak the queue grows by 6 — till timings, 2 stores
Q3: 3% of refunds go to the wrong method; finance fixes them by hand — finance report, last quarter
Q4: 5 of 8 cashiers had to call a manager because they couldn't find the receipt — research sessions
Q5: The PIN shortcut was cheaper but kept the manager in every refund, so the queue doesn't change
Q6: One store, March, report queue time and error rate after 4 weeks

### Hook candidates
1. "What if a refund never needed a manager?"  ← chosen
2. "Refunds are the slowest thing at your till."

### Outline
| # | Section | Answers | Structure | Key point | Status |
|---|---|---|---|---|---|
| 1 | Hook + point | — | — | Never needs a manager; approve a one-store pilot | ready |
| 2 | The queue | Q2, Q3 | PSB | 4 min per refund, +6 in queue, 3% wrong method | ready |
| 3 | The cashier | Q4 | SIA | 5 of 8 called a manager; can't find the receipt | ready |
| 4 | The flow | — | PSB | Start from what the customer has (airline check-in) | ready |
| 5 | Why not a PIN | Q5 | PPP | Cheaper but keeps the manager in the loop | ready |
| 6 | Retraining | Q1 | PPP | Same layout; 3 of 3 new hires unaided | ready |
| 7 | Push | Q6 | PPP | One store, March, 4-week readout | ready |

### Gates
- [x] G0  - [x] G1  - [x] G2  - [x] G3 (principle → lookup-first, receipt auto-appears)
- [x] G4 (PIN shortcut)  - [x] G5 (queue time only partly solved: prototype-timed)  - [x] G6

### Open items
- Queue time in a real store is unproven. The pilot answers it; the pitch says so.
```

The phase 4 output for this plan is the "After" in `01-refund-flow-en.md`.
