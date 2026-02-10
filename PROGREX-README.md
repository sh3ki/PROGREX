# ProgreX - Modern Landing Page

A stunning, modern landing page for ProgreX built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Purple-black color scheme with elegant gradients
- **Smooth Animations**: Framer Motion powered animations throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Chatbot**: Fixed bottom-right chatbot widget
- **10 Complete Sections**:
  1. Header/Navigation with sticky behavior
  2. Hero Section with animated background
  3. Services Section with hover effects
  4. Projects/Portfolio showcase
  5. Testimonials carousel
  6. Blogs preview grid
  7. About Section with animated counters
  8. Contact Form with validation
  9. Footer with links
  10. Chatbot Widget

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd progrex-landing
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

## 🎨 Color Palette

- **Primary Purple**: `#7C3AED`, `#6B46C1`
- **Electric Purple**: `#A855F7`
- **Accent Purple**: `#D8B4FE`
- **Dark Background**: `#0F172A`, `#1E293B`

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Fonts**: Inter, Poppins (Google Fonts)

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
progrex-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page integrating all components
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Projects.tsx        # Projects showcase
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── Blogs.tsx           # Blog previews
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── Chatbot.tsx         # Chatbot widget
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json           # Dependencies
```

## 🎯 Key Features

### Animations
- Scroll-triggered fade-in animations
- Hover effects on all interactive elements
- Smooth page transitions
- Counter animations for statistics
- Parallax effects

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px - 2560px
- Touch-friendly interfaces
- Optimized for all screen sizes

### Performance
- Lazy loading for images
- Optimized bundle size
- Fast page loads
- Smooth 60fps animations

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme

### Content
All content can be easily updated by editing the respective component files in the `components/` directory.

### Images
Replace placeholder images with your own by updating URLs in component files

## 📱 Sections Overview

1. **Header**: Sticky navigation with smooth scroll
2. **Hero**: Full-screen intro with animated shapes
3. **Services**: 6 service cards with hover animations
4. **Projects**: 4 featured projects with image zoom
5. **Testimonials**: Auto-rotating carousel
6. **Blogs**: 3 latest blog previews
7. **About**: Company info with animated statistics
8. **Contact**: Functional form with success message
9. **Footer**: Multi-column links and social media
10. **Chatbot**: Interactive widget (bottom-right)

---

Built with ❤️ using Next.js and Tailwind CSS
