import React, { Fragment, useEffect, useState } from 'react';
import './collectionPage.styles.scss';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = () => {
  const [collection, setCollection] = useState(null);
  let { collectionId } = useParams();
  const allCollections = useSelector((state) => state.shopReducer.collections);

  useEffect(() => {
    if (allCollections) {
      setCollection(allCollections[collectionId]);
    }
  }, [collectionId, allCollections]);

  return (
    <Fragment>
      {collection && (
        <div className="collection-page">
          <h2 className="title">{collection.title}</h2>
          <div className="items">
            {collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CollectionPage;
