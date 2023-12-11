import Link from 'next/link'
import styles from './header.module.css'

export default function Header(){
    return(
            <nav className={styles.nav}>
              <Link className= {styles.title} href="/">CULINÁRIA NODESTINA</Link>
              <form className={styles.form}>
                <input className={styles.input} type= "text"/>
                <button className={styles.button}>Pesquisar</button>
              </form>
              <Link href="/login" className={styles.loginLink}>
              LOGIN</Link>
            </nav>
    )
}