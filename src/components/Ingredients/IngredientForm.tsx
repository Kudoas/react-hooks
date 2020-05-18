import React, { useState, FormEvent } from "react";
import styled from "@emotion/styled";

import Card from "../UI/Card";
import LoadingIndicator from "./../UI//LoadingIndicator";

type Props = {
  onAddIngredient: (arg1: { title: String; amount: String }) => void;
  loading: boolean;
};

const IngredientForm: React.FCX<Props> = (props) => {
  const { className, loading, onAddIngredient } = props;

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddIngredient({ title: title, amount: amount });
  };

  return (
    <section className={className}>
      <Card>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
};

const StyledIngredientForm = styled(IngredientForm)`
  width: 30rem;
  margin: 20px auto;
  padding-top: 80px;
  max-width: 80%;
  label,
  input {
    display: block;
    width: 100%;
  }
  input {
    font: inherit;
    padding: 0.1rem 0.25rem;
    border: none;
    border-bottom: 2px solid #ccc;
    margin-bottom: 1rem;
  }
  input:focus {
    outline: none;
    border-bottom-color: #ff2058;
  }
  .ingredient-form__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default React.memo(StyledIngredientForm);
