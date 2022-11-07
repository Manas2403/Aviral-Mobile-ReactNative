import * as React from 'react';
import {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import CourseCard from '../Components/CourseCard';

export default function Score({navigation, route}) {
  let scores = [
    {
      course_id: 'DSD',
      name: 'Digital System Design',
      credits: 4,
      c1_marks: '26.00',
      c2_marks: '29.62',
      c3_marks: '37.00',
      total: '92.62',
      gpa: '10.00',
    },
    {
      course_id: 'EDC',
      name: 'Electronic Devices and Circuits',
      credits: 4,
      c1_marks: '12.50',
      c2_marks: '12.50',
      c3_marks: '27.00',
      total: '52.00',
      gpa: '8.21',
    },
    {
      course_id: 'EFW',
      name: 'Electromagnetic Field and Waves',
      credits: 4,
      c1_marks: '20.00',
      c2_marks: '18.50',
      c3_marks: '25.50',
      total: '64.00',
      gpa: '7.11',
    },
    {
      course_id: 'EWS',
      name: 'Electronic Workshop',
      credits: 2,
      c1_marks: '22.00',
      c2_marks: '25.00',
      c3_marks: '39.00',
      total: '86.00',
      gpa: '9.05',
    },
    {
      course_id: 'UMC',
      name: 'Univariate and Multivariate Calculus',
      credits: 4,
      c1_marks: '15.00',
      c2_marks: '24.00',
      c3_marks: '20.00',
      total: '59.00',
      gpa: '6.81',
    },
    {
      course_id: 'DST',
      name: 'Data Structures',
      credits: 4,
      c1_marks: '25.10',
      c2_marks: '24.00',
      c3_marks: '35.00',
      total: '84.10',
      gpa: '9.87',
    },
  ];
  let session_id = route.params.session_id;
  console.log(session_id);
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
