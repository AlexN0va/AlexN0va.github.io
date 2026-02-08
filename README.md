# Alex Nava Portfolio

A personal portfolio website built with React and Vite.

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Features

- React-based component architecture
- Three.js 3D animations
- Typed.js typing animation
- Bootstrap 5 for styling
- Responsive design
- "Change Realm" button to toggle between normal and 3D view

## Project Structure

```
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Header.jsx
│   │   ├── Intro.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Coursework.jsx
│   │   ├── Work.jsx
│   │   ├── Footer.jsx
│   │   ├── TypedAnimation.jsx
│   │   └── ThreeAnimation.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── style.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```
