import styles from "./page.module.css";
import {Nav} from "@/components/nav";

export default function Resources() {
    return(
        <main className={styles.main}>
            <Nav></Nav>
            <div className={styles.center}>
                <h1>Resources</h1>
            </div>
        </main>
    )
}