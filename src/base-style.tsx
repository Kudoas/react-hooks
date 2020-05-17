import { css } from "@emotion/core";

export const baseStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
  }

  button {
    font: inherit;
    background: #ff2058;
    padding: 0.5rem 2rem;
    color: white;
    border: 1px solid #ff2058;
    margin: 0.5rem 0;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover,
  button:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  }

  button:focus {
    outline: none;
  }
`;

export default baseStyle;
