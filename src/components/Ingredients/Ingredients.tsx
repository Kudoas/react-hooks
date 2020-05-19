import React, { useCallback, useReducer, Fragment } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import Toolbar from "../Navigation/Toolbar";
import Timer from "../Timer/Timer";

const ingredientReducer = (currentIngredients: any, action: any) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing: any) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (currentHttpState: any, action: any) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currentHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...currentHttpState, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};

const Ingredients: React.FCX = ({ className }) => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientsHandler = (ingredient: any) => {
    dispatchHttp({ type: "SEND" });
    fetch("https://react-hooks-a3cd2.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((res: any) => {
        dispatchHttp({ type: "RESPONSE" });
        return res.json();
      })
      .then((resData: any) => {
        dispatch({
          type: "ADD",
          ingredient: { id: resData.name, ...ingredient },
        });
      })
      .catch((err: any) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  };

  const removeIngredientsHandler = (ingredientId: string) => {
    dispatchHttp({ type: "SEND" });
    fetch(`https://react-hooks-a3cd2.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: "DELETE",
    })
      .then((res) => {
        dispatchHttp({ type: "RESPONSE" });
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong!" });
      });
  };

  const clearError = () => {
    dispatchHttp({ type: "CLEAR" });
  };

  return (
    <Fragment>
      <Toolbar />
      <Timer />
      <div className={className}>
        {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
        <IngredientForm onAddIngredient={addIngredientsHandler} loading={httpState.loading} />
        <section>
          <Search onLoadIngredients={filteredIngredientsHandler} />
          <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientsHandler} />
        </section>
      </div>
    </Fragment>
  );
};

export default Ingredients;
