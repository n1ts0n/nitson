// ============================================================
// STARFIELD BACKGROUND - lightweight canvas animation
// ============================================================
(function() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let width, height;
  let stars = [];
  const NUM_STARS = 180;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.015 + 0.005,
        opacity: Math.random() * 0.6 + 0.2,
        driftX: (Math.random() - 0.5) * 0.2,
        driftY: (Math.random() - 0.5) * 0.2
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, width, height);
    
    for (const star of stars) {
      star.x += star.driftX + star.speed * 0.1;
      star.y += star.driftY + star.speed * 0.05;
      
      if (star.x > width) star.x = 0;
      if (star.x < 0) star.x = width;
      if (star.y > height) star.y = 0;
      if (star.y < 0) star.y = height;
      
      const twinkle = Math.sin(Date.now() * star.speed * 3 + star.x) * 0.2 + 0.8;
      const opacity = star.opacity * twinkle;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
      
      if (star.radius > 1) {
        ctx.shadowColor = 'rgba(0, 255, 198, 0.05)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }

  function animate() {
    drawStars();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars();
  });

  resize();
  createStars();
  animate();

  // Update star opacity based on theme
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      canvas.style.opacity = isLight ? '0.25' : '0.6';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();

// ============================================================
// CONFIGURATION – update with your real data
// ============================================================
const siteConfig = {
  name: "NITSON",
  realName: "Mohammad Hossein Heydari",
  github: "https://github.com/n1ts0n",
  telegram: "https://t.me/sn0wknight",
  instagram: "https://www.instagram.com/nitsoon_?igsh=bDAwams0azIxa2k2",
  linkedin: "https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF%D8%AD%D8%B3%DB%8C%D9%86-%D8%AD%DB%8C%D8%AF%D8%B1%DB%8C-86b770351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "YOUR_EMAIL"
};

// ============================================================
// TRANSLATIONS (English & Persian)
// ============================================================
const translations = {
  en: {
    "nav-home": "Home",
    "nav-skills": "Skills",
    "nav-about": "About",
    "nav-showcase": "Showcase",
    "nav-contact": "Contact",
    "hero-badge": "✦ HELLO, I'M",
    "hero-sub": "Game & Web Developer",
    "hero-real": "Mohammad Hossein Heydari",
    "hero-cta1": "Explore My Work",
    "hero-cta2": "Contact Me",
    "skills-label": "⚡ Expertise",
    "skills-title": "Languages & Technologies",
    "skills-sub": "Core technologies I work with daily to build digital experiences.",
    "build-label": "🛠️ Craft",
    "build-title": "What I Build",
    "build-sub": "From immersive games to modern web interfaces — my stack in action.",
    "build-card1-title": "Unity Game Dev",
    "build-card1-desc": "Interactive 2D/3D experiences with C# and Unity engine.",
    "build-card2-title": "Modern Websites",
    "build-card2-desc": "Responsive, performant frontends with a cinematic touch.",
    "build-card3-title": "Interactive Web Apps",
    "build-card3-desc": "Dynamic SPAs with React, state management and smooth UX.",
    "about-label": "👤 About",
    "about-title": "About Me",
    "about-p1": 'My name is <span class="highlight-name">Mohammad Hossein Heydari</span>, but I\'ve always gone by <span class="highlight-name">NITSON</span> online — I don\'t really know why, I just love it. It\'s become my identity in the digital world.',
    "about-p2": "I'm passionate about building dynamic, smart websites and I absolutely love game development. What drives me is creating things that stand out — I want every project I make to be different, unique, and unforgettable.",
    "about-tag1": "⚡ Web Developer",
    "about-tag2": "🎮 Game Creator",
    "about-tag3": "🚀 Digital Builder",
    "stat1": "Technologies",
    "stat2": "Curiosity",
    "stat3": "Passion",
    "stat4": "Brand Identity",
    "showcase-label": "🎬 Showcase",
    "showcase-title": "My Projects",
    "showcase-sub": "A selection of my work — from games to web experiences.",
    "slide1-title": "Café Restaurant Gaff",
    "slide1-desc": "A modern, cinematic website for a café restaurant with a unique atmosphere.",
    "slide1-tag": "Web Design",
    "slide1-link": "Visit Project",
    "slide2-title": "NITSON Driver",
    "slide2-desc": "A web-based driving game with immersive mechanics and smooth controls.",
    "slide2-tag": "Web Game",
    "slide2-link": "Play Game",
    "slide3-title": "NITSON Survival",
    "slide3-desc": "A survival game where you must fight, gather, and survive in a harsh world.",
    "slide3-tag": "Web Game",
    "slide3-link": "Play Game",
    "slide4-title": "NITSON Bird",
    "slide4-desc": "A fun and challenging bird-themed game with addictive gameplay.",
    "slide4-tag": "Web Game",
    "slide4-link": "Play Game",
    "contact-label": "📬 Connect",
    "contact-title": "Let's Connect",
    "contact-sub": "You can reach me through any of the links below for ideas, development, or consulting.",
    "footer-built": "Built with",
    "footer-copy": "© 2026 NITSON. All rights reserved.",
    "footer-dev": "Developed by NITSON (this time for himself)"
  },
  fa: {
    "nav-home": "خانه",
    "nav-skills": "مهارت‌ها",
    "nav-about": "درباره من",
    "nav-showcase": "نمونه کارها",
    "nav-contact": "تماس",
    "hero-badge": "✦ سلام، این منم",
    "hero-sub": "توسعه‌دهنده بازی و وب",
    "hero-real": "محمدحسین حیدری",
    "hero-cta1": "مشاهده کارهای من",
    "hero-cta2": "تماس با من",
    "skills-label": "⚡ تخصص‌ها",
    "skills-title": "زبان‌ها و فناوری‌ها",
    "skills-sub": "فناوری‌های اصلی که روزانه برای ساخت تجربه‌های دیجیتال از آن‌ها استفاده می‌کنم.",
    "build-label": "🛠️ دست‌ساخته‌ها",
    "build-title": "چیزی که می‌سازم",
    "build-sub": "از بازی‌های فراگیر تا رابط‌های وب مدرن — استک من در عمل.",
    "build-card1-title": "توسعه بازی با یونیتی",
    "build-card1-desc": "تجربه‌های تعاملی ۲ بعدی و ۳ بعدی با سی‌شارپ و موتور یونیتی.",
    "build-card2-title": "وب‌سایت‌های مدرن",
    "build-card2-desc": "فرانت‌اندهای ریسپانسیو و کارا با ظاهری سینمایی.",
    "build-card3-title": "اپلیکیشن‌های وب تعاملی",
    "build-card3-desc": "SPAهای پویا با ریکت، مدیریت وضعیت و تجربه کاربری روان.",
    "about-label": "👤 درباره من",
    "about-title": "درباره من",
    "about-p1": 'اسم من <span class="highlight-name">محمدحسین حیدری</span> هست، ولی از اول توی فضای مجازی اسمم رو <span class="highlight-name">NITSON</span> گذاشتم — نمیدونم چرا ولی دوسش دارم. این اسم به هویت من در دنیای دیجیتال تبدیل شده.',
    "about-p2": "من به ساخت وب‌سایت‌های پویا و هوشمند علاقه دارم و در کنارش ساخت بازی رو خیلی دوست دارم. چیزی که من رو به جلو می‌بره اینه که چیزی که می‌سازم با بقیه فرق کنه — می‌خوام هر پروژه‌ای که می‌سازم متفاوت، خاص و به‌یادماندنی باشه.",
    "about-tag1": "⚡ توسعه‌دهنده وب",
    "about-tag2": "🎮 سازنده بازی",
    "about-tag3": "🚀 سازنده دیجیتال",
    "stat1": "فناوری‌ها",
    "stat2": "کنجکاوی",
    "stat3": "اشتیاق",
    "stat4": "هویت برند",
    "showcase-label": "🎬 نمونه کارها",
    "showcase-title": "پروژه‌های من",
    "showcase-sub": "انتخابی از کارهای من — از بازی‌ها تا تجربه‌های وب.",
    "slide1-title": "کافه رستوران گاف",
    "slide1-desc": "وب‌سایتی مدرن و سینمایی برای یک کافه رستوران با فضایی منحصر‌به‌فرد.",
    "slide1-tag": "طراحی وب",
    "slide1-link": "مشاهده پروژه",
    "slide2-title": "NITSON Driver",
    "slide2-desc": "یک بازی رانندگی تحت وب با مکانیک‌های فراگیر و کنترل‌های روان.",
    "slide2-tag": "بازی وب",
    "slide2-link": "بازی کنید",
    "slide3-title": "NITSON Survival",
    "slide3-desc": "یک بازی بقا که در آن باید بجنگی، جمع‌آوری کنی و در دنیایی سخت زنده بمونی.",
    "slide3-tag": "بازی وب",
    "slide3-link": "بازی کنید",
    "slide4-title": "NITSON Bird",
    "slide4-desc": "یک بازی سرگرم‌کننده و چالش‌برانگیز با تم پرنده و گیم‌پلی اعتیادآور.",
    "slide4-tag": "بازی وب",
    "slide4-link": "بازی کنید",
    "contact-label": "📬 ارتباط",
    "contact-title": "بیایید ارتباط برقرار کنیم",
    "contact-sub": "از طریق هرکدوم از لینک‌های زیر می‌تونین برای ایده، ساخت یا مشاوره با من در تماس باشین.",
    "footer-built": "ساخته شده با",
    "footer-copy": "© ۲۰۲۶ NITSON. تمامی حقوق محفوظ است.",
    "footer-dev": "توسعه توسط NITSON (این بار برای خودش)"
  }
};

// ============================================================
// CONTACT LINKS (auto-generated)
// ============================================================
const contactData = [
  { icon: "fab fa-github", name: "GitHub", handle: "@n1ts0n", url: siteConfig.github },
  { icon: "fab fa-telegram-plane", name: "Telegram", handle: "@sn0wknight", url: siteConfig.telegram },
  { icon: "fab fa-instagram", name: "Instagram", handle: "@nitsoon_", url: siteConfig.instagram },
  { icon: "fab fa-linkedin-in", name: "LinkedIn", handle: "Mohammad Hossein", url: siteConfig.linkedin }
];

const contactGrid = document.getElementById('contactGrid');
contactData.forEach(item => {
  const a = document.createElement('a');
  a.className = 'contact-link';
  a.href = item.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.innerHTML = `
    <i class="${item.icon}"></i>
    <div class="info">
      <span class="name">${item.name}</span>
      <span class="handle">${item.handle}</span>
    </div>
  `;
  contactGrid.appendChild(a);
});

// ============================================================
// LANGUAGE TOGGLE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'en';
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'fa' ? 'fa' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lang);
  langLabel.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  if (typewriterObserver) {
    typewriterObserver.disconnect();
    initTypewriter();
  }
}

langToggle.addEventListener('click', () => {
  const nextLang = currentLang === 'en' ? 'fa' : 'en';
  setLanguage(nextLang);
});

// ============================================================
// THEME TOGGLE + localStorage
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// ============================================================
// MOBILE MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ============================================================
// HEADER SCROLL EFFECT
// ============================================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============================================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll(
  '.tech-card, .build-card, .stat-item, .contact-link, .section-title, .section-sub, .section-label'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ============================================================
// TYPEWRITER EFFECT FOR ABOUT TEXT
// ============================================================
let typewriterObserver;

function initTypewriter() {
  const aboutText1 = document.getElementById('aboutText1');
  const aboutText2 = document.getElementById('aboutText2');
  
  const originalHTML1 = aboutText1.innerHTML;
  const originalHTML2 = aboutText2.innerHTML;
  
  const tempDiv1 = document.createElement('div');
  tempDiv1.innerHTML = originalHTML1;
  const text1 = tempDiv1.textContent || tempDiv1.innerText;
  
  const tempDiv2 = document.createElement('div');
  tempDiv2.innerHTML = originalHTML2;
  const text2 = tempDiv2.textContent || tempDiv2.innerText;

  let typed1 = false;
  let typed2 = false;

  aboutText1.innerHTML = '';
  aboutText2.innerHTML = '';

  const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!typed1) {
          typed1 = true;
          typeWriter(aboutText1, text1, originalHTML1, 0, () => {
            if (!typed2) {
              typed2 = true;
              setTimeout(() => {
                typeWriter(aboutText2, text2, originalHTML2, 0);
              }, 300);
            }
          });
        }
      }
    });
  }, { threshold: 0.2 });

  typewriterObserver = typeObserver;
  typeObserver.observe(aboutText1);
  typeObserver.observe(aboutText2);
}

function typeWriter(element, text, originalHTML, index, callback) {
  if (index === 0) {
    element.innerHTML = '';
    element.classList.add('typewriter');
  }
  
  if (index < text.length) {
    let currentText = text.substring(0, index + 1);
    
    if (originalHTML.includes('highlight-name')) {
      if (currentText.includes('Mohammad Hossein Heydari') && !currentText.includes('<span')) {
        const parts = currentText.split('Mohammad Hossein Heydari');
        currentText = parts[0] + '<span class="highlight-name">Mohammad Hossein Heydari</span>' + parts.slice(1).join('Mohammad Hossein Heydari');
      }
      if (currentText.includes('NITSON') && !currentText.includes('<span')) {
        const parts = currentText.split('NITSON');
        currentText = parts[0] + '<span class="highlight-name">NITSON</span>' + parts.slice(1).join('NITSON');
      }
      if (currentText.includes('محمدحسین حیدری') && !currentText.includes('<span')) {
        const parts = currentText.split('محمدحسین حیدری');
        currentText = parts[0] + '<span class="highlight-name">محمدحسین حیدری</span>' + parts.slice(1).join('محمدحسین حیدری');
      }
      if (currentText.includes('NITSON') && !currentText.includes('<span')) {
        const parts = currentText.split('NITSON');
        currentText = parts[0] + '<span class="highlight-name">NITSON</span>' + parts.slice(1).join('NITSON');
      }
    }
    
    element.innerHTML = currentText;
    index++;
    setTimeout(() => typeWriter(element, text, originalHTML, index, callback), 25);
  } else {
    element.innerHTML = originalHTML;
    element.classList.remove('typewriter');
    element.classList.add('done');
    if (callback) callback();
  }
}

// ============================================================
// CINEMATIC SLIDER
// ============================================================
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const slideCounter = document.getElementById('slideCounter');
const progressFill = document.getElementById('progressFill');
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
  currentSlide = index;
  slideCounter.textContent = `${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  progressFill.style.width = `${((index+1) / slides.length) * 100}%`;
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

prevBtn.addEventListener('click', () => { resetAutoPlay(); prevSlide(); });
nextBtn.addEventListener('click', () => { resetAutoPlay(); nextSlide(); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { resetAutoPlay(); prevSlide(); }
  if (e.key === 'ArrowRight') { resetAutoPlay(); nextSlide(); }
});

let touchStartX = 0, touchEndX = 0;
const sliderContainer = document.getElementById('sliderContainer');
sliderContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
sliderContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 40) {
    resetAutoPlay();
    if (diff > 0) nextSlide(); else prevSlide();
  }
}, { passive: true });

function startAutoPlay() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay();
}

const sliderWrapper = document.querySelector('.slider-wrapper');
sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
sliderWrapper.addEventListener('mouseleave', startAutoPlay);

goToSlide(0);
startAutoPlay();

// ============================================================
// CUSTOM CURSOR (desktop only)
// ============================================================
const cursor = document.getElementById('customCursor');

if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.classList.add('active');
  });

  const interactive = document.querySelectorAll('a, button, .tech-card, .build-card, .contact-link, .btn');
  interactive.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => cursor.classList.remove('active'));
} else {
  cursor.style.display = 'none';
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const offsetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// ============================================================
// INIT – set initial language and typewriter
// ============================================================
setLanguage(currentLang);
setTimeout(initTypewriter, 300);

console.log('🚀 NITSON Portfolio ready. ✦');