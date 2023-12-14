import Input from '../input/input'
import  Styles  from './recipe.module.css'

export default function RecipeForm(){
    return(
        <div className={Styles.div}>
            <ol>
        <h1 className={Styles.title}>ADICIONAR RECEITA</h1>
        <form>
          <Input type="name" placeholder="Nome da receita:" />
        </form>
        <form>
          <Input  type="text" placeholder="Descrição" />
        </form>
        <form>
          <Input  type="text" placeholder="Ingredientes" />
        </form>
        <form>
          <Input  type="text" placeholder="Modo de Preparo" />
        </form>
        <form>
          <Input  type="name" placeholder="Nome do autor" />
        </form>
        <form>
          <Input  type="name" placeholder="Tempo de Preparo" />
        </form>
        <form>
          <Input  type="text" placeholder="URL" />
        </form>

            </ol>
        </div>
    )
}



