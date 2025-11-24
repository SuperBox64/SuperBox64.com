console.log('Script.js loaded!');

function init() {
    console.log('init called!');

    // Ensure URL shows #home on page load
    if (!window.location.hash) {
        window.location.hash = 'home';
    }

    // Burger menu code
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    console.log('Burger menu element:', burgerMenu);
    console.log('Nav links element:', navLinks);

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            console.log('Burger menu clicked');
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a nav link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    } else {
        console.error('Burger menu or nav links not found');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip if the link is external (doesn't start with #)
            if (!this.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();

            // Close the mobile menu if it's open
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.burger-menu').classList.remove('active');

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Logo click handler
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#home').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Initialize EmailJS
        const EMAILJS_SERVICE_ID = 'service_pw8qz6o';
        const EMAILJS_TEMPLATE_ID = 'template_f58xj1n';
        const EMAILJS_PUBLIC_KEY = 'GW7NGq-mx44EHtljw';

        // Initialize EmailJS with your public key
        emailjs.init(EMAILJS_PUBLIC_KEY);

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Validate form data
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Use actual EmailJS to send emails
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showMessage('Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                })
                .finally(function() {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }

    // Function to show messages to the user
    function showMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;

        // Insert message after the form
        contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);

        // Auto-remove message after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}

// Run immediately if DOM is already loaded, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
