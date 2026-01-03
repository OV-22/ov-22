// Dark Mode
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Skill Animation
const bars = document.querySelectorAll(".bar div");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
    }
  });
}, { threshold: 0.5 });

bars.forEach(bar => observer.observe(bar));
