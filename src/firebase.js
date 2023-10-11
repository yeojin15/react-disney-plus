import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhOTruV17U4Uqy1_MpBl3DsCLj9P-LVLY',
  authDomain: 'disney-plus-app-4a9b3.firebaseapp.com',
  projectId: 'disney-plus-app-4a9b3',
  storageBucket: 'disney-plus-app-4a9b3.appspot.com',
  messagingSenderId: '362733957986',
  appId: '1:362733957986:web:4eb109cdfb2120fc19f23b',
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
