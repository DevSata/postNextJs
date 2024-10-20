import React, { useState } from "react";

import { BsFillCartCheckFill } from "react-icons/bs";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Get more views, with less effort.
          </h2>
          <div className="flex justify-center mt-20">
            <div className="join border border-base-content/20 rounded-full bg-base-100 p-1 w-64 grid grid-cols-2 gap-4">
              <button
                className={`btn btn-sm join-item flex-1 ${
                  !isYearly ? "bg-emerald-700 rounded-l-full" : "btn-primary"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`btn btn-sm join-item flex-1 ${
                  isYearly ? "bg-emerald-700 rounded-r-full " : "btn-primary"
                } relative`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
                <span className="bg-emerald-700 absolute -top-3 -right-3 text-[10px] bg-secondary/70 text-secondary-content px-1 py-0.5 rounded-full whitespace-nowrap">
                  2 months free
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center gap-8">
          <PriceCard
            title="Starter"
            price={` ${isYearly ? "7" : "10"} `}
            description="Grow your reach the easy way"
            features={[
              "5 connected social accounts",
              "Unlimited instant posts",
              "Unlimited scheduled posts",
              "Unlimited potential views",
            ]}
          />
          <PriceCard
            title="Creator"
            price={` ${isYearly ? "15" : "20"} `}
            description="Create once, post everywhere"
            features={[
              "15 connected social accounts",
              "Unlimited instant posts",
              "Unlimited scheduled posts",
              "Unlimited potential views",
            ]}
          />
          <PriceCard
            title="Pro"
            price={` ${isYearly ? "30" : "40"} `}
            description="Grow all your accounts, all at once"
            features={[
              "Unlimited connected social accounts",
              "Unlimited instant posts",
              "Unlimited scheduled posts",
              "Unlimited potential views",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

type Props = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

const PriceCard = ({ title, price, description, features }: Props) => {
  return (
    <div className="relative w-full max-w-lg bg-slate-500 rounded-3xl">
      <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
        <div className="absolute top-4 right-4 bg-green-500 rounded-2xl text-secondary-content text-xs font-bold px-2 py-1 rounded">
          2 months free
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold">{title}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div className="flex flex-col justify-end mb-1">
            <p className="text-xs text-base-content/60 uppercase font-semibold">
              <span className="text-lg font-normal lowercase">/month</span>
            </p>
            <p className="text-xs text-base-content/60">billed annually</p>
          </div>
        </div>
        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <button className="btn btn-primary btn-block group bg-green-500 rounded-2xl flex items-center justify-center gap-2 text-sm px-10 py-2">
            <BsFillCartCheckFill className="text-black" />
            <h2 className="text-black text-sm">Get post bridge</h2>
          </button>
          <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
            Start posting instantly. Go viral asap 📈
          </p>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-[18px] h-[18px] opacity-80 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
    viewBox="0 0 375 509"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
  </svg>
);
