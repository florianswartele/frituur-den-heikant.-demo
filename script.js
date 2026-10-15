
const whatsappNumber = ""; // Vul later het echte nummer in, met landcode 32

// Mobiel menu openen en sluiten
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Menu filteren op categorie
const filterButtons = document.querySelectorAll("[data-filter]");
const menuItems = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    menuItems.forEach((item) => {
      const matches =
        filter === "all" || item.dataset.category === filter;

      item.hidden = !matches;
    });
  });
});

// WhatsApp-knop activeren zodra je het echte nummer invult
const whatsappButtons = document.querySelectorAll(".whatsapp-button");

whatsappButtons.forEach((button) => {
  if (whatsappNumber.trim() !== "") {
    const message = encodeURIComponent(
      "Hallo, ik heb een vraag over Frituur Den Heikant."
    );

    button.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.removeAttribute("aria-disabled");
  } else {
    button.removeAttribute("href");
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("De WhatsApp-link moet nog ingesteld worden.");
    });
  }
});

// Automatisch het huidige jaartal invullen
const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach((element) => {
  element.textContent = new Date().getFullYear();
});
