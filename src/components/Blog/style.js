import styled from "styled-components";

export const Content = styled("p")`
	margin: 1.5rem 0 2rem 0;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
//   max-width: 100%;

      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
