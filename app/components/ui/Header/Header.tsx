import { logo, phoneSvg } from "@/assets/images/home";
import { menuData } from "@/utils/menu.data";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.scss";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerBody}>
          <div className={styles.logo}>
            <Image src={logo} alt="program tactics" />
          </div>
          <nav>
            <ul className={styles.menuList}>
              {menuData.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.actions}>
            <Link className={styles.phone} href="tel:+79166974227">
              <Image src={phoneSvg} alt="phone" />
              <span>+7 (916) 697 42-27</span>
            </Link>
            <Link className={styles.button} href="/#">
              Обсудить проект
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
