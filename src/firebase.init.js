// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBA1fnwyT0Y8kQ3sFu2K3ZwA4UkMyztIB4",
  authDomain: "genius-car-service-f7bd6.firebaseapp.com",
  projectId: "genius-car-service-f7bd6",
  storageBucket: "genius-car-service-f7bd6.appspot.com",
  messagingSenderId: "981310208274",
  appId: "1:981310208274:web:892a78b8eb8ef29909dbcb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;