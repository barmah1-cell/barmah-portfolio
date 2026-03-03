# Media Gallery Management Guide

This guide explains how to add and manage photos and videos in your Media Gallery section.

## Overview

The Media Gallery displays:
- **Photos**: Images from events, conferences, workshops
- **Videos**: Embedded YouTube/Vimeo videos or uploaded video files
- **Filter options**: View all media, only photos, or only videos
- **Modal viewer**: Click any item to view in full screen

## Adding Media Items

### 1. Edit the Media Data File

Open `src/data/mediaItems.ts` and add new items to the array:

```typescript
{
  id: "4", // Unique ID
  type: "image", // "image" or "video"
  title: "Your Event Title",
  description: "Brief description of the event or content",
  thumbnailUrl: "/images/your-thumbnail.jpg", // Path to thumbnail image
  mediaUrl: "/images/your-image.jpg", // For images: full image path, For videos: YouTube embed URL
  date: "2024-03-15", // Date in YYYY-MM-DD format
  category: "Events" // Optional: Events, Presentations, Workshops, etc.
}
```

### 2. Adding Photos

For photos, both `thumbnailUrl` and `mediaUrl` can be the same image:

```typescript
{
  id: "5",
  type: "image",
  title: "Climate Summit 2024",
  description: "Speaking at the annual climate summit",
  thumbnailUrl: "/images/climate-summit.jpg",
  mediaUrl: "/images/climate-summit.jpg",
  date: "2024-03-20",
  category: "Events"
}
```

### 3. Adding YouTube Videos

For YouTube videos, use the embed URL format:

```typescript
{
  id: "6",
  type: "video",
  title: "Keynote Speech",
  description: "Keynote on sustainable development",
  thumbnailUrl: "/images/keynote-thumbnail.jpg", // Use a screenshot or custom thumbnail
  mediaUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace VIDEO_ID_HERE with actual ID
  date: "2024-02-15",
  category: "Presentations"
}
```

**How to get YouTube embed URL:**
1. Go to your YouTube video
2. Click "Share" button
3. Click "Embed"
4. Copy the URL from `src="..."` (it will look like: `https://www.youtube.com/embed/dQw4w9WgXcQ`)

### 4. Adding Vimeo Videos

For Vimeo videos:

```typescript
{
  id: "7",
  type: "video",
  title: "Workshop Recording",
  description: "Full workshop on development planning",
  thumbnailUrl: "/images/workshop-thumb.jpg",
  mediaUrl: "https://player.vimeo.com/video/VIDEO_ID_HERE",
  date: "2024-01-10",
  category: "Workshops"
}
```

### 5. Adding Uploaded Video Files

If you upload video files directly to your site:

```typescript
{
  id: "8",
  type: "video",
  title: "Conference Highlights",
  description: "Highlights from the 2024 conference",
  thumbnailUrl: "/images/conference-thumb.jpg",
  mediaUrl: "/videos/conference-highlights.mp4", // Upload to public/videos/ folder
  date: "2024-03-01",
  category: "Events"
}
```

## Managing Images

### Where to Store Images

Store all images in the `public/images/` folder:

1. Add your image files to `public/images/`
2. Reference them in the code as `/images/filename.jpg`

### Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1200x800px or similar aspect ratio
- **File size**: Keep under 500KB for faster loading
- **Naming**: Use descriptive names with hyphens (e.g., `climate-summit-2024.jpg`)

### Optimizing Images

Before uploading, compress your images:
- Use online tools like TinyPNG or Squoosh
- Aim for good quality at smaller file sizes

## Managing Videos

### Where to Store Videos (if uploading)

1. Create a `public/videos/` folder if it doesn't exist
2. Add your video files there
3. Reference them as `/videos/filename.mp4`

### Video Guidelines

- **Recommended**: Use YouTube or Vimeo for better performance
- **If uploading directly**: Keep files under 50MB
- **Format**: MP4 (H.264 codec) for best compatibility

## Categories

You can use any category name you want. Common categories:
- Events
- Presentations
- Workshops
- Conferences
- Interviews
- Lectures

## Example: Complete Media Item

```typescript
{
  id: "9",
  type: "image",
  title: "UN Climate Conference 2024",
  description: "Panel discussion on climate financing strategies for developing nations",
  thumbnailUrl: "/images/un-climate-2024.jpg",
  mediaUrl: "/images/un-climate-2024.jpg",
  date: "2024-04-15",
  category: "Conferences"
}
```

## Testing Your Changes

After adding media items:

1. Save the `mediaItems.ts` file
2. Run `npm run dev` to see changes locally
3. Check that images load correctly
4. Test video playback
5. Verify the filter buttons work
6. Test the modal viewer

## Deployment

After adding media:

1. Commit your changes to Git
2. Push to your repository
3. Netlify will automatically rebuild and deploy
4. Verify everything works on your live site

## Tips

- Add media items in reverse chronological order (newest first)
- Use consistent image sizes for a cleaner look
- Write descriptive titles and descriptions for SEO
- Include dates to show your recent activities
- Use high-quality thumbnails for videos
- Test all video embeds before deploying

## Troubleshooting

**Images not showing:**
- Check the file path is correct
- Ensure images are in `public/images/` folder
- Verify file names match exactly (case-sensitive)

**Videos not playing:**
- For YouTube: Make sure you're using the embed URL, not the watch URL
- For Vimeo: Use the player URL format
- Check that the video is set to public/unlisted, not private

**Modal not opening:**
- Clear browser cache and refresh
- Check browser console for errors
