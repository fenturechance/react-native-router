import React , { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, ActivityIndicator, FlatList, Picker, Slider, Switch, SectionList , Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Index extends Component {    
  state = {
      isLoading : false,
      dataSource : [],
      language: '',
      switchValue: true,
      sections : [
        {title : 'title1' , data : ['items1','items2']},
        {title : 'title2' , data : ['items3','items4']},
        {title : 'title3' , data : ['items5','items6']},
      ]
  }

  changePicker() {

  }
  changeSwitchValue = (switchValue) => {
    this.setState({ switchValue})
  }

  goToAbout = () => {
    Actions.about({ title: 'About Me', user: "dmoon" });
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then( rs =>rs.json() )
    .then( rsJson  => {
      this.setState({
        isLoading : false,
        dataSource : rsJson.movies,
      })
    }).catch(error => { console.log(error) })
  };

  render() {

    if(this.state.isLoading){
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ padding : 10 }}>
        <FlatList
          data = { this.state.dataSource }
          renderItem = { ({item}) => <Text>{item.title}</Text> }
          keyExtractor = { (item , index) => index.toString() }
        />
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.changePicker}
          >
          <Picker.Item label="java" value="java"/>
          <Picker.Item label="js" value="js"/>
        </Picker>
        <Slider
          maximumValue={25}
          minimumValue={1}
          />
        <Switch
          value={this.state.switchValue}
          onValueChange={this.changeSwitchValue}
          />
        <SectionList
          renderSectionHeader={({ section: { title } }) => <Text style={styles.headerStyle}>{ title }</Text> }
          renderItem={({ item, index, section }) => <Text key={ index }>{ item }</Text>  }
          sections={this.state.sections}
          keyExtractor={(item,index) => item + index}
          />
        <Button 
            onPress={this.goToAbout}
            title="go to about"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerStyle : {
        backgroundColor : '#0a0',
        color : '#fff'
    }
});