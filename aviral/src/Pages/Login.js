import * as React from 'react';
import {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import {logUser} from '../Utils/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

export default function Login({navigation}) {
  let [username, setUsername] = useState(null),
    [password, setPassword] = useState(null),
    [loading, setLoading] = useState(false),
    [toggle, setToggle] = useState(false);
  let passInput = useRef(null);
  const handleLogin = async () => {
    setLoading(true);
    const res = await logUser({username: username, password: password});
    setLoading(false);
    if (res.data.user_group === null) {
      alert('Wrong Credentials');
      return;
    }
    await AsyncStorage.setItem(
      'creds',
      JSON.stringify({
        username: username,
        password: password,
      }),
    );
    navigation.reset({
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
  };
  const handleToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <View style={styles.innerCont}>
          <Text
            variant="headlineLarge"
            style={{marginBottom: 20, fontWeight: 'bold', color: '#4f378b'}}>
            LDAP Login
          </Text>
          <TextInput
            mode="outlined"
            label="Username"
            theme={{roundness: 20}}
            value={username}
            returnKeyType="next"
            onSubmitEditing={() => passInput.current.focus()}
            blurOnSubmit={false}
            onChangeText={text => setUsername(text)}
            style={styles.input}
            outlineColor="#666666"
          />
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry={!toggle ? true : false}
            theme={{roundness: 20}}
            value={password}
            ref={passInput}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            outlineColor="#666666"
            returnKeyType="go"
            right={
              <TextInput.Icon
                icon={toggle ? 'eye' : 'eye-off'}
                style={{marginTop: 14}}
                onPress={handleToggle}
              />
            }
          />
          <Button
            dark={true}
            mode="contained"
            loading={loading}
            style={{width: '100%', marginTop: 24, height: 45}}
            onPress={handleLogin}>
            Login
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  innerCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    width: '100%',
    height: 45,
    marginBottom: 10,
    paddingLeft: 12,
  },
});
