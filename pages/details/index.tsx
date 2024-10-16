"use client";

import Footer from "@/components/Footer";
import GlobalLoading from "@/components/GlobalLoading";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";
import ToastContainerBar from "@/components/ToastContainer";
import { Details, MovieCastCrew, itemsData } from "@/typings";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { movies } from "@/data/movies";
import Link from "next/link";
import { FaPlayCircle, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import StarRating from "@/Display/StarRating";
import type { NextPage, GetServerSideProps } from "next";

// change the url of the image from src={fullData.movie_pics} to
//https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg

interface SearchProps {
  gettedPath: string;
}

const DetailsPage: NextPage<SearchProps> = ({ gettedPath }) => {
  console.log("the value of that title is  : ", gettedPath);
  const [fullData, setThefullData] = React.useState<itemsData>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    let glovalData: itemsData[] = movies.filter(
      (movie) => movie.title === gettedPath
    );

    if (
      typeof glovalData != "undefined" &&
      glovalData != null &&
      glovalData.length != null &&
      glovalData.length > 0
    ) {
      setThefullData(glovalData[0]);
    } else {
      console.log("values of fullData is empty");
    }

    try {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:25 ~ fetchData ~ error:", error);
    }
  }, [gettedPath]);

  const descTest: string =
    "In the heart of a bustling metropolis lies a hidden world where dreams come to life. Follow our unlikely hero as they journey through time and space, confronting fears and embracing the unknown. With each twist and turn, they discover the power of friendship and the importance of believing in oneself. Get ready for an adventure beyond your wildest imagination in Echoes of Eternity";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />
      <GlobalLoading isLoading={loading} />

      {typeof fullData != "undefined" ? (
        <main>
          <div className="pt-20 px-6 md:px-20 flex flex-col md:flex-row gap-5">
            <div className="md:w-[300px] w-full flex-shrink-0 flex justify-center items-start ">
              <Image
                className="rounded-2xl drop-shadow-md "
                src="https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg"
                alt={fullData.title}
                width={300}
                height={200}
                style={{
                  transition: "0.3s",
                }}
              />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <p className="text-2xl py-2 sm:text-start md:text-start text-center">
                {fullData.title}
              </p>

              <div className="flex gap-2 justify-center md:justify-start md:h-12 flex-wrap md:flex-nowrap">
                {
                  <Link href={`/movie/${fullData.title}/watch`}>
                    <div className="bg-teal-900 hover:bg-teal-500 text-white transition duration-300 py-3 px-6 rounded-md outline-none flex items-center gap-2 whitespace-nowrap">
                      <FaPlayCircle />
                      <span>Watch now</span>
                    </div>
                  </Link>
                }
                {
                  <div className="bg-teal-900 hover:bg-teal-500 text-white transition duration-300 py-3 px-6 rounded-md outline-none flex items-center gap-2 whitespace-nowrap">
                    <FaYoutube />
                    <span>Watch trailer</span>
                  </div>
                }
              </div>

              <p className="text-lg text-justify">{descTest}</p>

              <div className="flex gap-2 flex-wrap">
                <span
                  key={0}
                  className="bg-dark-lighten border border-white px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {fullData.movie_category}
                </span>
              </div>

              <div className="flex items-center">
                <StarRating
                  stars={Math.round(8.704)}
                  maximum={10}
                  extraText={` (25365 votes)`}
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="relative min-h-screen">
          <div className="flex justify-center items-center">
            {/* <img src="/not-found.png" alt="" /> */}

            <Image
              className="w-4 m-3  "
              src="/not-found.png"
              alt=""
              width={512}
              height={512}
              loading="lazy"
            />
          </div>

          <h3 className="text-textColor text-center text-2xl my-2 ">
            {gettedPath} not been found
          </h3>
        </div>
      )}
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const gettedPath = query.passTitle as string;

    console.log("titleGetted getted values is : ", gettedPath);

    return {
      props: { gettedPath },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default DetailsPage;
