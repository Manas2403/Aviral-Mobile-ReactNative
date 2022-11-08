import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import {getDashboard, getSessions} from '../Utils/Api';
import SafeAreaView from 'react-native-safe-area-view';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Home({navigation, route}) {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(route.params.session || null);
  const jwt_token = route.params.jwt_token;
  const [data, setData] = useState([]);
  const [dashboard, setDashboard] = useState();

  function handleViewScore() {
    if (!session) {
      alert('Please select a session');
      return;
    }
    navigation.navigate('Score', {session: session, jwt_token: jwt_token});
  }

  const setSessions = async () => {
    const res = await getSessions();
    setData(res.data);
  };
  const setUserDashboard = async () => {
    const res = await getDashboard(jwt_token, session);
    console.log(res.data);
    setDashboard(res.data);
  };
  React.useEffect(() => {
    setSessions();
    setUserDashboard();
  }, []);
  if (!dashboard)
    return <ActivityIndicator animating={true} style={{marginTop: 20}} />;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => {
          setOpen(false);
        }}>
        <View style={styles.innerCont}>
          <View style={styles.profileCard}>
            <Text style={{fontSize: 15}}>Welcome</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {dashboard.student_id}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>
              {(
                dashboard.first_name +
                ' ' +
                dashboard.middle_name +
                ' ' +
                dashboard.last_name
              ).trim()}
            </Text>
            <Text style={{fontSize: 14}}>{dashboard.program}</Text>
            <Text style={{fontSize: 14}}>{dashboard.semester} Semester</Text>
            <View style={styles.gpaRow}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                GPA:{' '}
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color:
                      dashboard.cgpi < 7
                        ? 'red'
                        : dashboard.cgpi < 8
                        ? 'orange'
                        : 'green',
                  }}>
                  {dashboard.cgpi}
                </Text>
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Credits: {dashboard.completed_core}/
                {dashboard.total_core_credits}
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
