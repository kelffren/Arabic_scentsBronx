// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=>{navMenu.classList.toggle('active');});

// Carrusel 3D avanzado
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(()=>{
    slides.forEach(s=>s.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform='rotateY(0deg) scale(1.05)';
    setTimeout(()=>{slides[currentSlide].style.transform='rotateY(0deg) scale(1)';},2900);
    currentSlide=(currentSlide+1)%slides.length;
},4000);

// Comprar con WhatsApp dinámico
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn=>{
    btn.addEventListener('click', e=>{
        e.preventDefault();
        const product = btn.closest('.product');
        const name = product.dataset.name;
        const price = product.dataset.price;
        const phone = '573001234567'; // tu número
        const url = `https://wa.me/${phone}?text=Quiero+comprar+${encodeURIComponent(name)}+por+${encodeURIComponent(price)}`;
        window.open(url,'_blank');
    });
});

// Fade-in al hacer scroll
const faders = document.querySelectorAll('.product, #contacto h2');
const appearOptions = {threshold:0.3};
const appearOnScroll = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader=>{appearOnScroll.observe(fader);});