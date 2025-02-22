module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Use the appropriate parser if you're using TypeScript
    parserOptions: {
      ecmaVersion: 2021, // Specify the ECMAScript version
      sourceType: 'module', // Use imports
      ecmaFeatures: {
        jsx: true, // Enable JSX
      },
    },
    env: {
      browser: true, // Enable browser global variables
      es2021: true, // Enable ES2021 globals
    },
    plugins: ['react', 'react-hooks'], // Enable React-specific linting rules
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require importing React
      'react-hooks/rules-of-hooks': 'error', // Enforce rules of React hooks
      'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
      'react/button-has-type': 'error',
      // Add more rules as needed
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  };
  