// Products page content + category filtering.
import { initApp } from './app.js'

const IMG = {
  hero: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=1600',
  shambaShield: '/products/WhatsApp_Image_2026-07-20_at_2.49.29_AM.jpeg',
  p1: 'https://images.pexels.com/photos/14371701/pexels-photo-14371701.jpeg?auto=compress&cs=tinysrgb&w=800',
  p2: 'https://images.pexels.com/photos/27624218/pexels-photo-27624218.jpeg?auto=compress&cs=tinysrgb&w=800',
  p3: 'https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg?auto=compress&cs=tinysrgb&w=800',
  p4: 'https://images.pexels.com/photos/38235232/pexels-photo-38235232.jpeg?auto=compress&cs=tinysrgb&w=800',
  p5: 'https://images.pexels.com/photos/32409510/pexels-photo-32409510.jpeg?auto=compress&cs=tinysrgb&w=800',
  p6: 'https://images.pexels.com/photos/29124242/pexels-photo-29124242.jpeg?auto=compress&cs=tinysrgb&w=800',
  p7: 'https://images.pexels.com/photos/29278365/pexels-photo-29278365.jpeg?auto=compress&cs=tinysrgb&w=800',
  p8: 'https://images.pexels.com/photos/36683211/pexels-photo-36683211.jpeg?auto=compress&cs=tinysrgb&w=800',
  p9: 'https://images.pexels.com/photos/35246303/pexels-photo-35246303.jpeg?auto=compress&cs=tinysrgb&w=800',
}

const PRODUCTS = [
  { img: IMG.p1, cat: 'crop', t: 'products.p1.title', x: 'products.p1.text', alt: 'Tanzanian farmer applying Shamba Shield Bio in a maize field' },
  { img: IMG.p2, cat: 'irrigation', t: 'products.p2.title', x: 'products.p2.text', alt: 'Drip irrigation system on a Tanzanian vegetable farm' },
  { img: IMG.p3, cat: 'greenhouses', t: 'products.p3.title', x: 'products.p3.text', alt: 'Greenhouse farming in Tanzania' },
  { img: IMG.p4, cat: 'livestock', t: 'products.p4.title', x: 'products.p4.text', alt: 'African nomadic farmer with livestock' },
  { img: IMG.p5, cat: 'training', t: 'products.p5.title', x: 'products.p5.text', alt: 'African farmer plowing field with oxen' },
  { img: IMG.p6, cat: 'agribusiness', t: 'products.p6.title', x: 'products.p6.text', alt: 'Tanzanian agribusiness planning' },
  { img: IMG.p7, cat: 'crop', t: 'products.p7.title', x: 'products.p7.text', alt: 'Sunflower field in Tanzania' },
  { img: IMG.p8, cat: 'crop', t: 'products.p8.title', x: 'products.p8.text', alt: 'African woman harvesting cassava' },
  { img: IMG.p9, cat: 'irrigation', t: 'products.p9.title', x: 'products.p9.text', alt: 'African farmer working in a rice field' },
]

const FILTERS = [
  { key: 'products.filter.all', cat: 'all' },
  { key: 'products.filter.crop', cat: 'crop' },
  { key: 'products.filter.irrigation', cat: 'irrigation' },
  { key: 'products.filter.greenhouses', cat: 'greenhouses' },
  { key: 'products.filter.livestock', cat: 'livestock' },
  { key: 'products.filter.training', cat: 'training' },
  { key: 'products.filter.agribusiness', cat: 'agribusiness' },
]

function buildProducts() {
  const main = document.getElementById('main')
  main.innerHTML = `
  <section class="page-hero" aria-label="Products">
    <div class="hero-bg"><img src="${IMG.hero}" alt="Tanzanian farmer holding harvested corn in a rural field" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="products.hero.eyebrow">Products &amp; Solutions</span>
      <h1 data-i18n="products.hero.title">Solutions for Every Farm</h1>
      <p class="lead" data-i18n="products.hero.subtitle">From bio-based crop protection to greenhouses and irrigation — explore what we offer Tanzanian farmers.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <!-- Featured main product -->
      <article class="featured-product" data-reveal>
        <div class="featured-product-media">
          <img src="${IMG.shambaShield}" alt="Shamba Shield Bio product" fetchpriority="high"/>
          <span class="featured-badge" data-i18n="products.featured.badge">Main Product</span>
        </div>
        <div class="featured-product-body">
          <span class="eyebrow" data-i18n="products.featured.eyebrow">Our Flagship Product</span>
          <h2 data-i18n="products.p1.title">Shamba Shield Bio</h2>
          <p class="lead" data-i18n="products.featured.text">Shamba Shield Bio is our flagship bio-based crop protector — a natural, eco-friendly solution that defends maize and vegetables from pests while nurturing soil health. Designed for Tanzanian farms, it helps farmers grow more, safely and sustainably.</p>
          <ul class="featured-benefits">
            <li class="why-item"><span class="why-check"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg></span><span data-i18n="products.featured.b1">100% bio-based and eco-friendly</span></li>
            <li class="why-item"><span class="why-check"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg></span><span data-i18n="products.featured.b2">Protects crops while improving soil health</span></li>
            <li class="why-item"><span class="why-check"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg></span><span data-i18n="products.featured.b3">Safe for farmers, families and the environment</span></li>
            <li class="why-item"><span class="why-check"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-11"/></svg></span><span data-i18n="products.featured.b4">Proven results across Tanzanian farms</span></li>
          </ul>
          <div class="hero-cta" style="margin-top:1.5rem">
            <a href="contact.html" class="btn btn-primary btn-lg" data-i18n="products.featured.cta">Order Now</a>
            <a href="contact.html" class="btn btn-outline btn-lg" data-i18n="products.featured.ask">Ask Our Team</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="section bg-mist">
    <div class="container">
      <div class="section-head center" data-reveal>
        <span class="eyebrow" data-i18n="products.more.eyebrow">More Solutions</span>
        <h2 data-i18n="products.more.title">Explore Our Full Range</h2>
        <p data-i18n="products.more.subtitle">Browse all our agricultural products and solutions by category.</p>
      </div>
      <div class="filter-bar" role="tablist" aria-label="Filter products by category" data-reveal>
        ${FILTERS.map((f, i) => `
          <button class="filter-btn${i === 0 ? ' is-active' : ''}" data-filter="${f.cat}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" data-i18n="${f.key}"></button>
        `).join('')}
      </div>
      <div class="products-grid" id="productsGrid">
        ${PRODUCTS.map((p, i) => `
          <article class="product-card" data-cat="${p.cat}" data-reveal data-reveal-delay="${(i % 3) + 1}">
            <div class="product-media"><img src="${p.img}" alt="${p.alt}" loading="lazy"/></div>
            <div class="product-body">
              <h3 data-i18n="${p.t}"></h3>
              <p data-i18n="${p.x}"></p>
            </div>
          </article>
        `).join('')}
        <p class="products-empty" id="productsEmpty" data-i18n="products.empty" style="display:none"></p>
      </div>
    </div>
  </section>
  `
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn')
  const cards = document.querySelectorAll('.product-card')
  const empty = document.getElementById('productsEmpty')
  if (!buttons.length) return
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('is-active')
        b.setAttribute('aria-selected', 'false')
      })
      btn.classList.add('is-active')
      btn.setAttribute('aria-selected', 'true')
      const cat = btn.getAttribute('data-filter')
      let visible = 0
      cards.forEach((card) => {
        const match = cat === 'all' || card.getAttribute('data-cat') === cat
        card.classList.toggle('is-hidden', !match)
        if (match) visible++
      })
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none'
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  buildProducts()
  initApp()
  initFilters()
})
