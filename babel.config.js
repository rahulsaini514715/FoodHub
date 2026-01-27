// module.exports = {
//   presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
//   plugins: [
//     'react-native-reanimated/plugin', // ✅ Must be last
//   ],
// };

module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel', // ✅ PRESET, NOT plugin
  ],
  plugins: [
    'react-native-reanimated/plugin', // must be last
  ],
};
