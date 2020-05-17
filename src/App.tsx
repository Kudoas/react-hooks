import React from "react";
import styled from "@emotion/styled";

import baseStyle from "./base-style";
import Ingredients from "./components/Ingredients/Ingredients";

const App: React.FCX = ({ className }) => {
  return <Ingredients className={className} />;
};

const StyledApp = styled(App)`
  ${baseStyle}
`;

export default StyledApp;
