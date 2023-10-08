
import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

export default function Home ({navigation}) {
  const { user, logout } = useContext(AuthContext);
    return (
      <View>
        <Text>Home Screen</Text>
        <Text>Welcome user {user.uid}</Text>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => navigation.navigate('List')}
        />
          <Button
          title="Logoff"
          color="green"
          onPress={() => logout()}
        />
      </View>
    );
  }
