document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Example form handling
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear the form
    contactForm.reset();
  });
});
