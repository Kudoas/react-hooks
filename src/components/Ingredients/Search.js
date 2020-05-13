import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;
  const [filter, setFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const query = filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
        fetch(process.env.REACT_APP_FIREBASE_DATABASE + query)
          .then((res) => {
            return res.json();
          })
          .then((resData) => {
            const loadedIngredients = [];
            for (let key in resData) {
              loadedIngredients.push({
                id: key,
                title: resData[key].title,
                amount: resData[key].amount,
              });
            }
            onLoadIngredients(loadedIngredients);
          });
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
