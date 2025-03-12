"use client";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80, // Adjust for snappiness
    damping: 20,   // Adjust for smoothness
    mass: 0.5,     // Adjust for weightiness
  });

  useEffect(() => {
    console.log(scrollYProgress); // Debug scroll value if needed
  }, [scrollYProgress]);

  return (
    <motion.div style={{ y: smoothScroll }}>
      {children}
    </motion.div>
  );
}
