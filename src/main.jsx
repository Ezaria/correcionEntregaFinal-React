
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FilterProvider from './context/filters.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbdQ4SMPWY0Ov8fIfAPaBHXaDpAh-23gg",
  authDomain: "shoping-demo-6e7d9.firebaseapp.com",
  projectId: "shoping-demo-6e7d9",
  storageBucket: "shoping-demo-6e7d9.appspot.com",
  messagingSenderId: "655937769158",
  appId: "1:655937769158:web:ef256e1958d3aa414011c7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <App />
  </FilterProvider>,
)
