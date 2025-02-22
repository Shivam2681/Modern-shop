'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store';
import { ShoppingCart, Star, Heart, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  rating: number;
};

interface ProductSectionProps {
  title: string;
  products: Product[];
  category?: string;
}

export function ProductSection({ title, products, category }: ProductSectionProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addItem({ ...product, quantity: 1, image: product.images[0] });
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
          {title.includes('Trending') && <TrendingUp className="h-6 w-6 text-red-500" />}
        </div>
        {category && (
          <Link
            href={`/products?category=${category}`}
            className="text-primary hover:underline font-medium"
          >
            View All →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <Card className="flex flex-col w-full group">
              <CardContent className="p-4 flex-grow">
                <Link href={`/products/${product.id}`} className="block h-full">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {product.rating >= 4.7 && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500">
                        Best Seller
                      </Badge>
                    )}
                    <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">${product.price}</span>
                      <span className="text-sm text-green-600 font-medium">
                        Free Delivery
                      </span>
                    </div>
                  </div>
                </Link>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 transition-colors"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}