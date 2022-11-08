import axios from 'axios';
import * as React from 'react';
const API = 'https://aviral.iiita.ac.in/api';
export const logUser = async obj => {
  try {
    const data = await axios.post(`${API}/login/`, obj);
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};
export const getSessions = async () => {
  const res = await axios.get(`${API}/sessions/`);
  return res;
};
export const getDashboard = async (jwt_token, session) => {
  try {
    const res = await axios.get(`${API}/student/dashboard/`, {
      headers: {
        Authorization: jwt_token,
        Session: session,
      },
    });
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getScore = async (jwt_token, session) => {
  try {
    const res = await axios.get(`${API}/student/enrolled_courses/`, {
      headers: {
        Authorization: jwt_token,
        Session: session,
      },
    });
    return res;
  } catch (e) {
    console.log(e);
    return;
  }
};
