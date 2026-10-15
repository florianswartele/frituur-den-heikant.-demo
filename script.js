
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

// Mobiele navigatie
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    });
  });
}

// Menu filteren op categorie
const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    menuCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;
    });
  });
});

// Markeer de huidige weekdag in de openingsuren
const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const today = weekdays[new Date().getDay()];
const todayRow = document.querySelector(
  `.hours-row[data-day="${today}"]`
);

if (todayRow) {
  todayRow.classList.add("is-today");
}

// Nederlands / Engels
const translations = {
  nl: {
    navMenu: "Menu",
    navAbout: "Over ons",
    navReviews: "Reviews",
    navHours: "Openingsuren",
    navContact: "Contact & route ↗",

    heroTitle: "Goudgele frieten.<br><em>Da's genieten.</em>",
    heroText: "Zin in een goeie portie frieten? Ontdek het menu van Frituur Den Heikant en kom langs in Zele.",
    heroButton: "Ontdek het menu",
    hoursLink: "Bekijk openingsuren →",

    infoOne: "Frieten & snacks",
    infoOneSub: "Frituurklassiekers",
    infoTwo: "In Zele",
    infoThree: "Spring gerust binnen",
    infoThreeSub: "Bekijk de openingsuren",

    menuEyebrow: "OP HET MENU",
    menuTitle: "Waar heb je <em>goesting in?</em>",
    menuIntro: "Van een portie frieten tot een lekkere snack. Ontdek een selectie van de frituurklassiekers.",
    demoMenuTitle: "Voorbeeldmenu voor portfolio",
    demoMenuText: "Controleer alle prijzen en producten met de officiële menukaart voordat deze website echt wordt gepubliceerd.",

    filterAll: "Alles",
    filterFries: "Frieten",
    filterSauces: "Sauzen",
    filterSnacks: "Snacks",
    filterBurgers: "Burgers",
    filterDrinks: "Dranken",

    friesTitle: "Verse frieten",
    friesDescription: "Kies jouw portie.",
    smulboxDescription: "Een stevige portie.",
    saucesTitle: "Sauzen",
    saucesDescription: "Maak je frietjes compleet.",
    sauceFries: "Saus op de frietjes",
    saucePot: "Saus in een potje",
    snackDescription: "Een echte frituurfavoriet.",
    otherSnacks: "Andere snacks",
    otherSnacksDescription: "Boulet Heikant, viandel, kipkorn, bami en kaaskroket.",
    burgerDescription: "Verschillende varianten.",
    drinksTitle: "Frisdranken",
    priceCheck: "Prijs controleren",
    menuFootnote: "Dit is een selectie voor de demo, niet het volledige menu. Controleer alle prijzen voor publicatie.",

    aboutEyebrow: "FRITUUR IN ZELE",
    aboutTitle: "Een vertrouwde stop voor <em>frietjes en snacks.</em>",
    aboutText: "Frituur Den Heikant vind je aan Heikant 265 in Zele. Kom langs voor een portie frieten, een snack of jouw favoriete saus.",
    aboutButton: "Plan je bezoek",
    aboutDemoNote: "Deze beschrijving is voorlopig geschreven voor de portfolio-demo.",

    reviewsEyebrow: "WOORDEN VAN KLANTEN",
    reviewsTitle: "Liefde voor de <em>frituur.</em>",
    reviewDemo: "Selectie van aangeleverde reviews · demo",
    reviewDisclaimer: "Reviews zijn aangeleverd voor deze portfolio-demo. Controleer de bron, tekst en toestemming voordat je ze op een officiële website publiceert.",

    hoursEyebrow: "KOM GERUST BINNEN",
    hoursTitle: "Wanneer heb je <em>goesting?</em>",
    hoursText: "Plan je bezoek op een moment dat het jou past. De onderstaande openingsuren zijn aangeleverd voor deze demo.",
    routeLink: "Plan je route in Google Maps ↗",
    openingHours: "Openingsuren",
    demoLabel: "DEMO-GEGEVENS",

    monday: "Maandag",
    tuesday: "Dinsdag",
    wednesday: "Woensdag",
    thursday: "Donderdag",
    friday: "Vrijdag",
    saturday: "Zaterdag",
    sunday: "Zondag",
    closed: "Gesloten",

    contactEyebrow: "TOT BINNENKORT",
    contactTitle: "Je frietjes<br><em>wachten op je.</em>",
    contactText: "Vind ons in Zele of bel even voor meer informatie.",
    routeButton: "Plan je route",
    contactDemoNote: "Controleer adres en telefoonnummer voordat je deze demo officieel gebruikt.",

    footerText: "Portfolio-demo voor Frituur Den Heikant.",
    backTop: "Terug naar boven ↑"
  },

  en: {
    navMenu: "Menu",
    navAbout: "About",
    navReviews: "Reviews",
    navHours: "Opening hours",
    navContact: "Contact & directions ↗",

    heroTitle: "Golden fries.<br><em>Pure comfort.</em>",
    heroText: "Craving a good portion of fries? Explore the Frituur Den Heikant menu and visit us in Zele.",
    heroButton: "Explore the menu",
    hoursLink: "View opening hours →",

    infoOne: "Fries & snacks",
    infoOneSub: "Fry-shop favourites",
    infoTwo: "In Zele",
    infoThree: "Drop by",
    infoThreeSub: "Check opening hours",

    menuEyebrow: "ON THE MENU",
    menuTitle: "What are you <em>craving?</em>",
    menuIntro: "From a portion of fries to a tasty snack. Discover a selection of fry-shop classics.",
    demoMenuTitle: "Portfolio sample menu",
    demoMenuText: "Check all prices and products against the official menu before publishing this website.",

    filterAll: "All",
    filterFries: "Fries",
    filterSauces: "Sauces",
    filterSnacks: "Snacks",
    filterBurgers: "Burgers",
    filterDrinks: "Drinks",

    friesTitle: "Fresh fries",
    friesDescription: "Choose your portion.",
    smulboxDescription: "A hearty portion.",
    saucesTitle: "Sauces",
    saucesDescription: "Make your fries complete.",
    sauceFries: "Sauce on fries",
    saucePot: "Sauce in a pot",
    snackDescription: "A fry-shop favourite.",
    otherSnacks: "More snacks",
    otherSnacksDescription: "Boulet Heikant, viandel, kipkorn, bami and cheese croquette.",
    burgerDescription: "Several varieties.",
    drinksTitle: "Soft drinks",
    priceCheck: "Price to confirm",
    menuFootnote: "This is a sample selection, not the complete menu. Check all prices before publishing.",

    aboutEyebrow: "FRY SHOP IN ZELE",
    aboutTitle: "A familiar stop for <em>fries and snacks.</em>",
    aboutText: "You'll find Frituur Den Heikant at Heikant 265 in Zele. Stop by for fries, a snack or your favourite sauce.",
    aboutButton: "Plan your visit",
    aboutDemoNote: "This description was written for the portfolio demo.",

    reviewsEyebrow: "CUSTOMER WORDS",
    reviewsTitle: "A little love for the <em>fry shop.</em>",
    reviewDemo: "Selection of supplied reviews · demo",
    reviewDisclaimer: "Reviews were supplied for this portfolio demo. Check the source, wording and permission before publishing them on an official website.",

    hoursEyebrow: "COME ON IN",
    hoursTitle: "When are you <em>craving fries?</em>",
    hoursText: "Plan your visit at a time that suits you. The opening hours below were supplied for this demo.",
    routeLink: "Get directions in Google Maps ↗",
    openingHours: "Opening hours",
    demoLabel: "DEMO DETAILS",

    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",

    contactEyebrow: "SEE YOU SOON",
    contactTitle: "Your fries<br><em>are waiting.</em>",
    contactText: "Find us in Zele or give us a call for more information.",
    routeButton: "Get directions",
    contactDemoNote: "Verify the address and phone number before using this demo officially.",

    footerText: "Portfolio demo for Frituur Den Heikant.",
    backTop: "Back to top ↑"
  }
};

const languageButton = document.querySelector(".language-button");
let currentLanguage = "nl";

function changeLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];

    if (translation !== undefined) {
      element.innerHTML = translation;
    }
  });

  if (languageButton) {
    languageButton.textContent = language === "nl" ? "EN" : "NL";
  }
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    changeLanguage(currentLanguage === "nl" ? "en" : "nl");
  });
}

