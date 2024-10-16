"use client";
import { baseURL } from "@/utils/baseUrl";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import { itemsData } from "@/typings";
import Navbar from "@/components/Navbar";

import CircularRate from "@/components/CircularRate";
import { movies } from "@/data/movies";
import ToastContainerBar from "@/components/ToastContainer";
import Footer from "@/components/Footer";

import GlobalLoading from "@/components/GlobalLoading";

import TemplateCardsImage from "@/components/TemplateCardsImage";

type Props = {};

function shuffle(array: itemsData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getDataFromThatCats(thatCats: string): itemsData[] {
  const jsonData = movies.filter((movie) => movie.movie_category === thatCats);
  return shuffle(jsonData);
}

function MainCats({}: Props) {
  let getAllCats: string[] = [
    "Fantasy",
    "Adventure",
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Documentary",
    "Animation",
    "Sci-Fi",
    "Mystery",
    "Western",
    "Family",
    "Drama",
    "Crime",
    "Thriller",
    "Music",
  ];

  const router = useRouter();

  const [loading, setLoading] = React.useState<boolean>(true);

  const [isHover, setIsHover] = useState<boolean>(true);

  function navigatePage(navigateId: string): void {
    if (!navigateId) return;
    console.log("the getted cats is:", navigateId);
    router.push(`/category?q=${navigateId}`);
  }

  React.useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:25 ~ fetchData ~ error:", error);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />
      {/* <GlobalLoading isLoading={loading} /> */}

      <TemplateCardsImage isLoading={loading} />

      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
          <h1 className="font-bold text-2xl text-gray-300">
            All Availabea Categories:
          </h1>

          {/*  // add more sections */}

          {/*  // end adding the new code  */}

          <section id="photos" className=" my-5 mx-3 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className=" relative group-hover:opacity-75 cursor-pointer"
            >
              <div className="grid grid-cols-3 gap-4">
                {getAllCats.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => navigatePage(cat)}
                    className={`justify-center ${
                      index % 4 === 3 ? "col-span-2" : ""
                    } bg-teal-900 hover:bg-teal-500 text-white transition duration-300 py-3 px-6 rounded-md outline-none flex items-center gap-2 whitespace-nowrap`}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default MainCats;
