import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

const fundadores = [

  { nome: "Jader Cerqueira", foto: "https://github.com/zinhoCerqueira.png" },
  { nome: "Vitor Souza", foto: "https://github.com/viubis.png" },
  { nome: "Daniel Santana", foto: "https://github.com/danielsantana77.png" },
  { nome: "Thiago Menezes", foto: "https://github.com/thigaz.png" }
];



export default function Home() {

  return (
    <div>
      <Head>
        <title>RangoCheck</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.divPresent1}>
          <p className={styles.present1}>
            Eleito melhor serviço em 2017, 2020, 2021 pelo DataFake.
          </p>
          <p className={styles.present2}>
            <b><i>Preço</i></b> e <b><i>Qualidade</i></b> em apenas um lugar.
          </p>

          <div className={styles.wrapper}>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i> &nbsp;
              Nossos produtos
            </button>
          </div>
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
          {fundadores.map((pessoa) => (
            <div className={styles.card}>
              <Image className={styles.imgCard}
                alt="Foto do membro fundador"
                src={pessoa.foto}
                width="75px"
                height="75px"

              />
              <span className={styles.pessoaNome}> {pessoa.nome} </span>
              <span className={styles.pessoaCargo}> Co-Fundador </span>
            </div>

          ))}
        </div>


        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>

      </div>

    </div>
  )
}
