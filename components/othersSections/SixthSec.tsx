import { LuRedo } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
const TheThirdSection = () => {
  const [isVisible01, setIsVisible01] = useState<boolean>(true);
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
      className="py-10 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 xl:px-52 lg:px-52 md:px-32 sm:px-16"
      id="features"
    >
      <div className="px-8">
        <h3 className="font-semibold text-lg tracking-tight mb-4 text-green">
          Faq
        </h3>
        <h2 className="font-extrabold text-4xl lg:text-6xl xl:text-6xl tracking-tight mb-10 md:mb-10">
          Frequent asked questions
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 items-stretch  grid-cols-2 gap-20">
            <ul className="w-full">
              <QuesCard
                title="questions 1"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={isVisible01}
                onSomeEvent={toggleVisibility01}
              />

              <QuesCard
                title="questions 2"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={isVisible02}
                onSomeEvent={toggleVisibility02}
              />

              <QuesCard
                title="questions 3"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={isVisible03}
                onSomeEvent={toggleVisibility03}
              />

              <QuesCard
                title="questions 4"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={isVisible04}
                onSomeEvent={toggleVisibility04}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  description: string;
  toSee: boolean;
  onSomeEvent: () => void;
};

const QuesCard = ({ title, description, toSee, onSomeEvent }: Props) => {
  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        aria-expanded="false"
        onClick={onSomeEvent}
      >
        <span
          className={`duration-100 ${
            toSee ? "text-green-500" : "text-primary"
          }`}
        >
          {" "}
          <FaPlus className="size-5" />
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

export default TheThirdSection;
