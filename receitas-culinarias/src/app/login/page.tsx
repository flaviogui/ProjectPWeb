"use client"
import LoginCard from "../componentes/loginCard/loginCard"
import styles from '../styles/Login.module.css'
import Input from '../componentes/input/input'
import Button from "../componentes/button/button"
import Link from 'next/link'
import Header from "../componentes/header/header2"
import { signIn } from "next-auth/react"

export default function LoginPage(){
  return(
    <div>
      <Header/>
    <div className={styles.background}>
      <LoginCard title = "ENTRE EM SUA CONTA">
      <form className={styles.form}>
      <Input type="email" id="email" placeholder="Seu e-mail"/>
      <Input type="password" id="password" placeholder="Sua senha"/>
      <Button onClick={ () => {
        let email = (document.getElementById("email") as HTMLInputElement)?.value
        let password = (document.getElementById("password") as HTMLInputElement)?.value
        signIn("credentials",{redirect:false,email,password})}
        }>Entrar</Button>
      <Link href="/cadastro">
        Ainda não possui conta? Faça seu cadastro</Link>
      </form>
      </LoginCard>
    </div>
    </div>
  )
}


//variaveis 
/*
const router = useRouter();
const { data: session, status: sessionStatus } = useSession();
*/


//login
/*
signIn("credentials",{
  redirect:false,
  email,
  password
})
*/


//redericiona
/*
 useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

*/