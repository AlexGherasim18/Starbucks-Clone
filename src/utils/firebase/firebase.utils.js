import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcidrdYfmyJMtlPnx6STdi7HpBXjCY7_o",
  authDomain: "starbucks-b93ba.firebaseapp.com",
  projectId: "starbucks-b93ba",
  storageBucket: "starbucks-b93ba.appspot.com",
  messagingSenderId: "971912136027",
  appId: "1:971912136027:web:45dea747d7445b247b067e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.name.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done')
}

export const getCategoriesAndDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  //if user data does not exists
  if(!userSnapShot.exists()) {
    //if it doesnt exists, create/set document with the data from userAuth
    const { firstName, lastName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        firstName,
        lastName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  //check if user data exists
  return userSnapShot;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  await signOut(auth);
  window.location.reload(false);
}
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

