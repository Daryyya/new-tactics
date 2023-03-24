import React, { FC } from "react";
import { motion } from "framer-motion";
import { checkSvg } from "@/assets/images/home";
import Image from "next/image";

const SuccessScreen: FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
    >
      <Image src={checkSvg} alt="Успешно" />
      Заявка успешно отправлена
    </motion.div>
  );
};

export default SuccessScreen;
