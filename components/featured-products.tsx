'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
  },
  {
    id: 2,
    name: 'Designer Watch',
    price: 199.99,
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
  },
  {
    id: 3,
    name: 'Silk Scarf',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80',
  },
  {
    id: 4,
    name: 'Sunglasses',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',
  },
];

export function FeaturedProducts() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({ ...product, quantity: 1 });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          > 
            <Link href={`/products/${product.id}`}>
            <Card className="h-full">
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-xl font-bold">${product.price}</p>
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
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
