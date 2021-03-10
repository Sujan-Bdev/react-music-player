import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "assets/img/Logo/logo.svg";
import {
  AiOutlineReload,
  AiFillPlayCircle,
  AiFillHeart,
  AiFillFolder,
} from "react-icons/ai";
import { MdVolumeUp, MdAddCircle } from "react-icons/md";
import { FaMicrophone, FaMusic } from "react-icons/fa";
import { BiRadio, BiAlbum, BiPlay } from "react-icons/bi";

const { Sider } = Layout;

const { ItemGroup, Item } = Menu;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
  //   const [sideMenu] = useState([
  //     {
  //       title: "Menu",
  //       subMenu: [
  //         {
  //           id: "1",
  //           subTitle: "Explore",
  //           icon: "",
  //         },
  //         {
  //           id: "2",
  //           subTitle: "Genres",
  //           icon: "",
  //         },
  //         {
  //           id: "3",
  //           subTitle: "Albums",
  //           icon: "",
  //         },
  //         {
  //           id: "4",
  //           subTitle: "Artists",
  //           icon: "",
  //         },
  //         {
  //           id: "5",
  //           subTitle: "Radio",
  //           icon: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Library",
  //       subMenu: [
  //         {
  //           id: "1",
  //           subTitle: "Recent",
  //           icon: "",
  //         },
  //         {
  //           id: "2",
  //           subTitle: "Albums",
  //           icon: "",
  //         },
  //         {
  //           id: "3",
  //           subTitle: "Favourites",
  //           icon: "",
  //         },
  //         {
  //           id: "4",
  //           subTitle: "Local",
  //           icon: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "PLAYLIST",
  //       subMenu: [
  //         {
  //           id: "1",
  //           subTitle: "Create New",
  //           icon: "",
  //         },
  //         {
  //           id: "2",
  //           subTitle: "Design Flow",
  //           icon: "",
  //         },
  //         {
  //           id: "3",
  //           subTitle: "Best of 2020",
  //           icon: "",
  //         },
  //         {
  //           id: "4",
  //           subTitle: "Nigeria Jams",
  //           icon: "",
  //         },
  //       ],
  //     },
  //   ]);

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider
      className="sidebar"
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <Menu defaultSelectedKeys={["1"]} mode="inline" className="menu">
        <ItemGroup title="Menu">
          <Item key="1" icon={<AiFillPlayCircle />}>
            Explore
          </Item>
          <Item key="2" icon={<MdVolumeUp />}>
            Genres
          </Item>
          <Item key="3" icon={<BiAlbum />}>
            Albums
          </Item>
          <Item key="4" icon={<FaMicrophone />}>
            Artists
          </Item>
          <Item key="5" icon={<BiRadio />}>
            Radio
          </Item>
        </ItemGroup>

        <ItemGroup title="Library">
          <Item key="6" icon={<AiOutlineReload />}>
            Recent
          </Item>
          <Item key="7" icon={<FaMusic />}>
            Albums
          </Item>
          <Item key="8" icon={<AiFillHeart />}>
            Favourites
          </Item>
          <Item key="9" icon={<AiFillFolder />}>
            Local
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
