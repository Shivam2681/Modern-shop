'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store';
import { CheckCircle, ShoppingBag } from 'lucide-react';

export default function SuccessPage() {
  const router = useRouter();
  const { items } = useCart();

  useEffect(() => {
    if (items.length > 0) {
      router.push('/cart');
    }
  }, [items, router]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-8">
          Your order has been confirmed and will be shipped shortly. We'll send
          you an email with tracking information once your order is on its way.
        </p>
        <div className="space-y-4">
          <Button asChild>
            <Link href="/products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
