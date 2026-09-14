# QA

## Automated checks

| Command | Result | Evidence |
|---|---|---|
| `node --check app.js` | Pass | No syntax errors. |
| `node --check resume-data.js` | Pass | No syntax errors. |
| `node --check scripts/validate.mjs` | Pass | No syntax errors. |
| `node scripts/validate.mjs` | Pass | 32 static checks passed, covering required files, landmarks, content model, safe links, responsive rules, focus, reduced motion, and A4 print CSS. |
| Local server request audit | Pass | `/`, `styles.css`, `resume-data.js`, `app.js`, and `favicon.svg` returned HTTP 200 on first load and 304 on cached reloads. |

## Manual scenarios

| Scenario | Expected | Result |
|---|---|---|
| Desktop load at 1280×720 | Complete first viewport, no horizontal overflow, no console errors | Pass; rendered state `ready`, document width matched viewport, zero warnings/errors. |
| Mobile load at 390×844 | Intentional mobile composition, readable 16px body, usable touch control, no horizontal overflow | Pass; client width and scroll width both 375px, print control 44×44px, visual inspection passed. |
| All six section links | Each link changes the hash and lands on the named section | Pass for `profile`, `experience`, `projects`, `skills`, `education`, and `contact`; zero errors after interaction. |
| Active section navigation | Matching desktop and rail links expose current location | Pass; profile activation produced two `aria-current="location"` markers. |
| Keyboard entry | First page-level Tab reveals a visible skip link and focus ring | Pass; skip link became visible with a 3px solid focus outline. |
| Content and landmarks | Screen-reader tree exposes main, labeled navigation, ordered headings, lists, and the print button | Pass by accessibility-tree inspection. |
| Print action and stylesheet | Button invokes print; A4 CSS removes navigation and interactive controls | Partial visual limitation: click handler invoked and CSS checks passed, but the in-app browser suppresses its native print preview. |

Health score for the tested browser scope: **100/100**. No reproducible user-facing issues remain.

## Known limits

- The page intentionally contains placeholder content until the source resume is provided; factual content quality has not been reviewed.
- Contact links are empty in template mode, so external navigation could not be tested.
- Final A4 pagination should be inspected once real copy lengths and section counts are known.
- Google Fonts requires network access; fallback fonts preserve usability when unavailable.
- The gstack browse daemon could not start on this Windows installation because its bundled server dependency was unavailable. The in-app browser provided the equivalent validate-only desktop/mobile, interaction, accessibility-tree, and console checks.
- No general-purpose test framework is installed; the repository includes a dependency-free static validator instead.
