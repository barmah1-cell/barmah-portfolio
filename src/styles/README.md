# Tailwind Custom Theme

## Custom Colors

The project uses a custom color palette defined in `tailwind.config.js`:

### Primary Colors
- `bg-primary-navy` or `text-primary-navy` - Navy blue (#1e3a8a)
- `bg-primary-navyDark` or `text-primary-navyDark` - Darker navy (#1e293b)

### Accent Colors
- `bg-accent-gold` or `text-accent-gold` - Gold (#f59e0b)
- `bg-accent-teal` or `text-accent-teal` - Teal (#14b8a6)

## Usage Examples

```tsx
// Navy background with white text
<div className="bg-primary-navy text-white">

// Gold accent button
<button className="bg-accent-gold hover:bg-accent-teal">

// Navy text
<h1 className="text-primary-navy">
```

## Responsive Breakpoints

- `sm:` - 640px and up (small devices)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)
