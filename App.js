import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, ActivityIndicator, FlatList, Picker, Slider, Switch, SectionList} from 'react-native';
import { Router , Stack , Scene } from 'react-native-router-flux';
import Index from './screens/index';
import About from './screens/about';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ paddingTop : 25 , flex : 1 }}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Index} title="home"></Scene>
            <Scene key="about" component={About} title="about"></Scene>
          </Stack>
        </Router>
      </View>
    )
  }
}