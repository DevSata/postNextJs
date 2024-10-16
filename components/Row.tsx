"use client";

import { itemsData } from "@/typings";
import React, { useRef, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import Container from "./Container";
import MoviesLine from "./MoviesLine";

type Props = {
  movies: itemsData[];
  title: string;
};

function Row({ movies, title }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-6 md:pb-6">
      <div className="space-y-2 md:space-y-2 px-4 ">
        <Container header={title}>
          <div className="group relative md:-ml-2">
            <BiChevronLeftCircle
              className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                !isMoved && "hidden"
              }`}
              onClick={() => handleClick("left")}
            />

            <div
              ref={rowRef}
              className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-3 md:p-2"
            >
              <>
                {movies?.map((theItemData, index) => (
                  <MoviesLine key={index} movieData={theItemData} />
                ))}
              </>
            </div>
            <BiChevronRightCircle
              className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
              onClick={() => handleClick("right")}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Row;
