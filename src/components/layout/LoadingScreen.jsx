import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 350);
          return 100;
        }

        return Math.min(prev + Math.random() * 16 + 6, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.45 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.14), transparent 28%), radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.16), transparent 30%), linear-gradient(180deg, #050a14 0%, #08111f 60%, #091425 100%)",
        }}
      >
        <div className="blob blob-1 absolute -top-20 -left-20 opacity-50" />
        <div className="blob blob-2 absolute top-24 right-10 opacity-50" />
        <div className="blob blob-3 absolute bottom-16 left-1/2 opacity-40" />

        <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mx-auto mb-8 w-24 h-24 rounded-[28px] flex items-center justify-center text-4xl font-bold text-slate-950 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #fbbf24, #8b5cf6)" }}
          >
            N
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="section-kicker mb-4"
          >
            Building the stage
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Nathin A N
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-slate-400 text-sm mb-10"
          >
            Software Developer
          </motion.p>

          <div className="loader-ring mx-auto mb-6" />

          <div className="glass-strong rounded-full p-1 overflow-hidden">
            <motion.div
              className="h-2 rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #f59e0b, #22d3ee, #8b5cf6)",
              }}
              transition={{ duration: 0.08 }}
            />
          </div>

          <p className="text-xs text-slate-400 mt-3 font-mono tracking-[0.25em]">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
