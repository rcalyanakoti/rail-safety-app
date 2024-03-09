import styles from "./page.module.css";
import {Nav} from "@/components/nav";

export default function Connect() {
    return(
        <main className={styles.main}>
            <Nav></Nav>
            <div className={styles.center}>
                <h1>Connect With Others</h1>
            </div>
        </main>
    )
}