import { LuRedo } from "react-icons/lu";
const TheSecSection = () => {
  return (
    <section className="bg-slate-900 text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 md:py-32 text-center py-28 ">
        <h2 className="max-w-3xl mx-auto font-extrabold text-5xl md:text-5xl tracking-tight mb-6 md:mb-8 pb-7">
          Your content <i>could have</i> gone VIRAL 📈
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
          ... but you only had time to post it to one platform.
        </p>
        <div className="flex flex-center  md:flex-row justify-center items-center md:items-start gap-6 ">
          <div className="w-full md:w-48 sm:w-10 flex flex-col gap-2 items-center justify-center sm:px-10">
            <span className="text-4xl ">🧑‍💻</span>
            <h3 className="font-bold ">Hours making content</h3>
          </div>

          <LuRedo className="shrink-0 w-18 size-8 fill-neutral-content max-md:-scale-x-100 md:-rotate-90 " />

          <div className="w-full md:w-48 sm:w-10 flex flex-col gap-2 items-center justify-center sm:px-10">
            <span className="text-4xl ">😮‍💨</span>
            <h3 className="font-bold">Post to one platform</h3>
          </div>

          <LuRedo className="shrink-0 w-18 size-8 fill-neutral-content max-md:-scale-x-100 md:-rotate-90" />

          <div className="w-full md:w-48 sm:w-10 flex flex-col gap-2 items-center justify-center sm:px-10">
            <span className="text-4xl">😔</span>
            <h3 className="font-bold">30 views 📉</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSecSection;
