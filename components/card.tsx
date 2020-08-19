import { styled } from "linaria/react";

export const Card = styled.li`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  color: inherit;
  flex-basis: 45%;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  &:focus {
    color: #0070f3;
    border-color: #0070f3;
  }
  &:hover {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
