const firebaseConfig = {
    // apiKey: "AIzaSyBbBGaNciNUgyCy672A3r3b5N09fZdVRCY",
    // authDomain: "victress-rose.firebaseapp.com",
    // projectId: "victress-rose",
    // storageBucket: "victress-rose.appspot.com",
    // messagingSenderId: "879306674006",
    // appId: "1:879306674006:web:4f358f30ef2720929f10f7"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;