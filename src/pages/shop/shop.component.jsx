import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
  </div>
);

export default ShopPage;

// match is automatically passed in as a prop because it is nested in a route in the app.js
// will going to a url that isnt hats/sneakers/etc break the page?