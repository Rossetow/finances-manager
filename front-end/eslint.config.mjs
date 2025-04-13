// @ts-nocheck

import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    {
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            "react-hooks": reactHooks,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "no-console": "warn", // regra eslint
            "react/jsx-no-useless-fragment": "error", // regra React
            "react-hooks/exhaustive-deps": "off", // regra hooks
            "@typescript-eslint/no-unused-vars": "off", // regra typescript
        }
    }
);