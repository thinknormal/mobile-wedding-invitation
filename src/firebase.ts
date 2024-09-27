import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyAdTVT0Gcreagomw8kkZoJ0Sl4LhxOrVhQ",
    authDomain: "mobile-wedding-invitatio-535c2.firebaseapp.com",
    databaseURL: "https://mobile-wedding-invitatio-535c2-default-rtdb.firebaseio.com",
    projectId: "mobile-wedding-invitatio-535c2",
    storageBucket: "mobile-wedding-invitatio-535c2.appspot.com",
    messagingSenderId: "504297080797",
    appId: "1:504297080797:web:5276862d652a2eee8b9834",
    measurementId: "G-941GBPMC9Z"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const realtimeDb = getDatabase(firebaseApp);
