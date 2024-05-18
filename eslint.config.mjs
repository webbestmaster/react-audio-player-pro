/* eslint-disable sort-keys, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import eslintJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import jest from "eslint-plugin-jest";

/**
 * List of plugins to add
 * react
 * react-hooks
 * babel - maybe not needed
 * JSX-a11y
 * filenames
 * import
 * optimize-regex
 */

export default [
    eslintJs.configs.all,
    ...typescriptEslint.configs.all,
    jest.configs["flat/all"],
    sonarjs.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            parserOptions: {
                project: [
                    "./tsconfig.json",
                ],
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                JSX: true,
                require: true,
                module: true,
                console: true,
            },
        },
        plugins: {
            unicorn: eslintPluginUnicorn,
            // Sonarjs: sonarjs,

        },
        rules: {
            // Jest
            ...jest.configs["flat/all"].rules,
            "jest/require-hook": [
                2,
                {
                    allowedFunctionCalls: [
                        "innerInitialization",
                    ],
                },
            ],

            // React, need to uncomment
            // "react/jsx-uses-react": 2,
            // "react/react-in-jsx-scope": 0,
            // "react/jsx-no-bind": 0,
            // "react/jsx-newline": 0,
            // "react/jsx-filename-extension": [
            //     2,
            //     {
            //         "extensions": [
            //             ".ts",
            //             ".tsx",
            //         ],
            //     },
            // ],
            // "react/no-unused-prop-types": 2,
            // "react/sort-comp": 2,
            // "react/jsx-sort-props": [
            //     2,
            //     {
            //         "reservedFirst": false,
            //         "shorthandLast": false,
            //         "ignoreCase": false,
            //         "callbacksLast": false,
            //         "noSortAlphabetically": false,
            //     },
            // ],
            // "react/jsx-closing-bracket-location": [
            //     2,
            //     "line-aligned",
            // ],
            // "react/forbid-component-props": 0,
            // "react/jsx-indent-props": [
            //     2,
            //     "first",
            // ],
            // "react/jsx-no-literals": 0,
            // "react/require-default-props": 0,
            // "react/require-optimization": 0,
            // "react/jsx-max-depth": [
            //     2,
            //     {
            //         "max": 5,
            //     },
            // ],
            // "react/jsx-tag-spacing": [
            //     2,
            //     {
            //         "closingSlash": "never",
            //         "beforeSelfClosing": "always",
            //         "afterOpening": "never",
            //         "beforeClosing": "never",
            //     },
            // ],
            // "react/jsx-max-props-per-line": [
            //     2,
            //     {
            //         "maximum": 5,
            //     },
            // ],
            // "react/jsx-one-expression-per-line": 0,
            // "react/state-in-constructor": 0,
            // "react/no-set-state": 0,

            // React-hooks, need to uncomment
            // "react-hooks/rules-of-hooks": 2,
            // "react-hooks/exhaustive-deps": 2,

            // Babel, need to uncomment
            // "babel/new-cap": 2,
            // "babel/camelcase": 2,
            // "babel/no-invalid-this": 2,
            // "babel/object-curly-spacing": 2,
            // "babel/quotes": 0,
            // "babel/semi": 2,
            // "babel/no-unused-expressions": 2,
            // "babel/valid-typeof": 2,

            // JSX-a11y, need to uncomment
            // Deprecated
            // "jsx-a11y/label-has-for": 0,
            // "jsx-a11y/no-access-key": 2,
            // "jsx-a11y/no-autofocus": 2,
            // "jsx-a11y/no-onchange": 2,

            // Filenames, need to uncomment
            // "filenames/no-index": 2,
            // "filenames/match-regex": [
            //     2,
            //     "^[a-z\\.\\-\\d]+$",
            //     True
            // ],
            // "filenames/match-exported": 0,

            // Import, need to uncomment
            // "import/no-named-as-default-member": 0,
            // "import/default": 2,
            // "import/no-unused-modules": 2,
            // "import/no-useless-path-segments": 2,
            // "import/no-default-export": 2,
            // "import/order": [
            //     2,
            //     {
            //         "newlines-between": "always-and-inside-groups",
            //         "groups": [
            //             "builtin",
            //             "internal",
            //             "external",
            //             "parent",
            //             "sibling",
            //             "index"
            //         ]
            //     }
            // ],

            // Optimize-regex, need to uncomment
            // "optimize-regex/optimize-regex": 2,

            // Typescript
            "@typescript-eslint/array-type": [
                2,
                {
                    "default": "generic",
                },
            ],
            "@typescript-eslint/ban-ts-comment": 1,
            "@typescript-eslint/naming-convention": [
                2,
                {
                    selector: "typeAlias",
                    format: [
                        "StrictPascalCase",
                    ],
                    suffix: [
                        "Type",
                    ],
                },
                {
                    selector: "enum",
                    format: [
                        "StrictPascalCase",
                    ],
                    suffix: [
                        "Enum",
                    ],
                },
            ],
            "@typescript-eslint/no-shadow": [
                2,
                {
                    builtinGlobals: false,
                    hoist: "all",
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                2,
                {
                    varsIgnorePattern: "[iI]gnored",
                },
            ],
            "@typescript-eslint/no-use-before-define": 2,
            "@typescript-eslint/no-misused-promises": [
                2,
                {
                    checksVoidReturn: {
                        arguments: true,
                        attributes: true,
                        properties: true,
                        returns: true,
                        variables: true,
                    },
                },
            ],
            "@typescript-eslint/no-floating-promises": [
                2,
                {
                    ignoreIIFE: true,
                },
            ],
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": 0,
            // Typescript - defined by eslint
            "@typescript-eslint/space-before-function-paren": 0,
            "@typescript-eslint/indent": 0,
            "@typescript-eslint/comma-dangle": 0,
            "@typescript-eslint/no-magic-numbers": 0,
            "@typescript-eslint/no-extra-parens": 0,
            "@typescript-eslint/lines-around-comment": 0,
            "@typescript-eslint/lines-between-class-members": 0,
            "@typescript-eslint/block-spacing": 0,
            "@typescript-eslint/quotes": 0,
            "@typescript-eslint/use-unknown-in-catch-callback-variable": 0,
            // TODO: enable this
            "@typescript-eslint/prefer-readonly-parameter-types": 0,
            // "@typescript-eslint/prefer-readonly-parameter-types": [
            //    2,
            //    {
            //        "allow": [
            //            {
            //                "from": "package",
            //                "name": "Compiler",
            //                "package": "webpack"
            //            }
            //        ]
            //    }
            // ],

            // Unicorn
            "unicorn/prefer-string-replace-all": 0,
            "unicorn/prefer-node-protocol": 2,
            "unicorn/no-array-callback-reference": 0,
            "unicorn/no-array-for-each": 0,
            "unicorn/filename-case": 2,
            "unicorn/no-array-reduce": 0,
            "unicorn/no-null": 0,
            "unicorn/no-fn-reference-in-iterator": 2,
            "unicorn/prevent-abbreviations": [
                2,
                {
                    replacements: {
                        attr: false,
                        attrs: false,
                        arg: false,
                        args: false,
                        prop: false,
                        props: false,
                        prev: false,
                        dev: false,
                        evt: false,
                        src: false,
                        ref: false,
                    },
                },
            ],

            // eslint
            "padded-blocks": [
                2,
                {
                    blocks: "never",
                    classes: "never",
                    switches: "never",
                },
            ],
            "func-style": [
                2,
                "declaration",
            ],
            "function-call-argument-newline": [
                2,
                "consistent",
            ],
            "max-len": [
                2,
                120,
                4,
                {
                    ignoreComments: true,
                    ignoreUrls: true,
                },
            ],
            "quote-props": [
                2,
                "as-needed",
                {
                    keywords: true,
                    unnecessary: true,
                    numbers: true,
                },
            ],
            quotes: 0,
            "sort-imports": 0,
            "array-element-newline": [
                2,
                "consistent",
            ],
            "one-var": [
                2,
                {
                    "var": "always",
                    let: "never",
                    "const": "never",
                },
            ],
            "arrow-body-style": [
                2,
                "always",
            ],
            "max-statements": [
                2,
                20,
            ],
            "dot-location": [
                2,
                "property",
            ],
            "max-lines-per-function": [
                2,
                600,
            ],
            "object-property-newline": [
                2,
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],
            "multiline-ternary": 0,
            "max-lines": [
                2,
                1000,
            ],
            "newline-per-chained-call": [
                2,
                {
                    ignoreChainWithDepth: 4,
                },
            ],
            "function-paren-newline": 0,
            "capitalized-comments": [
                2,
                "always",
                {
                    ignorePattern: "ignored|webpackChunkName",
                    ignoreInlineComments: true,
                },
            ],
            "prefer-named-capture-group": 0,
            "no-console": 0,
            "no-warning-comments": 0,
            "no-inline-comments": 0,
            "multiline-comment-style": 0,
            "no-ternary": 0,
            "wrap-regex": 0,
            "wrap-iife": [
                2,
                "inside",
            ],
            "max-params": [
                2,
                5,
            ],
            "id-length": [
                2,
                {
                    min: 3,
                    max: 34,
                    exceptions: [
                        "id",
                        "to",
                        "x",
                        "y",
                    ],
                },
            ],
        },
    },
    {
        ignores: [
            // Dist
            "dist/*",
            "dist-server/*",

            // NPM
            "node_modules/*",

            // Report
            "coverage-ts/*",
            "tsc-check/*",
            "coverage/*",

            // Style's d.ts
            // eslint-disable-next-line arrow-body-style, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-argument
            pathToFile => /\S+\.s?css\.d\.ts/u.test(pathToFile),

            // Test
            "test-backstop/*",

            // Static site
            "static-site/*",

            // Storybook
            "storybook-static/*",
        ],
    },
];
