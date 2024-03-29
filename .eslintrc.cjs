module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:import/recommended",
        "airbnb"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "react/function-component-definition": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    }
}
