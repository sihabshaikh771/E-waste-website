const translations = {

  en: {
    hero_title: "Dispose E-Waste The Smart Way",
    hero_sub: "Protect Environment & Earn Rewards",
    btn_start: "Explore",

    what_title: "What is E-Waste?",
    what_desc: "E-waste includes discarded electronic devices like phones, laptops, TVs, batteries.",

    gen_title: "How E-Waste is Generated?",
    gen_desc: "Rapid technology upgrades, short device life cycles, and consumer demand create massive e-waste.",

    stat1: "Global E-Waste Generated (Tons)",
    stat2: "Economic Loss Per Year",
    stat3: "Toxic Chemicals Present",

    problem_title: "Problem in Solapur",
    problem_desc: "No proper system leads to illegal dumping and pollution.",

    cta_title: "Start Responsible Disposal Today",
    cta_btn: "Book Pickup"
  },

  mr: {
    hero_title: "ई-कचरा योग्य पद्धतीने व्यवस्थापित करा",
    hero_sub: "पर्यावरण वाचवा आणि बक्षिसे मिळवा",
    btn_start: "सुरू करा",

    what_title: "ई-कचरा म्हणजे काय?",
    what_desc: "मोबाईल, लॅपटॉप, टीव्ही यांसारखी इलेक्ट्रॉनिक उपकरणे टाकल्यावर तयार होणारा कचरा म्हणजे ई-कचरा.",

    gen_title: "ई-कचरा कसा तयार होतो?",
    gen_desc: "नवीन तंत्रज्ञान, लहान आयुष्य आणि जास्त वापर यामुळे ई-कचरा वाढतो.",

    stat1: "जगातील ई-कचरा (टन)",
    stat2: "आर्थिक नुकसान",
    stat3: "विषारी रसायने",

    problem_title: "सोलापूरमधील समस्या",
    problem_desc: "योग्य व्यवस्था नसल्याने बेकायदेशीर टाकणे वाढते.",

    cta_title: "आजच जबाबदारीने सुरुवात करा",
    cta_btn: "पिकअप बुक करा"
  }

};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.innerText = translations[lang][el.dataset.key];
  });
}
