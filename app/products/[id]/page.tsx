import { ProductDetails } from "./product-details";

const products = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
      "https://images.unsplash.com/photo-1551028719-20e5b0ee2629?w=500&q=80",
      "https://images.unsplash.com/photo-1551028719-47e4e839d178?w=500&q=80"
    ],
    category: "mens",
    description: "Luxurious leather jacket with premium craftsmanship. Made from genuine leather with a comfortable fit and timeless design. Features multiple pockets and a soft inner lining.",
    rating: 4.5,
    reviews: [
      { id: 1, user: "John D.", rating: 5, comment: "Excellent quality and fit!" },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Great jacket, slightly pricey" }
    ]
  },
  {
    id: 2,
    name: "Designer Watch",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80"
    ],
    category: "accessories",
    description: "Elegant timepiece with sophisticated design. Features a premium stainless steel case, scratch-resistant sapphire crystal, and water resistance up to 50 meters.",
    rating: 4.8,
    reviews: [
      { id: 1, user: "Mike R.", rating: 5, comment: "Beautiful watch, worth every penny" },
      { id: 2, user: "Emma L.", rating: 4.5, comment: "Stunning design and great quality" }
    ]
  },
  {
    id: 3,
    name: "Elegant Evening Dress",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276eedc7?w=500&q=80",
      "https://images.unsplash.com/photo-1583391733879-1c928c66a602?w=500&q=80"
    ],
    category: "womens",
    description: "Stunning evening dress perfect for special occasions. Features delicate embroidery, a flattering silhouette, and premium fabric that moves beautifully.",
    rating: 4.7,
    reviews: [
      { id: 1, user: "Lisa P.", rating: 5, comment: "Absolutely gorgeous dress!" },
      { id: 2, user: "Rachel K.", rating: 4.5, comment: "Perfect fit and beautiful design" }
    ]
  },
  {
    id: 4,
    name: "Classic Sunglasses",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80"
    ],
    category: "accessories",
    description: "Timeless sunglasses with UV protection. The perfect blend of style and functionality with durable frames and premium lenses.",
    rating: 4.6,
    reviews: [
      { id: 1, user: "Tom H.", rating: 5, comment: "Great quality and style" },
      { id: 2, user: "Anna M.", rating: 4, comment: "Love these sunglasses!" }
    ]
  },
  {
    id: 5,
    name: "Business Suit",
    price: 599.99,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80",
      "https://images.unsplash.com/photo-1594938274412-9d68a4869b32?w=500&q=80",
      "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=500&q=80"
    ],
    category: "mens",
    description: "Professional business suit tailored for the modern gentleman. Made from high-quality wool blend with excellent attention to detail.",
    rating: 4.9,
    reviews: [
      { id: 1, user: "James B.", rating: 5, comment: "Exceptional quality and fit" },
      { id: 2, user: "David W.", rating: 5, comment: "Best suit I've ever owned" }
    ]
  },
  {
    id: 6,
    name: "Designer Handbag",
    price: 399.99,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80"
    ],
    category: "accessories",
    description: "Luxury designer handbag crafted from premium leather. Features multiple compartments and a signature design that never goes out of style.",
    rating: 4.7,
    reviews: [
      { id: 1, user: "Sophie L.", rating: 5, comment: "Beautiful bag, worth every penny" },
      { id: 2, user: "Maria C.", rating: 4.5, comment: "Excellent quality and design" }
    ]
  },
  {
    id: 7,
    name: "Premium Wireless Headphones",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80"
    ],
    category: "electronics",
    description: "High-end wireless headphones with active noise cancellation, premium sound quality, and long battery life. Perfect for music enthusiasts and professionals.",
    rating: 4.8,
    reviews: [
      { id: 1, user: "Alex M.", rating: 5, comment: "Amazing sound quality!" },
      { id: 2, user: "Jessica R.", rating: 4.5, comment: "Great battery life and comfort" }
    ]
  },
  {
    id: 8,
    name: "4K Smart TV",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
      "https://images.unsplash.com/photo-1593784991127-ed114c1e9e40?w=500&q=80",
      "https://images.unsplash.com/photo-1593784991086-1b6cc70f1d9b?w=500&q=80"
    ],
    category: "electronics",
    description: "55-inch 4K Smart TV with HDR, built-in streaming apps, and voice control. Experience stunning picture quality and smart features.",
    rating: 4.7,
    reviews: [
      { id: 1, user: "Michael P.", rating: 5, comment: "Incredible picture quality" },
      { id: 2, user: "Linda K.", rating: 4.5, comment: "Smart features work great" }
    ]
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 249.99,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80"
    ],
    category: "electronics",
    description: "Advanced smartwatch with health tracking, notifications, and GPS. Water-resistant and perfect for fitness enthusiasts.",
    rating: 4.6,
    reviews: [
      { id: 1, user: "Chris B.", rating: 5, comment: "Great fitness features" },
      { id: 2, user: "Amy W.", rating: 4, comment: "Battery life could be better" }
    ]
  },
  {
    id: 10,
    name: "Modern Coffee Table",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80",
      "https://images.unsplash.com/photo-1532372319301-8b2595c35af4?w=500&q=80"
    ],
    category: "home",
    description: "Sleek and modern coffee table with tempered glass top and wooden base. Perfect centerpiece for any living room.",
    rating: 4.5,
    reviews: [
      { id: 1, user: "David M.", rating: 5, comment: "Beautiful design and sturdy" },
      { id: 2, user: "Sarah P.", rating: 4, comment: "Easy to assemble" }
    ]
  },
  {
    id: 11,
    name: "Smart Home Security Camera",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=500&q=80",
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&q=80",
      "https://images.unsplash.com/photo-1557324232-e2feb14c657c?w=500&q=80"
    ],
    category: "electronics",
    description: "HD security camera with night vision, motion detection, and smartphone connectivity. Keep your home safe and secure.",
    rating: 4.7,
    reviews: [
      { id: 1, user: "Robert J.", rating: 5, comment: "Great image quality" },
      { id: 2, user: "Patricia L.", rating: 4.5, comment: "Easy to set up" }
    ]
  }
];

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
