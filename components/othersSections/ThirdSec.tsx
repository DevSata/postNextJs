import { LuRedo } from "react-icons/lu";
const TheThirdSection = () => {
  return (
    <section
      class="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100"
      id="features"
    >
      <div class="px-8">
        <h2 class="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          One place to maximize your social reach
          <span class="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            effortlessly.
          </span>
        </h2>

        <div class="flex flex-col md:flex-row gap-12 md:gap-24">
          <div class="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul class="w-full">
              <li>
                <button
                  class="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="true"
                >
                  <span class="duration-100 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="flex-1 text-base-content text-primary font-semibold">
                    <h3 class="inline">Instant posting</h3>
                  </span>
                </button>
                <div class="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden opacity-1">
                  <div class="pb-5 leading-relaxed">
                    Upload your content to post bridge and post it instantly to
                    any of your connected social media accounts; including
                    posting to all platforms at the same time.
                  </div>
                </div>
              </li>

              <li>
                <button
                  class="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span class="duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="flex-1 text-base-content">
                    <h3 class="inline">Post Scheduling</h3>
                  </span>
                </button>
                <div
                  class="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden "
                  style=""
                >
                  <div class="pb-5 leading-relaxed">
                    Schedule your content multiple platforms at the same time. +
                    We store your content for up to 3 months for you, for free!
                  </div>
                </div>
              </li>

              <li>
                <button
                  class="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span class="duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="flex-1 text-base-content">
                    <h3 class="inline">Unlimited Connections</h3>
                  </span>
                </button>
                <div class="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                  <div class="pb-5 leading-relaxed">
                    Connect as many of your social accounts to post bridge as
                    you d like. Got 20 TikTok accounts, 30 Instagram accounts, a
                    bajillion other accounts? Bring em over red rover.
                  </div>
                </div>
              </li>

              <li>
                <button
                  class="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
                  aria-expanded="false"
                >
                  <span class="duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21h-11A2.25 2.25 0 0 1 2.5 18.75V7.5M12 12h.008v.008H12v-.008Zm0 2h.008v.008H12v-.008Zm0 2h.008v.008H12v-.008Zm0-6h.008v.008H12v-.008Zm0-2h.008v.008H12v-.008Z"
                      ></path>
                    </svg>
                  </span>
                  <span class="flex-1 text-base-content">
                    <h3 class="inline">Connect with your audience</h3>
                  </span>
                </button>
                <div class="transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden">
                  <div class="pb-5 leading-relaxed">
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
