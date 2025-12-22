//document.addEventListener('DOMContentLoaded', function() {

    // Products data
    const products = [
        {
            id: 'SB64-USBC-009',
            name: 'USB Retro Arcade Game Controller ACDC Back N Black',
            description: 'ACDC Back N Black Lid with Gold Red Blue Body, all Black buttons, 2" White trackball, Silver spinner, Atari DB-9 port. 8ft detachable USB cable, heavy duty design. Patent pending by designer Todd Bruss. Compatible with Windows, Mac, Linux, Raspberry Pi, PS3.',
            price: 299.99,
            image: './images/superbox64acdcbackinblack-newsuperbox64bodystyle.JPG',
            altText: 'SuperBox64 ACDC Back N Black USB Arcade Controller - Retro Gaming Joystick Trackball Spinner - Windows Mac Linux Raspberry Pi PS3 - Custom Arcade Stick DB9 Port - Todd Bruss Designer - Fighting Game Controller',
            paypalLink: 'https://www.paypal.com/ncp/payment/XVRFHUZA4N7J8'
        },
        {
            id: 'SB64-USBC-008',
            name: 'USB Retro Arcade Box Controller Atari Fire',
            description: 'White, Yellow, Orange, Red concave buttons, Yellow trackball, Silver spinner, Red joystick, White select start buttons, White Left Middle Right click buttons, Atari DB-9 port on the front. USB port on the back, 8 foot Black USB cable that\'s detachable! 4 side buttons, Heavy Duty design.',
            price: 299.99,
            image: './images/superbox64_atarifire.jpeg',
            altText: 'SuperBox64 Atari Fire USB Arcade Game Controller - Red Orange Yellow Buttons - Arcade Trackball Joystick Spinner - Retro Gaming Controller - Atari DB9 Compatible - MAME Emulation Controller - Custom Arcade Hardware',
            paypalLink: 'https://www.paypal.com/ncp/payment/UPUGZCFF7DA36'
        },
        {
            id: 'SB64-USBC-007',
            name: 'USB Super Arcade Game Controller Atari Orange',
            description: 'Orange buttons, Yellow trackball, Silver spinner, Orange joystick, White select start buttons, Atari DB-9 port on the front. USB port on the back, 8 foot Black USB cable that\'s detachable! 4 side buttons, Heavy Duty design. Case, layout, logo, colorway patent pending screw system by designer Todd Bruss.',
            price: 299.99,
            image: './images/superbox64atariorange.jpg',
            altText: 'SuperBox64 Atari Orange USB Game Controller - Custom Arcade Stick Orange Joystick Yellow Trackball - Retro Gaming Hardware - DB9 Atari Port - Todd Bruss Patent Pending Design - Arcade Fighting Stick',
            paypalLink: 'https://www.paypal.com/ncp/payment/92AM3BSP58U6J'
        },
        {
            id: 'SB64-TKBL-006',
            name: '3 button, 2 Inch Arcade Trackball',
            description: 'Black Lid Matte Finish, Black Red Blue, White Trackball ball. USB out port on back, Color: Glossy White Trackball and Arcade Convex buttons, Left Middle and Right Click, 8 foot USB black cable, 4 Super rubber feet. Max 2 items',
            price: 129.99,
            image: './images/superbox64_trackball.jpeg',
            altText: 'SuperBox64 Standalone USB Trackball Mouse - Arcade Style Trackball Controller - White 2 Inch Ball Left Middle Right Click - Gaming Trackball - Retro Arcade Mouse - PC Mac Compatible Trackball',
            paypalLink: 'https://www.paypal.com/ncp/payment/WXE8WKD4PTQ72'
        },
        {
            id: 'SB64-SMYT-003',
            name: 'Retro Super64 Game Console Joystick Trackball Spinner',
            description: 'Comes with a Raspberry Pi5, active and passive cooling, 64GB memory card for the preinstalled SuperBox64OS, joystick, 2 inch trackball with left, middle and right click, directional arcade game pad style buttons, silver spinner, 4 side buttons with 2 on each side, select and 1up start button. Pictured as shown. Finest craftsmanship! SuperBox64 logo and name plate.',
            price: 399.99,
            image: './images/superbox64_yellowtrak.jpeg',
            altText: 'SuperBox64 Yellow Trackball Gaming Console - Raspberry Pi5 Retro Arcade System - Yellow Trackball Joystick Spinner - SuperBox64OS Preinstalled - Retro Emulation Console - Custom Gaming System Todd Bruss - Arcade Machine Console',
            paypalLink: 'https://www.paypal.com/ncp/payment/WCMSTDZWA9KS2'
        },
        {
            id: 'SB64-NSWT-004',
            name: 'Classic Arcade Game Console Joystick Trackball Spinner',
            description: 'Comes with a Raspberry Pi5, active and passive cooling, 64GB memory card for the preinstalled SuperBox64OS, joystick, 2 inch trackball with left, middle and right click, directional arcade game pad style buttons, silver spinner, 4 side buttons with 2 on each side, select and 1up start button. Pictured as shown. Finest craftsmanship! SuperBox64 logo and name plate.',
            price: 399.99,
            image: './images/superbox64_whitetrak.jpeg',
            altText: 'SuperBox64 White Trackball Retro Gaming Console - Raspberry Pi5 Arcade System - White Trackball Gaming Console - Classic Game Emulator - Retro Console with Joystick Spinner - SuperBox64OS - Custom Built Gaming Hardware',
            paypalLink: 'https://www.paypal.com/ncp/payment/MJA2JFTKJZBNJ'
        },
        {
            id: 'SB64-IBJF-001',
            name: 'Ice Blue Game Console Joystick Trackball Spinner',
            description: 'Comes with a Raspberry Pi5, active and passive cooling, preinstalled SuperBox64OS, joystick, 2 inch trackball with left, middle and right click, directional arcade game pad style buttons, silver spinner, 4 side buttons with 2 on each side, select and 1up start button. 4GB RAM 256GB SSD and 8GB RAM 512GB models available. Pictured as shown. Finest craftsmanship! SuperBox64 logo and name plate.',
            price: 399.99,
            image: './images/D93E76D9-BAAC-4947-84A8-17A0FB560A80_1_105_c.jpeg',
            altText: 'SuperBox64 Jack Frost Ice Blue Gaming Console - Premium Raspberry Pi5 Retro Arcade System - Blue LED Gaming Console - Trackball Joystick Spinner Controller - SuperBox64OS - Ultimate Retro Gaming Machine - Custom Arcade Console',
            paypalLink: 'https://www.paypal.com/ncp/payment/EGZCL9AURBV9G'
        },
        {
            id: 'SB64-CBLT-002',
            name: 'Blue LED Game Console Joystick Trackball Spinner',
            description: '8GB RAM 512GB SSD. Comes with a Raspberry Pi5, active and passive cooling, preinstalled SuperBox64OS, joystick, 2 inch trackball with left, middle and right click, directional arcade game pad style buttons, silver spinner, 4 side buttons with 2 on each side, select and 1up start button. Pictured as shown. Finest craftsmanship! SuperBox64 logo and name plate.',
            price: 499.99,
            image: './images/superbox64_classic.jpeg',
            altText: 'SuperBox64 Classic Blue LED Trackball Gaming Console - Raspberry Pi5 Premium Retro System - Blue LED Trackball Arcade Console - Classic Gaming Hardware - Retro Emulation Station - Custom Game Console - Arcade Quality Gaming System',
            paypalLink: 'https://www.paypal.com/ncp/payment/9S6SLHCS9BUWQ'
        }
        // {
        //     id: 'GRS-PPSP-005',
        //     name: 'Push Pull Original Button Hole Spinner Upgrade',
        //     description: 'GRS Push Pull Arcade Spinner',
        //     price: 99.99,
        //     image: './images/grs_push_pull_spinner.jpeg',
        //     altText: 'GRS Push Pull Arcade Spinner Upgrade - Arcade Spinner Knob - Game Controller Spinner Mod - Retro Arcade Parts - Gaming Spinner Wheel - Arcade Cabinet Spinner - Custom Arcade Controller Parts - Arcade Hardware Upgrade',
        //     paypalLink: 'https://www.paypal.com/ncp/payment/Z3AM4TWMVZB3J'
        // }
    ];

    // Function to render products
    function renderProducts() {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = ''; // Clear existing content

        // USB Controllers section (first 4 products)
        const usbHeader = `
            <div class="products-section-header" style="grid-column: 1 / -1; text-align: center; margin-bottom: 1rem;">
                <h2 style="font-family: 'CCUpUpAndAway', 'Press Start 2P'; font-size: 2.4rem; color: #fff; text-shadow: 0 0 10px rgba(0,123,255,0.3);">USB Arcade Controllers</h2>
                <p style="color: #ccc; font-size: 1rem; margin-top: 0.5rem;">Works with PC, Mac, Linux, Raspberry Pi, PS3</p>
            </div>
        `;
        productsGrid.innerHTML += usbHeader;

        // Render USB products (first 4)
        products.slice(0, 4).forEach(product => {
            const productCard = `
                <div class="product-card" itemscope itemtype="https://schema.org/Product">
                    <img src="${product.image}" alt="${product.altText || product.name}" itemprop="image">
                    <div class="product-content">
                        <h3 itemprop="name">${product.name}</h3>
                        <p itemprop="description">${product.description}</p>
                        <div class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="${product.price}">${product.price}</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <a href="${product.paypalLink}" class="buy-button" target="_blank" itemprop="url">Pay with <img src="images/paypal-logo-white.svg" alt="PayPal" height="22" style="vertical-align: middle; margin-left: 5px;"></a>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });

        // Game Consoles section (next 4 products)
        const consoleHeader = `
            <div class="products-section-header" style="grid-column: 1 / -1; text-align: center; margin-top: 1rem; margin-bottom: 1rem;">
                <h2 style="font-family: 'CCUpUpAndAway', 'Press Start 2P'; font-size: 2.4rem; color: #fff; text-shadow: 0 0 10px rgba(0,123,255,0.3);">Raspberry Pi5 Game Consoles</h2>
                <p style="color: #ccc; font-size: 1rem; margin-top: 0.5rem;">SuperBox64OS with 12+ Emulators, 10-Foot TV Interface, Plug & Play</p>
            </div>
        `;
        productsGrid.innerHTML += consoleHeader;

        // Render Console products (next 4)
        products.slice(4, 8).forEach(product => {
            const productCard = `
                <div class="product-card" itemscope itemtype="https://schema.org/Product">
                    <img src="${product.image}" alt="${product.altText || product.name}" itemprop="image">
                    <div class="product-content">
                        <h3 itemprop="name">${product.name}</h3>
                        <p itemprop="description">${product.description}</p>
                        <div class="price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="${product.price}">${product.price}</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <a href="${product.paypalLink}" class="buy-button" target="_blank" itemprop="url">Pay with <img src="images/paypal-logo-white.svg" alt="PayPal" height="22" style="vertical-align: middle; margin-left: 5px;"></a>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
    }

    // Render products when page loads
    renderProducts();
//}); 
