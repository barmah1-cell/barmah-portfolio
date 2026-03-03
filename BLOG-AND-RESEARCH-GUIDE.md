# Blog and Research Management Guide

## ✅ What's Been Added

### 1. Research Papers Access
- Each research card now has a "View Research Paper" link
- Viewers can click to download/view your PDF papers
- Papers are stored in `public/research/` folder

### 2. Blog Section
- New "Latest Insights" blog section added
- Displays blog posts with images, dates, and tags
- Added to navigation menu and footer
- Located between Research and Testimonials sections

---

## 📄 Adding Research Papers (PDFs)

### Step 1: Prepare Your PDF
- Save your research paper as a PDF
- Name it clearly (e.g., `climate-financing.pdf`)

### Step 2: Add to Project
1. Navigate to: `C:\Users\barma\Kiro programs\public\research\`
2. Copy your PDF file there
3. The filename should match what's in `src/data/researchItems.ts`

### Step 3: Verify
- Refresh your browser
- Click "View Research Paper" on the research card
- PDF should open in a new tab

### Current Expected Files:
- `climate-financing.pdf`
- `digital-planning.pdf`
- `critical-minerals.pdf`

---

## 📝 Managing Blog Posts

### Adding a New Blog Post

**File to Edit:** `src/data/blogPosts.ts`

Add a new entry to the array:

```typescript
{
  id: 'your-post-id',
  title: 'Your Blog Post Title',
  excerpt: 'A brief summary of your post (1-2 sentences)',
  date: '2024-02-15',  // Format: YYYY-MM-DD
  author: 'Bartholomew Armah PhD',
  imageUrl: '/images/blog-your-image.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3']
}
```

### Editing Existing Posts

Open `src/data/blogPosts.ts` and modify:
- `title` - The blog post headline
- `excerpt` - Short description shown on card
- `date` - Publication date
- `tags` - Categories/topics (optional)
- `imageUrl` - Path to blog image

### Adding Blog Images

1. Save image to: `public/images/`
2. Name it: `blog-your-topic.jpg`
3. Update `imageUrl` in blog post data

---

## 🖼️ Image Guidelines

### Research Images
- **Location:** `public/images/`
- **Naming:** `climate-financing.jpg`, `digital-planning.jpg`, etc.
- **Size:** 800x600px recommended
- **Format:** JPG or PNG

### Blog Images
- **Location:** `public/images/`
- **Naming:** `blog-topic-name.jpg`
- **Size:** 800x600px recommended
- **Format:** JPG or PNG

---

## 📋 Quick Reference

### File Locations

| Content Type | Data File | Assets Folder |
|--------------|-----------|---------------|
| Research Papers | `src/data/researchItems.ts` | `public/research/` (PDFs) |
| Research Images | `src/data/researchItems.ts` | `public/images/` |
| Blog Posts | `src/data/blogPosts.ts` | `public/images/` |

### Navigation Order
1. Hero
2. Services
3. Research (with PDF links)
4. Blog (new!)
5. Testimonials
6. Contact

---

## 🎯 Common Tasks

### Task: Add a New Research Paper

1. Save PDF to `public/research/climate-financing.pdf`
2. Verify filename matches `pdfUrl` in `src/data/researchItems.ts`
3. Refresh browser
4. Click "View Research Paper" to test

### Task: Add a New Blog Post

1. Open `src/data/blogPosts.ts`
2. Copy an existing post entry
3. Modify the details (title, excerpt, date, etc.)
4. Save file
5. Refresh browser to see new post

### Task: Update Blog Post Content

1. Open `src/data/blogPosts.ts`
2. Find the post by `id`
3. Edit `title`, `excerpt`, `date`, or `tags`
4. Save and refresh

---

## 💡 Tips

- **PDF Size:** Keep research papers under 10MB for fast downloads
- **Image Size:** Compress images to under 500KB
- **Dates:** Use YYYY-MM-DD format for proper sorting
- **Tags:** Use 2-4 tags per blog post for best organization
- **Testing:** Always test PDF links after adding papers

---

## 🚀 What Viewers See

### Research Section
- Research card with image
- Title and summary
- "View Research Paper" link (opens PDF in new tab)

### Blog Section
- Blog card with image
- Title, date, and author
- Excerpt (preview text)
- Tags (categories)
- "Read More" button (currently placeholder)

---

## 📝 Future Enhancements

If you want to add full blog post pages later:
- Create individual blog post pages
- Add routing (React Router)
- Link "Read More" buttons to full posts

For now, the blog section shows previews and you can link to external blog platforms if needed.
