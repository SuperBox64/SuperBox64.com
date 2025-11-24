//document.addEventListener('DOMContentLoaded', function() {

    // Products data
    const products = [
        {
            id: 'SB64-USBC-008',
            name: 'USB Retro Arcade Game Controller Atari Fire',
            description: 'White, Yellow, Orange, Red concave buttons, Yellow trackball, Silver spinner, Red joystick, White select start buttons, White Left Middle Right click buttons, Atari DB-9 port on the front. USB port on the back, 8 foot Black USB cable that\'s detachable! 4 side buttons, Heavy Duty design.',
            price: 299.99,
            image: './images/superbox64_atarifire.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/UPUGZCFF7DA36'
        },
        {
            id: 'SB64-USBC-007',
            name: 'USB Retro Arcade Game Controller Atari Orange',
            description: 'Orange buttons, Yellow trackball, Silver spinner, Orange joystick, White select start buttons, Atari DB-9 port on the front. USB port on the back, 8 foot Black USB cable that\'s detachable! 4 side buttons, Heavy Duty design. Case, layout, logo, colorway patent pending screw system by designer Todd Bruss.',
            price: 299.99,
            image: './images/superbox64atariorange.jpg',
            paypalLink: 'https://www.paypal.com/ncp/payment/92AM3BSP58U6J'
        },
        {
            id: 'SB64-TKBL-006',
            name: 'SuperBox64 Trackball Standalone',
            description: 'Black Lid Matte Finish, Black Red Blue, White Trackball ball. USB out port on back, Color: Glossy White Trackball and Arcade Convex buttons, Left Middle and Right Click, 8 foot USB black cable, 4 Super rubber feet. Max 2 items',
            price: 129.99,
            image: './images/superbox64_trackball.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/WXE8WKD4PTQ72'
        },
        {
            id: 'SB64-SMYT-003',
            name: 'SuperBox64 Retro64 Yellow Trak',
            description: 'Raspberry Pi5 game console with SuperBox64OS, 250GB SSD, 4GB RAM',
            price: 399.99,
            image: './images/superbox64_yellowtrak.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/WCMSTDZWA9KS2'
        },
        {
            id: 'SB64-NSWT-004',
            name: 'SuperBox64 Super64 White Trak',
            description: 'Raspberry Pi5 game console with SuperBox64OS, 250GB SSD, 4GB RAM',
            price: 399.99,
            image: './images/superbox64_whitetrak.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/MJA2JFTKJZBNJ'
        },
        {
            id: 'SB64-IBJF-001',
            name: 'SuperBox64 Ice Blue Jack Frost',
            description: 'Raspberry Pi5 game console with SuperBox64OS, 500GB SSD, 8GB RAM',
            price: 499.99,
            image: './images/wintermix.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/EGZCL9AURBV9G'
        },
        {
            id: 'SB64-CBLT-002',
            name: 'SuperBox64 Classic Blue LED Trak',
            description: 'Raspberry Pi5 game console with SuperBox64OS, 500GB SSD, 8GB RAM',
            price: 499.99,
            image: './images/superbox64_classic.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/9S6SLHCS9BUWQ'
        },
        {
            id: 'GRS-PPSP-005',
            name: 'Push Pull Original Button Hole Spinner Upgrade',
            description: 'GRS Push Pull Arcade Spinner',
            price: 99.99,
            image: './images/grs_push_pull_spinner.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/Z3AM4TWMVZB3J'
        }
    ];

    // Function to render products
    function renderProducts() {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = ''; // Clear existing content

        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-content">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="price">$${product.price}</div>
                        <a href="${product.paypalLink}" class="buy-button" target="_blank">Buy Now</a>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
    }

    // Render products when page loads
    renderProducts();
//}); 
