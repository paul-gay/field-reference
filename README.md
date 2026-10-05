# Field Reference

My searchable Leica and photography knowledge base: 368 entries, 207 quiz cards and a fit finder, published as a website I own and can edit from my phone.

## How it works

| Folder | What's in it |
|---|---|
| `content/entries/` | One Markdown file per entry, with title, category, tags, source and summary at the top |
| `content/quiz/` | One file per quiz card: question, answer, deck |
| `content/fit/` | Fit finder families as JSON (start with `q-family.json`) |
| `src/index.html` | The website: design, search, quiz, fit finder |
| `scripts/build.mjs` | Turns the content into `data.json` for the site |
| `.github/workflows/publish.yml` | Rebuilds and publishes the site every time something changes |
| `.pages.yml` | Settings for the Pages CMS editor |

Every edit, from Pages CMS or GitHub, triggers a rebuild. The live site updates about a minute later.

## One time setup

1. **Create a GitHub account** at github.com if you don't have one.
2. **Install GitHub Desktop** (free, desktop.github.com) and sign in. The project has almost 600 files, and the GitHub website only accepts 100 per upload, so the desktop app is the easy route.
3. **Publish the project:** in GitHub Desktop choose File → Add Local Repository, pick this unzipped folder, and accept the prompt to create a repository here. Make the first commit, then click **Publish repository**. Name it `field-reference` and choose Public or Private (see Privacy below).
4. **Turn on GitHub Pages:** repo Settings → Pages → under "Build and deployment," set Source to **GitHub Actions**.
5. **Run the first publish:** Actions tab → "Publish site" → Run workflow. When it finishes (about a minute), your site is live at `https://<your-username>.github.io/field-reference/`.
6. **Set up the editor:** go to app.pagescms.org, sign in with GitHub, and pick the `field-reference` repo. You'll see Entries and Quiz cards with simple forms. It works on your phone.

## Editing

- **From the site:** every entry has an Edit entry button that opens it on GitHub. The red "Add entry" button opens the editor.
- **In Pages CMS:** add or edit entries and quiz cards with forms. Save, and the site rebuilds itself.
- **Formatting:** `## Heading`, `**bold**`, `*italic*`, `- list`, `> quote`, `| tables |`, and `[[entry-id]]` to link another entry (the id is the file name without `.md`).
- **Fit finder:** edit `content/fit/q-family.json` on GitHub, or copy it to add a new family.
- **Favorites** are saved in each browser on each device.

## Privacy

- With a **free** GitHub account, Pages sites come from **public** repositories, so anyone with the link can read the site and the files. The site asks search engines not to index it, but that isn't real protection.
- For a **private** repository with a Pages site, you need GitHub Pro (paid).
- Either way, keep confidential brand material, customer details and pricing you aren't allowed to share out of this repo.

## Preview on your computer (optional)

Requires Node.js 20 or later:

```
npm install
npm run preview
```
