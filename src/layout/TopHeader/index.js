import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Input, Space, Avatar, Image } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";

const { Header } = Layout;
const { Search } = Input;

const Index = () => {
  const [value, setValue] = useState("");
  const prefix = (
    <AiOutlineSearch
      style={{
        fontSize: 16,
        color: `$gray-dark`,
      }}
    />
  );
  const onSearch = (value) => console.log(value);

  return (
    <Header className="top-header">
      {/* <div className="container"> */}
      <nav class="nav__menu">
        <Space size="large">
          <NavLink exact to="/menu" activeClassName="active">
            Menu
          </NavLink>
          <NavLink to="/podcast" activeClassName="active">
            Podcast
          </NavLink>
          <NavLink to="/live" activeClassName="active">
            Live
          </NavLink>
        </Space>
      </nav>
      {/* </div> */}

      <Search
        className="search"
        // prefix={prefix}
        placeholder="Type here to search"
        allowClear
        onSearch={onSearch}
      />

      <nav className="nav__icons">
        <Space size="middle">
          <IoNotifications className="icon" />
          <AiFillSetting className="icon" />
          <div className="user-nav">
            <Avatar
              size="small"
              shape="square"
              style={{ backgroundColor: "#87d068" }}
              icon={<AiOutlineUser />}
            />
            <span className="user-nav__name">Richard</span>
          </div>
        </Space>
      </nav>
    </Header>
  );
};

export default Index;
