const resolvedUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_URL = resolvedUrl;

export const BUSINESS = {
  name: "Bashka Digital",
  description:
    "Marketing agencija za društvene mreže, produkciju sadržaja, kampanje i web.",
  email: "marketingbashka@gmail.com",
  phone: "+381646411538",
  addressLocality: "Čačak",
  addressCountry: "RS",
  areaServed: ["Čačak", "Beograd", "Srbija"],
  sameAs: [
    "https://www.instagram.com/bashka.rs/",
    "https://www.tiktok.com/@bashka.rs",
    "https://www.linkedin.com/company/bashka/",
  ],
};
