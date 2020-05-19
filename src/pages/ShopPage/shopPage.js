import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner.js/with-spinner";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../CollectionPage/collectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { setShopCollections } from "../../redux/shop/shop.actions";

// The setup for Loading Component
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// +++++++++++++++++++++++++++++++

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { setCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    //====this is the way set the collection using Firebase firestore onsnap() method====
    // collectionRef.onSnapshot(async (snapShot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapShot);
    //   setCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    //==== This is the way to set collections using the get() method====
    collectionRef.get()
    .then((snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      setCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCollections: (object) => dispatch(setShopCollections(object)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
