/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import {
  StyledClipboardButton,
  StyledClipboardIcon,
  StyledCopyMessage,
  StyledHiddenTextArea,
} from './style';

const CopyToClipboard = (props) => {
  const { content } = props;

  const textareaRef = useRef(null);

  const [isCopied, setIsCopied] = useState(false);

  const updateIsCopied = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  const copyToClipboard = () => {
    if (navigator.clipboard)
      navigator.clipboard.writeText(content).then(updateIsCopied);
    else {
      textareaRef.current.value = content;
      textareaRef.current.select();
      document.execCommand('copy');
      updateIsCopied();
    }
  };

  return (
    <>
      {navigator.clipboard || document.execCommand ? (
        <>
          <StyledClipboardButton onClick={copyToClipboard}>
            <StyledClipboardIcon />
            {isCopied && <StyledCopyMessage>Copied!</StyledCopyMessage>}
          </StyledClipboardButton>
          {!navigator.clipboard && <StyledHiddenTextArea ref={textareaRef} />}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

CopyToClipboard.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CopyToClipboard;
