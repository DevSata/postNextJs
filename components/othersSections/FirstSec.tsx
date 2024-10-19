const TheFirstSection = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 lg:px-52 md:px-32 sm:px-16">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-center text-4xl lg:text-3xl lg:text-5xl tracking-tight md:-mb-4">
          Grow your social reach the easy way
        </h1>
        <p className="text-lg opacity-80 leading-relaxed ">
          Post your content to multiple social media platforms at once. Save
          time, avoid brainrot, and expand your reach.
        </p>
        <div className="flex flex-col items-center ">
          <div className="btn btn-primary btn-wide text-base bg-red-500 px-6 py-1.5 rounded-full text-white ">
            Try it for free
          </div>
          <span className="text-xs mt-2 text-base-content/60">
            No credit card required
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
          <div className="flex flex-col justify-center items-center md:items-start gap-1">
            <div className="rating flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <div className="text-base text-base-content/80">
              <span className="font-semibold text-base-content">2563</span>{" "}
              posts posted (effortlessly)
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full bg-zinc-900 rounded-lg md:px-32 sm:px-10">
        <div className="bg-base-200 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto relative overflow-hidden">
          <h3 className="text-4xl font-bold mb-2 text-center">
            Watch views grow
          </h3>
          <div className="h-64 flex items-center justify-center overflow-hidden">
            <div className="transition-all duration-500 ease-in-out -translate-x-full"></div>
            <div className="transition-all duration-500 ease-in-out -translate-x-full"></div>
            <div className="transition-all duration-500 ease-in-out translate-x-0">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="text-6xl font-bold mb-4 animate-pulse text-green-500">
                    10,000,000+
                  </div>
                </div>
                <div className="text-2xl">Potential views await...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFirstSection;
