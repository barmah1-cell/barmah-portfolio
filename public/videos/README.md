# Videos Folder

This folder is for storing video files that you want to host directly on your website.

## Recommendations

**We recommend using YouTube or Vimeo instead of uploading videos directly** because:
- Better performance and faster loading
- Automatic quality adjustment for different devices
- No storage limits
- Built-in player controls
- Better SEO

## If You Need to Upload Videos Directly

If you must upload videos to this folder:

1. **Keep file sizes small**: Under 50MB per video
2. **Use MP4 format**: H.264 codec for best compatibility
3. **Compress videos**: Use tools like HandBrake or online compressors
4. **Use descriptive names**: `conference-2024-highlights.mp4`

## How to Reference Uploaded Videos

In `src/data/mediaItems.ts`:

```typescript
{
  id: "1",
  type: "video",
  title: "My Video Title",
  description: "Video description",
  thumbnailUrl: "/images/video-thumbnail.jpg",
  mediaUrl: "/videos/my-video.mp4", // Reference your video file here
  date: "2024-03-15",
  category: "Events"
}
```

## Current Videos

(List your uploaded videos here as you add them)

- None yet
