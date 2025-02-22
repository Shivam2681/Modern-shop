'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCart } from '@/lib/store';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    category: 'mens',
    description: 'Luxurious leather jacket with premium craftsmanship.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Designer Watch',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
    category: 'accessories',
    description: 'Elegant timepiece with sophisticated design.',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Silk Scarf',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80',
    category: 'accessories',
    description: 'Soft and luxurious silk scarf for any occasion.',
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Sunglasses',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',
    category: 'accessories',
    description: 'Classic sunglasses with UV protection.',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Business Suit',
    price: 599.99,
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80',
    category: 'mens',
    description: 'Professional business suit tailored for the modern gentleman. Made from high-quality wool blend with excellent attention to detail.',
    rating: 4.9,
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();
  const { toast } = useToast();

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'all' || product.category === category)
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({ ...product, quantity: 1 });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="mens">Men's Fashion</SelectItem>
            <SelectItem value="womens">Women's Fashion</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-4">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">${product.price}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{product.rating}</span>
                    </div>
                  </div>
                </Link>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
