# Task: Resume Portfolio Website

## Goal

Build a polished, single-page resume website that lets a recruiter understand the candidate's role, strengths, experience, and selected work within 30 seconds. The real resume content will be supplied later, so the first version must remain complete-looking while keeping all replaceable content in one obvious data file.

## Scope

- A responsive one-page resume/portfolio for GitHub Pages.
- A content model covering profile, experience, projects, skills, education, credentials, and contact links.
- Clear placeholder copy that does not invent personal facts.
- Print/PDF styling and a visible print action.
- Keyboard navigation, semantic landmarks, readable contrast, focus states, and reduced-motion support.
- Repository documentation explaining how to replace the placeholder content and preview the site.

## Non-goals

- Final personal facts before the source resume is provided.
- A CMS, database, authentication, contact form, analytics, or backend.
- Multiple routes, themes, or design variants.
- Deployment, GitHub Pages configuration, commit, or push.

## Acceptance criteria

- [x] Opening `index.html` through a local static server renders a coherent resume page with no runtime errors.
- [x] All resume copy and links come from one editable `resume-data.js` file.
- [x] The first viewport communicates name placeholder, target role, positioning statement, key facts, and primary contact actions.
- [x] Experience, projects, skills, education, and credentials render from structured data and handle empty optional sections without broken layout.
- [x] The layout works at mobile and desktop widths without horizontal overflow.
- [x] Keyboard focus is visible, navigation uses landmarks, text remains readable, and reduced-motion preferences are respected.
- [x] Printing has an A4-friendly stylesheet that removes navigation and interactive controls; the in-app browser suppresses native print preview, so final paper pagination remains a documented manual check after real content is imported.
- [x] Repository validation and browser QA pass, with limitations recorded.

## Constraints and risks

- The repository is empty, so the implementation should stay dependency-free and easy to host.
- The supplied resume may later change section counts, copy length, language balance, and link availability.
- Placeholder content must be visibly generic and never presented as the user's real history.
- No commit, push, or external publication without a separate user request.

## Profile

`standard`
