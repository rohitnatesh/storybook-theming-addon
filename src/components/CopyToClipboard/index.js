import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  StyledClipboardButton,
  StyledClipboardIcon,
  StyledCopyMessage,
} from './style';

const CopyToClipboard = (props) => {
  const { content } = props;

  const [isCopied, setIsCopied] = useState(false);

  const updateIsCopied = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  const copyToClipboard = () =>
    // eslint-disable-next-line no-undef
    navigator.clipboard.writeText(content).then(updateIsCopied);

  return (
    <StyledClipboardButton onClick={copyToClipboard}>
      <StyledClipboardIcon />
      {isCopied && <StyledCopyMessage>Copied!</StyledCopyMessage>}
    </StyledClipboardButton>
  );
};

CopyToClipboard.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CopyToClipboard;
