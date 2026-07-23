// Core application module: navigation, footer, language switch, animations.
// Loaded on every page. Vanilla ES6+, no dependencies.

import { getLang, setLang, applyTranslations, TRANSLATIONS } from './i18n.js'

const PHONE_1 = '+255 785 439 315'
const PHONE_2 = '+255 764 013 664'
const EMAIL = 'info@aasolutions.co.tz'
const ADDRESS = 'Temeke, Dar es Salaam, Tanzania'
const SOCIAL = {
  youtube: 'https://www.youtube.com/@aas2025_tz',
  instagram: 'https://www.instagram.com/aas2025_tz',
  tiktok: 'https://www.tiktok.com/@amazingagriculturalsolut',
}

const NAV_ITEMS = [
  { key: 'nav.home', href: 'index.html' },
  { key: 'nav.about', href: 'about.html' },
  { key: 'nav.products', href: 'products.html' },
  { key: 'nav.testimonials', href: 'testimonials.html' },
  { key: 'nav.gallery', href: 'gallery.html' },
  { key: 'nav.contact', href: 'contact.html' },
]

const FOOTER_PRODUCTS = [
  { key: 'products.filter.crop', href: 'products.html' },
  { key: 'products.filter.irrigation', href: 'products.html' },
  { key: 'products.filter.greenhouses', href: 'products.html' },
  { key: 'products.filter.training', href: 'products.html' },
]

function currentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html'
  return path === '' ? 'index.html' : path
}

// ---- Brand logo (company logo image) ----
function brandLogo(size = 52) {
return `<img src="${import.meta.env.BASE_URL}Logo_ya_AAS-photoaidcom-cropped.jpeg" alt="Amazing Agricultural Solutions logo" class="brand-logo-img" width="${size}" height="${size}" />`  
}

// ---- Build header ----
function buildHeader() {
  const header = document.createElement('header')
  header.className = 'site-header'
  header.setAttribute('role', 'banner')
  const page = currentPage()

  const navLinks = NAV_ITEMS.map(
    (item) => `<li><a href="${item.href}" class="nav-link${item.href === page ? ' is-active' : ''}" data-i18n="${item.key}" aria-current="${item.href === page ? 'page' : 'false'}">${TRANSLATIONS.en[item.key]}</a></li>`
  ).join('')

  header.innerHTML = `
    <div class="container nav-inner">
      <a href="index.html" class="brand" aria-label="Amazing Agricultural Solutions home">
        ${brandLogo(56)}
        <span class="brand-text">
          <span class="brand-name" data-i18n="brand.name">Amazing Agricultural Solutions</span>
          <span class="brand-tagline" data-i18n="brand.tagline">Modern Farming. Sustainable Growth.</span>
        </span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu" data-i18n-aria="nav.menu">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </button>
        <ul class="nav-menu" id="navMenu">${navLinks}</ul>
        <button class="lang-switch" id="langSwitch" aria-label="Switch language" title="Switch language">
          <svg class="lang-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18"/></svg>
          <span data-i18n="nav.langLabel">SW</span>
        </button>
      </nav>
    </div>
  `
  return header
}

// ---- Build footer ----
function buildFooter() {
  const footer = document.createElement('footer')
  footer.className = 'site-footer'
  footer.setAttribute('role', 'contentinfo')
  const page = currentPage()

  const quickLinks = NAV_ITEMS.map(
    (i) => `<li><a href="${i.href}" data-i18n="${i.key}">${TRANSLATIONS.en[i.key]}</a></li>`
  ).join('')
  const productLinks = FOOTER_PRODUCTS.map(
    (i) => `<li><a href="${i.href}" data-i18n="${i.key}">${TRANSLATIONS.en[i.key]}</a></li>`
  ).join('')

  footer.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-col footer-brand">
        <a href="index.html" class="brand brand-footer" aria-label="Amazing Agricultural Solutions home">
          ${brandLogo(64)}
          <span class="brand-name" data-i18n="brand.name">Amazing Agricultural Solutions</span>
        </a>
        <p class="footer-about" data-i18n="footer.about.text">${TRANSLATIONS.en['footer.about.text']}</p>
        <div class="footer-social" aria-label="Social media">
          <a href="${SOCIAL.youtube}" class="social-icon social-yt" target="_blank" rel="noopener" aria-label="YouTube">
            ${iconYouTube()}
          </a>
          <a href="${SOCIAL.instagram}" class="social-icon social-ig" target="_blank" rel="noopener" aria-label="Instagram">
            ${iconInstagram()}
          </a>
          <a href="${SOCIAL.tiktok}" class="social-icon social-tt" target="_blank" rel="noopener" aria-label="TikTok">
            ${iconTikTok()}
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading" data-i18n="footer.quick.title">Quick Links</h3>
        <ul class="footer-links">${quickLinks}</ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading" data-i18n="footer.products.title">Solutions</h3>
        <ul class="footer-links">${productLinks}</ul>
      </div>
      <div class="footer-col">
        <h3 class="footer-heading" data-i18n="footer.contact.title">Contact</h3>
        <ul class="footer-contact">
          <li class="footer-contact-item"><span class="footer-ico" aria-hidden="true">${iconPin()}</span><span>${ADDRESS}</span></li>
          <li class="footer-contact-item"><span class="footer-ico" aria-hidden="true">${iconPhone()}</span><a href="tel:${PHONE_1.replace(/\s/g, '')}">${PHONE_1}</a></li>
          <li class="footer-contact-item"><span class="footer-ico" aria-hidden="true">${iconPhone()}</span><a href="tel:${PHONE_2.replace(/\s/g, '')}">${PHONE_2}</a></li>
          <li class="footer-contact-item"><span class="footer-ico" aria-hidden="true">${iconMail()}</span><a href="mailto:${EMAIL}">${EMAIL}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>&copy; <span id="year"></span> Amazing Agricultural Solutions. <span data-i18n="footer.rights">${TRANSLATIONS.en['footer.rights']}</span></p>
      <button class="back-to-top" id="backToTop" aria-label="Back to top" data-i18n-aria="footer.backtotop">
        ${iconUp()}<span data-i18n="footer.backtotop">Back to top</span>
      </button>
    </div>
  `
  return footer
}

// ---- Icons (inline SVG) ----
function iconYouTube() {
  return '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/></svg>'
}
function iconInstagram() {
  return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>'
}
function iconTikTok() {
  return '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.2v3c-1.4 0-2.7-.4-3.8-1.1v6.6c0 3.4-2.8 6.1-6.2 5.7-2.9-.3-5-2.7-5-5.6 0-3.3 2.9-5.9 6.2-5.5v3.1c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7 1.2-2.7 2.7 0 1.4 1 2.6 2.4 2.7 1.5.1 2.8-1 2.8-2.6V3h3.7z"/></svg>'
}
function iconPin() {
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>'
}
function iconPhone() {
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>'
}
function iconMail() {
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
}
function iconUp() {
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
}

// ---- Behaviors ----
function initNav() {
  const toggle = document.getElementById('navToggle')
  const menu = document.getElementById('navMenu')
  if (!toggle || !menu) return
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open')
    toggle.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  })
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.classList.remove('is-open')
      toggle.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open')
      toggle.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.focus()
    }
  })
}

function initLangSwitch() {
  const btn = document.getElementById('langSwitch')
  if (!btn) return
  const update = () => {
    const lang = getLang()
    btn.querySelector('span').textContent = lang === 'en' ? 'SW' : 'EN'
  }
  update()
  btn.addEventListener('click', () => {
    setLang(getLang() === 'en' ? 'sw' : 'en')
    update()
  })
  document.addEventListener('langchange', update)
}

function initBackToTop() {
  const btn = document.getElementById('backToTop')
  if (!btn) return
  const toggleVisibility = () => {
    btn.classList.toggle('is-visible', window.scrollY > 400)
  }
  toggleVisibility()
  window.addEventListener('scroll', toggleVisibility, { passive: true })
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

// ---- Scroll reveal animation ----
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]')
  if (!els.length) return
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  els.forEach((el) => io.observe(el))
}

// ---- Animated counters ----
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]')
  if (!counters.length) return
  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-counter'), 10)
    const suffix = el.getAttribute('data-counter-suffix') || ''
    const duration = 1600
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = String(Math.floor(eased * target)) + suffix
      if (p < 1) requestAnimationFrame(step)
      else el.textContent = String(target) + suffix
    }
    requestAnimationFrame(step)
  }
  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate)
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target)
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.4 }
  )
  counters.forEach((el) => io.observe(el))
}

// ---- Smooth scroll for in-page anchors ----
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    const id = link.getAttribute('href')
    if (id === '#' || id.length < 2) return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

// ---- Sticky header shadow on scroll ----
function initHeaderScroll() {
  const header = document.querySelector('.site-header')
  if (!header) return
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

// ---- Bootstrap ----
export function initApp() {
  const header = buildHeader()
  const footer = buildFooter()
  document.body.prepend(header)
  document.body.appendChild(footer)
  document.getElementById('year').textContent = String(new Date().getFullYear())

  const lang = getLang()
  applyTranslations(lang)
  document.documentElement.lang = lang

  initNav()
  initLangSwitch()
  initBackToTop()
  initReveal()
  initCounters()
  initSmoothScroll()
  initHeaderScroll()
}

export { PHONE_1, PHONE_2, EMAIL, ADDRESS, SOCIAL }
