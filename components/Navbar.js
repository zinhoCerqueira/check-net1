import Link from 'next/Link'
import styles from '../styles/Navbar.module.css'
import Button from './Button'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <div className={styles.lista}>
        <li >
          <Link href='/'>
            <a>Promoções</a>
          </Link>
        </li>
        <li>
          <Link href='/produtos'>
            <a>Meu Carrinho</a>
          </Link>
        </li>
        <li>
          <Link href='/sobre'>
            <a>Serviços</a>
          </Link>
        </li>
      </div>

      <div>
        <ul className={styles.listaButtons}>
          <li>
            <Button />
          </li>
          <li>
            <Button />
          </li>
        </ul>

      </div>

    </ul>
  )
}