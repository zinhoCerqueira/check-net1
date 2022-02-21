
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.lista}>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/produtos">
          <a>Produtos</a>
        </Link>
        <Link href="/carrinho">
          <a>Meu Carrinho</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>

      </div>

      <div className={styles.listButton}>
        <button onClick={handleShow}>Login</button>
        <Link href="/cadastro">
          <button className={styles.ajuste}>Cadastre-se</button>
        </Link>

      </div>


    </div>


  )
}