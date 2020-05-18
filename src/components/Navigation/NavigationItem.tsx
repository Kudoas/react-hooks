import React from "react";
import styled from "@emotion/styled";

const NavigationItem: React.FCX = (props) => {
  const { className, children } = props;

  return <li className={className}>{children}</li>;
};

const StyledNavigationItem = styled(NavigationItem)`
  margin: 10px 10px;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

export default StyledNavigationItem;
