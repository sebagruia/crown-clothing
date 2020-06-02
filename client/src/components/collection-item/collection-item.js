import React from "react";
import "./collection-item.styles.scss";
import {connect} from "react-redux";
import CustomButton from "../custom-button/custom-button";
import {addItemsToFirestore} from '../../firebase/firebase.utils';
import {createStructuredSelector} from "reselect";
import {selectCurrentUserId} from "../../redux/user/user.selectors";

const CollectionItem = (props) => {
 
    const {item, currentUserId } = props;
    const {name, price, imageUrl} = item;

    const handleAddToCart = ()=>{
        addItemsToFirestore('cartItems', item, currentUserId);
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

const mapStateToProps = createStructuredSelector({
    currentUserId:selectCurrentUserId
})
export default connect(mapStateToProps)(CollectionItem);