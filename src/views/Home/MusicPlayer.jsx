import React, { useState, useEffect, useRef } from "react";
import { Slider, Button } from "antd";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { BsArrowRepeat, BsCollectionPlayFill } from "react-icons/bs";

const MusicPlayer = ({ currentSong, handleNext, handlePrev }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setisShuffle] = useState(false);

  const audio = useRef();

  const toggle = () => {
    audio.current.paused ? audio.current.play() : audio.current.pause();
  };

  const secondsToMinutes = (seconds) =>
    Math.floor(seconds / 60) + ":" + ("0" + Math.floor(seconds % 60)).slice(-2);

  const handleProgress = (value) => {
    const seekTime = (value * duration) / 100;
    audio.current.currentTime = seekTime;
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const playAgain = () => {
    isRepeat ? (audio.current.loop = true) : (audio.current.loop = false);
    
  };

  useEffect(() => {
    playAgain();
  }, [isRepeat])

  useEffect(() => {
    setIsPlaying(true);
    audio.current.play();
  }, [currentSong]);

  return (
    <div className="home-music-player">
      <audio
        ref={audio}
        src={currentSong.audio}
        preload="true"
        onEnded={isRepeat ? playAgain : handleNext}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      />
      <div className="player__title">
        <h3 className="player__title--main">Player</h3>
        <BsCollectionPlayFill />
      </div>
      <div className="player__song-info">
        <div className="song-card">
          <img
            className="song-card__img"
            src={currentSong.cover}
            alt="song-cover"
          />
          <h3 className="song-card__title">{currentSong.name}</h3>
          <p className="song-card__artist">
            {" "}
            {currentSong.artist.map((singer) => singer).join(",")}{" "}
          </p>
        </div>
      </div>
      <div className="slider-wrapper">
        <span className="time-stamp">{secondsToMinutes(currentTime)} </span>
        <Slider
          value={duration ? (currentTime * 100) / duration : 0}
          onChange={handleProgress}
        />
        <span className="time-stamp">{secondsToMinutes(duration)}</span>
      </div>
      <div className="player__controls">
        <Button
          type="ghost"
          shape="circle"
          icon={<BsArrowRepeat className="ctrl__icon" />}
          className={
            isRepeat
              ? "player__controls-btn btn--active"
              : "player__controls-btn"
          }
          onClick={handleRepeat}
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiSkipPrevious className="ctrl__icon" />}
          className="player__controls-btn"
          onClick={handlePrev}
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
          onClick={(e) => {
            setIsPlaying(!isPlaying);
            toggle();
          }}
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiSkipNext className="ctrl__icon" />}
          className="player__controls-btn"
          onClick={handleNext}
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
