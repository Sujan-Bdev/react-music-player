import React from "react";
import { Button } from "antd";
import ChillHop from "data";
import SongRow from "components/SongRow";

const songList = ChillHop();

const topSongs =  songList.slice(0,4)

const TopChart = () => {
  return (
    <div className="home-top-charts">
      <div className="charts__title">
        Top Charts
        <Button size="small" className="btn--list">
          see all
        </Button>
      </div>

      <div className="top-charts__list">
        {songList.map((song) => (
          <SongRow song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};

export default TopChart;
