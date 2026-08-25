# 🎬 Creative Marketing & Video Editing Portfolio

A dynamic, fully responsive digital showcase built for a Marketing and Video Content Creator ("FERMnke"). This platform combines modern semantic web development with integrated multi-language support (i18n) and an optimized video delivery carousel.

## 🚀 Key Technical Features

- **Smart Video Player Lifecycle Control:** Features a custom JavaScript integration engine within the carousel runtime. It injects an automated event trigger (`pauseAllVideos`) that flushes and resets Google Drive embed iframe streams upon slide transitions, preventing simultaneous audio overlapping without external player APIs.
- **Vanilla Localization Engine (i18n):** Powered by a decoupled JavaScript dictionary mapping that instantly toggles text nodes across the entire DOM structure between English (EN) and Spanish (ES) seamlessly.
- **Creative Typography & Fluid UI/UX:** Natively leverages Google Fonts integration (*Gochi Hand*) to establish an organic, highly engaging aesthetic tailored for digital content consumers, wrapped in a mobile-first responsive grid.
- **Conversion-Oriented Action Pipelines:** Strategically placed call-to-action hooks connecting directly to high-engagement social ecosystems (TikTok) and instant client messaging channels (WhatsApp API).

## 🛠️ Technology Stack

- **Structure & Layout:** HTML5 (Semantic elements)
- **Styling Architecture:** CSS3 (Custom responsive flex-grids, smooth transitions, and viewport-adapted sizing presets)
- **Application Logic:** Vanilla JavaScript (ES6 Modules, automated carousel carousels, iframe lifecycle listeners)

---

## 📦 Directory Structure

```
marketing-portfolio/
│
├── index.html          # Core document architecture and structural translation nodes
├── css/
│   └── styles.css      # Visual tokens, typography rules, and media-query break arrays
└── js/
    └── main.js         # Interface automation, translation datasets, and iframe controllers
```

---

## 💻 Local Development & Quick Start

Since this platform is engineered using standard browser web specifications, it runs entirely client-side with no build steps required.

### Quick Launch
1. Clone this repository locally.
2. Open the root `index.html` file in any modern web browser terminal.

### Production Environment Emulation
To review the asynchronous embedded layout transitions inside an HTTP pipeline, execute one of the following command setups:

```bash
# Python Environment
python -m http.server 8000

# Node.js Runtime
npx http-server -p 8000
```
Once initialized, establish a loopback connection on your machine via `http://localhost:8000`.

## 📄 License

This digital project is open-source software distributed under the terms of the **MIT License**.
