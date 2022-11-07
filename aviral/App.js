import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';

import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import Score from './src/Pages/Score';
import CustomHeader from './src/Components/Header';
import {navigationRef} from './src/Utils/NavigationRef';

const Stack = createStackNavigator();
const App = () => {
  return (
    <PaperProvider>
      <StatusBar backgroundColor={'#4f378b'} barStyle="default" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            header: props => <CustomHeader {...props} />,
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Aviral" component={Home} />
          <Stack.Screen name="Score" component={Score} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
