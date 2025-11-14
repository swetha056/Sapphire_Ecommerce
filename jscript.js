// Handle Add to Cart buttons only
const cartButtons = document.querySelectorAll('.cart-btn');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Handle Contact Us form submission
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
  });
}

// Handle Login form (console only)
const loginForm = document.querySelector('#loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login form submitted successfully.');
    loginForm.reset();
  });
}

// Handle Registration form (console only)
const registerForm = document.querySelector('#registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Registration form submitted successfully.');
    registerForm.reset();
  });
}
