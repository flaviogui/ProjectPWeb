import Link from 'next/link'
import styles from './header.module.css'

export default function Header(){
    return(
            <nav className={styles.nav}>
              <Link className= {styles.title} href="/">CULINÁRIA NODESTINA</Link>
            </nav>
    )
}