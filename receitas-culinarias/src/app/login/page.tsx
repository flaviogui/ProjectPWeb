import LoginCard from "../componentes/loginCard/loginCard"
import styles from '../styles/Login.module.css'
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'

export default function LoginPage(){
  return(
    <div className={styles.background}>
      <LoginCard title = "ENTRE EM SUA CONTA">
      <form className={styles.form}>
      <Input type="email" placeholder="Seu e-mail"/>
      <Input type="password" placeholder="Sua senha"/>
      <Button>Entrar</Button>
      <Link href="/cadastro">
        Ainda não possui conta? Faça seu cadastro</Link>
      </form>
      </LoginCard>
    </div>
  )
}