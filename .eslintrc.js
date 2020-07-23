module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
