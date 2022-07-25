module.exports = {
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parser: "babel-eslint", // Uses babel-eslint transforms.
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    plugins: [
        "import"
    ],
    root: true, // For configuration cascading.
    rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/brace-style': 'off',
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        'brace-style': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-param-reassign': ['error', { props: false }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'quote-props': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require'
            }
        ],
        'comma-dangle': ['off', 'never'],
        '@typescript-eslint/comma-dangle': [
            'off',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 'ignore' || 'enforce',
                custom: 'ignore' || 'enforce',
                explicitSpread: 'ignore' || 'enforce'
            }
        ],
        'react/jsx-filename-extension': [0],
        'react/no-unescaped-entities': [0],
        'no-console': 0,
        'react/require-default-props': [
            0,
            { forbidDefaultForRequired: 0, ignoreFunctionalComponents: 0 }
        ],
        'jsx-a11y/label-has-associated-control': [0]
    },
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    }
};