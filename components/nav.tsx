import Link from 'next/link'
import styles from "./page.module.css"

export function Nav() {
  return (
    <ul className={styles.navMenu}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/post">Make a Post</Link>
      </li>
      <li>
        <Link href="/stops">NJTransit Stops</Link>
      </li>
      <li>
        <Link href="/connect">Connect With Other</Link>
      </li>
      <li>
        <Link href="/resources">Resources</Link>
      </li>
    </ul>
  )
}