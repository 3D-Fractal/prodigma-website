// Mobilmeny: öppna/stäng menyn och stäng den vid klick på en länk eller Escape.
// Knappens texter kommer från data-open / data-close så att de följer sidans språk.
document.documentElement.classList.remove("no-js");

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

if (header && toggle) {
  const label = toggle.querySelector(".menu-label");
  const setOpen = (open) => {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    label.textContent = open ? toggle.dataset.close : toggle.dataset.open;
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("nav-open")));
  header.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  window.matchMedia("(min-width: 1081px)").addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
