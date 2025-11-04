# Contributing

We welcome improvements to both the dataset and helper functions. Please follow the guidelines below to keep changes consistent and easy to review.

## Ways to contribute

- Report issues: incorrect LGAs/towns, missing entries, typos, API bugs
- Improve data: add/fix states, capitals, LGAs, towns in `data/nigeria.json`
- Improve library: refine helpers in `index.js`, add safe new helpers
- Documentation: README/CONTRIBUTION improvements

## Branching and PRs

- Base branch: open Pull Requests against `dev` (not `main`).
- Branch names: `feat/<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`.
- Keep PRs small and focused; large changes should be split.

## Contribution flow

1. Open an issue describing the change (bug, data fix, feature) and proposed approach.
2. Fork the repo and create a branch: `feat/...`, `fix/...`, or `chore/...`.
3. Make your changes (for data edits, update `data/nigeria.json`).
4. Commit using clear messages (Conventional Commits encouraged):
   - `feat: add missing LGAs for Kwara`
   - `fix: correct Kano capital typo`
5. Push and open a Pull Request to the `dev` branch. Link the issue.
6. Address review comments; squash/rebase as requested.

## Data editing guidelines (`data/nigeria.json`)

- Shape: each state uses `{ name, capital, lgas: string[], towns: string[] }`.
- Casing: use standard capitalization (e.g., `Ikeja`, `Aba South`).
- Duplicates: avoid duplicates across `lgas` and within `towns`.
- Ordering: keep entries alphabetically sorted where practical.
- Accuracy: prefer authoritative sources; include well-known alternate spellings only once.
- Whitespace: no trailing spaces; one entry per item in arrays.
- Town scope: towns are listed at the state level (not per LGA).

## Code style and API

- Keep helpers pure and side-effect free.
- Avoid breaking changes to exported helpers in `index.js`.
- If adding a helper, include a short example in README.

## Local development

```bash
git clone https://github.com/your_username/nigeria-state-city-lga.git
cd nigeria-state-city-lga
npm install

# Run the (placeholder) test script
npm test
```

Project layout:

- `data/nigeria.json` — authoritative dataset
- `index.js` — exported helper functions

## PR checklist

- [ ] PR targets `dev` branch
- [ ] Description explains the change and motivation; linked issue
- [ ] For data changes: examples still work (`getLgas`, `getTowns`, etc.)
- [ ] For helper/API changes: README updated if necessary
- [ ] No broken links; markdown lints clean
- [ ] Commits use Conventional Commits style

## Review and merge

- Maintainers review for accuracy, scope, and consistency.
- Squash merges are preferred to keep history clean.

Thank you for contributing!
