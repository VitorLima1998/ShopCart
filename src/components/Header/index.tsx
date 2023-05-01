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
          <a href="#" className={text.navOption}>
            Shop
          </a>
          <a href="#" className={text.navOption}>
            Contact
          </a>
          <a href="#" className={text.navOption}>
            Help
          </a>
        </div>
        {/* Profile Header */}
        <div className={styles.profile}>
          <div className={styles.profileBtn}>
            <a href="#" className={text.navOption}>
              Account
            </a>
            <BiCaretDown className={text.navIcon} />
          </div>

          <div className={styles.profileBtn}>
            <BiShoppingBag className={text.navIcon} />
            <a href="#" className={text.navOption}>
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
