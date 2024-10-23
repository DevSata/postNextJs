import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";

export default function TheSixthSection() {
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
  
  return (
    <section
      className="py-10 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 xl:px-52 lg:px-52 md:px-32 sm:px-16"
      id="features"
    >
      <div className="px-8">
        <h3 className="font-semibold text-lg tracking-tight mb-4 text-green-500">
          FAQ
        </h3>
        <h2 className="font-extrabold text-4xl lg:text-6xl xl:text-6xl tracking-tight mb-10 md:mb-10">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 items-stretch  grid-cols-2 gap-20">
            <ul className="w-full">
              <QuesCard
                title="questions 1"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={visibleStates.isVisible01}
                onSomeEvent={() => toggleVisibility("isVisible01")}
              />

              <QuesCard
                title="questions 2"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={visibleStates.isVisible02}
                onSomeEvent={() => toggleVisibility("isVisible02")}
              />

              <QuesCard
                title="questions 3"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={visibleStates.isVisible03}
                onSomeEvent={() => toggleVisibility("isVisible03")}
              />

              <QuesCard
                title="questions 4"
                description="The sky whispered secrets as the wind gently danced, A melody played on golden fields of endless light, And time stood still in the heart of a dream."
                toSee={visibleStates.isVisible04}
                onSomeEvent={() => toggleVisibility("isVisible04")}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

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
        aria-expanded={toSee}
        onClick={onSomeEvent}
      >
        <span
          className={`duration-100 ${
            toSee ? "text-green-500" : "text-primary"
          }`}
        >
          <FaPlus className="w-5 h-5" />
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
