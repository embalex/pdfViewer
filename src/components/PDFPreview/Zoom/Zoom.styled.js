import styled from 'styled-components';


export const Wrapper = styled.div`
  position: absolute;
  right: 28px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.13), 0px 1px 3px rgba(0, 0, 0, 0.1);
  > div:first-child {
    border-bottom: 1px solid #F0F0F0;
  }
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
