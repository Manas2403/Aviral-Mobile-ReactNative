import * as React from 'react';
import {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export default function CourseCard({data}) {
  let gpa = data.gpa;
  let color = 'green';
  if (gpa < 7.5) {
    color = 'red';
  } else if (gpa < 8.5) {
    color = 'orange';
  }
  return (
    <View style={styles.card}>
      <Text style={styles.courseName}>
        {data.name} ({data.course_id})
      </Text>
      <View style={styles.scoreRow}>
        <View style={styles.courseCol}>
          <Text style={styles.ccHeading}>C1</Text>
          <Text>{data.c1_marks}</Text>
        </View>
        <View style={styles.courseCol}>
          <Text style={styles.ccHeading}>C2</Text>
          <Text>{data.c2_marks}</Text>
        </View>
        <View style={styles.courseCol}>
          <Text style={styles.ccHeading}>C3</Text>
          <Text>{data.c3_marks}</Text>
        </View>
        <View style={styles.courseCol}>
          <Text style={styles.ccHeading}>Total</Text>
          <Text>{data.total}</Text>
        </View>
      </View>
      <View style={[styles.scoreRow, {marginBottom: 0}]}>
        <View style={{alignSelf: 'flex-start'}}>
          <Text style={styles.gpaHeading}>
            GPA: <Text style={[styles.gpaHeading, {color: color}]}>{gpa}</Text>
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            width: '25%',
            alignItems: 'flex-start',
          }}>
          <Text>Credits: {data.credits}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4f378b',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    color: '#4f378b',
    marginBottom: 8,
  },
  courseScore: {
    fontSize: 14,
  },
  scoreRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  courseCol: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ccHeading: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  gpaHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
