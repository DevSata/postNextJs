"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

const Navi = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const pathname = usePathname();

  const navLinks: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/mainCat", label: "Pricing" },
    { href: "/moviesList", label: "Features" },
    { href: "/search", label: "FAQ" },
  ];

  return (
    <>
      <div
        className="sidebar-container fixed w-full max-h-80 overflow-hidden justify-center bg-[#141414] grid pt-[40px] left-0 z-10 py-5 shadow-md z-50 "
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <IoMdClose
          color="white"
          onClick={toggle}
          className="absolute right-0 text-4xl inline-flex items-center m-5"
        />

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          {navLinks.map((item, index) => (
            <li
              className="text-white hover:text-emerald-300 py-1"
              key={item.label}
            >
              <Link href={item.href} onClick={toggle}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-20 bg-[#141414] sticky top-0 shadow-md z-40">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div
              className="relative font-bold text-3xl text-white cursor-pointer"
              onClick={() => router.push("/")}
            >
              M<span className="text-red-500">App </span>
            </div>

            <GiHamburgerMenu
              color="white"
              onClick={toggle}
              className="text-2xl inline-flex items-center md:hidden mx-3"
            />

            <ul className="hidden md:flex gap-x-6 text-white flex-1 flex justify-center items-center">
              {navLinks.map((item, index) => (
                <li
                  key={item.label}
                  className={`navBarComponents ${
                    pathname === `${item.href}` &&
                    "bg-red-500 p-1.5 rounded-md text-white "
                  }`}
                  onClick={() => router.push(`${item.href}`)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navi;
