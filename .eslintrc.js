module.exports = {
    rules: {
        'prefer-destructuring': 'warn',
        'class-methods-use-this': 'off',
        'no-unused-expressions': 'off',
        'global-require': 'off',
        'func-names': 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'no-magic-numbers': 'off',
        'no-useless-escape': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        browser: true,
        $: true,
        $$: true,
        driver: true,
        expect: true,
        document: true,
    },
    env: {
        mocha: true,
    },
    extends: ['airbnb-base', 'prettier'],
};
