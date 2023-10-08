import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import {
  TouchableHighlight,
  TextInput,  
  Alert
}from 'react-native';


export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  return (
  <View style={styles.container}>
      <Text style={styles.text}>Welcome user {user.uid}</Text>
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
  </View>
  );


let addItem = item => {
  database().ref('/items').push({
    name: item
  });
};

function AddItem (){
  const [name, onChangeText] = React.useState(0);
 
 const  handleSubmit = () => {
   addItem(name);
   Alert.alert('Item saved successfully');
 };
}
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});