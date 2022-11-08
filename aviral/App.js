import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import Score from './src/Pages/Score';
import CustomHeader from './src/Components/Header';
import {navigationRef} from './src/Utils/NavigationRef';
import {logUser} from './src/Utils/Api';

const Stack = createStackNavigator();
const App = () => {
  let [firstScreen, setFirstScreen] = useState('Login');
  async function startUp() {
    let creds = await AsyncStorage.getItem('creds');
    if (creds) {
      const res = await logUser(JSON.parse(creds));
      if (res.data.user_group) {
        navigationRef.current.reset({
          index: 0,
          routes: [
            {
              name: 'Aviral',
              params: {
                jwt_token: res.data.jwt_token,
                session: res.data.session_id,
              },
            },
          ],
        });
      }
    }
    SplashScreen.hide();
  }
  useEffect(() => {
    startUp();
  });
  return (
    <PaperProvider>
      <StatusBar backgroundColor={'#4f378b'} barStyle="default" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={firstScreen}
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
