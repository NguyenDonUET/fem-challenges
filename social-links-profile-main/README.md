# Frontend Mentor - Social links profile

![Design preview for the Social links profile coding challenge](./preview.jpg)

- Wrap the profile content inside a `<section>` element to group related content semantically.
- Change the `<div class="social-links">` to a `<nav>` element containing an unordered list `<ul>` with each social link in a `<li>`. This clearly marks navigation links and improves semantic structure.

## Document should have one main landmark

**Why does this matter?**
For users relying on assistive devices, multiple or missing main landmarks can cause confusion and make it harder to navigate your site efficiently. Clear landmarks improve accessibility, which is a critical aspect of professional web development and inclusive design.

**SOL**
Add a single `<main>` element that wraps the core content of your page.

## Add aria-label for links

Add unique, descriptive text or aria-labels to each social link to clarify their purpose, e.g., aria-label="Jessica's GitHub profile".

## use article tag

- Using `<article>` signals that this section is a self-contained piece of content, improving the document’s structure and clarity.
- better represent the profile as a standalone piece of content.

```html
<article class="profile">
  <!-- profile content -->
</article>
```

## unnecessary extra layers

```html
<section class="profile-section">
  <div class="card">
    <article class="profile">
      <!-- content -->
    </article>
  </div>
</section>

<!-- FIx -->
<section class="profile-section">
  <article class="profile card">
    <!-- Combine classes, remove extra div -->
    <!-- content -->
  </article>
</section>
```
