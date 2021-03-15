import React from "react";
import { Row, Col } from "antd";
import MusicPlayer from "./MusicPlayer";
import TopArtists from "./TopArtists";
import Genres from "./Genres";
import TopChart from "./TopChart";
import TrendingHits from "./TrendingHits";

const index = () => {
  return (
    <div className="home">
   <TrendingHits/>
      <div className="home__library">
        <div className="container">
          <Row  className = "library">
            <Col sm = {24} xs = {24} lg = {16}  className = "library__chart" >
              <Row gutter = {[12,24]} className ="charts">
                <Col span = {24}>
                  <TopArtists />
                </Col>
                <Col sm = {24} xs = {24} md = {10}>
                  <Genres />
                </Col>
                <Col sm = {24} xs = {24} md = {14}>
                  <TopChart />
                </Col>
              </Row>
            </Col>
            <Col flex = {1}>
              <MusicPlayer />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default index;
