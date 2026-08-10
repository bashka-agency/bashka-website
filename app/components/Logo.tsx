import Image from "next/image";

type Props = {
  variant?: "black" | "green";
  className?: string;
};

export default function Logo({ variant = "black", className }: Props) {
  const src =
    variant === "green"
      ? "/images/logo/logo-baska-zeleni-cropped.png"
      : "/images/logo/logo-baska-crni-cropped.png";

  return (
    <Image
      src={src}
      alt="bashka digital"
      width={644}
      height={219}
      priority
      className={`h-8 w-auto ${className ?? ""}`}
    />
  );
}
