const archiveRecords = [
  { title: "Miu Miu FW26 Show Appearance", year: "2026", date: "2 Mar 2026", brand: "Miu Miu", eventType: "Runway", location: "Paris", category: "IN STYLE", subcategory: "Fashion Week" },
  { title: "Prada Evening Archive Session", year: "2026", date: "18 Feb 2026", brand: "Prada", eventType: "Editorial", location: "Milan", category: "IN STYLE", subcategory: "Editorial" },
  { title: "Vogue Thailand Cover Feature", year: "2025", date: "12 Nov 2025", brand: "Vogue", eventType: "Magazine", location: "Bangkok", category: "IN STYLE", subcategory: "Magazine Covers" },
  { title: "Dior Museum Capsule Launch", year: "2025", date: "1 Sep 2025", brand: "Dior", eventType: "Brand Event", location: "Paris", category: "IN STYLE", subcategory: "Brand Campaigns" },
  { title: "Saint Laurent Black Series", year: "2024", date: "29 Jun 2024", brand: "Saint Laurent", eventType: "Campaign", location: "New York", category: "IN STYLE", subcategory: "Style Notes" },
  { title: "Valentino Resort Story", year: "2024", date: "3 Apr 2024", brand: "Valentino", eventType: "Editorial", location: "Rome", category: "IN STYLE", subcategory: "Front Row" },
  { title: "Breakthrough Supporting Role", year: "2023", date: "16 Aug 2023", brand: "Channel 3", eventType: "TV Series", location: "Bangkok", category: "ON SCREEN", subcategory: "Supporting Roles" },
  { title: "First Lead Television Role", year: "2024", date: "9 May 2024", brand: "One31", eventType: "Television", location: "Bangkok", category: "ON SCREEN", subcategory: "Lead Roles" },
  { title: "Film Festival Debut", year: "2025", date: "20 Oct 2025", brand: "Thai Film Festival", eventType: "Film", location: "Busan", category: "ON SCREEN", subcategory: "Film" },
  { title: "Original Soundtrack Release", year: "2024", date: "14 Jan 2024", brand: "EMI Music", eventType: "Single", location: "Bangkok", category: "ON STAGE", subcategory: "Original Soundtracks" },
  { title: "First Live Concert Moment", year: "2025", date: "27 Jul 2025", brand: "Summer Stage", eventType: "Live Performance", location: "Seoul", category: "ON STAGE", subcategory: "Live Performances" },
  { title: "Music Video Premiere", year: "2026", date: "6 Mar 2026", brand: "EMI Music", eventType: "Music Video", location: "Tokyo", category: "ON STAGE", subcategory: "Music Videos" }
];

const archiveSectionConfig = {
  "ON SCREEN": {
    description: "Stories told through acting—from early career moments to lead roles that defined her on-screen presence.",
    collections: ["Supporting Roles", "Lead Roles", "Film"]
  },
  "IN STYLE": {
    description: "Fashion and visual identity—from fashion weeks to editorial moments and brand collaborations.",
    collections: ["Fashion Week", "Editorial", "Magazine Covers", "Brand Campaigns", "Front Row", "Style Notes"]
  },
  "ON STAGE": {
    description: "Music and live performance—from original soundtracks to singles, concerts, and music videos.",
    collections: ["Original Soundtracks", "Live Performances", "Music Videos"]
  }
};

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
  const category = document.getElementById("categoryFilter")?.value ?? "";
  const subcategory = document.getElementById("subcategoryFilter")?.value ?? "";

  return archiveRecords.filter((record) => {
    const searchable = `${record.title} ${record.brand} ${record.location} ${record.eventType}`.toLowerCase();
    const searchMatch = !search || searchable.includes(search);
    const yearMatch = !year || record.year === year;
    const brandMatch = !brand || record.brand === brand;
    const eventMatch = !eventType || record.eventType === eventType;
    const locationMatch = !location || record.location === location;
    const categoryMatch = !category || record.category === category;
    const subcategoryMatch = !subcategory || record.subcategory === subcategory;
    return searchMatch && yearMatch && brandMatch && eventMatch && locationMatch && categoryMatch && subcategoryMatch;
  });
}

function getRequestedArchiveCategory() {
  const categoryFromUrl = new URLSearchParams(window.location.search).get("category");
  if (!categoryFromUrl) return null;
  const normalized = categoryFromUrl.toUpperCase().trim();
  return archiveSectionConfig[normalized] ? normalized : null;
}

function setupArchiveSectionContext() {
  const sectionTitle = document.getElementById("section-title");
  if (!sectionTitle) return;

  const requestedCategory = getRequestedArchiveCategory() || "ON SCREEN";
  const sectionConfig = archiveSectionConfig[requestedCategory];

  const sectionDescription = document.getElementById("section-description");
  const sectionName = document.getElementById("section-name");
  const collectionCount = document.getElementById("collection-count");
  const recordCount = document.getElementById("record-count");
  const collectionsGrid = document.getElementById("collections-grid");

  if (sectionTitle) sectionTitle.textContent = requestedCategory;
  if (sectionDescription) sectionDescription.textContent = sectionConfig.description;
  if (sectionName) sectionName.textContent = requestedCategory;
  if (collectionCount) collectionCount.textContent = String(sectionConfig.collections.length);

  const inSectionRecords = archiveRecords.filter((record) => record.category === requestedCategory);
  if (recordCount) recordCount.textContent = String(inSectionRecords.length);

  if (collectionsGrid) {
    collectionsGrid.innerHTML = sectionConfig.collections.map((collection) => `
      <a class="collection-browser-card" href="archive.html?category=${encodeURIComponent(requestedCategory)}&collection=${encodeURIComponent(collection)}#search">
        <h3>${collection}</h3>
        <p>Browse records in this collection</p>
      </a>
    `).join("");
  }
}

function setupArchiveListPage() {
  const container = document.getElementById("archiveRecords");
  if (!container) return;

  setupArchiveSectionContext();

  fillSelectOptions("yearFilter", archiveRecords.map((entry) => entry.year));
  fillSelectOptions("brandFilter", archiveRecords.map((entry) => entry.brand));
  fillSelectOptions("eventFilter", archiveRecords.map((entry) => entry.eventType));
  fillSelectOptions("locationFilter", archiveRecords.map((entry) => entry.location));
  fillSelectOptions("categoryFilter", archiveRecords.map((entry) => entry.category));
  fillSelectOptions("subcategoryFilter", archiveRecords.map((entry) => entry.subcategory));

  const requestedCategory = getRequestedArchiveCategory();
  const requestedCollection = new URLSearchParams(window.location.search).get("collection");
  const categoryFilter = document.getElementById("categoryFilter");
  const subcategoryFilter = document.getElementById("subcategoryFilter");

  if (requestedCategory && categoryFilter) {
    categoryFilter.value = requestedCategory;
  }
  if (requestedCollection && subcategoryFilter) {
    const hasCollection = [...subcategoryFilter.options].some((option) => option.value === requestedCollection);
    if (hasCollection) subcategoryFilter.value = requestedCollection;
  }

  renderArchiveList(getFilteredRecords());

  ["searchInput", "yearFilter", "brandFilter", "eventFilter", "locationFilter", "categoryFilter", "subcategoryFilter"].forEach((id) => {
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

function setupNavSubmenu() {
  const navItems = document.querySelectorAll(".nav-item-with-submenu");
  
  navItems.forEach((item) => {
    const navItem = item.querySelector(".nav-item");
    const submenu = item.querySelector(".nav-submenu");
    
    if (!navItem || !submenu) return;
    
    // Set inert on hidden submenu
    submenu.setAttribute("inert", "true");
    submenu.setAttribute("aria-hidden", "true");
    
    // Show submenu on hover (desktop)
    item.addEventListener("mouseenter", () => {
      submenu.removeAttribute("inert");
      submenu.removeAttribute("aria-hidden");
    });
    
    // Hide submenu on mouse leave
    item.addEventListener("mouseleave", () => {
      submenu.setAttribute("inert", "true");
      submenu.setAttribute("aria-hidden", "true");
    });
    
    // Handle click on smaller screens
    navItem.addEventListener("click", (e) => {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        const isHidden = submenu.hasAttribute("inert");
        if (isHidden) {
          submenu.removeAttribute("inert");
          submenu.removeAttribute("aria-hidden");
        } else {
          submenu.setAttribute("inert", "true");
          submenu.setAttribute("aria-hidden", "true");
        }
      }
    });
    
    // Close submenu on link click
    submenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        submenu.setAttribute("inert", "true");
        submenu.setAttribute("aria-hidden", "true");
      });
    });
  });
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!header || !toggle || !nav) return;

  const setMenuState = (isOpen) => {
    const shouldLockScroll = window.innerWidth <= 700 && isOpen;
    header.classList.toggle("is-nav-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (window.innerWidth <= 700) {
      nav.toggleAttribute("inert", !isOpen);
    } else {
      nav.removeAttribute("inert");
    }
    document.documentElement.classList.toggle("is-nav-open", shouldLockScroll);
    document.body.classList.toggle("is-nav-open", shouldLockScroll);
  };

  const closeMenu = () => {
    if (nav.contains(document.activeElement)) {
      toggle.focus();
    }
    setMenuState(false);
  };

  toggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("is-nav-open"));
  });

  nav.querySelectorAll("a:not(.nav-item)").forEach((link) => {
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
      nav.removeAttribute("inert");
      document.documentElement.classList.remove("is-nav-open");
      document.body.classList.remove("is-nav-open");
    }
  });

  setMenuState(false);
  if (window.innerWidth > 700) nav.removeAttribute("inert");
}

function setupArchiveSubnav() {
  const subnav = document.querySelector(".archive-subnav");
  if (!subnav) return;

  const links = subnav.querySelectorAll(".subnav-link");
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get("category");

  links.forEach((link) => {
    const category = link.getAttribute("data-category");
    if (currentCategory && category === currentCategory) {
      link.classList.add("is-active");
    } else if (!currentCategory && link.href === window.location.href) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
}

function setupPrimaryNavState() {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  const links = nav.querySelectorAll("a[data-primary]");
  if (!links.length) return;

  const pathname = window.location.pathname.toLowerCase();
  const query = new URLSearchParams(window.location.search);
  let target = null;

  if (pathname.endsWith("index.html") || pathname.endsWith("/")) {
    target = "home";
  } else if (pathname.endsWith("timeline.html")) {
    target = "timeline";
  } else if (pathname.endsWith("about.html")) {
    target = "about";
  } else if (pathname.endsWith("archive.html")) {
    target = query.get("category") || document.getElementById("section-title")?.textContent?.trim() || "ON SCREEN";
    if (window.location.hash === "#search") target = "search";
  } else if (pathname.endsWith("record.html")) {
    target = document.querySelector(".record-section")?.textContent?.trim() || "IN STYLE";
  }

  if (!target) return;

  links.forEach((link) => {
    const key = (link.getAttribute("data-primary") || "").toUpperCase();
    link.classList.toggle("is-active", key === String(target).toUpperCase());
  });
}

function setupTimelineViews() {
  const viewButtons = document.querySelectorAll(".view-button");
  const timelineViews = document.querySelectorAll(".timeline-view");

  if (viewButtons.length === 0) return;

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const viewName = button.getAttribute("data-view");

      // Update button states
      viewButtons.forEach((btn) => {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-selected", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      // Update view visibility
      timelineViews.forEach((view) => {
        view.classList.remove("is-active");
      });
      const activeView = document.getElementById(`view-${viewName}`);
      if (activeView) {
        activeView.classList.add("is-active");
      }
    });
  });
}

function setupYearFilter() {
  const yearBadges = document.querySelectorAll(".year-badge");
  const timelineGroups = document.querySelectorAll(".timeline-year-group");

  if (yearBadges.length === 0) return;

  yearBadges.forEach((badge) => {
    badge.addEventListener("click", () => {
      const year = badge.getAttribute("data-year");

      // Update badge states
      yearBadges.forEach((b) => b.classList.remove("is-active"));
      badge.classList.add("is-active");

      // Filter timeline groups
      timelineGroups.forEach((group) => {
        const groupYear = group.getAttribute("data-year");
        if (year === "all" || groupYear === year) {
          group.style.display = "block";
        } else {
          group.style.display = "none";
        }
      });
    });
  });
}

function setupLatestCardNavigation() {
  const cards = document.querySelectorAll(".latest-records .latest-clickable-card[data-href]");
  if (!cards.length) return;

  const isInteractive = (element) => {
    if (!(element instanceof Element)) return false;
    return Boolean(element.closest("a, button, input, select, textarea, [role='button'], [role='link']"));
  };

  cards.forEach((card) => {
    const href = card.getAttribute("data-href");
    if (!href) return;

    card.addEventListener("click", (event) => {
      if (isInteractive(event.target)) return;
      window.location.href = href;
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      window.location.href = href;
    });
  });
}

function setupLatestRecordsSlider() {
  const section = document.querySelector(".latest-records");
  if (!section) return;

  const track = section.querySelector(".latest-records-track");
  const prevButton = section.querySelector("[data-latest-slide='prev']");
  const nextButton = section.querySelector("[data-latest-slide='next']");
  if (!(track instanceof HTMLElement) || !(prevButton instanceof HTMLButtonElement) || !(nextButton instanceof HTMLButtonElement)) return;

  const cards = track.querySelectorAll(".card");
  if (cards.length <= 1) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const getSlideStep = () => {
    const firstCard = cards[0];
    if (!(firstCard instanceof HTMLElement)) return track.clientWidth;
    const gap = Number.parseFloat(window.getComputedStyle(track).gap || "0");
    const safeGap = Number.isFinite(gap) ? gap : 0;
    return firstCard.getBoundingClientRect().width + safeGap;
  };

  const updateButtonState = () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    prevButton.disabled = track.scrollLeft <= 1;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft - 1;
  };

  // Auto-slide every 5 seconds
  let autoSlideTimer = null;
  let isDragging = false;

  const startAutoSlide = () => {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      if (!isDragging) {
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScrollLeft - 1) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: getSlideStep(), behavior: "smooth" });
        }
      }
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Drag/swipe interaction
  let dragStart = 0;
  let dragOffset = 0;

  const onDragStart = (e) => {
    isDragging = true;
    stopAutoSlide();
    dragStart = e.type.includes("mouse") ? e.clientX : e.touches?.[0]?.clientX || 0;
    dragOffset = 0;
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches?.[0]?.clientX || 0;
    dragOffset = dragStart - clientX;
  };

  const onDragEnd = (e) => {
    if (!isDragging) return;
    isDragging = false;

    const threshold = 50; // pixels to trigger slide
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swiped left, slide right
        track.scrollBy({ left: getSlideStep(), behavior: "smooth" });
      } else {
        // Swiped right, slide left
        track.scrollBy({ left: -getSlideStep(), behavior: "smooth" });
      }
    }

    resetAutoSlide();
  };

  // Mouse events
  track.addEventListener("mousedown", onDragStart);
  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", onDragEnd);

  // Touch events
  track.addEventListener("touchstart", onDragStart, { passive: true });
  track.addEventListener("touchmove", onDragMove, { passive: true });
  track.addEventListener("touchend", onDragEnd, { passive: true });

  // Button clicks
  prevButton.addEventListener("click", () => {
    resetAutoSlide();
    track.scrollBy({ left: -getSlideStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    resetAutoSlide();
    track.scrollBy({ left: getSlideStep(), behavior: "smooth" });
  });

  // Update state and reset auto-slide on manual scroll
  track.addEventListener("scroll", updateButtonState, { passive: true });
  track.addEventListener("scroll", () => {
    if (!isDragging) {
      // Reset auto-slide when scroll happens without dragging
      // (e.g., from programmatic scroll)
    }
  }, { passive: true });

  // Handle visibility change
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  window.addEventListener("resize", updateButtonState);
  
  // Start auto-slide
  updateButtonState();
  startAutoSlide();
}

updateYear();
setupNavSubmenu();
renderArchiveFeatureCard();
setupArchiveListPage();
setupMobileNav();
setupPrimaryNavState();
setupArchiveSubnav();
setupTimelineViews();
setupYearFilter();
setupLatestRecordsSlider();
setupLatestCardNavigation();
