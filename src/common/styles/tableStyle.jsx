import styled from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 1em;
  font-size: .9rem;
  font-weight: 500;
  margin: 4.5rem 0 1.5rem 0;
  width: 100%;

  tr {
    border: 0;
    margin: .3125rem;
  }

  th {
    text-align: center;
    padding-bottom: 1.25rem;
  }

  td {
    text-align: center;
    padding: .9375rem .625rem;
    background-color: ${({ theme }) => theme.colors.mediumGray};
    vertical-align: middle;
    text-transform: uppercase;
  }

  td:first-child {
    border-top-left-radius: .3125rem;
    border-bottom-left-radius: .3125rem;
  }

  td:last-child {
    border-top-right-radius: .3125rem;
    border-bottom-right-radius: .3125rem;
  }

  .status {
    display: inline-block;
    border-radius: .3125rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: .5rem .75rem;
  }

  .status__active {
    background-color: ${({ theme }) => theme.colors.primaryGreen};
  }

  .status__inactive {
    background-color: ${({ theme }) => theme.colors.slateGray};
  }

  .status__maintenance {
    background-color: ${({ theme }) => theme.colors.red};
  }

  .button__container {
    display: flex;
    gap: .3125rem;
    justify-content: center;
    align-items: center;
  }

  .button {
    display: flex;
    align-items: center;
    gap: .375rem;
    border: none;
    border-radius: .3125rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    transition: all .2s ease-in-out;
    padding: 0 .9375rem;
    height: 38px;

    &:hover {
      opacity: .8;
    }
  }

  .button__view {
    background-color: #4e73df;
  }

  .button__edit {
    background-color: #f4b400;
  }

  @media (max-width: 767px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;