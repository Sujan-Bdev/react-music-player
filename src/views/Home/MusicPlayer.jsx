import React, { useState } from "react";
import { Row, Col, Button, Card } from "antd";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { BsArrowRepeat, BsCollectionPlayFill } from "react-icons/bs";

const { Meta } = Card;
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="home-music-player">
      <div className="player__title">
        <h3 className="player__title--main">Player</h3>
        <BsCollectionPlayFill />
      </div>
      <div className="player__song-info">
        <div className="song-card">
          <img
            className="song-card__img"
            src="https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg"
            alt="song-cover"
          />
          <h3 className="song-card__title">Bad Guy</h3>
          <p className = "song-card__artist"> Billie Eilish </p>
        </div>
      </div>

      <div className="player__controls">
        <Button
          type="ghost"
          shape="circle"
          icon={<BsArrowRepeat className="ctrl__icon" />}
          className="player__controls-btn"
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiSkipPrevious className="ctrl__icon" />}
          className="player__controls-btn"
        />
        <Button
          type="ghost"
          shape="circle"
          icon={
            isPlaying ? (
              <AiFillPauseCircle className="ctrl__icon ctrl__icon--play" />
            ) : (
              <AiFillPlayCircle className="ctrl__icon ctrl__icon--play" />
            )
          }
          size="large"
          className="player__controls-btn"
          onClick={(e) => setIsPlaying(!isPlaying)}
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiSkipNext className="ctrl__icon" />}
          className="player__controls-btn"
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiShuffle className="ctrl__icon" />}
          className="player__controls-btn"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
