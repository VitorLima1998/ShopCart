import Header from "@/components/Header";
import styles from "../styles/styles.module.scss";
const ShopCart = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          <section className={styles.account}>Vitor</section>
          <section className={styles.summary}>Misael</section>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
export default ShopCart;
