import { FC } from "react";
import styles from "./OtherCase.module.scss";
import { motion } from "framer-motion";
import {ICasesData} from '../../../utils/cases.data'

import CasesItem from "./OtherCaseItem/OtherCaseItem";

interface Props {
    data: ICasesData[];
}

const OtherCase: FC<Props> = ({data}) => {
  return (
    <section id="cases" className={styles.cases}>
      <div className="container">
        <div className="line">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 2 }}
          />
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Все кейсы
          </motion.h2>
        </div>
        <div className={styles.casesItems}>
          {data.map((item) => (
            <CasesItem
              key={item.id}
              id={item.id}
              title={item.title}
              results={item.results}
              status={item.status}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherCase;