import React from "react";
import { AiFillPlayCircle, AiFillPlusSquare } from "react-icons/ai";

const SongRow = ({ song }) => {
  return (
    <div className="song-row">
      <div className="song-row__rank">
        <h4>{song.rank}</h4>
      </div>
      <img src={song.cover} alt={song.name} className="song-row__image" />
      <div className="song-row__info">
        <h3>{song.name} </h3>
        <p>{song.artist.map((singer) => singer).join(",")}</p>
      </div>
      <p className = "song-row__length">{song.length} </p>
      <div className = "song-row__icons">
        <AiFillPlayCircle className = "song-row__icons--play"/>
        <AiFillPlusSquare className = "song-row__icons--add"/>
      </div>
    </div>
  );
};

export default SongRow;
