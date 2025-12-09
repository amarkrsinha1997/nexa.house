# Asset Guide for Nexa House

## Required Icons

To complete the branding, you'll need to add the following icon files to the `/assets/icons/` directory:

### Favicon Files
- `favicon-16x16.png` - 16x16px PNG
- `favicon-32x32.png` - 32x32px PNG
- `apple-touch-icon.png` - 180x180px PNG for iOS devices

### PWA Icons (for manifest.json)
- `icon-192x192.png` - 192x192px PNG
- `icon-512x512.png` - 512x512px PNG

### Design Specifications

**Color Scheme:**
- Primary: `#8B5CF6` (Royal Purple)
- Secondary: `#10B981` (Emerald Green)
- Background: `#050814` (Deep Dark)

**Icon Design:**
Use the house emoji (🏡) or create a simple geometric house icon with:
- Clean, modern lines
- Purple gradient or solid purple color
- Optional: Small Nexa "N" badge

### Quick Icon Creation Options

1. **Use Favicon Generator:**
   - Visit https://realfavicongenerator.net/
   - Upload a 512x512 SVG or PNG
   - Generate all required sizes

2. **Use Canva:**
   - Create 512x512px design
   - Export as PNG
   - Resize for other dimensions

3. **Use Figma/Sketch:**
   - Design at 512x512px
   - Export at required sizes (1x, 2x, 3x)

## Property Images

All property images are currently loaded from Unsplash CDN. If you want to host them locally:

1. Download images from the URLs in `js/content.config.js`
2. Save to `/assets/images/properties/`
3. Update image paths in content configuration
4. Optimize images (compress, WebP format)

### Example Local Structure:
```
assets/
├── icons/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── images/
    ├── og-image.jpg (for social sharing)
    └── properties/
        ├── manhattan-loft.jpg
        ├── malibu-villa.jpg
        ├── austin-studio.jpg
        └── ... (other properties)
```

## Open Graph Image

Create an OG image for social sharing:
- **Size:** 1200x630px
- **Format:** JPG or PNG
- **Content:** Logo + tagline "Your Dream Home, Powered by Nexa"
- **Save as:** `/assets/images/og-image.jpg`

Update the meta tags in `index.html` once created.

## Notes

- All icons should have transparent backgrounds (PNG format)
- Use squared aspect ratio (1:1) for app icons
- Optimize file sizes (under 50KB for icons)
- Consider creating both light and dark variants if needed
