import React from "react";
import { Menu } from "antd";

const { ItemGroup, Item } = Menu;

const SideMenus = ({ title, subMenu }) => {
  return (
    <ItemGroup title={title}>
      {subMenu.map((item) => (
        <Item key={item.key}>{item.subTitle}</Item>
      ))}
    </ItemGroup>
  );
};

export default SideMenus;
