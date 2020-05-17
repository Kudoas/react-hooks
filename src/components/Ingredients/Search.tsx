import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "../UI/Card";

type Props = {
  onLoadIngredients: any;
};

const Search: React.FCX<Props> = (props) => {
  const { className, onLoadIngredients } = props;
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, onLoadIngredients]);

  return (
    <section className={className}>
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        </div>
      </Card>
    </section>
  );
};

const StyledSearch = styled(Search)`
  width: 30rem;
  margin: 2rem auto;
  max-width: 80%;
  .search-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    input {
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.15rem 0.25rem;
    }
    input:focus {
      outline: none;
      border-color: #ff2058;
    }
  }

  @media (min-width: 768px) {
    .search-input {
      flex-direction: row;
    }
  }
`;

export default React.memo(StyledSearch);
