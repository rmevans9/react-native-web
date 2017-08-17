const plugin = require('../rewrite-paths');
const pluginTester = require('babel-plugin-tester');

pluginTester({
  plugin,
  snapshot: true,
  tests: [
    // apis
    "import { StyleSheet } from 'react-native';",
    "import { Animated, Platform, StyleSheet as MyStyleSheet } from 'react-native';",
    // components
    "import { View } from 'react-native';",
    "import { Switch, Text, View as MyView } from 'react-native';",
    "import { Touchable, TouchableHighlight } from 'react-native';",
    // modules
    "import { createDOMElement, render } from 'react-native';",
    // proptypes
    "import { ColorPropType, ViewPropTypes } from 'react-native';",
    // other
    "import { InvalidThing, View } from 'react-native';",
    "import * as RNW from 'react-native';"
  ]
});
