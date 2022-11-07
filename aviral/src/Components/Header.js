import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {goBack} from '../Utils/NavigationRef';

const CustomHeader = ({back, route}) => {
  console.log(route.name);
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
    </Appbar.Header>
  );
};

export default CustomHeader;
