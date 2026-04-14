"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function EyesAnimation() {
  const pupilsRef = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();

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
      className="flex justify-center items-center gap-20 my-10"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
  {[0, 1].map((i) => (
    <div key={i} className="flex flex-col items-center">

      <motion.div
        animate={controls}
        style={{ originY: 1 }}
        className="flex flex-col items-center"
      >
        {/* Bulu Mata */}
        <div
          className="relative flex justify-center"
          style={{ width: 200, height: 24, marginBottom: "-6px", zIndex: 10 }}
        >
          {[-1, 0, 1].map((pos) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                bottom: 0,
                left: `calc(50% + ${pos * 50}px)`,
                width: 6,
                height: pos === 0 ? 24 : 18,
                backgroundColor: "#000000",
                borderRadius: "999px",
                transform: `rotate(${pos * 15}deg)`,
                transformOrigin: "bottom center",
              }}
            />
          ))}
        </div>

        {/* Mata */}
        <div
          style={{
            width: 200,
            height: 100,
            backgroundColor: "#ffffff",
            borderRadius: "70% 70% 70% 70% / 80% 80% 30% 30%",
            borderColor: "#0a0a0a",
            borderWidth: "6px",
            borderStyle: "solid",
          }}
          className="relative overflow-hidden"
        >
          <div
            ref={(el) => { pupilsRef.current[i] = el; }}
            className="absolute rounded-full"
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#603101",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </motion.div>

    </div>
  ))}
    </motion.div>
  );
}