import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Layout, Form, Icon, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {login} from "../reducers/reducer";
import {MAIN_PAGE_ROUTE} from "../Main";

export class ProductList extends Component {
    state = {
        username: null,
        password: null
    };

    handleValueChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;

        this.props.login(username, password)
            .then(e => {
                this.props.history.push(MAIN_PAGE_ROUTE);
            });
    };

    render() {
        return (
            <Layout className="container align-items-center justify-content-center">
                <Form onSubmit={this.handleSubmit} onChange={this.handleValueChange} className="login-form">
                    <Form.Item>
                        <Input
                            name="username"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Votre identifiant"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            name="password"
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Votre mot de passe"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Connexion
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    me: state.reducer.me
});

export default compose(
    withRouter,
    connect(mapStateToProps, {login})
)(ProductList);
