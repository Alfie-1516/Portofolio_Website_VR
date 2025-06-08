// Width --1535
import { PiTerminalBold } from "react-icons/pi";
import { IoIosCloudDownload } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import resume from "./assets/Resume.png";
import './index.css';
function App() {
  return (
    <main className="bg-[#101010] h-screen ">
      <div className=" h-full w-full flex ">
        <aside className="h-full w-2/5  bg-[url('images/Headshot.png')] bg-contain bg-center bg-no-repeat"></aside>
        <section className="h-full w-3/5  flex justify-center items-center">
          <article className="w-4/5 h-3/5 py-7 flex flex-col justify-between">
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
            <p className="short_text text-[32px]/9 text-white">
              From web development to software engineering, from data analysis
              to problem decoding and programming, I am a dedicated technophile
              who is persistent on self-improvement and highly efficient with,
              or without, pressure.
            </p>
            <button>
              <a
                className="h-16 w-64  border border-[#375793] rounded-full flex items-center justify-between pl-10"
                href={resume}
                download="Alfred_Okorocha_Resume.pdf"
              >
                <p className=" text-white text-[22px] font-semibold ">
                  Download CV
                </p>
                <div className="h-16 w-16  bg-[#375793] rounded-full flex justify-center items-center">
                  <IoIosCloudDownload size={35} color="white" />
                </div>
              </a>
            </button>

            <div className="socials w-36 h-10  flex justify-between items-center">
              <a href="https://www.linkedin.com/in/alfred-okorocha/">
                <IoLogoLinkedin size={35} color="#375793" />
              </a>
              <a href="https://github.com/Alfie-1516">
                <IoLogoGithub size={35} color="#375793" />
              </a>
              <a href="https://x.com/OA_Games_">
                <IoLogoTwitter size={35} color="#375793" />
              </a>
            </div>
          </article>
        </section>
      </div>
      <div className=" h-1/2 w-full  flex flex-col bg-[#101010] justify-end items-center pt-10 ">
        <h1 className="flex flex-row items-center text-[48px] font-inter justify-center">
          <span className="text-[#ffffff]">ABOUT&nbsp;</span>
          <span className="text-[#375793]">ME</span>
        </h1>
        <div className="about_me flex w-full h-full pl-20 items-center justify-end">
          {/* Personal Info */}
          <div className="w-1/2 space-y-10">
            <h2 className="text-[24px] font-inter text-[#ffffff]">PERSONAL INFO</h2>
            {/* About Info */}
            <div className="flex flex-row space-x-10">
              <div className="flex flex-col space-y-10">
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal ">
                    First Name:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    Alfred
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal ">
                    Age:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    22 Years
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal">
                    Phone:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    +1 (337)-508-9395
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-10">
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal ">
                    Last Name:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    Okorocha
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal ">
                    Email:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    Okorochaalfred@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <h3 className="text-[20px] text-[#A9A8A8] font-normal">
                    Languages:&nbsp;
                  </h3>
                  <p className="text-[20px] text-[#ffffff] font-normal">
                    English, German, Yoruba
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="experience w-1/2 flex gap-10">
            <div className="experience_sub w-96 h-52  border border-[#5B5B5B] rounded-[10px] pl-5">
              <p className="text-[48px] font-inter text-[#375793] text">5+</p>
              <span className="flex flex-row items-start justify-start">
                <p className="text-[24px] font-normal text-[#ffffff] text">
                  _____ &nbsp;
                </p>
                <p className="text-[24px] font-normal text-[#ffffff] text">
                  Years of <br /> Experience
                </p>
              </span>
            </div>
            <div className="experience_sub w-96 h-52  border border-[#5B5B5B] rounded-[10px] pl-5">
              <p className="text-[48px] font-inter text-[#375793] text">10+</p>
              <span className="flex flex-row items-start justify-start">
                <p className="text-[24px] font-normal text-[#ffffff] text">
                  _____ &nbsp;
                </p>
                <p className="text-[24px] font-normal text-[#ffffff] text">
                  Completed <br /> Projects
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
