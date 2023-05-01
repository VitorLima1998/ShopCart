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
          <a href="#" className={text.navSizeOption}>
            Home
          </a>
          <a href="#" className={text.navSizeOption}>
            Shop
          </a>
          <a href="#" className={text.navSizeOption}>
            Contact
          </a>
          <a href="#" className={text.navSizeOption}>
            Help
          </a>
        </div>
        {/* Profile Header */}
        <div className={styles.profile}>
          <div className={styles.profileBtn}>
            <a href="#" className={text.navSizeOption}>
              Account
            </a>
            <BiCaretDown className={text.navSizeIcon} />
          </div>

          <div className={styles.profileBtn}>
            <BiShoppingBag className={text.navSizeIcon} />
            <a href="#" className={text.navSizeOption}>
              3 items
            </a>
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
