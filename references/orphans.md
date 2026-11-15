# Orphans

An orphan is a word left alone on the last line of a title, heading, paragraph, list item or caption. On a slide or a doc page it reads as a mistake, and it makes careful work look careless. Fix every one you can see.

## When a line counts as orphaned

- **English:** the last line holds a single word.
- **Vietnamese:** the last line holds fewer than three syllables. Vietnamese writes each syllable as a separate "word", so a line ending in "kế" alone splits "thiết kế" in half, and a line holding only "thiết kế" still reads as one stranded word. Keep the last word plus at least one more on the final line.
- **Titles and headings** that wrap onto two lines should be roughly balanced. A long first line over a one- or two-word second line counts as an orphan even when the rule above passes.
- **Never orphaned on purpose:** a one-word title, a label, a button. Leave those alone.

## Where you can see them

An orphan depends on line width, so you can only find one where the layout is known.

| Where the text lives | Can you see line breaks? | What to do |
|---|---|---|
| HTML page or artifact | Yes | Run `scripts/find-orphans.js` in the browser at 375, 768 and 1280 px wide, then fix what it reports |
| Slides (Figma Slides, a deck) | Yes, fixed width | Check every title and text block in a screenshot, or measure as for HTML if it's a web deck |
| Figma frames with fixed-width text | Yes | Check in a screenshot. Figma's API doesn't expose line breaks, so look, then fix in the text |
| Markdown, plain docs, README | No, the width depends on the reader | Prevent: rewrite short headings, and glue words in titles (below) |

## Default for every HTML page or artifact

Whenever you create or edit HTML, including an artifact, a web deck or an email, add this word-breaking baseline unless the page already has equivalent rules. Adjust the selectors to the page's own classes for titles, leads, notes and captions:

```css
/* Even line lengths: balanced titles, no lone word at the end of body text, long strings never overflow. */
h1, h2, h3, h4, h5, h6, dt, .title, .subtitle { text-wrap: balance; }
p, li, dd, figcaption, blockquote, summary { text-wrap: pretty; }
body { overflow-wrap: break-word; }
```

- `balance` evens out the lines of short blocks such as titles and headings, so a heading never ends with one stranded word.
- `pretty` adjusts the last few lines of longer text so they don't end on a single word.
- `overflow-wrap: break-word` stops long URLs or glued runs from pushing past the edge on a phone.
- Don't add `hyphens: auto`. Leave words whole in English and Vietnamese.

Browsers that don't support `balance` or `pretty` wrap normally, so the baseline is safe everywhere. It doesn't replace checking: run the check below and glue what's left.

## How to fix, in order

1. **Rewrite**, when the words are yours to change. Add, drop or swap one word so the last line fills, without changing the meaning or adding filler. Often a shorter synonym earlier in the sentence pulls the orphan up, or a more exact word at the end pushes a second word down. This is the best fix: it works at every width.
2. **Glue** the last words together with a non-breaking space, so they wrap as a unit:
   - English: between the last two words. "where the two&nbsp;meet"
   - Vietnamese: between the syllables of the last word, and between it and the word before. "phục vụ&nbsp;người&nbsp;dùng". Keep the glued run under about 15 characters, or it can overflow on a phone.
   - Also keep together a number and its unit ("30&nbsp;phút", "12&nbsp;px"), a title and a name ("anh&nbsp;Minh"), and a closing particle with its word ("nhé", "ạ").
   - In HTML and Markdown, write `&nbsp;`. In Figma and plain text, use the character U+00A0.
3. **Let the browser balance it**: make sure the word-breaking baseline above is on the page.

Don't glue inside code, URLs, file names or anything a reader might copy.

## Process

- **During a write (phase 4):** after the pattern pass, rewrite any title or heading that's likely to strand a word. If the output is HTML or a slide, render it, run the check and fix what it finds.
- **On request (`/throughline orphans <file or url>`):**
  1. Render the piece at the widths that matter (phone, tablet, desktop for web; the real slide size for decks).
  2. List every orphan with its element and its last line.
  3. Fix each one using the order above: rewrite, glue, then CSS.
  4. Re-render and re-check until none are left at any width.

  When checking a rendered page:
  - **Confirm the viewport width first.** A hidden or zero-width preview wraps every word onto its own line and reports false orphans everywhere.
  - **Open folded content** (`<details>`, accordions, tabs) before checking. Hidden text isn't measured.
  - **Check again with `text-wrap` turned off** (add `* { text-wrap: wrap !important }`), because Safari and older browsers may ignore `pretty` and `balance`. What's left is what glue has to fix.
  - **Glue every block, not only the broken ones.** Orphans move as the width changes, so a block that's fine at 1280 px can break at 414 px. On a page you control, joining the last two words of every multi-line paragraph, caption, description and heading fixes all widths at once.
- **Rewrite in place:** change only the words, the non-breaking spaces and, for HTML, the two CSS rules. Report each fix: what was stranded, what changed.

Report like this:

> Fixed 6 orphans (2 rewritten, 3 glued, 1 balanced by CSS). Checked at 375, 768 and 1280 px; none left.
> - h2 "Five moments in the life of a glass card": "card" alone at 375 px → glued "glass&nbsp;card"
> - p "Light stays quiet…": "it." alone at 1280 px → rewrote "it opens into colour" to "it blooms into colour"
