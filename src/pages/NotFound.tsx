
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Container className="max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10"
              >
                <path d="M9.08 9H4a1 1 0 0 0-.993.883L3 10v5a1 1 0 0 0 .883.993L4 16h14a1 1 0 0 0 .993-.883L19 15v-5a1 1 0 0 0-.883-.993L18 9h-5.08M9 9l1-5h4l1 5M3 16l-1 4h1m4-4v4m4-4v4m4-4v4m4-4h1l-1 4" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for can't be found.
          </p>
          
          <Button
            className="rounded-full px-8 py-6 text-sm font-medium transition-all duration-300"
            onClick={() => window.location.href = '/'}
          >
            Return Home
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
