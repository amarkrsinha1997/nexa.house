// =============================================
// NEXA.HOUSE - MAIN JAVASCRIPT
// Property Platform with Starfield Background
// =============================================

// =============================================
// PRICE CONVERTER CLASS
// =============================================

class PriceConverter {
  constructor() {
    this.nexaPerUSD = null;
    this.lastUpdate = null;
    this.fallbackRate = 1000000000 / 650; // 1B NEX = $650 as fallback
  }

  async fetchNexaPrice() {
    try {
      // Try multiple sources for NEXA price
      const sources = [
        "https://api.coingecko.com/api/v3/simple/price?ids=nexa&vs_currencies=usd",
        "https://api.coinpaprika.com/v1/tickers/nex-nexa",
      ];

      for (const url of sources) {
        try {
          const response = await fetch(url);
          if (!response.ok) continue;

          const data = await response.json();

          // Parse CoinGecko response
          if (data.nexa?.usd) {
            this.nexaPerUSD = 1 / data.nexa.usd;
            this.lastUpdate = Date.now();
            console.log(
              `NEXA Price: $${data.nexa.usd} USD (${this.nexaPerUSD.toFixed(
                0
              )} NEX per USD)`
            );
            return true;
          }

          // Parse CoinPaprika response
          if (data.quotes?.USD?.price) {
            this.nexaPerUSD = 1 / data.quotes.USD.price;
            this.lastUpdate = Date.now();
            console.log(
              `NEXA Price: $${
                data.quotes.USD.price
              } USD (${this.nexaPerUSD.toFixed(0)} NEX per USD)`
            );
            return true;
          }
        } catch (err) {
          console.warn(`Failed to fetch from ${url}:`, err.message);
          continue;
        }
      }

      throw new Error("All price sources failed");
    } catch (error) {
      console.warn("Using fallback NEXA price: 1B NEX = $650");
      this.nexaPerUSD = this.fallbackRate;
      this.lastUpdate = Date.now();
      return false;
    }
  }

  formatNexa(amount) {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M NEX`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K NEX`;
    } else {
      return `${Math.round(amount)} NEX`;
    }
  }

  convertUSDToNexa(usdAmount) {
    if (!this.nexaPerUSD) return null;
    return usdAmount * this.nexaPerUSD;
  }

  updatePropertyPrices(properties) {
    return properties.map((property) => {
      // Extract USD amount from price string
      let usdAmount;

      if (property.priceUSD.includes("/night")) {
        // For rental properties
        const match = property.priceUSD.match(/\$([\d,]+)/);
        if (match) {
          usdAmount = parseFloat(match[1].replace(/,/g, ""));
          const nexaAmount = this.convertUSDToNexa(usdAmount);
          return {
            ...property,
            priceNexa: this.formatNexa(nexaAmount),
          };
        }
      } else {
        // For sale properties
        const match = property.priceUSD.match(/\$([\d,]+)/);
        if (match) {
          usdAmount = parseFloat(match[1].replace(/,/g, ""));
          const nexaAmount = this.convertUSDToNexa(usdAmount);
          return {
            ...property,
            priceNexa: this.formatNexa(nexaAmount),
          };
        }
      }

      return property;
    });
  }
}

// =============================================
// STARFIELD ANIMATION CLASS
// =============================================

class Starfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.starCount = 12000;
    this.maxDepth = 32;

    this.resize();
    this.init();
    this.animate();

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
  }

  init() {
    this.stars = [];
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width - this.centerX,
        y: Math.random() * this.canvas.height - this.centerY,
        z: Math.random() * this.maxDepth,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }
  }

  animate() {
    this.ctx.fillStyle = "rgba(5, 8, 20, 0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach((star) => {
      // Parallax movement
      star.z -= 0.015;
      if (star.z <= 0) {
        star.z = this.maxDepth;
        star.x = Math.random() * this.canvas.width - this.centerX;
        star.y = Math.random() * this.canvas.height - this.centerY;
      }

      // Twinkle effect
      star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
      star.opacity = Math.max(0.3, Math.min(1, star.opacity));

      // Calculate position
      const k = 128 / star.z;
      const px = star.x * k + this.centerX;
      const py = star.y * k + this.centerY;

      if (
        px >= 0 &&
        px <= this.canvas.width &&
        py >= 0 &&
        py <= this.canvas.height
      ) {
        const size = (1 - star.z / this.maxDepth) * 2;
        const brightness = star.opacity * (1 - star.z / this.maxDepth);

        this.ctx.beginPath();
        this.ctx.arc(px, py, size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(139, 92, 246, ${brightness})`;
        this.ctx.fill();

        // Add glow for closer stars
        if (size > 1) {
          this.ctx.beginPath();
          this.ctx.arc(px, py, size * 2, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(139, 92, 246, ${brightness * 0.2})`;
          this.ctx.fill();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// =============================================
// I18N (INTERNATIONALIZATION) CLASS
// =============================================

class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.content = {};
    this.loadContent();
  }

  detectLanguage() {
    // Check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang && ["en", "hi"].includes(urlLang)) {
      return urlLang;
    }

    // Check localStorage
    const savedLang = localStorage.getItem("nexa-house-lang");
    if (savedLang && ["en", "hi"].includes(savedLang)) {
      return savedLang;
    }

    // Check browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "hi") {
      return "hi";
    }

    return "en"; // Default to English
  }

  loadContent() {
    this.content = this.currentLang === "hi" ? content_hi : content_en;
    this.updateContent();
    this.updateMetaTags();
  }

  getNestedValue(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  }

  updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = this.getNestedValue(this.content, key);

      if (value !== undefined) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = value;
        } else {
          element.textContent = value;
        }
      }
    });

    // Update language toggle
    const langToggle = document.querySelector(".lang-toggle");
    if (langToggle) {
      langToggle.innerHTML =
        this.currentLang === "en"
          ? '<i class="fas fa-globe"></i> EN'
          : '<i class="fas fa-globe"></i> HI';
    }

    // Update active language in dropdown
    document.querySelectorAll(".lang-option").forEach((option) => {
      const lang = option.getAttribute("data-lang");
      option.classList.toggle("active", lang === this.currentLang);
    });
  }

  updateMetaTags() {
    document.title = this.content.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", this.content.meta.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", this.content.meta.keywords);
    }
  }

  setLanguage(lang) {
    if (["en", "hi"].includes(lang) && lang !== this.currentLang) {
      this.currentLang = lang;
      localStorage.setItem("nexa-house-lang", lang);
      this.loadContent();

      // Re-render properties with new language
      if (window.propertyRenderer) {
        window.propertyRenderer.render();
      }
    }
  }
}

// =============================================
// PROPERTY RENDERER CLASS
// =============================================

class PropertyRenderer {
  constructor(containerId, i18n) {
    this.container = document.getElementById(containerId);
    this.i18n = i18n;
  }

  render() {
    if (!this.container) return;

    const properties = this.i18n.content.properties.items;
    this.container.innerHTML = "";

    properties.forEach((property) => {
      const card = this.createPropertyCard(property);
      this.container.appendChild(card);
    });
  }

  createPropertyCard(property) {
    const card = document.createElement("div");
    card.className = "property-card animate-on-scroll";

    card.innerHTML = `
      <div class="property-image-wrapper">
        <img src="${property.image}" alt="${property.title}" loading="lazy">
        <div class="property-price">
          <div class="price-nexa">${property.priceNexa}</div>
          <div class="price-usd">${property.priceUSD}</div>
        </div>
      </div>
      <div class="property-content">
        <div class="property-badge">${property.badge}</div>
        <div class="property-location">
          <span class="location-icon"><i class="fas fa-map-marker-alt"></i></span>
          ${property.location}
        </div>
        <h3>${property.title}</h3>
        <div class="property-features">
          <div class="feature">
            <span class="icon"><i class="fas fa-bed"></i></span>
            ${property.bedrooms}
          </div>
          <div class="feature">
            <span class="icon"><i class="fas fa-bath"></i></span>
            ${property.bathrooms}
          </div>
          <div class="feature">
            <span class="icon"><i class="fas fa-ruler-combined"></i></span>
            ${property.area}
          </div>
        </div>
        <div class="property-type">${property.type}</div>
      </div>
    `;

    return card;
  }
}

// =============================================
// NAVIGATION CLASS
// =============================================

class Navigation {
  constructor() {
    this.header = document.querySelector(".header");
    this.mobileToggle = document.querySelector(".mobile-toggle");
    this.mobileMenu = document.querySelector(".mobile-menu");
    this.mobileOverlay = document.querySelector(".mobile-overlay");
    this.navLinks = document.querySelectorAll('nav a[href^="#"]');

    this.init();
  }

  init() {
    // Scroll event for header background
    window.addEventListener("scroll", () => this.handleScroll());

    // Mobile menu toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener("click", () =>
        this.toggleMobileMenu()
      );
    }

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener("click", () =>
        this.toggleMobileMenu()
      );
    }

    // Smooth scroll for navigation links
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => this.smoothScroll(e));
    });

    // Active nav highlighting
    this.observeSections();
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.header?.classList.add("scrolled");
    } else {
      this.header?.classList.remove("scrolled");
    }
  }

  toggleMobileMenu() {
    this.mobileToggle?.classList.toggle("active");
    this.mobileMenu?.classList.toggle("active");
    this.mobileOverlay?.classList.toggle("active");
    document.body.style.overflow = this.mobileMenu?.classList.contains("active")
      ? "hidden"
      : "";
  }

  smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (this.mobileMenu?.classList.contains("active")) {
        this.toggleMobileMenu();
      }
    }
  }

  observeSections() {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-80px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          this.updateActiveNav(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  updateActiveNav(activeId) {
    this.navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${activeId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

// =============================================
// LANGUAGE DROPDOWN CLASS
// =============================================

class LanguageDropdown {
  constructor(i18n) {
    this.i18n = i18n;
    this.toggle = document.querySelector(".lang-toggle");
    this.dropdown = document.querySelector(".lang-options");
    this.options = document.querySelectorAll(".lang-option");

    this.init();
  }

  init() {
    if (this.toggle) {
      this.toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleDropdown();
      });
    }

    this.options.forEach((option) => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        this.i18n.setLanguage(lang);
        this.closeDropdown();
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => this.closeDropdown());
  }

  toggleDropdown() {
    this.dropdown?.classList.toggle("active");
  }

  closeDropdown() {
    this.dropdown?.classList.remove("active");
  }
}

// =============================================
// FAQ ACCORDION CLASS
// =============================================

class FAQ {
  constructor() {
    this.items = document.querySelectorAll(".faq-item");
    this.init();
  }

  init() {
    this.items.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => this.toggle(item));
    });
  }

  toggle(item) {
    const isActive = item.classList.contains("active");

    // Close all items
    this.items.forEach((faqItem) => {
      faqItem.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active");
    }
  }
}

// =============================================
// SCROLL ANIMATIONS CLASS
// =============================================

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });
  }
}

// =============================================
// INITIALIZE APPLICATION
// =============================================

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize Starfield background
  const starfield = new Starfield("starfield");

  // Initialize i18n
  const i18n = new I18n();
  window.i18n = i18n; // Make globally accessible

  // Initialize Price Converter and fetch current NEXA price
  const priceConverter = new PriceConverter();
  await priceConverter.fetchNexaPrice();

  // Update property prices in both languages based on current NEXA rate
  content_en.properties.items = priceConverter.updatePropertyPrices(
    content_en.properties.items
  );
  content_hi.properties.items = priceConverter.updatePropertyPrices(
    content_hi.properties.items
  );

  // Refresh i18n content to get updated prices
  i18n.content = i18n.currentLang === "en" ? content_en : content_hi;

  // Initialize Property Renderer
  const propertyRenderer = new PropertyRenderer("properties-grid", i18n);
  window.propertyRenderer = propertyRenderer; // Make globally accessible
  propertyRenderer.render();

  // Initialize Navigation
  const navigation = new Navigation();

  // Initialize Language Dropdown
  const languageDropdown = new LanguageDropdown(i18n);

  // Initialize FAQ
  const faq = new FAQ();

  // Initialize Scroll Animations
  const scrollAnimations = new ScrollAnimations();

  // Log initialization
  console.log("🏡 Nexa House initialized successfully");
  console.log(`📍 Language: ${i18n.currentLang}`);
  console.log(`🏠 Properties loaded: ${i18n.content.properties.items.length}`);
});
