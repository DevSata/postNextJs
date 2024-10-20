import { LuRedo } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import React, { useState } from "react";
const TheThirdSection = () => {
  const [isVisible01, setIsVisible01] = useState<boolean>(false);
  const [isVisible02, setIsVisible02] = useState<boolean>(false);
  const [isVisible03, setIsVisible03] = useState<boolean>(false);
  const [isVisible04, setIsVisible04] = useState<boolean>(false);

  const toggleVisibility01 = () => {
    setIsVisible01((prev) => !prev);
  };

  const toggleVisibility02 = () => {
    setIsVisible02((prev) => !prev);
  };

  const toggleVisibility03 = () => {
    setIsVisible03((prev) => !prev);
  };

  const toggleVisibility04 = () => {
    setIsVisible04((prev) => !prev);
  };

  return (
    <section
      className="py-10 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 lg:px-52 md:px-32 sm:px-16"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl xl:text-6xl tracking-tight mb-12 md:mb-24">
          One place to maximize your social reach
          <span className="bg-yellow-300 text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            effortlessly.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid sm:grid-cols-1 items-stretch sm:gap-8 sm:gap-12 grid-cols-2 gap-20">
            <ul className="w-full">
              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="true"
                  onClick={toggleVisibility01}
                >
                  <span
                    className={`duration-100 ${
                      isVisible01 ? "text-green-500" : "text-primary"
                    }`}
                  >
                    {" "}
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content text-primary font-semibold">
                    <h3
                      className={`inline ${
                        isVisible01
                          ? "text-green-500"
                          : "text-base-content text-primary font-semibold"
                      }`}
                    >
                      Instant posting
                    </h3>{" "}
                  </span>
                </button>

                {isVisible01 && (
                  <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden opacity-1">
                    <div className="pb-5 leading-relaxed">
                      Upload your content to post bridge and post it instantly
                      to any of your connected social media accounts; including
                      posting to all platforms at the same time.
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                  onClick={toggleVisibility02}
                >
                  <span
                    className={`duration-100 ${
                      isVisible02 ? "text-green-500" : "text-primary"
                    }`}
                  >
                    {" "}
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content text-primary font-semibold">
                    <h3
                      className={`inline ${
                        isVisible02
                          ? "text-green-500"
                          : "text-base-content text-primary font-semibold"
                      }`}
                    >
                      Post Scheduling
                    </h3>
                  </span>
                </button>
                {isVisible02 && (
                  <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden ">
                    <div className="pb-5 leading-relaxed">
                      Schedule your content multiple platforms at the same time.
                      + We store your content for up to 3 months for you, for
                      free!
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                  onClick={toggleVisibility03}
                >
                  <span
                    className={`duration-100 ${
                      isVisible03 ? "text-green-500" : "text-primary"
                    }`}
                  >
                    {" "}
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content text-primary font-semibold">
                    <h3
                      className={`inline ${
                        isVisible03
                          ? "text-green-500"
                          : "text-base-content text-primary font-semibold"
                      }`}
                    >
                      Unlimited Connections
                    </h3>
                  </span>
                </button>
                {isVisible03 && (
                  <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                    <div className="pb-5 leading-relaxed">
                      Connect as many of your social accounts to post bridge as
                      you d like. Got 20 TikTok accounts, 30 Instagram accounts,
                      a bajillion other accounts? Bring em over red rover.
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                  onClick={toggleVisibility04}
                >
                  <span
                    className={`duration-100 ${
                      isVisible04 ? "text-green-500" : "text-primary"
                    }`}
                  >
                    {" "}
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content text-primary font-semibold">
                    <h3
                      className={`inline ${
                        isVisible04
                          ? "text-green-500"
                          : "text-base-content text-primary font-semibold"
                      }`}
                    >
                      Connect with your audience
                    </h3>
                  </span>
                </button>

                {isVisible04 && (
                  <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                    <div className="pb-5 leading-relaxed">
                      Engage with your audience using the post bridge dashboard!
                      Each of your posts has its own comments, likes, and shares
                      in one place.
                    </div>
                  </div>
                )}
              </li>
            </ul>

            <video
              className="rounded-2xl aspect-square w-full  w-[26rem] h-[26rem]"
              autoPlay
              muted
              loop
              playsInline
              controls
              width="300"
              height="300"
            >
              <source src="/feature1vid.mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheThirdSection;
