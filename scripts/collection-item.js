//--// function to print out code for sidebar //--//
let currentLang = localStorage.getItem("language") || "en";

const fixed_trans = {
    en: {
        home: `Home`,
        collection: `Collection`,
        about: `About`,
        contact: `Contact`,
        search_placeholder: `Enter page name...`,
        back_to_top: `Top`,
        // the toggle names the language you switch TO first
        lang_toggle: `Vie | Eng`,

        // banknote list
        compact: `Compact`,
        album: `Album`,
        banknote_one: `banknote`,
        banknote_many: `banknotes`,
        col_no: `No.`,
        col_photos: `Photos`,
        col_note: `Banknote`,
        col_year: `Year`,
        col_type: `Type`,
        col_ref: `Reference`,
        issuer: `Issuer`,
        size: `Dimension`,
        reference: `Reference`,
        new_tag: `NEW`,
        view_larger: `View larger`,
        viewer_close: `Close`,
        viewer_prev: `Previous side`,
        viewer_next: `Next side`,
    },
    vi: {
        home: `Trang Chủ`,
        collection: `Bộ Sưu Tập`,
        about: `Giới Thiệu`,
        contact: `Liên Hệ`,
        search_placeholder: `Nhập tên trang...`,
        back_to_top: `Đầu`,
        lang_toggle: `Eng | Vie`,

        compact: `Gọn`,
        album: `Album`,
        banknote_one: `tờ tiền`,
        banknote_many: `tờ tiền`,
        col_no: `Số`,
        col_photos: `Ảnh`,
        col_note: `Tờ Tiền`,
        col_year: `Năm`,
        col_type: `Loại`,
        col_ref: `Mã Tham Chiếu`,
        issuer: `Đơn Vị Phát Hành`,
        size: `Kích Thước`,
        reference: `Mã Tham Chiếu`,
        new_tag: `MỚI`,
        view_larger: `Xem lớn hơn`,
        viewer_close: `Đóng`,
        viewer_prev: `Mặt trước đó`,
        viewer_next: `Mặt tiếp theo`,
    }
};

// The sidebar is built from REGIONS / COUNTRIES in scripts/regions.js,
// which this page loads first. The per-continent accent colour lives on
// each REGIONS record, so there is no separate map here any more.

function createCategory(categoryKey) {
    const region = REGIONS[categoryKey];
    const title = region[currentLang];
    const accentVar = region.accent || "--a5";

    let categoryHTML = `<div class="region-group" style="--region-accent: var(${accentVar})">`;
    categoryHTML += `<h2 onclick="toggleCategories('${categoryKey}')">${title}</h2>`;
    categoryHTML += `<ul id="${categoryKey}">`;
    // the sidebar lists a continent flat, so subregions are ignored here
    countriesIn(categoryKey, currentLang).forEach(slug => {
        categoryHTML += `<li onclick="navigateTo('${slug}.html')">${COUNTRIES[slug][currentLang]}</li>`;
    });
    categoryHTML += `</ul>`;
    categoryHTML += `</div>`;
    return categoryHTML;
}

function insertSidebarHTML(id) {
    let sidebarHTML = '<div class="sidebar">';
    Object.keys(REGIONS).forEach(categoryKey => {
        sidebarHTML += createCategory(categoryKey);
    });
    sidebarHTML += '</div>';
    document.getElementById(id).innerHTML = sidebarHTML;
}

function updatePageLanguage(currentLang) {
    const foundationToUpdate = [
        { selector: "home-nav", key: "home" },
        { selector: "collection-nav", key: "collection" },
        { selector: "about-nav", key: "about" },
        { selector: "contact-nav", key: "contact" },
        { selector: "home-nav-media", key: "home" },
        { selector: "collection-nav-media", key: "collection" },
        { selector: "about-nav-media", key: "about" },
        { selector: "contact-nav-media", key: "contact" },
        { selector: "searchInput", key: "search_placeholder", attr: "placeholder" },
        { selector: "back-to-top", key: "back_to_top"},
        { selector: "lang-toggle", key: "lang_toggle"},
        { selector: "view-compact", key: "compact" },
        { selector: "view-album", key: "album" },
        { selector: "col-no", key: "col_no" },
        { selector: "col-photos", key: "col_photos" },
        { selector: "col-note", key: "col_note" },
        { selector: "col-year", key: "col_year" },
        { selector: "col-type", key: "col_type" },
        { selector: "col-ref", key: "col_ref" },
    ];

    foundationToUpdate.forEach(({ selector, key, attr }) => {
        const element = document.getElementById(selector);
        if (element) {
            if (attr) {
                element.setAttribute(attr, fixed_trans[currentLang][key]);
            } else {
                element.textContent = fixed_trans[currentLang][key];
            }
        }
    });
}

// The heading comes from `translations.heading` in the data file. An optional
// `translations.subtitle` ({ en, vi }) shows in italics underneath.
function updatePageHeading(currentLang) {
    const headingElement = document.getElementById('page-heading');
    if (headingElement && typeof translations !== 'undefined' && translations.heading) {
        headingElement.textContent = translations.heading[currentLang] || translations.heading.en;
    }

    const subtitleElement = document.getElementById('page-subtitle');
    if (subtitleElement) {
        const subtitle = (typeof translations !== 'undefined') ? noteText(translations.subtitle) : "";
        subtitleElement.innerHTML = subtitle;
        subtitleElement.hidden = !subtitle;
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "vi" : "en";
    localStorage.setItem("language", currentLang);

    updatePageLanguage(currentLang);
    updatePageHeading(currentLang);
    insertSidebarHTML('SideBar');
    insertSidebarHTML('SideBarCollection');
    createNavigationButtons();
    // rebuilt in the new language; the notes that were open stay open
    renderNotes();
    if (viewerNote !== null) showNoteViewerPhoto();
}
//--// function to print out code for sidebar //--//


// Link for a banknote's `reference` field, used in the data files:
//     reference: refLink("P-53Aa", "https://en.numista.com/catalogue/note206543.html"),
// This file loads before data/<country>.js, so every country can use it.
function refLink(code, url) {
    return `<a href="${url}" target="_blank" rel="noopener" class="custom-link">${code}</a>`;
}


//--// banknote list: compact rows that open into album sleeves //--//
// Names here start with "note" because the data file's own consts
// (images, issuer, index...) share the same global scope.

// which banknotes are open, and whether the page opens compact or as an album
// (the view is remembered across pages, like the language and theme)
const openNotes = new Set();
let noteView = localStorage.getItem("noteView") === "album" ? "album" : "compact";

// a data field is either plain text or { en, vi }
function noteText(value) {
    if (value === null || value === undefined) return "";
    if (typeof value === "object" && !Array.isArray(value)) return value[currentLang] || value.en || "";
    return String(value);
}

function noteAttr(value) {
    return noteText(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// Page order from `layout` in the data file: banknote numbers, with "|" for a
// solid break and ":" for a dashed one. Banknotes the layout leaves out go on
// top, newest first, so a newly added note shows up before the layout is updated.
function noteOrder() {
    if (typeof images === "undefined") return [];
    const tokens = (typeof layout === "string" ? layout : "").split(/\s+/).filter(Boolean);
    const listed = new Set(tokens.map(Number));
    const missing = [];
    for (let i = images.length - 1; i >= 1; i--) {
        if (!listed.has(i)) missing.push(String(i));
    }

    const placed = new Set();
    return missing.concat(tokens).filter(token => {
        if (token === "|" || token === ":") return true;
        const n = Number(token);
        // skip typos, notes that no longer exist, and repeats
        if (!images[n] || placed.has(n)) return false;
        placed.add(n);
        return true;
    });
}

function noteNumbers() {
    return noteOrder().filter(token => token !== "|" && token !== ":").map(Number);
}

// the type column drops the trailing "Banknote" to stay on one line
function noteShortType(info) {
    const type = noteText(info.type);
    return currentLang === "en" ? type.replace(/ Banknote$/, "") : type;
}

// The figure for each photo, shown in its caption. `figure` is either a list
// with one entry per photo, or a single figure that belongs to the front.
function noteFigures(info) {
    if (Array.isArray(info.figure)) return info.figure;
    return info.figure ? [info.figure] : [];
}

function noteRowHTML(n) {
    const t = fixed_trans[currentLang];
    const info = slideshowInfo[n] || {};
    const pics = images[n] || [];
    const figures = noteFigures(info);
    const subtitle = noteText(info.subtitle);
    const year = noteText(info.year);
    const isOpen = openNotes.has(n);

    const minis = pics.slice(0, 2).map((pic, i) => `
        <span class="note-mini"><img src="${pic.src}" alt="" loading="lazy">${
            i === 1 && pics.length > 2 ? `<span class="note-more">+${pics.length - 2}</span>` : ""
        }</span>`).join("");

    const photos = pics.map((pic, i) => `
        <figure>
            <div class="sleeve-mat">
                <button type="button" class="sleeve-open" data-i="${i}" aria-label="${t.view_larger}: ${noteAttr(pic.description)}">
                    <img src="${pic.src}" alt="${noteAttr(pic.alt)}" loading="lazy">
                </button>
            </div>
            <figcaption class="sleeve-side">${noteText(pic.description)}${
                figures[i] ? ` · ${noteText(figures[i])}` : ""
            }</figcaption>
        </figure>`).join("");

    const meta = [noteText(info.issuer), noteText(info.type), noteText(info.size)].filter(Boolean).join(" · ");

    return `
    <li class="note${isOpen ? " open" : ""}" data-n="${n}">
        <div class="note-row ledger-cols">
            <span class="note-num">#${n}</span>
            <span class="note-minis">${minis}</span>
            <span class="note-name">
                <button type="button" class="note-toggle" aria-expanded="${isOpen}" aria-controls="sleeve-${n}">
                    ${noteText(info.title)}${info.new ? `<span class="note-new">${t.new_tag}</span>` : ""}
                </button>
                ${subtitle ? `<span class="note-subtitle">${subtitle}</span>` : ""}
            </span>
            <span class="note-facts">
                <span class="note-year${year ? "" : " missing"}">${year || "—"}</span>
                <span class="note-type">${noteShortType(info)}</span>
                <span class="note-ref">${noteText(info.reference)}</span>
            </span>
            <span class="note-chev" aria-hidden="true">&#9654;</span>
        </div>
        <div class="sleeve" id="sleeve-${n}"${isOpen ? "" : " hidden"}>
            <div class="sleeve-pair">${photos}</div>
            <div class="sleeve-label">
                ${meta ? `<p class="sleeve-meta">${meta}</p>` : ""}
                ${info.reference ? `<p><span class="sleeve-key">${t.reference}:</span> ${noteText(info.reference)}</p>` : ""}
                ${info.note ? `<p class="sleeve-remark">${noteText(info.note)}</p>` : ""}
                ${info.special ? `<p class="sleeve-remark rainbow-text">${noteText(info.special)}</p>` : ""}
            </div>
        </div>
    </li>`;
}

function renderNotes() {
    const list = document.getElementById("notes");
    if (!list || typeof images === "undefined") return;

    const t = fixed_trans[currentLang];
    const total = noteNumbers().length;
    const count = document.getElementById("note-count");
    if (count) count.textContent = `${total} ${total === 1 ? t.banknote_one : t.banknote_many}`;

    list.innerHTML = noteOrder().map(token =>
        token === "|" ? `<li class="note-break" aria-hidden="true"></li>`
        : token === ":" ? `<li class="note-break dashed" aria-hidden="true"></li>`
        : noteRowHTML(Number(token))
    ).join("");

    // photos already in the cache may be ready before their load event is heard
    list.querySelectorAll(".note-mini img").forEach(img => {
        if (img.complete) markNoteMini(img);
    });
}

// a thumbnail of a vertical photo is sized by its width instead of its height
function markNoteMini(img) {
    const mini = img.closest(".note-mini");
    if (mini && img.naturalWidth) mini.classList.toggle("portrait", img.naturalHeight > img.naturalWidth);
}

function setNoteOpen(li, isOpen) {
    const n = Number(li.dataset.n);
    if (isOpen) openNotes.add(n); else openNotes.delete(n);
    li.classList.toggle("open", isOpen);
    li.querySelector(".note-toggle").setAttribute("aria-expanded", String(isOpen));
    li.querySelector(".sleeve").hidden = !isOpen;
}

// Compact closes every banknote, Album opens them all
function setNoteView(view) {
    noteView = view;
    localStorage.setItem("noteView", view);
    document.getElementById("view-compact").setAttribute("aria-pressed", String(view === "compact"));
    document.getElementById("view-album").setAttribute("aria-pressed", String(view === "album"));
    document.querySelectorAll("#notes .note").forEach(li => setNoteOpen(li, view === "album"));
}

//--// full-window viewer: one banknote's photos, ← → between its sides //--//
let viewerNote = null;      // banknote number on show, null when closed
let viewerIndex = 0;        // which of its photos
let viewerReturnFocus = null;

function buildNoteViewer() {
    const viewer = document.createElement("div");
    viewer.id = "note-viewer";
    viewer.className = "note-viewer";
    viewer.hidden = true;
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-labelledby", "viewer-title");
    viewer.innerHTML = `
        <div class="viewer-bar">
            <p class="viewer-title" id="viewer-title"></p>
            <button type="button" class="viewer-close" id="viewer-close">&times;</button>
        </div>
        <div class="viewer-stage" id="viewer-stage">
            <button type="button" class="viewer-arrow prev" id="viewer-prev">&#10094;</button>
            <img id="viewer-img" alt="">
            <button type="button" class="viewer-arrow next" id="viewer-next">&#10095;</button>
        </div>
        <p class="viewer-caption" id="viewer-caption"></p>`;
    document.body.appendChild(viewer);

    document.getElementById("viewer-close").addEventListener("click", closeNoteViewer);
    document.getElementById("viewer-prev").addEventListener("click", () => stepNoteViewer(-1));
    document.getElementById("viewer-next").addEventListener("click", () => stepNoteViewer(1));

    // clicking the dark area around the photo also closes it
    viewer.addEventListener("click", event => {
        if (event.target === viewer || event.target.id === "viewer-stage") closeNoteViewer();
    });

    document.addEventListener("keydown", event => {
        if (viewerNote === null) return;
        if (event.key === "Escape") closeNoteViewer();
        else if (event.key === "ArrowLeft") stepNoteViewer(-1);
        else if (event.key === "ArrowRight") stepNoteViewer(1);
        else if (event.key === "Tab") {
            // keep keyboard focus inside the viewer while it is open
            const buttons = Array.from(viewer.querySelectorAll("button")).filter(b => !b.hidden);
            const at = buttons.indexOf(document.activeElement);
            const next = (at + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length;
            buttons[next].focus();
            event.preventDefault();
        }
    });

    // swipe left / right on phones
    let touchX = null, touchY = null;
    const stage = document.getElementById("viewer-stage");
    stage.addEventListener("touchstart", event => {
        touchX = event.touches[0].clientX;
        touchY = event.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener("touchend", event => {
        if (touchX === null) return;
        const dx = event.changedTouches[0].clientX - touchX;
        const dy = event.changedTouches[0].clientY - touchY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) stepNoteViewer(dx < 0 ? 1 : -1);
        touchX = null;
    });
}

function showNoteViewerPhoto() {
    const t = fixed_trans[currentLang];
    const info = slideshowInfo[viewerNote] || {};
    const pics = images[viewerNote];
    const pic = pics[viewerIndex];
    const figures = noteFigures(info);

    const img = document.getElementById("viewer-img");
    img.src = pic.src;
    img.alt = noteText(pic.alt);

    document.getElementById("viewer-title").innerHTML =
        `${noteText(info.title)}<span class="viewer-count">#${viewerNote} · ${viewerIndex + 1} / ${pics.length}</span>`;
    document.getElementById("viewer-caption").textContent =
        noteText(pic.description) + (figures[viewerIndex] ? ` · ${noteText(figures[viewerIndex])}` : "");

    const single = pics.length < 2;
    document.getElementById("viewer-prev").hidden = single;
    document.getElementById("viewer-next").hidden = single;
    document.getElementById("viewer-close").setAttribute("aria-label", t.viewer_close);
    document.getElementById("viewer-prev").setAttribute("aria-label", t.viewer_prev);
    document.getElementById("viewer-next").setAttribute("aria-label", t.viewer_next);
}

function openNoteViewer(n, index, trigger) {
    if (!images[n] || !images[n][index]) return;
    viewerNote = n;
    viewerIndex = index;
    viewerReturnFocus = trigger || null;
    showNoteViewerPhoto();
    document.getElementById("note-viewer").hidden = false;
    document.getElementById("viewer-close").focus();
}

function stepNoteViewer(step) {
    if (viewerNote === null) return;
    const count = images[viewerNote].length;
    if (count < 2) return;
    viewerIndex = (viewerIndex + step + count) % count;
    showNoteViewerPhoto();
}

function closeNoteViewer() {
    if (viewerNote === null) return;
    viewerNote = null;
    document.getElementById("note-viewer").hidden = true;
    // back to the photo that opened it (it may have been rebuilt meanwhile)
    if (viewerReturnFocus && document.contains(viewerReturnFocus)) viewerReturnFocus.focus();
    viewerReturnFocus = null;
}

function initNotes() {
    const list = document.getElementById("notes");
    if (!list) return;

    // the list takes the continent's colour, like the sidebar
    const country = COUNTRIES[pageSlug()];
    const region = country && REGIONS[country.region];
    if (region && region.accent) {
        document.getElementById("ledger").style.setProperty("--note-accent", `var(${region.accent})`);
    }

    // Album opens everything; Compact opens just the newest banknote
    const numbers = noteNumbers();
    if (noteView === "album") numbers.forEach(n => openNotes.add(n));
    else if (numbers.length) openNotes.add(numbers[0]);
    renderNotes();
    document.getElementById("view-compact").setAttribute("aria-pressed", String(noteView === "compact"));
    document.getElementById("view-album").setAttribute("aria-pressed", String(noteView === "album"));

    buildNoteViewer();

    // load events don't bubble, so listen while they travel down (capture)
    list.addEventListener("load", event => {
        if (event.target.tagName === "IMG") markNoteMini(event.target);
    }, true);

    list.addEventListener("click", event => {
        // a photo in an open sleeve opens the full-window viewer
        const photo = event.target.closest(".sleeve-open");
        if (photo) {
            openNoteViewer(Number(photo.closest(".note").dataset.n), Number(photo.dataset.i), photo);
            return;
        }
        // anywhere else on a row opens or closes it, except its links
        if (event.target.closest("a")) return;
        const row = event.target.closest(".note-row");
        if (row) setNoteOpen(row.parentElement, !row.parentElement.classList.contains("open"));
    });

    document.getElementById("view-compact").addEventListener("click", () => setNoteView("compact"));
    document.getElementById("view-album").addEventListener("click", () => setNoteView("album"));
}
//--// banknote list //--//


// expand the box of each category in the side bar of the collection (different box has different height)
function toggleCategories(id) {
    // Select all elements with the matching ID across both sidebars
    const categoryLists = document.querySelectorAll(`[id="${id}"]`);
    categoryLists.forEach(categoryList => {
        if (categoryList.style.maxHeight) {
            categoryList.style.maxHeight = null;
        } else {
            categoryList.style.maxHeight = (categoryList.scrollHeight + 10) + "px";
        }
    });
}

function toggleCollection(event) {
    event.preventDefault(); // Prevent navigation
    const collectionDropdown = document.getElementById("collection-dropdown");

    // Toggle visibility
    if (collectionDropdown.style.maxHeight && collectionDropdown.style.maxHeight !== "0px") {
        collectionDropdown.style.maxHeight = "0px";
    } else {
        collectionDropdown.style.maxHeight = collectionDropdown.scrollHeight + "px";
    }
}

function toggleMenuCollection() {
    const nav = document.getElementById('header-nav-media');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// top button for the money pages
function scrollToTop() {
    const mainContent = document.getElementById('main-to-top');
    if (mainContent) {
        mainContent.scrollTo({
            top: 0,
        });
    }
}

// this page's slug, e.g. "canada" for collection/canada.html
function pageSlug() {
    return window.location.pathname.split('/').pop().replace(/\.html$/, '');
}

function getPageNavigation() {
    // COUNTRIES is already in reading order: continent by continent
    const allSlugs = Object.keys(COUNTRIES);
    const currentIndex = allSlugs.indexOf(pageSlug());

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    const at = i => (i >= 0 && i < allSlugs.length)
        ? Object.assign({ slug: allSlugs[i], link: `${allSlugs[i]}.html` }, COUNTRIES[allSlugs[i]])
        : null;

    return { prev: at(currentIndex - 1), next: at(currentIndex + 1) };
}

// slim chevrons (Font Awesome, like the search icon) for the previous / next
// country buttons and the label shown while swiping between countries
const NAV_ICON_PREV = `<i class="fa-solid fa-angle-left nav-icon" aria-hidden="true"></i>`;
const NAV_ICON_NEXT = `<i class="fa-solid fa-angle-right nav-icon" aria-hidden="true"></i>`;

function createNavigationButtons() {
    const nav = getPageNavigation();
    const navContainer = document.getElementById('page-navigation');

    if (!navContainer) return;

    navContainer.innerHTML = '';
    if (nav.prev) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'nav-button prev-button';
        const prevName = nav.prev['short_' + currentLang] || nav.prev[currentLang];
        prevBtn.innerHTML = `${NAV_ICON_PREV}<span class="country-name">${prevName}</span>`;
        prevBtn.setAttribute('aria-label', prevName);
        prevBtn.onclick = () => window.location.href = nav.prev.link;
        navContainer.appendChild(prevBtn);
    }

    if (nav.next) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'nav-button next-button';
        const nextName = nav.next['short_' + currentLang] || nav.next[currentLang];
        nextBtn.innerHTML = `<span class="country-name">${nextName}</span>${NAV_ICON_NEXT}`;
        nextBtn.setAttribute('aria-label', nextName);
        nextBtn.onclick = () => window.location.href = nav.next.link;
        navContainer.appendChild(nextBtn);
    }
}

//--// phones: swipe sideways on the list to go to the previous / next country //--//
// Swipe left for the next country, right for the previous one. Only a clear
// sideways swipe counts, so scrolling the list never changes page, and a
// label shows where the swipe leads before you let go.
const SWIPE_DISTANCE = 80;   // px the finger must travel sideways
const SWIPE_EDGE = 24;       // px at each screen edge left to the phone's own back/forward gesture

function initCountrySwipe() {
    const area = document.getElementById("main-to-top");
    if (!area || !window.matchMedia("(pointer: coarse)").matches) return;

    const hint = document.createElement("div");
    hint.className = "swipe-hint";
    hint.setAttribute("aria-hidden", "true");
    document.body.appendChild(hint);

    let startX = 0, startY = 0;
    let tracking = false;     // a touch that might become a swipe
    let sideways = null;      // decided after the first few px of movement

    const targetFor = dx => {
        const nav = getPageNavigation();
        return dx < 0 ? nav.next : nav.prev;
    };
    const hideHint = () => { hint.style.opacity = "0"; };

    area.addEventListener("touchstart", event => {
        tracking = false;
        // the full-window viewer has its own swipe, between a note's sides
        if (viewerNote !== null || event.touches.length !== 1) return;
        const touch = event.touches[0];
        if (touch.clientX < SWIPE_EDGE || touch.clientX > window.innerWidth - SWIPE_EDGE) return;
        startX = touch.clientX;
        startY = touch.clientY;
        sideways = null;
        tracking = true;
    }, { passive: true });

    area.addEventListener("touchmove", event => {
        if (!tracking) return;
        const dx = event.touches[0].clientX - startX;
        const dy = event.touches[0].clientY - startY;
        if (sideways === null) {
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
            sideways = Math.abs(dx) > Math.abs(dy) * 1.5;
        }
        if (!sideways) { tracking = false; return; }

        const target = targetFor(dx);
        if (!target) { hideHint(); return; }
        const progress = Math.min(Math.abs(dx) / SWIPE_DISTANCE, 1);
        const name = target['short_' + currentLang] || target[currentLang];
        hint.innerHTML = dx < 0 ? `${name}${NAV_ICON_NEXT}` : `${NAV_ICON_PREV}${name}`;
        hint.className = `swipe-hint ${dx < 0 ? "next" : "prev"}${progress === 1 ? " ready" : ""}`;
        hint.style.opacity = String(progress);
        // slides in from its own side as the finger moves
        hint.style.setProperty("--hint-shift", `${(1 - progress) * (dx < 0 ? 40 : -40)}px`);
    }, { passive: true });

    area.addEventListener("touchend", event => {
        if (!tracking) return;
        tracking = false;
        hideHint();
        const dx = event.changedTouches[0].clientX - startX;
        const dy = event.changedTouches[0].clientY - startY;
        if (!sideways || Math.abs(dx) < SWIPE_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.5) return;
        const target = targetFor(dx);
        if (target) window.location.href = target.link;
    });

    area.addEventListener("touchcancel", () => {
        tracking = false;
        hideHint();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    currentLang = localStorage.getItem('language') || 'en';

    updatePageLanguage(currentLang);
    updatePageHeading(currentLang);
    insertSidebarHTML('SideBar');
    insertSidebarHTML('SideBarCollection');
    createNavigationButtons();
    initNotes();
    initCountrySwipe();

    const mainContent = document.getElementById('main-to-top');
    const backToTopButton = document.getElementById('back-to-top');

    if (mainContent && backToTopButton) {
        mainContent.addEventListener('scroll', () => {
            if (mainContent.scrollTop > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
});
