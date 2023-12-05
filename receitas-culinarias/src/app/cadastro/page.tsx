import LoginCard from "../componentes/loginCard/loginCard"
import styles from "../styles/Cadastro.module.css"
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'

export default function CadastroPage(){
  return(
    <div className={styles.background}>
      <LoginCard title = "CRIE SUA CONTA">
      <form className={styles.form}>
      <Input type="name" placeholder="Seu nome"/>
      <Input type="email" placeholder="Seu e-mail"/>
      <Input type="password" placeholder="Sua senha"/>
      <Button>Cadastrar</Button>
      <Link href="/login">
        Já possui conta?</Link>
      </form>
      </LoginCard>
    </div>
  )
}