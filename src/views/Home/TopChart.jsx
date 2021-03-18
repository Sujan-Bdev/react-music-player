import React from "react";
import { Button, Space, Table } from "antd";
import {
  AiFillPlayCircle,
  AiFillPlusSquare,
  AiOutlineClockCircle,
} from "react-icons/ai";


const TopChart = ({ selectSong,topSongs }) => {

  const handleClick = (currentSong,index) => {
    selectSong(currentSong,index);

  };
  const columns = [
    {
      title: "rank",
      dataIndex: "rank",
      key: "rank",
    },

    {
      title: "Title",
      key: "title",
      render: (text, record) => (
        <div className="song--detail">
          <img src={record.cover} alt="song" />
          <div className="song">
            <h3>{record.name}</h3>
            <p>{record.artist.map((singer) => singer).join(",")}</p>
          </div>
        </div>
      ),
    },

    {
      title: <AiOutlineClockCircle />,
      key: "length",
      dataIndex: "length",
    },

    {
      title: "Action",
      key: "action",
      align: "right",
      render: (text, record, index) => (
        <Space size="small">
          <Button
            className="btn btn--play"
            icon={<AiFillPlayCircle />}
            onClick={() => handleClick(record,index)}
          />

          <Button
            className="btn btn--playlist-add"
            icon={<AiFillPlusSquare />}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="home-top-charts">
      <div className="charts__title">
        <h3 className="charts__title--main">Top Charts</h3>
        <Button size="small" className="btn--list">
          see all
        </Button>
      </div>

      {/* <div className="top-charts__list"> */}
      {/* {topSongs.map((song) => (
          <SongRow song={song} key={song.id} />
        ))} */}

      {/* </div> */}

      <Table
        columns={columns}
        dataSource={topSongs}
        pagination={false}
        showHeader={false}
        size="small"
        className="songList__table"
      />
    </div>
  );
};

export default TopChart;
