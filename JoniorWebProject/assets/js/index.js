
$(document).ready(function () {
    $(window).bind("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".mobile_phone").removeClass("scroll_open");
        } else {
            $(".mobile_phone").addClass("scroll_open");
        }
    });
});

const ClothosProducts = [
    {
        id: 1,
        name: 'Classic Cotton T-shirt',
        category: 'Tops',
        price: 19.99,
        originalprice: 29.99,
        description: 'A classic fit cotton t-shirt available in various colors.',
        stock: 120,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-1.jpg'
    },
    {
        id: 2,
        name: 'Denim Jacket',
        category: 'Outerwear',
        price: 59.99,
        originalprice: 79.99,
        description: 'Stylish and durable denim jacket, perfect for casual wear.',
        stock: 80,
        sizes: ['M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-2.jpg'
    },
    {
        id: 3,
        name: 'Slim Fit Jeans',
        category: 'Bottoms',
        price: 49.99,
        originalprice: 69.99,
        description: 'Comfortable slim fit jeans with a modern look.',
        stock: 200,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-3.jpg'
    },
    {
        id: 4,
        name: 'Leather Belt',
        category: 'Accessories',
        price: 24.99,
        originalprice: 34.99,
        description: 'Genuine leather belt with a sleek metal buckle.',
        stock: 150,
        sizes: ['M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-4.jpg'
    },
    {
        id: 5,
        name: 'Sneakers',
        category: 'Footwear',
        price: 69.99,
        originalprice: 89.99,
        description: 'Lightweight and comfortable sneakers for everyday wear.',
        stock: 90,
        sizes: ['7', '8', '9', '10', '11'],
        imageUrl: './assets/images/products/1.jpg'
    },
    {
        id: 6,
        name: 'Wool Scarf',
        category: 'Accessories',
        price: 29.99,
        originalprice: 39.99,
        description: 'Soft wool scarf to keep you warm during chilly days.',
        stock: 70,
        sizes: ['One Size'],
        imageUrl: './assets/images/products/2.jpg'
    },
    {
        id: 7,
        name: 'Leather Wallet',
        category: 'Accessories',
        price: 39.99,
        originalprice: 59.99,
        description: 'Premium leather wallet with multiple card slots.',
        stock: 180,
        sizes: ['One Size'],
        imageUrl: './assets/images/products/3.jpg'
    },
    {
        id: 8,
        name: 'Basic Hoodie',
        category: 'Tops',
        price: 34.99,
        originalprice: 49.99,
        description: 'Comfortable hoodie with a minimalist design.',
        stock: 140,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/4.jpg'
    },
    {
        id: 9,
        name: 'Cotton Shorts',
        category: 'Bottoms',
        price: 24.99,
        originalprice: 34.99,
        description: 'Breathable cotton shorts, perfect for summer wear.',
        stock: 130,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/jacket-1.jpg'
    },
    {
        id: 10,
        name: 'Running Shoes',
        category: 'Footwear',
        price: 79.99,
        originalprice: 99.99,
        description: 'Lightweight running shoes for comfort and performance.',
        stock: 100,
        sizes: ['7', '8', '9', '10', '11'],
        imageUrl: './assets/images/products/jacket-2.jpg'
    },
    {
        id: 11,
        name: 'Polo Shirt',
        category: 'Tops',
        price: 29.99,
        originalprice: 39.99,
        description: 'Classic polo shirt available in multiple colors.',
        stock: 160,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/jacket-3.jpg'
    },
    {
        id: 12,
        name: 'Joggers',
        category: 'Bottoms',
        price: 39.99,
        originalprice: 59.99,
        description: 'Stylish joggers made from high-quality fabric.',
        stock: 110,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-12.jpg'
    },
    {
        id: 13,
        name: 'Casual Blazer',
        category: 'Outerwear',
        price: 89.99,
        originalprice: 129.99,
        description: 'A casual yet sleek blazer for a smart look.',
        stock: 75,
        sizes: ['M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-13.jpg'
    },
    {
        id: 14,
        name: 'Flannel Shirt',
        category: 'Tops',
        price: 39.99,
        originalprice: 49.99,
        description: 'Warm and cozy flannel shirt for cold days.',
        stock: 95,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-14.jpg'
    },
    {
        id: 15,
        name: 'Canvas Backpack',
        category: 'Accessories',
        price: 49.99,
        originalprice: 69.99,
        description: 'Durable canvas backpack with multiple compartments.',
        stock: 60,
        sizes: ['One Size'],
        imageUrl: './assets/images/products/jacket-4.jpg'
    },
    {
        id: 16,
        name: 'Khaki Pants',
        category: 'Bottoms',
        price: 44.99,
        originalprice: 59.99,
        description: 'Comfortable khaki pants for casual or formal wear.',
        stock: 150,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-16.jpg'
    },
    {
        id: 17,
        name: 'Wool Coat',
        category: 'Outerwear',
        price: 129.99,
        originalprice: 169.99,
        description: 'Warm wool coat with a classic design.',
        stock: 50,
        sizes: ['M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-17.jpg'
    },
    {
        id: 18,
        name: 'Graphic Tee',
        category: 'Tops',
        price: 22.99,
        originalprice: 34.99,
        description: 'Cotton t-shirt with stylish graphic prints.',
        stock: 200,
        sizes: ['S', 'M', 'L', 'XL'],
        imageUrl: './assets/images/products/clothes-18.jpg'
    },
    {
        id: 19,
        name: 'Baseball Cap',
        category: 'Accessoriesxxxx',
        price: 19.99,
        originalprice: 29.99,
        description: 'Adjustable cotton baseball cap in various colors.',
        stock: 180,
        sizes: ['One Size'],
        imageUrl: './assets/images/products/clothes-19.jpg'
    },
    {
        id: 20,
        name: 'Ankle Boots',
        category: 'Footwear',
        price: 89.99,
        originalprice: 129.99,
        description: 'Stylish ankle boots made from genuine leather.',
        stock: 70,
        sizes: ['7', '8', '9', '10', '11'],
        imageUrl: './assets/images/products/clothes-20.jpg'
    }
];

const productfilter = ClothosProducts.filter((e) => e.id < 5)
let content = '';
productfilter.map((p) => {
    const { name, imageUrl, description, originalprice, price, stock, sizes, category } = p;
    content += `
    <div class="col-md-12 col-sm-6">
        <div class="box d-flex" style="font-size: 15px;
        flex-wrap: nowrap;
        gap: 10px;
        border: 1px solid gainsboro;
        padding: 10px;
        border-radius: var(--border-radius-sm);">
                <img src="${imageUrl}" alt="Product 1" style="max-width: 70px;
        border-radius: var(--border-radius-sm);">

                <div class="box_title">
                    <p style="font-weight: 600;margin-bottom: 5px;">${name}</p>
                    <p>clothes</p>
                    <p>
                        <span style="color: var(--bittersweet);margin-right: 10px;">$${price}</span>
                        <span
                            style="text-decoration: line-through;color: var(--sonic-silver);">$${originalprice}</span>
                    </p>
                </div>
            </div>
    </div>
    `;
})

document.getElementById('new_arrivals').innerHTML = content;

const productfilter2 = ClothosProducts.filter((e) => e.id > 4 && e.id <= 8);
let contents = '';
productfilter2.map((p) => {
    const { name, imageUrl, description, originalprice, price, stock, sizes, category } = p;
    contents += `
    <div class="col-md-12 col-sm-6">
        <div class="box d-flex" style="font-size: 15px;
        flex-wrap: nowrap;
        gap: 10px;
        border: 1px solid gainsboro;
        padding: 10px;
        border-radius: var(--border-radius-sm);">
                <img src="${imageUrl}" alt="Product 1" style="max-width: 70px;
        border-radius: var(--border-radius-sm);">

                <div class="box_title">
                    <p style="font-weight: 600;margin-bottom: 5px;">${name}</p>
                    <p>clothes</p>
                    <p>
                        <span style="color: var(--bittersweet);margin-right: 10px;">$${price}</span>
                        <span
                            style="text-decoration: line-through;color: var(--sonic-silver);">$${originalprice}</span>
                    </p>
                </div>
            </div>
    </div>
    `;
})
document.getElementById('trending').innerHTML = contents;

const productfilter3 = ClothosProducts.filter((e) => e.category === "Accessories");
let contents3 = '';
productfilter3.map((p) => {
    const { name, imageUrl, description, originalprice, price, stock, sizes, category } = p;
    contents3 += `
    <div class="col-lg-12 col-sm-6">
        <div class="box d-flex" style="font-size: 15px;
        flex-wrap: nowrap;
        gap: 10px;
        border: 1px solid gainsboro;
        padding: 10px;
        border-radius: var(--border-radius-sm);">
                <img src="${imageUrl}" alt="Product 1" style="max-width: 70px;
        border-radius: var(--border-radius-sm);">

                <div class="box_title">
                    <p style="font-weight: 600;margin-bottom: 5px;">${name}</p>
                    <p>clothes</p>
                    <p>
                        <span style="color: var(--bittersweet);margin-right: 10px;">$${price}</span>
                        <span
                            style="text-decoration: line-through;color: var(--sonic-silver);">$${originalprice}</span>
                    </p>
                </div>
            </div>
    </div>
    `;
})
document.getElementById('accessories').innerHTML = contents3;

