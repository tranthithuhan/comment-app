import React, {Component} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {connect} from 'react-redux';

import {addComment} from "../reducers/reducer";

export class CommentEditor extends Component {
    state = {
        comment: "",
        isPrivate: false
    };

    handleCommentInput = (event) => {
        this.setState({comment: event.target.value});
    };

    handlePrivateCheckbox = (event) => {
        this.setState({isPrivate: event.target.checked})
    };

    handleAddComment = () => {
        this.props.addComment(this.props.productId, this.state.comment, this.state.isPrivate);
        this.setState({comment: ""});
    };

    render() {
        const {comment, isPrivate} = this.state;

        return (
            <div className="comment-editor">
                <Form.Item>
                    <Input.TextArea rows={4}
                                    value={comment}
                                    placeholder="Ajouter un commentaire"
                                    onChange={this.handleCommentInput}
                                    onPressEnter={this.handleAddComment}/>
                </Form.Item>
                <Form.Item>
                    <Checkbox value={isPrivate}
                              onChange={this.handlePrivateCheckbox}>
                        Privé
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" disabled={!comment.length}
                            onClick={this.handleAddComment} type="primary">
                        Envoyer
                    </Button>
                </Form.Item>
            </div>
        );
    }
}

export default connect(null, {addComment})(CommentEditor);
