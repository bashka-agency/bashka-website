import Image from "next/image";
import Reveal from "@/app/components/Reveal";

const LOGOS = [
  { file: "278685246_705943007527171_4576161175534696796_n.jpg", name: "Klijent" },
  { file: "396501236_196481370161339_3254028506233719681_n.jpg", name: "Vitas" },
  { file: "468885822_1048516570405936_3338042153231541065_n.jpg", name: "Klijent" },
  { file: "download (1).jpg", name: "Nutrino Lab" },
  { file: "download (1).png", name: "Nike" },
  { file: "download (10).jpg", name: "Huawei" },
  { file: "download (10).png", name: "Always" },
  { file: "download (11).jpg", name: "Frikom" },
  { file: "download (11).png", name: "DAK Sportska Oprema" },
  { file: "download (12).jpg", name: "Pekara AS" },
  { file: "download (13).png", name: "Kappa" },
  { file: "download (14).png", name: "Moravski Market" },
  { file: "download (15).png", name: "Sweetfit" },
  { file: "download (17).png", name: "Max Factor" },
  { file: "download (18).png", name: "NYX Professional Makeup" },
  { file: "download (19).png", name: "Maybelline New York" },
  { file: "download (2).jpg", name: "Imlek" },
  { file: "download (2).png", name: "Reebok" },
  { file: "download (20).png", name: "Avon" },
  { file: "download (22).png", name: "Klijent" },
  { file: "download (23).png", name: "dm drogerie markt" },
  { file: "download (25).png", name: "Wolt" },
  { file: "download (27).png", name: "Philips" },
  { file: "download (29).png", name: "Fibula Travel Agency" },
  { file: "download (31).png", name: "Oysho" },
  { file: "download (32).png", name: "Ušće Shopping Center" },
  { file: "download (36).png", name: "La Roche-Posay" },
  { file: "download (4).jpg", name: "Bakina Tajna" },
  { file: "download (5).png", name: "Eucerin" },
  { file: "download (6).jpg", name: "Grekos" },
  { file: "download (7).png", name: "Nivea" },
  { file: "download (8).jpg", name: "Hair Artist" },
  { file: "download (9).jpg", name: "Burger Fest Čačak" },
  { file: "images.jpg", name: "Barbara Beauty Bar" },
  { file: "KETO CIZ KEJK.jpg", name: "Keto Čist Kolač" },
];

export default function ClientLogos() {
  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
      {LOGOS.map((logo, i) => (
        <Reveal key={logo.file} delay={(i % 12) * 40}>
          <div className="flex h-16 items-center justify-center sm:h-20">
            <div className="relative h-full w-full grayscale opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0">
              <Image
                src={`/images/portfolio-logoi/${encodeURIComponent(logo.file)}`}
                alt={logo.name}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
