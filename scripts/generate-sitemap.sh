#!/bin/bash

# Generate sitemap.xml for nexa.house
cat > sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nexa.house/</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nexa.house/#about</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexa.house/#properties</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://nexa.house/#why-nexa</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://nexa.house/#faq</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOF

echo "✅ sitemap.xml generated successfully"
