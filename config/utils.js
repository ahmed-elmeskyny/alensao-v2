import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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