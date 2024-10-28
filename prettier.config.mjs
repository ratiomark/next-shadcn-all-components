/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
	"plugins": [
		"prettier-plugin-tailwindcss"
	],
	"tailwindConfig": "./tailwind.config.ts",
	"arrowParens": "avoid",
	"bracketSpacing": true,
	"jsxBracketSameLine": false,
	"printWidth": 120,
	"maxAttributesPerLine": 3,
	"semi": false,
	"singleQuote": true
}