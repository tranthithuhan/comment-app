import React, {Component} from 'react';
import { Comment, List  } from 'antd';
import moment from "moment";

export default class CommentList extends Component {

    render() {
        const {comments} = this.props;

        return (
            <List
                dataSource={comments}
                itemLayout="horizontal"
                renderItem={comment => <Comment
                    {...comment}
                    author={comment.author.name}
                    avatar={comment.author.avatar}
                    datetime={moment(comment.author.datetime).format("DD/MM/YYYY hh:mm")}
                />}
            />
        );
    }
}
