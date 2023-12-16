
import React, { useState, useEffect } from 'react';
import './styles.module.css';  // Importando o arquivo CSS

interface Recipe {
  name: string;
  description: string;
  ingredients: string;
  preparation: string;
  author: string;
  prepTime: string;
  url: string;
}

const AddRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    description: '',
    ingredients: '',
    preparation: '',
    author: '',
    prepTime: '',
    url: '',
  });

  useEffect(() => {
    setIsClient(true); // Define isClient como true quando o componente é montado no lado do cliente
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Detalhes da receita enviados:', recipe);
  };

  return (
    <div className="form-container">
      <h1>Adicionar Receita</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Nome da Receita:
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Descrição:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
            className="text-area"
          />
        </label>
        <label className="label">
          Ingredientes:
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            className="text-area"
          />
        </label>
        <label className="label">
          Modo de Preparo:
          <textarea
            name="preparation"
            value={recipe.preparation}
            onChange={handleInputChange}
            className="text-area"
          />
        </label>
        <label className="label">
          Nome do Autor:
          <input
            type="text"
            name="author"
            value={recipe.author}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Tempo de Preparo:
          <input
            type="text"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          URL:
          <input
            type="text"
            name="url"
            value={recipe.url}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <button type="submit" className="button">
          Adicionar Receita
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
function setIsClient(arg0: boolean) {
  throw new Error('Function not implemented.');
}

