import {
  combine,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  toml,
  typescript,
  unicorn,
  react,
  yaml,
} from "@antfu/eslint-config"

export default combine(
  ignores(),
  javascript(),
  comments(),
  node(),
  jsdoc(),
  imports(),
  unicorn(),
  typescript({
    overrides: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "node/prefer-global/process": "off",
    },
  }),
  react({
    overrides: {
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": "off",
      "react/no-array-index-key": "off",
    },
  }),
  jsonc(),
  yaml(),
  toml(),
  markdown(),
)
