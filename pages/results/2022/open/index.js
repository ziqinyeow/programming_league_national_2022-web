import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../../layouts/Layout";

const variant = {
  normal: {
    opacity: 0,
  },
  after: {
    left: "auto",
    top: "auto",
    opacity: 1,
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Programming League National 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/PLN-Glitch 1.png" />
      </Head>
      <Layout bg="bg4">
        <div className="flex justify-center w-full">
          <motion.div
            variants={variant}
            animate="after"
            transition={{ duration: 0.5 }}
            initial="normal"
            className="relative"
          >
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/image 3.png" alt="3" />
            <div className="relative my-10">
              <h1 className="tracking-[0.4em] font-surrend text-[#FCEF41] z-10 absolute -top-[5px] -left-[5px]">
                RESULTS
              </h1>
              <h1 className="tracking-[0.4em] font-surrend text-[#FF00F5] absolute -top-[2px] -left-[2px]">
                RESULTS
              </h1>
              <h1 className="tracking-[0.4em] font-surrend text-[#00C2FF]">
                RESULTS
              </h1>
            </div>
          </motion.div>
        </div>
        {/* <div className="flex justify-center w-full">
         
          <img
            className="h-[70vh]"
            src="/images/output-onlinegiftools-2.gif"
            alt="notfound"
          />
        </div> */}
        <div className="min-h-[60vh] w-full flex flex-col justify-around">
          <Link href="/results/2022/open/prelim">
            <a>
              <div className="border-4 border-[#00FFC2] tracking-widest py-6 rounded-lg flex justify-center">
                <h1 className="font-surrend text-[#00FFC2] tracking-widest text-center">
                  Preliminary Round
                </h1>
              </div>
            </a>
          </Link>
          <Link href="/results/2022/open/final">
            <a>
              <div className="border-4 border-[#00FFC2] tracking-widest py-6 rounded-lg flex justify-center">
                <h1 className="font-surrend text-[#00FFC2] tracking-widest text-center">
                  Final Round
                </h1>
              </div>
            </a>
          </Link>
          {/* <div className="border-4 border-[#00FFC2] tracking-widest py-6 rounded-lg flex justify-center">
            <h1 className="font-surrend text-[#00FFC2] tracking-widest">
              <Link href="/results/open">
                <a>Final Round</a>
              </Link>
            </h1>
          </div> */}
        </div>
      </Layout>
    </div>
  );
}
