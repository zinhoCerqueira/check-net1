import MainContainer from '../components/MainContainer'
import '../styles/globals.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzH-6cfx41Q3tkwYDUGnoxB5_7Akeoq7Y",
  authDomain: "rangocheck.firebaseapp.com",
  projectId: "rangocheck",
  storageBucket: "rangocheck.appspot.com",
  messagingSenderId: "879140043359",
  appId: "1:879140043359:web:47217d4695bc805c8439ea",
  measurementId: "G-MZMMH5NYDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
