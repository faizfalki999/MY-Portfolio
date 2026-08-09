# Faiz — Professional Portfolio & Creator Site

A modern, highly modular, aesthetic developer portfolio built with semantic HTML5, CSS custom properties, Tailwind CSS styling, and data-driven JavaScript architecture.

---

## 📁 Project Directory Structure

```text
portpo1/
│
├── index.html              # Main HTML entry point with semantic section landmarks
│
├── css/
│   ├── style.css           # Design tokens (:root variables), global reset & typography
│   ├── components.css      # Reusable wireframe boxes, navigation indicators & tab transitions
│   └── responsive.css      # Consolidated media queries & breakpoint overrides
│
├── js/
│   ├── config.js           # Central config (social links, contact info, asset paths)
│   ├── navigation.js       # Single-page tab state controller & active link switcher
│   ├── render.js           # Dynamic DOM renderer engine
│   ├── main.js             # Application initialization bootstrap
│   │
│   └── data/
│       ├── projects.js     # Data store for featured & upcoming projects
│       ├── videos.js       # Data store for YouTube tutorials & videos
│       ├── businesses.js   # Data store for business ventures
│       └── metrics.js      # Data store for hero section stat counters
│
├── assets/
│   ├── images/
│   │   └── hero.png        # Profile hero image asset
│   └── documents/
│       └── CV.docx         # Downloadable CV document
│
└── README.md               # Developer setup & editing instructions
```

---

## 🚀 Quick Editing Guide

### 1. How to Add a New Project
Open `js/data/projects.js` and append a new object to the `PROJECTS_DATA` array:

```javascript
{
  id: "my-new-project",
  title: "AI Smart Assistant",
  description: "An autonomous agent assistant integrated with speech synthesis.",
  tags: ["Python", "FastAPI", "React"],
  wireframeLabel: "[ AI Assistant ]",
  featured: true,
  status: "Completed",
  link: "https://github.com/faizfalki999"
}
```
*The Projects section on the page will automatically render the new card!*

---

### 2. How to Update Social Links & Contact Info
Open `js/config.js` and modify the `PORTFOLIO_CONFIG` object:

```javascript
socialLinks: {
  github: {
    name: "GitHub",
    url: "https://github.com/your-username"
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile"
  }
}
```

---

### 3. How to Update Metric Counters
Open `js/data/metrics.js` and modify the stats:

```javascript
{
  id: "projects-completed",
  value: "15+",
  label: "Projects Completed"
}
```

---

### 4. How to Add a YouTube Video
Open `js/data/videos.js` and append your video object:

```javascript
{
  id: "new-video-tutorial",
  title: "Building Microservices with Node.js",
  description: "Learn how to split monolithic apps into scalable microservices.",
  category: "Backend Development",
  duration: "18:45",
  link: "https://youtube.com/watch?v=..."
}
```

---

### 5. How to Change Colors & Design Tokens
Open `css/style.css` and update the CSS variables defined under `:root`:

```css
:root {
  --bg-dark: #09090B;
  --card-dark: #121214;
  --accent-purple: #C084FC;
}
```

---

## 🌐 Deployment

Simply upload all files to any static web host or platform:
- **GitHub Pages**: Push repository and enable Pages in repository settings.
- **Vercel**: Run `npx vercel` or link repository.
- **Netlify**: Drag & drop the directory into Netlify app dashboard.
