const content = {
  en: {
    title: "Dispose E-Waste The Right Way",
    subtitle: "Smart platform for Solapur",
    problemTitle: "Problem",
    problemDesc: "No proper system for e-waste disposal",
    ctaBtn: "Book Pickup"
  },

  mr: {
    title: "ई-कचरा योग्य प्रकारे टाका",
    subtitle: "सोलापूरसाठी स्मार्ट प्लॅटफॉर्म",
    problemTitle: "समस्या",
    problemDesc: "ई-कचरा टाकण्यासाठी योग्य व्यवस्था नाही",
    ctaBtn: "पिकअप बुक करा"
  }
};

function setLanguage(lang) {
  document.getElementById("title").innerText = content[lang].title;
  document.getElementById("subtitle").innerText = content[lang].subtitle;
  document.getElementById("problemTitle").innerText = content[lang].problemTitle;
  document.getElementById("problemDesc").innerText = content[lang].problemDesc;
  document.getElementById("ctaBtn").innerText = content[lang].ctaBtn;
}
