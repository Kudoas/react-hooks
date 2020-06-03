import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import baseStyle from "./base-style";
import Ingredients from "./components/Ingredients/Ingredients";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// 親で定義したstateを子でも呼び出せるようになる！
export const UserPost = React.createContext({});

const App: React.FCX = ({ className }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <UserPost.Provider value={100}>
        <Ingredients className={className} />
      </UserPost.Provider>
    </React.Fragment>
  );
};

const StyledApp = styled(App)`
  ${baseStyle}
`;

export default StyledApp;
