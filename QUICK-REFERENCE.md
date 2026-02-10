# ProgreX Landing Page - Quick Reference

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📂 File Locations

| Component | File Path |
|-----------|-----------|
| Header | `components/Header.tsx` |
| Hero | `components/Hero.tsx` |
| Services | `components/Services.tsx` |
| Projects | `components/Projects.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Blogs | `components/Blogs.tsx` |
| About | `components/About.tsx` |
| Contact | `components/Contact.tsx` |
| Footer | `components/Footer.tsx` |
| Chatbot | `components/Chatbot.tsx` |

## 🎨 Quick Customizations

### Change Main Colors
File: `tailwind.config.ts`
```typescript
primary: {
  DEFAULT: '#7C3AED',  // Your color here
  dark: '#6B46C1',
  light: '#A855F7',
}
```

### Update Company Name
Replace "PROGREX" and "ProgreX" throughout:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Change Fonts
File: `tailwind.config.ts`
```typescript
fontFamily: {
  sans: ['YourFont', 'Segoe UI', 'sans-serif'],
  heading: ['YourHeading', 'Inter', 'sans-serif'],
}
```

### Update Logo
Files to modify:
- `components/Header.tsx` (line ~31)
- `components/Footer.tsx` (line ~78)

## 🔗 Navigation Links

All sections have IDs for smooth scrolling:
- `#hero` - Hero Section
- `#services` - Services Section
- `#projects` - Projects Section
- `#testimonials` - Testimonials Section
- `#blogs` - Blogs Section
- `#about` - About Section
- `#contact` - Contact Section

## 📊 Statistics (About Section)

Update in `components/About.tsx`:
```typescript
const stats = [
  { label: 'Successful Projects', value: 200, suffix: '+' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];
```

## 🎯 CTA Buttons

All "Get Started" buttons scroll to the contact section:
```typescript
onClick={() => scrollToSection('contact')}
```

To change behavior, update the function in each component.

## 🤖 Chatbot Quick Replies

Update in `components/Chatbot.tsx`:
```typescript
const quickReplies = [
  'Our Services',
  'Pricing',
  'Contact Info',
  'Portfolio',
];
```

## 📧 Contact Form

The form currently shows a success message. To connect to a backend:

1. Create API route: `app/api/contact/route.ts`
2. Update form submit handler in `components/Contact.tsx`
3. Add email service (SendGrid, Mailgun, etc.)

## 🖼️ Image Optimization

Replace placeholder images with optimized images:
1. Add images to `public/` folder
2. Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

## 🌐 Social Media Links

Update in `components/Footer.tsx` and `components/Contact.tsx`:
```tsx
<a href="https://linkedin.com/company/progrex">LinkedIn</a>
<a href="https://twitter.com/progrex">Twitter</a>
<a href="https://github.com/progrex">GitHub</a>
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)
- `2xl:` - 1536px and up (extra large)

## 🎨 Animation Classes

Custom animations defined in `tailwind.config.ts`:
- `animate-pulse-glow` - Pulsing glow effect
- `animate-float` - Floating motion
- `animate-bounce-slow` - Slow bounce
- `animate-slide-up` - Slide up entrance
- `animate-fade-in` - Fade in

## 🔧 Troubleshooting

### Port already in use
```bash
# The app will automatically use port 3001 if 3000 is taken
# Or manually specify port:
PORT=3002 npm run dev
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Style not updating
```bash
# Restart dev server
# Clear browser cache
# Check Tailwind config
```

## 📦 Dependencies

Core dependencies installed:
- `next` - React framework
- `react` & `react-dom` - React libraries
- `framer-motion` - Animations
- `@heroicons/react` - Icons
- `tailwindcss` - Styling
- `typescript` - Type safety

## 🎯 Performance Tips

1. **Images**: Convert to WebP format
2. **Fonts**: Use font-display: swap
3. **Bundle**: Analyze with `npm run build`
4. **Lazy Loading**: Already implemented
5. **Code Splitting**: Automatic with Next.js

## 📈 Analytics Integration

To add Google Analytics:

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🔒 Environment Variables

Create `.env.local` for sensitive data:
```env
NEXT_PUBLIC_CONTACT_EMAIL=contact@progrex.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
API_SECRET_KEY=your_secret_key
```

Access in code:
```typescript
process.env.NEXT_PUBLIC_CONTACT_EMAIL
```

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images
- [ ] Update logo
- [ ] Verify all contact information
- [ ] Test contact form
- [ ] Check all links
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Optimize images
- [ ] Add meta descriptions
- [ ] Set up analytics
- [ ] Test page speed
- [ ] Deploy to staging
- [ ] Final review
- [ ] Deploy to production

---

**Need help?** Check DEPLOYMENT-GUIDE.md for detailed instructions!
