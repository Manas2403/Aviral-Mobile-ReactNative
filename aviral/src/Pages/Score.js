import * as React from 'react';
import {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import CourseCard from '../Components/CourseCard';
import {getScore} from '../Utils/Api';
export default function Score({navigation, route}) {
  let [scores, setScores] = useState();
  const setUserScore = async () => {
    const res = await getScore(route.params.jwt_token, route.params.session);
    console.log(res);
    setScores(res.data);
  };
  React.useEffect(() => {
    setUserScore();
  }, []);
  let session_id = route.params.session_id;
  console.log(session_id);
  if (!scores)
    return <ActivityIndicator animating={true} style={{marginTop: 20}} />;
  return (
    <ScrollView>
      <View style={{flex: 1, paddingHorizontal: 16, paddingVertical: 12}}>
        {scores.map((score, index) => (
          <CourseCard data={score} key={index} />
        ))}
      </View>
    </ScrollView>
  );
}
