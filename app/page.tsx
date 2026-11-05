import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import Services from "@/app/components/sections/Services";
import About from "@/app/components/sections/About";
import Team from "@/app/components/sections/Team";
import Portfolio from "@/app/components/sections/Portfolio";
import Process from "@/app/components/sections/Process";
import Testimonials from "@/app/components/sections/Testimonials";
import Clients from "@/app/components/sections/Clients";
import FAQ from "@/app/components/sections/FAQ";
import BookingCta from "@/app/components/sections/BookingCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Team />
        <Portfolio />
        <Process />
        <Testimonials />
        <Clients />
        <FAQ />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
