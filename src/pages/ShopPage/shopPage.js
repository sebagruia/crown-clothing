import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collectionPage/collectionPage";


const ShopPage = ({ match }) => { //"match" prop is passed automaticaly from the Route component in the App component
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component = {CollectionPage}/>
     
    </div>
  );
};


export default ShopPage;
