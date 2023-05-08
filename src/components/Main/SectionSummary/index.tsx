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
                    <Button variant="outline-dark" className={text.formButton}>+</Button>
                    <span>1</span>
                    <Button variant="outline-dark" className={text.formButton}>-</Button>
                    </div>
                    <h5>$320.45</h5>
                </div>

                <div className={stylesSummary.form}>
                    <div>
                    <Form>
                        <Form.Label className={styles.labelSize}>Gift Card / Discount code</Form.Label>
                        <Form.Control className={stylesSummary.input} type="text" placeholder="" />
                    </Form>
                        <Button variant="outline-primary" className={text.formButton}>Apply</Button>
                    </div>
                </div>

                
                
                <div className={stylesSummary.tabela}>
                    <div>
                       <span>Sub total</span>
                       <span>$316.55</span> 
                    </div>
                    <div>
                         <span>Tax</span>
                         <span>$3.45</span>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>$320.45</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary;