import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>RangoCheck</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.divPresent1}>
          <p className={styles.present1}>
            Eleito melhor serviço em 2017, 2020, 2021 pelo DataFake.
          </p>
          <p className={styles.present2}>
            <b><i>Preço</i></b> e <b><i>Qualidade</i></b> em apenas um lugar.
          </p>
        </div>

        <div className={styles.divPresent2}>
          <Image
            src="/image/imgHome1.png"
            width="311px"
            height="285px"
          />
        </div>
      </div>

      <div className={styles.present3}>
        <div className={styles.apresentation}>

          <div className={styles.card}>
            eqweqeqeqwqw
          </div>

          <div className={styles.card}>
            wqeqeeqeq
          </div>

          <div className={styles.card}>
            eqwe
          </div>

        </div>

        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>

    </div>
  )
}
