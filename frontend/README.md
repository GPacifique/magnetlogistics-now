# Magnet Logistics - Frontend

A modern, responsive logistics website built with React and Vite.

## Features

### Public Website
- **Home** - Hero section with features and call-to-action
- **About Us** - Company story, mission, values, and statistics
- **Services** - Comprehensive service offerings (Air Freight, Ocean Freight, Land Transport, Warehousing, Express Delivery, Customs Brokerage)
- **Track Shipment** - Real-time shipment tracking with detailed history
- **Contact Us** - Contact form and company information
- **Login / Register** - User authentication pages

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Navbar.css
│   ├── Footer.jsx          # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Home.css
│   ├── About.jsx           # About page
│   ├── About.css
│   ├── Services.jsx        # Services page
│   ├── Services.css
│   ├── Tracking.jsx        # Shipment tracking
│   ├── Tracking.css
│   ├── Contact.jsx         # Contact form
│   ├── Contact.css
│   ├── Login.jsx           # Login page
│   ├── Register.jsx        # Registration page
│   └── Login.css           # Auth pages styles
├── App.jsx                 # Main app with routing
├── App.css                 # Global styles
├── main.jsx               # Entry point
└── index.css              # Base styles
```

## Technologies Used

- **React 18.2** - UI library
- **React Router DOM 6.21** - Client-side routing
- **Vite 5.0** - Build tool and dev server
- **Axios 1.6** - HTTP client for API calls

## Features Implemented

✅ Responsive navigation bar with links to all pages
✅ Hero section with gradient backgrounds
✅ Service cards with hover effects
✅ Interactive tracking form with mock data
✅ Contact form with validation
✅ Authentication pages (Login/Register)
✅ Footer with company information and links
✅ Mobile-responsive design
✅ Modern UI with animations and transitions

## Next Steps

To connect this frontend to the Laravel backend:

1. Update API endpoints in components to point to Laravel backend
2. Implement proper authentication with Laravel Sanctum
3. Connect tracking functionality to backend API
4. Integrate contact form submission with backend
5. Add protected routes for authenticated users

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
