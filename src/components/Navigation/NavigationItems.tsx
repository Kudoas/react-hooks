import React from "react";
import styled from "@emotion/styled";

import NavigationItem from "./NavigationItem";

const NavigationItems: React.FCX = ({ className }) => {
  return (
    <ul className={className}>
      <NavigationItem>Pomodoro Tech</NavigationItem>
    </ul>
  );
};

const StyledNavigationItems = styled(NavigationItems)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

export default StyledNavigationItems;
