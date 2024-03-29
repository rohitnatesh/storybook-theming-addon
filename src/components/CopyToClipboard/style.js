import styled from 'styled-components';

export const StyledClipboardButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  transform: scale(0.8);
`;

export const StyledClipboardIcon = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='LightGrey' width='24px' height='24px'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  display: block;
  height: 24px;
  transition: all 0.4s ease;
  width: 24px;
  &:hover {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='grey' width='24px' height='24px'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z'/%3E%3C/svg%3E");
  }
`;

export const StyledCopyMessage = styled.span`
  color: #808080;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
`;

export const StyledHiddenTextArea = styled.textarea`
  max-height: 1px;
  max-width: 1px;
  outline: none;
  color: transparent;
  border: none;
  position: absolute;
  resize: none;
  pointer-events: none;
`;
