import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Home({navigation}) {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const data = [
    {
      session_id: 'JUL-22',
      name: 'July-Dec 2022',
      current: true,
    },
    {
      session_id: 'SUM-22',
      name: 'SUMMER 2022',
      current: true,
    },
    {
      session_id: 'JAN-22',
      name: 'Jan-June 2022',
      current: true,
    },
    {
      session_id: 'JUL-21',
      name: 'July-Dec 2021',
      current: true,
    },
    {
      session_id: 'SUM-21',
      name: 'SUMMER 2021',
      current: false,
    },
    {
      session_id: 'JAN-21',
      name: 'Jan-June 2021',
      current: true,
    },
    {
      session_id: 'JUL-20',
      name: 'July-Dec 2020',
      current: true,
    },
    {
      session_id: 'SUM-20',
      name: 'SUMMER 2020',
      current: false,
    },
    {
      session_id: 'JAN-20',
      name: 'Jan-June 2020',
      current: false,
    },
    {
      session_id: 'JUL-19',
      name: 'July-Dec 2019',
      current: false,
    },
    {
      session_id: 'SUM-19',
      name: 'SUMMER 2019',
      current: false,
    },
    {
      session_id: 'JAN-19',
      name: 'Jan-June 2019',
      current: false,
    },
    {
      session_id: 'JUL-18',
      name: 'July-Dec 2018',
      current: false,
    },
  ];
  let gpa = '8.54';
  let color = 'green';
  if (Number(gpa) < 7) {
    color = 'red';
  } else if (Number(gpa) < 8) {
    color = 'orange';
  }
  function handleViewScore() {
    if (!session) {
      alert('Please select a session');
      return;
    }
    navigation.navigate('Score', {session_id: session});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerCont}>
        <View style={styles.profileCard}>
          <Text style={{fontSize: 15}}>Welcome</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>IEC2021002</Text>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Anurag Jain</Text>
          <Text style={{fontSize: 14}}>B.Tech.(ECE)</Text>
          <Text style={{fontSize: 14}}>Third Semester</Text>
          <View style={styles.gpaRow}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              GPA:{' '}
              <Text style={{fontWeight: 'bold', fontSize: 16, color: color}}>
                {gpa}
              </Text>
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Credits: 42/140
            </Text>
          </View>
        </View>
        <View style={styles.buttonCont}>
          <DropDownPicker
            schema={{label: 'name', value: 'session_id'}}
            open={open}
            value={session}
            items={data}
            setOpen={setOpen}
            setValue={setSession}
            placeholder="Select a session"
            style={{borderColor: '#4f378b', borderWidth: 2, marginBottom: 12}}
          />
          <Button
            dark={true}
            mode="contained"
            loading={false}
            style={styles.button}
            onPress={handleViewScore}>
            View Score
          </Button>
        </View>
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileCard: {
    width: '100%',
    padding: 16,
    backgroundColor: '#E8DFF9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  buttonCont: {
    width: '100%',
    // marginTop: 24,
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  button: {
    width: '100%',
    // marginTop: 24,
    height: 45,
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
  gpaRow: {
    width: '100%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
