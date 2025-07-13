module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off',
  },
};
