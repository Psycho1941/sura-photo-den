/* =========================
   SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>e.isIntersecting && e.target.classList.add('show'));
},{threshold:.15});
reveals.forEach(r=>revealObs.observe(r));

/* =========================
   SCROLL SPY (NAV ACTIVE)
========================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', ()=>{
  let cur='';
  sections.forEach(s=>{
    const top=window.scrollY;
    const off=s.offsetTop-120;
    const h=s.offsetHeight;
    if(top>=off && top<off+h) cur=s.getAttribute('id');
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href')==='#'+cur);
  });
});
/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});


/* =========================
   LIGHTBOX GALLERY
========================= */
const imgs=[...document.querySelectorAll('#gallery img')];
let idx=0;
const lb=document.createElement('div');
lb.className='lightbox';
lb.innerHTML=`
  <span class="btn prev">❮</span>
  <img alt="">
  <span class="btn next">❯</span>
  <span class="btn close">✕</span>`;
document.body.appendChild(lb);
const lbImg=lb.querySelector('img');

function openLB(i){idx=i;lbImg.src=imgs[idx].src;lb.classList.add('show')}
function navLB(d){idx=(idx+d+imgs.length)%imgs.length;lbImg.src=imgs[idx].src}
imgs.forEach((im,i)=>im.addEventListener('click',()=>openLB(i)));
lb.querySelector('.prev').onclick=()=>navLB(-1);
lb.querySelector('.next').onclick=()=>navLB(1);
lb.querySelector('.close').onclick=()=>lb.classList.remove('show');
lb.onclick=e=>e.target===lb && lb.classList.remove('show');
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('show'))return;
  if(e.key==='ArrowLeft')navLB(-1);
  if(e.key==='ArrowRight')navLB(1);
  if(e.key==='Escape')lb.classList.remove('show');
});

/* =========================
   NETLIFY FORM + WHATSAPP
========================= */
function handleSubmit(e){
  e.preventDefault();
  const f=document.getElementById('booking-form');
  const btn=f.querySelector('button[type="submit"]');
  btn.classList.add('btn-loading'); btn.textContent='Submitting...';

  const d=new FormData(f);
  fetch('/',{method:'POST',body:d})
  .then(()=>{
    const msg=
`📸 New Booking - SURA PHOTO DEN
👤 ${d.get('name')}
📞 ${d.get('phone')}
📅 ${d.get('booking_date')}
📦 ${d.get('package')}`;
    window.open('https://wa.me/917997756254?text='+encodeURIComponent(msg),'_blank');
    alert('Booking submitted successfully!');
    f.reset();
  })
  .catch(()=>alert('Submission failed. Try again.'))
  .finally(()=>{
    btn.classList.remove('btn-loading'); btn.textContent='Submit Booking';
  });
}

/* =========================
   FLOATING WHATSAPP BUTTON
========================= */
const wa=document.createElement('a');
wa.href='https://wa.me/917997756254';
wa.target='_blank';
wa.className='wa-float';
wa.innerHTML='💬 WhatsApp';
document.body.appendChild(wa);
/* SCROLL REVEAL (SAFE) */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));
});
/* =========================
   PACKAGE DATA (EDIT HERE ONLY)
========================= */
const packages = [
  { hrs: "1 Hr", old: 3999, price: 2999 },
  { hrs: "4 Hrs", old: 11999, price: 8999, best: true },
  { hrs: "6 Hrs", old: 17999, price: 10999 },
  { hrs: "8 Hrs", old: 23999, price: 14999 }
];

const whatsappNumber = "917997756254";

/* =========================
   RENDER PACKAGES
========================= */
const list = document.getElementById("packagesList");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card" + (pkg.best ? " best" : "");

  card.innerHTML = `
    ${pkg.best ? `<span class="badge">🔥 Limited Offer</span>` : ""}
    <h3>${pkg.hrs}</h3>
    <p class="old-price">₹${pkg.old.toLocaleString()}</p>
    <p class="new-price">₹${pkg.price.toLocaleString()}</p>
    <a class="package-btn" target="_blank"
      href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `📸 Booking Enquiry - SURA PHOTO DEN\n\nPackage: ${pkg.hrs}\nOffer Price: ₹${pkg.price}`
      )}">
      📲 Book on WhatsApp
    </a>
  `;

  list.appendChild(card);
});
/* =========================
   FLOATING SOCIAL LINKS
========================= */
const social = document.createElement("div");
social.className = "social-float";

social.innerHTML = `
  <a href="https://wa.me/917997756254"
     target="_blank"
     class="social-btn social-whatsapp">
     💬 <span>WhatsApp</span>
  </a>

  <a href="https://www.instagram.com/suraphotoden?igsh=MXZhMGd5OGgxaTBibQ=="
     target="_blank"
     class="social-btn social-instagram">
     📸 <span>Instagram</span>
  </a>

  <a href="https://youtube.com/@suraphotoden?si=h9T1dcKpm6uqhIU3"
     target="_blank"
     class="social-btn social-youtube">
     ▶️ <span>YouTube</span>
  </a>
`;

document.body.appendChild(social);


