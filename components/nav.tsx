import Link from 'next/link'

export function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/resources">Resources</Link>
      </li>
    </ul>
  )
}