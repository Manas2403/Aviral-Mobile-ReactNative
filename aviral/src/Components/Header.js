import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {goBack} from '../Utils/NavigationRef';

const CustomHeader = ({back, route, navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  // console.log(route.name);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('creds');
    setVisible(false);
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };

  const handleCreators = () => {
    setVisible(false);
    navigation.navigate('Creators');
  };

  return (
    <Appbar.Header
      dark={true}
      mode="center-aligned"
      statusBarHeight={0}
      style={{backgroundColor: '#4f378b'}}>
      {back && (
        <Appbar.BackAction
          color="#ffffff"
          onPress={() => {
            goBack();
          }}
        />
      )}
      <Appbar.Content title={route.name} color="#ffffff" />
      {route.name === 'Aviral' && (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="#ffffff"
              onPress={openMenu}
            />
          }>
          <Menu.Item onPress={handleCreators} title="Creators" />
          <Menu.Item onPress={handleLogout} title="Logout" />
        </Menu>
      )}
    </Appbar.Header>
  );
};

export default CustomHeader;
