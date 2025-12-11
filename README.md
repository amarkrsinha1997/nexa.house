# Nexa House 🏡

A revolutionary cryptocurrency-powered real estate platform built on the Nexa blockchain. Buy, sell, and rent properties worldwide with instant payments, zero intermediaries, and complete transparency.

> **⚠️ IMPORTANT NOTE:** The property listings currently shown on the site are example/demonstration data created while we build this platform. These are not real properties available for purchase or rent at this time. Real property listings will be added as the platform launches.

## 🌟 Features

- **🏠 Property Listings** - Browse properties from US, Europe, Bhutan, and more
- **⚡ Instant Transactions** - Complete property deals in minutes, not months
- **🌍 Global Access** - Buy or rent properties anywhere in the world
- **🔒 Blockchain Security** - Verified ownership and smart contracts
- **💰 Low Fees** - Save up to 90% on traditional real estate fees
- **🌐 Multi-language** - English and Hindi support
- **🎨 Dark Theme** - Modern, premium design with starfield background
- **📱 Responsive** - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Modern web browser

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd /Users/apple/Documents/Nekka/nexa.house
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

This will:
- Watch and compile SCSS files automatically
- Start a local development server
- Open your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This compiles and minifies the CSS for production deployment.

### Generate SEO Files

```bash
npm run seo
```

Generates `sitemap.xml` and `robots.txt` files.

## 📁 Project Structure

```
nexa.house/
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── package.json            # Dependencies and scripts
├── scss/
│   ├── _variables.scss     # Design tokens (colors, spacing, typography)
│   ├── _mixins.scss        # Reusable SCSS mixins
│   └── styles.scss         # Main styles
├── css/
│   └── styles.css          # Compiled CSS (auto-generated)
├── js/
│   ├── content.config.js   # English content
│   ├── content.hi.js       # Hindi translations
│   └── main.js             # Main JavaScript (Starfield, i18n, etc.)
├── assets/
│   ├── icons/              # Favicon and app icons
│   └── images/             # Property images and assets
└── scripts/
    ├── generate-sitemap.sh # Sitemap generator
    └── generate-robots.sh  # robots.txt generator
```

## 🎨 Design System

### Color Palette

- **Primary (Purple)**: `#8B5CF6` - Luxury and innovation
- **Secondary (Emerald)**: `#10B981` - Prosperity and growth
- **Accent (Amber)**: `#F59E0B` - Warmth and home
- **Background**: `#050814` - Deep space dark

### Typography

- **Headings**: Space Grotesk (Bold, Modern)
- **Body**: Inter (Clean, Readable)
- **Fluid sizing**: Responsive typography using clamp()

### Components

- Glass-effect navigation with backdrop blur
- Property cards with hover animations
- Starfield canvas background
- Smooth scroll animations with IntersectionObserver
- FAQ accordion
- Multi-language dropdown

## 🌐 Internationalization (i18n)

The site supports English and Hindi:

- **English**: Default language
- **Hindi (हिंदी)**: Full translation

Content is managed via:
- `js/content.config.js` - English content
- `js/content.hi.js` - Hindi translations

Language is auto-detected from:
1. URL parameter (`?lang=hi`)
2. localStorage preference
3. Browser language
4. Default to English

## 🏠 Property Data

Sample properties include listings from:
- **United States** - Manhattan, Malibu, Austin
- **Europe** - Paris, Barcelona, Florence
- **Bhutan** - Paro Valley, Thimphu, Punakha

All property images are sourced from Unsplash with proper licensing.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Wide**: 1024px - 1280px
- **Ultra-wide**: > 1280px

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **SCSS** - Advanced styling with variables and mixins
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Canvas API** - Starfield background animation
- **IntersectionObserver** - Scroll animations
- **CSS Grid & Flexbox** - Modern layouts
- **Google Fonts** - Inter & Space Grotesk

## 🎯 Key Features Explained

### Starfield Background
Animated canvas with parallax stars, twinkling effect, and purple glow matching the brand colors.

### Property Renderer
Dynamically generates property cards from content configuration with images, pricing, features, and location data.

### Smart i18n System
Auto-detects language, updates all content via `data-i18n` attributes, and persists preference to localStorage.

### Smooth Navigation
Hash-based routing with smooth scroll, active link highlighting, and mobile menu with overlay.

### SEO Optimized
- Semantic HTML5
- Meta tags (OG, Twitter)
- Sitemap.xml
- robots.txt
- Accessible (ARIA)

## 🚀 Deployment

The site is ready for deployment to:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Static hosting
- **Any static host** - Upload compiled files

Before deploying:
1. Run `npm run build` to compile CSS
2. Run `npm run seo` to generate sitemap/robots
3. Update domain in `sitemap.xml` and meta tags
4. Add property images to `assets/images/`

## 📝 TODO / Future Enhancements

- [ ] Add real property images to `assets/images/`
- [ ] Create favicon and app icons
- [ ] Implement property detail pages
- [ ] Add contact form with backend
- [ ] Integrate Nexa wallet connection
- [ ] Add property filtering and search
- [ ] Implement 3D virtual tours
- [ ] Add user authentication
- [ ] Create admin panel for property management
- [ ] Integrate with Nexa blockchain for actual transactions

## 🤝 Contributing

This is a demonstration project for the Nexa ecosystem. For production use, additional security, legal compliance, and blockchain integration would be required.

## 📄 License

MIT License - See LICENSE file for details

## 🔗 Related Projects

- [Nexa Cafe](https://nexa.cafe) - Coffee payments with Nexa
- [Nexa Land](https://nexa.land) - Nexa blockchain explorer
- [Guptakashish.com](https://guptakashish.com) - Personal portfolio
- [Nekka.com](https://nekka.com) - Fintech platform

## 📧 Contact

For questions or support, visit our [FAQ section](#faq) or contact us through the website.

---

**Built with ❤️ for the Nexa ecosystem**
