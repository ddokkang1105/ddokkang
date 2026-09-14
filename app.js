(() => {
  "use strict";

  const data = window.resumeData;
  if (!data) {
    document.body.dataset.renderState = "error";
    return;
  }

  const queryAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const createElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  };

  const appendTextLines = (element, value) => {
    const lines = String(value ?? "").split("\n");
    lines.forEach((line, index) => {
      if (index > 0) element.append(document.createElement("br"));
      element.append(document.createTextNode(line));
    });
  };

  const isSafeHref = (href) => {
    if (!href || typeof href !== "string") return false;
    try {
      const url = new URL(href, window.location.href);
      return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol);
    } catch {
      return false;
    }
  };

  const makeLink = ({ href, label, value }, className = "text-link") => {
    if (!isSafeHref(href)) return null;
    const anchor = createElement("a", className);
    anchor.href = href;
    anchor.textContent = value || label;
    anchor.setAttribute("aria-label", value ? `${label}: ${value}` : label);
    if (/^https?:/i.test(href)) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer noopener";
    }
    return anchor;
  };

  const bindText = () => {
    const values = {
      name: data.profile.name,
      nameKo: data.profile.nameKo,
      shortName: data.profile.shortName,
      roleEn: data.profile.roleEn,
      headline: data.profile.headline,
      summary: data.profile.summary,
      contactHeading: data.contact.heading,
      contactText: data.contact.text,
      lastUpdated: data.lastUpdated,
    };

    Object.entries(values).forEach(([key, value]) => {
      queryAll(`[data-bind="${key}"]`).forEach((element) => {
        element.replaceChildren();
        appendTextLines(element, value);
      });
    });

    document.documentElement.lang = data.locale || "ko-KR";
    document.title = `${data.profile.name} — Resume`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.profile.summary);
    document.querySelector('time[data-bind="lastUpdated"]')?.setAttribute(
      "datetime",
      String(data.lastUpdated || "").replaceAll(".", "-"),
    );
    queryAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  };

  const renderProfile = () => {
    const copy = document.querySelector("[data-profile-copy]");
    (data.profile.about || []).forEach((paragraph) => {
      copy.append(createElement("p", "profile-copy__paragraph", paragraph));
    });

    const meta = document.querySelector("[data-profile-meta]");
    [
      ["BASE", data.profile.location],
      ["FOCUS", data.profile.availability],
    ].forEach(([term, description]) => {
      if (!description) return;
      const group = createElement("div", "hero__meta-row");
      group.append(createElement("dt", "hero__meta-term", term));
      group.append(createElement("dd", "hero__meta-value", description));
      meta.append(group);
    });

    const actions = document.querySelector("[data-primary-actions]");
    const firstLink = (data.links || []).map((link) => makeLink(link, "button-link")).find(Boolean);
    if (firstLink) actions.append(firstLink);

    const sectionLink = createElement("a", "button-link button-link--quiet", "경력 살펴보기");
    sectionLink.href = "#experience";
    actions.append(sectionLink);
  };

  const renderProofPoints = () => {
    const list = document.querySelector("[data-proof-points]");
    if (!(data.proofPoints || []).length) {
      list.hidden = true;
      return;
    }
    (data.proofPoints || []).forEach((item) => {
      const group = createElement("div", "proof-strip__item");
      group.append(createElement("dt", "proof-strip__label", item.label));
      group.append(createElement("dd", "proof-strip__value", item.value));
      list.append(group);
    });
  };

  const renderTags = (items = []) => {
    const list = createElement("ul", "tag-list");
    items.forEach((item) => list.append(createElement("li", "tag-list__item", item)));
    return list;
  };

  const renderHighlights = (items = []) => {
    const list = createElement("ul", "highlight-list");
    items.forEach((item) => list.append(createElement("li", "highlight-list__item", item)));
    return list;
  };

  const renderExperience = () => {
    const list = document.querySelector("[data-experience-list]");
    (data.experience || []).forEach((item, index) => {
      const article = createElement("article", "timeline-item");
      const marker = createElement("p", "timeline-item__marker", String(index + 1).padStart(2, "0"));
      marker.setAttribute("aria-hidden", "true");

      const heading = createElement("div", "timeline-item__heading");
      const titleGroup = createElement("div");
      titleGroup.append(createElement("h3", "timeline-item__role", item.role));
      titleGroup.append(createElement("p", "timeline-item__company", item.company));
      const meta = createElement("p", "timeline-item__meta", [item.period, item.location].filter(Boolean).join(" · "));
      heading.append(titleGroup, meta);

      const body = createElement("div", "timeline-item__body");
      if (item.summary) body.append(createElement("p", "timeline-item__summary", item.summary));
      if (item.highlights?.length) body.append(renderHighlights(item.highlights));
      if (item.technologies?.length) body.append(renderTags(item.technologies));

      article.append(marker, heading, body);
      list.append(article);
    });
  };

  const renderProjects = () => {
    const list = document.querySelector("[data-project-list]");
    (data.projects || []).forEach((item, index) => {
      const article = createElement("article", "project-item");
      const header = createElement("header", "project-item__header");
      header.append(createElement("p", "project-item__number", `PROJECT ${String(index + 1).padStart(2, "0")}`));
      header.append(createElement("p", "project-item__type", item.type));

      const content = createElement("div", "project-item__content");
      content.append(createElement("h3", "project-item__title", item.title));
      if (item.summary) content.append(createElement("p", "project-item__summary", item.summary));
      if (item.highlights?.length) content.append(renderHighlights(item.highlights));

      const footer = createElement("footer", "project-item__footer");
      if (item.tags?.length) footer.append(renderTags(item.tags));
      const links = createElement("div", "project-item__links");
      (item.links || []).forEach((link) => {
        const anchor = makeLink(link);
        if (anchor) links.append(anchor);
      });
      if (links.childElementCount) footer.append(links);

      article.append(header, content, footer);
      list.append(article);
    });
  };

  const renderSkills = () => {
    const list = document.querySelector("[data-skills-list]");
    (data.skills || []).forEach((group, index) => {
      const article = createElement("article", "skill-group");
      const label = createElement("p", "skill-group__index", String(index + 1).padStart(2, "0"));
      label.setAttribute("aria-hidden", "true");
      article.append(label, createElement("h3", "skill-group__title", group.category));
      if (group.description) article.append(createElement("p", "skill-group__description", group.description));
      article.append(renderTags(group.items));
      list.append(article);
    });
  };

  const renderBackground = () => {
    const educationList = document.querySelector("[data-education-list]");
    (data.education || []).forEach((item) => {
      const article = createElement("article", "background-item");
      article.append(createElement("h4", "background-item__title", item.school));
      article.append(createElement("p", "background-item__primary", item.program));
      article.append(createElement("p", "background-item__meta", item.period));
      if (item.note) article.append(createElement("p", "background-item__note", item.note));
      educationList.append(article);
    });
    if (!(data.education || []).length) educationList.parentElement.hidden = true;

    const credentialList = document.querySelector("[data-credentials-list]");
    (data.credentials || []).forEach((item) => {
      const article = createElement("article", "background-item");
      article.append(createElement("h4", "background-item__title", item.title));
      article.append(createElement("p", "background-item__primary", item.issuer));
      article.append(createElement("p", "background-item__meta", item.year));
      credentialList.append(article);
    });
    if (!(data.credentials || []).length) credentialList.parentElement.hidden = true;
  };

  const renderContact = () => {
    const links = document.querySelector("[data-contact-links]");
    (data.links || []).forEach((item) => {
      const anchor = makeLink(item, "contact-link-row__value");
      if (!anchor && !data.isTemplate) return;

      const row = createElement("div", "contact-link-row");
      row.append(createElement("span", "contact-link-row__label", item.label));
      if (anchor) {
        row.append(anchor);
      } else {
        row.append(createElement("span", "contact-link-row__value contact-link-row__value--empty", item.value));
      }
      links.append(row);
    });
  };

  const hideEmptySections = () => {
    const sectionData = {
      experience: data.experience,
      projects: data.projects,
      skills: data.skills,
      education: [...(data.education || []), ...(data.credentials || [])],
      contact: data.isTemplate ? data.links : (data.links || []).filter((link) => isSafeHref(link.href)),
    };

    Object.entries(sectionData).forEach(([section, value]) => {
      if (Array.isArray(value) && value.length > 0) return;
      document.querySelector(`[data-section="${section}"]`)?.setAttribute("hidden", "");
      queryAll(`[data-nav-section="${section}"]`).forEach((link) => {
        const item = link.closest("li");
        (item || link).setAttribute("hidden", "");
      });
    });
  };

  const enableInteractions = () => {
    document.querySelector("[data-action='print']")?.addEventListener("click", () => window.print());

    const links = queryAll("[data-nav-section]").filter((link) => !link.hidden && !link.closest("[hidden]"));
    const sections = queryAll("[data-section]").filter((section) => !section.hidden);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => {
          const isCurrent = link.dataset.navSection === visible.target.id;
          link.classList.toggle("is-current", isCurrent);
          if (isCurrent) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
  };

  const restoreHashPosition = () => {
    if (!window.location.hash) return;
    let targetId;
    try {
      targetId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ block: "start" });
  };

  const scheduleHashPositionRestore = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(restoreHashPosition);
    });
  };

  bindText();
  renderProfile();
  renderProofPoints();
  renderExperience();
  renderProjects();
  renderSkills();
  renderBackground();
  renderContact();
  hideEmptySections();

  const notice = document.querySelector("[data-template-notice]");
  if (notice) notice.hidden = !data.isTemplate;

  document.documentElement.classList.add("js-ready");
  document.body.dataset.renderState = "ready";
  enableInteractions();
  scheduleHashPositionRestore();
  window.addEventListener("load", scheduleHashPositionRestore, { once: true });
  window.addEventListener("hashchange", scheduleHashPositionRestore);
  document.fonts?.ready.then(scheduleHashPositionRestore);
})();
