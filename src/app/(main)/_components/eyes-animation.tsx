"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function EyesAnimation() {
  const pupilsRef = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();

  // 🎯 Eye tracking (punya kamu, tetap)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100 + "%";
      const y = (e.clientY / window.innerHeight) * 100 + "%";

      pupilsRef.current.forEach((pupil) => {
        if (!pupil) return;
        pupil.style.left = x;
        pupil.style.top = y;
        pupil.style.transform = "translate(-50%, -50%)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blink tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scaleY: [1, 0.1, 1],
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
      className="flex justify-center items-center gap-8 my-10"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          animate={controls}
          style={{
            originY: 0.5,
            width: 200,
            height: 100,
            backgroundColor: "#ffffff",
            borderRadius: "60% 60% 40% 40% / 80% 80% 20% 20%",
            borderColor: "#0a0a0a",
            borderWidth: "6px",
            borderStyle: "solid",
          }}
          className="relative overflow-hidden"
        >
          {/* 👁 Pupil */}
          <div
            ref={(el) => {
              pupilsRef.current[i] = el;
            }}
            className="absolute rounded-full"
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#603101",
              border: "8px solid #80020",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}