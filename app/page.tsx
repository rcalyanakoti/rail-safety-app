import Image from "next/image";
import styles from "./page.module.css";
import { Head } from "next/document";
import {Nav} from "@/components/nav";

export default function Home() {
  return (
    <main className={styles.main}>
  <Nav></Nav>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      <div>
      {/* </div><div className={styles.center}> */}
        <h1 className = {styles.center}> Welcome to </h1>
        <h1 className= {styles.center}> Railway Reliance!</h1>
        <p className= {styles.center}>We aim to create a safe space on public transportation.</p>
        <Image className = {styles.center}
          className={styles.logo}
          //src="/next.svg"
          src = "/train.jpg"
          //alt="Next.js Logo"
          alt = "Train image"
          width={320}
          height={300}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Make a Post <span>-&gt;</span>
          </h2>
          <p>Share your experiences with other communters.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            NJTransit Stops<span>-&gt;</span>
          </h2>
          <p>See all train stops along NJTransit routes.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Connect With Others <span>-&gt;</span>
          </h2>
          <p>Ask for help or provide advice with others.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resources <span>-&gt;</span>
          </h2>
          <p>
            If you're struggling, access these helpful pages and contacts.
          </p>
        </a>
      </div>
    </main>
  );
}