import Navbar from '../components/Navbar'
import styles from '../styles/Produtos.module.css'

export default function Produtos() {
  return (
    <>
      <Navbar />

      <div className={styles.apresentation1}>
        <div className={styles.pt1Apresentation}>
          <h2>O produto que tem a sua cara</h2>
          <h1 className={styles.titulo}>RangoCheck</h1>
        </div>

        <div className={styles.pt2Apresentation}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed praesent phasellus urna scelerisque est. Nullam faucibus adipiscing enim consequat. Pharetra, viverra aliquam pretium lacus at iaculis. Sed id mauris proin porta sit laoreet massa facilisis.
          </p>
        </div>

      </div>
    </>
  )

}