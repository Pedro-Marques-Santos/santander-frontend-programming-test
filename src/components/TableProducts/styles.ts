import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 10px;

    th {
      text-align: start;
      padding: 10px;
      border-bottom: 8px solid var(--black-800);
    }

    td {
      text-align: start;
      padding: 10px;
      border-bottom: 8px solid var(--black-800);
    }
  }

  thead {
    background: var(--black-900);
  }

  tbody {
    background: var(--black-900);
  }

  .edit {
    text-align: end;
  }

  .code {
    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: end;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
