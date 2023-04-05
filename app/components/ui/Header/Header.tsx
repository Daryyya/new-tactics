import { logo, phoneSvg } from "@/assets/images/home";
import Discuss from "@/components/screens/modals/Discuss/Discuss";
import { FormContext } from "@/utils/FormCollector/FormContext";
import { menuData } from "@/utils/menu.data";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    if (isOpenMenu && window.innerWidth < 992) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpenMenu]);

  const { name, phone } = useContext(FormContext);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerBody}>
            <Link href="/" className={styles.logo}>
              <Image src={logo} alt="program tactics" />
            </Link>
            <nav className={isOpenMenu ? `${styles.active}` : ""}>
              <ul className={styles.menuList}>
                {menuData.map((item) => (
                  <li key={item.href}>
                    <Link
                      scroll={false}
                      onClick={() => setIsOpenMenu(false)}
                      href={item.href}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.actions}>
              <Link className={styles.phone} href="tel:+79166974227">
                <Image src={phoneSvg} alt="phone" />
                <span>+7 (916) 697 42-27</span>
              </Link>
              <button
                disabled={name || phone ? true : false}
                onClick={() => setIsOpenPopup(true)}
                className={styles.button}
              >
                Обсудить проект
              </button>
              <div
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className={isOpenMenu ? "menuBurger active" : "menuBurger"}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenPopup ? <Discuss setOpenPopup={setIsOpenPopup} /> : null}
    </>
  );
};

export default Header;
