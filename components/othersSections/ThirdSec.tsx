import { LuRedo } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";

const TheThirdSection = () => {
  return (
    <section
      className="py-10 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 lg:px-52 md:px-32 sm:px-16"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          One place to maximize your social reach
          <span className="bg-yellow-300 text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            effortlessly.
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="true"
                >
                  <span className="duration-100 text-primary">
                    <GoCheckCircle className="size-8 text-sky-400" />
                  </span>
                  <span className="flex-1 text-base-content text-primary font-semibold">
                    <h3 className="inline">Instant posting</h3>
                  </span>
                </button>
                <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden opacity-1">
                  <div className="pb-5 leading-relaxed">
                    Upload your content to post bridge and post it instantly to
                    any of your connected social media accounts; including
                    posting to all platforms at the same time.
                  </div>
                </div>
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span className="duration-100">
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content">
                    <h3 className="inline">Post Scheduling</h3>
                  </span>
                </button>
                <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden ">
                  <div className="pb-5 leading-relaxed">
                    Schedule your content multiple platforms at the same time. +
                    We store your content for up to 3 months for you, for free!
                  </div>
                </div>
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span className="duration-100">
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content">
                    <h3 className="inline">Unlimited Connections</h3>
                  </span>
                </button>
                <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                  <div className="pb-5 leading-relaxed">
                    Connect as many of your social accounts to post bridge as
                    you d like. Got 20 TikTok accounts, 30 Instagram accounts, a
                    bajillion other accounts? Bring em over red rover.
                  </div>
                </div>
              </li>

              <li>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span className="duration-100">
                    <GoCheckCircle className="size-8" />
                  </span>
                  <span className="flex-1 text-base-content">
                    <h3 className="inline">Connect with your audience</h3>
                  </span>
                </button>
                <div className="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                  <div className="pb-5 leading-relaxed">
                    Engage with your audience using the post bridge dashboard!
                    Each of your posts has its own comments, likes, and shares
                    in one place.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheThirdSection;
