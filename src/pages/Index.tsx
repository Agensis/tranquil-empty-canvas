
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.initially-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section 
          ref={sectionRef}
          className="py-24 md:py-32"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/5 border border-primary/10">
                  <span className="text-xs font-medium text-primary">Introducing a new design</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                A Minimal Interface with Incredible Attention to Detail
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Design is not just what it looks like and feels like. Design is how it works. 
                This minimal design demonstrates beauty in simplicity and function.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                <Button 
                  className="rounded-full px-8 py-6 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-sm font-medium border-primary/20 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Features Grid Section */}
        <section className="py-24 md:py-32 bg-secondary/50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 initially-hidden opacity-0">
                Designed with purpose
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto initially-hidden opacity-0">
                Every element has been carefully considered to create a cohesive and intuitive experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="bg-background rounded-2xl p-8 border border-border/40 transition-all duration-300 hover:border-primary/20 hover:shadow-sm initially-hidden opacity-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-6 h-6"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Feature {item}</h3>
                  <p className="text-muted-foreground">
                    A thoughtfully designed feature that helps users accomplish their goals with simplicity and elegance.
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <footer className="py-12 bg-background border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              {['Terms', 'Privacy', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Index;
