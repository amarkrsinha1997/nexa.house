#!/bin/bash

# Generate robots.txt for nexa.house
cat > robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://nexa.house/sitemap.xml
EOF

echo "✅ robots.txt generated successfully"
