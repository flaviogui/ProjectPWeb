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
        <label className={Styles.categoryLabel} htmlFor="category">CATEGORIA:</label>
        <select className={Styles.categorySelect} name="category" id="category">
        <option value="cafemanha">Café da manha</option>
        <option value="almoco">Almoço</option>
        <option value="janta">Janta</option>
        <option value="carnes">Carnes</option>
        <option value="doce">Doces e Sobremesa</option>
        <option value="peixe">Peixes de água doce</option>
        <option value="lanche">Lanche</option>
        <option value="tiragosto">Tira Gosto</option>
        <option value="vegetatiano">Comidas Vegetarianas</option>
        </select>
        <Button>ADICIONAR</Button>
    </ol>
</div>
  );
}

/*
-café da manha                                                                                                                                       
-almoco
-janta
-bebidas
-massas
-carnes
-doces e sobremesa
-peixes e fruto do mar
-lanche
-vegetariano 
-tira gosto
*/
