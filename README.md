# Foot On The Beach — Static Website (GitHub Pages Ready)

This repository contains a fully‑designed, animated static website for **Foot On The Beach**. It’s optimized for GitHub Pages, with GSAP animations, Lenis smooth scrolling, a responsive gallery + lightbox, and Swiper testimonials.

## Structure
```
/assets
  /images
    /brand
      favicon.svg
    /gallery
      placeholder-01.svg ... placeholder-12.svg
  /svg
    logo.svg
    foot-icon.svg
    waves.svg
    pattern.svg
/css
  styles.css
/js
  app.js
index.html
```

## Quick Start (GitHub Pages)
1. Create a new GitHub repository named `foot-on-the-beach`.
2. Upload all files/folders from this ZIP to the repo root (keep `index.html` at the root).
3. In **Settings → Pages**, set **Source** to `main` branch (root).
4. Wait a minute and open your site at `https://<your-username>.github.io/foot-on-the-beach/`.

## Replace Images
- Put real photos in `assets/images/gallery/` (JPG or PNG).
- Either **keep** the same file names to auto‑replace, or update the `<img src>` and `<a href>` paths in the `#gallery` section of `index.html`.

## Customize
- Text: edit `index.html`.
- Colors, spacing, etc.: edit `css/styles.css` (`:root` variables).
- Animations: see `js/app.js` (GSAP, ScrollTrigger).

## Notes
- This is a static site—email links are used for purchases by default. Replace `orders@footonthebeach.example` with your real email, or integrate a storefront by swapping the Buy button URLs.
- A simple **18+ age gate** is included (client‑side only) to help with compliance presentation.

Enjoy! ☀️
