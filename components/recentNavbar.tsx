"use client";

import { Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

type Props = {};

function Navbar({}: Props) {
  const [open, setOpen] = useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <div className="font-bold text-3xl text-white">
          <li className="cursor-pointer" onClick={() => router.push("/")}>
            M<span className="text-red-500">App</span>
          </li>
        </div>

        <ul className="hidden md:space-x-4 md:flex cursor-pointer  items-center justify-center ">
          <li
            className={`navBarComponents ${
              pathname === "/" && "bg-red-500 px-2.5 py-2.5 rounded-md"
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className={`navBarComponents ${
              pathname == "/mainCat" && "bg-red-500 px-2.5 py-2.5 rounded-md"
            }`}
            onClick={() => router.push("/mainCat")}
          >
            Categories
          </li>
          <li
            className={`navBarComponents ${
              pathname === "/moviesList" &&
              "bg-red-500 px-2.5 py-2.5 rounded-md"
            }`}
            onClick={() => router.push("/moviesList")}
          >
            Movies
          </li>

          <li
            className={`navBarComponents ${
              pathname === "/search" && "bg-red-500 px-2.5 py-2.5 rounded-md"
            }`}
            onClick={() => router.push("/search")}
          >
            Search
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
