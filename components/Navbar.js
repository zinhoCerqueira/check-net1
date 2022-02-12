import Link from 'next/Link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.lista}>

        <Link href='/'>
          <a>Promoções</a>
        </Link>
        <Link href='/produtos'>
          <a>Meu Carrinho</a>
        </Link>
        <Link href='/sobre'>
          <a>Serviços</a>
        </Link>

      </div>

      <div className={styles.listaButtons}>

        <button type="button">Login</button>
        <button className = {styles.ajuste} type="button">Cadastre-se</button>

      </div>

    </div>
  )
}