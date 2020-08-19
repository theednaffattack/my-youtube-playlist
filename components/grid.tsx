import { styled } from "linaria/react";

export const Grid = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;

  list-style: none;
  padding: 0;
  margin-left: 0;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
