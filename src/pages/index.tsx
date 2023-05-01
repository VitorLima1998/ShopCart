import Header from "@/components/Header";
import styles from "../styles/styles.module.scss";
import Footer from "@/components/Footer";
import Account from "@/components/Main/SectionAccount";
const ShopCart = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          <section className={styles.account}>
            <Account />
          </section>
          <section className={styles.summary}>Misael</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default ShopCart;
