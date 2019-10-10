import React, {Component} from 'react';
import {Menu, Icon, Layout} from 'antd';
import {MAIN_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from "../index";

export class AppMenu extends Component {
    handleMenuClick = (item) => {
        this.props.onClick(item.key)
    };

    render() {

        const MENU = [
            {path: MAIN_PAGE_ROUTE, name: "Acceuil", icon: "home"},
            {path: PRODUCT_PAGE_ROUTE, name: "Produits", icon: "bars"}
        ];

        let {currentRoute} = this.props;

        return (
            <Layout.Sider trigger={null} collapsible collapsed={this.props.siderIsCollapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[currentRoute]} onClick={this.handleMenuClick}>
                    {
                        MENU.map(menu => {
                            return <Menu.Item key={menu.path}>
                                <Icon type={menu.icon}/>
                                <span>{menu.name}</span>
                            </Menu.Item>
                        })
                    }
                </Menu>
            </Layout.Sider>
        );
    }
}

export default AppMenu;
