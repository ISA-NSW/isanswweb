"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Sponsor from "@/components/Sponsor";
import MainEvents from "@/components/MainEvents";
import Events from "@/components/Events";
import Branch from "@/components/Branch";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import GoogleCalendar from "@/components/GoogleCalendar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Branch />
        <Sponsor />
        <Events />
        <MainEvents />
        <GoogleCalendar />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
