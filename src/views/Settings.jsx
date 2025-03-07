import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SettingsScreen;
