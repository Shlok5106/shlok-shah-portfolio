import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('normal');
  const [hoverText, setHoverText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Smooth lerp follower position
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY });
      }, 40);

      // Check hover target data attributes
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || (type === 'project' ? 'VIEW' : type === 'credential' ? 'EXPLORE' : 'OPEN');
        setCursorType(type);
        setHoverText(text);
      } else {
        setCursorType('normal');
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-follower ${
          cursorType === 'project'
            ? 'hover-project'
            : cursorType === 'credential'
            ? 'hover-credential'
            : ''
        }`}
        style={{ left: `${followerPos.x}px`, top: `${followerPos.y}px` }}
      >
        {hoverText && <span className="text-center font-bold tracking-widest">{hoverText}</span>}
      </div>
    </>
  );
}
