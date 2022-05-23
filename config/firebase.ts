import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKPi4rS3U7Deoe0BJt4qv1CI897hpJokg',
  authDomain: 'menudrive-92753.firebaseapp.com',
  projectId: 'menudrive-92753',
  storageBucket: 'menudrive-92753.appspot.com',
  messagingSenderId: '617159973789',
  appId: '1:617159973789:web:184c0e3e78f7db7a0ced74',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
