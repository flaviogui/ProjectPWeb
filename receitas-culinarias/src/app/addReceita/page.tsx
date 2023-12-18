'use client'
import AdicionarReceita from '../componentes/recipeForm/recipeForm'
import Heard from '../componentes/header/header2'
import { useSearchParams } from 'next/navigation'
export default function AddReceita(){
  const searchParams = useSearchParams()
  const id = parseInt(searchParams.get('userId') ?? '-1')
  const name = searchParams.get('userName')
  return (
    <div>
      <Heard/>
      <AdicionarReceita id={id} name={name}/>
    </div>
  )
}