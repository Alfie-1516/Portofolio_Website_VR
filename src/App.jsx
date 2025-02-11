import { useState } from "react";
import { PiTerminalBold } from "react-icons/pi";
import { IoIosCloudDownload } from "react-icons/io";
function App() {
  return (
    <main className="bg-[#101010] h-screen w-screen">
      <div className=" h-full w-full flex ">
        <aside className="h-full w-2/5  bg-[url('images/HeadShot.png')] bg-contain bg-center bg-no-repeat"></aside>
        <section className="h-full w-3/5  flex justify-center items-center">
          <article className="w-4/5 h-1/2 py-7 flex flex-col justify-between">
            <div className="flex items-start">
              <PiTerminalBold size={65} className="mr-5" color="#375793" />
              <div>
                <p className="text-[48px] font-inter text-[#375793]">
                  I'M ALFRED OKOROCHA
                </p>
                <p className="text-[48px] font-inter text-white">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-[32px]/9 text-white">
              From web development to software engineering, from data analysis
              to problem decoding and programming, I am a dedicated technophile
              who is persistent on self-improvement and highly efficient with,
              or without, pressure.
            </p>
            <button className="h-16 w-64  border border-[#375793] rounded-full flex items-center justify-between pl-10">
              <p className=" text-white text-[22px] font-semibold ">
                Download CV
              </p>
              <div className="h-16 w-16  bg-[#375793] rounded-full flex justify-center items-center">
                <IoIosCloudDownload size={35} color="white" />
              </div>
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

export default App;
