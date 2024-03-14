"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimationProps {
  active: boolean;
  onClick: React.MouseEventHandler;
}

const Animation = ({ active, onClick }: AnimationProps) => {
  const sizeVariants = {
    big: { width: "160px", height: "160px" },
    small: { width: "80px", height: "80px" },
  };

  const positionVariants = {
    initial: {
      bottom: "50%",
      right: "50%",
      translateX: "50%",
      translateY: "50%",
    },
    active: { bottom: "15%", right: "15%", transition: { duration: 0.5 } },
    inActive: {
      bottom: "50%",
      right: "50%",
      translateX: "50%",
      translateY: "50%",
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      className="absolute"
      variants={positionVariants}
      initial={"initial"}
      animate={active ? "active" : "inActive"}
    >
      <motion.div
        onClick={onClick}
        variants={sizeVariants}
        initial={"big"}
        animate={active ? "small" : "big"}
        className={`border-8 border-black rounded-full overflow-hidden`}
      >
        <motion.svg
          animate={{
            rotate: 360,
            transition: { duration: 2, repeat: Infinity, ease: "linear" },
          }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 256 256"
          enableBackground="new 0 0 256 256"
        >
          <metadata>
            {" "}
            Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
          </metadata>
          <g>
            <g>
              <g>
                <path
                  fill="#000000"
                  d="M117.3,10.3C70.5,14.8,30.8,46.3,16,90.5c-4.4,13.4-6,23.2-6,37.6c0,19,3.7,35.1,11.8,51.8c17.3,35.4,50.1,59.3,89.8,65.4c8.1,1.2,24.5,1.2,32.9-0.1c48.1-7.1,87-42.3,98.3-89.1c2.5-10.5,3.1-15.8,3.1-28.1c0-12.3-0.6-17.6-3.1-28c-8.7-36.1-34.4-66.3-68.6-80.8C156.5,11.7,136.1,8.5,117.3,10.3z M162.6,21.2c34,11,61.1,37.9,72.4,71.9c3.6,10.8,5.2,19.7,5.5,31.2c0.6,19.3-2.9,35.8-11.1,52.5c-19.1,39-57.8,63.5-100.5,63.5c-8.9,0-13.4-0.8-20.1-3.4C91.2,230,78.5,215,74.6,196.4c-1.4-6.4-1.2-17.1,0.3-23.2c2.9-11.7,7.8-20.3,16-28.2c10.2-9.6,20.4-13.9,36.6-15.3c10.5-0.9,13.6-1.4,19.1-3.1c18.8-5.9,33.9-21.8,38.9-40.9c1.5-5.9,2.1-17.4,1.2-23.4c-2.7-17.1-12.8-32.4-27.3-41.2c-1.7-1-2.9-1.8-2.7-1.8C156.9,19.5,159.5,20.3,162.6,21.2z M132.7,51.9c6.2,1.6,10.6,5.2,13.2,10.7c7.7,16.5-9.4,33.6-25.8,25.9c-11.9-5.6-15-20.8-6.3-30.4c3-3.3,5.7-5,9.6-6.1C127,50.9,129.1,50.9,132.7,51.9z"
                />
                <path
                  fill="#000000"
                  d="M122.9,165.1c-10.3,2.8-17.3,13.6-15.4,23.7c0.9,4.6,2.8,8.3,5.9,11.4c8.4,8.3,21.3,8.4,29.6,0.1c8.3-8.3,8.3-21.4,0.1-29.6C137.6,165.2,130.2,163.1,122.9,165.1z"
                />
              </g>
            </g>
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Animation;
