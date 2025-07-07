# Sentient Frontend Assignment

A modern, responsive ChatGPT-like chat application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **ChatGPT-style UI**: Clean, minimal chat interface inspired by OpenAI's ChatGPT
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Sidebar & Mobile Navigation**: Consistent navigation for all device sizes
- **Predefined Questions**: Quick-access suggestions below the chat input
- **No UI Component Library**: All UI is custom and minimal

## 🏗️ Project Structure

```
src/
├── app/
│   ├── home/page.tsx        # Main chat page (/home)
│   ├── history/page.tsx     # Placeholder for history route (/history)
│   ├── discover/page.tsx    # Placeholder for discover route (/discover)
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles (Tailwind + custom)
│   └── page.tsx             # Redirects / to /home
├── components/
│   ├── Sidebar.tsx          # Sidebar for desktop/tablet
│   ├── MobileNav.tsx        # Bottom nav for mobile
│   ├── MobileHeader.tsx     # Top header for mobile
│   ├── CenteredLogo.tsx     # Centered logo in chat
│   ├── ChatInput.tsx        # Chat input and suggestions
│   └── HelpButton.tsx       # Floating help button
└── public/
    ├── logo.svg             # App logo
    ├── home.svg             # Home icon
    ├── sandglass.svg        # History icon
    └── globe.svg            # Discover icon
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sentient-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser. You will be redirected to `/home`.

## 🗺️ Routes

- `/home`      — Main chat interface
- `/history`   — Placeholder for chat history (UI only)
- `/discover`  — Placeholder for discover/explore (UI only)
- `/`          — Redirects to `/home`

## 📱 Responsive Design

- **Sidebar** on desktop/tablet, **bottom nav** and **top header** on mobile
- Chat input and suggestions adapt to all screen sizes

## 🧑‍💻 Customization

- All UI is built with Tailwind CSS and custom React components
- SVG icons and logo are in the `public/` folder
- To add new routes, create a new folder in `src/app/` with a `page.tsx`

## 📄 License

This project is part of the Sentient Frontend Assignment.
