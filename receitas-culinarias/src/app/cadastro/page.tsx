"use client"

import LoginCard from "../componentes/loginCard/loginCard"
import styles from "../styles/Cadastro.module.css"
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'
import Heard from "../componentes/header/header2"
import { useRouter } from "next/navigation"

export default function CadastroPage(){
  const router = useRouter()
  return(
    <div>
      <Heard/>
    <div className={styles.background}>
      <LoginCard title = "CRIE SUA CONTA">
      <form className={styles.form}>
      <Input type="name" id="name" placeholder="Seu nome"/>
      <Input type="email" id="email" placeholder="Seu e-mail"/>
      <Input type="password" id="pass" placeholder="Sua senha"/>
      <Button onClick={
      async ()  =>{
        let email = (document.getElementById("email") as HTMLInputElement)?.value
        let name = (document.getElementById("name") as HTMLInputElement)?.value
        let password = (document.getElementById("pass") as HTMLInputElement)?.value
        const res = await fetch(
          "/api/user",
          {method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:email,pass:password,name:name})
      }
        ).then(async (res) => await res?.json() )
      if(res?.message == 'success'){
        router.replace(`/addReceita?userId=${res.data.id}&userName=${res.data.name}`)
      }
      }}>Cadastrar</Button>
      <Link href="/login">
        Já possui conta? Entre aqui</Link>
      </form>
      </LoginCard>
    </div>
    </div>
  )
}