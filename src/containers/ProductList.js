import React, {Component} from 'react';
import {withRouter, Route} from 'react-router';
import { List, Avatar } from 'antd';
import {connect} from 'react-redux';

export class ProductList extends Component {

    render() {
        console.log(this.props.products)
        const products = this.props.products;

        return (
            <List
                itemLayout="horizontal"
                dataSource={products}
                renderItem={product => (
                    <List.Item>
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

export default connect(mapStateToProps, null)(ProductList);
