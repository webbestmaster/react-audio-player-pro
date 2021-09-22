// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.test.json',
        },
    },
    moduleNameMapper: {
        '^\\S+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    modulePathIgnorePatterns: ['<rootDir>/tsc-check/'],
    preset: 'ts-jest',
    rootDir: '../../',
    setupFilesAfterEnv: ['./test-unit/config/setup-jest.ts'],
    testEnvironment: 'jsdom', // @testing-library/jest-dom
    testTimeout: 10e3,
};
