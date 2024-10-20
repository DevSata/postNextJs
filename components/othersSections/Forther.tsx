import { LuRedo } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { GoCheckCircle } from "react-icons/go";

const TheForthSection = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-32 md:py-32 bg-slate-900">
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
            <div className="md:col-span-2 bg-base-300 text-base-content rounded-3xl flex flex-col gap-6 w-full h-[28rem] lg:h-[32rem] pt-6 overflow-hidden group">
              <div className="px-6 space-y-2">
                <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                  Cure your chaotic mind
                </h3>
                <p className="opacity-80">
                  Take the mental work out of posting to all platforms &
                  avoiding distractions, use post bridge and rest easy.
                </p>
              </div>
              <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
                <div className="bg-base-100 p-4 rounded-box">
                  <h3 className="font-semibold mb-2">Scheduled Posts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card bg-base-150">
                      <div className="card-body p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="card-title text-sm">
                            <GoCheckCircle className="mr-2" />
                            Tomorrow
                          </h3>
                          <div className="text-sm">
                            <GoCheckCircle className="inline mr-1" />
                            9:00 AM
                          </div>
                        </div>
                        <p className="text-sm mb-4">Easy 5-min Workout</p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center">
                              <GoCheckCircle className="inline mr-1" />
                            </div>
                            <div className="text-sm">60 minutes</div>
                          </div>
                          <div className="flex">
                            <button className="btn btn-error btn-sm">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-base-150">
                      <div className="card-body p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="card-title text-sm">
                            <GoCheckCircle className="mr-2" />
                            Later
                          </h3>
                          <div className="text-sm">
                            <GoCheckCircle className="inline mr-1" />
                            12:00 PM
                          </div>
                        </div>
                        <p className="text-sm mb-4">Evening Meditation</p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-base-300 flex items-center justify-center">
                              <GoCheckCircle />
                            </div>
                            <div className="text-sm">45 minutes</div>
                          </div>
                          <div className="flex">
                            <button className="btn btn-error btn-sm">
                              Cancel
                            </button>
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
