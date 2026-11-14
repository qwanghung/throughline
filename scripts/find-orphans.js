// Finds orphaned words on a rendered page: a block whose last line holds too few words.
// English needs at least 2 words on the last line; Vietnamese, written one syllable per word, needs 3.
// Paste into the browser console (or run it with a browser tool) at each width you care about.
// Returns a list of { tag, words, lastLine, text } for every block that fails.
(() => {
  const SEL = 'h1,h2,h3,h4,h5,h6,p,li,dt,dd,figcaption,blockquote,td,th,summary,.title,.lead,.note'
  const top = ([node, start, end]) => {
    const r = document.createRange(); r.setStart(node, start); r.setEnd(node, end)
    const rects = r.getClientRects(); return rects.length ? rects[rects.length - 1].top : null }
  const found = []
  for (const el of document.querySelectorAll(SEL)) {
    // Skip hidden blocks, code, and containers whose text is checked through a child block instead.
    if (!el.getClientRects().length || el.closest('pre, code') || el.querySelector(SEL)) continue
    const words = [], walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
    for (let n; (n = walk.nextNode());) for (const m of n.data.matchAll(/\S+/g)) words.push([n, m.index, m.index + m[0].length, m[0]])
    if (words.length < 3) continue
    const last = top(words[words.length - 1])
    if (last == null || Math.abs(top(words[0]) - last) < 2) continue
    let k = 0
    for (let i = words.length - 1; i >= 0 && Math.abs(top(words[i]) - last) < 2; i--) k++
    const lang = (el.closest('[lang]')?.getAttribute('lang') || 'en').slice(0, 2).toLowerCase()
    if (k < (lang === 'vi' ? 3 : 2)) found.push({ tag: el.tagName.toLowerCase(), words: k,
      lastLine: words.slice(-k).map(w => w[3]).join(' '), text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 80) })
  }
  return found
})()
