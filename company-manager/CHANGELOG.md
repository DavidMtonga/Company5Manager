# 📋 CHANGELOG.md

A changelog to track development progress, environment setup, and Git usage for the Company Manager React.js + Vite project.

---

## 🔄 Project Setup & Vite Commands

### Create a new React project using Vite
```bash
npm create vite@latest company-manager -- --template react
cd company-manager
```

### Install dependencies
```bash
npm install
```

### Install and configure Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Add Tailwind directives in src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start development server
```bash
npm run dev
```

---

## 🌐 GitHub Short Commands

### Initialize a new repo
```bash
git init
git remote add origin https://github.com/your-username/your-repo.git
```

### Check status and track files
```bash
git status
git add .
git commit -m "Initial commit"
```

### Push code to GitHub
```bash
git push -u origin main
```

### Pull latest changes from GitHub
```bash
git pull origin main
```

---

## 📅 Development Progress Log

### [2025-07-13] ✅ Initial Project Setup
- Initialized Vite project with React template
- Installed Tailwind CSS and configured postcss/tailwind config
- Created base folder structure: components, pages, routes
- Added working layout: Sidebar + Header + Pages + Routing

### [2025-07-14] 🧱 Landing Page and Routing Complete
- Created landing page (Dashboard)
- Connected all pages via React Router
- Styled pages using Tailwind CSS

### [Next Steps]
- Implement employee form (Hire page)
- Build RESTful API endpoints (backend)
- Integrate frontend with backend using Axios
- Deploy to Vercel / Render

---

✅ Remember to update this changelog after every major change or milestone.
