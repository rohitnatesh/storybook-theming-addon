import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from '../FormGroup';
import Heading from '../Heading';
import Label from '../Label';
import TextInput from '../TextInput';
import StyledThemingFields from './ThemingFields.style';

const ThemingFields = (props) => {
  const { theme, updateTheme } = props;

  const generateInnerFields = (parent, data) => (
    <>
      {Object.entries(data).map(([key, value], index) => (
        <FormGroup key={`${parent}_${key}`} index={index}>
          {typeof value === 'string' ? (
            <>
              <Label htmlFor={`${parent}_${key}`}>{key}</Label>
              <TextInput
                id={`${parent}_${key}`}
                value={value}
                onChange={(e) => updateTheme(e.target.id, e.target.value)}
              />
            </>
          ) : (
            <>
              <Label isRoot>{key}</Label>
              {generateInnerFields(`${parent}_${key}`, value)}
            </>
          )}
        </FormGroup>
      ))}
    </>
  );

  return (
    <div>
      {Object.entries(theme).map(([key, value]) => (
        <StyledThemingFields key={`field-group-${key}`}>
          <Heading>{key}</Heading>
          <div>{generateInnerFields(key, value)}</div>
        </StyledThemingFields>
      ))}
    </div>
  );
};

ThemingFields.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  updateTheme: PropTypes.func.isRequired,
};

export default ThemingFields;
