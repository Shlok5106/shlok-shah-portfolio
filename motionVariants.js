// 2026 Reusable Framer Motion variants for editorial portfolio transitions

export const customEase = [0.16, 1, 0.3, 1]; // Editorial cubic-bezier easing

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: customEase,
      delay: custom * 0.08,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
      delay: custom * 0.08,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const heroTextReveal = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 0.85,
      ease: customEase,
      delay: custom * 0.1,
    },
  }),
};

export const lineDraw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: customEase,
    },
  },
};

export const clipPathReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0, scale: 1.04 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: customEase,
    },
  },
};

export const modalScaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: customEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const projectImageReveal = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: customEase,
    },
  },
};
