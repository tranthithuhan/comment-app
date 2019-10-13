import React, {Component} from 'react';
import {withRouter, Route} from 'react-router';
import { List, Avatar } from 'antd';
import {connect} from 'react-redux';
import { compose} from 'redux';
import {PRODUCT_ITEM_PAGE_ROUTE} from "../Main";

export class ProductList extends Component {
    handleSelectProduct = (productId) => () => {
      this.props.history.push(PRODUCT_ITEM_PAGE_ROUTE.replace(":productId", productId));
    };

    render() {
        const products = this.props.products;

        return (
            <List
                itemLayout="horizontal"
                className="product-list"
                dataSource={products}
                renderItem={product => (
                    <List.Item onClick={this.handleSelectProduct(product.id)}>
                        <List.Item.Meta
                            avatar={<div className="app-logo"/>}
                            title={product.name}
                            description={product.description}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    products: state.reducer.products
});

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(ProductList);
