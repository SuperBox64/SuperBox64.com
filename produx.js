//document.addEventListener('DOMContentLoaded', function() {

    // Products data
    const products = [
        {
            id: 'SB64-IBJF-001',
            name: 'SuperBox64 Ice Blue Jack Frost',
            description: 'Game Console, 500GB SSD, 8GB RAM',
            price: 599.99,
            image: './images/wintermix.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/EGZCL9AURBV9G'
        },
        {
            id: 'SB64-CBLT-002',
            name: 'SuperBox64 Classic Blue LED Trak',
            description: 'Game Console, 500GB SSD, 8GB RAM',
            price: 599.99,
            image: './images/superbox64_classic.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/9S6SLHCS9BUWQ'
        },
        {
            id: 'SB64-SMYT-003',
            name: 'SuperBox64 Retro64 Yellow Trak',
            description: 'Game Console, 250GB SSD, 4GB RAM',
            price: 499.99,
            image: './images/superbox64_yellowtrak.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/WCMSTDZWA9KS2'
        },
        {
            id: 'SB64-NSWT-004',
            name: 'SuperBox64 Super64 White Trak',
            description: 'Game Console, 250GB SSD, 4GB RAM',
            price: 499.99,
            image: './images/superbox64_whitetrak.jpeg',
            paypalLink: 'https://www.paypal.com/ncp/payment/MJA2JFTKJZBNJ'
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
                        <a href="${product.paypalLink}" class="buy-button">Buy Now</a>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
    }

    // Render products when page loads
    renderProducts();
//}); 
