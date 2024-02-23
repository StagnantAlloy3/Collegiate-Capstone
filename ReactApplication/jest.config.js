//This is a config file for JEST to taylor the expected behavior for the application
module.exports = {

    // This sets the preset to react-native
    preset: 'react-native',

    //This is to ignore the .png, .jpg, .jpeg, .gif, .webp, .svg files
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.js"
    },

    //This ignores the react-native-vector-icons module
    transformIgnorePatterns: [
        "node_modules/(?!(react-native|react-native-vector-icons|@react-native)/)"
    ],
    //This transforms the .js files using babel-jest
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
};