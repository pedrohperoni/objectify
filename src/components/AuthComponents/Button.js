import styled from "styled-components";

const Button = styled.button`
  width: 90%;
  height: 57px;
  border-radius: 5px;
  background: rgb(32, 195, 161);
  background: linear-gradient(
    90deg,
    rgba(32, 195, 161, 1) 0%,
    rgba(233, 205, 112, 1) 100%
  );

  border: 0;

  color: #000;
  padding: 0 20px;
  margin-top: 13px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`;

export default Button;
