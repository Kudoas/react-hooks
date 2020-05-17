import React from "react";
import styled from "@emotion/styled";

const Card: React.FCX = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const StyledCard = styled(Card)`
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default StyledCard;
