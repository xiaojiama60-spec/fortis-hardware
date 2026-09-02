# Fortis Hardware — Website

Plain HTML/CSS/JS, no build step. Deploys directly on GitHub Pages.

## File structure

```
index.html          Home
products.html        Full product catalog by category
about.html            Factory / OEM process / QC
contact.html          Contact page + inquiry form
assets/style.css      All styling (single stylesheet, shared across pages)
assets/main.js        Mobile nav toggle only
```

## Deploy on GitHub Pages

1. Create a new repo (or use your existing `fortishardware.top` repo).
2. Upload all files in this folder, keeping the `assets/` folder structure intact.
3. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. If you're using your custom domain, add a `CNAME` file to the root containing exactly:
   ```
   fortishardware.top
   ```
   and point your domain's DNS A records to GitHub Pages' IPs (or a CNAME record to `<username>.github.io` if using a subdomain) — GitHub's Pages settings page shows the current required records.

## Things you need to fill in before this goes live

These were deliberately left as clearly-marked placeholders rather than invented for you:

- **Project reference cards** (`index.html`, "Project references" section) — swap in real completed orders with real photos, once you have client permission to publish. Do not reuse the AI-generated renders from the old site; a buyer who reverse-image-searches a "1,200-room hotel" photo and finds it's AI-generated will stop trusting everything else on the page.
- **Testimonial slot** (`index.html`, "What clients say") — replace with an actual quote from a real buyer once you have one. An invented quote attributed to nobody is worse than no testimonial at all.
- **Contact form** — the form in `contact.html` has no backend. On GitHub Pages there's no server to receive submissions, so you need a form service. Two easy options:
  - [Formspree](https://formspree.io) — free tier, just change the form's `action` to the endpoint they give you.
  - [Getform](https://getform.io) — similar, also has a free tier.
  Until you wire one of these up, form submissions go nowhere — the WhatsApp and email links work immediately, so lead with those.
- **Phone/WhatsApp number and email** — currently placeholder values (`+86 176-9808-5535`, `info@fortishardware.com`). Replace with your real ones in all four HTML files (search and replace).
- **Certification badges** (`index.html`, "Standards we build to") — these list standards you build *to*, not certificates you hold. If you have actual test reports or certificates on file, say so explicitly and consider linking a PDF; don't imply third-party certification you don't have documentation for.

## Editing

Every page shares `assets/style.css` — change a color token at the top of that file (the `:root` block) and it updates the whole site. No page has inline color values, so you never need to hunt through HTML to restyle.
