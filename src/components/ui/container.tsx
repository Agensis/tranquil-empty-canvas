
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full max-w-7xl px-6 md:px-10',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { Container };
