module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    // 'function-paren-newline': ['error', 'multiline-arguments'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    // 'operator-linebreak': ['error', 'before'],
    'key-spacing': ['error'],
    'space-infix-ops': ['error'],
    'space-before-blocks': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    // '@typescript-eslint/brace-style': [
    //   'error',
    //   '1tbs',
    //   { allowSingleLine: true },
    // ],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     MemberExpression: 1,
    //     FunctionDeclaration: {
    //       parameters: 'first',
    //     },
    //     ArrayExpression: 'first',
    //     ObjectExpression: 'first',
    //   },
    // ],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true },
    ],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-case-declarations': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    '@typescript-eslint/no-var-requires': 'off',
    'no-constant-condition': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Index signature
          'signature',

          // Fields
          'public-field',
          'protected-field',
          'private-field',
          'static-field',
          'field',

          // Constructors
          'constructor',

          // Methods
          'public-method',
          'public-decorated-method',

          'protected-method',
          'protected-decorated-method',

          'private-method',
          'private-decorated-method',

          'static-method',
          'decorated-method',

          'method',
        ],
      },
    ],
  },
};
