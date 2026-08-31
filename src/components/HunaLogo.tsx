import logoImg from "@/assets/logo-huna-final.png";

export const HunaLogo = ({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) => {
  const heights = { sm: "h-7", default: "h-9", lg: "h-16" };
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="هُنا"
        width={886}
        height={520}
        className={`${heights[size]} w-auto object-contain drop-shadow-[0_0_12px_hsl(45_90%_65%/0.35)]`}
      />
    </div>
  );
};
