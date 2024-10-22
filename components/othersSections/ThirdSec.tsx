import { LuRedo } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import React, { useState } from "react";

const TheThirdSection = () => {
  /*  const [isVisible01, setIsVisible01] = useState<boolean>(true);
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
 */
  //---------
  const [visibleStates, setVisibleStates] = useState({
    isVisible01: true,
    isVisible02: false,
    isVisible03: false,
    isVisible04: false,
  });

  const toggleVisibility = (key: string) => {
    setVisibleStates((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  //---------------

  return (
    <section
      className="py-10 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 xl:px-52 lg:px-52 md:px-32 sm:px-16"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl xl:text-6xl tracking-tight mb-12 md:mb-24">
          One place to maximize your social reach
          <span className="bg-rose-900 text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            effortlessly.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 items-stretch  grid-cols-2 gap-20">
            <ul className="w-full">
              {/*  // the first post  */}
              <ModelCards
                title="Instant posting"
                description=" Upload your content to post bridge and post it instantly
                      to any of your connected social media accounts; including
                      posting to all platforms at the same time."
                toSee={visibleStates.isVisible01}
                onSomeEvent={() => toggleVisibility("isVisible01")}
              />

              {/*  // the fisECrst post  */}

              <ModelCards
                title="Post Scheduling"
                description=" Schedule your content multiple platforms at the same time. + We store your content for up to 3 months for you, for free!"
                toSee={visibleStates.isVisible02}
                onSomeEvent={() => toggleVisibility("isVisible02")}
              />

              {/*  // the third post  */}

              <ModelCards
                title="Unlimited Connections"
                description="Connect as many of your social accounts to post bridge as
                      you d like. Got 20 TikTok accounts, 30 Instagram accounts,
                      a bajillion other accounts? Bring em over red rover."
                toSee={visibleStates.isVisible03}
                onSomeEvent={() => toggleVisibility("isVisible03")}
              />

              {/*  // the fourth post  */}

              <ModelCards
                title="Connect with your audience"
                description="Engage with your audience using the post bridge dashboard!
                      Each of your posts has its own comments, likes, and shares
                      in one place."
                toSee={visibleStates.isVisible04}
                onSomeEvent={() => toggleVisibility("isVisible04")}
              />
            </ul>

            <video
              className="rounded-2xl aspect-square w-full w-[23rem] h-[23rem]"
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

// aadded models here

type Props = {
  title: string;
  description: string;
  toSee: boolean;
  onSomeEvent: () => void;
};
const ModelCards = ({ title, description, toSee, onSomeEvent }: Props) => {
  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        aria-expanded={toSee}
        onClick={onSomeEvent}
      >
        <span
          className={`duration-100 ${
            toSee ? "text-green-500" : "text-primary"
          }`}
        >
          <GoCheckCircle className="w-8 h-8" />
        </span>
        <span className="flex-1 text-base-content text-primary font-semibold">
          <h3
            className={`inline ${
              toSee
                ? "text-green-500"
                : "text-base-content text-primary font-semibold"
            }`}
          >
            {title}
          </h3>
        </span>
      </button>
      {toSee && (
        <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden ">
          <div className="pb-5 leading-relaxed ml-5">{description}</div>
        </div>
      )}
    </li>
  );
};
