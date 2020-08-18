module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: 0,
        indent: [2, 4],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'class-methods-use-this': 'off',
        'no-trailing-spaces': 0,
        'max-len': [1, 150, 4],
        'no-restricted-modules': [0],
        'comma-dangle': [2, 'never'],
        'spaced-comment': 0,
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
        'max-classes-per-file': ['error', 100],
        '@typescript-eslint/ban-ts-ignore': 'off',
        'space-before-function-paren': ['error', 'never']
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
