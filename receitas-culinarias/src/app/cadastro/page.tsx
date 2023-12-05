import LoginCard from "../componentes/loginCard/loginCard"
import styles from "../styles/Cadastro.module.css"
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"

export default function CadastroPage(){
  return(
    <div className={styles.background}>
      <LoginCard title = "CRIE SUA CONTA">
      <form className={styles.form}>
      <Input type="name" placeholder="Seu nome"/>
      <Input type="email" placeholder="Seu e-mail"/>
      <Input type="password" placeholder="Sua senha"/>
      <Button>Cadastrar</Button>
      </form>
      </LoginCard>
    </div>
  )
}