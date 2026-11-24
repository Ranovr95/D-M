"use strict";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    menuToggle.textContent = "☰";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
      mainNav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const device = String(formData.get("device") || "").trim();
    const issue = String(formData.get("issue") || "").trim();
    const adminWhatsApp = "6285282066731";
    const message = [
      "Halo D&M, saya ingin bertanya dan melakukan booking service.",
      "",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone}`,
      `Jenis layanan: ${device}`,
      `Keluhan: ${issue}`
    ].join("\n");
    const waUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}
