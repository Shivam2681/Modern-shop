import { HeroSection } from '@/components/hero-section';
import { ProductSection } from '@/components/product-section';
import { SelectCategory } from '@/components/select-category';

const products = {
  electronics: [
    {
      id: 7,
      name: "Premium Wireless Headphones",
      price: 299.99,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      ],
      category: "electronics",
      description: "High-end wireless headphones with active noise cancellation.",
      rating: 4.8,
    },
    {
      id: 8,
      name: "4K Smart TV",
      price: 899.99,
      images: [
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
      ],
      category: "electronics",
      description: "55-inch 4K Smart TV with HDR and smart features.",
      rating: 4.7,
    },
    {
      id: 9,
      name: "Smart Watch",
      price: 249.99,
      images: [
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      ],
      category: "electronics",
      description: "Advanced smartwatch with health tracking and GPS.",
      rating: 4.6,
    },
    {
      id: 11,
      name: "Smart Home Security Camera",
      price: 129.99,
      images: [
        "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=500&q=80",
      ],
      category: "electronics",
      description: "HD security camera with night vision and motion detection.",
      rating: 4.7,
    },
  ],
  fashion: [
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: 299.99,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
      ],
      category: "mens",
      description: "Luxurious leather jacket with premium craftsmanship.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Designer Watch",
      price: 199.99,
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
      ],
      category: "accessories",
      description: "Elegant timepiece with sophisticated design.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Elegant Evening Dress",
      price: 249.99,
      images: [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
      ],
      category: "womens",
      description: "Stunning evening dress perfect for special occasions.",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Designer Handbag",
      price: 399.99,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      ],
      category: "accessories",
      description: "Luxury designer handbag crafted from premium leather.",
      rating: 4.7,
    },
  ],
  home: [
    {
      id: 10,
      name: "Modern Coffee Table",
      price: 199.99,
      images: [
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500&q=80",
      ],
      category: "home",
      description: "Sleek and modern coffee table with tempered glass top.",
      rating: 4.5,
    },
    // Add more home products here
  ],
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductSection
        title="Featured Electronics"
        products={products.electronics}
        category="electronics"
      />
      <ProductSection
        title="Fashion Trending Now"
        products={products.fashion}
        category="fashion"
      />
      <ProductSection
        title="Home & Living"
        products={products.home}
        category="home"
      />
      <SelectCategory/>
    </div>
  );
}