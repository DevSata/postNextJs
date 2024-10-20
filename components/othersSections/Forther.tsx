import { LuRedo } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { GoCheckCircle } from "react-icons/go";
import { FaClock } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const TheForthSection = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-24 md:py-24 bg-slate-900">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-6xl md:text-6xl tracking-tight">
          Scroll less <br /> and{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-300">
            do more
          </span>
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10">
            {/* //----------------// */}

            <div className="bg-green-700 text-primary-content rounded-3xl flex flex-col gap-6 w-full h-[32rem] lg:h-[32rem] w-[24rem] pt-6 overflow-hidden group">
              <div className="px-4 space-y-2 ">
                <h3 className="font-semibold sm:text-xl text-4xl tracking-tight">
                  Less screen time, more views 📈
                </h3>
                <p className="opacity-80">
                  Upload once, post everywhere. Avoid endless scrolling while
                  maximizing your content s reach.
                </p>
              </div>
              <div className="overflow-hidden h-full flex items-stretch bg-green-100 rounded-3xl">
                <div className="w-full bg-base-200 rounded-t-box h-full p-6 relative">
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <IoMdCloudUpload className="h-16 w-16 text-primary text-green-700  mb-4" />

                    <p className="text-lg font-semibold mb-2 text-black">
                      Upload to post bridge
                    </p>
                    <button className="btn btn-primary text-white rounded-full bg-green-700  px-6 py-1.5">
                      Select File
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*  //---------------//- */}
            <div className="bg-slate-700 md:col-span-2 bg-base-300 text-base-content rounded-3xl flex flex-col gap-6 w-full h-[32rem] lg:h-[32rem] pt-6 overflow-hidden group">
              <div className="px-6 space-y-2">
                <h3 className="font-bold text-xl text-white lg:text-3xl tracking-tight">
                  Cure your chaotic mind
                </h3>
                <p className="opacity-80">
                  Take the mental work out of posting to all platforms &
                  avoiding distractions, use post bridge and rest easy.
                </p>
              </div>
              <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
                <div className="bg-slate-400 p-4 rounded-3xl">
                  <h3 className="font-semibold mb-2 text-black">
                    Scheduled Posts
                  </h3>
                  <div className="grid grid-cols-2 gap-4 ">
                    {/* First Post */}
                    <div className=" shadow-md overflow-hidden flex items-stretch h-[10rem] bg-green-100 rounded-3xl">
                      <div className="card bg-base-800 rounded-box">
                        <div className="card-body p-4">
                          <div className="flex grid grid-cols-2 gap-10  mb-2">
                            <h3 className="card-title text-sm flex items-center text-black ">
                              <FaClock className="mr-1 text-black" />
                              <h3 className="font-semibold">Tomorrow</h3>
                            </h3>
                            <div className="text-sm flex items-center">
                              <FaClock className="mr-1 text-black" />
                              <h2 className="text-black">9:00 AM</h2>
                            </div>
                          </div>
                          <p className="text-sm mb-4 text-black">
                            Easy 5-min Workout
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2 pt-3">
                              <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                                <FaTiktok />
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                                <FaTiktok className="rounded-full" />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Post */}
                    <div className=" shadow-md overflow-hidden flex items-stretch h-[10rem] bg-green-100 rounded-3xl">
                      <div className="card-body p-4">
                        <div className="flex grid grid-cols-2 gap-10 mb-2">
                          <h3 className="card-title text-sm flex items-center text-black">
                            <FaClock className="mr-1 " />{" "}
                            <h3 className="font-semibold">Friday</h3>
                          </h3>
                          <div className="text-sm flex items-center text-black">
                            <FaClock className="mr-1" /> <h2>2:00 PM</h2>
                          </div>
                        </div>
                        <p className="text-sm mb-4 text-black">
                          Cooking Hacks #23
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2 pt-3">
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-400 p-4 rounded-3xl">
                  <h3 className="font-semibold mb-2 text-black">Live Posts</h3>
                  <div className="grid grid-cols-2 gap-4 ">
                    {/* First Post */}
                    <div className=" shadow-md overflow-hidden flex items-stretch h-[10rem] bg-green-100 rounded-3xl">
                      <div className="card bg-base-800 rounded-box">
                        <div className="card-body p-4">
                          <div className="flex grid grid-cols-2 gap-10  mb-2">
                            <h3 className="card-title text-sm flex items-center text-black ">
                              <FaClock className="mr-1 text-black" />
                              <h3 className="font-semibold">2h ago</h3>
                            </h3>
                            <div className="text-sm flex items-center">
                              <div className="btn text-xs bg-green-700 px-3 py-1.5 rounded-full text-white ">
                                View Post
                              </div>
                            </div>
                          </div>
                          <p className="text-sm mb-4 text-black">
                            Productivity Tips you need to know
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2 pt-3">
                              <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                                <FaTiktok />
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                                <FaTiktok className="rounded-full" />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Post */}
                    <div className=" shadow-md overflow-hidden flex items-stretch h-[10rem] bg-green-100 rounded-3xl">
                      <div className="card-body p-4">
                        <div className="flex grid grid-cols-2 gap-10 mb-2">
                          <h3 className="card-title text-sm flex items-center text-black">
                            <FaClock className="mr-1 " />{" "}
                            <h3 className="font-semibold">Friday</h3>
                          </h3>
                          <div className="btn text-xs bg-green-700 px-3 py-1.5 rounded-full text-white ">
                            View Post
                          </div>
                        </div>
                        <p className="text-sm mb-4 text-black">
                          The Iphone 16... sucks...
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2 pt-3">
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center shadow-lg">
                              <FaTiktok />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheForthSection;
