import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAD1KCK4yxo7jvgfgPve-qcnOxjuVXxeT4",
  authDomain: "crown-db-e1de2.firebaseapp.com",
  databaseURL: "https://crown-db-e1de2.firebaseio.com",
  projectId: "crown-db-e1de2",
  storageBucket: "crown-db-e1de2.appspot.com",
  messagingSenderId: "943374227773",
  appId: "1:943374227773:web:0c7350790629bf1ce38d54",
  measurementId: "G-EZJQE1BYE6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// This function is used to upload Collections to our database whenever we want. I've used it to add the current collection, and after the operation was successful I've deleted the code because otherwise, it would create duplicated entries in Database.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  Object.values(objectsToAdd)
    .map(({ title, items }) => ({ title, items }))
    .forEach((obj) => {
      const newDocRef = collectionRef.doc(); //we call the ref on an empty string bceause doc() has no parameter
      console.log(newDocRef);
      batch.set(newDocRef, obj);
    });
  return await batch.commit();
};

// This function adds items to cartItems collection in Firestore firebase database
export const addItemsToFirestore = async (cartItemKey, itemToAdd, currentUserId) => {
  if (currentUserId) {
    const cartItemsRef = firestore.collection(`/users/${currentUserId}/${cartItemKey}`);
    const cartItemsSnapshot = await cartItemsRef.get();
    const existingCartItem = cartItemsSnapshot.docs.find(
      (cartItem) => cartItem.data().id === itemToAdd.id
    );
  
    if (existingCartItem) {
      const existingCartItemRef = firestore.doc(
        `/users/${currentUserId}/${cartItemKey}/${existingCartItem.id}`
      );
      const existingCartItemSnapshot = await existingCartItemRef.get();
  
      existingCartItemRef.set({
        ...existingCartItemSnapshot.data(),
        quantity: existingCartItemSnapshot.data().quantity + 1,
      });
    } else {
      cartItemsRef.add(itemToAdd);
    }
  }
};

// This function substracts items from cartItems collection in Firestore firebase database
export const substractItemFromFirestore = async (cartItemKey, itemToSubstract, currentUserId) => {
  const cartItemsRef = firestore.collection(`/users/${currentUserId}/${cartItemKey}`);
  const cartItemsSnapshot = await cartItemsRef.get();
  const existingCartItem = cartItemsSnapshot.docs.find(
    (cartItem) => cartItem.data().id === itemToSubstract.id
  );
  if (existingCartItem) {
    const existingCartItemRef = firestore.doc(
      `/users/${currentUserId}/${cartItemKey}/${existingCartItem.id}`
    );
    const existingCartItemSnapshot = await existingCartItemRef.get();

    if (existingCartItemSnapshot.data().quantity > 1) {
      existingCartItemRef.set({
        ...existingCartItemSnapshot.data(),
        quantity: existingCartItemSnapshot.data().quantity - 1,
      });
    } else {
      existingCartItemRef.delete();
    }
  }
};

// This function substracts items from cartItems collection in Firestore firebase database
export const removeItemFromFirestore = async (cartItemKey, itemToRemove, currentUserId)=>{
  const cartItemsRef = firestore.collection(`/users/${currentUserId}/${cartItemKey}`);
  const cartItemsSnapshot = await cartItemsRef.get();
  const cartItemToRemove = cartItemsSnapshot.docs.find(
    (cartItem) => cartItem.data().id === itemToRemove.id
  );
  const cartItemToRemoveRef = firestore.doc(`/users/${currentUserId}/${cartItemKey}/${cartItemToRemove.id}`)
  cartItemToRemoveRef.delete();
}



//This function converts the snapshot from firestore, into a custom Array of objects where we add 2 more properties to every object: routName and id
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  //the array is transformed into an Object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
