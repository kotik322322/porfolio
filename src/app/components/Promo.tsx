import React from "react";
import { easeIn, motion } from "framer-motion";
import promoImg from "../../../public/promoImg.png";
import Image from "next/image";

interface PromoProps {
  active: boolean;
}

const Promo = ({ active }: PromoProps) => {
  const modalVariants = {
    initial: {
      y: "-100%",
    },
    active: {
      y: 0,
      width: "100vw",
      height: "50vh",
      transition: { delay: 0.5, ease: easeIn },
    },
    inActive: {
      width: "100vw",
      height: 0,
      y: "-100%",
    },
  };
  return (
    <div className="">
      <motion.div
        variants={modalVariants}
        initial={"initial"}
        transition={{ duration: 0.5, ease: easeIn }}
        animate={active ? "active" : "inactive"}
        className="absolute top-0 left-0 right-0 bottom-0  bg-black"
      />

      <motion.div
        initial={{ display: "none" }}
        animate={
          active
            ? { display: "block", transition: { delay: 1, duration: 1 } }
            : { display: "none" }
        }
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 overflow-hidden"
      >
        <motion.div
          animate={
            active
              ? {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, duration: 1 },
                }
              : {
                  opacity: 0,
                  y: 200,
                }
          }
          className="flex flex-col justify-center items-start gap-y-5 pl-8 w-full h-1/2 bg-transparent border-2 border-white border-b-0 "
        >
          <span className="text-5xl text-white font-extrabold">Hi,</span>
          <span className="text-3xl text-white">I&apos;m Kostiantyn Marfin</span>
          <span className="text-base text-[#FCF6F499]">
            I code beautiful website
          </span>
        </motion.div>

        <motion.div
          animate={
            active
              ? {
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, duration: 1 },
                }
              : {
                  opacity: 0,
                  y: -200,
                }
          }
          className="w-full h-1/2 flex items-center justify-center bg-transparent border-2 border-black border-t-0 overflow-hidden"
        >
          <motion.div
            animate={
              active ? { opacity: 1, transition: { delay: 2 } } : { opacity: 0 }
            }
          >
            <Image
              src={promoImg}
              alt="Promo Profile Image"
              className="z-50"
              width={200}
              height={200}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Promo;

