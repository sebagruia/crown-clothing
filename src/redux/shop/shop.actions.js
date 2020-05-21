import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";



export const fetchCollectionsStart = ()=>{
  return{
    type:FETCH_COLLECTIONS_START,
    payload:true
  }
}

export const fetchCollectionsSucces = (collections)=>{
  return{
    type:FETCH_COLLECTIONS_SUCCESS,
    payload:collections
  }
}

export const fetchCollectionsFailure = (error)=>{
  return{
    type:FETCH_COLLECTIONS_FAILURE,
    payload:error
  }
}

export const fetchCollectionsStartAsync = ()=> async (dispatch) => {
  const collectionRef = firestore.collection("collections");
  try{
    dispatch(fetchCollectionsStart());
    const collectionSnapShot = await collectionRef.get();
    const collections = convertCollectionsSnapshotToMap(collectionSnapShot);
    dispatch(fetchCollectionsSucces(collections))
  }
  catch(error){
    dispatch(fetchCollectionsFailure(error));
  }
};

