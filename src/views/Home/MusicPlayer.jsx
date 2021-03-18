import React, { useState,useEffect, useRef } from "react";
import { Slider, Button } from "antd";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { BsArrowRepeat, BsCollectionPlayFill } from "react-icons/bs";


const MusicPlayer = ({currentSong, handleNext, handlePrev}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef();

  const toggle = () => {
    if(audio.current.paused){
      audio.current.play()
    } else{
      audio.current.pause()
    }
  }

//  useEffect(() => {
//    audio.current.play()
//  },[])

  useEffect(() => {
    setIsPlaying(true)
    audio.current.play()
  }, [currentSong])




  return (
    <div className="home-music-player">
      <audio
        ref={audio}
        src={currentSong.audio}
        preload = "true"
        
        
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
          <p className="song-card__artist"> {currentSong.artist.map(singer => singer).join(",")} </p>
        </div>
      </div>
      <div className="slider-wrapper">
        <span class="time-stamp">2:35</span>
        <Slider defaultValue={30} />
        <span class="time-stamp">1:02</span>
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
          onClick={(e) => {setIsPlaying(!isPlaying); toggle()}}
        />
        <Button
          type="ghost"
          shape="circle"
          icon={<BiSkipNext className="ctrl__icon" />}
          className="player__controls-btn"
          onClick = {handleNext}
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
