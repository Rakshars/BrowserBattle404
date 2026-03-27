# BMS College of Engineering — Website Frontend

A premium, production-ready university website built with React, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **11 Full Pages**: Home, About, Departments, Academics, Admissions, Placements, Research, Campus Life, Students, Alumni, Contact
- **Cinematic Hero**: Full-screen animated hero with particle effects, rotating taglines, and parallax scroll
- **Framer Motion Animations**: Scroll-triggered reveals, staggered entrances, parallax effects
- **Dark Mode Toggle**: Smooth theme switching with local persistence
- **Animated Counters**: Number counters that trigger on scroll
- **Interactive Gallery**: Clickable campus gallery with lightbox
- **Accordion UI**: Departments and FAQ accordions
- **Contact Form**: Ready for backend integration
- **Scroll Progress Bar**: Animated top progress indicator
- **Loading Screen**: Premium branded intro animation
- **Sticky Navbar**: With dropdowns and mobile hamburger menu
- **Fully Responsive**: Mobile + tablet + desktop

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Framer Motion | Animations & transitions |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| React CountUp | Number animations |
| React Intersection Observer | Scroll triggers |
| Vite | Build tool |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone / unzip the project
cd bmsce-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will run at `http://localhost:5173`

---

## 📁 Project Structure

```
bmsce/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Router + dark mode + loading
    ├── index.css             # Global styles + Tailwind
    ├── components/
    │   ├── Navbar.jsx        # Sticky navbar with dropdowns
    │   ├── Footer.jsx        # Site footer
    │   ├── LoadingScreen.jsx # Intro loading animation
    │   ├── ScrollProgress.jsx # Top scroll indicator
    │   ├── DarkModeToggle.jsx # Theme toggle button
    │   ├── AnimatedSection.jsx # Reusable scroll reveal
    │   ├── AnimatedCounter.jsx # CountUp component
    │   └── PageHero.jsx      # Inner page hero banner
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Departments.jsx
        ├── Academics.jsx
        ├── Admissions.jsx
        ├── Placements.jsx
        ├── Research.jsx
        ├── CampusLife.jsx
        ├── Students.jsx
        ├── Alumni.jsx
        └── Contact.jsx
```

---

## 🔌 Backend Integration

The project is structured for easy API integration:

### Contact Form (Contact.jsx)
Replace the `setTimeout` mock with a real API call:
```js
// In Contact.jsx handleSubmit():
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Dynamic Data
Each page uses static arrays (e.g., `departments`, `news`, `placements`). Replace these with:
```js
const [data, setData] = useState([]);
useEffect(() => {
  fetch('/api/departments').then(r => r.json()).then(setData);
}, []);
```

### Environment Variables
Create `.env`:
```
VITE_API_BASE_URL=https://your-backend.com/api
VITE_GOOGLE_MAPS_KEY=your_key_here
```

Use in code:
```js
const API = import.meta.env.VITE_API_BASE_URL;
```

---

## 🎨 Customization

### Colors (tailwind.config.js)
- Primary Navy: `#0a1628`
- Gold Accent: `#C9A84C`
- Deep Dark: `#020810`

### Fonts (index.html)
- Display: Cormorant Garamond
- Body: DM Sans
- Mono: DM Mono

### Real Video Hero
In `Home.jsx`, replace the gradient div with:
```jsx
<video
  autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

---

## 📦 Production Build

```bash
npm run build
# Output: dist/ folder — deploy to Netlify, Vercel, or any static host
```

For server-side rendering, migrate to Next.js by renaming pages to `app/` directory format.

---

## 🏆 Hackathon Highlights

1. **Loading Screen** — Branded animated intro
2. **Scroll Progress Bar** — Gold gradient indicator
3. **Dark Mode** — Instant toggle with smooth transition
4. **Animated Counters** — Scroll-triggered number reveals
5. **Interactive Gallery** — Lightbox photo viewer
6. **Video Hero Ready** — Parallax + fade-out on scroll
7. **Premium Animations** — 50+ Framer Motion interactions

---

*Built with ❤️ for BMSCE — Est. 1946*
