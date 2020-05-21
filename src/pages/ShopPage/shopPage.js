import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../CollectionPage/collectionPage";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectLoadingSpinner } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ match, fetchCollectionsStartAsync, isSpinnerLoading }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) =>
          isSpinnerLoading ? (
            <WithSpinner />
          ) : (
            <CollectionsOverview {...props} />
          )
        }
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) =>
          isSpinnerLoading ? <WithSpinner /> : <CollectionPage {...props} />
        }
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSpinnerLoading: selectLoadingSpinner,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
