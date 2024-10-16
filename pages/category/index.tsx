"use client";
import { baseURL } from "@/utils/baseUrl";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import { itemsData } from "@/typings";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CircularRate from "@/components/CircularRate";
import { movies } from "@/data/movies";
import ToastContainerBar from "@/components/ToastContainer";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import type { NextPage, GetServerSideProps } from "next";

import GlobalLoading from "@/components/GlobalLoading";

function shuffle(array: itemsData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getDataFromThatCats(thatCats: string) {
  const jsonData = movies.filter((movie) => movie.movie_category === thatCats);
  return shuffle(jsonData);
}
type Props = {};

interface SearchProps {
  q: string;
  page: number;
}

const CatgegoriesById: NextPage<SearchProps> = ({ q, page }) => {
  const router = useRouter();

  console.log("the value getted grom q is:", q);

  typeof page === "undefined"
    ? (page = 5)
    : console.log("the page is been getted is defined", page);

  if (q === undefined) {
    console.log("result is empty");
  } else {
    console.log("Result q is:", q);
  }

  const catsDataArray: itemsData[] = getDataFromThatCats(q);

  const numPageToShow: number = 18;
  const theDataLangth: number = catsDataArray.length;

  let numButton: number;

  if (theDataLangth <= 1) {
    numButton = 1;
  } else {
    numButton = Math.ceil(catsDataArray.length / numPageToShow);
  }

  const [loading, setLoading] = React.useState<boolean>(true);

  function navigatePage(navigateId: string): void {
    if (!navigateId) return;
    router.push(`/details?passTitle=${navigateId}`);
  }

  React.useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:25 ~ fetchData ~ error:", error);
    }
  }, []);

  const startIndex: number = (page - 1) * numPageToShow;
  const endIndex: number = startIndex + numPageToShow;

  const titlesData: itemsData[] = catsDataArray.slice(startIndex, endIndex);

  // change the url  to test thta data from src={data.movie_pics} to
  //https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />

      <GlobalLoading isLoading={loading} />

      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        {titlesData.length < 1 ? (
          <div className="h-[300px] flex justify-center items-center">
            <h1 className="font-bold text-3xl text-gray-300">
              no Result been funded Within{" "}
              <span className="font-base text-3xl text-green-600">{q}</span>
            </h1>
          </div>
        ) : (
          <>
            <div className="hero-headline flex flex-col items-center justify-center pt-12 pb-5 text-center">
              <h1 className="font-bold text-2xl text-gray-300">
                Search Within the{" "}
                <span className="font-base text-2xl text-green-600">{q}</span>{" "}
                at page:{" "}
                {
                  <span className="font-base text-2xl text-green-600">
                    {page}
                  </span>
                }
              </h1>
            </div>
            <section
              id="photos"
              className="my-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 "
            >
              {titlesData?.map((data, index) => (
                <div
                  onClick={() => navigatePage(data.title)}
                  key={index}
                  className="rounded-3xl overflow-hidden cursor-pointer group flex flex-col items-center mb-6 hover:bg-[#161f2b] transition duration-300"
                >
                  <Image
                    className="object-cover rounded-3xl border-slate-600 border"
                    src="https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg"
                    alt={data.title}
                    width={300}
                    height={540}
                    loading="lazy"
                  />
                  <p className="flex text-center max-h-16 justify-center leading-relaxed py-1 px-3 overflow-hidden bg-dark-darken transition duration-300">
                    {data?.title}
                  </p>
                </div>
              ))}
            </section>

            <div className="flex justify-center mt-8">
              {numButton > 1 && (
                <Pagination
                  current={page}
                  maximum={numButton}
                  resolveLink={(page) =>
                    `/category?q=${encodeURIComponent(q)}&page=${page}`
                  }
                />
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
export default CatgegoriesById;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const q = query.q as string;
    const page = query.page ? Number(query.page) : 1;

    console.log("q getted values is : ", q, " Page index value is = ", page);

    return {
      props: { q, page },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
