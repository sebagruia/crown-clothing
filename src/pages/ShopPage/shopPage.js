import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from "../../SHOP_DATA";

class ShopPage extends Component {
  constructor(props){
      super(props);

      this.state={
        collections:SHOP_DATA
      }
  }
  render (){
    const {collections} = this.state;
      return(
        <div className="shop-page">
          {
            collections.map(collection=>(
              <CollectionPreview  key={collection.id} title={collection.title} items={collection.items}/>
            ))
          }
        </div>

      );
  }
}

export default ShopPage;