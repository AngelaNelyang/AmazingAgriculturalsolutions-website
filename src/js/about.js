// About page content.
import { initApp } from './app.js'

const IMG = {
  hero: 'https://images.pexels.com/photos/14371701/pexels-photo-14371701.jpeg?auto=compress&cs=tinysrgb&w=1600',
  story: 'https://images.pexels.com/photos/36683211/pexels-photo-36683211.jpeg?auto=compress&cs=tinysrgb&w=1000',
  mv: 'https://images.pexels.com/photos/31562315/pexels-photo-31562315.jpeg?auto=compress&cs=tinysrgb&w=1000',
}

function iconTarget() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>'
}
function iconEye() {
  return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>'
}
function iconCheck() {
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg>'
}

function buildAbout() {
  const main = document.getElementById('main')
  main.innerHTML = `
  <section class="page-hero" aria-label="About us">
    <div class="hero-bg"><img src="${IMG.hero}" alt="African farmer in a field in Tanzania" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="about.hero.eyebrow">About Us</span>
      <h1 data-i18n="about.hero.title">Rooted in Tanzania, Growing for Africa</h1>
      <p class="lead" data-i18n="about.hero.subtitle">We are a professional agricultural company dedicated to modernising farming and uplifting the communities who depend on it.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="about-story">
        <div class="about-story-text" data-reveal>
          <span class="eyebrow" data-i18n="about.story.eyebrow">Our Story</span>
          <h2 data-i18n="about.story.title">From Temeke to Farms Across Tanzania</h2>
          <p data-i18n="about.story.p1"></p>
          <p data-i18n="about.story.p2"></p>
          <p data-i18n="about.story.p3"></p>
        </div>
        <div class="about-story-img" data-reveal data-reveal-delay="2">
          <img src="${IMG.story}" alt="Tanzanian woman farmer harvesting in a field" loading="lazy"/>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-mist">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="about.mv.eyebrow">Direction</span>
        <h2 data-i18n="about.mv.title">Mission &amp; Vision</h2>
      </div>
      <div class="mv-grid">
        <article class="mv-card" data-reveal>
          <span class="feature-ico">${iconTarget()}</span>
          <h3 data-i18n="about.mission.title"></h3>
          <p data-i18n="about.mission.text"></p>
        </article>
        <article class="mv-card" data-reveal data-reveal-delay="2">
          <span class="feature-ico">${iconEye()}</span>
          <h3 data-i18n="about.vision.title"></h3>
          <p data-i18n="about.vision.text"></p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="about.values.eyebrow">What We Stand For</span>
        <h2 data-i18n="about.values.title">Our Core Values</h2>
        <p data-i18n="about.values.subtitle">The principles that guide every decision we make in the field.</p>
      </div>
      <div class="values-grid">
        ${[1, 2, 3, 4, 5, 6].map((n) => `
          <article class="value-card" data-reveal data-reveal-delay="${(n % 3) + 1}">
            <div class="value-num">0${n}</div>
            <h3 data-i18n="about.value.${n}.title"></h3>
            <p data-i18n="about.value.${n}.text"></p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="section bg-beige">
    <div class="container">
      <div class="about-story">
        <div class="about-story-img" data-reveal>
          <img src="${IMG.mv}" alt="African girls harvesting in a lush field" loading="lazy"/>
        </div>
        <div class="about-story-text" data-reveal data-reveal-delay="2">
          <span class="eyebrow" data-i18n="about.why.eyebrow">Why Us</span>
          <h2 data-i18n="about.why.title"></h2>
          <p data-i18n="about.why.text"></p>
          <ul class="why-list">
            ${[1, 2, 3, 4, 5, 6].map((n) => `
              <li class="why-item"><span class="why-check">${iconCheck()}</span><span data-i18n="about.why.${n}"></span></li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  buildAbout()
  initApp()
})
