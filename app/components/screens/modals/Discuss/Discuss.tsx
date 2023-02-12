import { closeSvg } from "@/assets/images/modals";
import { DiscussForm } from "@/components/forms/DiscussForm";
import Image from "next/image";
import { FC } from "react";

import styles from "./Discuss.module.scss";

interface IPopup {
  setOpenPopup: (state: boolean) => void;
}

const Discuss: FC<IPopup> = ({ setOpenPopup }) => {
  return (
    <div className={styles.discuss}>
      <div className={styles.content}>
        <Image
          onClick={() => {
            setOpenPopup(false);
          }}
          className={styles.closeBtn}
          src={closeSvg}
          alt="закрыть"
        />
        <h2>Давайте обсудим ваш проект!</h2>
        <DiscussForm />
      </div>
    </div>
  );
};

export default Discuss;
