import styled from 'styled-components';

const StyledSelectInput = styled.select`
  appearance: none;
  display: inline-block;
  background: none;
  border: none;
  font-size: 1.2rem;
  outline: none;
  padding 0 20px 0 10px;
  -webkit-appearance:none;
  -moz-appearance: none;
`;

export const StyledCaret = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black' width='24px' height='24px'%3E%3Cpath d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  height: 24px;
  pointer-events: none;
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-49%);
  width: 24px;
`;

export const StyledSelectInputContainer = styled.span`
  display: inline-block;
  position: relative;
  width: fit-content;
`;

export default StyledSelectInput;
