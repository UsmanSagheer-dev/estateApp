// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCt8Fp4uimMsRoR8CcfQ55_QqphJzq8LSI",
  authDomain: "estateapp-eb292.firebaseapp.com",
  projectId: "estateapp-eb292",
  storageBucket: "estateapp-eb292.firebasestorage.app",
  messagingSenderId: "1077612117624",
  appId: "1:1077612117624:web:1f6a0240557d4bf1d3778d",
  measurementId: "G-DVZ6K4G9FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);