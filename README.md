# EcoSolapur 🌱♻️

**Solapur's First Smart E-Waste Management Platform**

A fully static website built for the **AS-1201 Course Project (PFA)** — Smart E-Waste Management System for Solapur, Maharashtra, India.

---

## 🌐 Live Demo

**[View Website → https://YOUR-USERNAME.github.io/ecosolapur](https://YOUR-USERNAME.github.io/ecosolapur)**

> Replace `YOUR-USERNAME` with your GitHub username after deployment.

---

## 🗂️ Project Structure

```
ecosolapur/
├── index.html          ← Main website (single page)
├── css/
│   └── styles.css      ← All styles
├── js/
│   ├── translations.js ← English & Marathi translations
│   └── app.js          ← Interactivity & language switching
├── README.md           ← This file
└── .nojekyll           ← GitHub Pages config
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 Bilingual | Toggle between **English** and **मराठी** (Marathi) |
| 📍 Centers Map | 6 certified e-waste collection centers in Solapur |
| 📦 Pickup Booking | Doorstep pickup scheduling form |
| 🚨 Report Dumping | Illegal dumping report form with severity levels |
| 🎁 Rewards | 3-tier reward program (Eco Starter → Green Champion → EcoHero) |
| ♻️ SDG Aligned | SDG Goals 3, 11, 12 + Green Chemistry Principles |
| 📱 Responsive | Works on mobile, tablet & desktop |

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Method 1 — GitHub.com (Easiest)

1. Go to **[github.com](https://github.com)** and log in
2. Click **"New repository"** (green button)
3. Name it: `ecosolapur`
4. Set to **Public**, click **Create repository**
5. Click **"uploading an existing file"**
6. Upload ALL files keeping the folder structure:
   - `index.html`
   - `css/styles.css`
   - `js/translations.js`
   - `js/app.js`
   - `README.md`
   - `.nojekyll`
7. Click **Commit changes**
8. Go to **Settings → Pages**
9. Under **Source**, select **Deploy from a branch**
10. Choose **main** branch, **/ (root)** folder → Click **Save**
11. Wait ~2 minutes → Your site is live at `https://YOUR-USERNAME.github.io/ecosolapur`

### Method 2 — Git CLI

```bash
git clone https://github.com/YOUR-USERNAME/ecosolapur.git
# Copy all project files into the cloned folder
git add .
git commit -m "Initial EcoSolapur website"
git push origin main
```

Then enable GitHub Pages in Settings → Pages.

---

## 🌐 Language Support

The website supports two languages switchable via the top-right buttons:

- **EN** → English (default)
- **मराठी** → Marathi (full translation of all text, labels, forms, buttons)

To add more languages, edit `js/translations.js` and add a new language object.

---

## 📋 Sections

1. **Hero** — Landing with stats & call-to-action
2. **Problem** — Why e-waste is a crisis in Solapur
3. **Solution** — App features & mobile mockup
4. **How It Works** — 7-step user journey
5. **Collection Centers** — 6 centers with addresses & hours
6. **Awareness Hub** — Education on e-waste, toxins, laws
7. **Report Dumping** — Community reporting form
8. **Rewards Program** — Eco Starter / Green Champion / EcoHero
9. **SDG & Green Chemistry** — Sustainability alignment
10. **Book Pickup** — Doorstep pickup scheduling

---

## 📚 References

- E-Waste Management Rules, India 2016 (amended 2022)
- CPCB Annual E-Waste Reports
- UN SDG Framework — Goals 3, 11, 12
- AS-1201 Course PFA Template

---

## 🎓 Academic Info

- **Course:** AS-1201 — Project Feasibility Analysis (PFA)
- **Project:** Smart E-Waste Management System for Solapur
- **Review Date:** May 6, 2026
- **Marks:** 10

---

*Built with pure HTML, CSS & JavaScript — no frameworks, no dependencies, works on GitHub Pages.*
