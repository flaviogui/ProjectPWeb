"use client"
import LoginCard from "../componentes/loginCard/loginCard"
import styles from '../styles/Login.module.css'
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'
import Header from "../componentes/header/header2"
import { useRouter } from "next/navigation"
import { getUserForEmail } from "@/lib/models/user"
import { logIn } from "./login"

export default function LoginPage(){
  let id:number;
  let name:string;
  return(
    <div>
      <Header/>
    <div className={styles.background}>
      <LoginCard title = "ENTRE EM SUA CONTA">
      <form className={styles.form}>
      <Input type="email" id="email"  placeholder="Seu e-mail"/>
      <Input type="password" id="password" placeholder="Sua senha"/>
      <Button onClick={
        async () => {
          try{
            let user = await logIn()
            useRouter().replace(`/addReceita/?authorId=${user.data.id}&name=${user.data.name}`)
          }catch(error){
            console.log(error)
          }
        }
        }>Entrar</Button>
      <Link href="/cadastro">
        Ainda não possui conta? Faça seu cadastro</Link>
      </form>
      </LoginCard>
    </div>
    </div>
  )
}