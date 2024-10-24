import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.div`
  padding: .75rem;

  @media (min-width: 992px) {
    padding: 1.25rem;
  }
`;

export const LinkItem = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: .3125rem;
  padding: .625rem .9375rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: .3125rem;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkblue};
  }
`;