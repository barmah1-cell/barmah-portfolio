# Deploying Media Gallery to Netlify

## Quick Deployment Steps

Your media gallery is ready to deploy! Follow these steps:

### 1. Test Locally First

```bash
npm run dev
```

- Navigate to the Media section
- Test all filter buttons
- Click on media items to open modal
- Verify videos play correctly
- Check on mobile view (resize browser)

### 2. Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

### 3. Commit Your Changes

```bash
git add .
git commit -m "Add media gallery section with photos and videos"
git push
```

### 4. Netlify Auto-Deploy

Netlify will automatically:
- Detect the push to your repository
- Run `npm run build`
- Deploy the new version
- Update https://barmah1.org

**Deployment time**: Usually 1-3 minutes

### 5. Verify Live Site

1. Go to https://barmah1.org
2. Scroll to Media Gallery section
3. Test filters and modal viewer
4. Check video playback
5. Test on mobile device

## Before You Deploy

### Checklist

- [ ] Added your actual photos to `public/images/`
- [ ] Updated `src/data/mediaItems.ts` with your content
- [ ] Tested locally with `npm run dev`
- [ ] Verified all images load correctly
- [ ] Tested video embeds (if using YouTube/Vimeo)
- [ ] Checked responsive design on mobile
- [ ] Build completed successfully (`npm run build`)

### Optional: Keep Sample Content

If you want to deploy with the sample content first:
- The 3 sample items will show on your live site
- You can replace them later
- Good for testing the feature before adding real content

## Adding Content After Deployment

You can add media items anytime:

1. Edit `src/data/mediaItems.ts`
2. Add new images to `public/images/`
3. Commit and push changes
4. Netlify auto-deploys

## Troubleshooting

### Images Not Showing

**Problem**: Images show locally but not on live site

**Solution**:
- Ensure images are in `public/images/` folder
- Check file paths start with `/images/` (not `./images/`)
- Verify image files were committed to Git
- Check file names match exactly (case-sensitive)

### Videos Not Playing

**Problem**: Videos don't play on live site

**Solution**:
- For YouTube: Use embed URL format `https://www.youtube.com/embed/VIDEO_ID`
- For Vimeo: Use player URL format `https://player.vimeo.com/video/VIDEO_ID`
- Ensure video is set to public or unlisted (not private)
- Check browser console for errors

### Build Fails

**Problem**: `npm run build` shows errors

**Solution**:
- Check TypeScript errors in terminal
- Verify all imports are correct
- Ensure all required fields are in mediaItems
- Run `npm install` to ensure dependencies are installed

### Netlify Deploy Fails

**Problem**: Netlify shows build error

**Solution**:
1. Check Netlify deploy logs for specific error
2. Ensure `npm run build` works locally
3. Verify all files are committed to Git
4. Check Node version matches (Netlify uses Node 18 by default)

## File Checklist

Make sure these files are committed:

```
✓ src/components/MediaGallery/MediaGallery.tsx
✓ src/components/MediaGallery/MediaCard.tsx
✓ src/components/MediaGallery/MediaModal.tsx
✓ src/data/mediaItems.ts
✓ src/types/index.ts (updated)
✓ src/pages/HomePage.tsx (updated)
✓ src/components/Navigation/Navigation.tsx (updated)
✓ src/components/Footer/Footer.tsx (updated)
✓ public/images/ (your image files)
✓ MEDIA-GUIDE.md (documentation)
```

## Git Commands Reference

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Add media gallery with initial content"

# Push to trigger deployment
git push

# Check commit history
git log --oneline
```

## Netlify Dashboard

Monitor your deployment:

1. Go to https://app.netlify.com
2. Select your site (barmah1.org)
3. Click "Deploys" tab
4. Watch build progress
5. Check deploy logs if issues occur

## Post-Deployment

### Update Sitemap (Optional)

The sitemap already includes your homepage (which has the media gallery), but you can update the lastmod date:

1. Edit `public/sitemap.xml`
2. Update the `<lastmod>` date for the homepage
3. Commit and push

### Test Everything

- [ ] Homepage loads correctly
- [ ] Media section appears between Research and Blog
- [ ] Navigation has "Media" link
- [ ] Footer has "Media Gallery" link
- [ ] Filter buttons work
- [ ] Modal opens and closes
- [ ] Videos play
- [ ] Mobile responsive design works
- [ ] All images load

### Share Your Site

Once verified:
- Share https://barmah1.org with colleagues
- Post on social media
- Add to your email signature
- Include in your LinkedIn profile

## Need Help?

Refer to these guides:
- **MEDIA-GUIDE.md** - Adding and managing content
- **MEDIA-GALLERY-FEATURES.md** - Feature overview
- **DEPLOYMENT.md** - General deployment guide
- **VISIBILITY-GUIDE.md** - SEO and marketing

## Quick Reference

**Local development**: `npm run dev`
**Build**: `npm run build`
**Deploy**: `git push` (Netlify auto-deploys)
**Live site**: https://barmah1.org
**Netlify dashboard**: https://app.netlify.com
