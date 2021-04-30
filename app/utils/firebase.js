import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAAIohzJ6XzpuYGAM5oySJkFn9Fcg7TRAQ",
    authDomain: "smart-parking-9e55f.firebaseapp.com",
    databaseURL: "https://smart-parking-9e55f-default-rtdb.firebaseio.com",
    projectId: "smart-parking-9e55f",
    storageBucket: "smart-parking-9e55f.appspot.com",
    messagingSenderId: "627346525528",
    appId: "1:627346525528:web:aae8c522a4e325ccebe92d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);