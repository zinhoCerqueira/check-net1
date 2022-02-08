import Link from  'next/Link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href = '/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/produtos'>
          <a>Produtos</a>
        </Link>
      </li>
      <li>
        <Link href='/sobre'>
          <a>Sobre</a>
        </Link>
      </li>
    </ul>
  )
}