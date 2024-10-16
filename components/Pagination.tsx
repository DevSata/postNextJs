import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import type { NextPage } from "next";

interface PaginationProps {
  current: number;
  maximum: number;
  resolveLink: (page: number) => string;
}

let constNumber = 4; // the old value was 5
let theScondNumber = 3; // the old value was 4

const Pagination: NextPage<PaginationProps> = ({
  current,
  maximum,
  resolveLink,
}) => {
  console.log(
    "the value of current is: ",
    current,
    " and maximum is: ",
    maximum
  );

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      {current > 1 && (
        <Link href={resolveLink(current - 1)}>
          <button className="rounded-btn">
            <FaChevronLeft />
          </button>
        </Link>
      )}

      {current < constNumber ? (
        <>
          {new Array(maximum < constNumber ? maximum : constNumber)
            .fill("")
            .map((_, index) => (
              <Link key={index} href={resolveLink(index + 1)}>
                <button
                  className={`rounded-btn ${
                    current === index + 1 ? "bg-[#ff4112] text-[#e1e5eb]" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </Link>
            ))}
          {maximum > constNumber && (
            <>
              <span className="text-[#e1e5eb]">...</span>
              <Link href={resolveLink(maximum)}>
                <button className="rounded-btn">{maximum}</button>
              </Link>
            </>
          )}
        </>
      ) : current > maximum - theScondNumber ? (
        <>
          <Link href={resolveLink(1)}>
            <button className="rounded-btn">1</button>
          </Link>

          <span className="text-[#e1e5eb]">...</span>

          {new Array(constNumber).fill("").map((_, index) => (
            <Link
              key={index}
              href={resolveLink(maximum - theScondNumber + index)}
            >
              <button
                className={`rounded-btn ${
                  current === maximum - theScondNumber + index
                    ? "bg-[#ff4112] text-[#e1e5eb]"
                    : ""
                }`}
              >
                {maximum - theScondNumber + index}
              </button>
            </Link>
          ))}
        </>
      ) : (
        <>
          <Link href={resolveLink(1)}>
            <button className="rounded-btn">1</button>
          </Link>
          <span className="text-[#e1e5eb]">...</span>
          {new Array(constNumber).fill("").map((_, index) => (
            <Link key={index} href={resolveLink(current - 2 + index)}>
              <button
                className={`rounded-btn ${
                  current === current - 2 + index
                    ? "bg-[#ff4112] text-[#e1e5eb]"
                    : ""
                }`}
              >
                {current - 2 + index}
              </button>
            </Link>
          ))}
          <span className="text-[#e1e5eb]">...</span>
          <Link href={resolveLink(maximum)}>
            <button className="rounded-btn">{maximum}</button>
          </Link>
        </>
      )}

      {current < maximum && (
        <Link href={resolveLink(current + 1)}>
          <button className="rounded-btn">
            <FaChevronRight />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
