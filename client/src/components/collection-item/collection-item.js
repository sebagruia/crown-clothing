import React from "react";
import "./collection-item.styles.scss";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button";
import {addItemAction} from "../../redux/cartDropDown/cartDropDown.action";

const CollectionItem = (props) => {
 
    const {dispatch, item } = props;
    const {name, price, imageUrl} = item;

    const handleAddToCart = ()=>{
        dispatch(addItemAction(item));
    }
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">&#8364;{price}</span>
            </div>
            <CustomButton onClick={handleAddToCart} inverted>Add to Cart</CustomButton>
        </div>
    );
}


export default connect()(CollectionItem);