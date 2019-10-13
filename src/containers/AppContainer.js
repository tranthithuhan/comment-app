import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router';
import {Layout, Icon} from 'antd';
import {compose} from 'redux';

import AppMenu from "./AppMenu";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";

import {userIsAuthenticatedRedir} from "../utils/utils";

import {MAIN_PAGE_ROUTE, PRODUCT_ITEM_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from "../Main";

export class AppContainer extends Component {
    state = {
        siderIsCollapsed: false,
    };

    toggle = () => {
        this.setState({
            siderIsCollapsed: !this.state.siderIsCollapsed,
        });
    };

    goTo = (route) => {
        this.props.history.push(route);
    };

    render() {
        return (
            <Layout className="app-container container">
                <AppMenu siderIsCollapsed={this.state.siderIsCollapsed}
                         onClick={this.goTo}/>

                <Layout>
                    <Layout.Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.siderIsCollapsed ? 'right' : 'left'}
                            onClick={this.toggle}
                        />
                    </Layout.Header>
                    <Layout.Content>
                        <Switch>
                            <Route exact key={MAIN_PAGE_ROUTE} path={MAIN_PAGE_ROUTE} component={ProductList}/>
                            <Route exact key={PRODUCT_PAGE_ROUTE} path={PRODUCT_PAGE_ROUTE} component={ProductList}/>
                            <Route exact key={PRODUCT_ITEM_PAGE_ROUTE} path={PRODUCT_ITEM_PAGE_ROUTE}
                                   component={ProductItem}/>

                        </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default compose(
    withRouter,
    userIsAuthenticatedRedir
)(AppContainer);
