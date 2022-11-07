import * as React from 'react';
import {Appbar} from 'react-native-paper';

const CustomHeader = ({naviagtion, back, route}) => {
  console.log(route.name);
  return (
    <Appbar.Header
      dark={true}
      mode="center-aligned"
      statusBarHeight={0}
      style={{backgroundColor: '#4f378b'}}>
      {back && <Appbar.BackAction onPress={() => {}} />}
      <Appbar.Content title={route.name} color="#ffffff" />
    </Appbar.Header>
  );
};

export default CustomHeader;
