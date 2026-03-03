# Media Gallery - Features Overview

## What You'll See

### Main Gallery View

The Media Gallery section appears on your homepage between the Research and Blog sections.

**Layout:**
- Section title: "Media Gallery"
- Subtitle: "Explore photos and videos from conferences, workshops, and presentations"
- Three filter buttons: All | Photos | Videos
- Grid of media cards (3 columns on desktop, 2 on tablet, 1 on mobile)

### Media Cards

Each card displays:
- **Thumbnail image** (full card width)
- **Play button overlay** (for videos only - white circle with play icon)
- **Category badge** (top left, teal color)
- **Date** (top right, gray text)
- **Title** (bold, navy blue)
- **Description** (gray text)
- **Action button** ("Watch Video" or "View Image" with arrow)

### Modal Viewer

When you click a media card:
- **Full-screen overlay** (dark background)
- **White content box** (centered, rounded corners)
- **Close button** (X in top right corner)
- **Media display**:
  - Images: Full-size image
  - Videos: Embedded video player (16:9 aspect ratio)
- **Details below media**:
  - Category badge
  - Date
  - Title (large, bold)
  - Description

**Interaction:**
- Click X button to close
- Press ESC key to close
- Click outside the white box to close

## Filter Functionality

### All (Default)
- Shows all media items (photos and videos)
- Button highlighted in teal when active

### Photos
- Shows only image items
- Hides all videos
- Button highlighted in teal when active

### Videos
- Shows only video items
- Hides all images
- Button highlighted in teal when active

## Responsive Design

### Desktop (1024px+)
- 3 columns grid
- Full navigation menu visible
- Larger thumbnails

### Tablet (768px - 1023px)
- 2 columns grid
- Full navigation menu visible
- Medium thumbnails

### Mobile (< 768px)
- 1 column (stacked)
- Hamburger menu (if implemented)
- Smaller thumbnails
- Touch-friendly buttons

## Video Support

### YouTube Videos
- Embedded using iframe
- Full YouTube player controls
- Autoplay disabled by default
- Fullscreen option available

### Vimeo Videos
- Embedded using iframe
- Full Vimeo player controls
- Responsive player

### Uploaded Videos
- HTML5 video player
- Standard browser controls
- Supports MP4, WebM, OGG formats

## Accessibility Features

- **Keyboard navigation**: Tab through cards, Enter to open
- **ESC key**: Close modal
- **Alt text**: All images have descriptive alt text
- **Semantic HTML**: Proper heading hierarchy
- **Focus indicators**: Visible focus states on interactive elements

## Performance

- **Lazy loading**: Images load as needed
- **Optimized thumbnails**: Smaller file sizes for grid view
- **Efficient filtering**: Client-side filtering (no page reload)
- **Modal optimization**: Only renders when open

## SEO Benefits

- **Structured content**: Proper HTML semantics
- **Image alt text**: Helps search engines understand content
- **Descriptive titles**: Improves search visibility
- **Date information**: Shows content freshness
- **Category organization**: Helps with content discovery

## Color Scheme

Matches your existing website theme:
- **Navy blue** (#1e3a8a): Titles, text
- **Teal** (#14b8a6): Active filters, category badges, links
- **Gold** (#f59e0b): Hover states (inherited from theme)
- **White**: Card backgrounds, modal
- **Gray**: Descriptions, dates, inactive states

## Sample Content Included

Three sample items are pre-configured:

1. **Climate Finance Summit 2024** (Image)
   - Category: Events
   - Shows how event photos appear

2. **Development Planning in Digital Era** (Video)
   - Category: Presentations
   - Shows YouTube embed functionality

3. **Critical Minerals Workshop** (Image)
   - Category: Workshops
   - Shows workshop photo display

## Next Steps

1. **Replace sample content** with your actual photos and videos
2. **Upload your images** to `public/images/` folder
3. **Get YouTube/Vimeo URLs** for your videos
4. **Update** `src/data/mediaItems.ts` with your content
5. **Test locally** with `npm run dev`
6. **Deploy** to Netlify

See **MEDIA-GUIDE.md** for detailed instructions on adding content.
