/* ── EcoSolapur — app.js ── */

/* ─── Toast ─── */
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3500);
}

/* ─── Modal ─── */
function openModal() { document.getElementById("modalOverlay").classList.add("open"); }
function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); }

document.addEventListener("DOMContentLoaded", () => {
  /* Modal backdrop close */
  document.getElementById("modalOverlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  /* Confirm pickup (modal) */
  document.getElementById("modalConfirmBtn").addEventListener("click", () => {
    closeModal();
    showToast(t("toast_pickup_booked"));
  });

  /* Severity buttons */
  document.querySelectorAll(".sev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sev-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  /* E-waste type toggle */
  document.querySelectorAll(".etype-btn").forEach(btn => {
    btn.addEventListener("click", () => btn.classList.toggle("selected"));
  });

  /* Feature list */
  document.querySelectorAll(".feat").forEach((f, i) => {
    f.addEventListener("click", () => {
      document.querySelectorAll(".feat").forEach(el => el.classList.remove("active"));
      f.classList.add("active");
    });
  });

  /* Set min date */
  const dateInput = document.getElementById("pickupDate");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  /* Scroll fade-in */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

  /* Language switcher */
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langCode));
  });

  /* Directions buttons */
  document.querySelectorAll(".btn-directions").forEach(btn => {
    btn.addEventListener("click", () => showToast(t("toast_directions")));
  });

  /* Book pickup buttons (cards) */
  document.querySelectorAll(".btn-book-card").forEach(btn => {
    btn.addEventListener("click", () => openModal());
  });

  /* Nav CTA */
  document.getElementById("navCta").addEventListener("click", openModal);

  /* Mock book pickup */
  document.getElementById("mockPickupBtn").addEventListener("click", () => {
    showToast(t("toast_pickup_booked"));
  });

  /* Hero buttons */
  document.getElementById("heroBtnCenters").addEventListener("click", () => {
    document.getElementById("centers").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("heroBtnLearn").addEventListener("click", () => {
    document.getElementById("awareness").scrollIntoView({ behavior: "smooth" });
  });

  /* Initial render (English) */
  setLanguage("en");
});

/* ─── Form actions ─── */
function submitReport() {
  const loc = document.getElementById("reportLoc").value.trim();
  if (!loc) { showToast(t("toast_enter_loc")); return; }
  showToast(t("toast_report_ok"));
}

function submitPickup() {
  const d = document.getElementById("pickupDate").value;
  if (!d) { showToast(t("toast_enter_date")); return; }
  showToast(t("toast_pickup_scheduled"));
}
