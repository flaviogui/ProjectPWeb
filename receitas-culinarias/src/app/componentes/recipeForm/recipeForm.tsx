'use client'
import Input from '../input/input'
import  Styles  from './recipe.module.css'
import Button from "../button/button"
import { useRouter } from 'next/navigation'

export default function RecipeForm(props:any){
  if(props.id == -1){
    useRouter().replace("/")
  }
  return(
<div className={Styles.div}>
    <ol className={Styles.ol}>
        <h1 className={Styles.title}>ADICIONAR RECEITA</h1>
          <Input type="name" id='name' placeholder="Nome da receita:" />
          <Input type="name" id='authorName' placeholder="Nome do autor" defaultValue={props.name} />
          <Input type="name" id='time' placeholder="Tempo de Preparo" />
          <Input type="text" id='url' placeholder="URL"/>
          <textarea className={Styles.textarea} id='igredient' placeholder="Ingredientes"></textarea>
          <textarea className={Styles.textarea} id='stage' placeholder="Modo de Preparo"></textarea>
          <textarea className={Styles.textarea} id='description' placeholder="Descrição"></textarea>
          <label className={Styles.categoryLabel} htmlFor="category">CATEGORIA:</label>
          <select className={Styles.categorySelect}  name="category" id="category">
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
          <Button onClick={
            async () => {
              let name = (document.getElementById("name") as HTMLInputElement)?.value
              let authorName = (document.getElementById("authorName") as HTMLInputElement)?.value
              let time = (document.getElementById("time") as HTMLInputElement)?.value
              let url = (document.getElementById("url") as HTMLInputElement)?.value
              let igredient = (document.getElementById("igredient") as HTMLTextAreaElement)?.value
              let stage = (document.getElementById("stage") as HTMLTextAreaElement)?.value
              let description = (document.getElementById("description") as HTMLTextAreaElement)?.value
              let category = (document.getElementById("category") as HTMLSelectElement)?.value
              fetch("/api/recipe",{method:"POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({name:name,authorId:props.id,time:time,url:url,igredients:igredient,stages:stage,description,category:category})
            })
            }
          } >ADICIONAR</Button>
    </ol>
</div>
  );
}
