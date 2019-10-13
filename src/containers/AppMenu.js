import React, {Component} from 'react';
import {Menu, Icon, Layout, Avatar} from 'antd';

import {compose} from 'redux';
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {logout} from "../reducers/reducer"

import {LOGIN_PAGE_ROUTE, MAIN_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from "../Main";

export class AppMenu extends Component {
    handleMenuClick = (item) => {
        if (item.key === "user") return;
        if (item.key === "logout") {
            return this.props.logout()
                .then(e=> this.props.history.replace(LOGIN_PAGE_ROUTE));
        }

        this.props.onClick(item.key)
    };

    render() {
        const {me} = this.props;

        const MENU = [
            {path: MAIN_PAGE_ROUTE, name: "Acceuil", icon: "home"},
            {path: PRODUCT_PAGE_ROUTE, name: "Produits", icon: "bars"}
        ];


        return (
            <Layout.Sider trigger={null} collapsible collapsed={this.props.siderIsCollapsed}>
                <Menu theme="dark" mode="inline"  onClick={this.handleMenuClick}>
                    <Menu.Item key="user">
                        <Avatar src={me.avatar}/>
                        <span>{me.name}</span>
                    </Menu.Item>
                    {
                        MENU.map(menu => {
                            return <Menu.Item key={menu.path}>
                                <Icon type={menu.icon}/>
                                <span>{menu.name}</span>
                            </Menu.Item>
                        })
                    }
                    <Menu.Item key="logout">
                        <Icon type="logout"/>
                        <span>Déconnecter</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }
}

const mapStateToProps = state => ({
    me: state.reducer.me
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logout})
)(AppMenu);
