// Testimonials page content.
import { initApp } from './app.js'

const IMG = {
  hero: 'https://images.pexels.com/photos/31562315/pexels-photo-31562315.jpeg?auto=compress&cs=tinysrgb&w=1600',
  t1: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=300',
  t2: 'https://images.pexels.com/photos/36683211/pexels-photo-36683211.jpeg?auto=compress&cs=tinysrgb&w=300',
  t3: 'https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&w=300',
  t4: 'https://images.pexels.com/photos/29124242/pexels-photo-29124242.jpeg?auto=compress&cs=tinysrgb&w=300',
  t5: 'https://images.pexels.com/photos/38235232/pexels-photo-38235232.jpeg?auto=compress&cs=tinysrgb&w=300',
  t6: 'https://images.pexels.com/photos/15897036/pexels-photo-15897036.jpeg?auto=compress&cs=tinysrgb&w=300',
}

function iconStar() {
  return '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>'
}
function stars(n = 5) {
  return Array.from({ length: n }, () => iconStar()).join('')
}

const TESTIS = [
  { img: IMG.t1, q: 'testi.1.quote', n: 'testi.1.name', r: 'testi.1.role' },
  { img: IMG.t2, q: 'testi.2.quote', n: 'testi.2.name', r: 'testi.2.role' },
  { img: IMG.t3, q: 'testi.3.quote', n: 'testi.3.name', r: 'testi.3.role' },
  { img: IMG.t4, q: 'testi.4.quote', n: 'testi.4.name', r: 'testi.4.role' },
  { img: IMG.t5, q: 'testi.5.quote', n: 'testi.5.name', r: 'testi.5.role' },
  { img: IMG.t6, q: 'testi.6.quote', n: 'testi.6.name', r: 'testi.6.role' },
]

function buildTestimonials() {
  const main = document.getElementById('main')
  main.innerHTML = `
  <section class="page-hero" aria-label="Testimonials">
    <div class="hero-bg"><img src="${IMG.hero}" alt="African farmers harvesting in a lush field" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="testi.hero.eyebrow">Testimonials</span>
      <h1 data-i18n="testi.hero.title">Stories of Growth From the Field</h1>
      <p class="lead" data-i18n="testi.hero.subtitle">Real experiences from Tanzanian farmers who trusted us with their journey.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid grid-3">
        ${TESTIS.map((c, i) => `
          <article class="testi-card" data-reveal data-reveal-delay="${(i % 3) + 1}">
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
    </div>
  </section>

  <section class="section bg-mist">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="testi.cred.eyebrow">Our Credibility</span>
        <h2 data-i18n="testi.cred.title">Trusted Across Tanzania</h2>
        <p data-i18n="testi.cred.text">Our reputation is built on delivered results and long-term farmer relationships.</p>
      </div>
      <div class="cred-grid">
        <div class="cred-item" data-reveal>
          <div class="cred-value" data-counter="500">0</div>
          <div class="cred-label" data-i18n="home.stat.1.label"></div>
        </div>
        <div class="cred-item" data-reveal data-reveal-delay="2">
          <div class="cred-value" data-counter="15">0</div>
          <div class="cred-label" data-i18n="home.stat.3.label"></div>
        </div>
        <div class="cred-item" data-reveal data-reveal-delay="3">
          <div class="cred-value" data-counter="4" data-counter-suffix="+">0</div>
          <div class="cred-label" data-i18n="home.stat.4.label"></div>
        </div>
      </div>
    </div>
  </section>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  buildTestimonials()
  initApp()
})
