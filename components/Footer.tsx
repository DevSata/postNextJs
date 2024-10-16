import { Session } from "next-auth";
// import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState<string>("United States");
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col text-[#737373] px-14 md:px-28 lg:px-40 xl:px-64 mt-14">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-4">
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            FAQ
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium">
            Investor Relations
          </li>
          <li
            onClick={() => router.push("/privacy")}
            className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium"
          >
            Privacy
          </li>
          <li
            onClick={() => router.push("/Terms")}
            className="my-1 md:mr-4 hover:underline cursor-pointer text-sm font-medium"
          >
            Terms
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Help Centre
          </li>
          <li
            onClick={() => router.push("/search")}
            className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium"
          >
            Search
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Cookie Preferences
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Legal Notices
          </li>
          <li
            onClick={() => router.push("/moviesList")}
            className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium"
          >
            Movies
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Ways to Watch
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Corporate Information
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Only on <span className="text-white">Movie</span>
            <span className="text-red-500">APP</span>
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Media Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            Terms of Use
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer text-xs font-medium">
            {" "}
            <a href="https://www.linkedin.com/in/naveen-polasa/">
              Contact Us
            </a>{" "}
          </li>
        </ul>
        <button className="flex justify-center items-center font-medium h-12 w-36 border border-[#737373]">
          <AiOutlineGlobal className="w-4 m-3 " size={55} />
          English
        </button>
        <p className="my-4 text-xs font-medium">
          <span className="text-white">Movie</span>
          <span className="text-red-500">APP</span>
        </p>
        <p className="my-4 text-xs font-medium">{"country"}</p>
      </div>

      <div className="h-9 py-1 text-white text-center bg-[#333333]">
        Copyright &copy; 2024 All rights reserved
      </div>
    </div>
  );
}

export default Footer;
