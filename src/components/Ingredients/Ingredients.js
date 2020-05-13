import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_FIREBASE_DATABASE)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       const loadedIngredients = [];
  //       for (let key in resData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: resData[key].title,
  //           amount: resData[key].amount,
  //         });
  //       }
  //       setIngredients(loadedIngredients);
  //     });
  // }, []);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientsHandler = (ingredient) => {
    fetch(process.env.REACT_APP_FIREBASE_DATABASE, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: resData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientsHandler = (ingredientId) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler} />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
