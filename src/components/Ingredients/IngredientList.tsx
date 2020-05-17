import React from "react";
import styled from "@emotion/styled";

type Ingredient = {
  id: string;
  title: string;
  amount: number;
};

type Props = {
  ingredients: Ingredient[];
  onRemoveItem: (arg1: string) => void;
};

const IngredientList: React.FCX<Props> = (props) => {
  const { className, ingredients, onRemoveItem } = props;

  return (
    <section className={className}>
      <h2>Loaded Ingredients</h2>
      <ul>
        {ingredients.map((ig) => (
          <li key={ig.id} onClick={() => onRemoveItem(ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const StyledIngredientList = styled(IngredientList)`
  width: 30rem;
  max-width: 80%;
  margin: auto;
  h2 {
    border-bottom: 3px solid #ccc;
    padding-bottom: 1rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledIngredientList;
