import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getFirestore, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_AUTH_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// init firebase app
const firebaseApp = initializeApp(firebaseConfig);

// init services
const db = getFirestore(firebaseApp);

// collection ref
// const colRef = collection(db, '');

// init storage
const storage = getStorage();
const metadata = {
  contentType: 'image/jpeg',
};

// init auth
const auth = getAuth(firebaseApp);

export { auth, storage, metadata };
// export { auth, colRef };
export default db;
