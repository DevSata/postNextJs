import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";
import { movies } from "@/data/movies";
import { itemsData } from "@/typings";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import GlobalLoading from "@/components/GlobalLoading";
import CircularRate from "@/components/CircularRate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToastContainerBar from "@/components/ToastContainer";
import { motion } from "framer-motion";
import type { NextPage, GetServerSideProps } from "next";

type typeDatas = {
  page: number;
};

const MoviesAllList: NextPage<typeDatas> = ({ page }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchTerms, setSearchTerms] = useState<string>("");

  const [isHover, setIsHover] = useState<boolean>(true);
  const [searchTopTopic, setSearchTopic] = useState<string>("Empty Search");

  let numButton: number = 1;
  const numPageToShow: number = 18;

  if (movies.length != 0) {
    if (movies.length <= 1) {
      numButton = 1;
    } else {
      numButton = Math.ceil(movies.length / numPageToShow);
    }
  }

  const [loading, setLoading] = React.useState<boolean>(false);

  function navigatePage(titleDetail: string): void {
    if (!titleDetail) return;
    console.log("the title detail getted is: ", titleDetail);
    router.push(`/details?passTitle=${titleDetail}`);
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
  const titlesData: itemsData[] = movies.slice(startIndex, endIndex);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />

      <main className="pt-8 pb-24 lg:space-y-24">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          {movies.length == 0 ? (
            <div className="h-[300px] flex justify-center items-center">
              <h1 className="font-bold text-3xl text-gray-300">
                Error Getthing list of all movies
              </h1>
            </div>
          ) : (
            <>
              <div className="hero-headline flex flex-col items-center justify-center pt-3 pb-6 text-center">
                <h1 className="font-bold text-3xl text-gray-300">
                  list of All movies
                </h1>
              </div>

              <section
                id="photos"
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4"
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
                    resolveLink={(page) => `/moviesList?page=${page}`}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const page = query.page ? Number(query.page) : 1;

    console.log(" Page index value is = ", page);

    return {
      props: { page },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default MoviesAllList;
