## Manifest system (added 2026-05-01)

The repo now has a `MANIFEST.md` file at root, auto-regenerated on every commit by the git pre-commit hook. It lists every file in the repo with size and a recommended-tick flag for the GitHub connector picker.

### How chat-Claude uses MANIFEST.md

At the start of each session, chat-Claude searches project knowledge for `MANIFEST.md`. It compares:

- What MANIFEST.md says exists in the repo
- What chat-Claude can actually see in project knowledge

If something marked TICK in MANIFEST is missing from project knowledge: chat-Claude tells the user to tick it in the GitHub connector picker.

If something exists in project knowledge that's not in MANIFEST or marked skip: chat-Claude tells the user to untick it (waste of capacity).

This replaces the manual file-picker babysitting workflow with a one-time setup + automatic drift detection.

### Setup (one-time)

```
bash ~/clone-pipeline/lib/apply-manifest-system.sh
cd ~/botanique-clone-build/botanique-horizon
git add MANIFEST.md && git commit -m "Add MANIFEST.md" && git push
```

Then in Claude.ai project file picker: tick `MANIFEST.md`, click Update.

### How it stays current

The git pre-commit hook (`.git/hooks/pre-commit`) calls `~/clone-pipeline/lib/generate-manifest.sh` before every commit. The script walks the repo, classifies each file, writes the manifest, and stages it automatically. Every commit therefore includes an up-to-date manifest.

### How to add new categories

Edit `~/clone-pipeline/lib/generate-manifest.sh`, find the `classify()` function, add a `case` arm. Example: a new `migrations/` folder full of SQL files would get:

```bash
./migrations/*.sql)
    echo "TICK (migrations)"; return ;;
```

Regenerate manually: `bash ~/clone-pipeline/lib/generate-manifest.sh`.

### Files and folders the manifest excludes

Hard-excluded (never listed, never recommended): `.git`, `node_modules`, `.cursor`, `.playwright-mcp`, `.ralph`, `.DS_Store`, `screenshots/`, `iterations/`, `release-notes.md`, `LICENSE.md`, `README.md`, `package.json`, `package-lock.json`, `.gitignore`.

If chat-Claude ever needs one of these, edit the EXCLUDE_PATHS array in the script.
