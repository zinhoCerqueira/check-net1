import Navbar from "../components/Navbar";
import styles from "../styles/Cadastro.module.css"
import Form from 'react-bootstrap/Form'

export default function Cadastro() {

  function valueForm() {
    
    const form = {
      nome : String,
      email : String,
      email2 : String,
      senha : String,
      senha2 : String,
      checkBox :String,
    }

    form.nome = document.getElementById('nome').value;
    form.email = document.getElementById('email').value;
    form.email2 = document.getElementById('email2').value;
    form.senha = document.getElementById('senha').value;
    form.senha2 = document.getElementById('senha2').value;
    form.checkBox = document.getElementById('checkbox').value;

    console.log(document.getElementById('checkbox').value);
    if (document.getElementById('checkbox').value.checked){
      console.log("Checkado")
    }
    else{
      console.log("Não checkado")
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Crie sua conta no <span >RangoCheck</span></h2>
        <div className={styles.formContainer}>

          <Form >
            <Form.Group  className={styles.form}>
              
              <Form.Label className={styles.label}>Nome</Form.Label>
              <Form.Control  id = 'nome' className={styles.control} type="default" placeholder="Seu nome" />
              
              <Form.Label className={styles.label}>Email</Form.Label>
              <Form.Control id = 'email' className={styles.control} type="email" placeholder="Seu e-mail" />
             
              <Form.Label className={styles.label}>Repita Seu Email</Form.Label>
              <Form.Control id = 'email2' className={styles.control} type="email" placeholder="Seu e-mail" />
              
              <Form.Label className={styles.label}>Senha</Form.Label>
              <Form.Control id = 'senha' className={styles.control} type="password" placeholder="Password" />
              
              <Form.Label className={styles.label}>Repita Sua Senha</Form.Label>
              <Form.Control id = 'senha2' className={styles.control} type="password" placeholder="Password" />
              
              <Form.Check id = 'checkbox' className={styles.checkBox} type="checkbox" label=" Aceito os termos de uso e política de privacidade." />
            
            </Form.Group>
          </Form>

          <button type='submit' onClick={valueForm}>Cadastre-se</button>

        </div>
      </div>
    </>
  )
}