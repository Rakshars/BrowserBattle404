<div align="center">

# 🏛️ BMS College of Engineering — Modern Portal
**A Premium, Full-Stack University Experience Built with React 18 & Node.js**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer_Motion-EE4B96?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?logo=mongodb&logoColor=white&style=flat-square)](https://www.mongodb.com/atlas)
[![Express](https://img.shields.io/badge/Backend-Express.js-000000?logo=express&logoColor=white&style=flat-square)](https://expressjs.com/)

[**Live Demo**](https://browser-battle404-1aw4.vercel.app/) • [**API Documentation**](#api-reference) • [**Setup Guide**](#-getting-started)

</div>

---

## 🌟 The Vision
The **BMSCE Modernization Project** transforms the traditional university web presence into a high-end, immersive digital experience. Designed for the Platinum Jubilee era, this portal bridges the gap between legacy institutional values and cutting-edge web performance.

---

## 🔥 Key Innovations

### 🎨 Design & Immersion
- **Cinematic Experience:** Immersive parallax heroes with glassmorphic UI elements and staggered text entrance animations.
- **Official Asset Integration:** 100% verified campus imagery and official logos scraped and optimized for high-density displays.
- **Dynamic Visualization:** Interactive placement and department statistics powered by **Recharts**, providing real-time insights into institutional success.
- **Micro-Interactions:** Custom-engineered scroll reveals, interactive card hover states, and smooth theme transitions.

### 📚 Academic & Campus Life
- **Smart Academics:** Advanced hash-scrolling and auto-accordion logic—instantly jump to UG/PG programs from any page.
- **Society Portals:** 12 detailed student society cards (ACM, GDG, Bullz Racing, etc.) with integrated official Instagram navigation.
- **Department Ecosystem:** Comprehensive 14-department grid with specialized modals featuring HOD data and research highlights.

### 🛡️ Full-Stack Backbone
- **Modular REST API:** 13 specialized Mongoose models ready for institutional data scaling.
- **Security:** JWT-based administrative authentication flow and centralized error handling.
- **Contact Sync:** Direct MongoDB integration for query management and student outreach.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + Vite (for lightning-fast HMR)
- **Styling:** Vanilla CSS + Tailwind Utility layer
- **Animations:** Framer Motion (ScrollTrigger patterns)
- **Icons:** Lucide React
- **Charts:** Recharts

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Deployment:** Render (API) & Vercel (Frontend)

---

## 📁 Project Structure

```text
BrowserBattle404/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── components/       # Navbar, Footer, Animated wrappers
│   │   └── pages/            # Core university pages (Home -> Contact)
│   └── public/
│       ├── gallery/          # Official campus imagery
│       └── clubs/            # Society branding assets
└── BACKEND/                  # REST API
    └── src/
        ├── models/           # 13 Institutional data schemas
        ├── controllers/      # Business logic handlers
        └── routes/           # API endpoints
```

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Rakshars/BrowserBattle404.git
npm install # Run in both /frontend and /BACKEND
```

### 2. Configure Environment
Create a `.env` in the **BACKEND** folder:
```env
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
JWT_SECRET=your_secret
CORS_ORIGIN=http://localhost:5173
```

### 3. Launch Development
**Backend:**
```bash
cd BACKEND && npm run dev
```
**Frontend:**
```bash
cd frontend && npm run dev
```

---

## 🌐 Deployment Logic
- **Architecture:** Fully decoupled Frontend/Backend.
- **CI/CD:** Automatic deployments via GitHub hooks on Vercel (FE) and Render (BE).
- **SSL:** Forced HTTPS across all endpoints.

---

<div align="center">

*Engineering Excellence Since 1946. Reimagined for 2026.*
**BMS College of Engineering — Modern Portal**

</div>
