/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import text from "../../styles/text.module.scss";
import { BiCaretDown, BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        {/* Icon header */}
        <div className={styles.image}>
          <img src="/seboozo-corp.png" alt="logo" />
        </div>
        {/* Options nav */}
        <div className={styles.options}>
          <a href="#" className={text.navOption}>
            Home
          </a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </div>
        {/* Profile Header */}
        <div className={styles.profile}>
          <div>
            <a href="#">Account</a>
            <BiCaretDown />
          </div>

          <div>
            <BiShoppingBag />
            <a href="#">3 itens</a>
          </div>

          <div>
            <img src="/luffy.jpeg" alt="" className={styles.iconProfile} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
