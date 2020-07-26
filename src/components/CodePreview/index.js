import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Heading from '../Heading';
import { StyledBox, StyledCodeLine } from './style';

const CodePreview = (props) => {
  const { newTheme, oldTheme } = props;

  const performCompare = (newValue, oldValue, key, comma, indent) =>
    newValue === oldValue ? (
      <StyledCodeLine>
        {`${'\u00A0'.repeat(indent)}"${key}" : "${newValue}"
      ${comma ? ',' : ''}`}
      </StyledCodeLine>
    ) : (
      <>
        <StyledCodeLine highlight="removed">
          {`${'\u00A0'.repeat(indent)}"${key}" : "${oldValue}"
        ${comma ? ',' : ''}`}
        </StyledCodeLine>

        <StyledCodeLine highlight="added">
          {`${'\u00A0'.repeat(indent)}"${key}" : "${newValue}"
        ${comma ? ',' : ''}`}
        </StyledCodeLine>
      </>
    );

  const generateInnerCode = (parent, newData, oldData, indent) => {
    const len = Object.keys(newData).length;
    return (
      <>
        {Object.entries(newData).map(([key, value], index) => (
          <Fragment key={`${parent}_${key}`}>
            {typeof value === 'string' ? (
              performCompare(value, oldData[key], key, len !== index + 1, indent)
            ) : (
              <StyledCodeLine>
                {`${'\u00A0'.repeat(indent)}"${key}" : {`}
                {generateInnerCode(key, value, oldData[key], indent + 4)}
                {`${'\u00A0'.repeat(indent)}}${len !== index + 1 ? ',' : ''}`}
              </StyledCodeLine>
            )}
          </Fragment>
        ))}
      </>
    );
  };

  return (
    <div>
      {Object.entries(newTheme).map(([key, value]) => (
        <StyledBox key={`field-group-${key}`}>
          <Heading>{key}</Heading>
          <StyledCodeLine>
            {'{'}
            {generateInnerCode(key, value, oldTheme[key], 4)}
            {'}'}
          </StyledCodeLine>
        </StyledBox>
      ))}
    </div>
  );
};

CodePreview.propTypes = {
  newTheme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  oldTheme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CodePreview;
