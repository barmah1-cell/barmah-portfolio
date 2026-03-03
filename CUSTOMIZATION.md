# Customization Guide

Quick reference for customizing your portfolio website.

## Updating Content

### Your Name & Title
**File:** `src/components/Navigation/Navigation.tsx` and `src/components/Footer/Footer.tsx`
- Change "Prof. Bartholomew Armah PhD" to your name

### Hero Section Headline
**File:** `src/App.tsx`
- Update the `headline` prop in HeroSection component

### Services
**File:** `src/data/services.ts`
- Add, remove, or edit service offerings
- Change titles, descriptions, and icons

### Research Topics
**File:** `src/data/researchItems.ts`
- Update research titles and summaries
- Add image paths when you have images

### Testimonials
**File:** `src/data/testimonials.ts`
- Add, remove, or edit client testimonials
- Update client names, titles, companies

### Contact Information
**File:** `src/components/Footer/Footer.tsx`
- Update email, phone, and location

## Styling Changes

### Colors
**File:** `tailwind.config.js`

Current colors:
```javascript
primary: {
  navy: '#1e3a8a',      // Main navy blue
  navyDark: '#1e293b',  // Darker navy
},
accent: {
  gold: '#f59e0b',      // Gold accent
  teal: '#14b8a6',      // Teal accent
}
```

To change colors, update the hex values.

### Fonts
**File:** `src/index.css`

Current font stack:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
```

To use Google Fonts:
1. Add font link in `index.html`
2. Update font-family in `src/index.css`

## Adding Images

### Research Section Images
1. Create folder: `public/images`
2. Add your images (e.g., `climate-financing.jpg`)
3. Update `src/data/researchItems.ts`:
   ```typescript
   imageUrl: '/images/climate-financing.jpg'
   ```

### Company Logos (Testimonials)
Same process as research images:
```typescript
companyLogo: '/images/company-logo.png'
```

## Adding New Sections

1. Create component in `src/components/YourSection/`
2. Import in `src/App.tsx`
3. Add between existing sections
4. Wrap in `<ErrorBoundary>` for safety

## Modifying Layout

### Section Spacing
Each section uses: `py-16 md:py-24`
- `py-16` = padding top/bottom on mobile
- `md:py-24` = padding top/bottom on desktop

To change, edit the className in each section component.

### Container Width
All sections use: `max-w-7xl mx-auto`
- `max-w-7xl` = maximum width
- `mx-auto` = center horizontally

Options: `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl`

### Grid Columns
Services/Research/Testimonials use:
```
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## Form Customization

### Validation Rules
**File:** `src/components/ContactSection/ContactForm.tsx`

Current rules:
- Name: min 2 characters
- Email: valid email format
- Company: min 2 characters
- Message: min 10 characters

To change, edit the `validateField` function.

### Form Submission
Currently shows success message. To send emails:
1. Set up backend service (EmailJS, Formspree, etc.)
2. Update `handleFormSubmit` in `ContactSection.tsx`

## Navigation Menu

### Adding Menu Items
**File:** `src/components/Navigation/Navigation.tsx`

Add new button:
```tsx
<button
  onClick={() => scrollToSection('your-section-id')}
  className={...}
>
  Your Link
</button>
```

### Sticky Navigation
Navigation becomes sticky with white background after scrolling 50px.
To change threshold, edit `window.scrollY > 50` in Navigation.tsx.

## Footer Customization

### Adding Social Links
**File:** `src/components/Footer/Footer.tsx`

Add in Contact Info section:
```tsx
<li>
  <a href="https://linkedin.com/in/yourprofile" 
     className="text-gray-300 hover:text-accent-gold">
    LinkedIn
  </a>
</li>
```

### Footer Columns
Current layout: 3 columns on desktop, 1 on mobile
To change: edit `grid-cols-1 md:grid-cols-3` in Footer.tsx

## Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` 640px (small devices)
- `md:` 768px (tablets)
- `lg:` 1024px (desktops)
- `xl:` 1280px (large desktops)

Example: `text-xl md:text-2xl lg:text-4xl`
- Mobile: text-xl
- Tablet: text-2xl
- Desktop: text-4xl

## Quick Tips

1. **Test changes:** Dev server auto-refreshes when you save files
2. **Mobile testing:** Use browser dev tools (F12 > device toolbar)
3. **Color contrast:** Ensure text is readable on backgrounds
4. **Keep it simple:** Less is often more in professional sites
5. **Backup:** Commit changes to Git before major modifications

## Need More Help?

- Tailwind CSS docs: https://tailwindcss.com/docs
- React docs: https://react.dev
- TypeScript docs: https://www.typescriptlang.org/docs
