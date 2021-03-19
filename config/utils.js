import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAg7OoYMe27dyyCT7idi6BmNYLFtnAlfMg",
    authDomain: "alensao-327f5.firebaseapp.com",
    projectId: "alensao-327f5",
    storageBucket: "alensao-327f5.appspot.com",
    messagingSenderId: "722312888769",
    appId: "1:722312888769:web:22c24bbe205e0fffa06f40",
    measurementId: "G-KL7V8DX7ZQ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  };

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db,  storage };

export const createUserProfile = async (user ,otherData , photoURL) => {
  if (!user) {
    return;
  }
  const userRef = db.collection("users").doc(`${user.uid}`);
  const snapshot = await userRef.get();
  const createdAt = new Date().toDateString();
  if (!snapshot.exists) {

    try {
      userRef.set({
        email: user.email,
        createdAt: createdAt,
        verified: user.emailVerified,
        photoURL: photoURL,
        ...otherData,
      });
    } catch {
      console.log("message");
    }
  }
  return userRef;
};

export const createUserOffre = async (id,data, pdf) => {

   const offreRef= db.collection("users").doc(`${id}`).collection("offre").doc();
   const createdAt = new Date().toDateString();
   await offreRef.set({
     createdAt:createdAt,
     pdf:pdf,
     ...data
   })

   return offreRef.id;
}

export const createOffre = async ( id,data , pdf) => {
  const offreRef = db.collection("offre").doc(`${id}`);
  const createdAt = new Date().toDateString();

  await offreRef.set({
    id:id,
    createdAt:createdAt,
    pdf:pdf,
    ...data
  })

  return offreRef;
}


console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');