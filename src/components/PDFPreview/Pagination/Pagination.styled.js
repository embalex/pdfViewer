import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  > div:first-child {
    margin-right: 32px;
  }
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.13), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
