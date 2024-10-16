"use client";

import Footer from "@/components/Footer";
import GlobalLoading from "@/components/GlobalLoading";
import Navbar from "@/components/Navbar";
import PeoplePopular from "@/components/PeoplePopular";
import ToastContainerBar from "@/components/ToastContainer";
import { PopularTyping } from "@/typings";
import peopleRequests from "@/utils/personRequest";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {};

function PersonPage({}: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />
      <Navbar />

      <div className="pt-28 px-6 md:px-20 flex flex-col md:flex-row gap-5">
        <div className="flex flex-col justify-start gap-3 lg:px-80 xl:px-80">
          <p className="text-2xl py-2 sm:text-start md:text-start text-center">
            Privacy Policy
          </p>

          <section>
            <h2 className="text-textColor font-bold text-xl text-black mb-5">
              1. Terms:
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
          <section>
            <h2 className="text-textColor font-bold text-xl text-black py-5">
              2. Use License
            </h2>
            <p className="text-textColor font-light text-sm text-black">
              Upon accessing this website, permission is granted to temporarily
              download materials (information or software) from Data.Page&apos;s
              web site.
            </p>
          </section>
          <section>
            <h2 className="text-textColor font-bold text-xl text-black py-5">
              3. Disclaimer
            </h2>
            <p className="text-textColor font-light text-sm text-black">
              The materials on Data.Page&apos;s web site and the conversion
              files offered are provided &quot;as is&quot;. Data.Page makes no
              warranties, expressed or implied, and hereby disclaims and negates
              all other warranties, including without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights. Further, Data.Page does not warrant
              or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its
              Internet web site, the downloadable files provided, or otherwise
              relating to such materials or on any sites linked to this site.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

export default PersonPage;
