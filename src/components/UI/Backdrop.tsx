import React from "react";
import styled from "@emotion/styled";

type Props = {
  clicked: () => void;
};

const Backdrop: React.FCX<Props> = (props) => {
  const { className, clicked } = props;

  return <div className={className} onClick={clicked}></div>;
};

const StyledBackdrop = styled(Backdrop)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 50;
`;

export default StyledBackdrop;
