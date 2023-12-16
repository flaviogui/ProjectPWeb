// pages/index.tsx
import AdicionarReceita from '../componentes/recipeForm/recipeForm'
import RecipeForm from '../componentes/recipeForm/recipeForm'
export default function AddReceita(){
  return (
    <div>
      <AdicionarReceita />
    </div>
  )
}


//redericiona
/*
 useEffect(() => {
    if (sessionStatus !== "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

*/