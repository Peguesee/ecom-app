import React, { Component } from 'react';
import './shop.data';
import { Shop_Data } from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}
