import Link from 'next/Link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.lista}>

        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/carrinho'>
          <a>Meu Carrinho</a>
        </Link>
        <Link href='/sobre'>
          <a>Sobre</a>
        </Link>

      </div>

      <div className={styles.listaButtons}>

        <div className={styles.wrapper}>
          <button >Login</button>
          <button className={styles.ajuste}>Cadastre-se</button>
        </div>

      </div>

    </div>
  )
}