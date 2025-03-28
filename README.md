# DummyJSON Demo Application

A React application showcasing integration with the DummyJSON API, built with React, Redux Toolkit, TypeScript, and Tailwind CSS.

## Features

- 📱 Responsive design that works on desktop and mobile
- 🎨 Modern UI with Tailwind CSS
- 📊 Data management with Redux Toolkit
- 🔄 Pagination support
- 🎯 TypeScript for type safety
- ⚡ Fast development with Vite

## Live Demo
Live App URL- https://shopping-app-nu-virid.vercel.app/


## Pages

- **Home**: Welcome page
- **Products**: Browse products with images and details
- **Users**: View user profiles and information
- 

## Tech Stack

- React 18
- Redux Toolkit
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Axios
- Lucide React (Icons)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adii-Srivastava/Shopping-App
   ```

2. Navigate to the project directory:
   ```bash
   cd OYELABS ASSIGNMENT
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── services/      # API services
├── store/         # Redux store and slices
│   └── slices/    # Redux slices
├── App.tsx        # Main app component
└── main.tsx      # Entry point
```

## API Integration

This project uses the DummyJSON API (https://dummyjson.com) for demo data. The following endpoints are utilized:

- `/products` - Product listing
- `/users` - User profiles

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
