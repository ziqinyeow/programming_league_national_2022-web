import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "../layouts/Layout";

const variant = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programming League</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout bg="bg1">
        <div className="grid w-full gap-4 lg:grid-cols-2">
          <motion.div
            variants={variant}
            initial="before"
            animate="after"
            transition={{ duration: 1 }}
          >
            <div>
              <div className="relative mb-4">
                <h6 className="text-4xl md:text-[40px] tracking-widest font-extralight text-[white] z-10 absolute -top-[3px] -left-[3px]">
                  UNIVERSITI MALAYA
                </h6>
                <h6 className="text-4xl md:text-[40px] tracking-widest font-extralight text-[#FF00F5] absolute -top-[1px] -left-[1px]">
                  UNIVERSITI MALAYA
                </h6>
                <h6 className="text-4xl md:text-[40px] tracking-widest font-extralight text-[#00C2FF]">
                  UNIVERSITI MALAYA
                </h6>
              </div>
            </div>
            <div className="mb-10 space-y-3">
              <div className="relative">
                <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                  PROGRAMMING
                </h1>
                <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                  PROGRAMMING
                </h1>
                <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                  PROGRAMMING
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    LEAGUE
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    LEAGUE
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    LEAGUE
                  </h1>
                </div>
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    20
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    20
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    20
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    NATIONAL
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    NATIONAL
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    NATIONAL
                  </h1>
                </div>
                <div className="relative">
                  <h1 className="tracking-wider font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    22
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    22
                  </h1>
                  <h1 className="tracking-wider font-surrend text-[#00C2FF]">
                    22
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <div className="relative">
                <div className="absolute -top-[3px] left-0 bg-[#FCEF41] btn_1 z-10 px-11 py-2 cursor-pointer">
                  <h3 className="font-bold text-black">LETS GO!</h3>
                </div>
                <div className="absolute -top-2 -left-1 bg-[#FF00F5] btn_1 px-11 py-2 cursor-pointer">
                  <h3 className="font-bold text-black">LETS GO!</h3>
                </div>
                <div className="bg-[#00C2FF] px-11 py-2 btn_1 cursor-pointer">
                  <h3 className="font-bold text-black">LETS GO!</h3>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center"
            variants={variant}
            initial="before"
            animate="after"
            transition={{ duration: 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/PLN-Glitch 1.gif"
              alt="logo"
              className="object-contain w-full h-[300px] lg:h-[400px]"
            />
          </motion.div>
        </div>
      </Layout>
      <Layout bg="bg2_gradient">
        <div className="w-full h-[100vh] pt-80">
          <div className="grid w-full gap-4 lg:grid-cols-2">
            <div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/image 3.png" alt="3" />
                <div className="relative my-10">
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                    ABOUT US
                  </h1>
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                    ABOUT US
                  </h1>
                  <h1 className="2xl:text-6xl tracking-[0.4em] font-surrend text-[#00C2FF]">
                    ABOUT US
                  </h1>
                </div>
              </div>
              <div>
                <p className="mb-10 font-medium tracking-widest text-justify">
                  Programming League National is an annual competitive
                  programming contest organised by the Faculty of Computer
                  Science and Information Technology, University of Malaya where
                  teams of 3 compete to solve algorithmic problems.
                </p>
                <p className="mb-10 font-medium tracking-widest text-justify">
                  For the past few years, it had been a university-wide
                  competition. In 2021, we are ramping it up by assembling
                  students from all universities across Malaysia to compete
                  among the best in the field!
                </p>
                <p className="mb-10 font-medium tracking-widest text-justify">
                  We aim to host the most colossal, eminent and pioneering
                  programming contest of all time and ultimately, uphold
                  Malaysia programming standards.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/PLN-Glitch 1.gif"
                alt="logo"
                className="object-contain w-full h-[400px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] pt-52">
          <div className="w-full">
            <div className="flex justify-center mt-10 mb-32">
              <div className="relative">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute -top-10"
                  src="/images/image 3.png"
                  alt="3"
                />
                <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                  SPONSORS
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                  SPONSORS
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
                  SPONSORS
                </h1>
              </div>
            </div>
          </div>
          <div className="min-h-[70vh] flex items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path
                fill="white"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"
              ></path>
            </svg>
            <h2 className="mt-10 font-medium tracking-widest text-justify">
              Interested to be a sponsor?
            </h2>
            <h2 className="mb-10 font-medium tracking-widest text-justify">
              sponsor@vhackusm.com
            </h2>
          </div>
        </div>
      </Layout>
    </div>
  );
}
