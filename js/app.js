/* Foot On The Beach — Animations & Interactions */
// Helpers
const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));

// Mobile nav
const navToggle = qs('.nav__toggle');
const navMenu = qs('.nav__menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// Year
qs('#year').textContent = new Date().getFullYear();

// Age gate
(function(){
  const gate = qs('#ageGate');
  const key = 'fob_age_ok';
  const ok = localStorage.getItem(key);
  if(!ok){
    gate.classList.remove('hidden');
    gate.setAttribute('aria-hidden','false');
  }
  qs('#enterSite')?.addEventListener('click', () => {
    localStorage.setItem(key,'1');
    gate.classList.add('hidden');
    gate.setAttribute('aria-hidden','true');
  });
})();

// Lenis smooth scroll
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.9,
  smoothWheel: true
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP setup
gsap.registerPlugin(ScrollTrigger);

// Split hero title into letters for stagger
(function splitHero(){
  const el = document.querySelector('.split');
  if(!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  text.split('').forEach(ch=>{
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(span);
  });
})();

// Hero intro
gsap.from('.hero__eyebrow',{ y:10, opacity:0, duration:.7, ease:'power2.out', delay:.1 });
gsap.from('.hero__subtitle',{ y:10, opacity:0, duration:.7, ease:'power2.out', delay:.25 });
gsap.from('.hero__cta',{ y:10, opacity:0, duration:.7, ease:'power2.out', delay:.35 });
gsap.from('.hero__badges',{ y:10, opacity:0, duration:.7, ease:'power2.out', delay:.45 });
gsap.from('.char',{ y:32, opacity:0, stagger:0.03, duration:.7, ease:'power3.out', delay:.12 });

// Parallax background
gsap.to('.hero__waves',{
  y: -30,
  ease:'none',
  scrollTrigger:{
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

// Reveal on scroll
qsa('.reveal, .card, .faq__item').forEach(el=>{
  gsap.fromTo(el, {opacity:0, y:24}, {
    opacity:1, y:0, duration:.8, ease:'power2.out',
    scrollTrigger:{ trigger: el, start: 'top 80%' }
  });
});

// Lightbox
const lb = (function(){
  const lb = qs('#lightbox');
  const img = qs('.lightbox__img');
  const close = qs('.lightbox__close');
  const prev = qs('.lightbox__prev');
  const next = qs('.lightbox__next');
  const items = qsa('[data-lightbox="g"]');
  let idx = 0;

  function open(i){
    idx = i;
    img.src = items[i].getAttribute('href');
    lb.classList.add('open');
    lb.setAttribute('aria-hidden','false');
  }
  function hide(){
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden','true');
  }
  function go(delta){
    idx = (idx + delta + items.length) % items.length;
    img.src = items[idx].getAttribute('href');
  }

  items.forEach((a, i)=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      open(i);
    });
  });

  close.addEventListener('click', hide);
  lb.addEventListener('click', e=>{ if(e.target === lb) hide(); });
  prev.addEventListener('click', ()=>go(-1));
  next.addEventListener('click', ()=>go(1));
  window.addEventListener('keydown', e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') hide();
    if(e.key === 'ArrowLeft') go(-1);
    if(e.key === 'ArrowRight') go(1);
  });
})();

// Swiper testimonials
new Swiper('.testimonial-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: { delay: 3800, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    760: { slidesPerView: 2 },
    1020: { slidesPerView: 3 }
  }
});
