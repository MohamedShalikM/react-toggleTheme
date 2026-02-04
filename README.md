Live Site: https://react-toggle-theme.vercel.app/

React Theme Toggle
A modern React application demonstrating state management, context API, and localStorage persistence for theme preferences.

Features:
   * Light/Dark theme toggle with smooth transitions
   * Persistent theme selection across browser sessions
   * Global state management using React Context API
   * Optimized with lazy state initialization
   * Fully responsive design
   * Dynamic CSS variables for theme consistency
     
Tech Stack:
   * Frontend: React 18+
   * Hooks: useState, useEffect, useContext
   * Persistence: localStorage API
   * Styling: CSS Variables + Dynamic Styles
   * Build Tool: Vite
     
Quick Start:
   # Clone repository
   git clone https://github.com/MohamedShalikM/react-toggleTheme.git
   cd react-theme-toggle

   # Install dependencies
   npm install

   # Start development server
   npm run dev

   # Build for production
   npm run build


 Implementation Highlights:
   Lazy State Initialization:
     const [theme, setTheme] = useState(() => 
     localStorage.getItem('theme') || 'light');
     
   Side Effect Management:
     useEffect(() => {
     localStorage.setItem('theme', theme);
     document.body.className = theme;}, [theme]);
     
  Global State with Context:
     const ThemeContext = createContext();
     <ThemeProvider>
     <Navbar />
     <ThemeToggle />
     </ThemeProvider>
     
Key Concepts Demonstrated:
    * State Persistence: Theme survives browser refresh
    * Context API: No prop drilling across components
    * Performance: Lazy initialization prevents hydration mismatch
    * Side Effects: Proper useEffect dependency management
    * Component Architecture: Separation of concerns
    
Challenges Overcome:
    * Race condition between initial render and localStorage load
    * Global state synchronization across multiple components
    * Memory leak prevention in useEffect cleanup
    * CSS-in-JS dynamic styling optimization
    
 Learning Outcomes:
     * Mastered React Hooks fundamentals
     * Implemented production-grade state persistence
     * Context API for scalable state management
     * Performance optimization techniques
     * Real-world debugging and problem-solving
     
Deployment:
     * npm run build
     * npx vite preview

Why This Project?
  This implementation showcases modern React patterns used in production applications:
     * No Redux boilerplate - Context API sufficient
     * No external state libraries needed
     * Follows React performance best practices
     * Production-ready error handling
     * Scalable architecture

Built with React best practices | Production-ready patterns | Interview-ready showcase

Author: Mohamed Shalik M | January 2026

  
