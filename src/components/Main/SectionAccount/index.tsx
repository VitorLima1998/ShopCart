import styles from "./styles.module.scss";
import text from "../../../styles/text.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillCheckCircle } from "react-icons/ai";

const Account = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.info}>
            <span className={text.descriptionSize}>Account </span>

            <div className={styles.line}></div>
            <AiFillCheckCircle className={styles.icon} />
            <div className={styles.line}></div>

            <span className={text.descriptionSize}>Shipping</span>

            <div className={styles.line}></div>
            <AiFillCheckCircle className={styles.icon} />
            <div className={styles.line}></div>

            <span className={text.descriptionSize}>Payment</span>
          </div>
          <h5>Account Details</h5>
        </div>

        <div className={styles.form}>
          <Form>
            <Form.Label className={styles.labelSize}>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@myemail.com" />
          </Form>
          <Form>
            <Form.Label className={styles.labelSize}>Password</Form.Label>
            <Form.Control type="password" />
          </Form>
        </div>

        <div className={styles.button}>
          <Button variant="link" className={text.linkButton}>
            Register for account
          </Button>
          <Button variant="primary" size="lg" className={text.formButton}>
            Login
          </Button>
        </div>

        <div className={styles.buttonBottom}>
          <Button variant="link" className={text.linkButton}>
            Cancel Order
          </Button>
          <Button variant="primary" size="lg" className={text.formButton}>
            Shipping Details
          </Button>
        </div>
      </div>
    </>
  );
};
export default Account;
