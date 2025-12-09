// =============================================
// NEXA.HOUSE - ENGLISH CONTENT
// Content Configuration for Multi-language Support
// =============================================

const content_en = {
  // Meta Information
  meta: {
    title: "Nexa House - Buy & Rent Properties with Cryptocurrency",
    description:
      "Buy and rent properties worldwide with Nexa cryptocurrency. Instant payments, no banks, global access to real estate in US, Europe, Bhutan and beyond.",
    keywords:
      "nexa, cryptocurrency, real estate, property, blockchain, housing, rental, buy house with crypto",
  },

  // Navigation
  nav: {
    about: "About Us",
    properties: "Properties",
    whyNexa: "Why Nexa",
    roadmap: "What's Coming",
    faq: "FAQ",
    contact: "Contact",
  },

  // Language Selector
  lang: {
    current: "EN",
    english: "English",
    hindi: "हिंदी",
  },

  // Hero Section
  hero: {
    badge: "Revolutionary Real Estate",
    title: "Your Dream Home, Powered by",
    titleGradient: "Nexa",
    subtitle:
      "Buy and rent properties worldwide with cryptocurrency. Instant payments, no banks, no borders. Welcome to the future of real estate.",
    ctaPrimary: "Explore Properties",
    ctaSecondary: "Learn More",
    stats: [
      {
        value: "500+",
        label: "Properties Listed",
      },
      {
        value: "45",
        label: "Countries",
      },
      {
        value: "$2.5M+",
        label: "Transactions",
      },
    ],
  },

  // About Section
  about: {
    heading: "About Nexa House",
    subtitle: "Revolutionizing real estate with blockchain technology",
    content: [
      "Nexa House is the world's first cryptocurrency-powered real estate platform, making property ownership accessible to everyone, everywhere. We believe that buying or renting a home should be as simple as sending a message.",
      "Built on the Nexa blockchain, we eliminate intermediaries, reduce costs, and provide instant, secure transactions. Whether you're looking for a vacation rental in Bhutan, a city apartment in New York, or a countryside villa in Europe, Nexa House makes it possible.",
    ],
    features: [
      {
        icon: "fas fa-bolt",
        title: "Instant Transactions",
        description: "Complete property transactions in minutes, not months",
      },
      {
        icon: "fas fa-globe",
        title: "Global Access",
        description: "Buy or rent properties anywhere in the world",
      },
      {
        icon: "fas fa-lock",
        title: "Secure & Transparent",
        description: "Blockchain-verified ownership and smart contracts",
      },
      {
        icon: "fas fa-money-bill-wave",
        title: "Low Fees",
        description: "Save up to 90% on traditional real estate fees",
      },
    ],
  },

  // Properties Section
  properties: {
    heading: "Featured Properties",
    subtitle: "Explore stunning homes available for purchase or rent with Nexa",
    items: [
      // United States Properties
      {
        id: 1,
        title: "Modern Loft in Downtown Manhattan",
        location: "New York, United States",
        country: "US",
        priceNexa: "125,000 NEX",
        priceUSD: "$487,500",
        type: "For Sale",
        badge: "Accepting Nexa",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200 sq ft",
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
        category: "Apartment",
      },
      {
        id: 2,
        title: "Beachfront Villa with Ocean Views",
        location: "Malibu, California, United States",
        country: "US",
        priceNexa: "850,000 NEX",
        priceUSD: "$3,312,500",
        type: "For Sale",
        badge: "Accepting Nexa",
        bedrooms: 5,
        bathrooms: 4,
        area: "4,800 sq ft",
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
        category: "Villa",
      },
      {
        id: 3,
        title: "Cozy Downtown Studio",
        location: "Austin, Texas, United States",
        country: "US",
        priceNexa: "45 NEX",
        priceUSD: "$175/night",
        type: "For Rent",
        badge: "Accepting Nexa",
        bedrooms: 1,
        bathrooms: 1,
        area: "550 sq ft",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
        category: "Studio",
      },

      // Europe Properties
      {
        id: 4,
        title: "Historic Apartment in Le Marais",
        location: "Paris, France",
        country: "Europe",
        priceNexa: "285,000 NEX",
        priceUSD: "$1,110,750",
        type: "For Sale",
        badge: "Accepting Nexa",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,800 sq ft",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
        category: "Apartment",
      },
      {
        id: 5,
        title: "Luxury Penthouse with City Views",
        location: "Barcelona, Spain",
        country: "Europe",
        priceNexa: "195 NEX",
        priceUSD: "$760/night",
        type: "For Rent",
        badge: "Accepting Nexa",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,400 sq ft",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
        category: "Penthouse",
      },
      {
        id: 6,
        title: "Countryside Villa in Tuscany",
        location: "Florence, Italy",
        country: "Europe",
        priceNexa: "420,000 NEX",
        priceUSD: "$1,637,000",
        type: "For Sale",
        badge: "Accepting Nexa",
        bedrooms: 6,
        bathrooms: 5,
        area: "5,500 sq ft",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
        category: "Villa",
      },

      // Bhutan Properties
      {
        id: 7,
        title: "Mountain Retreat with Valley Views",
        location: "Paro Valley, Bhutan",
        country: "Bhutan",
        priceNexa: "75,000 NEX",
        priceUSD: "$292,500",
        type: "For Sale",
        badge: "Accepting Nexa",
        bedrooms: 4,
        bathrooms: 3,
        area: "2,800 sq ft",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
        category: "House",
      },
      {
        id: 8,
        title: "Traditional Bhutanese Farmhouse",
        location: "Thimphu, Bhutan",
        country: "Bhutan",
        priceNexa: "85 NEX",
        priceUSD: "$330/night",
        type: "For Rent",
        badge: "Accepting Nexa",
        bedrooms: 3,
        bathrooms: 2,
        area: "1,600 sq ft",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
        category: "Farmhouse",
      },
      {
        id: 9,
        title: "Serene Monastery Guest House",
        location: "Punakha, Bhutan",
        country: "Bhutan",
        priceNexa: "55 NEX",
        priceUSD: "$215/night",
        type: "For Rent",
        badge: "Accepting Nexa",
        bedrooms: 2,
        bathrooms: 2,
        area: "900 sq ft",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop",
        category: "Guest House",
      },
    ],
  },

  // Why Nexa Section
  whyNexa: {
    heading: "Why Choose Nexa for Real Estate?",
    subtitle:
      "Experience the future of property ownership with blockchain technology",
    benefits: [
      {
        icon: "fas fa-chart-line",
        title: "Economic Growth",
        description:
          "Invest in appreciating assets with cryptocurrency. Nexa's deflationary model means your property investment gains value over time, both in real estate and crypto appreciation.",
      },
      {
        icon: "fas fa-gem",
        title: "Tax Savings",
        description:
          "Reduce capital gains taxes with crypto-to-property exchanges. Smart contracts automate deductions, and blockchain transparency simplifies tax reporting, saving you thousands.",
      },
      {
        icon: "fas fa-sync-alt",
        title: "Easy Conversion",
        description:
          "Convert Nexa to property or property to Nexa instantly. No waiting for bank approvals, no currency exchange fees, no complicated paperwork. Just seamless transactions.",
      },
      {
        icon: "fas fa-globe-americas",
        title: "Global Accessibility",
        description:
          "Access properties worldwide without borders. Whether you're in Tokyo or Toronto, buy or rent properties anywhere with the same simple Nexa transaction.",
      },
      {
        icon: "fas fa-bolt",
        title: "Instant Settlements",
        description:
          "Complete transactions in minutes instead of months. Smart contracts execute automatically when conditions are met, eliminating delays and reducing costs by 90%.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "Secure Ownership",
        description:
          "Blockchain-verified property titles that can't be forged or disputed. Your ownership is permanently recorded on the Nexa blockchain, accessible anywhere, anytime.",
      },
    ],
  },

  // Roadmap Section
  roadmap: {
    heading: "What's Coming to Nexa House",
    subtitle: "Our vision for the future of decentralized real estate",
    items: [
      {
        number: "01",
        title: "NFT Property Titles",
        description:
          "Convert property ownership into NFTs for easy transfer, fractional ownership, and enhanced liquidity. Trade property shares like stocks.",
      },
      {
        number: "02",
        title: "Virtual Property Tours",
        description:
          "Explore properties in immersive 3D and VR before you buy. Walk through homes from anywhere in the world using your phone or VR headset.",
      },
      {
        number: "03",
        title: "Fractional Ownership",
        description:
          "Own a piece of premium properties you couldn't afford alone. Pool resources with others to invest in high-value real estate.",
      },
      {
        number: "04",
        title: "AI Property Matching",
        description:
          "Machine learning algorithms that understand your preferences and budget, recommending perfect properties before they hit the market.",
      },
      {
        number: "05",
        title: "Rental Income Automation",
        description:
          "Smart contracts automatically distribute rental income to property owners in Nexa. No property managers, no delays, no fees.",
      },
      {
        number: "06",
        title: "Global Expansion",
        description:
          "Expanding to 100+ countries by 2026 with localized support, regional partnerships, and integration with local property laws.",
      },
    ],
  },

  // FAQ Section
  faq: {
    heading: "Frequently Asked Questions",
    subtitle: "Everything you need to know about buying and renting with Nexa",
    items: [
      {
        question: "How do I buy a property with Nexa?",
        answer:
          "Buying a property with Nexa is simple: Browse our listings, select your property, connect your Nexa wallet, and initiate the smart contract. Once you transfer the Nexa amount, the smart contract automatically processes the transaction and transfers ownership to you. The entire process takes 10-30 minutes.",
      },
      {
        question: "Is my property ownership legally recognized?",
        answer:
          "Yes, absolutely. Nexa House works with local legal partners in each country to ensure all property transactions comply with local laws. Your blockchain-verified ownership is legally binding and registered with local authorities. You receive both a blockchain certificate and traditional legal documentation.",
      },
      {
        question: "What happens if I don't have enough Nexa?",
        answer:
          "You can purchase Nexa cryptocurrency on major exchanges like Binance, Coinbase, or directly through our integrated exchange partners. We also offer a fiat-to-Nexa conversion service where you can buy Nexa with your credit card or bank transfer within the platform.",
      },
      {
        question: "Can I rent out my Nexa House property?",
        answer:
          "Yes! Our platform includes a built-in rental management system. You can list your property for short-term or long-term rentals, set your rates in Nexa, and receive automated payments through smart contracts. Rental income is distributed to your wallet automatically.",
      },
      {
        question: "What are the fees compared to traditional real estate?",
        answer:
          "Traditional real estate transactions charge 5-6% in agent fees plus legal costs. Nexa House charges only 1.5% total (0.75% buyer, 0.75% seller). On a $500,000 property, that's $7,500 instead of $30,000+ - saving you over $22,500!",
      },
      {
        question: "How do property inspections work?",
        answer:
          "Each property listing includes professional photos, 3D virtual tours, and detailed inspection reports. For high-value purchases, we can arrange in-person inspections with local partners or virtual live tours with the seller. You can also hire independent inspectors in the property's location.",
      },
      {
        question: "What countries are currently supported?",
        answer:
          "We currently support property transactions in the United States, Canada, United Kingdom, France, Spain, Italy, Germany, Switzerland, Japan, Singapore, Australia, New Zealand, Bhutan, and the UAE. We're adding new countries monthly - check our roadmap for upcoming regions.",
      },
      {
        question: "Can I sell my property later for fiat currency?",
        answer:
          "Yes! While we encourage Nexa transactions, you can sell your property for traditional currency. Our platform supports both Nexa and fiat conversions. When selling, you can choose to receive payment in Nexa, USD, EUR, or other major currencies.",
      },
    ],
  },

  // Footer
  footer: {
    brand: {
      name: "Nexa House",
      tagline: "The future of real estate is here",
      description:
        "Revolutionizing property ownership with blockchain technology. Buy, sell, and rent properties worldwide with cryptocurrency.",
    },
    explore: {
      title: "Explore",
      links: [
        { text: "Properties", url: "#properties" },
        { text: "About Us", url: "#about" },
        { text: "Why Nexa", url: "#why-nexa" },
        { text: "Roadmap", url: "#roadmap" },
        { text: "FAQ", url: "#faq" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { text: "How It Works", url: "#" },
        { text: "Documentation", url: "#" },
        { text: "Legal & Compliance", url: "#" },
        { text: "Property Guides", url: "#" },
        { text: "Support Center", url: "#" },
      ],
    },
    ecosystem: {
      title: "Nexa Ecosystem",
      links: [
        { text: "Nexa Cafe", url: "https://nexa.cafe" },
        { text: "Nexa Land", url: "https://nexa.land" },
        { text: "Nexa Pay", url: "#" },
        { text: "Nexa Wallet", url: "#" },
        { text: "Nexa Explorer", url: "#" },
      ],
    },
    social: {
      twitter: "https://twitter.com/nexa",
      telegram: "https://t.me/nexa",
      discord: "https://discord.gg/nexa",
      github: "https://github.com/nexa",
    },
    legal: {
      copyright: "© 2025 Nexa House. All rights reserved.",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
      ],
    },
  },

  // Buttons & CTAs
  cta: {
    exploreProperties: "Explore Properties",
    learnMore: "Learn More",
    getStarted: "Get Started",
    viewDetails: "View Details",
    contactUs: "Contact Us",
    listProperty: "List Your Property",
  },
};

// Export for use in main.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = content_en;
}
