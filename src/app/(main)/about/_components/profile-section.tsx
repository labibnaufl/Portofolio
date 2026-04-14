// app/(main)/about/_components/profile-section.tsx

import Image from "next/image";
import ScrollVelocity from "@/components/animations/scroll-velocity/ScrollVelocity";

export default function ProfileSection() {
  return (
    <section
      id="about-profile"
      className="relative w-full min-h-[calc(100vh-3.5rem)] bg-black flex flex-col items-center justify-center overflow-hidden pb-16 md:pb-32"
    >
      {/* Scrolling text — fills and centers vertically */}
      <div className="absolute inset-0 flex flex-col justify-center mt-20">
        <ScrollVelocity
          texts={["Who I Am?", "Who I Am?"]}
          velocity={80}
          className="text-white select-none"
          scrollerStyle={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            color: "#ffffff",
          }}
        />
      </div>

      {/* Profile image — rectangular, centered, above text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 mt-20">
          <Image
            src="/Images/potrait.JPG"
            alt="Profile Picture"
            width={500}
            height={500}
            style={{ width: "clamp(200px, 60vw, 500px)", height: "auto" }}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
            priority
            quality={100}
          />
      </div>
    </section>
  );
}