import JSZip from 'jszip';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../Button';
import Label from '../Label';
import TextInput from '../TextInput';
import StyledDiv, { StyledSpan } from './style';

const Export = (props) => {
  const { theme } = props;

  const [exportError, setExportError] = useState(false);
  const [themeName, setThemeName] = useState('newTheme');

  const updateExportError = (error) => setExportError(error);
  const updateThemeName = (e) => setThemeName(e.target.value);

  const createIndexFile = (keys) => {
    return `
 ${keys.map((entry) => `\u000A import ${entry} from './${entry}.json';`).join('')}
 \u000A export default {${keys.map((entry) => `\u000A...${entry},`).join('')}};
 `;
  };

  const generateZip = (data) => {
    updateExportError(false);
    const zip = new JSZip();
    const fileName = themeName.length > 0 ? themeName : 'newTheme';

    const promises = Object.entries(data).map(
      ([key, value]) =>
        new Promise((resolve) => {
          zip
            .folder(fileName)
            .file(`${key.toString()}.json`, JSON.stringify({ [key]: value }));
          setTimeout(resolve, 10);
        })
    );
    promises.push(
      new Promise((resolve) => {
        zip.folder(fileName).file('index.js', createIndexFile(Object.keys(data)));
        setTimeout(resolve, 10);
      })
    );

    Promise.all(promises).then(() =>
      zip
        .generateAsync({ type: 'base64' })
        .then((content) => {
          // eslint-disable-next-line no-undef
          const a = document.createElement('a');
          a.href = `data:application/zip;base64,${content}`;
          a.download = fileName;
          a.style = 'display: none';
          a.click();
        })
        .catch(() => updateExportError(true))
    );
  };

  return (
    <>
      <StyledDiv>
        <Label isRoot style={{ margin: '0 2rem' }}>
          Theme name
        </Label>
        <TextInput
          id="export_theme_name"
          onChange={updateThemeName}
          value={themeName}
        />
      </StyledDiv>
      <Button onClick={() => generateZip(theme)}>Export</Button>
      {exportError && <StyledSpan>Ops! Some error occurred.</StyledSpan>}
    </>
  );
};

Export.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Export;
