# Lingkod Music Ministry · Song Presenter V2

## Launch on Windows

Extract the entire ZIP into one folder. With Node.js installed, double-click **Launch Lingkod.cmd**. You can also open a terminal in this folder, run **node serve.mjs**, and visit **http://127.0.0.1:4173/** in Chrome or Edge. Keep the launcher open while you work. No package installation or account is needed.

Use the same browser profile and address each time to reopen your saved workspace. The footer shows **Offline ready** after the first successful load. The operator and projector use the browser’s local storage and cached app files. Use one operator window per workspace.

## Import your songs and present

1. Open **Song library → Import songs** and select **songs.js** from Downloads. Search by title or author. Import also accepts JSON and TXT. Exact duplicate songs are skipped.
2. In **Setlists**, create a gathering or use the sample setlist. In **Present → Add songs**, search and add your songs. Drag rows to reorder or use a row’s **… → Move up / Move down**. Choose **Save setlist** to keep a named copy.
3. On Windows, press **Win+P → Extend** with your projector connected. Click **Open projector**, move its window onto the projector, then press **F** in that window for fullscreen. Return focus to the operator view.
4. Choose a song or click any **Song pages** card to jump directly to that page. **Up next** shows the next page or the first page of the next setlist song. **Blank screen** or **B** hides the output until you restore it. You can cue another page while blanked.
5. Use **Edit lyrics** to label or edit pages. Insert a line containing only three hyphens to split the current page, or click **Add page**. Drafts autosave and **Save lyrics** applies them to the song and projector.
6. Open the gear menu for built-in backdrops, an uploaded image or GIF, dimming, typeface, scale, weight, alignment and color. The same appearance applies to the operator previews and projector. Uploads are saved on the device and the browser plays animated files directly.
7. In the gear menu, choose **Blank screen** to set a solid color, match the lyrics background, or use a separate image or GIF. Press **B** in the operator window to show this screen with lyrics hidden.
8. Use the sun or moon button in the top bar to switch between Day and Night mode. The browser remembers your choice for the operator interface.

## Shortcuts

| Key | Action |
| --- | --- |
| Left / Up / Page Up | Previous page |
| Right / Down / Page Down / Space | Next page |
| Home / End | First / last page of current song |
| 1–9 | Jump directly to a page |
| B | Blank or restore projector |
| / | Search the library |
| ? | Show shortcuts |
| F | Toggle fullscreen in the projector window |

Space activates a focused button through the browser’s normal keyboard controls.

## Back up or transfer

**Song library → Export library** downloads a JSON copy of all songs and lyrics. In **Setlists**, use the download button on the active or saved list to export a portable JSON file with its song order and lyrics. Open it via **Setlists → Import setlist** on another browser or computer. Background uploads and typography are stored per browser and can be set again on the other computer.

## Deploy on GitHub Pages

1. Create a new public repository for the app. Upload the **contents of dist**, including **.nojekyll**, to its root on the main branch. Keep any song exports and personal backgrounds on your device.
2. Open **Settings → Pages**. Select **Deploy from a branch**, then **main → / (root)** and save.
3. Visit the HTTPS address GitHub Pages gives you. Your localhost workspace and hosted workspace each have their own browser storage.

### Share a song library with visitors

With permission to publish the lyrics, add your data-only **songs.js** next to **index.html** in the publishing folder. The app reads the file automatically on a visitor’s first successful online load and saves the songs in their browser. Wait for **Offline ready** before disconnecting. Visitors can still import and edit songs in their own browsers.

[GitHub Pages publishing setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Library formats

JSON accepts an array of songs or an object with a **songs** array. A song has a **title**, optional **author**, and **pages** with **label** and **lyrics**. The importer also understands **sections** with **name** and **lyrics**. For TXT, the filename becomes the title and three hyphens on their own line split pages. Legacy JavaScript files are parsed as a single data-only **rawSongs** declaration. The app reads them as text.

## Reference and assets

The original repository was reviewed for the shape of its song data and presenter behavior. No project-wide reuse license was visible on its public default branch. This package contains independently written code and original rehearsal samples. The separate **songs.js** supplied for testing is available for local import. Adding it to a public site makes the file and its lyrics publicly accessible. [Reference repository](https://github.com/yuen1318/lingkod-presenter)

The bundled Mountain dusk background was generated with ImageGen using a wide photographic composition of alpine silhouettes and a dim violet twilight sky, with the center kept quiet for projected white lyrics.

## Verify

Run **node --test tests.mjs** to check navigation, page splitting, imports and setlist round-tripping. To test your own legacy file as well, set **LINGKOD_TEST_LIBRARY** to its full path before running the same command.
