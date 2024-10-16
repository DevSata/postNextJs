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

const SearchComponent: NextPage<typeDatas> = ({ page }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [searchTerms, setSearchTerms] = useState<string>("");
  const [userSearchData, setUserSearchData] = useState<itemsData[]>([]);
  const [isHover, setIsHover] = useState<boolean>(true);
  const [searchTopTopic, setSearchTopic] = useState<string>("Empty Search");

  let numButton: number = 1;

  const numPageToShow: number = 18;

  if (userSearchData.length != 0) {
    if (userSearchData.length <= 1) {
      numButton = 1;
    } else {
      numButton = Math.ceil(userSearchData.length / numPageToShow);
    }
  }

  const [loading, setLoading] = React.useState<boolean>(false);

  function navigatePage(titleDetail: string): void {
    if (!titleDetail) return;
    router.push(`/details?passTitle=${titleDetail}`);
  }

  useEffect(() => {
    if (searchTerms !== "") {
      console.log("the value of searchTerms is not null");
      setUserSearchData(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerms.toLowerCase())
        )
      );
    } else {
      console.log("the getted value of searchTerms is ", searchTerms);
    }
  }, [searchTerms]);

  React.useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:25 ~ fetchData ~ error:", error);
    }
  }, []);

  const startIndex = (page - 1) * numPageToShow;
  const endIndex = startIndex + numPageToShow;

  const titlesData: itemsData[] = userSearchData.slice(startIndex, endIndex);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-x-hidden"
    >
      <ToastContainerBar />

      <main className="pl-4 pt-24 pb-24 lg:space-y-24">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="box pt-6">
            <div className="box-wrapper">
              <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                  <svg
                    className=" w-5 text-gray-600 h-5 cursor-pointer"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>

                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search for images"
                  x-model="q"
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent text-black"
                  value={searchTerms}
                  onChange={(e) => {
                    var vamueGetted = e.target.value;
                    setSearchTerms(e.target.value);
                    setSearchTopic(vamueGetted);
                    console.log(
                      " the value getted for that search is ",
                      vamueGetted
                    );
                  }}
                />
              </div>
            </div>
          </div>

          {userSearchData.length == 0 ? (
            <div className="h-[300px] flex justify-center items-center">
              <FcSearch className="text-9xl animate-bounce" />
            </div>
          ) : (
            <>
              <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                <h1 className="font-bold text-3xl text-gray-300">
                  Search Within a Topic
                </h1>
                <p className="font-base text-2xl text-green-500">
                  {searchTopTopic}
                </p>
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
                    <p className="flex text-center max-h-16 justify-center leading-relaxed py-2 px-3 overflow-hidden bg-dark-darken transition duration-300">
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
                    resolveLink={(page) => `/search?page=${page}`}
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

export default SearchComponent;
