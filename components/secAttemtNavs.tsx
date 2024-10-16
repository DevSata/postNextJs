"use client";

import { Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import NavLogo from "@/public/logo.png";

type Props = {};

function Navbar({}: Props) {
  const [open, setOpen] = useState<boolean>(true); // change it ro be true

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
    <header className=" py-2">
      <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
        <div className="font-bold text-3xl text-white">
          <li className="cursor-pointer" onClick={() => router.push("/")}>
            M-<span className="text-red-500">App</span>
          </li>
        </div>

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`flex justify-center lg:flex lg:items-center lg:w-auto w-full bg-[#302d2d] mt-3 rounded-lg py-4`}
        >
          <ul className="text-base text-white ">
            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold flex items-center justify-center">
              <Link href="/">Home</Link>
            </li>
            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold flex items-center justify-center">
              <Link href="/mainCat">Categories</Link>
            </li>
            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold flex items-center justify-center">
              <Link href="/moviesList">Movies</Link>
            </li>

            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold flex items-center justify-center">
              <Link href="/Search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
