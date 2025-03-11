
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 glass-effect',
      'transition-all duration-300 ease-apple',
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary">
            <path 
              fill="currentColor"
              d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" 
            />
          </svg>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {['Product', 'Features', 'About', 'Contact'].map((item, index) => (
            <Button 
              key={item} 
              variant="ghost" 
              className="text-sm font-medium transition-all duration-200"
            >
              {item}
            </Button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-medium border border-primary/20 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
