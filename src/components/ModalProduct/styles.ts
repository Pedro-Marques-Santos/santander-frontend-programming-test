import styled from "styled-components";

export const Container = styled.div``;

export const ContainerTitleAndCLose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--white);
`;

export const IconClose = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const Information = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
`;

export const ContainerEditOrDelete = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 60px;
`;

export const Edit = styled.button`
  width: 50%;
  font-size: 18px;
  background: var(--green-600);
  color: var(--white);

  transition: 0.2s;
  &:hover {
    background: var(--green-650);
  }
`;

export const Delete = styled.button`
  width: 50%;
  font-size: 18px;
  background: var(--red-400);
  color: var(--white);

  transition: 0.2s;
  &:hover {
    background: var(--red-450);
  }
`;
