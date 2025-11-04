import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ReactNode, useState } from "react";

interface ZoomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  testId?: string;
}

export default function ZoomLink({ href, children, className = "", testId }: ZoomLinkProps) {
  const [, setLocation] = useLocation();
  const [isZooming, setIsZooming] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsZooming(true);
    
    setTimeout(() => {
      setLocation(href);
      setIsZooming(false);
    }, 500);
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        className={className}
        whileTap={{ scale: 0.95 }}
        data-testid={testId}
      >
        {children}
      </motion.div>

      {isZooming && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 50, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          style={{
            transformOrigin: "center center"
          }}
        />
      )}
    </>
  );
}
