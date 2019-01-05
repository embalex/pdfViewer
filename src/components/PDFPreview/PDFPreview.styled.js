import { Document } from 'react-pdf/dist/entry.webpack';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(82, 83, 90, 0.1);
  padding: 38px 96px 0px 96px;
`;

export const StyledDocument = styled(Document)`
  max-width: 100%;
  overflow: auto;
`;
