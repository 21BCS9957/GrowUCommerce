import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className = ""
}: MarqueeProps) => {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast"
  }[speed];

  const directionClass = direction === "right" ? "reverse" : "";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`inline-flex ${speedClass} ${directionClass} ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {/* First set */}
        <div className="flex items-center justify-center shrink-0 whitespace-nowrap">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center justify-center shrink-0 whitespace-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;