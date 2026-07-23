// Home page content + interactions.
import { initApp } from './app.js'

// Image URLs (verified Pexels — authentic African/Tanzanian agriculture)
const IMG = {
  hero: 'https://images.pexels.com/photos/35246303/pexels-photo-35246303.jpeg?auto=compress&cs=tinysrgb&w=1600',
  sol1: 'https://images.pexels.com/photos/14371701/pexels-photo-14371701.jpeg?auto=compress&cs=tinysrgb&w=800',
  sol2: 'https://images.pexels.com/photos/27624218/pexels-photo-27624218.jpeg?auto=compress&cs=tinysrgb&w=800',
  sol3: 'https://images.pexels.com/photos/38235232/pexels-photo-38235232.jpeg?auto=compress&cs=tinysrgb&w=800',
  sol4: 'https://images.pexels.com/photos/32409510/pexels-photo-32409510.jpeg?auto=compress&cs=tinysrgb&w=800',
  sol5: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=800',
  sol6: 'https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg?auto=compress&cs=tinysrgb&w=800',
  proj1: 'https://images.pexels.com/photos/27624218/pexels-photo-27624218.jpeg?auto=compress&cs=tinysrgb&w=1000',
  proj2: 'https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg?auto=compress&cs=tinysrgb&w=1000',
  proj3: 'https://images.pexels.com/photos/29124242/pexels-photo-29124242.jpeg?auto=compress&cs=tinysrgb&w=1000',
  testi1: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=200',
  testi2: 'https://images.pexels.com/photos/36683211/pexels-photo-36683211.jpeg?auto=compress&cs=tinysrgb&w=200',
  testi3: 'https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&w=200',
  cta: 'https://images.pexels.com/photos/14371701/pexels-photo-14371701.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

function iconLeaf() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>'
}
function iconDroplet() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>'
}
function iconBeaker() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M9 3h6M10 3v6.5L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9.5V3"/><path d="M7.5 15h9"/></svg>'
}
function iconBook() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>'
}
function iconChart() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 5-6"/></svg>'
}
function iconCpu() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>'
}
function iconShield() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>'
}
function iconSprout() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 20h10M12 20V9M12 9c0-3 2-5 5-5 0 3-2 5-5 5zM12 9c0-3-2-5-5-5 0 3 2 5 5 5z"/></svg>'
}
function iconHeart() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>'
}
function iconHandshake() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2 2a1 1 0 1 0 3-3l-3-3"/><path d="M3 7l2-2 4 4 2-2 4 4 2-2 4 4-4 4-2-2-4 4-2-2-4 4-2-2z"/></svg>'
}
function iconStar() {
  return '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>'
}

function stars(n = 5) {
  return Array.from({ length: n }, () => iconStar()).join('')
}

function buildHome() {
  const main = document.getElementById('main')

  main.innerHTML = `
  <!-- Hero -->
  <section class="hero" aria-label="Welcome">
    <div class="hero-bg"><img src="${IMG.hero}" alt="African farmer working in a rice field in Tanzania" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="home.hero.eyebrow">Serving All Regions of Tanzania</span>
      <h1 data-i18n="home.hero.title">Cultivating Tomorrow\u2019s Harvest, Today</h1>
      <p class="lead" data-i18n="home.hero.subtitle">We deliver modern, sustainable agricultural solutions that empower Tanzanian farmers, protect the land, and grow profitable agribusinesses across East Africa.</p>
      <div class="hero-cta">
        <a href="contact.html" class="btn btn-gold btn-lg" data-i18n="home.hero.cta.contact">Contact Us</a>
        <a href="products.html" class="btn btn-ghost btn-lg" data-i18n="home.hero.cta.products">Our Products</a>
      </div>
    </div>
    <div class="hero-scroll" data-i18n="home.hero.scroll">Scroll to explore</div>
  </section>

  <!-- Highlights -->
  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.highlights.eyebrow">Who We Are</span>
        <h2 data-i18n="home.highlights.title">Built on Trust, Driven by Innovation</h2>
        <p data-i18n="home.highlights.subtitle">A full-spectrum agricultural partner for every stage of the farming journey.</p>
      </div>
      <div class="grid grid-4">
        ${[
          { ico: iconSprout(), t: 'home.highlight.1.title', x: 'home.highlight.1.text' },
          { ico: iconCpu(), t: 'home.highlight.2.title', x: 'home.highlight.2.text' },
          { ico: iconChart(), t: 'home.highlight.3.title', x: 'home.highlight.3.text' },
          { ico: iconShield(), t: 'home.highlight.4.title', x: 'home.highlight.4.text' },
        ].map((c, i) => `
          <article class="feature-card" data-reveal data-reveal-delay="${i + 1}">
            <span class="feature-ico">${c.ico}</span>
            <h3 data-i18n="${c.t}"></h3>
            <p data-i18n="${c.x}"></p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Solutions -->
  <section class="section bg-mist">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.solutions.eyebrow">What We Do</span>
        <h2 data-i18n="home.solutions.title">Featured Agricultural Solutions</h2>
        <p data-i18n="home.solutions.subtitle">End-to-end services tailored to Tanzania\u2019s crops, climate and communities.</p>
      </div>
      <div class="grid grid-3">
        ${[
          { ico: iconSprout(), t: 'home.sol.1.title', x: 'home.sol.1.text', img: IMG.sol1 },
          { ico: iconDroplet(), t: 'home.sol.2.title', x: 'home.sol.2.text', img: IMG.sol2 },
          { ico: iconHeart(), t: 'home.sol.3.title', x: 'home.sol.3.text', img: IMG.sol3 },
          { ico: iconBook(), t: 'home.sol.4.title', x: 'home.sol.4.text', img: IMG.sol4 },
          { ico: iconChart(), t: 'home.sol.5.title', x: 'home.sol.5.text', img: IMG.sol5 },
          { ico: iconCpu(), t: 'home.sol.6.title', x: 'home.sol.6.text', img: IMG.sol6 },
        ].map((c, i) => `
          <article class="card" data-reveal data-reveal-delay="${(i % 3) + 1}">
            <div class="card-media"><img src="${c.img}" alt="Tanzanian agricultural solution" loading="lazy"/></div>
            <div class="card-body">
              <span class="sol-ico">${c.ico}</span>
              <h3 data-i18n="${c.t}"></h3>
              <p data-i18n="${c.x}"></p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Why choose us -->
  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.why.eyebrow">Why Choose Us</span>
        <h2 data-i18n="home.why.title">A Partner Who Understands Tanzanian Farming</h2>
        <p data-i18n="home.why.subtitle">We combine local knowledge with modern science to deliver results you can measure.</p>
      </div>
      <div class="grid grid-4">
        ${[
          { ico: iconHandshake(), t: 'home.why.1.title', x: 'home.why.1.text' },
          { ico: iconChart(), t: 'home.why.2.title', x: 'home.why.2.text' },
          { ico: iconLeaf(), t: 'home.why.3.title', x: 'home.why.3.text' },
          { ico: iconHeart(), t: 'home.why.4.title', x: 'home.why.4.text' },
        ].map((c, i) => `
          <article class="feature-card" data-reveal data-reveal-delay="${i + 1}">
            <span class="feature-ico">${c.ico}</span>
            <h3 data-i18n="${c.t}"></h3>
            <p data-i18n="${c.x}"></p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="section bg-deep">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.stats.eyebrow">Our Impact</span>
        <h2 style="color:var(--white)" data-i18n="home.stats.title">Growing With Tanzania\u2019s Farmers</h2>
      </div>
      <div class="stats-grid">
        ${[
          { n: 1, val: 500 },
          { n: 2, val: 1200 },
          { n: 3, val: 15 },
          { n: 4, val: 4, suffix: '+' },
        ].map((s) => `
          <div class="stat" data-reveal data-reveal-delay="${s.n}">
            <div class="stat-value" data-counter="${s.val}"${s.suffix ? ` data-counter-suffix="${s.suffix}"` : ''} data-i18n="home.stat.${s.n}.value">0</div>
            <div class="stat-label" data-i18n="home.stat.${s.n}.label"></div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.projects.eyebrow">Featured Projects</span>
        <h2 data-i18n="home.projects.title">Real Farms. Real Results.</h2>
        <p data-i18n="home.projects.subtitle">A look at the work we are proud of across Tanzania.</p>
      </div>
      <div class="grid grid-3">
        ${[
          { img: IMG.proj1, tag: 'home.project.1.tag', t: 'home.project.1.title', x: 'home.project.1.text' },
          { img: IMG.proj2, tag: 'home.project.2.tag', t: 'home.project.2.title', x: 'home.project.2.text' },
          { img: IMG.proj3, tag: 'home.project.3.tag', t: 'home.project.3.title', x: 'home.project.3.text' },
        ].map((c, i) => `
          <article class="project-card" data-reveal data-reveal-delay="${i + 1}">
            <img src="${c.img}" alt="Tanzanian agricultural project" loading="lazy"/>
            <div class="project-overlay">
              <span class="card-tag" data-i18n="${c.tag}"></span>
              <h3 data-i18n="${c.t}"></h3>
              <p data-i18n="${c.x}"></p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Testimonials preview -->
  <section class="section bg-beige">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.testi.eyebrow">Farmer Voices</span>
        <h2 data-i18n="home.testi.title">What Our Farmers Say</h2>
        <p data-i18n="home.testi.subtitle">Stories of growth from the people who matter most.</p>
      </div>
      <div class="grid grid-3">
        ${[
          { img: IMG.testi1, q: 'testi.1.quote', n: 'testi.1.name', r: 'testi.1.role' },
          { img: IMG.testi2, q: 'testi.2.quote', n: 'testi.2.name', r: 'testi.2.role' },
          { img: IMG.testi3, q: 'testi.3.quote', n: 'testi.3.name', r: 'testi.3.role' },
        ].map((c, i) => `
          <article class="testi-card" data-reveal data-reveal-delay="${i + 1}">
            <div class="testi-stars" aria-label="5 out of 5 stars">${stars()}</div>
            <p class="testi-quote" data-i18n="${c.q}"></p>
            <div class="testi-author">
              <img class="testi-avatar" src="${c.img}" alt="Tanzanian farmer" loading="lazy"/>
              <div>
                <div class="testi-name" data-i18n="${c.n}"></div>
                <div class="testi-role" data-i18n="${c.r}"></div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:2.5rem" data-reveal>
        <a href="testimonials.html" class="btn btn-outline btn-lg" data-i18n="home.testi.more">Read more stories</a>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="section-tight">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="home.partners.eyebrow">Our Partners</span>
        <h2 data-i18n="home.partners.title">Trusted by organisations across the sector</h2>
        <p data-i18n="home.partners.note">Partner logos are shown as placeholders for illustration.</p>
      </div>
      <div class="partners-row" data-reveal>
        ${['AgriCo', 'FarmTrust', 'TanzSeed', 'GreenGrow', 'EastAgri'].map((p) => `
          <div class="partner-logo">${p}</div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <div class="hero-bg"><img src="${IMG.cta}" alt="Tanzanian farmer in field" loading="lazy"/></div>
        <div class="hero-overlay"></div>
        <div style="position:relative;z-index:1">
          <h2 data-i18n="home.cta.title">Ready to grow with us?</h2>
          <p data-i18n="home.cta.text">Let\u2019s build a farming future that is productive, sustainable and profitable \u2014 together.</p>
          <div class="hero-cta">
            <a href="contact.html" class="btn btn-gold btn-lg" data-i18n="home.cta.contact">Contact Us</a>
            <a href="products.html" class="btn btn-ghost btn-lg" data-i18n="home.cta.products">Explore Products</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  buildHome()
  initApp()
})
