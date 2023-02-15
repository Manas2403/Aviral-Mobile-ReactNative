import {useCallback} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import {Avatar, Text} from 'react-native-paper';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(() => {
    Linking.openURL(url);
  }, [url]);

  return <TouchableWithoutFeedback children={children} onPress={handlePress} />;
};

export default function Creators() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 12}}>
      <OpenURLButton url="https://github.com/Manas2403">
        <View style={styles.cardCont}>
          <Avatar.Image
            size={120}
            source={require('../Assets/manas.jpg')}
            style={{marginRight: 24}}
          />
          <Text style={styles.cardText}>Manas Gupta</Text>
        </View>
      </OpenURLButton>
      <OpenURLButton url="https://github.com/BuddyLongLegs">
        <View style={styles.cardCont}>
          <Avatar.Image
            size={120}
            source={require('../Assets/bll.jpg')}
            style={{marginRight: 24}}
          />
          <Text style={styles.cardText}>BuddyLongLegs</Text>
        </View>
      </OpenURLButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardCont: {
    flexDirection: 'row',
    backgroundColor: '#dcd7e8',
    marginHorizontal: 24,
    marginVertical: 12,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
