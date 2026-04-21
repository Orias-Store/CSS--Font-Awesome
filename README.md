# Profonts - Font Awesome Tracker

A lightweight, lightning-fast, and modern web application to track, search, and discover the latest icons and updates from Font Awesome Pro.

![Profonts](https://img.shields.io/badge/UI-Modern-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20|%20CSS3%20|%20Vanilla%20JS-success?style=for-the-badge)
![Data](https://img.shields.io/badge/Data-Async%20JSON-orange?style=for-the-badge)

## Key Features

- **Modern Fluid UI:** Inspired by top-tier design sites like Vercel and Tailwind UI, featuring Glassmorphism, smooth hover transitions, and gradient visual elements.
- **Dynamic Rendering:** Say goodbye to hardcoded HTML. All version histories and icon lists are loaded dynamically from a separate data.json database.
- **Zero Dependencies:** Built entirely with native HTML5, modern CSS3 (Variables, Grid, Flex), and Vanilla JavaScript (ES6+). No heavy frameworks like React or Vue needed.
- **Responsive Design:** Seamlessly adapts to desktop, tablet, and mobile screens.
- **Extensible:** Easily add new icons by just updating the JSON object—no DOM manipulation required.

## How to Run locally

Because the tracker fetches data asynchronously from data.json, you cannot simply open index.html via ile:// protocol due to browser CORS policies.

1. Clone or download this repository.
2. Open the project folder in **Visual Studio Code**.
3. Install the **Live Server** extension.
4. Right-click on index.html and select **"Open with Live Server"**.
5. Enjoy the app at http://127.0.0.1:5500/.

## Project Structure

For a detailed look into the codebase and data flow, please view our [Architecture Document](.github/documents/ARCHITECTURE.md).

```
CSS--FONT--AWESOME/
├── .github/
│   ├── documents/
│   │   └── ARCHITECTURE.md     # This documentation
│   └── workflows/
│       └── static.yml          # Github static workflow
│
├── assest/
│   ├── jsons/
│   │   └── data.json           # Mock database 
│   ├── styles/
│   │   ├── style.css           # Main stylesheet
│   │   └── import.css          # External imports
│   └── scripts/
│       └── script.js           # Controller logic
│
├── sources/
│   ├── css.css                 # Fonts stylesheet
│   └── fonts.css               # Fonts resources
├── .gitignore
├── index.html                  # Main entry point
└── README.md
```

## Changing Data

To update the library or add a new Font Awesome version, simply edit the data.json file. The frontend JS will automatically catch the updates and render them on the next page load.

---

*© 2026 Profonts. Built for performance and aesthetics.*
