"use client";

import DividerMovieLine from "@/components/DividerMovieLine";
import Footer from "@/components/Footer";
import GlobalLoading from "@/components/GlobalLoading";
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";
import ToastContainerBar from "@/components/ToastContainer";
import tvRequests from "@/utils/tvSeasonRequest";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {};

function TvSession({}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:64 ~ fetchData ~ error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ToastContainerBar />
      <Navbar />
      <GlobalLoading isLoading={isLoading} />

      <div className="pt-28 px-6 md:px-20 flex flex-col md:flex-row gap-5">
        <div className="flex flex-col justify-start gap-3 lg:px-80 xl:px-80">
          <p className="text-2xl py-2 sm:text-start md:text-start text-center">
            Terms Of Use
          </p>

          <section>
            <h2 className="text-textColor font-bold text-xl text-black mb-5">
              1. Terms
            </h2>
            <p className="text-textColor font-light text-sm text-black">
              By accessing this web site, you are agreeing to be bound by these
              web site Terms and Conditions of Use, all applicable laws and
              regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of
              these terms, you are prohibited from using or accessing this site.
              The materials contained in this web site are protected by
              applicable copyright and trade mark law.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

export default TvSession;
