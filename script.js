// Initialize AOS (Animate on Scroll)
// This enables the "modern animated" feel by triggering animations as you scroll
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once - while scrolling down
    easing: 'ease-out-cubic',
});

// Simple Console Log for Debugging (Verify Script Connection)
console.log("Avishek Ghorai Portfolio: Scripts Loaded Successfully.");

// Optional: Dynamic Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('header');
    if (window.scrollY > 100) {
        nav.classList.add('bg-slate-950/80', 'backdrop-blur-lg');
    } else {
        nav.classList.remove('bg-slate-950/80', 'backdrop-blur-lg');
    }
});
