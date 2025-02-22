'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: "Men's Fashion",
    image:
      'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=500&q=80',
    link: '/products?category=mens',
  },
  {
    name: "Women's Fashion",
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80',
    link: '/products?category=womens',
  },
  {
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&q=80',
    link: '/products?category=accessories',
  },
];

export function SelectCategory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link href={category.link} className="block">
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
