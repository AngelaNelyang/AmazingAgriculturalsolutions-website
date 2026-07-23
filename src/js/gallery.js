// Gallery page content + lightbox + category filtering.
import { initApp } from './app.js'

 const GALLERY = [
  { src: `${import.meta.env.BASE_URL}gallery/WhatsApp_Image_2026-07-22_at_7.09.00_PM.jpeg`, cat: 'farming', alt: 'Tanzanian farmer working in the field' },
  { src: `${import.meta.env.BASE_URL}gallery/WhatsApp_Image_2026-07-22_at_7.09.00_PM_(1).jpeg`, cat: 'farming', alt: 'African farmer in a crop field' },
  { src: `${import.meta.env.BASE_URL}gallery/WhatsApp_Image_2026-07-22_at_7.09.01_PM.jpeg`, cat: 'crops', alt: 'Healthy crops growing on a Tanzanian farm' },
  { src: `${import.meta.env.BASE_URL}gallery/WhatsApp_Image_2026-07-22_at_7.09.02_PM.jpeg`, cat: 'training', alt: 'Agricultural training with Tanzanian farmers' },
  { src: `${import.meta.env.BASE_URL}gallery/WhatsApp_Image_2026-07-22_at_7.11.25_PM.jpeg`, cat: 'products', alt: 'Amazing Agricultural Solutions products in use' },
  { src: `${import.meta.env.BASE_URL}products/WhatsApp_Image_2026-07-20_at_2.49.29_AM.jpeg`, cat: 'products', alt: 'Shamba Shield Bio product on the farm' },
  { src: 'https://images.pexels.com/photos/35246303/pexels-photo-35246303.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'farming', alt: 'African farmer working in a rice field' },
  { src: 'https://images.pexels.com/photos/14371701/pexels-photo-14371701.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'crops', alt: 'Tanzanian maize farming' },
  { src: 'https://images.pexels.com/photos/27624218/pexels-photo-27624218.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'irrigation', alt: 'Drip irrigation system on a Tanzanian farm' },
  { src: 'https://images.pexels.com/photos/10606633/pexels-photo-10606633.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'greenhouses', alt: 'Greenhouse farming in Tanzania' },
  { src: 'https://images.pexels.com/photos/38235232/pexels-photo-38235232.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'livestock', alt: 'African farmer with livestock' },
  { src: 'https://images.pexels.com/photos/32409510/pexels-photo-32409510.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'farming', alt: 'Farmer plowing field with oxen in Tanzania' },
  { src: 'https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'crops', alt: 'Freshly harvested corn in rural Tanzania' },
  { src: 'https://images.pexels.com/photos/29278365/pexels-photo-29278365.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'crops', alt: 'Sunflower field in Tanzania' },
  { src: 'https://images.pexels.com/photos/36683211/pexels-photo-36683211.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'crops', alt: 'African woman harvesting cassava' },
  { src: 'https://images.pexels.com/photos/31562315/pexels-photo-31562315.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'training', alt: 'African girls harvesting in a lush field' },
  { src: 'https://images.pexels.com/photos/15897036/pexels-photo-15897036.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'livestock', alt: 'African farmer with cattle' },
  { src: 'https://images.pexels.com/photos/29124242/pexels-photo-29124242.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'farming', alt: 'Tanzanian agricultural landscape' },
]

const FILTERS = [
  { key: 'gallery.filter.all', cat: 'all' },
  { key: 'gallery.filter.farming', cat: 'farming' },
  { key: 'gallery.filter.crops', cat: 'crops' },
  { key: 'gallery.filter.irrigation', cat: 'irrigation' },
  { key: 'gallery.filter.greenhouses', cat: 'greenhouses' },
  { key: 'gallery.filter.livestock', cat: 'livestock' },
  { key: 'gallery.filter.training', cat: 'training' },
  { key: 'gallery.filter.products', cat: 'products' },
]

const HERO_IMG = 'https://images.pexels.com/photos/31562315/pexels-photo-31562315.jpeg?auto=compress&cs=tinysrgb&w=1600'

function buildGallery() {
  const main = document.getElementById('main')
  main.innerHTML = `
  <section class="page-hero" aria-label="Gallery">
    <div class="hero-bg"><img src="${HERO_IMG}" alt="African farmers harvesting in a lush field" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="gallery.hero.eyebrow">Gallery</span>
      <h1 data-i18n="gallery.hero.title">Moments From the Field</h1>
      <p class="lead" data-i18n="gallery.hero.subtitle">A visual journey through our work with Tanzanian farmers, crops, livestock and communities.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="filter-bar" role="tablist" aria-label="Filter gallery by category" data-reveal>
        ${FILTERS.map((f, i) => `
          <button class="filter-btn${i === 0 ? ' is-active' : ''}" data-filter="${f.cat}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" data-i18n="${f.key}"></button>
        `).join('')}
      </div>
      <div class="gallery-grid" id="galleryGrid">
        ${GALLERY.map((g, i) => `
          <figure class="gallery-item" data-cat="${g.cat}" data-reveal data-reveal-delay="${(i % 4) + 1}">
            <img src="${g.src}" alt="${g.alt}" loading="lazy" />
            <button class="gallery-zoom" data-full="${g.src}" data-alt="${g.alt}" aria-label="View full image">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>
            </button>
          </figure>
        `).join('')}
        <p class="products-empty" id="galleryEmpty" data-i18n="gallery.empty" style="display:none"></p>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
    <button class="lightbox-close" id="lightboxClose" aria-label="Close image viewer">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous image">
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next image">
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
    </button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="" />
    </div>
  </div>
  `
}

function initGalleryFilters() {
  const buttons = document.querySelectorAll('.filter-btn')
  const items = document.querySelectorAll('.gallery-item')
  const empty = document.getElementById('galleryEmpty')
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
      items.forEach((item) => {
        const match = cat === 'all' || item.getAttribute('data-cat') === cat
        item.classList.toggle('is-hidden', !match)
        if (match) visible++
      })
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none'
    })
  })
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox')
  if (!lightbox) return
  const lightboxImg = document.getElementById('lightboxImg')
  const closeBtn = document.getElementById('lightboxClose')
  const prevBtn = document.getElementById('lightboxPrev')
  const nextBtn = document.getElementById('lightboxNext')
  const zoomButtons = document.querySelectorAll('.gallery-zoom')
  let currentIndex = 0
  let visibleItems = []

  const updateVisibleItems = () => {
    visibleItems = Array.from(document.querySelectorAll('.gallery-item:not(.is-hidden) .gallery-zoom'))
  }

  const showImage = (index) => {
    updateVisibleItems()
    if (!visibleItems.length) return
    currentIndex = (index + visibleItems.length) % visibleItems.length
    const btn = visibleItems[currentIndex]
    lightboxImg.src = btn.getAttribute('data-full')
    lightboxImg.alt = btn.getAttribute('data-alt') || ''
  }

  zoomButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      updateVisibleItems()
      const allButtons = Array.from(document.querySelectorAll('.gallery-item:not(.is-hidden) .gallery-zoom'))
      currentIndex = allButtons.indexOf(btn)
      showImage(currentIndex)
      lightbox.hidden = false
      document.body.style.overflow = 'hidden'
      closeBtn.focus()
    })
  })

  const close = () => {
    lightbox.hidden = true
    document.body.style.overflow = ''
  }

  closeBtn.addEventListener('click', close)
  prevBtn.addEventListener('click', () => showImage(currentIndex - 1))
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1))

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close()
  })

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentIndex + 1)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  buildGallery()
  initApp()
  initGalleryFilters()
  initLightbox()
})
