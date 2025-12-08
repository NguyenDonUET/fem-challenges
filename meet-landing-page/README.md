# Frontend Mentor - Meet landing page

![Design preview for the Meet landing page coding challenge](./preview.jpg)

## number with line

- height auto from top->bottom
- bottom 100% of its pseudo element

```css
.number {
  width: 56px;
  height: 56px;
  border: 1px solid #d1d1df;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
}
.number::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 80px;
  bottom: 100%;
  background-color: red;
}
```
