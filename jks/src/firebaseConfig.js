import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4L7yOaZEusDDLXdLPNrC6TxOEcLcJmQM",
    authDomain: "jkskarate.firebaseapp.com",
    projectId: "jkskarate",
    storageBucket: "jkskarate.firebasestorage.app",
    messagingSenderId: "474130930599",
    appId: "1:474130930599:web:018ac3d8778ed034e57482"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
