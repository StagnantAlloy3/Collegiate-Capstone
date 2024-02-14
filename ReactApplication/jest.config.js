module.exports = {
    preset: 'react-native',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.js"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(react-native|react-native-vector-icons|@react-native)/)"
    ],
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
};