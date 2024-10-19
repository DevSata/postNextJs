"use client";

import DividerMovieLine from "@/components/DividerMovieLine";
import GlobalLoading from "@/components/GlobalLoading";
import HomeBanner from "@/components/HomeBanner";
import Row from "@/components/Row";
import ToastContainerBar from "@/components/ToastContainer";
import requests from "@/utils/requests";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { itemsData } from "@/typings";
import Link from "next/link";
import { movies } from "@/data/movies";
// Imported sections
import SecondSec from "@/components/othersSections/SecondSec";
import FirstSec from "@/components/othersSections/FirstSec";
import ThirdSec from "@/components/othersSections/ThirdSec";

function shuffle(array: itemsData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getDataFromThatCats(thatCats: string) {
  const jsonData = movies.filter((movie) => movie.movie_category === thatCats);
  return shuffle(jsonData).slice(0, 10);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let getArray: string[] = [
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
      </main>
    </motion.div>
  );
}
