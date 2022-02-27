import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const [show, setShow] = useState(false);
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


      <div className={styles.listButton}>

        <button onClick={handleShow}>Login</button>
        <Link href="/cadastro">
          <button className={styles.ajuste}>Cadastre-se</button>
        </Link>

      </div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>


  )
}