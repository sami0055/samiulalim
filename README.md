# Md. Samiul Alim — Academic Portfolio

A static academic portfolio website for PhD applications. Single-column, text-forward layout in the style of a classic researcher homepage: name and tagline up top, a circular photo beside a career summary, then emoji-headed sections for news, publications, experience, skills, and service. No build step: plain HTML, CSS, and a small JavaScript file.

Last content update: **September 2026** (synced with `CV_Md__Samiul_Alim.pdf`).

## 📁 Project Structure

```
Academic Portfolio/
├── index.html              # Research (home): career summary, news, publication stats, selected publications,
│                           #   research experiences, technical skills, academic services
├── publications.html       # Journal articles, conference papers, under review, in preparation
├── experience.html         # Research and teaching experiences
├── education.html          # Formal education, research training, honors and awards
├── services.html           # Peer review, science communication, mentoring and teaching service
├── contact.html            # Contact details and references
├── CV_Md__Samiul_Alim.pdf  # CV linked from the badge row and every footer
├── css/
│   └── styles.css          # All styling (CSS variables at the top control colors and font)
├── js/
│   └── main.js             # Floating "Page Contents" panel (wide screens) and smooth scrolling
├── images/
│   ├── sami.jpeg           # Profile photo (shown as a circle)
│   └── publications/       # Method figures (kept for reuse; not shown in the text-only layout)
└── README.md
```

## ✏️ Keeping the Site Current

When the CV changes, update these spots:

1. **index.html** — career summary paragraphs, the news list (newest first; all items shown), the publication stats box, and the selected publications.
2. **publications.html** — the summary line and the `[J#]`, `[C#]`, `[U#]`, `[P#]` entries. Each entry is a `<p class="paper">` with title, authors (own name wrapped in `<span class="me">`), a one-line italic summary, the venue, links, and tag pills.
3. **experience.html** — positions, dates, bullets.
4. **education.html** — degree details, training programs, honors.
5. **services.html** — reviewing, outreach, teaching service.
6. **contact.html** — target intake term, references.
7. Replace `CV_Md__Samiul_Alim.pdf` with the new file (keep the same name so links keep working), and bump the "Last updated" text in each page footer.

### Colors and font

Edit the variables at the top of `css/styles.css`:

- `--accent` — venue names, stats box, tag pills (dark red)
- `--link-line` — link underline and hover color (green)
- `--font` — body and heading typeface (Source Serif 4 from Google Fonts)

## 🚀 Hosting on GitHub Pages

1. Create a public repository named `<your-username>.github.io`.
2. Push the contents of this folder to the `main` branch:

```bash
cd "E:\Academic Portfolio"
git init
git add .
git commit -m "Update portfolio for PhD application season"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

3. If the repository has a different name, enable Pages under **Settings → Pages** with `main` as the source.
4. The site will be live at `https://<your-username>.github.io/` after a few minutes.

## 📄 License

Free to use as a template for personal academic websites.
