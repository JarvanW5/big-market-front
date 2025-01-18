module.exports = {
    parser: '@typescript-eslint/parser', // 使用 TypeScript 的解析器
    parserOptions: {
        ecmaVersion: 2020, // 支持最新的 ECMAScript 特性
        sourceType: 'module', // 允许使用 ES 模块
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // 推荐的 TypeScript 规则
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn', // 忽略未使用变量的错误，仅发出警告
        '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-ignore
    },
};
