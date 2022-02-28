import Navbar from "../components/Navbar";
import styles from "../styles/Cadastro.module.css"
import Form from 'react-bootstrap/Form'

export default function Cadastro() {

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Crie sua conta no <span >RangoCheck</span></h2>
        <div className={styles.formContainer}>

          <Form>
            <Form.Group className={styles.form}>
              
              <Form.Label className={styles.label}>Nome</Form.Label>
              <Form.Control controlId = 'nome' className={styles.control} type="default" placeholder="Seu nome" />
              
              <Form.Label className={styles.label}>Email</Form.Label>
              <Form.Control className={styles.control} type="email" placeholder="Seu e-mail" />
             
              <Form.Label className={styles.label}>Repita Seu Email</Form.Label>
              <Form.Control className={styles.control} type="email" placeholder="Seu e-mail" />
              
              <Form.Label className={styles.label}>Senha</Form.Label>
              <Form.Control className={styles.control} type="password" placeholder="Password" />
              
              <Form.Label className={styles.label}>Repita Sua Senha</Form.Label>
              <Form.Control className={styles.control} type="password" placeholder="Password" />
              
              <Form.Check className={styles.checkBox} type="checkbox" label=" Aceito os termos de uso e política de privacidade." />
            
            </Form.Group>
          </Form>

          <button type='submit'>Cadastre-se</button>

        </div>
      </div>
    </>
  )
}