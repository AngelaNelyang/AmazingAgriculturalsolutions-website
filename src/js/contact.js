// Contact page content + form validation.
import { initApp, PHONE_1, PHONE_2, EMAIL, ADDRESS } from './app.js'
import { getLang, TRANSLATIONS } from './i18n.js'

const IMG = {
  hero: 'https://images.pexels.com/photos/32409510/pexels-photo-32409510.jpeg?auto=compress&cs=tinysrgb&w=1600',
}

function iconPin() {
  return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>'
}
function iconPhone() {
  return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>'
}
function iconMail() {
  return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
}
function iconClock() {
  return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
}

function buildContact() {
  const main = document.getElementById('main')
  main.innerHTML = `
  <section class="page-hero" aria-label="Contact us">
    <div class="hero-bg"><img src="${IMG.hero}" alt="Tanzanian farmer plowing field with oxen under clear sky" fetchpriority="high"/></div>
    <div class="hero-overlay"></div>
    <div class="container hero-inner">
      <span class="eyebrow" data-i18n="contact.hero.eyebrow">Contact Us</span>
      <h1 data-i18n="contact.hero.title">Let\u2019s Grow Together</h1>
      <p class="lead" data-i18n="contact.hero.subtitle">Reach out and our team will respond within one business day.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <!-- Info -->
        <div data-reveal>
          <span class="eyebrow" data-i18n="contact.info.eyebrow">Get in Touch</span>
          <h2 data-i18n="contact.info.title">Contact Information</h2>
          <div class="contact-info-list">
            <div class="contact-info-item">
              <span class="contact-info-ico">${iconPin()}</span>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.address.label"></div>
                <div class="contact-info-value" data-i18n="contact.info.address.value"></div>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="contact-info-ico">${iconPhone()}</span>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.phone.label"></div>
                <div class="contact-info-value">
                  <a href="tel:${PHONE_1.replace(/\s/g, '')}">${PHONE_1}</a><br/>
                  <a href="tel:${PHONE_2.replace(/\s/g, '')}">${PHONE_2}</a>
                </div>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="contact-info-ico">${iconMail()}</span>
              <div>
                <div class="contact-info-label" data-i18n="contact.info.email.label"></div>
                <div class="contact-info-value"><a href="mailto:${EMAIL}">${EMAIL}</a></div>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="contact-info-ico">${iconClock()}</span>
              <div style="flex:1">
                <div class="contact-info-label" data-i18n="contact.info.hours.label"></div>
                <div class="hours-list">
                  <div class="hours-row"><span data-i18n="contact.hours.mf"></span></div>
                  <div class="hours-row"><span data-i18n="contact.hours.sat"></span></div>
                  <div class="hours-row"><span data-i18n="contact.hours.sun"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-map" data-reveal data-reveal-delay="2">
            <iframe title="Map of Temeke, Dar es Salaam, Tanzania" src="https://www.google.com/maps?q=Temeke,Dar+es+Salaam,Tanzania&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          </div>
        </div>

        <!-- Form -->
        <div data-reveal data-reveal-delay="2">
          <span class="eyebrow" data-i18n="contact.form.eyebrow">Send a Message</span>
          <h2 data-i18n="contact.form.title">We\u2019d Love to Hear From You</h2>
          <form class="contact-form" id="contactForm" novalidate>
            <div class="form-feedback" id="formFeedback" role="status" aria-live="polite"></div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name"><span data-i18n="contact.form.name"></span> <span class="req">*</span></label>
                <input class="form-control" type="text" id="name" name="name" autocomplete="name" required data-i18n-placeholder="contact.form.name" />
                <span class="form-error" id="errName"></span>
              </div>
              <div class="form-group">
                <label class="form-label" for="email"><span data-i18n="contact.form.email"></span> <span class="req">*</span></label>
                <input class="form-control" type="email" id="email" name="email" autocomplete="email" required data-i18n-placeholder="contact.form.email" />
                <span class="form-error" id="errEmail"></span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="phone"><span data-i18n="contact.form.phone"></span></label>
                <input class="form-control" type="tel" id="phone" name="phone" autocomplete="tel" data-i18n-placeholder="contact.form.phone" />
              </div>
              <div class="form-group">
                <label class="form-label" for="subject"><span data-i18n="contact.form.subject"></span></label>
                <input class="form-control" type="text" id="subject" name="subject" data-i18n-placeholder="contact.form.subject" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="message"><span data-i18n="contact.form.message"></span> <span class="req">*</span></label>
              <textarea class="form-control" id="message" name="message" required data-i18n-placeholder="contact.form.message"></textarea>
              <span class="form-error" id="errMessage"></span>
            </div>
            <button type="submit" class="btn btn-primary btn-lg form-submit" id="submitBtn" data-i18n="contact.form.submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  `
}

function t(key) {
  const lang = getLang()
  return (TRANSLATIONS[lang] || TRANSLATIONS.en)[key] || key
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

function showFieldError(field, errEl, msg) {
  field.classList.add('is-invalid')
  field.setAttribute('aria-invalid', 'true')
  if (errEl) errEl.textContent = msg
}
function clearFieldError(field, errEl) {
  field.classList.remove('is-invalid')
  field.removeAttribute('aria-invalid')
  if (errEl) errEl.textContent = ''
}

function initForm() {
  const form = document.getElementById('contactForm')
  if (!form) return
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const errName = document.getElementById('errName')
  const errEmail = document.getElementById('errEmail')
  const errMsg = document.getElementById('errMessage')
  const feedback = document.getElementById('formFeedback')
  const submitBtn = document.getElementById('submitBtn')

  ;[name, email, message].forEach((f) => {
    f.addEventListener('input', () => {
      const errEl = f === name ? errName : f === email ? errEmail : errMsg
      clearFieldError(f, errEl)
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    feedback.className = 'form-feedback'
    feedback.textContent = ''
    let valid = true

    if (!name.value.trim()) {
      showFieldError(name, errName, t('contact.form.error.name'))
      valid = false
    } else clearFieldError(name, errName)

    if (!email.value.trim() || !isValidEmail(email.value.trim())) {
      showFieldError(email, errEmail, t('contact.form.error.email'))
      valid = false
    } else clearFieldError(email, errEmail)

    if (!message.value.trim()) {
      showFieldError(message, errMsg, t('contact.form.error.message'))
      valid = false
    } else clearFieldError(message, errMsg)

    if (!valid) {
      const firstInvalid = form.querySelector('.is-invalid')
      if (firstInvalid) firstInvalid.focus()
      return
    }

    submitBtn.disabled = true
    const original = submitBtn.textContent
    submitBtn.textContent = t('contact.form.sending')
    // Simulate async submission 
   fetch('https://formspree.io/f/xlgqwvrp', {
  method: 'POST',
  body: new FormData(form),
  headers: {
    Accept: 'application/json'
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    feedback.className = 'form-feedback is-success'
    feedback.textContent = t('contact.form.success')

    form.reset()

    feedback.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    setTimeout(() => {
      feedback.className = 'form-feedback'
      feedback.textContent = ''
    }, 6000)
  })
  .catch(() => {
    feedback.className = 'form-feedback is-error'
    feedback.textContent =
      'Sorry, your message could not be sent. Please try again.'
  })
  .finally(() => {
    submitBtn.disabled = false
    submitBtn.textContent = original
  })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  buildContact()
  initApp()
  initForm()
})
