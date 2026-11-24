const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    mainNav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name")).trim();
  const phone = String(formData.get("phone")).trim();
  const device = String(formData.get("device")).trim();
  const issue = String(formData.get("issue")).trim();

  // Nomor WhatsApp resmi D&M (format internasional tanpa tanda +).
  const adminWhatsApp = "6285282066731";
  const message = [
    "Halo D&M, saya ingin bertanya dan melakukan booking service.",
    "",
    `Nama: ${name}`,
    `Nomor WhatsApp: ${phone}`,
    `Jenis layanan: ${device}`,
    `Keluhan: ${issue}`
  ].join("\n");

  window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
