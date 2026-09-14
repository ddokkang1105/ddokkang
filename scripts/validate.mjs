import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const requiredFiles = ["index.html", "styles.css", "resume-data.js", "app.js", "favicon.svg"];
const contents = Object.fromEntries(
  await Promise.all(requiredFiles.map(async (file) => [file, await readFile(file, "utf8")])),
);

let checks = 0;
const check = (condition, message) => {
  checks += 1;
  assert.ok(condition, message);
};

const html = contents["index.html"];
const css = contents["styles.css"];
const app = contents["app.js"];

new vm.Script(app, { filename: "app.js" });

check(html.includes('lang="ko"'), "The document needs a language declaration.");
check(html.includes('name="viewport"'), "The document needs responsive viewport metadata.");
check(html.includes('href="favicon.svg"'), "The document needs the custom favicon.");
check(html.includes('href="styles.css"'), "The stylesheet must be loaded.");
check(html.indexOf('src="resume-data.js"') < html.indexOf('src="app.js"'), "Resume data must load before the renderer.");
check(html.includes('class="skip-link"'), "A skip link is required.");
check(html.includes('<main id="main-content">'), "A main landmark is required.");
check(html.includes('aria-label="이력서 섹션"'), "The primary navigation needs an accessible label.");

for (const section of ["profile", "experience", "projects", "skills", "education", "contact"]) {
  check(html.includes(`id="${section}"`), `Missing #${section} section.`);
}

check(css.includes(":focus-visible"), "Visible keyboard focus styles are required.");
check(css.includes("@media (max-width: 680px)"), "A narrow mobile layout is required.");
check(css.includes("@media (prefers-reduced-motion: reduce)"), "Reduced-motion support is required.");
check(css.includes("@media print"), "Print styles are required.");
check(css.includes("size: A4"), "The print layout must target A4.");
check(!css.includes("font-family: system-ui"), "The visual system should not fall back to a generic system UI as its primary typeface.");
check(css.includes("--accent: #f37321"), "The sports editorial theme needs the orange accent token.");
check(css.includes("--black: #090909"), "The sports editorial theme needs the black base token.");
check(html.includes('class="hero__signal"'), "The hero needs its scoreboard-style signal strip.");
check(!app.includes("innerHTML"), "Resume content should be rendered without innerHTML.");
check(app.includes("isSafeHref"), "External links need protocol validation.");
check(app.includes("IntersectionObserver"), "Section navigation should respond to the reading position.");
check(app.includes("restoreHashPosition"), "Direct section links must be restored after data rendering.");
check(app.includes('addEventListener("hashchange"'), "Same-page section links must restore their target position.");
check(app.includes("document.fonts?.ready"), "Direct links must settle after web fonts finish loading.");
check(app.includes("window.print()"), "The print action must be wired.");

const sandbox = { window: {} };
vm.runInNewContext(contents["resume-data.js"], sandbox, { filename: "resume-data.js" });
const data = sandbox.window.resumeData;

check(Boolean(data), "resume-data.js must expose window.resumeData.");
check(typeof data.isTemplate === "boolean", "The content model needs an isTemplate flag.");
check(typeof data.profile?.name === "string" && data.profile.name.length > 0, "A profile name is required.");
check(Array.isArray(data.profile?.about), "Profile paragraphs must be an array.");
check(Array.isArray(data.experience), "Experience must be an array.");
check(Array.isArray(data.projects), "Projects must be an array.");
check(Array.isArray(data.skills), "Skills must be an array.");
check(Array.isArray(data.links), "Contact links must be an array.");

for (const link of data.links) {
  if (!link.href) continue;
  check(/^(https?:|mailto:|tel:)/.test(link.href), `Unsupported link protocol: ${link.href}`);
}

console.log(`✓ ${checks} static checks passed`);
