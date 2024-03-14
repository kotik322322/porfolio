import React from "react";
import { easeIn, motion } from "framer-motion";

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
    <div>
      <motion.div
        variants={modalVariants}
        initial={"initial"}
        transition={{ duration: 0.5, ease: easeIn }}
        animate={active ? "active" : "inactive"}
        className="absolute top-0 left-0 right-0 bottom-0  bg-black"
      />

      {active ? <div className=""></div> : ""}
    </div>
  );
};

export default Promo;
