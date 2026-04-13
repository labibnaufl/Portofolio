// app/(main)/about/_components/profile-section.tsx

import Image from "next/image";
import ScrollVelocity from "@/app/(main)/about/_components/scroll-velocity/ScrollVelocity";

export default function ProfileSection() {
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height: "clamp(320px, 50vw, 520px)" }}
    >
      {/* Scrolling text — fills and centers vertically */}
      <div className="absolute inset-0 flex flex-col justify-center">
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
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Image
            src="/Images/profilepic.png"
            alt="Profile Picture"
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain"
            priority
            quality={100}
          />
      </div>
    </section>
  );
}