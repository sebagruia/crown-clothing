import React from "react";
import "./collection-preview.styles.scss";
import {useNavigate} from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = (props) => {
  const { title, items } = props;
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(`shop/${title.toLowerCase()}`)

  }
  return (
    <div className="collection-preview">
      <h1 onClick={handleClick} className="title">{title.toUpperCase()} <span>preview</span></h1>
      <div className="preview">
        {items.filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
