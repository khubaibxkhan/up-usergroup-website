"use client";
import PowerBIHeroCarousel from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar stays fixed at the top */}
      <Navbar />
      {/* Page content */}
      <main>
        {/*  Add Hero Section later */}
        < PowerBIHeroCarousel />
        {/* Team Section */}
      </main>
    </div>
  );
}