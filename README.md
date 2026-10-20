# Abigail Owusu Ampomah: Personal Website

Static site (HTML, CSS, JavaScript). No build step.

## Publish on GitHub Pages
1. Create a GitHub account and a new **public** repository named `YOUR-USERNAME.github.io` (this gives the address `https://YOUR-USERNAME.github.io`). Any other name also works; the site then lives at `https://YOUR-USERNAME.github.io/REPO-NAME/`.
2. Upload every file in this folder to the repository root (Add file > Upload files), then commit.
3. Go to **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then Save.
4. Wait 1 to 2 minutes and open your address.

## Editing
- Text: `index.html`
- Colours and fonts: top of `style.css`
- CV file: replace `assets/Abigail_Owusu_Ampomah_CV.docx` (keep the same name or update the two links)

## Adding pictures and videos
- **Pictures:** upload image files to the `photos` folder (JPG, about 1600 px wide is plenty), then list them in `media.js` under `PHOTOS`. The first ones also scroll across the top of every page.
- **Videos:** upload `.mp4` files to the `videos` folder (GitHub's web upload limit is 25 MB per file), or use a YouTube video ID for longer videos. List them in `media.js` under `VIDEOS`.
