<div align="center">

# 🏛️ BMS College of Engineering — Official Website

**A full-stack, production-ready university portal built for modern web standards.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EE4B96?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white&style=flat-square)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white&style=flat-square)](https://mongoosejs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

BrowserBattle404 is a premium, full-stack university website for **BMS College of Engineering (BMSCE)**. It features a richly animated React frontend powered by Framer Motion and a robust Node.js/Express REST API backend connected to MongoDB. The project is architected for scalability — easy to extend, simple to deploy, and ready for real-world institutional use.

---

## ✨ Features

### Frontend
| Feature | Description |
|---|---|
| 🎬 **Cinematic Hero** | Full-screen animated hero with particle effects, rotating taglines, and parallax scroll |
| 🌙 **Dark Mode** | Smooth, persistent theme switching stored in `localStorage` |
| 📜 **Scroll Animations** | 50+ Framer Motion scroll-triggered reveals, staggered entrances, and parallax effects |
| 🔢 **Animated Counters** | Scroll-driven number counters via `react-countup` |
| 🖼️ **Interactive Gallery** | Clickable campus photo gallery with a lightbox viewer |
| 📊 **Progress Bar** | Animated scroll progress indicator in gold gradient |
| ⚡ **Loading Screen** | Premium branded intro animation on first visit |
| 📱 **Fully Responsive** | Carefully tuned for mobile, tablet, and desktop viewports |
| 🧭 **Sticky Navbar** | Dropdowns, mobile hamburger menu, and active-link highlighting |
| 📄 **11 Full Pages** | Home, About, Departments, Academics, Admissions, Placements, Research, Campus Life, Students, Alumni, Contact |

### Backend
| Feature | Description |
|---|---|
| 🔐 **JWT Auth** | Secure admin authentication with `bcryptjs` + `jsonwebtoken` |
| 🗄️ **MongoDB Models** | 13 Mongoose data models covering all major university entities |
| 🌐 **RESTful API** | 12 modular Express route groups with standard CRUD operations |
| 🛡️ **CORS Protection** | Configurable multi-origin allowlist via environment variables |
| ⚠️ **Global Error Handler** | Centralized error middleware for consistent API error responses |

---

## 🏗️ Architecture

```
BrowserBattle404/
├── frontend/         # React + Vite SPA
└── BACKEND/          # Node.js + Express REST API
```

The frontend and backend are **fully decoupled**. The frontend communicates with the backend exclusively through the REST API, making it trivial to swap out either layer or deploy them independently.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI component framework |
| [Vite](https://vitejs.dev/) | 5 | Build tool & dev server |
| [React Router](https://reactrouter.com/) | v6 | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations & transitions |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Lucide React](https://lucide.dev/) | latest | Icon library |
| [React CountUp](https://github.com/glennreyes/react-countup) | 6 | Scroll-triggered number animations |
| [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) | 9 | Scroll trigger detection |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18+ | JavaScript runtime |
| [Express](https://expressjs.com/) | 5 | Web framework |
| [Mongoose](https://mongoosejs.com/) | 9 | MongoDB ODM |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | 9 | JWT authentication |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | 3 | Password hashing |
| [cors](https://github.com/expressjs/cors) | 2 | Cross-origin resource sharing |
| [dotenv](https://github.com/motdotla/dotenv) | 17 | Environment variable management |
| [nodemon](https://nodemon.io/) | 3 | Dev server auto-reload |
| [slugify](https://github.com/simov/slugify) | 1 | URL-friendly slug generation |
| [validator](https://github.com/validatorjs/validator.js) | 13 | String validation helpers |

---

## 📁 Project Structure

```
BrowserBattle404/
│
├── frontend/                        # React SPA
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   └── src/
│       ├── main.jsx                 # Application entry point
│       ├── App.jsx                  # Router, dark mode, loading state
│       ├── api.js                   # Centralized API client
│       ├── index.css                # Global styles + Tailwind base
│       ├── components/
│       │   ├── Navbar.jsx           # Sticky nav with dropdowns & mobile menu
│       │   ├── Footer.jsx           # Site-wide footer
│       │   ├── LoadingScreen.jsx    # Branded intro animation
│       │   ├── ScrollProgress.jsx   # Scroll-position progress bar
│       │   ├── DarkModeToggle.jsx   # Light/dark theme switcher
│       │   ├── AnimatedSection.jsx  # Reusable scroll-reveal wrapper
│       │   ├── AnimatedCounter.jsx  # CountUp with intersection trigger
│       │   └── PageHero.jsx         # Inner-page hero banner
│       └── pages/
│           ├── Home.jsx
│           ├── About.jsx
│           ├── Departments.jsx
│           ├── Academics.jsx
│           ├── Admissions.jsx
│           ├── Placements.jsx
│           ├── Research.jsx
│           ├── CampusLife.jsx
│           ├── Students.jsx
│           ├── Alumni.jsx
│           └── Contact.jsx
│
└── BACKEND/                         # Express REST API
    ├── server.js                    # Server entry point
    ├── .env.example
    ├── package.json
    └── src/
        ├── app.js                   # Express app, middleware, route mounting
        ├── db/
        │   └── db.js                # MongoDB connection
        ├── models/                  # Mongoose schemas
        │   ├── index.js
        │   ├── admin.model.js
        │   ├── page.model.js
        │   ├── department.model.js
        │   ├── academic.model.js
        │   ├── admission.model.js
        │   ├── placement.model.js
        │   ├── research.model.js
        │   ├── campusLife.model.js
        │   ├── student.model.js
        │   ├── alumni.model.js
        │   ├── gallery.model.js
        │   └── contact.model.js
        ├── routes/                  # Route definitions (12 route groups)
        ├── controllers/             # Business logic handlers
        ├── middleware/
        │   └── errorHandler.js      # Global error middleware
        └── utils/                   # Shared utility helpers
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/BrowserBattle404.git
cd BrowserBattle404
```

---

### 2. Start the Backend

```bash
cd BACKEND

# Install dependencies
npm install

# Copy environment variables and fill in your values
cp .env.example .env

# Start the development server
npm run dev
```

> The API will be available at `http://localhost:3000`

---

### 3. Start the Frontend

Open a **new terminal tab** and run:

```bash
cd frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev
```

> The app will be available at `http://localhost:5173`

---

## 🔑 Environment Variables

### Backend — `BACKEND/.env`

| Variable | Default | Description |
|---|---|---|
| `MONGO_URI` | — | MongoDB connection string |
| `PORT` | `3000` | Port the API server listens on |
| `JWT_SECRET` | — | Secret key for signing JWTs (use a long random string) |
| `JWT_EXPIRES_IN` | `7d` | JWT expiry duration |
| `CORS_ORIGIN` | `http://localhost:5173` | Comma-separated list of allowed frontend origins |

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/bmsce
PORT=3000
JWT_SECRET=your_very_long_random_secret_here
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173,https://yourdomain.com
```

### Frontend — `frontend/.env`

| Variable | Default | Description |
|---|---|---|
| `VITE_API_BASE_URL` | `http://localhost:3000/api` | Backend API base URL |
| `VITE_APP_NAME` | `BMS College of Engineering` | Application display name |
| `VITE_GOOGLE_MAPS_KEY` | — | Google Maps API key (Contact page) |
| `VITE_GA_ID` | — | Google Analytics measurement ID (optional) |

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=BMS College of Engineering
VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key
VITE_GA_ID=G-XXXXXXXXXX
```

---

## 🌐 API Reference

All API routes are prefixed with `/api`.

| Resource | Base Path | Methods |
|---|---|---|
| Pages | `/api/pages` | GET, POST, PUT, DELETE |
| Departments | `/api/departments` | GET, POST, PUT, DELETE |
| Academics | `/api/academics` | GET, POST, PUT, DELETE |
| Admissions | `/api/admissions` | GET, POST, PUT, DELETE |
| Placements | `/api/placements` | GET, POST, PUT, DELETE |
| Research | `/api/research` | GET, POST, PUT, DELETE |
| Campus Life | `/api/campus-life` | GET, POST, PUT, DELETE |
| Students | `/api/students` | GET, POST, PUT, DELETE |
| Alumni | `/api/alumni` | GET, POST, PUT, DELETE |
| Gallery | `/api/gallery` | GET, POST, PUT, DELETE |
| Contact | `/api/contact` | POST |
| Auth | `/api/auth` | POST (login, register) |

> **Authentication**: Protected routes require a `Bearer <token>` header obtained from `/api/auth/login`.

---

## 🎨 Customization

### Brand Colors (`frontend/tailwind.config.js`)

| Token | Hex | Usage |
|---|---|---|
| Primary Navy | `#0a1628` | Background, text |
| Gold Accent | `#C9A84C` | Highlights, CTAs |
| Deep Dark | `#020810` | Dark mode base |

### Typography (`frontend/index.html`)

| Role | Font |
|---|---|
| Display / Headings | Cormorant Garamond |
| Body / UI | DM Sans |
| Monospace / Code | DM Mono |

### Swapping the Hero Video

In `frontend/src/pages/Home.jsx`, replace the gradient placeholder with a real video:

```jsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

---

## 📦 Deployment

### Frontend (Static — Vercel / Netlify / Cloudflare Pages)

```bash
cd frontend
npm run build
# Deploy the generated `dist/` folder
```

### Backend (Node.js — Railway / Render / Fly.io)

```bash
cd BACKEND
npm start
```

Set all environment variables in your hosting platform's dashboard. Ensure `CORS_ORIGIN` includes your live frontend URL.

### Recommended Stack

| Layer | Service |
|---|---|
| Frontend | [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) |
| Backend API | [Railway](https://railway.app/) or [Render](https://render.com/) |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) (Free Tier) |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch — `git checkout -b feature/your-feature`
3. **Commit** your changes — `git commit -m 'feat: add your feature'`
4. **Push** to the branch — `git push origin feature/your-feature`
5. **Open** a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

<div align="center">

*Built with ❤️ for BMS College of Engineering — Est. 1946*

</div>
