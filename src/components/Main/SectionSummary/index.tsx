import styles from ".././SectionAccount/styles.module.scss";
import stylesSummary from "./styles.module.scss"
import text from "../../../styles/text.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillCheckCircle } from "react-icons/ai";

const Summary = () =>{

    return (
        <>
            <div className={styles.content}>
                <div className={stylesSummary.card}>
                    <h5>Order Summary</h5>
                    <img className={stylesSummary.image} src="/fone.webp" alt="" />
                    <div>
                    <h5>Sony wireless headphones</h5>
                    
                    </div>
                    <h5>$320.45</h5>
                </div>
                <div>
                <Form>
                    <Form.Label className={styles.labelSize}>Gift Card / Discount code</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form>
                <Button variant="outline-primary" className={text.formButton}>Apply</Button>
                </div>
                <div className={stylesSummary.tabela}>
                    <div>Sub total</div>
                    <div>Tax</div>
                    <div>Shipping</div>
                    <div>Total</div>
                </div>
            </div>
        </>
    )
}

export default Summary;