console.log('Script.js loaded!');

// Scroll to top immediately on page load/reload
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// Force scroll on page load
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 0);
});

// Force scroll on DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Also set scroll position before page unload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Countdown Timer
function updateCountdown() {
    const christmas = new Date('December 25, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = christmas - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

function init() {
    console.log('init called!');

    // Scroll to top of page on load - multiple approaches
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force scroll again after a tiny delay to override any layout shifts
    setTimeout(function() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 10);

    setTimeout(function() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 50);

    setTimeout(function() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 100);

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

            // Home should scroll to absolute top (0)
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // Other sections get 200px offset
            const targetSection = document.querySelector(targetId);
            const offset = 200;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            // Smooth scroll to the section with offset
            window.scrollTo({
                top: offsetPosition,
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
            const targetSection = document.querySelector('#products');
            const offset = 200;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // Validate form data
            if (!name || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Decode base64 email addresses
            const toEmail = atob('dG9kZEBzdXBlcmJveDY0LmNvbQ==');
            const ccEmail1 = atob('dG9kZEBpbmtwZW4uaW8=');
            const ccEmail2 = atob('c3RhcnBsYXlyQGljbG91ZC5jb20=');

            // Create mailto link with form data
            const subject = encodeURIComponent('SuperBox64 product inquiry from ' + name);
            const body = encodeURIComponent(message + '\n\nSincerely,\n\n' + name);

            const mailtoLink = 'mailto:' + toEmail + '?cc=' + ccEmail1 + ',' + ccEmail2 + '&subject=' + subject + '&body=' + body;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showMessage('Opening your email client...', 'success');

            // Reset form after a short delay
            setTimeout(function() {
                contactForm.reset();
            }, 1000);
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
