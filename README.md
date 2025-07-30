# Interactive UI Accordion

A modern, accessible, and responsive FAQ accordion component built with React. Features light/dark theme switching, smooth animations, and full keyboard navigation support.

##  Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Theme Switching**: Light and dark theme support with localStorage persistence
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Smooth Animations**: CSS-based transitions with respect for reduced motion preferences
- **Modern Stack**: Built with React 18 and CSS Modules
- **Performance Optimized**: Efficient re-renders and lightweight bundle size

##  Demo

> **[Live Demo](https://interactive-ui-accordion.vercel.app/)**

The accordion displays FAQ items with:
- Expandable/collapsible question panels
- Multiple items can be open simultaneously
- Smooth height animations
- Theme toggle in the header
- Mobile-responsive layout

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/akanksha509/interactive-ui-accordion.git
cd interactive-ui-accordion
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##  Project Structure

```
src/
├── components/
│   ├── Accordion/
│   │   ├── Accordion.jsx          # Main accordion container
│   │   ├── Accordion.module.css   # Accordion styles
│   │   ├── AccordionItem.jsx      # Individual accordion item
│   │   └── index.js
│   └── ThemeToggle/
│       ├── ThemeToggle.jsx        # Theme switching component
│       ├── ThemeToggle.module.css # Theme toggle styles
│       └── index.js
├── data/
│   └── faqData.js                 # FAQ content data
├── hooks/
│   ├── useAccordion.js            # Accordion state management
│   └── useTheme.js                # Theme state management
├── styles/
│   └── globals.css                # Global styles and CSS reset
├── App.jsx                        # Main App component
└── index.js                       # React app entry point
```

##  Theming

The application supports light and dark themes using CSS custom properties:

### Light Theme
- Background: `#ffffff`
- Text: `#1a1a1a`
- Accent: `#8B5CF6` (Purple)
- Secondary: `#f9fafb`

### Dark Theme  
- Background: `#1f2937`
- Text: `#f9fafb`
- Accent: `#60A5FA` (Blue)
- Secondary: `#111827`

Theme preference is automatically saved to localStorage and persists across sessions.

##  Accessibility Features

- **Keyboard Navigation**: Full keyboard support with Enter/Space to toggle
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Visible focus indicators and logical tab order
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences
- **Semantic HTML**: Proper heading hierarchy and landmark roles

##  Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+

The layout adapts with:
- Stacked header on mobile
- Adjusted font sizes and spacing
- Touch-friendly button sizes
- Optimized content density



