# Architecture Overview

This document outlines the technical architecture and directory structure of the **Profonts / Font Awesome Tracker** application.

## 1. High-Level Concept
The project is a lightweight, frontend-only Web Application. It is built to display the latest Font Awesome updates through a modern, responsive, and glassmorphism-inspired UI. It relies on standard web technologies without the overhead of heavy frameworks like React, Angular, or Vue, ensuring extreme performance and simplicity.

## 2. Tech Stack
- **Structure:** Native HTML5
- **Styling:** CSS3 (CSS Variables, Flexbox, CSS Grid, Media Queries)
- **Logic & Interactivity:** Vanilla JavaScript (ES6+ with Async/Await, Fetch API)
- **Data Layer:** Static JSON file (ssets/jsons/data.json)
- **Icon Library:** Local Font Awesome Pro (sources/ directory)

## 3. Directory Structure
`	ext
/
├── .github/                     
│   ├── documents/               # Technical architecture & docs
│   │   └── ARCHITECTURE.md      
│   └── workflows/               # CI/CD pipelines for deployment
│       └── static.yml           
├── assets/                      
│   ├── jsons/
│   │   └── data.json            # Mock DB for icons and version history
│   ├── scripts/                 
│   │   └── script.js            # Controller for data fetching and DOM rendering
│   └── styles/                  
│       ├── import.css           # External fonts imports
│       └── style.css            # Glassmorphism and responsive styling
├── sources/                     # Local Font Awesome core files
│   ├── css/                     
│   │   └── all.css              # Main Font Awesome CSS
│   └── fonts/                   # Font Awesome font files (.woff2, .ttf, etc.)
├── release/                     # Prepared release packages
├── index.html                   # Main entry point layout
└── README.md                    # Project documentation
`

## 4. Data Flow & Rendering Lifecycle
1. **Initial Load:** The client requests index.html, which parses the core DOM structure, requests CSS files from ssets/styles/ and sources/css/, and downloads ssets/scripts/script.js.
2. **Initialization:** The DOMContentLoaded event fires, triggering the loadAndRenderUpdates() function.
3. **Data Fetching:** The application makes a etch() API request to retrieve the ssets/jsons/data.json file asynchronously.
4. **Data Parsing:** The JSON response is parsed into JavaScript objects.
5. **DOM Construction:** The JavaScript execution iterates through the fetched dataset and dynamically generates HTML elements such as version headers, status badges, and icon grids.
6. **UI Injection:** The constructed DOM fragments are appended and injected directly into the <main id="updates-container"> block.

## 5. Core Design Principles
- **Separation of Concerns:** 
  - *Model*: ssets/jsons/data.json houses the database independently.
  - *View*: index.html implements the macro-layout and CSS manages thematic rules and visual states.
  - *Controller*: ssets/scripts/script.js brokers data to the View.
- **Maintainability:** Adding new icons involves expanding the JSON array. No HTML structural updates needed.
- **Fluid Responsiveness:** The UI adapts to device sizes seamlessly through CSS Grid epeat(auto-fill, minmax(x, 1fr)).
