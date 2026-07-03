const archiveRecords = [
  { title: "Miu Miu FW26 Show Appearance", year: "2026", date: "2 Mar 2026", brand: "Miu Miu", eventType: "Runway", location: "Paris" },
  { title: "Prada Evening Archive Session", year: "2026", date: "18 Feb 2026", brand: "Prada", eventType: "Editorial", location: "Milan" },
  { title: "Vogue Thailand Cover Feature", year: "2025", date: "12 Nov 2025", brand: "Vogue", eventType: "Magazine", location: "Bangkok" },
  { title: "Dior Museum Capsule Launch", year: "2025", date: "1 Sep 2025", brand: "Dior", eventType: "Brand Event", location: "Paris" },
  { title: "Saint Laurent Black Series", year: "2024", date: "29 Jun 2024", brand: "Saint Laurent", eventType: "Campaign", location: "New York" },
  { title: "Valentino Resort Story", year: "2024", date: "3 Apr 2024", brand: "Valentino", eventType: "Editorial", location: "Rome" }
];

function setupThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  const html = document.documentElement;
  
  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (toggle) toggle.textContent = "☀️";
  }
  
  if (!toggle) return;
  
  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
}

const archiveFeaturedCard = {
  cardId: "001",
  category: "Fashion",
  title: "First International Fashion Week",
  subtitle: "Paris Fashion Week",
  date: "March 2025",
  milestoneTag: "Milestone",
  summary: "Emi attended her first international Fashion Week as an invited guest of Miu Miu, marking a significant step in her growing presence within the global fashion industry.",
  glance: [
    { icon: "&#8982;", label: "Location", value: "Paris, France" },
    { icon: "&#8962;", label: "Brand", value: "Miu Miu" },
    { icon: "&#9707;", label: "Date", value: "March 2025" },
    { icon: "&#8961;", label: "Category", value: "Fashion Week" },
    { icon: "&#9734;", label: "Status", value: "Career Milestone" }
  ],
  levels: ["Debut", "Career", "Global", "Historic"],
  activeLevel: 2,
  reasons: [
    "First invitation to an international luxury fashion week.",
    "Expanded visibility beyond the entertainment industry.",
    "Marked a new chapter in her creative journey."
  ],
  journeyTitle: "Creative Journey",
  journeyCopy: "Documenting the moments that shape an artist.",
  contextTitle: "Read Context \u2192",
  contextCopy: "Why this matters",
  contextNote: "#001"
};

function updateYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
}

function renderArchiveFeatureCard() {
  const container = document.getElementById("archiveFeature");
  if (!container) return;

  const levelMarkup = archiveFeaturedCard.levels.map((level, index) => `
    <div class="archive-level-step ${index === archiveFeaturedCard.activeLevel ? "is-active" : ""}">
      <span></span>
      <strong>${level}</strong>
    </div>
  `).join("");

  const glanceMarkup = archiveFeaturedCard.glance.map((item) => `
    <li>
      <span aria-hidden="true">${item.icon}</span>
      <div>
        <small>${item.label}</small>
        <p>${item.value}</p>
      </div>
    </li>
  `).join("");

  const reasonMarkup = archiveFeaturedCard.reasons.map((reason) => `
    <li>
      <span aria-hidden="true">&#10003;</span>
      <p>${reason}</p>
    </li>
  `).join("");

  container.innerHTML = `
    <article class="archive-card">
      <header class="archive-card-head">
        <p>Emi Archive</p>
        <p>Archive Card <strong>#${archiveFeaturedCard.cardId}</strong></p>
        <p><strong>${archiveFeaturedCard.category}</strong></p>
      </header>
      <div class="archive-card-main">
        <figure class="archive-card-image">
          <img src="assets/images/emi01.png" alt="${archiveFeaturedCard.subtitle} portrait" />
          <figcaption class="archive-card-seal" aria-hidden="true">EA</figcaption>
        </figure>
        <section class="archive-card-story">
          <h2>${archiveFeaturedCard.title}</h2>
          <div class="archive-card-rule"></div>
          <p class="archive-card-subtitle">${archiveFeaturedCard.subtitle}</p>
          <p class="archive-card-date">${archiveFeaturedCard.date}</p>
          <div class="archive-card-divider"></div>
          <div class="archive-card-pill-row">
            <p class="archive-card-tag">${archiveFeaturedCard.milestoneTag}</p>
            <span aria-hidden="true">&#10023;</span>
          </div>
          <p class="archive-card-summary">${archiveFeaturedCard.summary}</p>
        </section>
      </div>
      <div class="archive-card-meta">
        <section class="archive-card-glance">
          <h3>At a glance</h3>
          <ul>${glanceMarkup}</ul>
        </section>
        <section class="archive-card-impact">
          <h3>Milestone level</h3>
          <div class="archive-level-track">${levelMarkup}</div>
          <h3>Why this moment matters</h3>
          <ul>${reasonMarkup}</ul>
        </section>
      </div>
      <footer class="archive-card-foot">
        <section class="archive-foot-journey">
          <p class="archive-foot-icon" aria-hidden="true">&#10038;</p>
          <h3>${archiveFeaturedCard.journeyTitle}</h3>
          <p>${archiveFeaturedCard.journeyCopy}</p>
        </section>
        <section class="archive-foot-context">
          <h3>${archiveFeaturedCard.contextTitle}</h3>
          <p>${archiveFeaturedCard.contextCopy}</p>
        </section>
        <aside class="archive-foot-note">
          <p>Context Note</p>
          <strong>${archiveFeaturedCard.contextNote}</strong>
        </aside>
      </footer>
      <div class="archive-card-legal">
        <p>EMI ARCHIVE · ALL RIGHTS RESERVED</p>
        <p>EST. 2025</p>
      </div>
    </article>
  `;
}

function fillSelectOptions(id, values) {
  const select = document.getElementById(id);
  if (!select) return;
  [...new Set(values)].sort().forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderArchiveList(records) {
  const container = document.getElementById("archiveRecords");
  if (!container) return;

  const recordsCount = document.getElementById("recordsCount");
  if (recordsCount) {
    recordsCount.textContent = `${records.length} record${records.length === 1 ? "" : "s"} shown`;
  }

  container.innerHTML = "";
  if (!records.length) {
    container.innerHTML = '<article class="card"><h3>No records found</h3><p>Try changing your search or filters.</p></article>';
    return;
  }

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image"></div>
      <p class="meta">${record.location} · ${record.date}</p>
      <h3>${record.title}</h3>
      <p class="card-keyline">${record.brand} · ${record.eventType}</p>
      <a href="record.html">View Record</a>
    `;
    container.appendChild(card);
  });
}

function getFilteredRecords() {
  const search = (document.getElementById("searchInput")?.value ?? "").trim().toLowerCase();
  const year = document.getElementById("yearFilter")?.value ?? "";
  const brand = document.getElementById("brandFilter")?.value ?? "";
  const eventType = document.getElementById("eventFilter")?.value ?? "";
  const location = document.getElementById("locationFilter")?.value ?? "";

  return archiveRecords.filter((record) => {
    const searchable = `${record.title} ${record.brand} ${record.location} ${record.eventType}`.toLowerCase();
    const searchMatch = !search || searchable.includes(search);
    const yearMatch = !year || record.year === year;
    const brandMatch = !brand || record.brand === brand;
    const eventMatch = !eventType || record.eventType === eventType;
    const locationMatch = !location || record.location === location;
    return searchMatch && yearMatch && brandMatch && eventMatch && locationMatch;
  });
}

function setupArchiveListPage() {
  const container = document.getElementById("archiveRecords");
  if (!container) return;

  fillSelectOptions("yearFilter", archiveRecords.map((entry) => entry.year));
  fillSelectOptions("brandFilter", archiveRecords.map((entry) => entry.brand));
  fillSelectOptions("eventFilter", archiveRecords.map((entry) => entry.eventType));
  fillSelectOptions("locationFilter", archiveRecords.map((entry) => entry.location));

  renderArchiveList(archiveRecords);

  ["searchInput", "yearFilter", "brandFilter", "eventFilter", "locationFilter"].forEach((id) => {
    const field = document.getElementById(id);
    if (field) field.addEventListener("input", () => renderArchiveList(getFilteredRecords()));
    if (field) field.addEventListener("change", () => renderArchiveList(getFilteredRecords()));
  });

  const toggle = document.getElementById("toggleView");
  if (toggle) {
    toggle.addEventListener("click", () => {
      container.classList.toggle("is-list");
      toggle.textContent = container.classList.contains("is-list") ? "Switch to Grid" : "Switch to List";
    });
  }
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!header || !toggle || !nav) return;

  const setMenuState = (isOpen) => {
    header.classList.toggle("is-nav-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.setAttribute("aria-hidden", String(!isOpen));
  };

  const closeMenu = () => setMenuState(false);

  toggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("is-nav-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-nav-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      setMenuState(false);
      nav.setAttribute("aria-hidden", "false");
    }
  });

  setMenuState(false);
  if (window.innerWidth > 700) nav.setAttribute("aria-hidden", "false");
}

updateYear();
setupThemeToggle();
renderArchiveFeatureCard();
setupArchiveListPage();
setupMobileNav();
