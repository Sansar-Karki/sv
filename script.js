const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu){
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    mobileMenu.style.display = open ? "none" : "block";
    mobileMenu.setAttribute("aria-hidden", String(open));
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileMenu.style.display = "none";
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });
}

// Demo form: by default it does nothing. Choose ONE option:
//
// Option A (easiest): replace form with a mailto link.
// Option B (best free): Netlify Forms (but you're on Cloudflare).
// Option C (Cloudflare-native): Cloudflare Workers/Form handler (small function).
//
// For now: prevent submit and show a message.
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
if (form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (note) note.textContent = "Form not wired yet. Add a mailto link or a Worker endpoint when ready.";
  });
}
