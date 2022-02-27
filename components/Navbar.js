import Modal from './Modal';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.navbar}>

      <div className={styles.iconsMenu}>
        <h5>
          <i className="fa-solid fa-bars"></i>
        </h5>
      </div>

      <div className={styles.lista}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products/product">
          <a>Produtos</a>
        </Link>
        <Link href="/carrinho">
          <a>Meu Carrinho</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
      </div>

      <Modal/>

      <div className={styles.listButton}>
        <button>Login</button>
        <Link href="/cadastro">
          <button className={styles.ajuste}>Cadastre-se</button>
        </Link>
      </div>


    </div>


  )
}