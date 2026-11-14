# throughline

A Claude skill that helps designers explain their work so people get it, believe it and care about it. It plans with you first, and only writes once you approve the plan. Works in English and Vietnamese.

## Install

**Claude Code**

```bash
git clone https://github.com/qwanghung/throughline.git ~/.claude/skills/throughline
```

Start a new session.

**Claude.ai / Claude Desktop:** zip this folder, then go to Settings → Capabilities → Skills, upload the zip and turn it on.

## Use

1. Type `/throughline`, or just say "help me pitch this design".
2. **Say who it's for.** "My client's Head of Ops." "Designers who care about craft."
3. **Say the one thing they must believe or do.** One sentence.
4. **Answer its questions** in your own words. Real moments and real numbers work best. It never makes them up.
5. **Pick and veto.** It shows hooks and an outline. Say what sounds wrong, and it won't come back.
6. **Say "write it".**

Tip: paste your existing doc or link in step 1, and it fills in most of the plan for you.

## Other commands

- `/throughline hook <topic>`: just the opening. One-line hooks for your slide or doc title, plus three-beat openings, made for your audience, in the spirit of an elevator pitch or a TED-style talk
- `/throughline orphans <file or url>`: finds and fixes every word left alone on the last line, in English or Vietnamese
- `/throughline review <file>`: tells you what's weak, without changing anything
- `/throughline tighten <file>`: cuts the fluff, keeps the meaning
- `/throughline adapt <file> vi` (or `en`): rewrites it in the other language

## What's inside

- `SKILL.md`: the workflow: audience → conviction → plan → write → refine
- `references/`: audience card, the six-step outline, hook writing (`hooks.md`), questions that move the needle, value-per-minute rules for cutting, rationale tables, English and Vietnamese writing patterns, orphan fixing (`orphans.md`), formats
- `scripts/find-orphans.js`: paste into a browser console to list orphaned words on any rendered page
- `examples/`: a decision pitch (refund flow, in English and Vietnamese) and a real showcase dry run (`04-dry-run-glass-and-light.md`)
- `INPUTS-NEEDED.md`: what's still to add (real stakeholder profiles, Vietnamese wording to check, real before/after examples)

## Built on

- [Clarity](https://clarity.addy.ie/) by Addy Osmani: writing for the reader
- [Humanizer](https://github.com/blader/humanizer) by blader: the English pattern list (MIT)
- Wojtek Dziedzic, "Pitch perfect: how to present ideas and cut through the noise" (Config 2025): through line, hooks, three-beat structures
- Hook craft from Rick Kettner (on Donald Miller's one-liner), Ash Maurya (the elevator pitch as a movie trailer), Kallaway and heyDominik (curiosity loops, context first, withholding the answer)
- "The #1 Habit for Clearer Speaking (Value-Per-Minute)": value per minute, point → proof → push

## License

MIT. See [LICENSE](LICENSE).
