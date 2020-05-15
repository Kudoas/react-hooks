import React from "react";

import "./IngredientList.css";

type Ingredient = {
  id: string;
  title: string;
  amount: number;
};

type Props = {
  ingredients: Ingredient[];
  onRemoveItem: (arg1: string) => void;
};

const IngredientList: React.FC<Props> = (props) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ig) => (
          <li key={ig.id} onClick={() => props.onRemoveItem(ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
