/*
 * KIZOKU TEAM — Community Website
 * EDIT DI SINI:
 * 1. Ubah inviteUrl ke tautan grup/komunitas yang benar.
 * 2. Ubah nama, jabatan, dan file foto admin pada array admins.
 * 3. Ubah angka statistik dan data generasi sesuai komunitasmu.
 * Website ini masih statis: tidak menggunakan database/admin login.
 */

const inviteUrl = "https://chat.whatsapp.com/H3M79wJGqFK6nkkLFrg3GQ"; // GANTI dengan tautan undangan komunitas

const generations = [
  { id: 1, name: "THE BEGINNING", title: "Awal perjalanan", description: "Sebuah awal sederhana yang tumbuh menjadi cerita bersama. Generasi pertama menjadi fondasi solidaritas KIZOKU TEAM.", members: 61, url: "https://chat.whatsapp.com/IQ8aaXdOnvQFxRDPVLZpnk?s=cl&p=a&mlu=4&ilr=4" },
  { id: 2, name: "COMING SOON", title: "Mulai berkembang", description: "Saatnya melangkah lebih jauh! Generasi kedua hadir membawa ide segar, koneksi yang lebih luas, dan semangat baru untuk menciptakan cerita hebat bersama KIZOKU TEAM.", members: 0, url: "" },
  { id: 3, name: "COMING SOON", title: "Membuka jalan kesuksesan", description: "Babak baru menanti. Generasi ketiga menjadi ruang untuk membuka peluang, memperkuat solidaritas, dan meninggalkan jejak yang membanggakan bersama keluarga besar KIZOKU TEAM.", members: 0, url: "" }
];

// GANTI nama, jabatan, tag, dan foto sesuai admin yang sebenarnya.
// Letakkan foto di folder assets/admins/. Gunakan nama file yang sama dengan properti photo.
const admins = [
  { name: "Reyz", role: "FOUNDER", tag: "𝐒𝟖 | 𝙅𝙖𝙯𝙯`𝗫𝘆𝗿𝗲𝗻𝘁", photo: "assets/admins/Reyz.jpg" },
  { name: "Rian", role: "CO-FOUNDER & DEVOLOPER BOT", tag: "RianNakano 𝖋𝖙`𝗫𝗥𝗚 メ 𝙕𝙕࿐", photo: "assets/admins/Rian.jpg" },
  { name: "Ranz", role: "LEADER", tag: "𝙧𝙖𝙣𝙯𝙤`𝗫𝘆𝗿𝗲𝗻𝘁", photo: "assets/admins/Ranz.jpg" },
  { name: "Paijo", role: "ADMIN DESAIN & COLLAB", tag: "な Jo𝙉𝙚𝙬𝙗𝙞𝙚 𝙓𝙧 `[𝙎𝙁]", photo: "assets/admins/Paijo.jpg" },
  { name: "Macha", role: "ADMIN SECURITY & ADMIN DESAIN", tag: "𝟒𝐕 𝐜𝐚𝐨𝐞𝐦𝐣𝐢𝐢 𝐟𝐭 𝐊𝐙𝐓", photo: "assets/admins/Macha.jpg" }
];

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const initials = (name) => String(name).trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();

let activeGeneration = 1;

function renderGenerationTabs() {
  $("#generationTabs").innerHTML = generations.map(gen => `
    <button class="generation-tab ${gen.id === activeGeneration ? "active" : ""}"
      role="tab" aria-selected="${gen.id === activeGeneration}" data-generation="${gen.id}">
      <span>GEN ${String(gen.id).padStart(2, "0")}</span><small>${escapeHTML(gen.name)}</small>
    </button>`).join("");

  $("#generationTabs").querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeGeneration = Number(button.dataset.generation);
      renderGenerationTabs();
      renderGeneration();
    });
  });
}

function renderGeneration() {
  const gen = generations.find(item => item.id === activeGeneration) || generations[0];
  $("#generationFeature").innerHTML = `
    <div class="generation-number"><span>GENERATION</span><strong>${String(gen.id).padStart(2, "0")}</strong><i>✳</i></div>
    <div class="generation-info"><div class="feature-kicker">${escapeHTML(gen.name)}</div>
      <h3>${escapeHTML(gen.title)}</h3><p>${escapeHTML(gen.description)}</p>
      <div class="feature-meta"><span>◈ <b>${Number(gen.members)}</b> anggota </span><span>✳ KIZOKU TEAM</span></div>
      <a class="button button-light generation-join-button" href="${escapeHTML(gen.url || "#")}" ${gen.url ? 'target="_blank" rel="noopener noreferrer"' : 'data-generation-link="unset"'}>Masuk ke grup GEN ${String(gen.id).padStart(2, "0")} <span>↗</span></a>
    </div>`;
  const generationLink = $("#generationFeature").querySelector('[data-generation-link="unset"]');
  if (generationLink) {
    generationLink.addEventListener("click", event => {
      event.preventDefault();
      const toast = $("#toast");
      toast.textContent = `Tambahkan tautan grup untuk GEN ${String(gen.id).padStart(2, "0")} pada properti url di array generations dalam script.js.`;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3200);
    });
  }
}

function renderAdmins() {
  $("#adminSlider").innerHTML = admins.map((admin, index) => {
    const safeName = escapeHTML(admin.name);
    const safePhoto = escapeHTML(admin.photo || "");
    const fallback = escapeHTML(initials(admin.name));
    return `<article class="admin-card">
      <div class="admin-photo">
        ${safePhoto ? `<img src="${safePhoto}" alt="Foto admin ${safeName}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false">` : ""}
        <div class="admin-fallback" ${safePhoto ? "hidden" : ""}>${fallback}</div>
        <span class="admin-photo-label">ADMIN ${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="admin-info">
        <div class="admin-role">${escapeHTML(admin.role)}</div>
        <div class="admin-name">${safeName}</div>
        <span class="admin-tag">${escapeHTML(admin.tag)}</span>
      </div>
    </article>`;
  }).join("");
}

function setupAdminSlider() {
  const slider = $("#adminSlider");
  const moveAmount = () => {
    const card = slider.querySelector(".admin-card");
    return card ? card.getBoundingClientRect().width + 18 : 250;
  };
  $("#adminPrev").addEventListener("click", () => slider.scrollBy({ left: -moveAmount(), behavior: "smooth" }));
  $("#adminNext").addEventListener("click", () => slider.scrollBy({ left: moveAmount(), behavior: "smooth" }));
}

function setupMenu() {
  const toggle = $("#menuToggle");
  const nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function setupJoinLink() {
  const button = $("#joinButton");
  button.href = inviteUrl;
  if (inviteUrl === "https://example.com") {
    button.addEventListener("click", event => {
      event.preventDefault();
      const toast = $("#toast");
      toast.textContent = "Ganti inviteUrl di script.js dengan tautan undangan komunitasmu.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 2800);
    });
  }
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(element => observer.observe(element));
}

function animateCounters() {
  document.querySelectorAll(".count-up").forEach(counter => {
    const target = Number(counter.dataset.count);
    const start = performance.now();
    const duration = 1000;
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString("id-ID");
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

renderGenerationTabs();
renderGeneration();
renderAdmins();
setupAdminSlider();
setupMenu();
setupJoinLink();
setupReveal();
animateCounters();
