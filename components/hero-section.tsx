'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div>
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
          alt="Hero background"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="max-w-7xl mx-auto px-4 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              New Season Arrivals
            </span>
            <h1 className="text-5xl font-bold mb-6">
              Discover Your Perfect Style
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Explore our curated collection of premium fashion and accessories.
              Quality meets style in every piece.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                View Collections
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background border-y">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure payment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Money Back Guarantee</h3>
                <p className="text-sm text-muted-foreground">Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}