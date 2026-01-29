document.addEventListener('DOMContentLoaded', () => {

    /* Hamburger */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    /* Cursor */
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', e => {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });

    /* Scroll progress */
    window.addEventListener('scroll', () => {
        const h = document.body.scrollHeight - window.innerHeight;
        document.querySelector('.scroll-progress').style.width =
            (window.scrollY / h) * 100 + '%';
    });

    /* Typing */
    const phrases = ["Hukesh", "Developer", "Freelancer", "Designer"];
    let i = 0, j = 0, del = false;
    const t = document.querySelector('.typing-text');

    (function type() {
        t.textContent = phrases[i].slice(0, j);
        if (!del && j++ === phrases[i].length) del = true;
        if (del && j-- === 0) { del = false; i = (i + 1) % phrases.length; }
        setTimeout(type, del ? 80 : 120);
    })();

    /* Intersection animation */
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => obs.observe(el));

    /* Floating cards */
    document.querySelectorAll('.section').forEach(section => {
        const wrap = document.createElement('div');
        wrap.className = 'floating-elements';

        for (let i = 0; i < 5; i++) {
            const c = document.createElement('div');
            c.className = 'float-card';
            c.style.left = Math.random() * 90 + '%';
            c.style.width = c.style.height = Math.random() * 40 + 20 + 'px';
            c.style.animationDelay = Math.random() * 10 + 's';
            wrap.appendChild(c);
        }
        section.appendChild(wrap);
    });

    /* Contact success */
    document.querySelector('.contact-form').addEventListener('submit', e => {
        e.preventDefault();
        document.querySelector('.form-msg').textContent = "Message sent successfully 🚀";
    });

});


const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});



window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = progress + '%';
});

