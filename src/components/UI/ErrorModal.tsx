import React from "react";
import styled from "@emotion/styled";

import Backdrop from "./Backdrop";

type Props = {
  onClose: () => void;
};

const ErrorModal: React.FCX<Props> = (props) => {
  const { className, children, onClose } = props;

  return (
    <div className={className}>
      <Backdrop clicked={onClose} />
      <div className="backdrop" onClick={onClose} />
      <section className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={onClose}>
            Okay
          </button>
        </div>
      </section>
    </div>
  );
};

const StyledErrorModal = styled(ErrorModal)`
  .error-modal {
    position: fixed;
    top: 30vh;
    left: calc(50% - 15rem);
    width: 30rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    border-radius: 7px;
  }

  .error-modal h2 {
    margin: 0;
    padding: 1rem;
    background: #ff2058;
    color: white;
    border-radius: 7px 7px 0 0;
  }

  .error-modal p {
    padding: 1rem;
  }

  .error-modal__actions {
    display: flex;
    justify-content: flex-end;
    padding: 0 0.5rem;
  }
`;

export default React.memo(StyledErrorModal);
