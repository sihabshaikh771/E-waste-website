function bookPickup() {
  alert("Pickup Booked!");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => setLanguage('en');
