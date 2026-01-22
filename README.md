<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1PnHQWdASKcNaw93exF382rEAENxAFZTP

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages (specifically to a subpath like `/blog/`) using GitHub Actions.

### Setup Steps:

1. **GitHub Repository**: Ensure your repository is named `blog`.
2. **Astro Configuration**: The `astro.config.mjs` is already set with:
   - `site: 'https://bat9527.github.io'`
   - `base: '/blog'`
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix subpath deployment paths"
   git push origin main
   ```
4. **Configure GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Important Note on Paths:
When deploying to a subpath, all internal links and images from the `public` folder must be prefixed with `${import.meta.env.BASE_URL}`. This has been applied to the current codebase.


