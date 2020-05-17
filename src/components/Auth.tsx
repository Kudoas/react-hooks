import React from "react";
import styled from "@emotion/styled";

import Card from "./UI/Card";

const Auth: React.FCX = ({ className }) => {
  const loginHandler = (): void => {};

  return (
    <div className={className}>
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

const StyledAuth = styled(Auth)`
  width: 30rem;
  margin: 2rem auto;
  max-width: 80%;
  text-align: center;
`;

export default StyledAuth;
