# RealEstate Demo

A responsive real estate website demo built with React, Vite, React Router, Tailwind CSS, and Framer Motion. The app showcases property categories, taluka and village-based browsing, project detail pages, inquiry/contact sections, and WhatsApp contact support.

## Features

- Home page with hero, category cards, about, services, trust, and contact sections
- Property categories for open plots, bungalows, agricultural land development, and construction services
- Taluka and village navigation for location-based project discovery
- Project detail pages with galleries, plot sizes, nearby places, map queries, and descriptions
- Reusable components for cards, navigation, footer, inquiry forms, and featured sections
- Floating WhatsApp contact button
- Tailwind-based responsive styling

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Framer Motion
- PostCSS and Autoprefixer

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The development server runs with Vite and is configured to listen on `0.0.0.0`.

### Build for Production

```bash
npm run build
```

The production build is generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/        Reusable UI sections and cards
  data/              Property, category, taluka, village, and contact data
  pages/             Route-level page components
  App.jsx            App layout and routes
  main.jsx           React entry point
  index.css          Global styles and Tailwind imports
```

## Main Routes

- `/` - Home page
- `/category/:category` - Projects filtered by category
- `/taluka/:taluka` - Projects filtered by taluka
- `/village/:village` - Projects filtered by village
- `/project/:projectId` - Project detail page
- `/property/:projectId` - Alternate project detail route

## Customizing Data

Most demo content is stored in:

```text
src/data/properties.js
```

Update this file to change:

- Business phone and WhatsApp number
- Property categories
- Talukas and villages
- Project names, images, galleries, plot sizes, nearby places, and descriptions

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
```

## Notes

The project uses remote Unsplash images in the demo data. If deploying publicly, consider replacing them with optimized local images or approved production assets.
