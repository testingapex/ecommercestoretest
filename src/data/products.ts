import { Product } from '../types';

export const products: Product[] = [
    {
        id: 'p1',
        slug: 'essential-organic-tee',
        name: 'Essential Organic Tee',
        price: 35,
        compareAtPrice: 45,
        category: 'Apparel',
        description: 'A premium, ultra-soft tee made from 100% organic cotton. Designed for daily comfort and a perfect fit.',
        features: ['100% Organic Cotton', 'Pre-shrunk', 'Minimalist Design', 'Breathable Fabric'],
        images: [
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.8,
        reviewCount: 124,
        stockStatus: 'in_stock',
        tags: ['Basic', 'Cotton', 'Summer'],
        isNew: true,
        isBestSeller: true,
        variants: [
            { type: 'Size', options: ['S', 'M', 'L', 'XL'] },
            { type: 'Color', options: ['White', 'Black', 'Heather Grey'] }
        ]
    },
    {
        id: 'p2',
        slug: 'modern-denim-jacket',
        name: 'Modern Denim Jacket',
        price: 85,
        category: 'Apparel',
        description: 'A classic silhouette with a modern twist. This denim jacket features premium hardware and a comfortable stretch.',
        features: ['Premium Denim', 'Metal Buttons', 'Four Pockets', 'Slim Fit'],
        images: [
            'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1576871333020-043015a388e6?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.6,
        reviewCount: 89,
        stockStatus: 'in_stock',
        tags: ['Outerwear', 'Denim', 'Classic'],
        isNew: false,
        isBestSeller: true,
        variants: [
            { type: 'Size', options: ['S', 'M', 'L', 'XL'] },
            { type: 'Color', options: ['Dark Wash', 'Light Wash'] }
        ]
    },
    {
        id: 'p3',
        slug: 'urban-tech-backpack',
        name: 'Urban Tech Backpack',
        price: 120,
        category: 'Accessories',
        description: 'The ultimate backpack for the modern commuter. Water-resistant, padded laptop sleeve, and multiple organizer pockets.',
        features: ['Water-resistant', '15" Laptop Sleeve', 'USB Charging Port', 'Ergonomic Straps'],
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544816153-12ad23689f41?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.9,
        reviewCount: 210,
        stockStatus: 'in_stock',
        tags: ['Tech', 'Travel', 'Bags'],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 'p4',
        slug: 'minimalist-walnut-clock',
        name: 'Minimalist Walnut Clock',
        price: 65,
        compareAtPrice: 75,
        category: 'Home',
        description: 'Add a touch of warmth to your space with this solid walnut wall clock. Silent movement and clean aesthetic.',
        features: ['Solid Walnut Wood', 'Silent Quartz Movement', 'Battery Operated', '12-inch Diameter'],
        images: [
            'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1569437061241-a848be43cc82?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.7,
        reviewCount: 56,
        stockStatus: 'in_stock',
        tags: ['Decor', 'Wood', 'Minimalist'],
        isNew: false,
        isBestSeller: false
    },
    {
        id: 'p5',
        slug: 'premium-linen-sheets',
        name: 'Premium Linen Sheets',
        price: 180,
        category: 'Home',
        description: 'Luxurious 100% French linen sheets that get softer with every wash. Perfect for year-round temperature regulation.',
        features: ['100% French Linen', 'Hypoallergenic', 'Deep Pockets', 'Set includes flat, fitted, and 2 pillowcases'],
        images: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584132867664-85b6e97bb523?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.9,
        reviewCount: 42,
        stockStatus: 'low_stock',
        tags: ['Bedroom', 'Luxury', 'Linen'],
        isNew: true,
        isBestSeller: false,
        variants: [
            { type: 'Size', options: ['Full', 'Queen', 'King'] },
            { type: 'Color', options: ['Sand', 'Slate', 'Dusty Rose'] }
        ]
    },
    {
        id: 'p6',
        slug: 'sculptural-ceramic-vase',
        name: 'Sculptural Ceramic Vase',
        price: 48,
        category: 'Home',
        description: 'A hand-finished ceramic vase with a unique matte texture. Beautiful with or without flowers.',
        features: ['Hand-finished Ceramic', 'Matte Texture', 'Waterproof', 'Unique Shape'],
        images: [
            'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1458819714733-e5ab3d536721?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.5,
        reviewCount: 28,
        stockStatus: 'in_stock',
        tags: ['Decor', 'Ceramic', 'Art'],
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'p7',
        slug: 'over-sized-hoodie',
        name: 'Over-sized Hoodie',
        price: 60,
        category: 'Apparel',
        description: 'The ultimate lounge-wear essential. Heavyweight fleece with a relaxed fit and dropped shoulders.',
        features: ['Heavyweight Fleece', 'Brushed Interior', 'Kangaroo Pocket', 'Double-lined Hood'],
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.7,
        reviewCount: 312,
        stockStatus: 'in_stock',
        tags: ['Comfort', 'Basics', 'Lounge'],
        isNew: false,
        isBestSeller: true,
        variants: [
            { type: 'Size', options: ['S', 'M', 'L', 'XL'] },
            { type: 'Color', options: ['Forest Green', 'Navy', 'Oatmeal'] }
        ]
    },
    {
        id: 'p8',
        slug: 'sleek-stainless-bottle',
        name: 'Sleek Stainless Bottle',
        price: 42,
        category: 'Accessories',
        description: 'Keep your drinks cold for 24 hours or hot for 12. Vacuum-insulated stainless steel with a leak-proof cap.',
        features: ['18/8 Stainless Steel', 'Double-wall Insulation', 'BPA Free', '500ml Capacity'],
        images: [
            'https://images.unsplash.com/photo-1602143328225-39d897526bb8?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523362628744-0c144517336b?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.8,
        reviewCount: 156,
        stockStatus: 'in_stock',
        tags: ['Eco-friendly', 'Outdoor', 'Essential'],
        isNew: false,
        isBestSeller: true,
        variants: [
            { type: 'Color', options: ['Matte Black', 'Silver', 'Copper'] }
        ]
    },
    {
        id: 'p9',
        slug: 'corduroy-tote-bag',
        name: 'Corduroy Tote Bag',
        price: 28,
        category: 'Accessories',
        description: 'A stylish and durable tote for your daily essentials. Features a magnetic closure and an interior zip pocket.',
        features: ['Wide-wale Corduroy', 'Cotton Lining', 'Magnetic Snap', 'Reinforced Straps'],
        images: [
            'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.4,
        reviewCount: 45,
        stockStatus: 'in_stock',
        tags: ['Bags', 'Vintage', 'Casual'],
        isNew: true,
        isBestSeller: false,
        variants: [
            { type: 'Color', options: ['Tan', 'Mustard', 'Olive'] }
        ]
    },
    {
        id: 'p10',
        slug: 'wool-blend-overcoat',
        name: 'Wool Blend Overcoat',
        price: 210,
        compareAtPrice: 250,
        category: 'Apparel',
        description: 'A sophisticated overcoat for the colder months. tailored fit with a notched lapel and silky lining.',
        features: ['70% Wool Blend', 'Fully Lined', 'Interior Chest Pocket', 'Tailored Fit'],
        images: [
            'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.9,
        reviewCount: 34,
        stockStatus: 'low_stock',
        tags: ['Outerwear', 'Winter', 'Luxury'],
        isNew: false,
        isBestSeller: false,
        variants: [
            { type: 'Size', options: ['S', 'M', 'L', 'XL'] },
            { type: 'Color', options: ['Camel', 'Charcoal', 'Navy'] }
        ]
    },
    {
        id: 'p11',
        slug: 'smart-desk-lamp',
        name: 'Smart Desk Lamp',
        price: 89,
        category: 'Home',
        description: 'Sleek LED desk lamp with adjustable color temperature and brightness. Modern touch controls.',
        features: ['LED Technology', 'Adjustable Arm', 'Dimmer Function', 'Eye-care Technology'],
        images: [
            'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.6,
        reviewCount: 82,
        stockStatus: 'in_stock',
        tags: ['Office', 'Electronics', 'Lighting'],
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'p12',
        slug: 'leather-card-holder',
        name: 'Leather Card Holder',
        price: 32,
        category: 'Accessories',
        description: 'Minimalist leather card holder with 4 slots and a center compartment for cash. Hand-stitched detail.',
        features: ['Full-grain Leather', 'Hand-stitched', 'Slim Profile', 'RFID Protection'],
        images: [
            'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1598351347313-2d5aa0504ec2?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.8,
        reviewCount: 94,
        stockStatus: 'out_of_stock',
        tags: ['Leather', 'Minimalist', 'Everyday'],
        isNew: false,
        isBestSeller: true,
        variants: [
            { type: 'Color', options: ['Tan', 'Black', 'Cognac'] }
        ]
    },
    {
        id: 'p13',
        slug: 'scented-soy-candle',
        name: 'Scented Soy Candle',
        price: 24,
        category: 'Home',
        description: 'Hand-poured soy candle with natural essential oils. Scents designed to create a calm atmosphere.',
        features: ['100% Soy Wax', 'Essential Oils', '40-hour Burn Time', 'Clear Glass Jar'],
        images: [
            'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1603006905393-c35798939634?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.3,
        reviewCount: 67,
        stockStatus: 'in_stock',
        tags: ['Fragrance', 'Self-care', 'Home'],
        isNew: true,
        isBestSeller: false,
        variants: [
            { type: 'Color', options: ['Sandalwood', 'Lavender', 'Sea Salt'] }
        ]
    },
    {
        id: 'p14',
        slug: 'knit-beanie',
        name: 'Knit Beanie',
        price: 22,
        category: 'Accessories',
        description: 'A warm and stretchy knit beanie with a classic ribbed texture. Perfect for chilly days.',
        features: ['Soft Acrylic', 'Ribbed Texture', 'One Size Fits All', 'Cuffed Design'],
        images: [
            'https://images.unsplash.com/photo-1576871333020-043015a388e6?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.5,
        reviewCount: 41,
        stockStatus: 'in_stock',
        tags: ['Winter', 'Basics', 'Unisex'],
        isNew: false,
        isBestSeller: false,
        variants: [
            { type: 'Color', options: ['Mustard', 'Black', 'Grey'] }
        ]
    },
    {
        id: 'p15',
        slug: 'canvas-wall-art',
        name: 'Canvas Wall Art',
        price: 110,
        category: 'Home',
        description: 'Abstract canvas painting with a modern color palette. Ready to hang with a minimalist oak frame.',
        features: ['High-quality Canvas', 'Oak Frame', 'Signed by Artist', '24x36 inches'],
        images: [
            'https://images.unsplash.com/photo-1513519245088-0e12902e15ca?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.9,
        reviewCount: 15,
        stockStatus: 'in_stock',
        tags: ['Art', 'Decor', 'Modern'],
        isNew: true,
        isBestSeller: false
    },
    {
        id: 'p16',
        slug: 'classic-chinos',
        name: 'Classic Chinos',
        price: 55,
        category: 'Apparel',
        description: 'A versatile pair of chinos that transition easily from office to weekend. Made from durable cotton twill.',
        features: ['Cotton Twill', 'Slim Fit', 'Four Pockets', 'Machine Washable'],
        images: [
            'https://images.unsplash.com/photo-1473966968600-fa804b86827b?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552831388-6a0b3575b32a?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.4,
        reviewCount: 88,
        stockStatus: 'in_stock',
        tags: ['Office', 'Casual', 'Basics'],
        isNew: false,
        isBestSeller: true,
        variants: [
            { type: 'Size', options: ['30', '32', '34', '36'] },
            { type: 'Color', options: ['Khaki', 'Navy', 'Olive'] }
        ]
    },
    {
        id: 'p17',
        slug: 'polaroid-camera',
        name: 'Polaroid Camera',
        price: 95,
        category: 'Accessories',
        description: 'Capture memories instantly with this vintage-style polaroid camera. Easy to use with built-in flash.',
        features: ['Instant Print', 'Built-in Flash', 'Battery Operated', 'Simple Interface'],
        images: [
            'https://images.unsplash.com/photo-1526170315873-3a9861899948?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544391682-178565a038ad?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.7,
        reviewCount: 134,
        stockStatus: 'in_stock',
        tags: ['Tech', 'Creative', 'Fun'],
        isNew: true,
        isBestSeller: true
    },
    {
        id: 'p18',
        slug: 'bamboo-bath-tray',
        name: 'Bamboo Bath Tray',
        price: 38,
        category: 'Home',
        description: 'Elevate your bath time experience with this sustainable bamboo tray. Includes a wine glass holder and book stand.',
        features: ['Sustainable Bamboo', 'Water-resistant', 'Extends to fit any tub', 'Includes book stand'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
        ],
        rating: 4.6,
        reviewCount: 52,
        stockStatus: 'in_stock',
        tags: ['Self-care', 'Bathroom', 'Spa'],
        isNew: false,
        isBestSeller: false
    }
];
