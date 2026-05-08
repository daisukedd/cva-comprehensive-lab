# CVA Examples

Learn about CVA - Class Variance Authority

## What is CVA?

CVA is a library for making components. You write the styles one time. You use them many times.

## Why use CVA?

- Write less CSS
- Make styles easy to change
- Keep code clean and simple

## How it works

1. Define base styles and variants
2. CVA creates a function
3. Use the function with props
4. Get CSS classes

## Components in this project

### Button

A button component with many styles.

```typescript
import { button } from './src/components/button';

const classes = button({ color: 'red', size: 'lg' });
console.log(classes);
```

### Badge

A small badge component.

```typescript
import { badge } from './src/components/badge';

const classes = badge({ color: 'blue', size: 'md' });
console.log(classes);
```

## Options

### Colors

- `blue` - Blue button
- `red` - Red button
- `gray` - Gray button
- `green` - Green button

### Sizes

- `sm` - Small (small text, small padding)
- `md` - Medium (normal text, normal padding)
- `lg` - Large (big text, big padding)

## Files

```
.
├── index.ts              Main file
├── src/
│   └── components/
│       ├── button.ts     Button component
│       └── badge.ts      Badge component
└── README.md            This file
```

## How to run

```bash
npm install
npx ts-node index.ts
```

## Learn more

- [CVA Documentation](https://cva.style)
- [Tailwind CSS](https://tailwindcss.com)
