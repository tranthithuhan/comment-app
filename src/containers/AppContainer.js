import React, {Component} from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router';
import {Layout, Icon} from 'antd';
import AppMenu from "../components/AppMenu";
import {MAIN_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from "../index";
import ProductList from "./ProductList";

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
            <Layout>
                <AppMenu currentRoute={this.props.location.pathname}
                         siderIsCollapsed={this.state.siderIsCollapsed}
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
                            <Route exact key={MAIN_PAGE_ROUTE} path={MAIN_PAGE_ROUTE} render={() =>
                                <div>
                                    <div className="app-logo"/>
                                    <h1>Hello</h1>
                                </div>
                            }/>
                            <Route exact key={PRODUCT_PAGE_ROUTE} path={PRODUCT_PAGE_ROUTE} component={ProductList}/>
                            <Redirect to={MAIN_PAGE_ROUTE}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(AppContainer);
