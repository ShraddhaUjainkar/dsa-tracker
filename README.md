## DSA Tracker
DSA Progress Tracker is a lightweight web app built with Next.js to help developers track their Data Structures &amp; Algorithms practice. It replaces static Excel sheets with an interactive roadmap, progress tracking, and a “Do Later” system, all stored locally for a distraction-free experience.

## ✨ Features

- 📌 **Topic-wise Roadmap**
  - Structured DSA topics (Arrays, Sorting, DP, etc.)
  - Dynamic topic pages generated using static routing

- ✅ **Question Completion Tracking**
  - Mark questions as completed
  - Global progress calculation across all topics

- ⭐ **Do Later / Revision List**
  - Save important questions for later revision
  - Quick access from the navbar

- 📈 **Real-time Progress Analytics**
  - Global completion percentage
  - Solved vs remaining count

- 🧭 **Onboarding Flow**
  - Initial setup for user name and role
  - Route protection to ensure setup completion

- 🎨 **Modern UI**
  - Responsive design
  - Clean typography
  - Subtle indigo theme using Tailwind CSS

---

## 🛠 Tech Stack

- **Next.js (App Router)** – Static site generation
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** – State management with persistence
- **GitHub Pages** – Deployment

---

## 🔒 Data & Privacy

- All data is stored **locally in the browser** using `localStorage`
- No backend, no authentication, no API calls
- Data is **private to your device**
- Clearing browser storage resets progress
