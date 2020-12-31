import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAUNTDHKBSVtPfST7RcEgQoax7r4bSgY2M',
    authDomain: 'ecom-universal.firebaseapp.com',
    projectId: 'ecom-universal',
    storageBucket: 'ecom-universal.appspot.com',
    messagingSenderId: '19542990382',
    appId: '1:19542990382:web:b4d9498b2851bd202349bf',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export default firebase;
