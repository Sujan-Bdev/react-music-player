import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import MusicPlayer from "./MusicPlayer";
import TopArtists from "./TopArtists";
import Genres from "./Genres";
import TopChart from "./TopChart";
import TrendingHits from "./TrendingHits";

import ChillHop from "data";

const songsList = ChillHop();
const topSongs = songsList.slice(0, 4);
const trendingSongs = songsList.slice(1,4);

const Index = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songsList[0]);

  const handlePlay = (currentSong, currentIndex) => {
    setCurrentSong(currentSong);
    setTrackIndex(currentIndex);
  };

  const handleNext = () => {
    if (trackIndex < topSongs.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const handlePrev = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(topSongs.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  useEffect(() => {
    setCurrentSong(topSongs[trackIndex]);
  }, [trackIndex]);

  return (
    <div className="home">
      <TrendingHits trendingSongs = {trendingSongs} currentSong = {currentSong}  />
      <div className="home__library">
        <div className="container">
          <Row justify="center" className="library" gutter={[24, 32]}>
            <Col
              sm={24}
              xs={{ span: 24, order: 2 }}
              lg={{ span: 16, order: 1 }}
              className="library__chart"
            >
              <Row gutter={[12, 24]} className="charts">
                <Col span={24}>
                  <TopArtists />
                </Col>
                <Col sm={24} xs={24} md={10}>
                  <Genres />
                </Col>
                <Col sm={24} xs={24} md={14}>
                  <TopChart topSongs={topSongs} selectSong={handlePlay} />
                </Col>
              </Row>
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 20, order: 1 }}
              lg={{ span: 7, order: 2 }}
            >
              <MusicPlayer
                currentSong={currentSong}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Index;
