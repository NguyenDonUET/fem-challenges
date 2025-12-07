# Frontend Mentor - Four card feature section

![Design preview for the Four card feature section coding challenge](./design/desktop-preview.jpg)

## Subtitle should NOT be a heading

- It's supporting text

- It doesn't define a document section
  → So `<p>` is correct.

```html
<p class="feature-subtitle">Reliable, efficient delivery</p>
<h2 class="feature-title">Powered by Technology</h2>
```

## Using Grid

- use `width: 50%;` for middle card

## Remove redundant fallback css variables

## prefers-reduced-motion

- you should disable (or reduce) transitions, animation for users who prefer reduced motion.

```css
@media screen and (prefers-reduced-motion: reduce) {
  html {
    interpolate-size: allow-keywords;
  }
  * {
    animation-duration: 0s;
    animation-iteration-count: 1;
    transition-duration: 0s;
  }
}
```
