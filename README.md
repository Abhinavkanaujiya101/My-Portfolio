<div align="center">

# 🌌 Abhinav Kanaujiya | Personal Portfolio

<p align="center">
  <strong>A modern, glassmorphic portfolio showcasing systems programming, full-stack engineering, and algorithmic excellence.</strong>
</p>

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Abhinavkanaujiya101/My-Portfolio?style=for-the-badge&color=8B5CF6)](https://github.com/Abhinavkanaujiya101/My-Portfolio/stargazers)

<br />

[Explore Projects](#-featured-projects) • [Key Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Contact](#-connect-with-me)

---

</div>

## 📌 Overview

This repository contains the source code for the personal developer portfolio of **Abhinav Kanaujiya**, a Computer Science and Engineering student at Pranveer Singh Institute of Technology (PSIT), Kanpur.

Built with **React 19**, **React Router v7**, and **Vite**, this website incorporates custom glassmorphic styling, smooth micro-interactions, responsive typography, and an interactive UI highlighting:
- 🚀 **Featured Projects** across Full-Stack Web Development, AI Orchestration, and Quantitative Finance.
- 🧠 **Skills & Competencies** in C++, Systems Programming, Data Structures & Algorithms, and Full-Stack Engineering.
- 🎓 **Education & Certifications** (Oracle Cloud Infrastructure, Oracle GenAI, HackerRank Gold Badges).
- 📬 **Interactive Transmission Console** for direct inquiries and message delivery.

---

## ✨ Features

- **💎 Dark Glassmorphic Aesthetic**: Bespoke dark UI with custom gradient borders, frosted glass effects, ambient backdrops, and glowing accents.
- **⚡ Blazing Fast Performance**: Powered by Vite 8 with instant HMR and optimized asset bundling.
- **📱 Fluid & Responsive**: Custom CSS responsive layouts tailored for mobile, tablet, and desktop screens with seamless transitions.
- **🔍 Interactive Project Modal System**: Modal view for deep dives into project architectures, tech stacks, live demos, and GitHub repositories.
- **📊 Technical Proficiency Metrics**: Visualized proficiency bars and categorized skill sets covering low-level languages, core CS subjects, and modern web frameworks.
- **📨 Functional Transmission Form**: Engaging contact interface with live client-side validation and transmission confirmations.

---

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Design System, CSS Variables, Glassmorphism, Responsive Grid & Flexbox)
- **Code Linter**: [Oxlint](https://oxc.rs/)

### Design & Typography
- **Primary Typography**: *Plus Jakarta Sans* & *Inter*
- **Monospace Elements**: *JetBrains Mono*
- **Icons**: Custom SVG & Unicode glyphs

---

## 📂 Project Structure

```bash
My_Portfolio/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Media and profile assets
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Global footer with social links & status
│   │   ├── Navbar.jsx      # Responsive navigation header
│   │   ├── ProjectModal.jsx# Detailed project preview modal
│   │   ├── SketchButton.jsx# Dynamic interactive action button
│   │   └── SketchCard.jsx  # Glassmorphism container card
│   ├── pages/              # Primary application views
│   │   ├── About.jsx       # Biography, education, and credentials
│   │   ├── Contact.jsx     # Contact cards and message transmission form
│   │   ├── Home.jsx        # Landing hero, stats, and quick links
│   │   ├── Projects.jsx    # Projects showcase & modal triggers
│   │   └── Skills.jsx      # Categorized technical competencies
│   ├── App.css             # Page-specific styling & utilities
│   ├── App.jsx             # Main layout, route declarations & global wrapper
│   ├── index.css           # Global design tokens, animations & resets
│   └── main.jsx            # Application entry point
├── .gitignore
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # HTML shell & SEO meta configuration
├── package.json            # Project dependencies and script definitions
├── README.md               # Repository documentation
└── vite.config.js          # Vite build pipeline setup
```

---

## 💻 Featured Projects

| Project | Category | Key Technologies | Repository |
| :--- | :--- | :--- | :--- |
| **Secure Chat App** | Full-Stack Web App | React, Node.js, Express, Socket.io, Nodemailer | [GitHub](https://github.com/Abhinavkanaujiya101/Secure-chat-app) |
| **OmniBridge 🌉** | AI Gateway Platform | Node.js, Express, Next.js, WebSockets, Supabase | [GitHub](https://github.com/Abhinavkanaujiya101/OmniBridge) |
| **GitBoy ⚡** | Developer Analytics | Next.js, React, Tailwind CSS, GitHub GraphQL API | [GitHub](https://github.com/Abhinavkanaujiya101/GitBoy) |
| **AlphaForge 📈** | Quantitative Strategy | Next.js, TypeScript, React, Financial Modeling | [GitHub](https://github.com/Abhinavkanaujiya101/AlphaForge) |

---

## 🏆 Certifications & Highlights

- **HackerRank 5★ Gold Badge**: C++ Language Proficiency & Systems Programming
- **HackerRank 3★ Badge**: Algorithmic Problem Solving & Data Structures
- **Oracle Certified Cloud Associate**: Oracle Cloud Infrastructure (OCI) Foundations
- **Oracle Certified GenAI Associate**: Generative AI Foundations & Architecture
- **LeetCode**: 200+ solved algorithmic problems across Dynamic Programming, Graphs, and Trees

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18+ recommended).

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhinavkanaujiya101/My-Portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd My-Portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

To launch the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

To compile and optimize the application for production:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

### Code Quality

Run the Oxlint static analyzer:

```bash
npm run lint
```

---

## 📬 Connect With Me

- **Portfolio**: [Abhinav Kanaujiya](https://github.com/Abhinavkanaujiya101/My-Portfolio)
- **GitHub**: [@Abhinavkanaujiya101](https://github.com/Abhinavkanaujiya101)
- **LinkedIn**: [Abhinav Kanaujiya](https://www.linkedin.com/in/abhinav-kanaujiya-781422343/)
- **Email**: [abhinavkanaujia101@gmail.com](mailto:abhinavkanaujia101@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it as inspiration for your own portfolio.
