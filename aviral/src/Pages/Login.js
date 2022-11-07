import * as React from 'react';
import {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';

export default function Login({navigation}) {
  let [username, setUsername] = useState(null),
    [password, setPassword] = useState(null);
  let passInput = useRef(null);
  function handleLogin() {
    navigation.reset({index: 0, routes: [{name: 'Aviral'}]});
  }
  return (
    <SafeAreaView style={styles.container}>
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
          onChangeText={text => setUsername(text.toUpperCase())}
          style={styles.input}
          autoComplete="username"
          outlineColor="#666666"
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          theme={{roundness: 20}}
          value={password}
          ref={passInput}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          outlineColor="#666666"
          autoComplete="password"
          returnKeyType="go"
        />
        <Button
          dark={true}
          mode="contained"
          loading={false}
          style={{width: '100%', marginTop: 24, height: 45}}
          onPress={handleLogin}>
          Login
        </Button>
      </View>
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
    paddingHorizontal: 12,
  },
});
