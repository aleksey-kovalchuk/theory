import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

export const Head = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

export const SubHead = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  border-radius: 4px;
  margin: 20px 0!important;
  font-size: 14px;
  padding: 20px!important;
`;