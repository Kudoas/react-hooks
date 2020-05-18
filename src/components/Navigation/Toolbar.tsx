import React from "react";
import styled from "@emotion/styled";

import NavigationItems from "./NavigationItems";

const Toolbar: React.FCX = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

const StyledToolbar = styled(Toolbar)`
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  z-index: 90;
  nav {
    height: 100%;
  }
`;

export default StyledToolbar;
