import LoginCard from "../componentes/loginCard/loginCard"
import styles from '../styles/login.module.css'
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"


export default function LoginPage(){
  return(
    <div className={styles.background}>
      <LoginCard title = "ENTRE EM SUA CONTA">
      <form className={styles.form}>
      <Input type="email" placeholder="Seu e-mail"/>
      <Input type="password" placeholder="Sua senha"/>
      <Button>Entrar</Button>
      </form>
      </LoginCard>
    </div>
  )
}