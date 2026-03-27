import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add to trail
      setTrail(prev => [...prev.slice(-8), newPosition]);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9996]"
          style={{
            background: `hsl(${index * 45}, 100%, 60%)`,
          }}
          animate={{
            x: pos.x - 4,
            y: pos.y - 4,
            opacity: index / trail.length,
            scale: index / trail.length,
          }}
          transition={{
            duration: 0.2
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 rounded-full pointer-events-none z-[9998]"
        style={{
          borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6) 1',
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Glow */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9997] blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};

export default CustomCursor;