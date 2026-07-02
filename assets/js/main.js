const archiveRecords = [
  { title: "Miu Miu FW26 Show Appearance", year: "2026", date: "2 Mar 2026", brand: "Miu Miu", eventType: "Runway", location: "Paris" },
  { title: "Prada Evening Archive Session", year: "2026", date: "18 Feb 2026", brand: "Prada", eventType: "Editorial", location: "Milan" },
  { title: "Vogue Thailand Cover Feature", year: "2025", date: "12 Nov 2025", brand: "Vogue", eventType: "Magazine", location: "Bangkok" },
  { title: "Dior Museum Capsule Launch", year: "2025", date: "1 Sep 2025", brand: "Dior", eventType: "Brand Event", location: "Paris" },
  { title: "Saint Laurent Black Series", year: "2024", date: "29 Jun 2024", brand: "Saint Laurent", eventType: "Campaign", location: "New York" },
  { title: "Valentino Resort Story", year: "2024", date: "3 Apr 2024", brand: "Valentino", eventType: "Editorial", location: "Rome" }
];

function updateYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
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
setupArchiveListPage();
setupMobileNav();
