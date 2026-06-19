// === TYPING ANIMATION ===
const name = "Salisma Maharjan";  // 👈 Change this to your name
let i = 0;

function typeName() {
  if (i < name.length) {
    document.getElementById("typed-name").textContent += name[i];
    i++;
    setTimeout(typeName, 120);
  }
}

window.onload = typeName;


// === FADE IN ON SCROLL ===
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

fadeSections.forEach(section => observer.observe(section));
// === CONTACT FORM ===
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  setTimeout(() => {
    btn.textContent = 'Send Message ✉️';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}