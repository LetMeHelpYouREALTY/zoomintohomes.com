# Manual accessibility checklist

Automation (axe, jsx-a11y, Lighthouse) cannot certify this site. Run the following on a staging URL before treating a release as done.

## Keyboard only

- [ ] Tab reaches skip link first; Enter moves focus to `#main-content`
- [ ] All links, buttons, inputs, and the mobile menu toggle are reachable
- [ ] Focus is always visible (3px blue ring)
- [ ] Esc / toggle closes the mobile menu; no keyboard trap
- [ ] Forms can be completed and submitted without a mouse
- [ ] No drag-only controls

## Screen readers

- [ ] NVDA (Windows / Firefox or Chrome): landmarks `banner`, `navigation`, `main`, `contentinfo`; one `h1` per page
- [ ] VoiceOver (macOS / Safari): same landmark and heading check
- [ ] Feature glossary headings announce category then feature name
- [ ] Form errors are spoken (`aria-live` status + per-field `aria-describedby`)
- [ ] Decorative Equal Housing SVG is ignored (`aria-hidden`)

## Reflow and zoom

- [ ] 320px-wide viewport: no horizontal scroll on all nine routes
- [ ] Browser zoom 200%: text remains readable; controls remain 44×44 CSS px; no clipped copy

## Motion

- [ ] `prefers-reduced-motion: reduce`: no animation or parallax (this site has neither by design)
- [ ] No autoplay video or carousels

## Touch

- [ ] Primary controls are at least 44×44 CSS px with adequate spacing

## Content

- [ ] Images (if added later) have factual alt text, or `alt=""` if decorative
- [ ] Any future tour video has captions and a text equivalent
- [ ] Overlay widgets remain absent

## Sign-off

Date:

Browser / AT versions:

Tester:
