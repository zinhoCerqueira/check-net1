import styles from '../styles/Footer.module.css'
import Script from 'next/script'

export default function Footer() {


  return (
    <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      
      <footer className={styles.footer}>
        
        <div className={styles.footerDiv1}>
          <h2> RangoCheck </h2>
          <div className={styles.icons}>
            <h3><i className="fab fa-facebook"></i></h3>
            <h3><i className="fa-brands fa-instagram"></i></h3>
            <h3><i className="fa-brands fa-twitter"></i></h3>
          </div>
          
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></Script>
          
          <h5>
            Copywright 2022, by Checknet,
          </h5>
          <h5>
            Inc,All rights reserved
          </h5>
        </div>

        <div className={styles.footerDivSpace}>
        </div>

        <div className={styles.footerDiv2}>
          <h2>
            Fale conosco
          </h2>
          <h5>
            <i class="fa-solid fa-location-crosshairs"></i>&nbsp;
            Av. Transnordestina, s/n - Feira de Santana, Novo Horizonte - BA, 44036-900
          </h5>
          <h5>
            <i class="fa-solid fa-phone"></i>&nbsp;
            (55) 75 3490-0020
          </h5>
          <h5>
            <i class="fa-solid fa-envelope"></i>&nbsp;
            checknetservices@checknet.com
          </h5>
        </div>
        
      </footer>
    </>
  )
}