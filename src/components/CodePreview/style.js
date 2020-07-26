import styled from 'styled-components';

export const StyledBox = styled.div`
  border: 1px dashed #000000;
  margin: 1.5rem 0;
  padding: 0 0 0.5rem 1rem;
  overflow-x: auto;
`;

export const StyledCodeLine = styled.div`
  padding: 1px 0;
  position: relative;

  ${(props) =>
    props.highlight
      ? `
          background-color: ${props.highlight === 'added' ? '#ddffdd' : '#ffe8e9'};
          margin-top : ${props.highlight === 'added' ? '0' : '2px'}; 
          &::before{
            content: '${props.highlight === 'added' ? '+' : '-'}';
            color: ${props.highlight === 'added' ? '#318a2f' : '#bf2d34'};
            font-size: 1rem;
            left: ${props.highlight === 'added' ? '-0.82rem' : '-0.73rem'};
            position: absolute;
            top: ${props.highlight === 'added' ? '-0.13rem' : '-0.09rem'};
          }
        `
      : ''}
`;
