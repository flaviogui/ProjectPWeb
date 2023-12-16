import Input from '../input/input'
import  Styles  from './recipe.module.css'
import Button from "../button/button"

export default function RecipeForm(){
  return(
<div className={Styles.div}>
    <ol className={Styles.ol}>
        <h1 className={Styles.title}>ADICIONAR RECEITA</h1>
        <Input type="name" placeholder="Nome da receita:" />
        <Input type="name" placeholder="Nome do autor" />
        <Input type="name" placeholder="Tempo de Preparo" />
        <Input type="text" placeholder="URL" />
        <textarea className={Styles.textarea} placeholder="Ingredientes"></textarea>
        <textarea className={Styles.textarea} placeholder="Modo de Preparo"></textarea>
        <textarea className={Styles.textarea} placeholder="Descrição"></textarea>
        <Button>Salvar</Button>
    </ol>
</div>
  );
}
