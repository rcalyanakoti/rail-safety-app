import styles from "./page.module.css";
import {Nav} from "@/components/nav";

export default function Stops() {
    return(
        <main className={styles.main}>
            <Nav></Nav>
            <div className={styles.center}>
                <h1>NJTransit Stops</h1>
            </div>
        </main>
    )
}