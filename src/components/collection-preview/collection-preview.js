import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = (props) => {
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} name={item.name} imageUrl = {item.imageUrl} id={item.id} price={item.price}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
