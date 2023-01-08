import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectLoadingSpinner } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionPage from '../../pages/CollectionPage/collectionPage';

const ShopPage = ({ fetchCollectionsStartAsync, isSpinnerLoading }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      {isSpinnerLoading ? (
        <WithSpinner />
      ) : (
        <Routes>
          <Route index element={<CollectionsOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
      )}
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
