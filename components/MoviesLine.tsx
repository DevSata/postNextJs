"use client";

import { itemsData } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

import CircularRate from "./CircularRate";
import { FaQuestionCircle } from "react-icons/fa";

type Props = {
  movieData: itemsData;
};

// also changing the url of that image from  src={movieData.movie_pics} to
//https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg

function MoviesLine({ movieData }: Props) {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);

  const navigatePage = async () => {
    console.log("the navigatePage has been called");
    router.push(`/details?passTitle=${movieData.title}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative h-[300px] min-w-[180px] cursor-pointer transition-transform duration-200 ease-out  md:hover:scale-105"
    >
      {movieData.movie_pics ? (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => navigatePage()}
        >
          <Image
            src="https://image.tmdb.org/t/p/w300/4XYqx5tbUXIBxe0x9ZlXHFxga0n.jpg"
            alt=""
            width={230}
            height={350}
            className="rounded-md"
            loading="lazy"
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = event.target as HTMLImageElement;
              target.src = "/empty.png";
            }}
          />
          {isHover && (
            <>
              <motion.div
                className="absolute top-[190px] z-29 items-center ml-6 w-[150px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <CircularRate value={8.292} isPoster={true} />

                <p className="text-sm font-medium truncate">
                  {movieData?.title}
                </p>
              </motion.div>
            </>
          )}
        </div>
      ) : (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 md:h-[300px] dark:bg-gray-700">
            <FaQuestionCircle className="w-12 h-12 text-gray-200" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default MoviesLine;
