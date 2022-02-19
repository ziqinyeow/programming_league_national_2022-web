/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const variant = {
  normal: {
    opacity: 0.0,
  },
  down: {
    y: -300,
    opacity: 0.0,
  },
  after: {
    top: "auto",
    left: "auto",
    opacity: 1.0,
    y: 0,
  },
};

export default function Home() {
  let animationType = "normal";

  return (
    <div>
      <Head>
        <title>Programming League</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/PLN-Glitch 1.png" />
      </Head>
      <Layout bg="bg2_gradient">
        <div className="w-full h-full">
          <div>
            <div className="flex justify-center my-10">
              <motion.div
                className="relative"
                variants={variant}
                initial="down"
                animate="after"
                transition={{ duration: 0.5 }}
              >
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute -top-10"
                  src="/images/image 3.png"
                  alt="3"
                />
                <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                  REGISTRATION
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                  REGISTRATION
                </h1>
                <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
                  REGISTRATION
                </h1>
              </motion.div>
            </div>
            <div className="min-h-[60vh] w-full flex flex-col justify-around">
              <div className="border-4 border-[#00FFC2] tracking-widest py-6 rounded-lg flex justify-center">
                <h1 className="font-surrend text-[#00FFC2] tracking-widest">
                  WORKSHOP
                </h1>
              </div>
              <div className="border-4 border-[#00FFC2] tracking-widest py-6 rounded-lg flex justify-center">
                <h1 className="font-surrend text-[#00FFC2] tracking-widest">
                  COMPETITION
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}