import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Account = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
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

          <Button variant="link" className={styles.linkButton}>
            Register for account
          </Button>
          <Button variant="primary" size="lg" className={styles.formButton}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};
export default Account;
