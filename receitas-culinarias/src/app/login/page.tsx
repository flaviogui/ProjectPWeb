"use client"
import LoginCard from "../componentes/loginCard/loginCard"
import styles from '../styles/Login.module.css'
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'
import Header from "../componentes/header/header2"
import { useRouter } from "next/navigation"

export default function LoginPage(){
  const router = useRouter()
  return(
    <div>
      <Header/>
    <div className={styles.background}>
      <LoginCard title = "ENTRE EM SUA CONTA">
      <form className={styles.form}>
      <Input type="email" id="email"  placeholder="Seu e-mail"/>
      <Input type="password" id="pass" placeholder="Sua senha"/>
      <Button onClick={ async ()  =>{
        let email = (document.getElementById("email") as HTMLInputElement)?.value
        let pass = (document.getElementById("pass") as HTMLInputElement)?.value
        window.alert("0:init")
        const res = await fetch(
          "/api/user/login",
          {method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:email,pass:pass})
      }
        )
      window.alert("0:fetch")
      window.alert(res.ok)
      const data = await res.json()
      window.alert("sus")
      if(data?.message == 'success'){
        console.log("success")
        router.replace(`/addReceita?userId=${data.id}&userName=${data.name}`)
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