## how to create css variables for fonts from figma professionally?

- Use Semantic Naming: Names are based on meaning, not on pixel value.
- use Typography groups, sizes(sm, md...)

```txt
--font-display-xl;
--font-display-lg;

--font-heading-xl;
--font-heading-lg;
--font-heading-md;

--font-body-lg;
--font-body-md;
--font-body-sm;

--font-label-sm;
--font-caption-xs;
```

## handle Desktop/Mobile different images

- Use `<picture>` (BEST OPTION)
- CSS background-image
- Show/hide images with CSS (NOT recommended)

```html
<picture>
  <source
    media="(min-width: 37.5rem)"
    srcset="/images/image-product-desktop.jpg"
  />
  <img
    src="/images/image-product-mobile.jpg"
    alt="Hero image"
    class="product-image"
    width="600"
    height="900"
  />
</picture>
```

**How to set width, height?**

- `<source>` is not a visible element, Width/height on it does nothing
- set width, height for img tag and override it in CSS(make it responsive)

- you should use the `actual` pixel dimensions of the image file.

> Intrinsic size: 600 × 900 px

## three main ways to display an SVG icon in HTML.

- inline SVG - BEST option for UI icons
- Use `<img src="icon.svg">`
- Use SVG as CSS background(.icon): bad for accessibility

## Buttons doesn't inherit font-family by default

- some HTML elements (including `<button>`) have browser default styles that override inheritance, especially for font-family, font-size, and line-height.

```css
button,
input,
textarea,
select {
  font-family: inherit;
}
```
