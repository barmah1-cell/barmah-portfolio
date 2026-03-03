# Images Folder

Place your images here:

## Research Images
- climate-financing.jpg (for Climate Smart Development Financing)
- digital-planning.jpg (for Integrated Development Planning)

## Company Logos (optional)
- company-logo-1.png
- company-logo-2.png
- company-logo-3.png

## Image Guidelines
- **Format:** JPG or PNG
- **Size:** Recommended 800x600px for research images
- **File size:** Keep under 500KB for fast loading
- **Naming:** Use lowercase with hyphens (e.g., my-image.jpg)

## How to Add Images

1. Save your image files in this folder
2. Update the file paths in the data files:
   - Research: `src/data/researchItems.ts`
   - Logos: `src/data/testimonials.ts`

Example:
```typescript
imageUrl: '/images/climate-financing.jpg'
```

The `/images/` path automatically points to this folder.
