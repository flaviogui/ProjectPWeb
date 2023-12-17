import Header from "../componentes/header/header2"
import  Style from "../styles/sobre.module.css" 

export default function Sobre(){
    return(
        <div>
        <Header/>
        <div className={Style.div}>
            <h1 className={Style.h1}>INFORMAÇÕES SOBRE O PROJETO</h1>
                <p className={Style.p}>O App Culinária Nodestina é um inovador aplicativo web desenvolvido como projeto na disciplina de Programação Web do curso de Sistema de Informação da UFRN. 
                Ele foi projetado para proporcionar aos entusiastas da culinária uma plataforma interativa onde podem compartilhar, descobrir e aprimorar suas habilidades culinárias por meio da troca de receitas.
                </p>
                <br></br>
                <h2 className={Style.h2} >DISCENTES ENVOLVIDOS:</h2>
                <p className={Style.pa}><a href='https://github.com/flaviogui' target='blank'>Flávio Glaydson (Discente do BSI-UFRN)</a></p>
                <p className={Style.pa}><a href='https://github.com/kolitero' target='blank'>Isayan Deivid (Discente do BSI-UFRN)</a></p>       
        </div>
        </div>
    )
}