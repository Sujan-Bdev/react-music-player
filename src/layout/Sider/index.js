import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import * as path from "router/path";
import logo from "assets/img/Logo/logo.svg";
import {
  AiOutlineReload,
  AiFillPlayCircle,
  AiFillHeart,
  AiFillFolder,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { MdVolumeUp, MdAddCircle } from "react-icons/md";
import { FaMicrophone, FaMusic } from "react-icons/fa";
import { BiRadio, BiAlbum, BiPlay } from "react-icons/bi";

const { Sider } = Layout;

const { ItemGroup, Item } = Menu;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      className="sidebar"
      collapsible
      collapsed={collapsed}
      trigger={null}
      breakpoint="md"
      onBreakpoint = {broken => {
        setCollapsed(broken)
      }}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div onClick={toggleCollapsed} className="toggle-menu">
        {React.createElement(
          collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold
        )}
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline" className="menu">
        <ItemGroup title="Menu">
          <Item key="1" icon={<AiFillPlayCircle />}>
            <NavLink to={path.HOME} exact activeClassName="active">
              Explore
            </NavLink>
          </Item>
          <Item key="2" icon={<MdVolumeUp />}>
            <NavLink to={path.GENRES} activeClassName="active">
              Genres
            </NavLink>
          </Item>
          <Item key="3" icon={<BiAlbum />}>
            <NavLink to={path.ALBUMS} activeClassName="active">
              Albums
            </NavLink>
          </Item>
          <Item key="4" icon={<FaMicrophone />}>
            <NavLink to={path.ARTISTS} activeClassName="active">
              Artists
            </NavLink>
          </Item>
          <Item key="5" icon={<BiRadio />}>
            <NavLink to={path.RADIO} activeClassName="active">
              Radio
            </NavLink>
          </Item>
        </ItemGroup>

        <ItemGroup title="Library">
          <Item key="6" icon={<AiOutlineReload />}>
            <NavLink to={path.RECENT} activeClassName="active">
              Recent
            </NavLink>
          </Item>
          <Item key="7" icon={<FaMusic />}>
            <NavLink to={path.ALBUMS} activeClassName="active">
              Albums
            </NavLink>
          </Item>
          <Item key="8" icon={<AiFillHeart />}>
            <NavLink to={path.FAVOURITES} activeClassName="active">
              Favourites
            </NavLink>
          </Item>
          <Item key="9" icon={<AiFillFolder />}>
            <NavLink to={path.LOCAL} activeClassName="active">
              Local
            </NavLink>
          </Item>
        </ItemGroup>

        <ItemGroup title="Playlist">
          <Item key="10" icon={<MdAddCircle />}>
            Create New
          </Item>
          <Item key="11" icon={<BiPlay />}>
            Design Flow
          </Item>
          <Item key="12" icon={<BiPlay />}>
            Best of 2020
          </Item>
          <Item key="13" icon={<BiPlay />}>
            Nigeria Jams
          </Item>
        </ItemGroup>
      </Menu>
    </Sider>
  );
};

export default Index;
