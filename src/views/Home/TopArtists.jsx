import React from "react";
import { Button } from "antd";
import { artists } from "data.js";

const TopArtists = () => {
  return (
    <div className="home-top-artists">
      <div className="charts__title">
        Top Artists
        <Button size="small" className="btn--list">
          see all
        </Button>
      </div>

      <div className="container">
        <div className="artists">
          {artists.map((artist) => (
            <div className="artist" key={artist.id}>
              <img src={artist.image} alt="artist" className = "artist__img" />
              <p className="artist__name">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
