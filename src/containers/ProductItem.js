import React, {Component} from 'react';
import {connect} from 'react-redux';
import get from "lodash/get"

import {Card, Descriptions, Comment, Avatar} from 'antd';
import CommentList from "../components/CommentList";
import CommentEditor from "./CommentEditor";

import {commentsFilter} from "../utils/utils";

export class ProductItem extends Component {

    render() {
        const {product} = this.props;

        if (!product) return "Produit non trouvé";

        const comments = (product.comments || []).filter(comment => {
            return commentsFilter(comment, product.seller.id, this.props.meId);
        });
        return (
            <Card className="product-item">
                <div className="d-flex justify-content-center">
                    <div className="app-logo product-img"/>
                </div>
                <Descriptions title={product.name}>
                    <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
                    <Descriptions.Item label="Vendeur">
                        <div>
                            <Avatar src={product.seller.avatar}/> {product.seller.name}
                        </div>
                    </Descriptions.Item>
                </Descriptions>
                {comments.length && <CommentList comments={comments}/>}
                <Comment content={<CommentEditor productId={product.id}/>}/>
            </Card>
        );
    }
}

const mapStateToProps = (state, props) => {
    const productId = get(props, "match.params.productId");
    const product = state.reducer.products.find(product => product.id == productId);

    return {
        product,
        meId: state.reducer.me.id
    }
};

export default connect(mapStateToProps, null)(ProductItem);
