# Deployment Guide

This guide will help you deploy your consultant portfolio website to various hosting platforms.

## Before Deployment

### 1. Update Contact Information
Edit `src/components/Footer/Footer.tsx` and replace placeholder contact info:
- Email: contact@example.com
- Phone: +1 (555) 123-4567
- Location: Your City, Country

### 2. Add Real Images (Optional)
1. Create a `public/images` folder
2. Add your research images
3. Update image paths in `src/data/researchItems.ts`

### 3. Build the Project
Run the build command to create production-ready files:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)

1. **Sign up** at [netlify.com](https://www.netlify.com)

2. **Deploy via Drag & Drop:**
   - Run `npm run build` locally
   - Go to Netlify dashboard
   - Drag the `dist` folder onto the deployment area
   - Your site is live!

3. **Deploy via Git (Automatic Updates):**
   - Push your code to GitHub
   - Connect your GitHub repo to Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Every push to GitHub auto-deploys!

### Option 2: Vercel (Free & Fast)

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Deploy:**
   - Install Vercel CLI: `npm install -g vercel`
   - Run: `vercel`
   - Follow the prompts
   - Your site is live!

3. **Or use GitHub:**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Auto-deploys on every push

### Option 3: GitHub Pages (Free)

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: gh-pages branch
   - Your site is live at the homepage URL!

### Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, FTP):

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload everything from the `dist` folder to your web host
   - Usually to `public_html` or `www` directory

3. **Done!** Your site is live at your domain

## Custom Domain

### Netlify/Vercel:
- Go to domain settings in dashboard
- Add your custom domain
- Update DNS records as instructed

### GitHub Pages:
- Add a `CNAME` file in `public` folder with your domain
- Update DNS records to point to GitHub

## Environment Variables (Future)

If you add backend functionality later:
- Create `.env` file for local development
- Add environment variables in hosting platform dashboard
- Never commit `.env` to Git!

## Post-Deployment Checklist

- [ ] Test all sections load correctly
- [ ] Test contact form validation
- [ ] Test navigation links
- [ ] Test on mobile devices
- [ ] Test smooth scrolling
- [ ] Verify contact information is correct
- [ ] Check all images load properly
- [ ] Test in different browsers (Chrome, Firefox, Safari)

## Updating Your Site

### Netlify/Vercel (Git-connected):
- Make changes locally
- Commit and push to GitHub
- Site auto-updates!

### Manual deployment:
- Make changes locally
- Run `npm run build`
- Upload new `dist` folder or run deploy command

## Need Help?

- Netlify docs: https://docs.netlify.com
- Vercel docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com

## Performance Tips

Your site is already optimized with:
- ✅ Vite's fast build process
- ✅ Code splitting
- ✅ Minified CSS/JS
- ✅ Optimized images (when you add them)

For even better performance:
- Compress images before uploading (use TinyPNG or similar)
- Use WebP format for images
- Enable CDN on your hosting platform
