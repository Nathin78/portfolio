import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: "#FFFFFF" }}
      >
        {/* Blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-3xl"
            style={{ boxShadow: "none" }}
          >
            N
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-slate-800 mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Nathin A N
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-sm mb-10"
        >
          Software Developer
        </motion.p>

        {/* Loader Ring */}
        <div className="loader-ring mb-6" />

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "var(--primary)",
              width: `${Math.min(progress, 100)}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-gray-500 text-xs mt-3 font-mono">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
