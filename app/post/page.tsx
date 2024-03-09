import styles from "./page.module.css";
import {Nav} from "@/components/nav";

export default function Post() {
    return(
        <main className={styles.main}>
            <Nav></Nav>
            <div className={styles.center}>
                <h1>Make a Post</h1>
            </div>
        </main>
    )
}