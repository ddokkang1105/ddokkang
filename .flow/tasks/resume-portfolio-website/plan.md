# Plan

## Readiness

- The remote repository is empty and the checkout has no application code to preserve.
- Product scope and acceptance criteria are fixed in `task.md`; unresolved items are limited to real resume content and later publishing choices.
- The implementation is a dependency-free static site, so no package installation, migration, or external service is required.

## Steps

1. [ ] Create semantic HTML shell, metadata, navigation, page landmarks, print action, and site-specific favicon.
2. [ ] Define all replaceable resume content in `resume-data.js`, using explicit placeholders instead of invented history.
3. [ ] Render profile, proof points, experience, projects, skills, education, credentials, and contact links from structured data with safe empty-section behavior.
4. [ ] Implement the editorial technical-dossier design in `styles.css`, including responsive layout, focus treatment, reduced motion, and A4 print rules.
5. [ ] Add small progressive enhancements in `app.js`: section rendering, current-year text, print action, active-section navigation, and graceful link omission.
6. [ ] Document content replacement and local preview in `README.md`.
7. [ ] Add and run dependency-free static validation, then complete desktop/mobile browser QA and fix bounded findings.

## Affected paths

- `index.html`
- `styles.css`
- `resume-data.js`
- `app.js`
- `README.md`
- `scripts/validate.mjs`
- `.flow/tasks/resume-portfolio-website/*`

## Validation

- `node scripts/validate.mjs`
- Serve with `python -m http.server 4173` (or equivalent) and open `http://127.0.0.1:4173/`.
- Confirm desktop and narrow mobile layouts, working navigation, visible focus, hidden empty sections, print preview behavior, no console errors, and no horizontal overflow.

## Rollback or migration

No migration is required. Roll back by removing the new static files. The later resume import only updates `resume-data.js` unless the supplied document reveals a genuinely new section type.
