"use client";

import GlobalLoading from "@/components/GlobalLoading";
import ToastContainerBar from "@/components/ToastContainer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Imported sections
import SecondSec from "@/components/othersSections/SecondSec";
import FirstSec from "@/components/othersSections/FirstSec";
import ThirdSec from "@/components/othersSections/ThirdSec";
import Forther from "@/components/othersSections/Forther";
import FitthSec from "@/components/othersSections/FitthSec";
import SixthSec from "@/components/othersSections/SixthSec";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      setTimeout(() => {
        console.log(
          "data has been loaded right now so the setIsLoading is set to true"
        );
        setIsLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:28 ~ fetchData ~ error:", error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ToastContainerBar />

      <GlobalLoading isLoading={isLoading} />

      <main className="relative  pb-6 lg:space-y-6">
        <FirstSec />
        <SecondSec />
        <ThirdSec />
        <Forther />
        <FitthSec />
        <SixthSec />
      </main>
      
    </motion.div>
  );
}
